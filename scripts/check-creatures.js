#!/usr/bin/env node
/*
  ตรวจสอบไฟล์ creatures/<name>.js ทุกไฟล์ก่อน commit:
  - field ที่จำเป็นครบ (id, name, status)
  - field prompt ต้องมี ถ้า status ไม่ใช่ DRAFT
  - ทุกไฟล์ creatures/<name>.js ต้องถูกอ้างถึงใน index.html ด้วย <script src="...">
  - ไม่มี <script src="creatures/..."> ใน index.html ที่ชี้ไปไฟล์ที่ไม่มีอยู่จริง

  ใช้: node scripts/check-creatures.js
*/
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const CREATURES_DIR = path.join(ROOT, "creatures");
const INDEX_HTML = path.join(ROOT, "index.html");

const SKIP_FILES = new Set(["_registry.js", "_imageLibrary.js"]);
const REQUIRED_FIELDS = ["id", "name", "status"];

let errors = [];

const creatureFiles = fs
    .readdirSync(CREATURES_DIR)
    .filter((f) => f.endsWith(".js") && !SKIP_FILES.has(f));

for (const file of creatureFiles) {
    const filePath = path.join(CREATURES_DIR, file);
    const content = fs.readFileSync(filePath, "utf8");

    for (const field of REQUIRED_FIELDS) {
        const re = new RegExp(`\\b${field}\\s*:`);
        if (!re.test(content)) {
            errors.push(`${file}: ขาด field "${field}"`);
        }
    }

    // abilities เป็น field เสริม (ดู creatures/README.md หัวข้อ "FIELD: abilities") แต่ถ้าใส่
    // มาแล้วแต่ละรายการต้องมี name/type/desc/origin ครบ ไม่งั้น UI จะ render ว่างๆ
    const abilityBlockMatch = content.match(/abilities:\s*\[([\s\S]*?)\n\s*\],?\n/);
    if (abilityBlockMatch) {
        const block = abilityBlockMatch[1];
        const entryCount = (block.match(/\bname\s*:/g) || []).length;
        ["name", "type", "desc", "origin"].forEach((field) => {
            const count = (block.match(new RegExp("\\b" + field + "\\s*:", "g")) || []).length;
            if (count < entryCount) {
                errors.push(`${file}: abilities มี ${entryCount} รายการ แต่ field "${field}" มีแค่ ${count} — บางรายการขาด`);
            }
        });
    }

    const statusMatch = content.match(/status:\s*"([^"]+)"/);
    const status = statusMatch ? statusMatch[1] : null;
    if (status !== "DRAFT" && !/\bprompt\s*:/.test(content)) {
        errors.push(`${file}: status เป็น "${status ?? "?"}" แต่ไม่มี field "prompt"`);
    }
}

const indexContent = fs.readFileSync(INDEX_HTML, "utf8");
const scriptRefs = [...indexContent.matchAll(/<script src="creatures\/([^"]+)"/g)].map(
    (m) => m[1]
);

for (const file of creatureFiles) {
    if (!scriptRefs.includes(file)) {
        errors.push(`${file}: ไม่มี <script src="creatures/${file}"> ใน index.html`);
    }
}

for (const ref of scriptRefs) {
    if (SKIP_FILES.has(ref)) continue;
    if (!fs.existsSync(path.join(CREATURES_DIR, ref))) {
        errors.push(`index.html อ้างถึง creatures/${ref} แต่ไฟล์ไม่มีอยู่จริง`);
    }
}

if (errors.length > 0) {
    console.error(`พบปัญหา ${errors.length} จุด:\n`);
    for (const e of errors) console.error(`  - ${e}`);
    process.exit(1);
}

console.log(`ผ่าน — ตรวจสอบ ${creatureFiles.length} ไฟล์ creature เรียบร้อย`);
