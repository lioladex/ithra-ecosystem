/* =================================================================
   JOURNEY OF CONFLUENCE (SYS-SIM) — engine/state
   ------------------------------------------------------------------
   ไฟล์นี้เหลือแค่ตัวเดินเรื่อง (VN stepper), state, AP/skill system,
   และการ build HTML ของฉาก — เนื้อหาจริงของแต่ละบท (JOURNEY_STEPS)
   ย้ายไปอยู่คนละไฟล์ต่อบทแล้ว เพื่อไม่ให้บทที่ final แล้วต้องถูกแตะไฟล์
   เดียวกับบทที่กำลังเขียนอยู่:

     journey/_registry.js   ประกาศ const JOURNEY_STEPS = [] — โหลดก่อนเสมอ
     journey/chapter1.js    บทที่ 1 "การตื่นรู้"
     journey/chapter2.js    บทที่ 2 "ผู้ล่าและเหยื่อ"
     journey/chapter3.js    บทที่ 3 "จุดบอด"
     journey/chapter4.js    บทที่ 4 "เถ้าถ่าน"
     journey/chapter5.js    บทที่ 5 "เปลวเบื้องล่าง"

   แต่ละไฟล์ chapterN.js เรียก JOURNEY_STEPS.push(...) ต่อท้ายอาเรย์ตาม
   ลำดับที่ <script> โหลดใน index.html (ต้องเรียงตามบทเสมอ ห้ามสลับ)
   ผลลัพธ์คือ JOURNEY_STEPS ตัวเดียวกันเป๊ะกับก่อนแยกไฟล์ — ทุกอย่างที่
   อ้างอิงด้วย id (journeyIdToIndex, startId/endId ของ JOURNEY_CHAPTERS
   ด้านล่าง) จึงทำงานเหมือนเดิมทุกประการ ไม่ต้องแก้ logic ใดๆ ในไฟล์นี้

   เพิ่มบทใหม่ = สร้าง journey/chapterN.js ใหม่ (ตามรูปแบบไฟล์เดิม) +
   เพิ่ม <script src="journey/chapterN.js"> ต่อท้ายใน index.html +
   เพิ่ม entry ใหม่ใน JOURNEY_CHAPTERS ด้านล่างนี้ ไม่ต้องแก้ไฟล์บทเก่า
   เลยสักไฟล์เดียว
================================================================= */

/* --- นิยามบท (chapter) ---
   JOURNEY_STEPS ยังเป็นอาเรย์เดียวเรียงต่อกันเหมือนเดิม (เซฟเก่าอ้าง id
   ของ step ตรงๆ จึงไม่พังจากการแบ่งบท) ประกอบขึ้นจากไฟล์ journey/*.js
   หลายไฟล์ตอนนี้ (ดูหัวไฟล์นี้) แต่ผลลัพธ์คืออาเรย์เดียวกันเป๊ะกับก่อน
   แยกไฟล์ — บทถูกกำหนดด้วย `startId` ของ step แรกในบทนั้นเท่านั้น
   บทหนึ่งจึงกินตั้งแต่ startId ของตัวเองไปจนถึง step ก่อน startId ของ
   บทถัดไป เพิ่มบทใหม่ = สร้าง journey/chapterN.js ใหม่ (ดูหัวไฟล์นี้)
   แล้วต่อ entry ใหม่ท้ายอาเรย์นี้ พร้อมตั้ง startId เป็น id ของ step
   แรกในบทนั้น ไม่ต้องแก้ตัวเดินเรื่อง
   `endId` คือ id เทียมของ "หน้าจอปิดบท" ใช้เก็บใน journeyUnlockedIds ว่า
   ผู้อ่านอ่านจบบทนั้นแล้ว (จุดปลดล็อกบทถัดไปในเมนูเลือกบท) */
const JOURNEY_CHAPTERS = [
    {
        num: 1,
        title: "การตื่นรู้",
        range: "T −2,000,000,000 ปี → T+3",
        startId: "genesis",
        endId: "__end_ch1__",
        closeTag: "// จบบทที่ 1 — Confluence ออกเดินทางในร่างใหม่เพื่อตามหา Karvos ต่อ",
        closeText: "จากร่างสี่ขาที่เอาแต่หนี กลายเป็นสิ่งที่ล่าเป็นและเข้าใจแล้วว่าทำไมถึงต้องล่า บทถัดไปคือการตามฝูงนั้นไปดูว่ายังมีอะไรที่ยังไม่เข้าใจอีกบ้าง",
        nextLabel: "Continue Journey",
        /* บทสรุปปิดบทในมุมมองบุคคลที่หนึ่งของ Confluence เอง — ไล่ตามลำดับ
           เหตุการณ์จริงในบท ประโยคละหนึ่งเหตุการณ์สำคัญ
             kind: 'gain' = สิ่งที่ได้มา · 'loss' = สิ่งที่เสียไป
           ทุกบทถัดไปต้องมี field นี้ด้วย (หน้าจอปิดบทเล่นให้อัตโนมัติ)
           ใช้สรรพนาม "ฉัน" ได้เฉพาะที่นี่เท่านั้น — เป็นเสียงประมวลความคิด
           ของตัวเอง ไม่ใช่การบรรยายฉาก (ดู .claude/skills/ithra-narrative-style) */
        reflections: [
            { kind: "gain", text: "ฉันได้รู้ถึงการคงอยู่" },
            { kind: "loss", text: "ฉันเสียฝูงที่เคยยืนอยู่ตรงกลางของมัน" },
            { kind: "gain", text: "ฉันได้รู้จักความเจ็บปวด" },
            { kind: "gain", text: "ฉันได้ปีก และท้องฟ้าที่ไม่เคยเป็นของฉัน" },
            { kind: "loss", text: "ฉันเสียแสงที่เคยกลายเป็นความอิ่มได้" },
            { kind: "gain", text: "ฉันได้ล่าเป็นครั้งแรก" }
        ]
    },
    {
        num: 2,
        title: "ผู้ล่าและเหยื่อ",
        range: "T+4 → T+6",
        startId: "long-flight",
        endId: "__end_ch2__",
        closeTag: "// จบบทที่ 2 — Confluence มองฝูงร่างเดิมของตัวเองจากฟากฟ้าเป็นครั้งแรก",
        closeText: "คำถามที่ค้างไว้ตั้งแต่คืนที่เห็นผู้ล่าสูงสุดกลายเป็นผู้ถูกล่ายังไม่มีคำตอบ และการเฝ้ามองฝูงร่างเดิมจากข้างนอกเพิ่งเริ่มต้นเท่านั้น บทถัดไปยังอยู่ระหว่างการพัฒนา ดูสรุปเชิงวิเคราะห์ของฉากตื่นรู้ (T-0 → T+1) ฉบับเต็มได้ที่เอกสาร MEMORY MECHANICS",
        reflections: [
            { kind: "loss", text: "ฉันเสียความรู้สึกว่าโลกนี้เล็กพอจะรู้จักได้ทั้งหมด" },
            { kind: "gain", text: "ฉันได้ตั้งคำถามกับตัวเองเป็นครั้งแรก" },
            { kind: "gain", text: "ฉันได้ทิ้งตัวลงจากที่สูงเพราะอยากรู้ ไม่ใช่เพราะต้องรอด" },
            { kind: "gain", text: "ฉันได้สบตากับสิ่งที่ทำให้ฉันหยุดหายใจโดยไม่ต้องขู่สักครั้ง" },
            { kind: "loss", text: "ฉันเสียเส้นแบ่งระหว่างผู้ล่ากับเหยื่อ" },
            { kind: "loss", text: "ฉันเสียคำตอบว่าเสียงที่สั่งให้ฉันยืนหยัดเป็นเสียงของอะไร" }
        ]
    },
    {
        num: 3,
        title: "จุดบอด",
        range: "T+7 → T+8",
        startId: "watch-fork",
        endId: "__end_ch3__",
        closeTag: "// จบบทที่ 3 — คำถามที่ค้างมาตั้งแต่คืนแรกยิ่งแหลมคมขึ้น ไม่ใช่คลี่คลาย",
        closeText: "ฝูงร่างเดิมสอนให้เห็นว่าเหยื่อจริงมองแบบไหน และคืนนั้นไม่ได้มองแบบนั้นเลยสักนิด คำถามที่ยังไม่มีคำตอบตั้งแต่คืนแรกจึงไม่ได้จางลง กลับแหลมคมขึ้นกว่าเดิม บทถัดไปยังอยู่ระหว่างการพัฒนา",
        /* reflections เป็นฟังก์ชันเพราะบทนี้จบได้สองเลน (ดูทางแยก watch-fork) —
           เช็คเลนแบบเดียวกับ paragraphs ของ sharper-question ประโยคร่วมเหมือนกัน
           ทุกเลน ต่างกันแค่บรรทัดที่ 2 ตามเลนที่เดินมาจริง */
        reflections: function () {
            const wasNear = journeyUnlockedIds.has('near-strike');
            return [
                { kind: "gain", text: "ฉันได้เห็นฝูงร่างเดิมใช้ชีวิตประจำวันของมันโดยไม่รู้ว่าฉันเฝ้าดูอยู่" },
                wasNear
                    ? { kind: "loss", text: "ฉันได้รู้ว่าการจ้องมองสิ่งเดียวนานเกินไปทำให้มองไม่เห็นสิ่งอื่นที่กำลังเข้ามา" }
                    : { kind: "gain", text: "ฉันได้เห็นฝูงหนีทันเวลาเป็นครั้งแรกโดยไม่เสียตัวไหนไปเลย" },
                { kind: "gain", text: "ฉันได้รู้ว่าเหยื่อจริงมองนักล่าด้วยความรู้สึกแบบไหน" },
                { kind: "loss", text: "ฉันได้รู้ว่าคืนนั้นที่แอ่งโคลน ฉันไม่ได้มองด้วยความรู้สึกแบบนั้น" }
            ];
        }
    },
    {
        num: 4,
        title: "เถ้าถ่าน",
        range: "T+9 → T+10",
        startId: "time-adrift",
        endId: "__end_ch4__",
        closeTag: "// จบบทที่ 4 — ร่างเปลี่ยนไปอีกครั้งโดยที่ไม่ได้เลือก และคำถามใหม่ไม่ใช่ว่าฉันคืออะไรอีกต่อไป แต่เป็นว่าอะไรตัดสินว่าถึงเวลา",
        closeText: "ภูเขาไฟทางใต้ที่ไม่เคยรู้จักชื่อพรากทั้งฝูง ทั้งฟ้า และร่างปีกกว้างไปพร้อมกัน แต่สิ่งที่ยังอยู่ครบคือภาพจากคืนแรกที่ยังไม่มีคำตอบ และตอนนี้มีคำถามใหม่ซ้อนเข้ามาอีกชั้นว่าอะไรกันแน่ที่ตัดสินจังหวะการเปลี่ยนร่าง บทถัดไปยังอยู่ระหว่างการพัฒนา",
        /* reflections เป็นฟังก์ชันเพราะบทนี้จบได้สองเลน (ดูทางแยก the-parting) —
           เช็ค journeyHostKey แบบเดียวกับ paragraphs ของ beneath-grey บรรทัดร่วม
           เหมือนกันทุกเลน ต่างกันแค่บรรทัดที่ 4 ตามร่างที่ได้มาจริง */
        reflections: function () {
            const asKarvos = journeyHostKey === 'KARVOS';
            return [
                { kind: "gain", text: "ฉันได้เห็นท้องฟ้าเปลี่ยนสีแล้วไม่กลับมาเป็นเหมือนเดิมอีกเลย" },
                { kind: "gain", text: "ฉันได้เห็นทั้งป่าเปลี่ยนพฤติกรรมพร้อมกัน บ้างแตกหนี บ้างมุดหาย" },
                { kind: "loss", text: "ฉันเสียร่างปีกกว้างที่เคยพาฉันมองทุกอย่างจากเบื้องบน" },
                { kind: "loss", text: "ฉันได้รู้ว่ามีบางอย่างในอากาศพรากชีวิตไปได้โดยไม่ต้องแตะต้องเลยสักครั้ง" },
                asKarvos
                    ? { kind: "loss", text: "ฉันได้ร่างที่รู้จักการล่าเป็นฝูงโดยไม่ต้องมีใครสอน แต่ไม่มีฝูงให้อยู่ด้วยอีกต่อไป" }
                    : { kind: "gain", text: "ฉันได้รู้จักน้ำหนักที่ไม่ใช่ภาระ และอาหารที่ไม่ต้องล่า" },
                { kind: "loss", text: "ฉันเสียความไม่รู้ว่าการเปลี่ยนร่างของฉันมีเงื่อนไขบางอย่างกำกับอยู่" }
            ];
        }
    },
    {
        num: 5,
        title: "เปลวเบื้องล่าง",
        range: "T+11",
        startId: "the-ground-wont-hold",
        endId: "__end_ch5__",
        closeTag: "// จบช่วงเปิดบทที่ 5 — ร่างเปลี่ยนกลางอากาศเหนือลาวาโดยไม่มีแม่แบบให้สัมผัสตรงๆ เป็นครั้งแรก",
        closeText: "แผ่นดินแยกเองครั้งแรกโดยไม่มีสัตว์ตัวไหนต้องมาสอนให้รู้ว่าอันตราย และสัญชาตญาณที่เคยเป็นจุดแข็งที่สุดของร่างที่สวมอยู่พลิกกลับมาใช้ไม่ได้พร้อมกันตอนต้องการมันที่สุด ก่อนความร้อนจากก้นเหวจะบังคับให้ร่างเปลี่ยนกลางอากาศทั้งที่ไม่มีแม่แบบตัวจริงให้สัมผัสด้วยซ้ำ ปีกกว้างกลับมาอีกครั้งเหนือลาวา แต่ยังไม่รู้เลยว่าความรู้สึกอยากที่ผุดขึ้นเองก่อนร่างจะเปลี่ยนมีส่วนกับมันจริงหรือเปล่า บทถัดไปยังอยู่ระหว่างการพัฒนา",
        nextLabel: "Continue Journey",
        /* reflections เป็นฟังก์ชันเพราะบทนี้สืบทอดเลนจากทางแยก the-parting บทที่ 4
           มาโดยไม่มี choice ใหม่ — เช็ค journeyLane ตรงๆ (ไม่ใช่ journeyHostKey
           เพราะพอจบบทนี้ host ลู่กลับมาเป็น SKYTHER เหมือนกันทั้งสองเลนแล้ว) */
        reflections: function () {
            const asKarvos = journeyLane === 'karvos';
            return [
                { kind: "gain", text: "ฉันได้รู้จักแรงสั่นของแผ่นดินที่ไม่ใช่แค่สิ่งที่สัตว์อื่นตอบสนองให้ดูอีกต่อไป" },
                asKarvos
                    ? { kind: "gain", text: "ฉันได้รู้ว่าร่างนี้อ่านจังหวะพื้นแตกได้เองโดยไม่ต้องมีใครสอน" }
                    : { kind: "gain", text: "ฉันได้ใช้เทคนิคกักอากาศเดียวกันรอดใต้ทั้งฝุ่นเถ้าและดินถล่ม" },
                { kind: "loss", text: "ฉันเสียความรู้สึกปลอดภัยที่เพิ่งได้มาแค่ชั่วครู่ ก่อนแรงสั่นระลอกใหญ่ที่สุดจะซัดเข้ามาอีกครั้ง" },
                asKarvos
                    ? { kind: "loss", text: "ฉันเสียตาชั้นที่เคยอ่านความร้อนได้แม่นที่สุด พอความร้อนอยู่ใกล้ที่สุดกลับกลายเป็นสิ่งเดียวที่มองไม่เห็นอะไรเลย" }
                    : { kind: "loss", text: "ฉันเสียการควบคุมทิศทางทั้งหมด ตอนเกราะที่เคยป้องกันได้ทุกครั้งหมุนคว้างอยู่กลางอากาศ" },
                { kind: "gain", text: "ฉันได้รู้จักความรู้สึกอยากเป็นครั้งแรก ก่อนร่างจะเปลี่ยนไปเองกลางอากาศเหนือลาวา" },
                { kind: "loss", text: "ฉันเสียร่างที่เพิ่งรู้จักไปอีกครั้ง โดยไม่ได้เลือกเช่นเคย" }
            ];
        }
    }
];

/* --- ตัวควบคุมการเล่น (VN stepper) พร้อม progression / checkpoint timeline ---
   บันทึกความคืบหน้าไว้ใน localStorage โดยอ้างอิงด้วย "id" แบบ string
   ของแต่ละ step (ดู field `id` ใน JOURNEY_STEPS) แทนตำแหน่ง index ในอาเรย์
   — จงใจทำแบบนี้เพื่อไม่ให้เซฟเก่าของผู้อ่านพังเมื่อในอนาคตมีการแทรก
   step ใหม่ตรงกลางเนื้อเรื่อง (ถ้าอ้างด้วย index ตัวเลข การแทรกจะทำให้
   step ทุกอันหลังจุดแทรกเลื่อนตำแหน่ง เซฟเก่าจะชี้ผิดจุดทันที) กฎเดียว
   ที่ต้องรักษา: ห้ามเปลี่ยนหรือเอา id เดิมไปใช้ซ้ำกับ step อื่นเด็ดขาด
   จะเพิ่ม step ใหม่กี่จุดก็ได้ ตราบใดที่ตั้ง id ใหม่ไม่ซ้ำของเดิม

     journeyUnlockedIds = Set<string> ของทุก id (รวม endId ของแต่ละบท) ที่
                          เคยปลดล็อกแล้ว — คือ "ประวัติ" ทั้งหมด ไม่ใช่แค่
                          จุดปัจจุบัน จึงใช้กำหนดได้ว่า checkpoint ไหนคลิก
                          ย้อนกลับไปดูได้บ้าง
     journeyIndex       = ตำแหน่ง (in-memory เท่านั้น ไม่ persist ตรงๆ)
                          ของ step ที่กำลังแสดงอยู่ในอาเรย์ JOURNEY_STEPS
     journeyState        = 'step' | 'warning' | 'close'
   คลิก checkpoint ย้อนกลับไปจุดที่ปลดล็อกแล้วได้เสมอ แต่ข้ามไปจุดที่ยัง
   ไม่ปลดล็อกไม่ได้ (ปุ่มจะไม่มี onclick เลยสำหรับจุดที่ล็อกอยู่) --- */
const JOURNEY_STORAGE_KEY = 'ithra_journey_progress_v2';
const JOURNEY_EXPLORE_KEY = 'ithra_journey_explored_v3';
/* id จุดจบของ "บทเดียว" สมัยที่ยังไม่มีระบบแบ่งบท — เก็บไว้เพื่อแปลงเซฟเก่า
   ให้กลายเป็นจุดจบของบทที่ 1 เท่านั้น (ดู journeyReset) ห้ามใช้ที่อื่นอีก */
const JOURNEY_LEGACY_END_ID = '__end__';

/* --- Action Point / Skill state ---
   journeyHostKey ผูกกับ imageKey ของร่างที่ Confluence "จำลอง" ขึ้นมาสวมอยู่
   ณ จุดนี้ในเนื้อเรื่อง (ดู field `switchHost` บน JOURNEY_STEPS — เปลี่ยนร่าง
   ครั้งแรกที่ step "transformation" จาก LUVENN → SKYTHER) apMax ดึงจาก
   CREATURE_PROFILES (data/skillSystem.js) ตรงๆ ไม่คำนวณซ้ำที่นี่ ต้อง
   persist host ไปพร้อม AP เพราะ refresh หน้าแล้วต้องรู้ว่าตอนนี้ apMax ควร
   คำนวณจากร่างไหน — AP ฟื้นฟูเฉพาะตอน journeyContinue() พาไปถึง step ใหม่ที่มี
   `recoversAP: true` เป็นครั้งแรกเท่านั้น (ไม่ใช่ทุกครั้งที่ render/refresh)
   กัน exploit แบบเดียวกับที่เคย fix ไปแล้วกับปุ่มสำรวจ */
const AP_STATE_KEY = 'ithra_ap_v1';
const SKILLS_LEARNED_KEY = 'ithra_skills_learned_v1';
let journeyHostKey = 'LUVENN';

let journeyIndex = 0;
let journeyChapterIdx = 0; // ตำแหน่งในอาเรย์ JOURNEY_CHAPTERS ของบทที่กำลังอ่านอยู่ (สำคัญตอน journeyState === 'close' เพราะตอนนั้นไม่มี step ให้อ้างอิงบท)
/* --- เส้นทาง (lane) ---
   บางช่วงของเนื้อเรื่องแตกเป็นสองเส้นที่ผู้อ่านเลือกเอง แล้วกลับมาบรรจบกัน
   step ที่มี field `lane` เป็นของเส้นนั้นเส้นเดียว — ผู้อ่านที่เลือกอีกเส้น
   จะไม่เห็นทั้งใน timeline และเดินผ่านไม่ได้ ส่วน step ที่ไม่มี lane คือทาง
   ร่วมที่ทุกคนผ่านเหมือนกัน จุดบรรจบทำด้วย `nextId` บน step สุดท้ายของเลน
   journeyLane = ชื่อเลนปัจจุบัน (null = อยู่บนทางร่วม) persist ไปกับ progress
   เพราะร่างและสิ่งที่ผู้อ่านเห็นต่อจากนี้ขึ้นกับมัน */
let journeyLane = null;
let journeyUnlockedIds = new Set();
let journeyState = 'step'; // 'step' | 'warning' | 'close'
let journeyPendingWarning = '';
let journeyExploredMap = {}; // { [stepId]: { [actionId]: { text, unlockKey, indirect } } } — action ที่ใช้ไปแล้วต่อ step (ทน refresh, กดซ้ำไม่ได้) — indirect ดูที่ index.html unlockSpeciesTier()
let apCurrent = 0;
let apMax = 0;
let journeyApPulse = false; // true = เพิ่งฟื้น AP มา — ให้ journeyRenderActionsBlock() เล่น animation เน้นย้ำครั้งเดียวตอน render ถัดไป แล้วเคลียร์ทิ้ง
let skillsLearned = {}; // { [skillId]: { count, learned } }

function journeyIdToIndex(id) {
    return JOURNEY_STEPS.findIndex(s => s.id === id);
}

function journeySaveExplored() {
    try { localStorage.setItem(JOURNEY_EXPLORE_KEY, JSON.stringify(journeyExploredMap)); } catch (e) {}
}

function journeyLoadExplored() {
    try {
        const raw = localStorage.getItem(JOURNEY_EXPLORE_KEY);
        return raw ? JSON.parse(raw) : {};
    } catch (e) {
        return {};
    }
}

function apSaveState() {
    try { localStorage.setItem(AP_STATE_KEY, JSON.stringify({ current: apCurrent, max: apMax, host: journeyHostKey })); } catch (e) {}
}

function apLoadState() {
    try {
        const raw = localStorage.getItem(AP_STATE_KEY);
        const saved = raw ? JSON.parse(raw) : null;
        if (saved && saved.host) journeyHostKey = saved.host;
        apMax = CREATURE_PROFILES[journeyHostKey].apMax;
        apCurrent = (saved && typeof saved.current === 'number') ? Math.min(saved.current, apMax) : apMax;
    } catch (e) {
        apMax = CREATURE_PROFILES[journeyHostKey].apMax;
        apCurrent = apMax;
    }
}

/* Confluence จำลองร่างใหม่ระดับเซลล์ (ไม่ใช่การสิงร่างที่มีอยู่จริง — ดู
   คอมเมนต์ที่ field `switchHost` ของ step "transformation") apMax คำนวณ
   ใหม่ตามร่างใหม่ทันที ไม่แตะ apCurrent ตรงนี้ (ให้ step ที่มี recoversAP
   เป็นคนตัดสินว่าฟื้นเต็มหรือไม่ — ร่างใหม่ส่วนใหญ่จะมี recoversAP ควบคู่กัน
   อยู่แล้วในเนื้อเรื่อง แต่ไม่บังคับเสมอไป) */
function journeySwitchHost(newHostKey) {
    journeyHostKey = newHostKey;
    apMax = CREATURE_PROFILES[newHostKey].apMax;
    apCurrent = Math.min(apCurrent, apMax);
    apSaveState();
}

/* คืน AP ตาม recoveryAction ของ host ปัจจุบัน — เรียกเฉพาะตอนเข้าฉากที่
   เนื้อเรื่องพา host ทำพฤติกรรมฟื้นฟูของมันเองจริงๆ (ดู field
   `recoversAP` บน JOURNEY_STEPS) ไม่ใช่ระบบ tick ตามเวลา */
function apRecover() {
    const action = CREATURE_PROFILES[journeyHostKey].recoveryAction;
    apRecoverCustom(action.apRestored, action.label, action.flavor);
}

/* เหมือน apRecover() แต่ระบุจำนวน/lore เองแทนของ CREATURE_PROFILES ตรงๆ —
   ใช้ตอนเหตุการณ์ฟื้นฟูไม่ใช่พฤติกรรม canon ของสายพันธุ์ (เช่น T+2 หมดสติ
   ไปครู่หนึ่งนับเป็นการพักเล็กน้อยได้ แต่ไม่ใช่ "กางแผงคอรับแสง" ของ Luvenn
   ที่ใช้ตอนตั้งใจพักจริงๆ) — เรียกผ่าน `recoversAP: {amount, label, flavor}`
   บน JOURNEY_STEPS แทนการใส่ `true` เฉยๆ */
function apRecoverCustom(amount, label, flavor) {
    const before = apCurrent;
    apCurrent = Math.min(apMax, apCurrent + amount);
    apSaveState();

    const gained = apCurrent - before;
    if (gained > 0) {
        journeyApPulse = true;
        if (typeof journeyLogAdd === 'function') {
            journeyLogAdd('⚡ AP RESTORED', `${label} — ${flavor} (+${gained} AP)`, 'ap');
        }
    }
}

function apSpend(cost) {
    if (apCurrent < cost) return false;
    apCurrent -= cost;
    apSaveState();
    return true;
}

function skillsSave() {
    try { localStorage.setItem(SKILLS_LEARNED_KEY, JSON.stringify(skillsLearned)); } catch (e) {}
}

function skillsLoad() {
    try {
        const raw = localStorage.getItem(SKILLS_LEARNED_KEY);
        return raw ? JSON.parse(raw) : {};
    } catch (e) {
        return {};
    }
}

/* เพิ่ม observation 1 ครั้งให้ skillId — เรียกจาก journeyExplore() เมื่อ
   pool entry ที่สุ่มได้มี `teachesSkill` ตรงกัน นับสะสมข้ามร่างได้เสมอ
   (ดูเหตุผลใน data/skillSystem.js) แต่การ "ใช้งานจริง" ต้องมี organ ของ
   ร่างปัจจุบันรองรับด้วย ซึ่งเป็นเงื่อนไขที่ผูกไว้ตอนแสดง action ในอนาคต
   ไม่ใช่ตอนเรียนรู้ — คืนค่า count หลังอัปเดตให้ตัวเรียกใช้เลือกข้อความ */
function skillObserve(skillId) {
    const def = SKILL_DEFINITIONS[skillId];
    if (!def) return 0;
    const entry = skillsLearned[skillId] || { count: 0, learned: false };
    if (entry.learned) return entry.count;
    entry.count++;
    if (entry.count >= def.obsNeeded) {
        entry.learned = true;
        showSkillToast(def.learnedLabel);
    }
    skillsLearned[skillId] = entry;
    skillsSave();
    return entry.count;
}

/* --- ตัวช่วยเรื่องบท ---
   ทุกฟังก์ชันคิดจากลำดับ index ใน JOURNEY_STEPS ตรงๆ ไม่เก็บ state ซ้ำ
   ยกเว้น journeyChapterIdx ที่จำเป็นตอนอยู่หน้าจอปิดบท */
/* step นี้อยู่บนเส้นทางที่ผู้อ่านเลือกไว้หรือเปล่า — ไม่มี lane = ทางร่วม เห็นเสมอ */
function journeyStepOnLane(step) {
    return !step.lane || step.lane === journeyLane;
}

/* ทักษะที่เรียนจบแล้วยังใช้จริงไม่ได้ ถ้าร่างปัจจุบันไม่มีอวัยวะที่ต้องใช้
   (ดู requiresOrgan ใน SKILL_DEFINITIONS กับ organs ใน CREATURE_PROFILES)
   ความเข้าใจส่งข้ามร่างได้ แต่ร่างกายส่งไม่ได้ — กฎเดียวกับ data/memoryMechanics.js */
function skillUsable(skillId) {
    const def = SKILL_DEFINITIONS[skillId];
    const entry = skillsLearned[skillId];
    if (!def || !entry || !entry.learned) return false;
    if (!def.requiresOrgan) return true;
    const profile = CREATURE_PROFILES[journeyHostKey];
    return !!(profile && profile.organs && profile.organs.indexOf(def.requiresOrgan) >= 0);
}

function journeyChapterStartIndex(chIdx) {
    const ch = JOURNEY_CHAPTERS[chIdx];
    return ch ? journeyIdToIndex(ch.startId) : -1;
}

function journeyChapterLastIndex(chIdx) {
    const nextStart = journeyChapterStartIndex(chIdx + 1);
    return nextStart < 0 ? JOURNEY_STEPS.length - 1 : nextStart - 1;
}

function journeyChapterIdxOfStepIndex(stepIdx) {
    let found = 0;
    JOURNEY_CHAPTERS.forEach((ch, i) => {
        const start = journeyChapterStartIndex(i);
        if (start >= 0 && stepIdx >= start) found = i;
    });
    return found;
}

/* บทจะเลือกอ่านได้เมื่อ step แรกของบทนั้นเคยปลดล็อกแล้วเท่านั้น */
function journeyChapterUnlocked(chIdx) {
    const ch = JOURNEY_CHAPTERS[chIdx];
    return !!ch && journeyUnlockedIds.has(ch.startId);
}

function journeyChapterFinished(chIdx) {
    const ch = JOURNEY_CHAPTERS[chIdx];
    return !!ch && journeyUnlockedIds.has(ch.endId);
}

/* step ที่ไปถึงไกลสุดภายในบทหนึ่ง — ใช้ตอนคลิกสลับบทจากเมนู */
function journeyFurthestUnlockedIndexInChapter(chIdx) {
    const start = journeyChapterStartIndex(chIdx);
    const last = journeyChapterLastIndex(chIdx);
    let idx = start;
    for (let i = start; i <= last; i++) {
        if (journeyUnlockedIds.has(JOURNEY_STEPS[i].id) && journeyStepOnLane(JOURNEY_STEPS[i])) idx = i;
    }
    return idx;
}

function journeySaveProgress() {
    try {
        const currentId = journeyState === 'close'
            ? JOURNEY_CHAPTERS[journeyChapterIdx].endId
            : JOURNEY_STEPS[journeyIndex].id;
        localStorage.setItem(JOURNEY_STORAGE_KEY, JSON.stringify({
            currentId,
            lane: journeyLane,
            unlockedIds: [...journeyUnlockedIds]
        }));
    } catch (e) { /* localStorage อาจถูกปิดใน private mode — ข้ามไปเงียบๆ */ }
}

function journeyLoadProgress() {
    try {
        const raw = localStorage.getItem(JOURNEY_STORAGE_KEY);
        return raw ? JSON.parse(raw) : null;
    } catch (e) {
        return null;
    }
}

function journeyReset() {
    const saved = journeyLoadProgress();
    const firstId = JOURNEY_STEPS[0].id;
    journeyExploredMap = journeyLoadExplored();
    apLoadState();
    skillsLearned = skillsLoad();

    if (saved && Array.isArray(saved.unlockedIds)) {
        journeyUnlockedIds = new Set(saved.unlockedIds);
        journeyLane = saved.lane || null;
        journeyUnlockedIds.add(firstId); // step แรกปลดล็อกเสมอ กันเซฟเสีย

        // เซฟเก่าจากสมัยยังไม่มีระบบบท: จุดจบเดียว '__end__' = จบบทที่ 1
        if (journeyUnlockedIds.has(JOURNEY_LEGACY_END_ID)) {
            journeyUnlockedIds.delete(JOURNEY_LEGACY_END_ID);
            journeyUnlockedIds.add(JOURNEY_CHAPTERS[0].endId);
            if (saved.currentId === JOURNEY_LEGACY_END_ID) saved.currentId = JOURNEY_CHAPTERS[0].endId;
        }

        const endChIdx = JOURNEY_CHAPTERS.findIndex(ch => ch.endId === saved.currentId);
        if (endChIdx >= 0 && journeyUnlockedIds.has(saved.currentId)) {
            journeyState = 'close';
            journeyChapterIdx = endChIdx;
            journeyIndex = journeyChapterLastIndex(endChIdx);
        } else {
            const idx = journeyIdToIndex(saved.currentId);
            if (idx >= 0 && journeyUnlockedIds.has(saved.currentId)) {
                journeyState = 'step';
                journeyIndex = idx;
                journeyChapterIdx = journeyChapterIdxOfStepIndex(idx);
            } else {
                // id เดิมหาไม่เจอ (เช่นถูกลบ/เปลี่ยนไปแล้ว) — ถอยไปจุดไกลสุด
                // เท่าที่ยังปลดล็อกอยู่จริงแทน ไม่ให้ผู้อ่านหลุดจากเนื้อเรื่อง
                journeyState = 'step';
                journeyIndex = journeyFurthestUnlockedIndex();
                journeyChapterIdx = journeyChapterIdxOfStepIndex(journeyIndex);
            }
        }
    } else {
        journeyUnlockedIds = new Set([firstId]);
        journeyIndex = 0;
        journeyChapterIdx = 0;
        journeyLane = null;
        journeyState = 'step';
    }

    journeyBackfillUnlocks();
    if (typeof journeyRenderLog === 'function') journeyRenderLog(); // แสดง log ที่เคยบันทึกไว้ต่อจาก session ก่อน
    journeyRender();
}

/* ปุ่ม DEV เท่านั้น — ล้าง progress ของ Journey ทั้งหมด (checkpoint,
   ผลสำรวจที่ใช้ไปแล้ว, และ species ที่ปลดล็อกจากเนื้อเรื่อง/การสำรวจ)
   แล้วเริ่มใหม่จาก step แรก ไว้ไล่เช็กทีละจุดตอนพัฒนา */
/* DEV เท่านั้น — รีเซ็ตความคืบหน้า "ตั้งแต่ฉากที่เลือกเป็นต้นไป" (ฉากก่อนหน้า
   ยังอยู่ครบ) ไว้ไล่ตรวจฉากใดฉากหนึ่งซ้ำโดยไม่ต้องเล่นใหม่ทั้งบท ทุกอย่างที่
   สะสมมาถูกคำนวณใหม่จาก "ฉากที่ยังเหลืออยู่" เท่านั้น: action log, ทักษะ,
   ร่างปัจจุบัน, AP และ tier ของสิ่งมีชีวิต — จึงได้สถานะเหมือนเพิ่งเดินมาถึง
   ฉากนั้นพอดี ไม่ใช่แค่ย้อน checkpoint เฉยๆ */
function journeyResetFromStep(targetId) {
    const idx = journeyIdToIndex(targetId);
    if (idx < 0) return;

    // 1) ล็อกฉากตั้งแต่จุดนี้เป็นต้นไป + จุดจบของบทนี้และบทถัดๆ ไป
    for (let i = idx; i < JOURNEY_STEPS.length; i++) journeyUnlockedIds.delete(JOURNEY_STEPS[i].id);
    const chIdx = journeyChapterIdxOfStepIndex(idx);
    JOURNEY_CHAPTERS.forEach((ch, i) => { if (i >= chIdx) journeyUnlockedIds.delete(ch.endId); });

    // 2) ทิ้ง action ที่เคยกดไว้ในฉากเหล่านั้น
    for (let i = idx; i < JOURNEY_STEPS.length; i++) delete journeyExploredMap[JOURNEY_STEPS[i].id];
    journeySaveExplored();

    // 3) คิดทักษะใหม่จาก action ที่ยังเหลืออยู่จริงเท่านั้น (ไม่ขึ้น toast ซ้ำ)
    skillsLearned = {};
    for (let i = 0; i < idx; i++) {
        const step = JOURNEY_STEPS[i];
        const used = journeyExploredMap[step.id];
        if (!step.actions || !used) continue;
        step.actions.forEach(a => {
            if (!a.teachesSkill || !used[a.id]) return;
            const def = SKILL_DEFINITIONS[a.teachesSkill];
            if (!def) return;
            const entry = skillsLearned[a.teachesSkill] || { count: 0, learned: false };
            entry.count++;
            entry.learned = entry.count >= def.obsNeeded;
            skillsLearned[a.teachesSkill] = entry;
        });
    }
    skillsSave();

    // 4) ร่างปัจจุบัน = switchHost ตัวสุดท้ายก่อนถึงฉากนี้ แล้วเติม AP ให้เต็ม
    let host = 'LUVENN';
    for (let i = 0; i < idx; i++) if (JOURNEY_STEPS[i].switchHost) host = JOURNEY_STEPS[i].switchHost;
    journeyHostKey = host;
    apMax = CREATURE_PROFILES[host].apMax;
    apCurrent = apMax;
    apSaveState();

    // 5) tier ของสิ่งมีชีวิต: ล้างแล้วปลดใหม่จาก checkpoint ที่ยังเหลือ
    //    บวกกับ unlockKey ของ action ที่ยังไม่ถูกล้าง (ทั้งหมดเงียบ ไม่มี toast)
    if (typeof resetKnownSpecies === 'function') resetKnownSpecies();
    journeyBackfillUnlocks();
    if (typeof unlockSpeciesTier === 'function') {
        Object.keys(journeyExploredMap).forEach(stepId => {
            Object.values(journeyExploredMap[stepId]).forEach(entry => {
                if (entry && entry.unlockKey) unlockSpeciesTier([entry.unlockKey], 0, { silent: true, indirect: !!entry.indirect });
            });
        });
    }

    // 6) ยืนอยู่ที่ฉากนั้นแบบ "เพิ่งมาถึง" — ปลดล็อกใหม่แล้วยิงผลข้างเคียงของฉากซ้ำ
    journeyUnlockedIds.add(JOURNEY_STEPS[idx].id);
    journeyChapterIdx = chIdx;
    journeyState = 'step';
    journeyIndex = idx;
    journeyEnterStepSideEffects(JOURNEY_STEPS[idx]);
    journeyReflectionSeen.clear(); // ฉากสรุปปิดบทต้องเล่นใหม่ตอนเล่นมาถึงอีกครั้ง
    // log ฝั่งขวาเป็นบันทึกสะสมของทั้งการเดินทาง ถ้าไม่ล้างจะเหลือบรรทัดของฉาก
    // ที่เพิ่งถูกรีเซ็ตทิ้งไปค้างอยู่ ทำให้ไล่ตรวจแล้วสับสนว่าอะไรเกิดขึ้นแล้วบ้าง
    if (typeof journeyClearLog === 'function') journeyClearLog();
    journeySaveProgress();
    journeyRender();
}

function journeyResetProgression() {
    if (!confirm('รีเซ็ต Journey progression ทั้งหมด (รวมถึง species ที่ปลดล็อกจากเนื้อเรื่อง/การสำรวจ) กลับไปเริ่มต้นใหม่?')) return;
    try {
        localStorage.removeItem(JOURNEY_STORAGE_KEY);
        localStorage.removeItem(JOURNEY_EXPLORE_KEY);
        localStorage.removeItem(AP_STATE_KEY);
        localStorage.removeItem(SKILLS_LEARNED_KEY);
    } catch (e) {}
    journeyExploredMap = {};
    skillsLearned = {};
    journeyHostKey = 'LUVENN'; // apLoadState() จะอ่าน host จาก saved state เท่านั้น — ล้างแล้วต้องรีเซ็ตตัวแปรในหน่วยความจำเองด้วย
    if (typeof resetKnownSpecies === 'function') resetKnownSpecies();
    if (typeof journeyClearLog === 'function') journeyClearLog();
    journeyReset();
}

function journeyFurthestUnlockedIndex() {
    let idx = 0;
    JOURNEY_STEPS.forEach((step, i) => {
        if (journeyUnlockedIds.has(step.id)) idx = i;
    });
    return idx;
}

/* ปลด tier ทุกตัวของทุก checkpoint ที่เคยไปถึงแล้วแบบเงียบๆ (ไม่ toast ซ้ำ)
   เผื่อกรณี resume จาก progress เก่า หรือระบบ unlock นี้เพิ่งถูกเพิ่มเข้ามา
   ทีหลังหลังจากผู้เล่นบางคนเล่นผ่านจุดนั้นไปแล้ว */
function journeyBackfillUnlocks() {
    if (typeof unlockSpeciesTier !== 'function') return;
    JOURNEY_STEPS.forEach(step => {
        if (journeyUnlockedIds.has(step.id) && step.unlocksTier) {
            Object.entries(step.unlocksTier).forEach(([key, tier]) => {
                unlockSpeciesTier([key], tier, { silent: true });
            });
        }
    });
}

/* ผลข้างเคียงตอน "เหยียบ step ใหม่ครั้งแรก" (ปลด tier, เปลี่ยนร่าง, ฟื้น AP)
   แยกออกมาเพราะตอนนี้มีสองทางที่พาไปถึง step ใหม่ได้: กด continue ตามปกติ
   และกดปุ่มเริ่มบทถัดไปจากหน้าจอปิดบท (journeyStartChapter) */
function journeyEnterStepSideEffects(step) {
    if (step.unlocksTier && typeof unlockSpeciesTier === 'function') {
        Object.entries(step.unlocksTier).forEach(([key, tier]) => {
            unlockSpeciesTier([key], tier);
        });
    }

    // switchHost ต้องมาก่อน recoversAP เสมอ เพราะ apMax เปลี่ยนตาม host —
    // ฟื้นฟูด้วย apMax ของร่างใหม่ ไม่ใช่ร่างเก่า
    if (step.switchHost) journeySwitchHost(step.switchHost);
    if (step.recoversAP) {
        // recoversAP: true = ใช้ recoveryAction ของ host ปัจจุบัน (canon)
        // recoversAP: {amount, label, flavor} = เหตุการณ์ฟื้นฟูเฉพาะจุด ไม่ใช่ canon
        if (typeof step.recoversAP === 'object') {
            apRecoverCustom(step.recoversAP.amount, step.recoversAP.label, step.recoversAP.flavor);
        } else {
            apRecover();
        }
    }
}

function journeyContinue() {
    // ถึง step สุดท้ายของบทนี้แล้ว — กด continue คือจบบท (ไม่ข้ามไปบทถัดไปเอง
    // ผู้อ่านต้องกดปุ่มเริ่มบทถัดไปที่หน้าจอปิดบทอีกครั้งหนึ่ง)
    if (journeyIndex >= journeyChapterLastIndex(journeyChapterIdx)) {
        journeyCompleteChapter();
        journeyRender();
        return;
    }

    // `nextId` = ข้ามไป step ที่ระบุแทนตัวถัดไปในอาเรย์ (ใช้ทำจุดบรรจบของเลน)
    // ถ้าไม่มี ก็เดินหน้าทีละหนึ่ง โดยข้าม step ที่เป็นของเลนอื่นไปเงียบๆ
    const here = JOURNEY_STEPS[journeyIndex];
    if (here && here.nextId) {
        const target = journeyIdToIndex(here.nextId);
        if (target >= 0) journeyIndex = target;
        else journeyIndex++;
    } else {
        journeyIndex++;
        while (journeyIndex < JOURNEY_STEPS.length && !journeyStepOnLane(JOURNEY_STEPS[journeyIndex])) journeyIndex++;
        if (journeyIndex >= JOURNEY_STEPS.length) journeyIndex = JOURNEY_STEPS.length - 1;
    }
    journeyState = 'step';
    const step = JOURNEY_STEPS[journeyIndex];
    const isNewGround = !journeyUnlockedIds.has(step.id);
    if (isNewGround) journeyUnlockedIds.add(step.id);
    journeySaveProgress();

    if (isNewGround) journeyEnterStepSideEffects(step);

    journeyRender();
}

/* ระบบ Action (เดิมชื่อ "สำรวจ") — เฉพาะ step ที่มี field `actions` เท่านั้น
   แต่ละ action มี id เฉพาะตัว และ "กดได้ 1 ครั้งต่อ id" เท่านั้น (ปุ่มหายไป
   แทนที่ด้วย log ถาวรหลังใช้ — ไม่ใช่สุ่มซ้ำได้ไม่จำกัดเหมือนเวอร์ชันก่อน)
   ที่ยังต้องมี AP เพราะ 1 scene มี action หลายประเภทพร้อมกันได้ (สำรวจรอบๆ,
   สังเกต Skyther ทีละครั้ง) และ AP ที่มีจำกัดคือตัวคุมว่าต่อการมาเยือน 1
   ครั้งจะทำ action ได้กี่ประเภท — ฟื้นฟูเฉพาะตอนเนื้อเรื่องพา host ไปถึง
   checkpoint ที่ recoversAP เท่านั้น (ดู apRecover() ใน journeyContinue())
   ไม่ใช่ทุกครั้งที่ render/refresh — กันช่องโหว่แบบเดียวกับที่เคย fix ไปแล้ว
   action ที่มี `pool` จะสุ่มหยิบ 1 รายการตอนใช้ (ครั้งเดียว ไม่สุ่มซ้ำ)
   action ที่มี `requires` จะไม่แสดงจนกว่า action ที่อ้างถึงจะถูกใช้ไปก่อน
   (ใช้ไล่ observe-skyther-1 → 2 → 3 ให้เจอ Skyther ครบ 3 ครั้งตามลำดับ)
   action ที่มี `teachesSkill` นับเป็น 1 observation ให้ skill นั้นด้วย */
let journeyActionBusy = false; // กัน 1 คลิก/แตะ ยิง handler ซ้ำมากกว่า 1 ครั้ง
                                // (เช่น touchend+click ยิงซ้อนกันบนมือถือ)

/* step ถือว่า "ผ่านไปแล้ว" (อยู่ในอดีต) เมื่อมี step ถัดไป (ลำดับหลังจากนี้
   ในอาเรย์) ถูกปลดล็อกไปแล้ว — ใช้เช็คก่อนให้กด action ได้ ตอนย้อนกลับไปดู
   checkpoint เก่าผ่าน timeline แล้วไม่ควรกด action ที่พลาดไปตอนนั้นย้อนหลัง
   ได้อีก (เนื้อเรื่องเดินหน้าไปแล้ว จุดนั้นควรอ่านได้อย่างเดียว) */
function journeyIsStepInPast(step) {
    const idx = journeyIdToIndex(step.id);
    for (let i = idx + 1; i < JOURNEY_STEPS.length; i++) {
        if (journeyUnlockedIds.has(JOURNEY_STEPS[i].id)) return true;
    }
    return false;
}

function journeyDoAction(actionId) {
    if (journeyActionBusy) return;
    journeyActionBusy = true;
    try {
        const step = JOURNEY_STEPS[journeyIndex];
        if (!step || !step.actions) return;
        if (journeyIsStepInPast(step)) return; // เนื้อเรื่องเดินหน้าผ่านจุดนี้ไปแล้ว กด action ย้อนหลังไม่ได้อีก
        const action = step.actions.find(a => a.id === actionId);
        if (!action) return;

        const used = journeyExploredMap[step.id] || {};
        if (used[actionId]) return; // ใช้ไปแล้ว กดซ้ำไม่ได้
        if (action.requires && !used[action.requires]) return; // ยังไม่ปลดล็อกลำดับ
        if (action.visibleIf && !action.visibleIf()) return; // เงื่อนไขเนื้อเรื่อง (เช่น ต้องเตะ Skyther มาก่อน) ยังไม่ตรง
        if (action.teachesSkill && skillsLearned[action.teachesSkill] && skillsLearned[action.teachesSkill].learned) return; // เรียนจบไปแล้ว ไม่มีอะไรให้เรียนเพิ่ม
        // action ที่ต้องใช้ทักษะ (requiresSkill) กดได้เฉพาะคนที่เรียนทักษะนั้นจบแล้ว
        // เท่านั้น — เป็นรางวัลของการยอมแลก AP ไปกับการสังเกตในบทก่อนๆ
        if (action.requiresSkill && !skillUsable(action.requiresSkill)) return;
        // requiresSkillKnown = ใช้แค่ "ความเข้าใจ" ไม่ต้องมีอวัยวะ (อ่านสถานการณ์,
        // ตีความสิ่งที่เห็น) ต่างจาก requiresSkill ที่ต้องลงมือทำจริงด้วยร่างกาย
        if (action.requiresSkillKnown && !(skillsLearned[action.requiresSkillKnown] && skillsLearned[action.requiresSkillKnown].learned)) return;

        // action พักผ่อน (มี `restores`) กับ action อื่นที่ใช้ AP ในสเต็ปเดียวกัน
        // กันคนละทาง — เลือกได้อย่างใดอย่างหนึ่งต่อการมาเยือน 1 ครั้งเท่านั้น
        const restAction = step.actions.find(a => a.restores);
        if (action.restores) {
            if (Object.keys(used).length > 0) return; // ทำ action อื่นไปแล้ว พักไม่ได้อีก
        } else if (restAction && used[restAction.id]) return; // พักไปแล้ว ออกแรงทำอย่างอื่นไม่ได้อีก

        if (action.restores) {
            apCurrent = Math.min(apMax, apCurrent + action.restores);
            apSaveState();
            journeyApPulse = true;
        } else {
            const cost = action.apCost || 1;
            if (!apSpend(cost)) return; // AP ไม่พอ
        }

        // text เป็นฟังก์ชันได้ สำหรับ action ที่ข้อความขึ้นกับเลน/ร่างที่ผู้อ่านเลือก
        let text = typeof action.text === 'function' ? action.text() : action.text;
        let unlockKey = action.unlockKey;
        let indirect = action.indirect;
        if (action.pool) {
            const pick = action.pool[Math.floor(Math.random() * action.pool.length)];
            text = pick.text;
            unlockKey = pick.unlockKey;
            indirect = pick.indirect;
        }
        if (action.teachesSkill) skillObserve(action.teachesSkill);

        if (!journeyExploredMap[step.id]) journeyExploredMap[step.id] = {};
        journeyExploredMap[step.id][actionId] = { text, unlockKey, indirect };
        journeySaveExplored();

        // การสำรวจ/สังเกตแบบนี้คือแค่ "พบเห็น" (Tier 0) — ไม่ใช่การเผชิญหน้าจริง
        // indirect: true = รู้จักผ่านร่องรอยทางอ้อม (กลิ่น/เสียง) ไม่ใช่ Direct
        // Visual — ไม่ปลด Visual Data ให้ (ดู index.html unlockSpeciesTier)
        if (unlockKey && typeof unlockSpeciesTier === 'function') unlockSpeciesTier([unlockKey], 0, indirect ? { indirect: true } : undefined);

        journeyRenderActionsBlock(step);
    } finally {
        journeyActionBusy = false;
    }
}

/* วาดใหม่แค่ส่วน action (AP HUD + log + ปุ่มที่ยังใช้ได้) ของ step ปัจจุบัน
   โดยไม่แตะย่อหน้าเนื้อเรื่องหลักด้านบน — เรียกทั้งตอนกด action สำเร็จ
   และตอน render step ครั้งแรกถ้าเคยใช้ action ไปแล้วจาก session ก่อน */
function journeyRenderActionsBlock(step) {
    const block = document.getElementById('vn-explore-block');
    if (!block) return;
    const used = journeyExploredMap[step.id] || {};

    let pips = '';
    for (let i = 0; i < apMax; i++) pips += `<span class="vn-ap-pip${i < apCurrent ? ' filled' : ''}"></span>`;
    // เพิ่งฟื้น AP มา (ดู journeyApPulse) — เล่น animation เน้นย้ำครั้งเดียวตอน
    // render นี้ แล้วเคลียร์ flag ทิ้ง กัน render ครั้งถัดไปเล่นซ้ำเอง
    const justRecovered = journeyApPulse;
    journeyApPulse = false;
    const apHud = `<div class="vn-ap-hud${justRecovered ? ' vn-ap-pulse' : ''}">⚡ AP <span class="vn-ap-pips">${pips}</span> ${apCurrent}/${apMax}</div>`;

    // log เรียงตามลำดับที่ "กดจริง" (ลำดับ insertion ของ object key ซึ่ง JS
    // การันตีคงลำดับไว้ให้สำหรับ string key) ไม่ใช่ลำดับที่นิยาม action ไว้ใน
    // step.actions — กันบั๊กที่ผลลัพธ์แทรกผิดตำแหน่งเมื่อกด action ไม่เรียงลำดับนิยาม
    // ผลของ action ที่ปลดด้วยทักษะแสดงคนละสไตล์ — ให้รู้สึกว่าเป็นข้อมูลที่ได้มา
    // เพราะเลือกลงทุนสังเกตไว้ก่อนหน้า ไม่ใช่ข้อความที่ใครก็เห็น
    const logHtml = Object.keys(used).map(id => {
        const def = (step.actions || []).find(a => a.id === id);
        const cls = def && (def.requiresSkill || def.requiresSkillKnown) ? 'vn-explore-entry vn-skill-entry' : 'vn-explore-entry';
        return `<p class="${cls}">${used[id].text}</p>`;
    }).join('');

    // action พักผ่อน (restores) กับ action อื่นๆ ในสเต็ปเดียวกัน กันคนละทาง —
    // ทำอย่างใดอย่างหนึ่งไปแล้ว อีกฝั่งหายไปจากตัวเลือกทันที (ดูเหตุผลเดียวกัน
    // ที่ journeyDoAction() บังคับไว้)
    const restAction = step.actions.find(a => a.restores);
    const restUsed = restAction && used[restAction.id];
    const otherActionUsed = Object.keys(used).some(id => id !== (restAction && restAction.id));

    // ย้อนกลับมาดู step ที่เดินผ่านไปแล้ว (ผ่าน timeline) — เหลือแค่อ่าน log
    // เดิม กด action ที่พลาดไปตอนนั้นย้อนหลังไม่ได้อีก (ดู journeyIsStepInPast)
    const isPast = journeyIsStepInPast(step);

    let buttonsHtml = '';
    if (!isPast) step.actions.forEach(action => {
        if (used[action.id]) return; // แสดงใน log ไปแล้ว ไม่ต้องมีปุ่มซ้ำ
        if (action.visibleIf && !action.visibleIf()) return; // เงื่อนไขเนื้อเรื่องยังไม่ตรง ไม่แสดงปุ่มเลย
        // ทักษะที่ผูกกับ action นี้เรียนจบแล้ว (เก็บครบ obsNeeded) ไม่มีอะไรให้เรียนรู้เพิ่มอีก — ซ่อนปุ่มไปเลย
        if (action.teachesSkill && skillsLearned[action.teachesSkill] && skillsLearned[action.teachesSkill].learned) return;

        if (action.restores) {
            if (otherActionUsed) return; // ทำ action อื่นไปแล้ว พักไม่ได้อีก
            if (apCurrent >= apMax) return; // AP เต็มอยู่แล้ว ไม่ต้องเสนอให้พัก
            buttonsHtml += `<button class="vn-explore-btn vn-rest-btn" onclick="journeyDoAction('${action.id}')">${action.prompt} (+${action.restores} AP)</button>`;
            return;
        }
        if (restUsed) return; // พักไปแล้ว ออกแรงทำอย่างอื่นไม่ได้อีก
        // ยังไม่มีทักษะที่ action นี้ต้องใช้ — ไม่แสดงปุ่มเลย ไม่ใช่แสดงแบบกดไม่ได้
        // (ผู้อ่านที่ไม่ได้เรียนทักษะนั้นไม่ควรรู้ด้วยซ้ำว่าพลาดอะไรไป)
        if (action.requiresSkill && !skillUsable(action.requiresSkill)) return;
        if (action.requiresSkillKnown && !(skillsLearned[action.requiresSkillKnown] && skillsLearned[action.requiresSkillKnown].learned)) return;

        const cost = action.apCost || 1;
        if (action.requires && !used[action.requires]) {
            return; // ยังไม่ถึงลำดับ ไม่แสดงปุ่มเลย
        } else if (apCurrent >= cost) {
            buttonsHtml += `<button class="vn-explore-btn${(action.requiresSkill || action.requiresSkillKnown) ? ' vn-skill-btn' : ''}" onclick="journeyDoAction('${action.id}')">${action.prompt} (${cost} AP)</button>`;
        } else {
            buttonsHtml += `<button class="vn-explore-btn" disabled title="AP ไม่พอ">${action.prompt} (${cost} AP)</button>`;
        }
    });

    let skillProgress = '';
    Object.keys(SKILL_DEFINITIONS).forEach(skillId => {
        const entry = skillsLearned[skillId];
        if (entry && !entry.learned) {
            skillProgress += `<div class="vn-skill-progress">// ${SKILL_DEFINITIONS[skillId].progressLabel} (${entry.count}/${SKILL_DEFINITIONS[skillId].obsNeeded})</div>`;
        }
    });

    const pastNote = isPast ? `<div class="vn-explore-done">// ช่วงเวลานี้ผ่านไปแล้ว</div>` : '';

    block.innerHTML = `
        ${apHud}
        <div class="vn-explore-log">${logHtml}</div>
        <div class="vn-action-row">${buttonsHtml}</div>
        ${skillProgress}
        ${pastNote}
    `;
}

function journeyCompleteChapter() {
    journeyState = 'close';
    const ch = JOURNEY_CHAPTERS[journeyChapterIdx];
    if (ch && !journeyUnlockedIds.has(ch.endId)) journeyUnlockedIds.add(ch.endId);
    journeySaveProgress();
    // ล้าง System Log ทุกครั้งที่จบบทหนึ่ง — บันทึกของบทที่ผ่านไปแล้วไม่มี
    // ประโยชน์ต่อบทถัดไป ปล่อยค้างไว้มีแต่จะทำให้บทใหม่เปิดมาแล้วเจอ log เก่า
    // ปนอยู่ (journeyClearLog อยู่ใน index.html — เรียกแบบเช็คก่อนเหมือน
    // journeyResetProgression() ด้านบน)
    if (typeof journeyClearLog === 'function') journeyClearLog();
}

/* ปุ่ม "Continue Journey" ที่หน้าจอปิดบท — เริ่มบทถัดไปจาก step แรกของมัน
   (หรือกลับเข้าไปอ่านต่อจุดที่ค้างไว้ ถ้าเคยเข้าบทนั้นไปแล้ว) */
function journeyStartChapter(chIdx) {
    const ch = JOURNEY_CHAPTERS[chIdx];
    if (!ch) return;
    const startIdx = journeyChapterStartIndex(chIdx);
    if (startIdx < 0) return;

    journeyChapterIdx = chIdx;
    journeyState = 'step';
    journeyIndex = journeyChapterUnlocked(chIdx) ? journeyFurthestUnlockedIndexInChapter(chIdx) : startIdx;

    const step = JOURNEY_STEPS[journeyIndex];
    const isNewGround = !journeyUnlockedIds.has(step.id);
    if (isNewGround) journeyUnlockedIds.add(step.id);
    journeySaveProgress();
    if (isNewGround) journeyEnterStepSideEffects(step);

    journeyRender();
}

/* คลิกการ์ดบทในเมนูเลือกบท — บทที่ยังไม่ปลดล็อกกดไม่ได้เลย ส่วนบทที่อ่านจบ
   แล้วและกำลังยืนอยู่ที่หน้าจอปิดบทของมัน กดซ้ำจะพากลับไปหน้าจอปิดบทเดิม */
function journeySelectChapter(chIdx) {
    if (!journeyChapterUnlocked(chIdx)) return;
    if (chIdx === journeyChapterIdx && journeyState === 'close') return;
    journeyChapterIdx = chIdx;
    journeyState = 'step';
    journeyIndex = journeyFurthestUnlockedIndexInChapter(chIdx);
    journeySaveProgress();
    journeyRender();
}

function journeyChoice(stepIndex, optionIndex) {
    const opt = JOURNEY_STEPS[stepIndex].choice.options[optionIndex];
    /* ตัวเลือกที่มี branchTo = ทางแยกจริง ไม่ใช่ทางที่ถูก/ผิด — พาไป step แรก
       ของเลนนั้นแล้วจำเลนไว้ ทุก step ที่เหลือของเลนอื่นจะหายไปจากสายตา
       ผู้อ่านคนนี้ทันที (ดู journeyStepOnLane) จนกว่าจะถึงจุดบรรจบ */
    if (opt.branchTo) {
        const target = journeyIdToIndex(opt.branchTo);
        if (target < 0) return;
        journeyLane = opt.lane || null;
        journeyIndex = target;
        journeyState = 'step';
        const step = JOURNEY_STEPS[target];
        const isNewGround = !journeyUnlockedIds.has(step.id);
        if (isNewGround) journeyUnlockedIds.add(step.id);
        journeySaveProgress();
        if (isNewGround) journeyEnterStepSideEffects(step);
        journeyRender();
        return;
    }
    if (opt.correct) {
        journeyContinue(); // ตัวเลือกที่ถูกต้อง = เดินเรื่องต่อปกติเหมือนกด continueLabel (journeyContinue เรียก journeyRender() ให้เองแล้ว)
        return;
    }
    journeyState = 'warning';
    journeyPendingWarning = opt.warning;
    journeyRender();
}

function journeyAcknowledgeWarning() {
    journeyCompleteChapter();
    journeyRender();
}

function journeyGoTo(targetId) {
    if (!journeyUnlockedIds.has(targetId)) return; // ยังไม่ปลดล็อก ข้ามไปไม่ได้
    const endChIdx = JOURNEY_CHAPTERS.findIndex(ch => ch.endId === targetId);
    if (endChIdx >= 0) {
        journeyState = 'close';
        journeyChapterIdx = endChIdx;
        journeyIndex = journeyChapterLastIndex(endChIdx);
    } else {
        const idx = journeyIdToIndex(targetId);
        if (idx < 0) return;
        journeyState = 'step';
        journeyIndex = idx;
        journeyChapterIdx = journeyChapterIdxOfStepIndex(idx);
    }
    journeySaveProgress();
    journeyRender();
}

/* เมนูเลือกบท — custom dropdown (button + ul ลอย) วางใน .sub-header (นอก
   #journey-view-content) ไม่ใช้ <select> ดิบเพราะ list ที่เปิดมาถูก
   OS/เบราว์เซอร์คุมสไตล์เอง แต่งเข้าธีมมืดของเว็บไม่ได้ (ดูคอมเมนต์ CSS
   ที่ .vn-chapter-select ใน index.html) เป็น DOM side-effect แยกต่างหาก
   เรียกจาก journeyRender() ทุกครั้งเพื่อ sync ตัวเลือก + ค่าที่เลือกอยู่ให้
   ตรงกับ journeyChapterIdx เสมอ บทที่ยังไม่ปลดล็อกกดไม่ได้ ไม่สปอยล์ชื่อบท
   list ปิดอยู่เสมอหลัง re-render (เช่นตอนเลือกบทใหม่) */
function journeyChapterLabel(i) {
    const ch = JOURNEY_CHAPTERS[i];
    const unlocked = journeyChapterUnlocked(i);
    const finished = journeyChapterFinished(i);
    const isCurrent = i === journeyChapterIdx;
    let label = `บทที่ ${ch.num} — ${unlocked ? ch.title : 'ยังไม่เปิดเผย'}`;
    if (unlocked) label += finished ? (isCurrent ? ' (กำลังอ่าน · จบแล้ว)' : ' (จบแล้ว)') : (isCurrent ? ' (กำลังอ่าน)' : '');
    else label = `🔒 ${label}`;
    return label;
}

function journeyRenderChapterSelect() {
    const btn = document.getElementById('journey-chapter-select-btn');
    const list = document.getElementById('journey-chapter-dropdown-list');
    if (!btn || !list) return;
    btn.innerHTML = `<span class="vn-chapter-select-text">${journeyChapterLabel(journeyChapterIdx)}</span><span class="vn-chapter-select-arrow">▾</span>`;

    let html = '';
    JOURNEY_CHAPTERS.forEach((ch, i) => {
        const unlocked = journeyChapterUnlocked(i);
        const isCurrent = i === journeyChapterIdx;
        const cls = ['vn-chapter-dropdown-item'];
        if (!unlocked) cls.push('locked');
        if (isCurrent) cls.push('current');
        const clickAttr = unlocked ? ` onclick="journeySelectChapterFromDropdown(${i})"` : '';
        html += `<li class="${cls.join(' ')}" role="option" aria-selected="${isCurrent}"${clickAttr}>${journeyChapterLabel(i)}</li>`;
    });
    list.innerHTML = html;
    journeyCloseChapterDropdown();
}

function journeyToggleChapterDropdown(evt) {
    if (evt) evt.stopPropagation();
    const dropdown = document.getElementById('journey-chapter-dropdown');
    const list = document.getElementById('journey-chapter-dropdown-list');
    if (!dropdown || !list) return;
    const opening = list.hasAttribute('hidden');
    if (opening) journeyOpenChapterDropdown(); else journeyCloseChapterDropdown();
}

function journeyOpenChapterDropdown() {
    const btn = document.getElementById('journey-chapter-select-btn');
    const list = document.getElementById('journey-chapter-dropdown-list');
    if (!btn || !list) return;
    list.removeAttribute('hidden');
    btn.setAttribute('aria-expanded', 'true');
    // ปิดเองเมื่อคลิกที่อื่นนอกกล่อง — ผูก listener แค่ตอนเปิดจริง แล้วถอดทิ้ง
    // ทันทีที่ปิด กัน listener ค้างสะสมทุกครั้งที่ journeyRenderChapterSelect()
    // เรียก journeyCloseChapterDropdown() ระหว่าง re-render ปกติ
    setTimeout(() => document.addEventListener('click', journeyCloseChapterDropdown, { once: true }), 0);
}

function journeyCloseChapterDropdown() {
    const btn = document.getElementById('journey-chapter-select-btn');
    const list = document.getElementById('journey-chapter-dropdown-list');
    if (!btn || !list) return;
    list.setAttribute('hidden', '');
    btn.setAttribute('aria-expanded', 'false');
}

function journeySelectChapterFromDropdown(chIdx) {
    journeyCloseChapterDropdown();
    journeySelectChapter(chIdx);
}

/* timeline แสดงเฉพาะ checkpoint ของบทที่กำลังอ่านอยู่ (+ จุดจบบทนั้น) —
   ไม่ปนข้ามบท เพราะแต่ละบทยาวขึ้นเรื่อยๆ จุดจะถี่จนกดไม่ถูกถ้ารวมกันหมด */
function journeyBuildTimelineHTML() {
    const ch = JOURNEY_CHAPTERS[journeyChapterIdx];
    const start = journeyChapterStartIndex(journeyChapterIdx);
    const last = journeyChapterLastIndex(journeyChapterIdx);
    const total = last - start + 1; // ตำแหน่งที่ total = จุดจบบท
    let html = '<div class="vn-timeline">';
    for (let n = 0; n <= total; n++) {
        const isEnd = n === total;
        // step ของเลนที่ผู้อ่านไม่ได้เลือก ไม่ต้องมีจุดใน timeline เลย
        if (!isEnd && !journeyStepOnLane(JOURNEY_STEPS[start + n])) continue;
        const id = isEnd ? ch.endId : JOURNEY_STEPS[start + n].id;
        const unlocked = journeyUnlockedIds.has(id);
        const isCurrent = isEnd ? (journeyState === 'close') : (journeyState !== 'close' && journeyIndex === start + n);
        const label = isEnd ? `จุดจบบทที่ ${ch.num}` : JOURNEY_STEPS[start + n].tag;
        const cls = ['vn-tp'];
        if (unlocked) cls.push('unlocked');
        if (isCurrent) cls.push('current');
        if (isEnd) cls.push('end');
        const clickAttr = unlocked ? ` onclick="journeyGoTo('${id}')"` : '';
        html += `<span class="${cls.join(' ')}" title="${label}"${clickAttr}></span>`;
        if (n < total) {
            const nextId = (n + 1 === total) ? ch.endId : JOURNEY_STEPS[start + n + 1].id;
            html += `<span class="vn-tp-line${journeyUnlockedIds.has(nextId) ? ' unlocked' : ''}"></span>`;
        }
    }
    html += '</div>';
    return html;
}

/* หน้าจอปิดบท — บทที่ยังมีบทถัดไปจะมีปุ่ม Continue Journey ให้กดเริ่มบทนั้น
   ต่อทันที บทสุดท้ายเท่าที่เขียนไว้แล้วจะเหลือแค่ลิงก์ออกจากเนื้อเรื่อง */
/* บทที่เคยดูฉากสรุปจบไปแล้วใน session นี้ — ย้อนกลับมาที่หน้าจอปิดบทอีกครั้ง
   จะข้าม animation ให้เลย ไม่บังคับให้นั่งดูซ้ำทุกครั้งที่คลิก timeline */
const journeyReflectionSeen = new Set();

/* จังหวะของฉากปิดบท — เวลาต่อประโยคคิดจากความยาวของประโยคนั้นเอง ไม่ใช่ค่าคงที่
   ค่าเดียวทั้งชุด ประโยคสั้นอย่าง "ฉันได้รู้ถึงการคงอยู่" ไม่ต้องค้างนานเท่าประโยค
   ยาว และประโยคยาวก็ไม่ถูกดันหายไปก่อนอ่านจบ (หลักเดียวกับที่ ui-ux-pro-max
   เรียกว่า interaction timing follows the component, ไม่ใช่ตัวเลขตายตัว) */
const REFLECT_BASE = 2.6;           // เวลาขั้นต่ำต่อประโยค (วินาที)
const REFLECT_PER_CHAR = 0.075;     // เวลาที่บวกเพิ่มต่อหนึ่งตัวอักษร
const REFLECT_MAX_LINE = 6.5;       // เพดานต่อประโยค กันประโยคยาวค้างนานเกินไป
const REFLECT_OVERLAP = 0.62;       // ประโยคถัดไปเริ่มตอนประโยคก่อนเดินไปได้เท่าไหร่ของตัวเอง
const REFLECT_TOTAL_CAP = 30;       // เพดานความยาวทั้งชุด (วินาที) — ถ้าเกิน จะบีบ
                                    // ช่องว่างระหว่างประโยคลง ไม่ลดเวลาอ่านของแต่ละบรรทัด
/* ประโยคเก่ายังจางค้างอยู่ตอนประโยคใหม่ขึ้นมา จงใจให้เหลื่อมกันเล็กน้อย ระยะเลื่อน

/* ฉากประมวลความคิดปิดบท — ประโยคมุมมองบุคคลที่หนึ่งลอยขึ้นมาทีละประโยคแล้ว
   จางหายไป จบแล้วการ์ดปิดบท (พร้อมสรุปได้/เสียแบบอ่านย้อนได้) ค่อยจางขึ้นมาแทน
   ทำด้วย CSS animation-delay ล้วนๆ ไม่ใช้ setTimeout — กดข้ามหรือสลับ step
   กลางทางแล้วไม่มี timer ค้างไว้ให้ต้องเก็บกวาด */
function journeyBuildChapterCloseHTML() {
    const ch = JOURNEY_CHAPTERS[journeyChapterIdx];
    const next = JOURNEY_CHAPTERS[journeyChapterIdx + 1];
    // reflections เป็นอาเรย์ตรงๆ หรือฟังก์ชันก็ได้ — บทที่แตกเป็นสองเลนใช้
    // ฟังก์ชันเพื่อสลับบางประโยคตามร่าง/เลนที่ผู้อ่านเลือก
    const lines = (typeof ch.reflections === 'function' ? ch.reflections() : ch.reflections) || [];
    // "เคยดูจบแล้ว" ต้องหมายถึงดูจนจบจริงๆ เท่านั้น (ดู journeyRender ที่รอ
    // animationend ของการ์ดปิดบท) — เดิมทำเครื่องหมายไว้ตั้งแต่ตอน build HTML
    // ซึ่งพังเวลาโหลดหน้าเว็บมาแล้วเซฟค้างอยู่ที่หน้าจอปิดบท เพราะ init เรียก
    // journeyReset() ตั้งแต่ story-view ยังไม่ถูกแสดง ฉากเลยถูกนับว่าดูจบไป
    // แล้วทั้งที่ผู้อ่านยังไม่เห็นอะไรเลยสักประโยค
    const seen = journeyReflectionSeen.has(ch.endId) || lines.length === 0;

    let buttons = '';
    if (next) {
        const label = journeyChapterUnlocked(journeyChapterIdx + 1)
            ? `อ่านบทที่ ${next.num} ต่อ`
            : (ch.nextLabel || 'Continue Journey');
        buttons += `<button class="vn-next-chapter-btn" onclick="journeyStartChapter(${journeyChapterIdx + 1})">${label} <span class="arrow">►</span></button>`;
    }
    buttons += `<button onclick="switchView('memory-view')">ดูบทวิเคราะห์เต็ม → MEMORY MECHANICS</button>`
        + `<button onclick="switchView('landing-view')">กลับสู่ฐานข้อมูล</button>`;

    let seqHtml = '';
    let closeDelay = 0;
    if (lines.length) {
        // 1) เวลาของแต่ละประโยคคิดจากความยาวของมันเอง
        const durations = lines.map(r => Math.min(REFLECT_MAX_LINE, REFLECT_BASE + r.text.length * REFLECT_PER_CHAR));
        // 2) ประโยคถัดไปเริ่มตอนประโยคก่อนหน้าเดินไปได้ราว 62% ของตัวเอง
        let delays = [0];
        for (let i = 1; i < lines.length; i++) delays.push(delays[i - 1] + durations[i - 1] * REFLECT_OVERLAP);
        // 3) ถ้าทั้งชุดยาวเกินเพดาน บีบเฉพาะช่องว่างระหว่างประโยค เวลาอ่านของแต่ละ
        //    บรรทัดไม่ถูกลด (ผู้อ่านต้องอ่านทันเสมอ)
        const total = delays[delays.length - 1] + durations[durations.length - 1];
        if (total > REFLECT_TOTAL_CAP) {
            const squeeze = (REFLECT_TOTAL_CAP - durations[durations.length - 1]) / (total - durations[durations.length - 1]);
            delays = delays.map(d => d * squeeze);
        }
        closeDelay = delays[delays.length - 1] + durations[durations.length - 1];
        const linesHtml = lines.map((r, i) =>
            `<span class="vn-reflect-line ${r.kind}" style="animation-delay:${delays[i].toFixed(2)}s;animation-duration:${durations[i].toFixed(2)}s">${r.text}</span>`
        ).join('');
        seqHtml = `<div class="vn-reflect-seq">${linesHtml}`
            + `<button class="vn-reflect-skip" onclick="journeySkipReflection()">ข้ามบทสรุป ►</button>`
            + '</div>';
    }

    // สรุปแบบอ่านย้อนได้ในการ์ดปิดบท — คนที่กดข้าม animation ไปไม่พลาดเนื้อหา
    let ledgerHtml = '';
    if (lines.length) {
        const row = kind => lines.filter(r => r.kind === kind)
            .map(r => `<li>${r.text}</li>`).join('');
        ledgerHtml = '<div class="vn-ledger">'
            + `<div class="vn-ledger-col gain"><div class="vn-ledger-head">สิ่งที่ได้มา</div><ul>${row('gain')}</ul></div>`
            + `<div class="vn-ledger-col loss"><div class="vn-ledger-head">สิ่งที่เสียไป</div><ul>${row('loss')}</ul></div>`
            + '</div>';
    }

    return `
            <div id="vn-chapter-close" class="vn-chapter-close${seen ? ' skipped' : ''}">
                ${seqHtml}
                <div class="scene-close" style="animation-delay:${closeDelay.toFixed(2)}s">
                    <div class="scene-close-tag">${ch.closeTag}</div>
                    <p>${ch.closeText}</p>
                    ${ledgerHtml}
                    <div class="scene-close-links">${buttons}</div>
                </div>
            </div>
`;
}

/* กดข้าม — ตัด animation ทั้งชุดทิ้งแล้วโชว์การ์ดปิดบททันที (CSS คุมด้วยคลาส
   .skipped บนตัวครอบ ไม่ต้องยุ่งกับ animation ของแต่ละบรรทัดทีละอัน) */
function journeySkipReflection() {
    const wrap = document.getElementById('vn-chapter-close');
    if (wrap) wrap.classList.add('skipped');
    const ch = JOURNEY_CHAPTERS[journeyChapterIdx];
    if (ch) journeyReflectionSeen.add(ch.endId); // กดข้ามเอง = ไม่ต้องเล่นให้ดูอีกใน session นี้
}

function journeyRender() {
    const container = document.getElementById('journey-view-content');
    if (!container) return;

    journeyRenderChapterSelect();
    let html = '<div class="scene-container">' + journeyBuildTimelineHTML();

    if (journeyState === 'close') {
        html += journeyBuildChapterCloseHTML() + '</div>';
        container.innerHTML = html;
        if (typeof applySpoilerRedaction === 'function') applySpoilerRedaction(container);
        // การ์ดปิดบทจางขึ้นมาหลังประโยคสุดท้ายจบ = ฉากประมวลความคิดเล่นจบแล้ว
        // จังหวะนี้เท่านั้นถึงนับว่า "ดูจบ" (animation ไม่เดินตอน view ยังซ่อนอยู่
        // event จึงไม่ยิง และฉากจะไปเล่นตอนเปิด story-view จริงๆ ตามที่ควรเป็น)
        const card = container.querySelector('.vn-chapter-close .scene-close');
        const chNow = JOURNEY_CHAPTERS[journeyChapterIdx];
        if (card && chNow) {
            card.addEventListener('animationend', () => {
                journeyReflectionSeen.add(chNow.endId);
                // ยุบกล่องประโยคที่เล่นจบแล้วทิ้ง (CSS ทำ transition ให้) — ถ้าปล่อยไว้
                // กล่องเปล่าสูง 230px จะดันการ์ดปิดบทให้ค้างอยู่ต่ำกว่าตำแหน่งที่ควรอยู่
                const wrap = document.getElementById('vn-chapter-close');
                if (wrap) wrap.classList.add('skipped');
            }, { once: true });
        }
        if (typeof journeyDevRenderSceneTools === 'function') journeyDevRenderSceneTools();
        return;
    }

    const step = JOURNEY_STEPS[journeyIndex];
    // paragraphs อาจเป็น array ตรงๆ หรือฟังก์ชัน (ดู step "transformation" —
    // เนื้อหาขึ้นกับว่ากด action ก่อนหน้าอะไรไปบ้าง เช่น เตะ/สะบัด Skyther)
    const paragraphs = typeof step.paragraphs === 'function' ? step.paragraphs() : step.paragraphs;
    html += '<div class="vn-stage">';
    html += `<div class="scene-tag${step.key ? ' key' : ''}">${step.tag}</div>`;

    paragraphs.forEach((p, i) => {
        html += `<p class="scene-text" style="animation-delay:${(i * 0.09).toFixed(2)}s">${p}</p>`;
    });

    if (step.sysnote) {
        const delay = (paragraphs.length * 0.09 + 0.1).toFixed(2);
        html += `<div class="scene-sysnote" style="animation-delay:${delay}s">${step.sysnote}</div>`;
    }

    if (step.actions) {
        html += `<div id="vn-explore-block" class="vn-explore-block"></div>`;
    }

    if (journeyState === 'warning') {
        html += `<div class="vn-warning-box"><strong>สัญชาตญาณเก่าไม่ยอมให้ทางนี้เกิดขึ้น</strong><br>${journeyPendingWarning}</div>`;
        html += `<div class="vn-actions"><button class="vn-continue-btn" onclick="journeyAcknowledgeWarning()">เข้าใจแล้ว <span class="arrow">►</span></button></div>`;
    } else if (step.choice) {
        // ปุ่มเดียวก่อนเสมอ (ไม่สปอยล์ตัวเลือก) — hover/แตะ ถึงแยกเป็นตัวเลือกจริง
        html += `<div class="vn-decision" onclick="this.classList.toggle('revealed')">
            <div class="vn-decision-prompt">${step.choice.question}<span class="hint">// ชี้เพื่อดูทางเลือก</span></div>
            <div class="vn-decision-options">`;
        step.choice.options.forEach((opt, i) => {
            html += `<button class="vn-choice-btn" onclick="event.stopPropagation(); journeyChoice(${journeyIndex}, ${i})">${opt.label}</button>`;
        });
        html += `</div></div>`;
    } else {
        html += `<div class="vn-actions"><button class="vn-continue-btn" onclick="journeyContinue()">${step.continueLabel} <span class="arrow">►</span></button></div>`;
    }

    html += '</div></div>';
    container.innerHTML = html;
    // sysnote อ้างชื่อสายพันธุ์จริง (KARVOS, SKYTHER, ...) ตัวไหนที่ยังไม่ปลดล็อก
    // ต้องถูกถมแถบไว้เหมือนในฐานข้อมูล — ดู applySpoilerRedaction ใน index.html
    if (typeof applySpoilerRedaction === 'function') applySpoilerRedaction(container);

    if (step.actions) journeyRenderActionsBlock(step);

    // เครื่องมือ DEV (dropdown เลือกฉาก) อ่านสถานะปลดล็อกจาก journeyUnlockedIds
    // จึงต้องวาดใหม่ทุกครั้งที่เนื้อเรื่องขยับ ไม่ใช่แค่ตอนสลับ DEV MODE
    if (typeof journeyDevRenderSceneTools === 'function') journeyDevRenderSceneTools();
}
