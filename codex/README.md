# Codex — ดัชนีเอกสารกฎ/ระบบทั้งหมดของโปรเจกต์ Ithra

โฟลเดอร์นี้รวมกฎ/ระบบ/ดีไซน์ทั้งหมดของโปรเจกต์ไว้เป็น Markdown ล้วน เพื่อให้ AI agent (หรือคนใหม่) ศึกษาโปรเจกต์ได้ครบจากจุดเดียว โดยไม่ต้องไล่อ่าน HTML ที่ฝังอยู่ใน `data/*.js` เอง — สร้างขึ้นวันที่ 2026-09-01 โดยแปลงจากเนื้อหาที่กระจายอยู่ทั่วโปรเจกต์

## อ่านตามหมวด

| ไฟล์ | หมวด | ใช้เมื่อ |
|---|---|---|
| [`writing-style.md`](writing-style.md) | Writing | เขียน/รีวิว/ขัดเกลาย่อหน้าเนื้อเรื่อง, action text, sysnote ใน `data/journey.js` (มิเรอร์จาก `.claude/skills/ithra-narrative-style/SKILL.md` — ไฟล์ skill คือ source of truth) |
| [`creature-design.md`](creature-design.md) | Creature Design | สร้าง/แก้ไขไฟล์ `creatures/*.js` — โครงสร้างไฟล์, ระบบ Part Combination, Alien Intensity Scale, กฎ field `abilities`, สูตร AI image-gen prompt (รวมจาก `data/rulebook.js` + `creatures/README.md`) |
| [`world-building.md`](world-building.md) | World Building | ต้องอ้างอิงภูมิศาสตร์/ระบบดาว/ยุคสมัยของ Ithra (แปลงจาก `data/ecosystem.js`) |
| [`memory-and-transformation.md`](memory-and-transformation.md) | Lore Mechanics | เขียนฉากที่เกี่ยวกับสัญชาตญาณข้ามร่าง, การเปลี่ยนร่างของ Confluence, หรือพัฒนาการความทรงจำ (แปลงจาก `data/memoryMechanics.js`) |
| [`narrative-engine.md`](narrative-engine.md) | Systems/Engine | แก้ไข/เพิ่ม step ใหม่ใน `data/journey.js` — โครงสร้าง step/chapter, ระบบ unlock tier, ระบบ AP/skill (สรุปจากคอมเมนต์ใน `data/journey.js` + `data/skillSystem.js` + `index.html`) |

## เอกสารสถานะงาน (ไม่ใช่กฎถาวร — อัปเดตบ่อย)

| ไฟล์ | ใช้เมื่อ |
|---|---|
| [`collaborative-writing-protocol.md`](collaborative-writing-protocol.md) | ก่อนเริ่มเขียนเนื้อหาใหม่ร่วมกับเจ้าของโปรเจกต์ — ขั้นตอนการทำงานทีละ step/Act พร้อมจุดที่ต้องหยุดถาม |
| [`chapter3-redesign-draft.md`](chapter3-redesign-draft.md) | งาน rebuild บทที่ 3 ที่กำลังทำอยู่ — โครง Act/บีต และ checklist ความคืบหน้า |

## ลำดับความสำคัญเมื่อกฎขัดกัน
1. ไฟล์ skill ใน `.claude/skills/` (โหลดอัตโนมัติเข้า context เสมอ) ชนะไฟล์มิเรอร์ใน codex
2. ไฟล์ต้นทาง (`data/rulebook.js`, `data/ecosystem.js`, `data/memoryMechanics.js`, `creatures/README.md`) ชนะไฟล์สรุปใน codex ถ้าพบว่าไม่ตรงกัน — เพราะไฟล์เหล่านั้น render จริงในเว็บไซต์
3. ถ้าพบว่า codex ไม่ตรงกับต้นทางแล้ว ให้ sync codex ให้ตรง ไม่ใช่แก้ต้นทางตาม codex

## เมื่อต้นทางถูกแก้ไข
ถ้าแก้ `data/rulebook.js`, `data/ecosystem.js`, `data/memoryMechanics.js`, `data/skillSystem.js`, `creatures/README.md`, หรือ `.claude/skills/ithra-narrative-style/SKILL.md` ในอนาคต ให้กลับมา sync ไฟล์ codex ที่เกี่ยวข้องด้วย — ไฟล์ในนี้เป็นสำเนาสรุป ไม่ใช่ symlink อัตโนมัติ
