# ITHRA FIELD CODEX — Confluence Project

เว็บไซต์สารานุกรมสิ่งมีชีวิตเอเลี่ยน 14 ตัวของโลก Ithra เป็น static site
ไฟล์เดียว (`index.html`) ที่โหลด data module แยกไฟล์ ไม่มี build step —
เปิด `index.html` ตรงๆ ในเบราว์เซอร์ก็รันได้ทันที และเสิร์ฟผ่าน GitHub Pages

## โครงสร้าง

```
index.html              หน้าเว็บหลักทั้งหมด (markup + CSS + render logic)
creatures/               ข้อมูลสิ่งมีชีวิต 1 ไฟล์ต่อ 1 ตัว — ดู creatures/README.md
  _registry.js            ประกาศ array creaturesData (โหลดก่อนเสมอ)
  _imageLibrary.js         URL รูปภาพ (เสิร์ฟผ่าน jsDelivr CDN จาก assets/)
  <creature>.js            โปรไฟล์เต็มของแต่ละตัว (รวม prompt สำหรับ AI image-gen)
data/                     เนื้อหาข้อความยาวของหน้าเว็บ แยกเป็น module
  ecosystem.js              เนื้อหาส่วน Ecosystem
  memoryMechanics.js        เนื้อหาส่วน Memory Mechanics
  rulebook.js                Design Rulebook (รวม Alien Intensity Scale)
  journey.js                 เนื้อหาส่วน Journey
assets/creatures/         รูปภาพสิ่งมีชีวิต (jpg)
scripts/                  สคริปต์ตรวจสอบข้อมูล (ดูด้านล่าง)
```

`index.html` โหลดไฟล์เหล่านี้ตามลำดับผ่าน `<script src="...">` ใกล้ปิด
`</body>` แล้วตัวแปร global (`creaturesData`, `IMAGE_LIBRARY`, ฯลฯ) จะพร้อม
ใช้งานให้ render logic ในหน้าเดียวกันเรียกใช้

## Deploy

Push เข้า branch `main` แล้ว GitHub Pages จะ build ให้อัตโนมัติ (มี
`.nojekyll` กันไฟล์ที่ขึ้นต้นด้วย `_` โดน Jekyll กรองทิ้ง) รูปภาพเสิร์ฟผ่าน
jsDelivr CDN จาก repo นี้เอง (ดูรายละเอียดใน `creatures/_imageLibrary.js`)

## เพิ่ม/แก้ไขสิ่งมีชีวิต

ดูกฎทั้งหมด (รูปแบบไฟล์, Alien Intensity Scale, สูตร AI image-gen prompt)
ใน [`creatures/README.md`](creatures/README.md)

## ตรวจสอบข้อมูลก่อน commit

```bash
node scripts/check-creatures.js
```

เช็กว่าทุกไฟล์ `creatures/<name>.js` มี field ที่จำเป็นครบ (`id`, `name`,
`status`, และ `prompt` สำหรับตัวที่ไม่ใช่ `DRAFT`) และมี `<script>` อ้างถึง
ใน `index.html` ครบทุกไฟล์
