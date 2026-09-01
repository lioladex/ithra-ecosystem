# Narrative Engine — โครงสร้างระบบ Journey of Confluence

สรุปกลไกเชิงระบบ (ไม่ใช่กฎการเขียน — ดู `writing-style.md` สำหรับเรื่องนั้น) ของ visual-novel stepper ที่ขับเคลื่อน `data/journey.js` + `data/skillSystem.js` + ระบบ species lore tier ใน `index.html` มาจากคอมเมนต์ในโค้ดจริง รวมไว้ให้ AI ที่ต้องแก้/เขียนเนื้อหาใหม่เข้าใจกลไกก่อนแตะโค้ด

---

## โครงสร้างเนื้อเรื่อง

`JOURNEY_STEPS` (array) คือลำดับ step ทั้งหมดของทุกบท แต่ละ step มี `id` แบบ string ที่**ห้ามเปลี่ยนหรือใช้ซ้ำเด็ดขาด** เพราะ progress ของผู้เล่นอ้างอิงด้วย id ไม่ใช่ index — แทรก step ใหม่ตรงกลางเนื้อเรื่องได้เสมอโดยไม่พัง save เก่า

`JOURNEY_CHAPTERS` (array) คือ metadata ระดับบท แต่ละ object มี:
```js
{
    num: 3, title: "ความทรงจำแรก", range: "T+21 → T+30",
    startId: "herd-watch",       // id ของ step แรกในบท
    endId: "__end_ch3__",         // id พิเศษที่ใช้ mark ว่าบทจบแล้ว
    closeTag: "// ...", closeText: "...", nextLabel: "...",
    reflections: [...] // หรือ function() {...} — ดูหัวข้อ reflections ด้านล่าง
}
```

จังหวะการเล่าตั้งใจให้ "พัฒนา" ไปพร้อมกับตัว Confluence:
- STEP 0 ไม่มีสรรพนาม ไม่มี "คุณ" เลย (ระยะ 0 — ก่อนตื่นรู้)
- STEP 1 "คุณ" ปรากฏขึ้นครั้งแรกตรงจุดตื่นรู้ (ระยะ 1)
- STEP 2 ยุคความรู้สึกนำทาง time-skip เข้าสู่ร่าง Luvenn ที่ POI-V01
- STEP 3-5 ฉาก T-0 → T+3 ตรงกับเส้นเวลาที่วิเคราะห์ไว้ใน `memory-and-transformation.md`

## Field ของ step หนึ่ง (`JOURNEY_STEPS[i]`)

| Field | ความหมาย |
|---|---|
| `id` | string ห้ามซ้ำ/ห้ามเปลี่ยน (ดูข้างบน) |
| `tag` | ป้ายแสดงบนหน้าจอ เช่น `"T+17 — การล่าที่มองจากด้านบน"` |
| `key` | boolean — mark step สำคัญของเนื้อเรื่อง (แสดงผลต่างจาก step รอง) |
| `paragraphs` | array ของ string หรือ **function ที่ return array** (ใช้ function เมื่อเนื้อหาต้องแยกทางตามตัวเลือกก่อนหน้า — เช็คจาก `journeyExploredMap['<step-id>']['<action-id>']`) |
| `sysnote` | บรรทัด `[LOG]` แบบ voice ผู้สังเกต (ดูกฎในหมวด sysnote ของ `writing-style.md`) |
| `actions` | array ของ action ที่กดได้ 1 ครั้งต่อ id (ดูหัวข้อ AP ด้านล่าง) |
| `choice` | ทางแยกแบบตัวเลือกบังคับ (ไม่ใช่ optional action) มี `question` + `options[]` ที่แต่ละอันมี `correct: true/false` |
| `continueLabel` | ข้อความปุ่ม "ต่อไป" |
| `unlocksTier` | `{ IMAGE_KEY: tierNumber }` — ปลด species lore tier (ดูหัวข้อถัดไป) |
| `switchHost` | เปลี่ยนร่างที่ Confluence กำลังจำลองอยู่ (ดู `memory-and-transformation.md` เรื่อง cellular re-templating) |
| `recoversAP` | `true` หรือ `{ amount, label, flavor }` — ฟื้น AP เมื่อเข้าถึง step นี้ครั้งแรก |

### `actions[]` — ตัวเลือกสำรวจใน 1 step

```js
actions: [
    {
        id: "watch-encircle", prompt: "👁 ดูจังหวะที่พวกมันแยกกันเข้าล้อม",
        apCost: 1,
        teachesSkill: "PACK_HUNT",  // optional — สอน skill (ดู SKILL_DEFINITIONS ด้านล่าง)
        unlockKey: "OZGRUN",         // optional — ปลด species ตัวใหม่เข้า known list (tier 0)
        text: "..."                    // เนื้อหาที่โชว์เมื่อกดปุ่มนี้
    }
]
```

`pool` เป็นทางเลือกของ `actions[]` แบบสุ่ม — action หนึ่งมี `pool: [...]` แทน `text` ตรงๆ เมื่อผลลัพธ์ควรสุ่มได้หลายแบบ (เช่น `scan-area` ที่ T-0 สุ่มเจอสิ่งมีชีวิตต่างกันได้)

## ระบบ Species Lore Tier (5 ชั้น)

Creature ที่ยังไม่ถูกกล่าวถึงในเนื้อเรื่องแสดงเป็นการ์ดเงา "??? UNKNOWN SPECIES" ใน Species Database เมื่อ "รู้จัก" แล้ว (`unlockKey` หรือ `unlocksTier` ครั้งแรก, tier >= 0) ข้อมูลก็ยังไม่เปิดครบทันที แบ่งเป็น 5 ชั้น:

| Tier | Label (`LORE_TIER_LABELS`) | เปิดข้อมูลส่วนไหน |
|---|---|---|
| 0 | พบตัวอีกครั้ง (SIGHTING) | รู้จักแค่ว่ามีตัวนี้อยู่ |
| 1 | เห็นรูปร่างชัดเจนขึ้น (ANATOMY) | field `head`/`body`/`limbs`/`skin`/`pal` |
| 2 | สังเกตพฤติกรรมได้แล้ว (BEHAVIOR) | field `social`/`combat`/`abilities`/`foodChain` |
| 3 | วิเคราะห์เชิงลึกสำเร็จ (DEEP ANALYSIS) | field `mutationFull`/`dangerDetail` |
| 4 | เข้าใจครบทุกด้านแล้ว (FIELD DOSSIER) | field `extinction`/`confusion`/`notes` |

ปลด tier N แปลว่าปลด 0..N ทั้งหมดพร้อมกันเสมอ (tier สูงขึ้นเรื่อยๆ ไม่มีวันลดลง) — บันทึกใน `localStorage` คีย์ `ithra_known_species_tiers_v1`

**ตัวอย่างการใช้จริง**: field `unlocksTier: { LUVENN: 1 }` บน step `verath-arrival` แปลว่าเมื่อถึง step นี้ Luvenn ถูกปลด tier 1 ทันที (Confluence รู้กายวิภาคตัวเองเพราะ "เป็น" มันเองแล้ว) — เขียน field นี้ทุกครั้งที่ step หนึ่งเผยข้อมูลใหม่เกี่ยวกับสิ่งมีชีวิตหนึ่งจริงๆ ให้ตรงกับสิ่งที่ paragraph บรรยาย ห้ามปลด tier ที่ยังไม่มีเนื้อหารองรับในฉาก

DEV MODE (toggle ใน index.html) ให้ดูข้อมูลทั้งหมด (tier 4) ระหว่างพัฒนา ไม่ถือเป็นการปลดล็อกจริง ไม่เขียนลง `knownTiers`

## Visual Data unlock (เพิ่ม 2026-09-01)

"รู้จัก" (tier >= 0) ไม่ได้แปลว่า "เคยเห็นตัวจริงแบบ Direct Visual" เสมอไป — บางจุดในเนื้อเรื่องเป็นแค่ร่องรอยทางอ้อม (กลิ่น เสียง) ที่ไม่ควรปลดรูปโปรไฟล์จริงให้ ระบบนี้แยก state ออกจาก `knownTiers` เป็นคีย์ localStorage ต่างหาก (`ithra_visual_confirmed_v1`, ตัวแปร `visualConfirmed` ใน index.html)

**ค่าเริ่มต้น (default) คือปลด Visual Data พร้อม tier เสมอ** — ต้องตั้งใจแท็ก `indirect: true` บน action/pool entry ใน `data/journey.js` เท่านั้นถึงจะงดปลดให้ (กลับด้านจาก "ต้องแท็กทุกจุดที่เป็นภาพ" เป็น "แท็กเฉพาะข้อยกเว้นที่ไม่ใช่ภาพ" เพื่อลดภาระการไล่แก้ของเก่า):

```js
{
    unlockKey: "KORRUNE",
    indirect: true, // แค่ได้กลิ่น ไม่เห็นแม้แต่เงา
    text: `ลมพัดพากลิ่นแปลกปลอมบางอย่างผ่านมา...`
}
```

`unlockSpeciesTier(keys, tier, opts)` รับ `opts.indirect` เพิ่มจากเดิม — ถ้า `true` จะปลด tier ตามปกติแต่ไม่ปลด `visualConfirmed[key]` ถ้าสิ่งมีชีวิตนั้นได้ Direct Visual จริงในภายหลัง (ไม่ว่าจะ tier เพิ่มขึ้นหรือ tier เท่าเดิม) จะปลด Visual Data ให้ทันทีที่เรียกแบบไม่มี `opts.indirect`

การ render ต้องเช็ค `isVisuallyConfirmed(imageKey)` เพิ่มจาก `isSpeciesKnown(imageKey)` เดิม — ทั้งใน species-card grid (`renderSpeciesGrid`) และหน้า detail (`loadCreatureImage`) ถ้ารู้จักแล้วแต่ยังไม่ Visual Confirmed จะโชว์ป้าย "NO VISUAL DATA" แทนรูปจริง แม้ข้อมูล lore tier อื่นๆ จะเปิดตามปกติ

## ระบบชื่อชั่วคราว (nickname) — implement แล้ว 2026-09-01

ทุกสิ่งมีชีวิตทั้ง 21 ตัวมี field `nickname` แล้ว (มุมมองไร้เดียงสาของ Confluence เอง ตามกฎข้อ 2 ของ `writing-style.md`) **แสดงชื่อเล่นแทนชื่อจริงเสมอเป็นค่าเริ่มต้น** เพราะ Confluence ไม่รู้จักชื่อทางการของสิ่งใดเลยจนกว่ามนุษย์จะเข้ามาในเนื้อเรื่อง (ยังไม่เกิดขึ้นในบทที่เขียนแล้ว)

**กลไก reveal**: `revealRealName(keys)` ใน index.html รับ array ของ imageKey — ปลดชื่อจริง**ทีละตัว**ตามฉากที่มนุษย์เป็นคนเปิดเผย/ตั้งชื่อสิ่งมีชีวิตนั้นๆ **ไม่ใช่ปลดพร้อมกันทั้งหมด** เมื่อมนุษย์เข้าเรื่อง — การเข้ามาของมนุษย์เป็นแค่ "ประตูที่เปิดให้เริ่มมีการเปิดเผยชื่อได้" จากนั้นแต่ละตัวจะได้ชื่อทางการทีละตัวตามอิทธิพลของมนุษย์ในแต่ละฉากต่อไป (เขียนตอนไหน เรียก `revealRealName(['KARVOS'])` ตอนนั้น) — field `nickname` เก็บชื่อที่ Confluence ใช้เรียกเอง ส่วน `name` คือชื่อทางการที่มนุษย์ในเรื่องเป็นคนตั้ง

สองเคสพิเศษ:
- **Luvenn** (ร่างตัวเอกเอง) ใช้ `nickname: "ร่างสี่ขา"` แทน "ร่างเดิม" เพราะตอนนี้ยังเป็นร่างปัจจุบันอยู่
- **Thessek** (คู่ silhouette กับ Karvos) ใช้ `nickname: "เจ้าเงาที่คุ้นเคย"` ตั้งใจไม่ให้ซ้ำกับ nickname ของ Karvos เป๊ะ แม้จะสับสนกันได้ตามกลไกเนื้อเรื่อง

ยังไม่มีจุดเรียก `revealRealName()` จริงในเนื้อเรื่อง ณ ตอนนี้ (รอบทที่มนุษย์เข้าเรื่อง) — เมื่อเขียนถึงจุดนั้น อย่าลืมเพิ่ม replay logic ให้ `nameRevealed` ตอนกระโดดข้าม checkpoint ด้วย (ดูคอมเมนต์ใน `resetKnownSpecies()`)

## ระบบ AP (Action Point) / Skill

มาจาก `data/skillSystem.js` — ต้องโหลดก่อน `data/journey.js` เสมอ

### `CREATURE_PROFILES` — โปรไฟล์ร่างที่ Confluence สวมได้

```js
KARVOS: {
    organs: ["ขาสี่ข้าง", "ขาสี่ข้างสำหรับวิ่งไล่ระยะไกล"],
    sizeTier: 4, frame: 'normal', apMax: 3,
    recoveryAction: {
        label: "ซุ่มนิ่งสะสมแรง", apRestored: 2,
        flavor: "หมอบนิ่งในโคลนเย็น ปล่อยให้จังหวะหัวใจช้าลงทีละนิดจนกล้ามเนื้อคลายตัวเต็มที่"
    }
}
```

- `apMax` มาจาก `sizeTier` เดียวกับคอลัมน์ "ระดับ" ใน field `size` ของ `creatures/*.js` ตรงๆ: **tier 1-2 → AP 2 · tier 3-4 → AP 3 · tier 5 → AP 4 · tier 6 → AP 5**
- `frame` (light/normal/heavy) อ้างจาก field `mutation`/`prompt` เดิมของสิ่งมีชีวิตนั้น (เช่น Luvenn "hollow-boned build", Skyther "เบาผิดปกติ") เตรียมไว้เป็นตัวคูณ cost ในอนาคต — ยังไม่มี action ไหนใช้จริง
- `organs` คือรายการอวัยวะที่ร่างนั้นมีจริง ใช้คู่กับ `requiresOrgan` ของ `SKILL_DEFINITIONS` — ทักษะที่ "เข้าใจแล้ว" (learned) ยังใช้จริงไม่ได้ถ้าร่างปัจจุบันไม่มีอวัยวะที่ทักษะนั้นต้องใช้ (เช็คด้วย `skillUsable()` ใน `data/journey.js`) **ชื่ออวัยวะต้องสะกดตรงกับ `requiresOrgan` เป๊ะๆ เพราะเทียบกันด้วย string ตรงๆ**
- `recoveryAction` คือวิธีฟื้นฟู AP ตามพฤติกรรมจริงของสายพันธุ์นั้น (in-fiction) แทนการฟื้นตามเวลา — `apRestored: 0` = ไม่มีการฟื้นฟูปกติ (เช่น Korrune)

### `SKILL_DEFINITIONS` — ทักษะที่เรียนรู้ผ่าน action "สังเกต"

```js
PACK_HUNT: {
    name: "การล่าเป็นฝูง (Pack Hunt)",
    progressLabel: "พยายามทำความเข้าใจจังหวะการประสานงานบางอย่างระหว่างพวกมัน",
    requiresOrgan: "ขาสี่ข้างสำหรับวิ่งไล่ระยะไกล",
    obsNeeded: 5,
    learnedLabel: "เข้าใจการล่าเป็นฝูง"
}
```

- เรียนรู้ผ่าน `teachesSkill` บน action ระหว่าง encounter กับสิ่งมีชีวิตที่มีทักษะนั้น (สังเกตซ้ำหลายครั้งสะสม `obsNeeded`)
- `obsNeeded` อ้างจาก Alien Intensity Tier ของสิ่งมีชีวิตที่สอน (ดู `creature-design.md`): ยิ่ง Tier สูง ยิ่งเป็นกลไกที่ไกลจากสัญชาตญาณเดิม ยิ่งต้องสังเกตซ้ำมากขึ้น — **Tier I → 2 ครั้ง · Tier II → 3 ครั้ง · Tier III-IV → 4-5 ครั้ง**
- `name` ใช้แสดงตอน "รู้แล้ว" เท่านั้น (dev/debug และหลัง learned) — ห้ามโชว์ตอนยังไม่ครบ เพราะ Confluence เองก็ยังไม่รู้ว่าสิ่งที่กำลังสังเกตอยู่คืออะไร (สอดคล้องกฎข้อ 1 ใน `writing-style.md`)
- ทักษะที่ "เข้าใจแล้ว" ส่งผ่านข้ามร่างได้ (เหมือน "จังหวะการเคลื่อนไหว" ใน `memory-and-transformation.md`) แต่ไม่ใช่ organ — ต้องมี organ รองรับในร่างปัจจุบันด้วยถึงจะ "ใช้งานจริง" ได้

## เช็คก่อนเขียน step ใหม่ (AP budget)

ทุก step ที่มี action ใช้ AP ต้องมี AP เพียงพอให้กดได้ครบทุกปุ่มถ้าต้องการ (หรือออกแบบให้ผู้เล่น "เลือกไม่กด" บางปุ่มอย่างตั้งใจ) — รัน `node scripts/check-journey.js` ก่อน commit เสมอ จะรายงาน WARN ถ้า action ต้องการ AP มากกว่าที่มี ณ จุดนั้น (ดูกฎข้อ 13 ใน `writing-style.md` ด้วย — เรื่องนี้ต้องเช็คก่อนเขียน ไม่ใช่หลังเขียน)

## `reflections` — บทสรุปปิดบท

```js
reflections: [
    { kind: "gain", text: "ฉันได้รู้ถึงการคงอยู่" },
    { kind: "loss", text: "ฉันเสียฝูงที่เคยยืนอยู่ตรงกลางของมัน" }
]
```

หรือเป็น `function()` ที่ return array ต่างกันตาม `journeyHostKey` เมื่อบทนั้นแยกทางจบได้หลายร่าง (ดูตัวอย่างจริงใน Chapter 3 เดิมที่แยก KARVOS/OZGRUN — ดูกฎการเขียนเต็มในข้อ 9 และ 17 ของ `writing-style.md`)

## เช็คก่อน commit

```bash
node scripts/check-journey.js   # โครงสร้าง step/AP/skill
node scripts/check-prose.js     # คำติดปาก/em-dash (ไม่บล็อก แค่รายงาน)
node scripts/check-creatures.js # field ที่จำเป็นของ creature files
```
