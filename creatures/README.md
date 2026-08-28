# Creature Database

ไฟล์ข้อมูลสิ่งมีชีวิตแต่ละตัวของ ITHRA FIELD CODEX — **1 ไฟล์ต่อ 1 ตัว** เพื่อให้แก้ไข/รีวิว/diff ทีละตัวได้ง่าย

## โครงสร้างโฟลเดอร์

| ไฟล์ | หน้าที่ |
|---|---|
| `_registry.js` | ประกาศ `const creaturesData = []` — ต้องโหลดก่อนไฟล์อื่นในโฟลเดอร์นี้เสมอ |
| `_imageLibrary.js` | ประกาศ `const IMAGE_LIBRARY = {...}` (ลิงก์รูปภาพจาก Google Drive) |
| `vorthak.js`, `thessek.js`, `luvenn.js`, `karvos.js`, `skyther.js`, `vashli.js`, `glimmerwing.js` | โปรไฟล์เต็ม (มี field `prompt` สำหรับ AI image-gen) |
| `mistcrawler.js`, `korrune.js`, `threndle.js`, `pallowfin.js`, `dunkrell.js`, `frostmane.js`, `cindergrub.js` | สถานะ `DRAFT` — ยังไม่มี field ครบ/ยังไม่มี `prompt` |

แต่ละไฟล์ `creatures/<name>.js` มีรูปแบบเดียวกัน:

```js
/* <ID> — <ชื่อ> (<STATUS>) */
creaturesData.push({
    id: "...", name: "...", ...
});
```

`index.html` โหลดไฟล์เหล่านี้ตามลำดับผ่าน `<script src="creatures/...">` (ดูส่วน `<!-- Creature Database -->` ใกล้ปิด `</body>`) แล้วตัวแปร `creaturesData` (array) จะพร้อมใช้งานเหมือนเดิมทุกประการ — ไม่ต้องแก้โค้ด render ใดๆ ในหน้าเว็บ

## เพิ่มตัวใหม่ / เปลี่ยนตัวจาก DRAFT → เต็มรูปแบบ

1. สร้าง/แก้ไข `creatures/<slug>.js` ตามรูปแบบด้านบน
2. เพิ่ม `<script src="creatures/<slug>.js"></script>` ต่อจากไฟล์ตัวอื่นใน `index.html` (ถ้ายังไม่มี)
3. ถ้าตัวนั้นมี field `prompt` (AI image-gen) **ต้องเขียนตามกฎด้านล่างเท่านั้น**

## RULE: AI Image-Gen Prompt Style (field `prompt`)

ทุก creature ที่มีสถานะ `ALIVE` / `EXTINCT` (ไม่ใช่ `DRAFT`) ต้องมี field `prompt` เขียนเป็นภาษาอังกฤษ ตามสูตร **2-ย่อหน้าตายตัว** นี้เท่านั้น (อ้างอิงมาตรฐานจาก Vorthak, Thessek, Luvenn, Karvos, Vashli) — ห้ามเขียนสั้นแบบ single-paragraph แบบเก่า (ที่เคยใช้กับ Skyther/Glimmerwing/Vorthak ก่อนอัปเดต และเคยทำให้ภาพที่เจนออกมาหลุดสไตล์ไปจากตัวอื่น)

### ย่อหน้าที่ 1 — ANATOMY (ย่อหน้าเดียวยาว ไม่ขึ้นบรรทัดใหม่) เรียงลำดับ:

1. **Opening line**: ขนาดตัวเทียบของจริง + ท่ายืน/ท่าทาง เช่น `"A [size]-sized alien [creature type] standing X meters at the shoulder, [build description]..."`
2. **Head**: ตา (สี/รูม่านตา/ตำแหน่ง) → จมูก → ปาก/ขากรรไกร → หู → EXTRA organs ทั้งหมด (ยึดตามข้อมูลใน `head[]` ของตัวนั้น)
3. **Body** frame + Spine feature + Tail (ยึดตาม `body[]`)
4. **Limbs**: ขาหน้า/ปีก/แขน แล้วขาหลัง (ยึดตาม `limbs[]`)
5. **Skin**: เนื้อผิวแยกตามส่วน (ยึดตาม `skin[]`)
6. **Pattern**/ลวดลาย (ยึดตาม `pattern`)
7. ประโยค **trade-off** สั้นๆ สรุปจุดแข็ง/จุดอ่อนจาก `mutation` (pro ช่วยให้มันเก่งเรื่องอะไร, con แลกมาด้วยอะไร)
8. **Coloration**: `"Its coloration is a harmonious [main hue] palette, deepened by near-black [shadow hue] shadows in the recesses and lifted by pale [highlight hue] highlights along [feature], with [accent A] tones [where] and [accent B] [where], and a glowing [hl color] highlight reserved only for [hlAt list]."` — ดึงค่าจาก `pal[]` / `hl` / `hlAt` ของตัวนั้นเป๊ะๆ
9. **Closing line**: ท่าทาง/ฉากใน habitat จริงของมัน (บรรยากาศป่าหมอก/ทุ่งหิน/ฯลฯ ให้ตรงกับ field `habitat`)

### ย่อหน้าที่ 2 — RENDER SPEC (บล็อกคงที่ ปรับได้เฉพาะคำในวงเล็บ):

```
Photorealistic 3D creature render, cinematic film-VFX quality,
standing full-body in its natural habitat environment, three-
quarter view, shot with a telephoto lens at eye level, shallow
depth of field with softly blurred background [foliage/terrain],
volumetric god rays [filtering through mist from above / raking
low across the plain], soft naturalistic backlighting that makes
the [glowing feature] glow from within, hyper-detailed micro-
texturing on every [hair/scale] and surface, subsurface
scattering, physically-based rendering, muted natural color
grading with deep shadows, 1:1 square composition, subject
centered and fully visible from head to feet, no readable text.
```

**ข้อยกเว้น**: สิ่งมีชีวิตขนาดจิ๋ว/แมลง (เช่น Glimmerwing) ใช้ตัวแปร "macro photography" ของย่อหน้าที่ 2 แทน (macro lens, extreme close-up, glowing bokeh ของฝูงเบื้องหลัง) แต่ยังต้องคงโครงสร้างย่อหน้าที่ 1 ครบทุกข้อข้างต้น

ห้ามใส่ markup พิเศษ, ห้ามมีข้อความอ่านได้ในภาพ, เขียนเป็นร้อยแก้วต่อเนื่องไม่ใช้ bullet — เพื่อให้ทุกตัวออกมาในโทนภาพเดียวกันเป๊ะ เมื่อสร้างโปรไฟล์ creature ใหม่ (โดยเฉพาะตัวที่ตอนนี้เป็น DRAFT) ให้เขียน prompt ตามกฎนี้เสมอ

### ⚠ ASPECT RATIO — บังคับเสมอ ไม่มีข้อยกเว้น ⚠

ทุก prompt ต้องจบด้วยวลี `"1:1 square composition, subject centered and fully visible from head to feet, no readable text."` (หรือ `"...fully visible, no readable text."` สำหรับตัวแปร macro) แบบคำต่อคำเป๊ะๆ ห้ามตัด ห้ามสลับตำแหน่ง ห้ามเปลี่ยนเป็นสัดส่วนอื่น (16:9, 4:3, portrait ฯลฯ) ไม่ว่ากรณีใด — นี่คือสาเหตุที่เคยทำให้ภาพของ Vorthak หลุดสไตล์ไปจากตัวอื่น (prompt เก่าไม่มีย่อหน้า RENDER SPEC และไม่มีวลีนี้เลย จึงไม่ได้ภาพสี่เหลี่ยมจัตุรัสเหมือนตัวอื่น)

หากเครื่องมือ AI Gen ที่ใช้รองรับ parameter สัดส่วนภาพแยกต่างหาก (เช่น Midjourney `--ar 1:1`) ให้ใส่ต่อท้าย prompt เพิ่มเติมด้วย แต่ห้ามใช้แทนวลีข้อความข้างต้น ต้องมีทั้งสองอย่างคู่กันเสมอ
