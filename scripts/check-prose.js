#!/usr/bin/env node
/*
  นับ "คำติด" ในเนื้อเรื่อง data/journey.js — คู่กับ scripts/check-journey.js
  (ตัวนั้นตรวจโครงสร้าง ตัวนี้ตรวจสำนวน)

  ที่มา: แนวคิดจากสกิล stop-slop (github.com/hardikpandya/stop-slop) ที่ให้
  ลิสต์คำต้องห้ามกับคะแนนคุณภาพร้อยแก้ว — แต่กฎของมันเขียนมาสำหรับบทความ
  ภาษาอังกฤษ (บังคับประธานเป็นคน, ใช้สรรพนาม "you", ห้ามประโยคที่ฟังดูเป็น
  pull-quote) ซึ่งขัดกับเสียงของเรื่องนี้โดยตรง จึงหยิบมาเฉพาะแนวคิด "นับคำติด
  ของตัวเองแล้วดูตัวเลขจริง" และเปลี่ยนลิสต์เป็นคำติดภาษาไทยที่พบจริงในไฟล์นี้

  รายงานอย่างเดียว ไม่เคย exit 1 — คำพวกนี้ไม่ได้ผิดเสมอไป บางจุดใช้ถูกที่
  สิ่งที่ต้องดูคือ "ความถี่" กับ "ฉากที่กระจุกตัว" ไม่ใช่การมีอยู่ของคำ

  ใช้: node scripts/check-prose.js
*/
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");

/* คำติดที่นับ + คำแนะนำเวลาจะแก้ (ดูสกิล ithra-narrative-style ข้อ 15) */
const CRUTCHES = [
    { word: "ราวกับ", fix: "ตัดทิ้งแล้วบรรยายสิ่งที่เห็นตรงๆ หรือเปลี่ยนเป็นประโยคเปรียบที่เจาะจงกว่า" },
    { word: "เหมือนกับว่า", fix: "ตัดทิ้ง — ปล่อยให้ภาพทำงานเอง" },
    { word: "เลยแม้แต่นิดเดียว", fix: "ตัดทิ้งทั้งวลี ความหมายไม่เปลี่ยน" },
    { word: "เลยสักนิด", fix: "ตัดทิ้งทั้งวลี" },
    { word: "เลยสักครั้ง", fix: "ตัดทิ้ง หรือเก็บไว้เฉพาะจุดที่ 'ไม่เคยเลย' คือใจความจริงๆ" },
    { word: "แม้แต่ครั้งเดียว", fix: "ตัดทิ้ง หรือเปลี่ยนเป็นตัวเลขที่เจาะจง" },
    { word: "ทั้งนั้น", fix: "ตัดทิ้ง" },
    { word: "จริงๆ", fix: "ตัดทิ้ง — ถ้าประโยคต้องยืนยันตัวเองแปลว่ายังไม่หนักแน่นพอ" },
    { word: "อย่างสิ้นเชิง", fix: "ตัดทิ้ง" },
    { word: "อย่างชัดเจน", fix: "ตัดทิ้งแล้วบอกว่าเห็นอะไร" },
    { word: "อย่างแท้จริง", fix: "ตัดทิ้ง" },
    { word: "อย่างประหลาด", fix: "บอกว่ามันประหลาดตรงไหนแทน" },
    { word: "ที่สุดเท่าที่เคย", fix: "ใช้ได้ แต่ซ้ำได้ไม่เกินบทละครั้งสองครั้ง" }
];

const EM_DASH_PER_PARAGRAPHS = 8; // เพดาน: em dash 1 ตัวต่อกี่ย่อหน้า

const ctx = {
    console,
    localStorage: { getItem: () => null, setItem: () => {}, removeItem: () => {} },
    document: { getElementById: () => null },
    creaturesData: []
};
vm.createContext(ctx);
["creatures/_imageLibrary.js", "data/skillSystem.js", "data/journey.js"].forEach(rel => {
    vm.runInContext(fs.readFileSync(path.join(ROOT, rel), "utf8"), ctx, { filename: rel });
});
vm.runInContext(`globalThis.__export = { JOURNEY_STEPS, JOURNEY_CHAPTERS, journeyUnlockedIds };`, ctx);
const { JOURNEY_STEPS: STEPS, JOURNEY_CHAPTERS: CHAPTERS } = ctx.__export;

/* เก็บเฉพาะข้อความที่เป็น "เสียงเล่าเรื่อง" — ย่อหน้า, ผลของ action, รายการใน pool
   ไม่รวม sysnote (เสียงระบบ ใช้เครื่องหมายคนละแบบโดยตั้งใจ) และไม่รวม tag/prompt */
function proseOf(step) {
    const out = [];
    const paragraphs = typeof step.paragraphs === "function" ? step.paragraphs() : step.paragraphs;
    (paragraphs || []).forEach(t => out.push(t));
    (step.actions || []).forEach(a => {
        if (typeof a.text === "function") out.push(a.text());
        else if (a.text) out.push(a.text);
        (a.pool || []).forEach(pick => pick.text && out.push(pick.text));
    });
    if (step.choice) (step.choice.options || []).forEach(o => o.warning && out.push(o.warning));
    return out.map(t => String(t).replace(/<[^>]+>/g, ""));
}

function chapterOfIndex(i) {
    let found = 0;
    CHAPTERS.forEach((ch, n) => {
        const start = STEPS.findIndex(s => s.id === ch.startId);
        if (start >= 0 && i >= start) found = n;
    });
    return found;
}

const perChapter = CHAPTERS.map(ch => ({ ch, paragraphs: 0, emDash: 0, counts: {} }));
const perStep = [];

STEPS.forEach((step, i) => {
    const bucket = perChapter[chapterOfIndex(i)];
    const lines = proseOf(step);
    const stepRow = { id: step.id, paragraphs: lines.length, emDash: 0, hits: [] };

    lines.forEach(line => {
        const dashes = (line.match(/—/g) || []).length;
        bucket.emDash += dashes;
        stepRow.emDash += dashes;
        CRUTCHES.forEach(({ word }) => {
            const n = line.split(word).length - 1;
            if (!n) return;
            bucket.counts[word] = (bucket.counts[word] || 0) + n;
            stepRow.hits.push(...Array(n).fill(word));
        });
    });

    bucket.paragraphs += lines.length;
    if (stepRow.emDash || stepRow.hits.length) perStep.push(stepRow);
});

console.log("คำติดในเนื้อเรื่อง (รายงานอย่างเดียว ไม่บล็อก commit)\n");

perChapter.forEach(row => {
    const limit = Math.ceil(row.paragraphs / EM_DASH_PER_PARAGRAPHS);
    const over = row.emDash > limit ? `  ← เกินเพดาน ${limit}` : "";
    console.log(`บทที่ ${row.ch.num} "${row.ch.title}" — ${row.paragraphs} ท่อนข้อความ`);
    console.log(`  em dash: ${row.emDash}${over}`);
    const words = Object.entries(row.counts).sort((a, b) => b[1] - a[1]);
    if (!words.length) console.log("  คำติด: ไม่พบ");
    else console.log("  คำติด: " + words.map(([w, n]) => `${w} ${n}`).join(" · "));
    console.log("");
});

const worst = perStep
    .map(r => ({ ...r, score: r.emDash + r.hits.length }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);

console.log("ฉากที่กระจุกตัวมากที่สุด (ไล่แก้จากบนลงล่าง)");
worst.forEach(r => {
    const hits = {};
    r.hits.forEach(w => { hits[w] = (hits[w] || 0) + 1; });
    const list = Object.entries(hits).map(([w, n]) => `${w}×${n}`).join(" ");
    console.log(`  ${r.id}: em dash ${r.emDash}${list ? " · " + list : ""}`);
});

const totalCrutch = perChapter.reduce((n, r) => n + Object.values(r.counts).reduce((a, b) => a + b, 0), 0);
const totalDash = perChapter.reduce((n, r) => n + r.emDash, 0);
console.log(`\nรวม: em dash ${totalDash} · คำติด ${totalCrutch}`);
console.log("วิธีแก้แต่ละคำอยู่ในสกิล ithra-narrative-style ข้อ 15");
