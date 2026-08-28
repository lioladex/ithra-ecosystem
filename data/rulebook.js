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
            <div class="note-block">ทุกสิ่งมีชีวิตต้องมี Tier ความเอเลี่ยนกำกับไว้ตั้งแต่ตอนออกแบบ เพื่อคุมว่าจะปรับพื้นผิว/สัดส่วน/โครงสร้างร่างกายให้ประหลาดได้มากแค่ไหน โดยไม่ทำลาย silhouette ที่ผูกกับกลไกในเนื้อเรื่อง (เช่น Thessek ต้องคง silhouette คล้าย Karvos ไว้เพื่อกลไก "สัญชาตญาณสับสน" ในฉากตื่นรู้ — ห้ามดันเอเลี่ยนจนเงาร่างเปลี่ยนไปคนละแบบ)</div>
            <table class="data-table">
                <tr><th>Tier</th><th>ระดับ</th><th>ขอบเขตที่ปรับได้</th></tr>
                <tr><td>I</td><td>เอเลี่ยนเบาบาง (Grounded)</td><td>คง silhouette/โครงร่างสัตว์โลกไว้ทั้งหมด ปรับได้แค่พื้นผิว สี ลาย และรายละเอียดเล็กจุด — ใช้กับตัวที่ผูกกลไกจดจำ/สัญชาตญาณในเนื้อเรื่องโดยตรง</td></tr>
                <tr><td>II</td><td>เอเลี่ยนเล็กน้อย (Lightly Alien)</td><td>ปรับพื้นผิว+เพิ่มลูกเล่นอวัยวะเล็กๆ ได้ (ตาเสริม ผิวมันวาวผิดธรรมชาติ) แต่จำนวน/ตำแหน่งแขนขาหลักยังต้องอ่านง่าย</td></tr>
                <tr><td>III</td><td>เอเลี่ยนปานกลาง (Moderately Alien)</td><td>ปรับลวดลาย/พื้นผิวได้อิสระมากขึ้น (คริสตัล เกล็ดหินสวิลล์ เส้นเรืองแสงใต้ผิว) เพิ่มความไม่สมมาตรได้บ้าง</td></tr>
                <tr><td>IV</td><td>เอเลี่ยนเข้มข้น (Heavily Alien)</td><td>ปรับโครงหาง/ระยางเสริมให้ผิดแปลกได้ (หางแยกแฉก ระยางคล้ายหนวด) พื้นผิวแบบคริสตัล/ออบซิเดียนสวิลล์เข้มข้น</td></tr>
                <tr><td>V</td><td>เอเลี่ยนสุดขั้ว (Extremely Alien)</td><td>อิสระเต็มที่ ไม่ต้องอิงโครงสร้างสัตว์โลกเลย ปรับจำนวน/ความสมมาตรของแขนขา รูปทรงหัว และพื้นผิวได้ตามต้องการ</td></tr>
            </table>
            <table class="data-table">
                <tr><th>ตัวละคร</th><th>Tier</th><th>เหตุผล</th></tr>
                <tr><td>Vorthak</td><td>I</td><td>ต้นตอสัญชาตญาณต่อสู้ทั้งหมดของตัวเอก — silhouette ต้องจดจำง่ายเหมือนสัตว์นักล่าจริง</td></tr>
                <tr><td>Thessek</td><td>I</td><td>ต้องคง silhouette คล้าย Karvos ไว้เพื่อกลไก "สัญชาตญาณสับสน" ในฉากตื่นรู้</td></tr>
                <tr><td>Karvos</td><td>I</td><td>คู่ silhouette ของ Thessek เช่นกัน — เปลี่ยนฝ่ายใดฝ่ายหนึ่งไม่ได้โดยไม่เปลี่ยนอีกฝ่าย</td></tr>
                <tr><td>Luvenn</td><td>I</td><td>ร่างปัจจุบันของตัวเอก ณ จุดตื่นรู้ — ต้องอ่านออกง่ายเป็นสัตว์กีบสี่ขาแม้พื้นผิวจะเอเลี่ยนแล้วก็ตาม</td></tr>
                <tr><td>Skyther</td><td>II</td><td>ไวเวิร์นเรือนยอด ไม่ผูกกลไก silhouette ใด</td></tr>
                <tr><td>Vashli</td><td>II</td><td>เหยื่อขนาดเล็ก เน้นความคล่องแคล่วที่จดจำได้</td></tr>
                <tr><td>Frostmane</td><td>II</td><td>ภาพตรงข้ามของ Vorthak ต้องยังดูเป็น "สัตว์กีบขนหนา" ชัดเจนเพื่อให้ contrast เห็นผล</td></tr>
                <tr><td>Dunkrell</td><td>III</td><td>ผู้ย่อยสลาย พรางตัวเป็นเชื้อรา/ท่อนไม้ — ไม่สมมาตรได้อิสระมากขึ้น</td></tr>
                <tr><td>Pallowfin</td><td>III</td><td>ปลาฝูงเล็ก ไม่มีข้อผูกพันเรื่อง silhouette</td></tr>
                <tr><td>Mistcrawler</td><td>III</td><td>สัตว์ขาปล้อง ปรับให้ประหลาดขึ้นได้ง่ายเพราะฐานเป็นอาร์โทรพอดอยู่แล้ว</td></tr>
                <tr><td>Threndle</td><td>IV</td><td>นักล่าใต้น้ำที่ไม่มีใครเห็นชัดตัวเต็ม — ปรับโครงหาง/ผิวเข้มข้นได้เต็มที่</td></tr>
                <tr><td>Glimmerwing</td><td>IV</td><td>แมลงเรืองแสงเชิง Hive-mind อยู่แล้วโดยธรรมชาติเป็นสิ่งมีชีวิตที่ไม่อิงโลกมากนัก</td></tr>
                <tr><td>Korrune</td><td>V</td><td>"ผีแห่งป่าหมอก" หายากจนแทบไม่มีใครเคยเห็นตัวจริง — อิสระเต็มที่ในการออกแบบ</td></tr>
                <tr><td>Cindergrub</td><td>V</td><td>สิ่งมีชีวิตฐานเคมี (Chemosynthesis) ไม่มีเหตุผลต้องอิงสัตว์โลกเลยตั้งแต่ต้น</td></tr>
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
