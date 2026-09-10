#!/usr/bin/env node
/*
  หา asset รูปภาพใน assets/ ที่ยังไม่ใช่ .jpg (เช่น .png ที่หลุดมาจากขั้นตอน
  generate แล้วไม่เคยถูกแปลง/ย่อขนาดให้ตรงกับที่โค้ดอ้างถึง) แล้วแปลง+บีบอัด
  ให้เป็น .jpg ตามมาตรฐานของโปรเจกต์นี้โดยอัตโนมัติ — จุดกำเนิดบั๊กคือ
  creatures/_imageLibrary.js (และไฟล์ world เทียบเท่า) อ้างถึง <name>.jpg
  เสมอ แต่บางครั้งไฟล์ที่ generate ออกมาจริงเป็น .png ค้างอยู่ ทำให้ภาพ
  404 บนเว็บจริงโดยไม่มีใครสังเกต (เคสแรกที่เจอ: nethrix.png)

  มาตรฐานการบีบอัดของโปรเจกต์ (อ้างอิงจากไฟล์ .jpg ที่มีอยู่แล้ว):
    - resize ให้ด้านยาวสุดไม่เกิน 1200px (ไม่ขยายภาพที่เล็กกว่าอยู่แล้ว)
    - quality 85
    - strip metadata

  ใช้:
    node scripts/fix-image-assets.js               → dry-run รายงานอย่างเดียว
    node scripts/fix-image-assets.js --apply        → แปลงจริง + ลบไฟล์ต้นฉบับ
                                                        (ข้ามไฟล์ที่มี .jpg ชื่อเดียวกันอยู่แล้ว)
    node scripts/fix-image-assets.js --apply --overwrite
                                                     → เหมือน --apply แต่ทับ .jpg เดิมด้วย
                                                        ถ้ามีอยู่แล้ว (ใช้เมื่อ .png ที่เจอ
                                                        คือ re-render ใหม่กว่าที่ตั้งใจแทนที่ของเดิม
                                                        เช่น หลังแก้ prompt แล้ว generate ภาพใหม่)
*/
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const ASSET_DIRS = ["assets/creatures", "assets/world"];
const CONVERTIBLE_EXT = [".png", ".webp", ".jpeg"];
const MAX_DIM = 1200;
const QUALITY = 85;

const apply = process.argv.includes("--apply");
const overwrite = process.argv.includes("--overwrite");

function findConvertibleFiles() {
    const found = [];
    ASSET_DIRS.forEach(rel => {
        const dir = path.join(ROOT, rel);
        if (!fs.existsSync(dir)) return;
        fs.readdirSync(dir).forEach(name => {
            const ext = path.extname(name).toLowerCase();
            if (!CONVERTIBLE_EXT.includes(ext)) return;
            const base = name.slice(0, -ext.length);
            const jpgPath = path.join(dir, base + ".jpg");
            found.push({
                dir: rel,
                srcName: name,
                srcPath: path.join(dir, name),
                jpgPath,
                jpgExists: fs.existsSync(jpgPath)
            });
        });
    });
    return found;
}

function humanSize(bytes) {
    return (bytes / 1024).toFixed(0) + "KB";
}

const files = findConvertibleFiles();

if (!files.length) {
    console.log("ไม่พบไฟล์ .png/.webp/.jpeg ค้างอยู่ใน assets/creatures หรือ assets/world — ผ่าน");
    process.exit(0);
}

console.log(`พบไฟล์ที่ต้องแปลงเป็น .jpg ทั้งหมด ${files.length} ไฟล์:\n`);

let converted = 0;
let skipped = 0;

files.forEach(f => {
    if (f.jpgExists && !overwrite) {
        console.log(`  ⚠ ข้าม ${f.dir}/${f.srcName} — มี ${path.basename(f.jpgPath)} อยู่แล้ว (รันด้วย --overwrite ถ้าตั้งใจให้ทับ)`);
        skipped++;
        return;
    }

    const beforeSize = fs.statSync(f.srcPath).size;

    if (!apply) {
        const note = f.jpgExists ? " (จะทับของเดิม — ใส่ --overwrite ตอน apply)" : "";
        console.log(`  → ${f.dir}/${f.srcName} (${humanSize(beforeSize)}) จะถูกแปลงเป็น ${path.basename(f.jpgPath)}${note}`);
        return;
    }

    try {
        execFileSync("magick", [
            f.srcPath,
            "-resize", `${MAX_DIM}x${MAX_DIM}>`,
            "-quality", String(QUALITY),
            "-strip",
            f.jpgPath
        ], { stdio: "pipe" });

        const afterSize = fs.statSync(f.jpgPath).size;
        fs.unlinkSync(f.srcPath);
        console.log(`  ✓ ${f.dir}/${f.srcName} (${humanSize(beforeSize)}) → ${path.basename(f.jpgPath)} (${humanSize(afterSize)})`);
        converted++;
    } catch (err) {
        console.log(`  ✗ ${f.dir}/${f.srcName} แปลงไม่สำเร็จ: ${err.message.split("\n")[0]}`);
    }
});

if (!apply) {
    console.log(`\nนี่คือ dry-run — ไม่มีไฟล์ถูกแก้ไขจริง รันด้วย --apply เพื่อแปลงและลบไฟล์ต้นฉบับจริง`);
} else {
    console.log(`\nเสร็จแล้ว: แปลงสำเร็จ ${converted} ไฟล์, ข้าม ${skipped} ไฟล์`);
}
