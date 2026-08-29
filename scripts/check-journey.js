#!/usr/bin/env node
/*
  ตรวจสอบ data/journey.js ก่อน commit — คู่กับ scripts/check-creatures.js

  ERROR (ต้องแก้ก่อน commit)
  - id ของ step ซ้ำกัน หรือหายไป (id คือกุญแจของเซฟผู้อ่าน ห้ามซ้ำเด็ดขาด)
  - บทใน JOURNEY_CHAPTERS ชี้ startId/endId ที่ไม่มีอยู่จริง หรือ endId ซ้ำ
  - บทไหนไม่มี reflections (หน้าจอปิดบทต้องมีเสมอ — ดูสกิล ithra-narrative-style ข้อ 9)
  - unlockKey / unlocksTier ชี้ไป imageKey ที่ไม่มีใน IMAGE_LIBRARY
  - tier นอกช่วง 0-4
  - action id ซ้ำกันภายใน step เดียวกัน หรือ requires ชี้ไป action ที่ไม่มีใน step นั้น
  - teachesSkill / requiresSkill ชี้ไป skill ที่ไม่มีใน SKILL_DEFINITIONS
  - skill ที่มีโอกาสสังเกตน้อยกว่า obsNeeded (เรียนให้ครบไม่ได้เลยแม้จะกดทุกปุ่ม)
  - step ที่ไม่มี paragraphs หรือไม่มีทั้ง continueLabel และ choice

  WARN (เตือนเฉยๆ ไม่ทำให้ commit ล้ม)
  - skill ที่มีโอกาสเท่ากับ obsNeeded พอดี (ไม่มี margin เลย — พลาดปุ่มเดียวคือเรียนไม่จบ)
  - step ที่ค่าใช้จ่าย AP รวมของทุก action มากกว่า AP ที่ผู้อ่านมีในจังหวะนั้น

  ข้อหลังนี้จงใจให้เป็นแค่ WARN: ระบบตั้งใจให้ AP ไม่พอกดทุก action อยู่แล้ว
  ผู้อ่านต้องเลือกเองว่าอยากได้ข้อมูลชุดไหน (ดูคอมเมนต์ระบบ action ใน
  data/journey.js) รายงานนี้จึงมีไว้ดู "ต้องแลกกี่ AP" ต่อฉาก ไม่ใช่ข้อผิดพลาด

  ใช้: node scripts/check-journey.js
*/
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const errors = [];
const warns = [];

/* โหลดไฟล์ข้อมูลเข้า sandbox — ไฟล์เหล่านี้เขียนแบบ browser global ล้วน
   (ไม่มี module.exports) จึงรันใน vm context แล้วอ่านตัวแปรออกมาตรงๆ */
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

/* const ที่ประกาศไว้ระดับบนสุดของสคริปต์ใน vm ไม่ไปเกาะกับ context object
   (มันอยู่ใน lexical scope ของ context ไม่ใช่ property ของ globalThis)
   จึงต้องให้สคริปต์ในนั้นยัดใส่ globalThis ให้เองก่อนถึงจะอ่านออกมาได้ */
vm.runInContext(`globalThis.__export = { JOURNEY_STEPS, JOURNEY_CHAPTERS, SKILL_DEFINITIONS, CREATURE_PROFILES, IMAGE_LIBRARY };`, ctx);
const { JOURNEY_STEPS: STEPS, JOURNEY_CHAPTERS: CHAPTERS, SKILL_DEFINITIONS: SKILLS, CREATURE_PROFILES: PROFILES, IMAGE_LIBRARY: IMAGES } = ctx.__export;

/* ---------- step id ---------- */
const seenIds = new Map();
STEPS.forEach((step, i) => {
    if (!step.id) return errors.push(`STEP #${i} ไม่มี id`);
    if (seenIds.has(step.id)) errors.push(`id ซ้ำ: "${step.id}" (STEP #${seenIds.get(step.id)} และ #${i})`);
    seenIds.set(step.id, i);

    const paragraphs = typeof step.paragraphs === "function" ? step.paragraphs() : step.paragraphs;
    if (!Array.isArray(paragraphs) || !paragraphs.length) errors.push(`"${step.id}" ไม่มี paragraphs`);
    if (!step.continueLabel && !step.choice) errors.push(`"${step.id}" ไม่มีทั้ง continueLabel และ choice — ผู้อ่านเดินต่อไม่ได้`);
});

/* ---------- chapters ---------- */
const seenEndIds = new Set();
CHAPTERS.forEach((ch, i) => {
    if (!seenIds.has(ch.startId)) errors.push(`บทที่ ${ch.num}: startId "${ch.startId}" ไม่ตรงกับ step ไหนเลย`);
    if (!ch.endId) errors.push(`บทที่ ${ch.num}: ไม่มี endId`);
    else if (seenEndIds.has(ch.endId)) errors.push(`endId ซ้ำ: "${ch.endId}"`);
    else seenEndIds.add(ch.endId);

    if (!Array.isArray(ch.reflections) || !ch.reflections.length) {
        errors.push(`บทที่ ${ch.num}: ไม่มี reflections — หน้าจอปิดบทจะว่างเปล่า`);
    } else {
        ch.reflections.forEach((r, n) => {
            if (r.kind !== "gain" && r.kind !== "loss") errors.push(`บทที่ ${ch.num} reflection #${n}: kind ต้องเป็น gain หรือ loss (เจอ "${r.kind}")`);
            if (!r.text) errors.push(`บทที่ ${ch.num} reflection #${n}: ไม่มี text`);
        });
    }
    if (i > 0 && seenIds.get(ch.startId) <= seenIds.get(CHAPTERS[i - 1].startId)) {
        errors.push(`บทที่ ${ch.num}: startId อยู่ก่อนบทที่แล้วในอาเรย์ — ลำดับบทกับลำดับ step ต้องตรงกัน`);
    }
});

/* ---------- imageKey / tier ---------- */
function checkImageKey(key, where) {
    if (!IMAGES[key]) errors.push(`${where}: imageKey "${key}" ไม่มีใน IMAGE_LIBRARY`);
}
STEPS.forEach(step => {
    if (step.unlocksTier) {
        Object.entries(step.unlocksTier).forEach(([key, tier]) => {
            checkImageKey(key, `"${step.id}" unlocksTier`);
            if (!Number.isInteger(tier) || tier < 0 || tier > 4) errors.push(`"${step.id}" unlocksTier.${key}: tier ต้องเป็น 0-4 (เจอ ${tier})`);
        });
    }
    if (step.switchHost && !PROFILES[step.switchHost]) errors.push(`"${step.id}" switchHost "${step.switchHost}" ไม่มีใน CREATURE_PROFILES`);
    (step.actions || []).forEach(a => {
        if (a.unlockKey) checkImageKey(a.unlockKey, `"${step.id}"/${a.id} unlockKey`);
        (a.pool || []).forEach((p, n) => {
            if (!p.text) errors.push(`"${step.id}"/${a.id} pool #${n}: ไม่มี text`);
            if (p.unlockKey) checkImageKey(p.unlockKey, `"${step.id}"/${a.id} pool #${n}`);
        });
    });
});

/* ---------- actions ---------- */
STEPS.forEach(step => {
    if (!step.actions) return;
    const ids = new Set();
    step.actions.forEach(a => {
        if (!a.id) return errors.push(`"${step.id}": มี action ที่ไม่มี id`);
        if (ids.has(a.id)) errors.push(`"${step.id}": action id ซ้ำ "${a.id}"`);
        ids.add(a.id);
        if (!a.prompt) errors.push(`"${step.id}"/${a.id}: ไม่มี prompt`);
        if (!a.text && !a.pool) errors.push(`"${step.id}"/${a.id}: ต้องมี text หรือ pool อย่างใดอย่างหนึ่ง`);
        if (a.apCost !== undefined && (!Number.isInteger(a.apCost) || a.apCost < 1)) errors.push(`"${step.id}"/${a.id}: apCost ต้องเป็นจำนวนเต็ม >= 1`);
        if (a.teachesSkill && !SKILLS[a.teachesSkill]) errors.push(`"${step.id}"/${a.id}: teachesSkill "${a.teachesSkill}" ไม่มีใน SKILL_DEFINITIONS`);
        if (a.requiresSkill && !SKILLS[a.requiresSkill]) errors.push(`"${step.id}"/${a.id}: requiresSkill "${a.requiresSkill}" ไม่มีใน SKILL_DEFINITIONS`);
    });
    step.actions.forEach(a => {
        if (a.requires && !ids.has(a.requires)) errors.push(`"${step.id}"/${a.id}: requires "${a.requires}" ไม่มีอยู่ใน step เดียวกัน`);
    });
});

/* ---------- โอกาสเรียนทักษะ ----------
   นับจำนวน action ที่สอนทักษะนั้นทั้งเรื่อง เทียบกับ obsNeeded — ถ้าน้อยกว่า
   คือเรียนไม่จบแน่นอนแม้จะกดครบทุกปุ่มและมี AP ไม่จำกัด */
const chances = {};
STEPS.forEach(step => (step.actions || []).forEach(a => {
    if (a.teachesSkill) chances[a.teachesSkill] = (chances[a.teachesSkill] || 0) + 1;
}));
Object.entries(SKILLS).forEach(([id, def]) => {
    const n = chances[id] || 0;
    if (n < def.obsNeeded) errors.push(`skill ${id}: มีโอกาสสังเกต ${n} ครั้ง แต่ต้องการ ${def.obsNeeded} — เรียนจบไม่ได้`);
    else if (n === def.obsNeeded) warns.push(`skill ${id}: โอกาส ${n} ครั้งเท่ากับที่ต้องการพอดี ไม่มี margin เผื่อผู้อ่านข้ามปุ่ม`);
});

/* ---------- งบ AP ต่อฉาก (รายงานเฉยๆ) ----------
   เดินเรื่องแบบ "กดทุก action ที่กดได้" เพื่อดูว่าแต่ละฉากต้องแลกกี่ AP
   จาก AP ที่มีจริงตอนนั้น — ตั้งใจให้ไม่พอ ผู้อ่านต้องเลือกเอง จึงเป็น WARN */
let host = "LUVENN";
let apMax = PROFILES[host].apMax;
let ap = apMax;
const budget = [];
STEPS.forEach(step => {
    if (step.switchHost) {
        host = step.switchHost;
        apMax = PROFILES[host].apMax;
        ap = Math.min(ap, apMax);
    }
    if (step.recoversAP) {
        const amount = typeof step.recoversAP === "object" ? step.recoversAP.amount : PROFILES[host].recoveryAction.apRestored;
        ap = Math.min(apMax, ap + amount);
    }
    const acts = (step.actions || []).filter(a => !a.restores);
    if (!acts.length) return;
    const cost = acts.reduce((sum, a) => sum + (a.apCost || 1), 0);
    budget.push({ id: step.id, host, cost, ap, actions: acts.length });
    if (cost > ap) warns.push(`"${step.id}": action ทั้งหมดใช้ ${cost} AP แต่มี ${ap}/${apMax} — ผู้อ่านต้องเลือก ${Math.max(0, acts.length - ap)} ปุ่มที่จะไม่ได้กด`);
    ap = Math.max(0, ap - cost);
});

/* ---------- รายงาน ---------- */
console.log(`ตรวจ ${STEPS.length} step · ${CHAPTERS.length} บท · ${Object.keys(SKILLS).length} skill`);
CHAPTERS.forEach((ch, i) => {
    const start = seenIds.get(ch.startId);
    const nextStart = CHAPTERS[i + 1] ? seenIds.get(CHAPTERS[i + 1].startId) : STEPS.length;
    const steps = STEPS.slice(start, nextStart);
    const actions = steps.reduce((n, s) => n + (s.actions || []).length, 0);
    const lines = (ch.reflections || []).length;
    console.log(`  บทที่ ${ch.num} "${ch.title}": ${steps.length} step · ${actions} action · ${lines} ประโยคปิดบท`);
});
Object.entries(SKILLS).forEach(([id, def]) => {
    console.log(`  skill ${id}: โอกาส ${chances[id] || 0} ครั้ง / ต้องการ ${def.obsNeeded}`);
});

if (warns.length) {
    console.log(`\nWARN (${warns.length})`);
    warns.forEach(w => console.log("  ! " + w));
}
if (errors.length) {
    console.log(`\nERROR (${errors.length})`);
    errors.forEach(e => console.log("  x " + e));
    process.exit(1);
}
console.log("\nผ่านทั้งหมด");
