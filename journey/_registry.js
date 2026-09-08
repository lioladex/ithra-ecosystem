/* ประกาศอาเรย์เนื้อหาของ Journey of Confluence — ต้องโหลดก่อนไฟล์อื่น
   ในโฟลเดอร์นี้เสมอ (ดู creatures/_registry.js สำหรับรูปแบบเดียวกัน)
   แต่ละไฟล์ journey/chapterN.js จะ push step object ของบทตัวเองเข้ามา
   ต่อท้ายตามลำดับที่ <script> โหลดใน index.html — ต้องเรียงตามบทเสมอ
   (chapter1 → chapter2 → chapter3 → chapter4 → ...) ห้ามสลับลำดับ
   เพราะโค้ดฝั่ง data/journey.js อ้างอิงตำแหน่งสัมพัทธ์ระหว่างบทผ่าน
   `startId` ของแต่ละบทใน JOURNEY_CHAPTERS (ดู journeyChapterStartIndex/
   journeyChapterLastIndex) ซึ่งสมมติว่า step ของบทหนึ่งอยู่ติดกันเป็น
   ก้อนเดียวในอาเรย์นี้เสมอ */
const JOURNEY_STEPS = [];
