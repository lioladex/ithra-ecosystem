/* =================================================================
   DESIGN RULEBOOK (DIR-04)
   โหลดเข้า container ผ่าน JS (ดู index.html initContentSections())
================================================================= */
const RULEBOOK_HTML = `
            <div class="lead-text">ระบบออกแบบใช้แนวคิด <em style="color:#38bdf8">Part Combination</em> — ประกอบร่างจากอวัยวะแยกส่วน (Slot) แล้วผสมอัตลักษณ์จากสิ่งมีชีวิตจริง ตำนาน และวรรณกรรมเข้าด้วยกัน ทุกอวัยวะต้องมีเหตุผลเชิงวิวัฒนาการรองรับเสมอ</div>

            <div class="section-label">◈ โครงสร้าง SLOT ทั้งหมด</div>
            <table class="data-table">
                <tr><th>ส่วน</th><th>Slot</th><th>หน้าที่</th></tr>
                <tr><td rowspan="5">HEAD</td><td>ดวงตา</td><td>กำหนดอัตลักษณ์การมองเห็น</td></tr>
                <tr><td>จมูก</td><td>กำหนดอัตลักษณ์การรับกลิ่น/หายใจ</td></tr>
                <tr><td>ปาก</td><td>กำหนดอัตลักษณ์การกิน — บ่งชี้ตำแหน่งในห่วงโซ่อาหาร</td></tr>
                <tr><td>หู</td><td>กำหนดอัตลักษณ์การได้ยิน</td></tr>
                <tr><td>Extra Organ ×2</td><td>อวัยวะพิเศษ (เขา, ตาเพิ่ม, หงอน ฯลฯ) — สุ่ม 2 Slot เสมอ</td></tr>
                <tr><td rowspan="4">BODY</td><td>Body Frame</td><td>โครงสร้างร่างกาย/สรีระ — ไม่กำหนดจำนวนแขนขา</td></tr>
                <tr><td>Limb Slot (0-10)</td><td>แต่ละ Slot = อวัยวะ 1 คู่ (แขน/ขา/ปีก/ครีบ/ระยาง) ตำแหน่งไม่ตายตัว</td></tr>
                <tr><td>Spine Slot</td><td>รูปแบบส่วนสันหลัง</td></tr>
                <tr><td>Tail + Utilize</td><td>รูปแบบหางและประโยชน์ใช้สอย (อาจไม่มีก็ได้)</td></tr>
                <tr><td rowspan="3">SURFACE</td><td>Skin</td><td>ผิวแต่ละส่วน (หนัง/เกล็ด/เกราะ) แยกตามบริเวณได้</td></tr>
                <tr><td>Pattern</td><td>ลวดลาย + ตำแหน่งที่ปรากฏ</td></tr>
                <tr><td>Color</td><td>กฎ Split Complementary + Highlight อย่างน้อย 1 สี</td></tr>
            </table>

            <div class="section-label">◈ ตารางขนาด (SIZE MODIFIER)</div>
            <table class="data-table">
                <tr><th>ระดับ</th><th>ขนาด</th><th>ส่วนสูง</th><th>น้ำหนัก</th></tr>
                <tr><td>4</td><td>กลาง (เท่าสุนัขใหญ่)</td><td>60-90 ซม.</td><td>20-60 กก.</td></tr>
                <tr><td>5</td><td>ใหญ่ (เท่าม้า)</td><td>1.5-2 ม.</td><td>200-600 กก.</td></tr>
                <tr><td>6</td><td>ใหญ่มาก (เท่าช้าง)</td><td>2.5-4 ม.</td><td>2-6 ตัน</td></tr>
                <tr><td>7</td><td>ยักษ์ (เท่าวาฬ)</td><td>5-8 ม.</td><td>15-50 ตัน</td></tr>
            </table>
            <div class="note-block">น้ำหนักต้องปรับตามลักษณะโครงร่าง: <strong>โครงเบา</strong> (กระดูกกลวง/ปีก) ลด 30-50% · <strong>โครงหนัก</strong> (เกราะ/กระดูกทึบ) เพิ่ม 30-60% · แรงโน้มถ่วง Ithra ที่ 0.85G ทำให้สิ่งมีชีวิตสูงเพรียวได้มากกว่าโลก</div>

            <div class="section-label">◈ ALIEN INTENSITY SCALE — ระดับความเอเลี่ยน (Tier I–V)</div>
            <div class="note-block">ทุกสิ่งมีชีวิตต้องมี Tier ความเอเลี่ยนกำกับไว้ตั้งแต่ตอนออกแบบ เพื่อคุมว่าจะปรับพื้นผิว/สัดส่วน/โครงสร้างร่างกายให้ประหลาดได้มากแค่ไหน — ตัวที่ผูกกลไกจดจำ/สัญชาตญาณข้ามตัวกันในเนื้อเรื่อง (เช่น Karvos กับ Thessek) ไม่ได้ถูกบังคับด้วย Tier ต่ำสุดอีกต่อไป แต่ใช้ <strong>หมายเหตุเฉพาะตัว</strong> ระบุว่าต้องร่วมลักษณะอะไรกันบ้างแทน (ดูตารางรายตัวด้านล่าง) — ส่วนที่เหลือนอกจากลักษณะที่ระบุไว้ออกแบบได้อิสระตาม Tier ปกติ</div>
            <table class="data-table">
                <tr><th>Tier</th><th>ระดับ</th><th>ขอบเขตที่ปรับได้</th></tr>
                <tr><td>I</td><td>เอเลี่ยนปานกลาง (Moderately Alien)</td><td>ปรับลวดลาย/พื้นผิวได้อิสระมากขึ้น (คริสตัล เกล็ดหินสวิลล์ เส้นเรืองแสงใต้ผิว) เพิ่มความไม่สมมาตรของลาย/สีได้บ้าง</td></tr>
                <tr><td>II</td><td>เอเลี่ยนเข้มข้น (Heavily Alien)</td><td>ปรับโครงหาง/ระยางเสริมให้ผิดแปลกได้ (หางแยกแฉก ระยางคล้ายหนวด) พื้นผิวแบบคริสตัล/ออบซิเดียนสวิลล์เข้มข้น</td></tr>
                <tr><td>III</td><td>เอเลี่ยนสุดขั้ว (Extremely Alien)</td><td>อิสระเต็มที่ ไม่ต้องอิงโครงสร้างสัตว์โลกเลย ปรับรูปทรงหัว สัดส่วน/รูปร่างของแขนขา และพื้นผิวได้ตามต้องการ (จำนวนแขนขาหลักยังต้องเป็นคู่สมมาตร — ดูหมายเหตุด้านล่าง)</td></tr>
                <tr><td>IV</td><td>เอเลี่ยนหลุดกรอบกายวิภาค (Anatomically Unbound)</td><td>หลุดจากตรรกะกายวิภาคสัตว์โลกในแง่โครงสร้าง/พื้นผิว/อวัยวะเสริมได้เต็มที่ (เรขาคณิต/แฟรกทัล, อวัยวะรับรู้พิเศษไม่ต้องเป็นคู่ก็ได้) แต่จำนวนแขนขาหลัก (ปีก/ขา/แขน) ต้องเป็นคู่สมมาตรเสมอ — ดูหมายเหตุด้านล่าง</td></tr>
                <tr><td>V</td><td>เอเลี่ยนเหนือจริง (Reality-Defying / Cosmic)</td><td>ขนาด/สเกลที่ท้าทายตรรกะวัตถุทางกายภาพ รูปทรงที่ผู้สังเกตแทบประมวลเป็น "สิ่งมีชีวิตตัวเดียว" ไม่ได้ในสายตาแรก (จำนวนแขนขาหลักยังต้องเป็นคู่สมมาตรถ้ามีระบุแขนขาชัดเจน)</td></tr>
            </table>
            <div class="note-block warn"><strong>ข้อจำกัดบังคับทุก Tier (เพิ่ม 2026-09-01)</strong>: จำนวนแขนขาหลัก (ปีก/ขา/แขน) ต้องเป็นคู่สมมาตรเสมอ ห้ามใช้จำนวนไม่เป็นคู่ (เช่น ปีก 3 ข้าง ขา 3 ข้าง) ไม่ว่าจะมีเหตุผลเชิงวิวัฒนาการรองรับดีแค่ไหนก็ตาม — เครื่องมือ AI image-gen ที่ใช้จริงไม่สามารถ render จำนวนแขนขาไม่สมมาตรได้แม่นยำ มักดริฟท์กลับไปเป็นคู่มาตรฐานเองแบบสุ่มไม่คงที่ (พบปัญหานี้จริงกับดราฟ Ashkarn ที่ออกแบบปีก 3 ข้าง/ขา 3 ข้างไว้ ต้องแก้ย้อนกลับ) ความไม่สมมาตรที่ยังใช้ได้ทุก Tier คือขนาด/รูปร่าง/หน้าที่ที่ต่างกันระหว่างข้างซ้าย-ขวาของคู่เดิม (ดู Monster Design Toolkit ข้อ 2)</div>
            <table class="data-table">
                <tr><th>ตัวละคร</th><th>Tier</th><th>หมายเหตุเฉพาะตัว (ถ้ามี)</th></tr>
                <tr><td>Vorthak</td><td>IV</td><td>ไม่ผูก silhouette กับ Luvenn เลย — ความเชื่อมโยงอยู่ที่ "เทคนิคการล่าแบบ Counter" ที่หลั่งไหลออกมาทางสัญชาตญาณตอนตัวเอกอยู่ในร่าง Luvenn เท่านั้น ไม่ใช่รูปร่าง (redesign 2026-09-01 — คงขาหน้า/ขาหลัง 2 คู่ไว้เพราะผูกกับท่า combat ที่เขียนไว้แล้วใน journey.js)</td></tr>
                <tr><td>Thessek</td><td>II</td><td>ร่วมกับ Karvos แค่ "รูปร่างท่าทางเดิน 4 ขา เป็นนักล่า ขนาดตัวใกล้เคียงกัน" (common silhouette ที่ก่อความสับสนในฉากตื่นรู้ได้) — ส่วนอื่นออกแบบอิสระ (redesign 2026-09-01)</td></tr>
                <tr><td>Karvos</td><td>I</td><td>ร่วมกับ Thessek ตามเงื่อนไขเดียวกันด้านบน — ส่วนอื่นออกแบบอิสระ</td></tr>
                <tr><td>Luvenn</td><td>I</td><td>ต้องคง "ท่าทางคล้ายกวาง ฟังก์ชันสังเคราะห์แสงเป็นพลังงานหลัก ขนคล้ายใบไม้" — ส่วนอื่นออกแบบอิสระ</td></tr>
                <tr><td>Skyther</td><td>I</td><td>ไม่มี — ไวเวิร์นเรือนยอด ออกแบบอิสระตาม Tier</td></tr>
                <tr><td>Vashli</td><td>I</td><td>ไม่มี — เหยื่อขนาดเล็ก ออกแบบอิสระตาม Tier</td></tr>
                <tr><td>Frostmane</td><td>III</td><td>ต้องคง "ภาพสัตว์กีบขนหนา" ไว้เพื่อให้ contrast กับ Vorthak เห็นผล — ส่วนอื่นออกแบบอิสระ (redesign 2026-09-01)</td></tr>
                <tr><td>Dunkrell</td><td>I</td><td>ไม่มี</td></tr>
                <tr><td>Pallowfin</td><td>I</td><td>ไม่มี — พิจารณาแล้วว่าไม่ต้องปรับ</td></tr>
                <tr><td>Mistcrawler</td><td>I</td><td>ไม่มี</td></tr>
                <tr><td>Threndle</td><td>V</td><td>ไม่มี (redesign 2026-09-01 — รูปทรงที่แท้จริงไม่เคยถูกมองเห็นตรงกัน เพราะกระแสน้ำขึ้นลงซับซ้อนจากดวงจันทร์คู่บิดเบือนแสง)</td></tr>
                <tr><td>Glimmerwing</td><td>II</td><td>ไม่มี</td></tr>
                <tr><td>Korrune</td><td>III</td><td>ไม่มี</td></tr>
                <tr><td>Cindergrub</td><td>IV</td><td>ไม่มี (redesign 2026-09-01 — แก้ขาจาก "4-6 คู่ไม่สมมาตร" เป็น 4 คู่คงที่ตามกฎแขนขาหลักต้องสมมาตร)</td></tr>
                <tr><td>Ashkarn</td><td>IV</td><td>DRAFT — ทดสอบ Tier ใหม่ (ปีก 1 คู่ขนาดต่างกันสุดขั้ว)</td></tr>
                <tr><td>Kethyr</td><td>V</td><td>DRAFT — ทดสอบ Tier ใหม่ (ไม่เคยเห็นตัวเต็ม)</td></tr>
            </table>

            <div class="section-label">◈ MUTATION — ยีนเด่น ⇄ ยีนด้อย</div>
            <div class="note-block"><strong>กฎบังคับ</strong> — ทุกสิ่งมีชีวิตต้องมียีนเด่น 1 อย่างที่สัมพันธ์กับถิ่นอาศัยโดยตรง แลกกับยีนด้อย 1 อย่างที่แย่กว่าปกติ ยีนด้อยควรอยู่คนละระบบกับยีนเด่นเพื่อไม่ให้ขัดกันเอง — <em>ยีนด้อยคือแหล่งกำเนิดพล็อตชั้นดี</em></div>

            <div class="section-label">◈ DANGER RATING TIERS</div>
            <table class="data-table">
                <tr><th>ช่วง %</th><th>ระดับ</th></tr>
                <tr><td>0-20%</td><td style="color:var(--alive)">ไม่มีพิษภัย (Harmless)</td></tr>
                <tr><td>21-40%</td><td>พอระวังตัวได้ (Cautious)</td></tr>
                <tr><td>41-60%</td><td style="color:#ffb84a">อันตราย (Dangerous)</td></tr>
                <tr><td>61-80%</td><td style="color:#ff7a3d">อันตรายสูง (Highly Lethal)</td></tr>
                <tr><td>81-100%</td><td style="color:var(--danger)">จ้าวป่า (Apex Predator)</td></tr>
            </table>

            <div class="section-label">◈ COLOR RULE — SPLIT COMPLEMENTARY</div>
            <div class="swatch-row">
                <div class="swatch"><div class="chip" style="background:#4a7a52"></div><div class="lbl">สีหลัก</div></div>
                <div class="swatch"><div class="chip" style="background:#1c3028"></div><div class="lbl">เฉดเข้ม</div></div>
                <div class="swatch"><div class="chip" style="background:#a8c98a"></div><div class="lbl">เฉดอ่อน</div></div>
                <div class="swatch"><div class="chip" style="background:#8a4a3a"></div><div class="lbl">เสริม A</div></div>
                <div class="swatch"><div class="chip" style="background:#4a4470"></div><div class="lbl">เสริม B</div></div>
                <div class="swatch"><div class="chip" style="background:#6ef2a0;box-shadow:0 0 12px #6ef2a0"></div><div class="lbl">Highlight</div></div>
            </div>
            <div class="note-block">Highlight ใช้เฉพาะจุดที่มีเหตุผลรองรับเท่านั้น (ดวงตา, อวัยวะเรืองแสง, ต่อมพิษ) — ห้ามใช้เกลื่อนทั้งตัว เพราะจะทำให้ภาพขาดจุดโฟกัส</div>

            <div class="section-label">◈ AI PROMPT — STYLE SUFFIX มาตรฐาน</div>
            <div class="pill-row">
                <span class="pill">Photorealistic 3D render</span>
                <span class="pill">ไม่ใช่ painting/illustration</span>
                <span class="pill">1:1 square</span>
                <span class="pill">Telephoto, shallow DOF</span>
                <span class="pill">Volumetric god rays</span>
                <span class="pill">Subsurface scattering</span>
                <span class="pill">Full body visible</span>
            </div>
            <div class="note-block warn">ห้ามใช้คำว่า "concept art", "illustration", "painting", "ArtStation" ในพรอมต์ — จะดึงผลลัพธ์กลับไปเป็นภาพวาดแทน 3D render ต้องยืนอยู่ในสภาพแวดล้อมถิ่นอาศัยจริงเสมอ ไม่ใช่พื้นหลังเปล่า</div>
            <div class="note-block">เอกสารกฎฉบับเต็ม (Workflow 12 ขั้น, Checklist, คลังอัตลักษณ์อ้างอิง) อยู่ในไฟล์ <em>codex/design-codex.md</em></div>
`;
