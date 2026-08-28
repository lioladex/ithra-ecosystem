/* =================================================================
   JOURNEY OF CONFLUENCE (SYS-SIM)
   ผู้เล่นสวมบทเป็น Confluence เอง เล่าแบบ visual-novel ทีละสเต็ป
   (ดูตัวควบคุมการเล่น journeyReset/journeyContinue/journeyChoice
   ด้านล่าง — เรียกจาก index.html: journeyReset() ทุกครั้งที่เข้าสู่
   'story-view' ผ่าน switchView())

   จังหวะการเล่าตั้งใจให้ "พัฒนา" ไปพร้อมกับตัว Confluence:
     STEP 0  ไม่มีสรรพนาม ไม่มี "คุณ" เลย (ระยะ 0 — ก่อนตื่นรู้)
     STEP 1  "คุณ" ปรากฏขึ้นครั้งแรกตรงจุดตื่นรู้ (ระยะ 1)
     STEP 2  ยุคความรู้สึกนำทาง time-skip เข้าสู่ร่าง Luvenn ที่ POI-V01
             (ป่าหมอกชั้นกลาง Verath — ดูพิกัดใน data/ecosystem.js)
     STEP 3–5 ฉาก T-0 → T+3 ตรงกับเส้นเวลาที่วิเคราะห์ไว้ใน
              data/memoryMechanics.js — STEP 5 จบด้วยตัวเลือกสองทาง
              เพราะเนื้อเรื่องเป็นเส้นตรง (linear) ทางเลือก "วิ่งหนี"
              จึงย้อนกลับไม่ได้จริง — สัญชาตญาณ Vorthak ชนะเสมอ
              ตรงกับที่วิเคราะห์ไว้แล้วว่า T+4 คือ "สวนกลางอากาศ"
              ไม่ใช่การวิ่งหนี

   สภาพแวดล้อมอ้างอิงจาก data/ecosystem.js (ZONE 2: The Mist Layer —
   แสงกระจายเป็นลำสีส้ม-ทอง ความชื้น 100%) และจาก field `prompt` ของ
   Luvenn/Karvos ใน creatures/*.js (พืชพรรณ, พื้นดินโคลน, รากไม้พันกัน)
================================================================= */

const JOURNEY_STEPS = [
    {
        tag: "T −2,000,000,000 ปี — ก่อนสิ่งใดมีชื่อ",
        paragraphs: [
            `ไม่มีเวลา ไม่มีสถานที่ ไม่มีคำว่า "ที่นี่" หรือ "ตอนนี้" มีเพียงการตอบสนองที่ไหลต่อกันไปเรื่อยๆ โดยไม่เคยหยุดพักสักครั้งเดียว`,
            `หนีเมื่อพื้นสั่นสะเทือนแบบหนึ่ง เข้าหาเมื่อกลิ่นอ่อนหวานลอยมาแบบหนึ่ง แล้วเมื่อความเย็นแบบหนึ่งกัดกินเซลล์จนร่างเดิมใช้การไม่ได้อีกต่อไป ก็ปล่อยมันทิ้งไว้เบื้องหลังเงียบๆ สวมร่างใหม่ต่อไปโดยไม่มีแม้แต่คำถามเดียวผุดขึ้นมาให้ต้องตอบ`,
            `การกระทำเดิมซ้ำแล้วซ้ำเล่านับล้านครั้งค่อยๆ ทับถมกันจนกลายเป็นร่องลึกที่ไม่มีใครขุด ทว่าทุกร่างที่สืบทอดต่อกันมากลับก้าวลงไปเดินตามร่องนั้นได้เองโดยอัตโนมัติ`,
            `สองพันล้านปีไหลผ่านไปเงียบๆ แบบนั้น และไม่มีสิ่งใดเคยรู้สึกว่ามันนานเลยแม้แต่น้อย เพราะยังไม่มีสิ่งใดรู้จักคำว่า "นาน" ด้วยซ้ำ ไม่มีแม้แต่สิ่งใดที่รู้ว่ามี "มัน" อยู่จริง`
        ],
        sysnote: `[LOG] BASELINE INSTINCT INTEGRITY: 2,014,662 GENERATIONS // SELF-REFERENTIAL AWARENESS: NULL`,
        continueLabel: "มันคืออะไร ?"
    },
    {
        tag: "T-0 — วินาทีที่หยุด",
        key: true,
        paragraphs: [
            `แล้ววันหนึ่ง ท่ามกลางความเงียบที่ไม่เคยแตกต่างไปจากวันอื่นเลยสักวัน ก็เกิดสิ่งที่ไม่เคยเกิดขึ้นมาก่อนตลอดสองพันล้านปีที่ผ่านมา`,
            `ก้าวหนึ่งที่กำลังจะก้าวออกไปตามปกติ — ไม่ก้าว`,
            `ไม่ใช่เพราะกลัว ไม่ใช่เพราะมีภัยมาถึง มีเพียงบางสิ่งที่ไม่เคยมีมาก่อนแทรกตัวเข้ามาระหว่างแรงกระตุ้นกับการตอบสนอง เป็นช่องว่างเล็กจิ๋วช่องหนึ่งที่ไม่เคยมีอยู่มาก่อนเลย`,
            `และในช่องว่างนั้นเอง มีบางอย่างเกิดขึ้น เป็นครั้งแรกที่ <em>รู้สึกถึง</em> น้ำหนักของตัวเองกดลงบนขาทั้งสี่ที่ยืนอยู่นิ่งๆ รู้สึกถึงไอความชื้นเย็นฉ่ำที่เกาะอยู่ทั่วผิว รู้สึกถึงจังหวะลมหายใจของตัวเองที่ไหลเข้าออกช้าๆ ราวกับเพิ่งค้นพบว่ามันมีอยู่`,
            `"คุณ" คำนี้ยังไม่มีความหมายอะไรเลยในตอนนี้ แต่นับจากวินาทีนี้เป็นต้นไป มีบางสิ่งกำลังรู้สึกถึงตัวมันเองเป็นครั้งแรกในชีวิต และนั่นคือทั้งหมดที่จำเป็นต้องมีเพื่อให้เรื่องราวเริ่มต้นขึ้น`
        ],
        sysnote: `[LOG] ANOMALY DETECTED — SELF-REFERENTIAL LOOP INITIATED // DESIGNATION: "CONFLUENCE"`,
        continueLabel: "เริ่มต้นยังไง ?"
    },
    {
        tag: "หลายพันปีถัดมา — ยุคที่ความรู้สึกนำทาง",
        paragraphs: [
            `จำอะไรไม่ได้เลยสักอย่าง ไม่มีภาพร่างเก่าหลงเหลืออยู่ ไม่มีชื่อสถานที่ มีเพียง <em>ความรู้สึกว่าอะไรถูกต้อง</em> ล่องลอยอยู่เหนือสัญชาตญาณเดิมเหมือนเงาบางๆ ที่ปกคลุมมันไว้ทั้งหมดโดยไม่เคยเปลี่ยนแปลงมันเลยแม้แต่นิดเดียว`,
            `หลายพันปีผ่านไปแบบนั้น ตื่น เดิน กิน หนี นอน วนซ้ำไปเรื่อยๆ จนกระทั่งวันหนึ่งลึกเข้าไปในป่าหมอกชั้นกลางของทวีป Verath ที่ซึ่งแสงแดดจาก Ashvel ไม่เคยตกกระทบพื้นดินตรงๆ อีกต่อไป มีเพียงกระจายผ่านหมอกหนาลงมาเป็นลำสีส้ม-ทองอ่อนๆ ท่ามกลางความชื้นที่จับตัวเป็นหยดน้ำอยู่บนทุกใบไม้ตลอดเวลา — ร่างที่คุณกำลังสวมอยู่ตอนนี้ก็หยุดเดินลง`,
            `มันเป็นร่างสูงโปร่งสี่ขา คอเรียวยาวชะลูด มีแผงคล้ายใบไม้พับแนบเรียงเป็นริ้วลงมาตามท้ายทอย ยืนอยู่ท่ามกลางลำต้นไม้ปกคลุมมอสสูงชะลูดที่ทะลุผ่านชั้นหมอกขึ้นไปเกินสองร้อยเมตร รากอากาศห้อยระย้าลงมาจากกิ่งสูง เถาวัลย์เลื้อยพันรอบลำต้นจนแทบมองไม่เห็นเปลือกไม้ด้านใน — เสียงหยดน้ำจากใบไม้ที่ตกกระทบพื้นดินชื้นเป็นจังหวะเดียวที่แทรกความเงียบของป่าทั้งผืน`
        ],
        continueLabel: "ที่นี่คือที่ไหน ?",
        unlocks: ["LUVENN"]
    },
    {
        tag: "T-0 — ฝูงอาบแสง",
        paragraphs: [
            `ช่องว่างเล็กๆ บนเรือนยอดเปิดออกพอดีเหนือหัว ปล่อยให้ลำแสงสีทองอมส้มลอดผ่านม่านหมอกลงมาทาบบนพื้นป่าเป็นวงกลมนวลๆ ทั่วทั้งฝูงหยุดเดินพร้อมกันโดยไม่มีใครสั่ง เหมือนรู้กันเองว่านี่คือช่วงเวลาที่รอคอย`,
            `รากฝอยสีเขียวอ่อนที่ปลายกีบผุดออกมาจิกลงในดินชื้นเย็น คอทุกคอถูกชูขึ้นจนสุดความยาว หันไปทางเดียวกันเหมือนดอกไม้พร้อมใจกันบานรับแดด แล้วแผงที่เคยพับแนบกับต้นคอก็เริ่มคลี่ตัวออกทีละริ้ว ก่อนจะกางแผ่กว้างเต็มที่เป็นวงพัดใหญ่รอบหัวคล้ายหางนกยูง เส้นใบบางๆ บนแผงเรืองแสงสีเขียวมรกตจางๆ สั่นไหวทุกครั้งที่รับแสงแต่ละหยดที่ลอดผ่านเรือนยอดลงมากระทบ`,
            `ไอน้ำอุ่นลอยขึ้นจากแผงที่เพิ่งกางเต็มที่ ปนกับกลิ่นดินชื้นและใบไม้เน่าที่หอมอ่อนๆ ไม่มีคำใดอธิบายความรู้สึกนี้ได้ครบถ้วน แต่ถ้าต้องมีคำสักคำ คำที่ใกล้เคียงที่สุดคือ — <em>อุ่น อิ่ม ปลอดภัย มีชีวิต</em> นี่คือครั้งแรกที่ความรู้สึกทั้งหมดประกอบรวมกันเป็นสิ่งที่เกือบจะเรียกได้ว่า "ความสุข"`
        ],
        continueLabel: "เกิดอะไรขึ้นกันแน่ ?"
    },
    {
        tag: "T+1 / T+2 — แรงสั่นใต้ดิน",
        paragraphs: [
            `แล้วพื้นดินก็สั่น — ไม่ใช่จังหวะของสายลมที่พัดผ่านเรือนยอด ไม่ใช่ฝีเท้าของฝูงเดียวกันเอง แต่เป็นจังหวะที่แผ่วเบา สม่ำเสมอ เยือกเย็น และกำลังเข้าใกล้จากหลายทิศพร้อมกันอย่างมีการวางแผน`,
            `ร่างกายรับรู้สิ่งนี้ก่อนที่ความคิดจะตามทันเสียอีก แผงที่เพิ่งกางเต็มที่หุบตัวกลับตามสัญชาตญาณในพริบตา คอที่เพิ่งชูสุดก้มต่ำลงกะทันหัน และทั่วทั้งฝูงก็ระเบิดออกวิ่งกระจัดกระจายไปคนละทิศทางพร้อมกัน เสียงกีบกระแทกโคลนดังก้องไปทั่วป่าหมอกที่เมื่อครู่ยังเงียบสงบ`,
            `หัวใจเต้นเร็วขึ้นเป็นครั้งแรกด้วยเหตุผลที่ไม่ใช่การออกแรงทางกาย`
        ],
        continueLabel: "นั่นคืออะไร ?"
    },
    {
        tag: "T+3 — ภาพซ้อนทับ",
        key: true,
        unlocks: ["KARVOS"],
        paragraphs: [
            `เงาสี่ขาตัวหนึ่งพุ่งทะลุพุ่มไม้เบื้องหน้าออกมากลางแอ่งโคลนที่แสงสีส้มยังทาบอยู่ ลำตัวลึก อกกว้าง สันหลังโหนกเป็นแนวยาว หูตั้งแหลมสองข้างสั่นไหวรับเสียง หางยาวพวัดตามจังหวะการกระโจน`,
            `และในเสี้ยววินาทีนั้นเอง เกิดบางอย่างที่ไม่ควรเกิดขึ้นได้เลยในร่างที่เพิ่งมีสติมาได้ไม่กี่พันปี — ภาพเงาตรงหน้าซ้อนทับพอดีเป๊ะกับบางสิ่งที่ไม่เคยเห็นมาก่อนเลยในชีวิตนี้ แต่กลับคุ้นเคยอย่างที่สุด ราวกับเคยเผชิญหน้ากับมันมาแล้วนับล้านครั้งในอีกชีวิตหนึ่งที่จำไม่ได้อีกต่อไป`,
            `สัญชาตญาณหนึ่งตะโกนออกมาจากที่ไหนสักแห่งที่ลึกกว่าความทรงจำใดๆ ทั้งสิ้น: <em>ยืนหยัดไว้</em>`,
            `สัญชาตญาณอีกเสียงหนึ่งตะโกนสวนทางกันพอดี จากร่างเดียวกัน ในวินาทีเดียวกัน: <em class="glow-danger">วิ่ง! วิ่งเดี๋ยวนี้!</em>`,
            `ขาข้างหนึ่งที่กำลังจะก้าวหนีค้างอยู่กลางอากาศเหนือโคลนเปียก หยดน้ำจากใบไม้เบื้องบนยังคงหยดลงมาเป็นจังหวะเหมือนไม่มีอะไรเกิดขึ้น ในขณะที่ร่างทั้งร่างไม่รู้ว่าจะลงพื้นไปข้างหน้าหรือข้างหลัง`
        ],
        choice: {
            question: "เมื่อต้องเผชิญหน้ากับอันตราย เจ้าจะทำเช่นไร ?",
            options: [
                {
                    label: "วิ่งหนีไปรวมกลุ่ม",
                    correct: false,
                    warning: `ขาพยายามลงพื้นไปข้างหลัง — แต่ลงไม่ถึง ไม่ว่าจะพยายามหนีมากแค่ไหน ก็ไม่อาจก้าวข้ามได้ สัญชาตญาณที่ฝังลึกกว่าความคิดใดๆ ได้ตัดสินใจแทนไปแล้วตั้งแต่ก่อนที่จะทันรู้ตัวด้วยซ้ำ`
                },
                { label: "เผชิญหน้ากับมัน", correct: true }
            ]
        }
    }
];

const JOURNEY_CLOSE_BODY_HTML = `
                <div class="scene-close">
                    <div class="scene-close-tag">// บันทึกจำลองหยุดชั่วคราว ณ จุดตัดสินใจแรกของ Confluence</div>
                    <p>สิ่งที่เกิดขึ้นถัดจากนี้ — การเผชิญหน้า การรอดชีวิตอย่างไม่น่าเชื่อ และความเงียบที่ตามมาซึ่งกลายเป็นสติดวงแรก — มีสรุปเชิงวิเคราะห์เต็มรูปแบบอยู่แล้วในเอกสาร MEMORY MECHANICS ส่วนโมดูลจำลองแบบเต็ม (Visual Novel Interface) ที่ให้เลือกทางเดินเองได้ทั้งเนื้อเรื่อง ยังอยู่ระหว่างการพัฒนา</p>
                    <div class="scene-close-links">
                        <button onclick="switchView('memory-view')">ดูบทวิเคราะห์เต็ม → MEMORY MECHANICS</button>
                        <button onclick="switchView('landing-view')">กลับสู่ฐานข้อมูล</button>
                    </div>
                </div>
`;

/* --- ตัวควบคุมการเล่น (VN stepper) พร้อม progression / checkpoint timeline ---
   บันทึกความคืบหน้าไว้ใน localStorage (คีย์เดียวต่อ origin — ไม่ผูกกับ IP
   เครื่อง ทนต่อการ refresh/ปิดเปิดเบราว์เซอร์ใหม่ ตราบใดที่เป็นเบราว์เซอร์/
   โปรไฟล์เดิมและไม่ได้ล้าง site data)
     journeyFurthest = index ไกลสุดที่เคยปลดล็อก (0..JOURNEY_STEPS.length,
                       ค่า JOURNEY_STEPS.length หมายถึงปลดล็อกจุดจบแล้ว)
     journeyIndex    = สเต็ปที่กำลังแสดงอยู่ตอนนี้ (0..JOURNEY_STEPS.length-1)
     journeyState    = 'step' | 'warning' | 'close'
   คลิก checkpoint ย้อนกลับไปจุดที่ปลดล็อกแล้วได้เสมอ แต่ข้ามไปจุดที่ยัง
   ไม่ปลดล็อกไม่ได้ (ปุ่มจะไม่มี onclick เลยสำหรับจุดที่ล็อกอยู่) --- */
const JOURNEY_STORAGE_KEY = 'ithra_journey_progress_v1';

let journeyIndex = 0;
let journeyFurthest = 0;
let journeyState = 'step'; // 'step' | 'warning' | 'close'
let journeyPendingWarning = '';

function journeySaveProgress() {
    try {
        const current = journeyState === 'close' ? JOURNEY_STEPS.length : journeyIndex;
        localStorage.setItem(JOURNEY_STORAGE_KEY, JSON.stringify({ current, furthest: journeyFurthest }));
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
    const maxIndex = JOURNEY_STEPS.length;
    if (saved && typeof saved.furthest === 'number') {
        journeyFurthest = Math.min(Math.max(saved.furthest, 0), maxIndex);
        const resumeAt = Math.min(Math.max(saved.current || 0, 0), maxIndex);
        if (resumeAt >= maxIndex) {
            journeyState = 'close';
            journeyIndex = maxIndex - 1;
        } else {
            journeyState = 'step';
            journeyIndex = resumeAt;
        }
    } else {
        journeyFurthest = 0;
        journeyIndex = 0;
        journeyState = 'step';
    }
    journeyBackfillUnlocks();
    journeyRender();
}

/* ปลดล็อก species ของทุก checkpoint ที่เคยไปถึงแล้วแบบเงียบๆ (ไม่ toast ซ้ำ)
   เผื่อกรณี resume จาก progress เก่า หรือระบบ unlock นี้เพิ่งถูกเพิ่มเข้ามา
   ทีหลังหลังจากผู้เล่นบางคนเล่นผ่านจุดนั้นไปแล้ว */
function journeyBackfillUnlocks() {
    if (typeof unlockSpecies !== 'function') return;
    const maxStepIndex = Math.min(journeyFurthest, JOURNEY_STEPS.length - 1);
    for (let i = 0; i <= maxStepIndex; i++) {
        const step = JOURNEY_STEPS[i];
        if (step.unlocks) unlockSpecies(step.unlocks, { silent: true });
    }
}

function journeyContinue() {
    journeyIndex++;
    journeyState = 'step';
    const isNewGround = journeyIndex > journeyFurthest;
    if (isNewGround) journeyFurthest = journeyIndex;
    journeySaveProgress();

    const step = JOURNEY_STEPS[journeyIndex];
    if (isNewGround && step && step.unlocks && typeof unlockSpecies === 'function') {
        unlockSpecies(step.unlocks);
    }

    journeyRender();
}

function journeyChoice(stepIndex, optionIndex) {
    const opt = JOURNEY_STEPS[stepIndex].choice.options[optionIndex];
    if (opt.correct) {
        journeyState = 'close';
        if (JOURNEY_STEPS.length > journeyFurthest) journeyFurthest = JOURNEY_STEPS.length;
        journeySaveProgress();
    } else {
        journeyState = 'warning';
        journeyPendingWarning = opt.warning;
    }
    journeyRender();
}

function journeyAcknowledgeWarning() {
    journeyState = 'close';
    if (JOURNEY_STEPS.length > journeyFurthest) journeyFurthest = JOURNEY_STEPS.length;
    journeySaveProgress();
    journeyRender();
}

function journeyGoTo(targetIndex) {
    if (targetIndex > journeyFurthest) return; // ยังไม่ปลดล็อก ข้ามไปไม่ได้
    if (targetIndex >= JOURNEY_STEPS.length) {
        journeyState = 'close';
        journeyIndex = JOURNEY_STEPS.length - 1;
    } else {
        journeyState = 'step';
        journeyIndex = targetIndex;
    }
    journeySaveProgress();
    journeyRender();
}

function journeyBuildTimelineHTML() {
    const total = JOURNEY_STEPS.length; // + 1 จุดจบ
    let html = '<div class="vn-timeline">';
    for (let i = 0; i <= total; i++) {
        const isEnd = i === total;
        const unlocked = i <= journeyFurthest;
        const isCurrent = isEnd ? (journeyState === 'close') : (journeyState !== 'close' && journeyIndex === i);
        const label = isEnd ? 'จุดจบฉากเกริ่นนำ' : JOURNEY_STEPS[i].tag;
        const cls = ['vn-tp'];
        if (unlocked) cls.push('unlocked');
        if (isCurrent) cls.push('current');
        if (isEnd) cls.push('end');
        const clickAttr = unlocked ? ` onclick="journeyGoTo(${i})"` : '';
        html += `<span class="${cls.join(' ')}" title="${label}"${clickAttr}></span>`;
        if (i < total) {
            html += `<span class="vn-tp-line${i < journeyFurthest ? ' unlocked' : ''}"></span>`;
        }
    }
    html += '</div>';
    return html;
}

function journeyRender() {
    const container = document.getElementById('journey-view-content');
    if (!container) return;

    let html = '<div class="scene-container">' + journeyBuildTimelineHTML();

    if (journeyState === 'close') {
        html += JOURNEY_CLOSE_BODY_HTML + '</div>';
        container.innerHTML = html;
        return;
    }

    const step = JOURNEY_STEPS[journeyIndex];
    html += '<div class="vn-stage">';
    html += `<div class="scene-tag${step.key ? ' key' : ''}">${step.tag}</div>`;

    step.paragraphs.forEach((p, i) => {
        html += `<p class="scene-text" style="animation-delay:${(i * 0.09).toFixed(2)}s">${p}</p>`;
    });

    if (step.sysnote) {
        const delay = (step.paragraphs.length * 0.09 + 0.1).toFixed(2);
        html += `<div class="scene-sysnote" style="animation-delay:${delay}s">${step.sysnote}</div>`;
    }

    if (journeyState === 'warning') {
        html += `<div class="vn-warning-box"><strong>สัญชาตญาณเก่าไม่ยอมให้ทางนี้เกิดขึ้น</strong><br>${journeyPendingWarning}</div>`;
        html += `<div class="vn-actions"><button class="vn-continue-btn" onclick="journeyAcknowledgeWarning()">เข้าใจแล้ว <span class="arrow">►</span></button></div>`;
    } else if (step.choice) {
        html += `<div class="vn-choice-block"><div class="vn-choice-question">${step.choice.question}</div><div class="vn-choice-row">`;
        step.choice.options.forEach((opt, i) => {
            html += `<button class="vn-choice-btn" onclick="journeyChoice(${journeyIndex}, ${i})">${opt.label}</button>`;
        });
        html += `</div></div>`;
    } else {
        html += `<div class="vn-actions"><button class="vn-continue-btn" onclick="journeyContinue()">${step.continueLabel} <span class="arrow">►</span></button></div>`;
    }

    html += '</div></div>';
    container.innerHTML = html;
}
