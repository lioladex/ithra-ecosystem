/* ==================================================================
   IMAGE LIBRARY
   ------------------------------------------------------------------
   รูปภาพทั้งหมดถูกเก็บไว้ในโฟลเดอร์ /assets ของ repo นี้เอง แล้วเสิร์ฟผ่าน
   jsDelivr CDN (ดึงจาก GitHub repo ตรงๆ, มี Access-Control-Allow-Origin: *
   จึงไม่มีปัญหา CORS แบบที่เคยเกิดตอนใช้ Google Drive thumbnail link,
   และมี edge cache ทำให้โหลดเร็วกว่า)

   @main = อัปเดตตามโค้ดล่าสุดของ branch main เสมอ (อาจดีเลย์แคชได้ถึง ~12
   ชั่วโมงหลัง push) ถ้าต้องการ URL ที่ตายตัวไม่เปลี่ยนตามการแก้ไขในอนาคต
   ให้เปลี่ยนจาก "@main" เป็น commit SHA หรือ git tag แทน เช่น
   ".../ithra-ecosystem@a1b2c3d/assets" — ดู jsDelivr docs:
   https://www.jsdelivr.com/documentation#id-github
================================================================== */
const ITHRA_CDN_BASE = "https://cdn.jsdelivr.net/gh/lioladex/ithra-ecosystem@main/assets";

const IMAGE_LIBRARY = {
    VORTHAK: `${ITHRA_CDN_BASE}/creatures/vorthak.jpg`,
    LUVENN: `${ITHRA_CDN_BASE}/creatures/luvenn.jpg`,
    KARVOS: `${ITHRA_CDN_BASE}/creatures/karvos.jpg`,
    THESSEK: `${ITHRA_CDN_BASE}/creatures/thessek.jpg`,
    SKYTHER: `${ITHRA_CDN_BASE}/creatures/skyther.jpg`,
};
