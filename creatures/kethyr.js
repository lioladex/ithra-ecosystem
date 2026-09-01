/* ITH-217-905 — Kethyr (DRAFT) — ทดสอบ ALIEN INTENSITY SCALE Tier V */
creaturesData.push({
        id: "ITH-217-905", name: "Kethyr", status: "DRAFT", era: "ยุคป่าหมอก (Mistwood Era)",
        imageKey: "KETHYR", color: "#bfe8ff",
        category: "สิ่งมีชีวิตลึกลับยุคโบราณใต้ธารน้ำแข็ง (Ancient cryptid, sub-glacial, cross-era survivor)",
        habitat: "ทวีปน้ำแข็งขั้วดาว Kessara — Zone 1: The Glass Shelf, ลึกลงไปใต้ธารน้ำแข็งโบราณ",
        foodChain: "ไม่มีตำแหน่งที่ระบุได้ในห่วงโซ่อาหารปัจจุบัน — ไม่เคยมีบันทึกว่าล่าอะไรเป็นประจำ หรือมีอะไรล่ามันได้",
        danger: "ประเมินไม่ได้แน่ชัด (raw ~97%)", size: "ไม่ทราบขนาดจริง — บันทึกภาคสนามแต่ละครั้งประมาณไม่ตรงกัน (ระดับ 7+ โดยประมาณ)", height: "ไม่ทราบแน่ชัด — ส่วนที่เคยเห็นสูงเกิน 6 ม. แต่ไม่มีใครเห็น \"ตัวเต็ม\" เลยสักครั้ง", weight: "ไม่ทราบ — ไม่เคยมีการวัดที่สมบูรณ์",
        desc: "สิ่งมีชีวิตที่ไม่มีใครเคยเห็นตัวเต็มจริงๆ ส่วนที่โผล่พ้นน้ำแข็งให้เห็นในแต่ละถ้ำน้ำแข็งดูเหมือนเป็นคนละส่วนของร่างเดียวกันที่ฝังลึกอยู่ในธารน้ำแข็งทั้งผืน เชื่อกันว่ารอดพ้นภัยพิบัติมาได้หลายยุคสมัย อาจเก่าแก่กว่าแม้แต่ยุคหมุนเวียนที่ Vorthak ยังมีชีวิตอยู่ พ่นไอเย็นจัดที่แช่แข็งเป้าหมายได้แทบจะทันที",
        mutation: { pro: "รอดพ้นจากทุกภัยพิบัติที่เคยเกิดกับดาว Ithra มาได้หลายยุคสมัยติดต่อกัน ไม่มีสัตว์ใดในยุคปัจจุบันคุกคามมันได้เลย", con: "ผูกติดกับธารน้ำแข็งจนแทบเคลื่อนที่ไปไหนไม่ได้จริง — ถ้าน้ำแข็งของ Kessara ละลายหมดสักวัน มันจะไม่มีที่ไปเลย" },
        weapons: [ "ไอแช่แข็งทันที (พ่นออกมาแล้วเป้าหมายแข็งตัวในเสี้ยววินาที เร็วกว่าที่หลักฟิสิกส์ทั่วไปจะอธิบายได้)", "ส่วนของร่างที่หลอมรวมกับน้ำแข็งจริงใช้เป็นทั้งเกราะและอาวุธได้พร้อมกัน", "ไม่มีบันทึกอาวุธอื่นที่ยืนยันได้ — ไม่เคยมีใครรอดมาเล่าเรื่องได้ครบ" ],
        social: "ไม่มีบันทึกว่าพบเจอกันเองหรือมีตัวที่สองอยู่จริง เป็นไปได้ว่ามีเพียงตัวเดียวในดาวทั้งใบ หรือเป็นไปได้ว่าสิ่งที่เห็นในแต่ละถ้ำคือส่วนต่างๆ ของสิ่งเดียวกันที่ไม่มีตัวตนแยกจากธารน้ำแข็งเลยด้วยซ้ำ",
        head: [
            ["ส่วนที่เคยถูกเห็น — ระลอกที่ 1", "โพรงเงาลึกใต้น้ำแข็งใสที่มีบางอย่างเคลื่อนไหวอยู่ข้างใน", "บันทึกภาคสนามครั้งแรกสุดที่มี ระบุแค่ว่าเห็น \"เงาที่มีรูปทรง\" เคลื่อนผ่านผนังน้ำแข็งใสจากด้านใน ไม่มีรายละเอียดมากกว่านั้น"],
            ["ส่วนที่เคยถูกเห็น — ระลอกที่ 2", "พื้นผิวคล้ายเกล็ดน้ำแข็งที่ขยับได้เอง", "บันทึกอีกครั้งในถ้ำน้ำแข็งคนละแห่ง ห่างจากจุดแรกหลายกิโลเมตร บรรยายพื้นผิวที่คล้ายน้ำแข็งแตกเป็นเกล็ดแต่ขยับเป็นจังหวะเหมือนมีชีวิต — ไม่มีใครยืนยันได้ว่าเป็นส่วนเดียวกับที่เห็นครั้งแรกหรือไม่"],
            ["ไอเย็นจัด", "จุดกำเนิดไอแช่แข็งไม่ทราบตำแหน่งแน่ชัด", "ทุกบันทึกที่รอดกลับมาได้ยืนยันตรงกันแค่จุดเดียว: มีไอเย็นจัดพ่นออกมาจากทิศทางที่หันเข้าหาเป้าหมาย แช่แข็งทุกอย่างในเสี้ยววินาที ก่อนที่ผู้บันทึกจะทันเห็นแหล่งกำเนิดไอนั้นชัดเจน"],
            ["EXTRA — ความไม่แน่นอนของรูปทรง", "ไม่มีคำอธิบายที่ตรงกันแม้แต่สองครั้ง", "นักวิจัยภาคสนามที่ยังกลับมาได้ทุกคนอธิบาย \"รูปร่าง\" ที่เห็นไม่ตรงกันเลย บางคนว่าเห็นบางอย่างคล้ายอวัยวะรับสัมผัสจำนวนมาก บางคนว่าเห็นพื้นผิวเรียบไร้รูปทรง — เป็นไปได้ว่าไม่มี \"หัว\" ที่แยกจากร่างส่วนอื่นได้จริงเลย"]
        ],
        body: [
            ["BODY FRAME", "ไม่ทราบ — เนื้อเยื่อกับน้ำแข็งเป็นเนื้อเดียวกันในหลายจุด", "ไม่สามารถระบุขอบเขตของ \"ตัวมัน\" กับธารน้ำแข็งที่มันฝังตัวอยู่ได้อย่างแน่ชัด บางส่วนที่ดูเหมือนน้ำแข็งธรรมดาอาจเป็นเนื้อเยื่อของมันเองที่แข็งตัวถาวรไปแล้ว"],
            ["SPINE", "ไม่ทราบ", "ไม่มีบันทึกที่ยืนยันโครงสร้างภายในได้เลยแม้แต่ครั้งเดียว"],
            ["TAIL", "ไม่ทราบ", "Utility — ไม่มีข้อมูล"]
        ],
        limbs: [
            ["ไม่ทราบจำนวน", "ระยางค์ (ถ้ามี)", "ไม่สามารถระบุได้", "บันทึกที่มีอยู่ไม่พอจะสรุปจำนวนหรือรูปแบบระยางค์ได้เลย บางบันทึกไม่มีการกล่าวถึงระยางค์แยกจากลำตัวด้วยซ้ำ เหมือนทั้งร่างเคลื่อนที่ไปพร้อมกันเป็นก้อนเดียว"]
        ],
        skin: [
            ["ส่วนที่สัมผัสได้ (หายากมาก)", "เย็นจัดจนแทบไหม้เมื่อสัมผัส พื้นผิวไม่แน่นอนระหว่างแข็งและนิ่ม", "บันทึกที่หายากที่สุดในทั้งหมด ระบุว่าพื้นผิวเปลี่ยนความแข็งได้ในจุดเดียวกัน จากแข็งเหมือนน้ำแข็งไปเป็นนิ่มเหมือนเนื้อเยื่อสิ่งมีชีวิตในเวลาไม่กี่วินาที"]
        ],
        pattern: "ไม่มีลายที่บันทึกได้แน่ชัด — พื้นผิวที่เห็นกลืนไปกับความใสและรอยแตกของน้ำแข็งโดยรอบจนแยกไม่ออกว่าจุดไหนคือตัวมันจริงๆ",
        pal: [["สีหลัก", "#dff3ff"], ["เงา", "#3a5a70"], ["แสง", "#ffffff"], ["เสริม A", "#9fd4ec"], ["เสริม B", "#1c2e3a"]],
        hl: ["#bfe8ff", "ฟ้าขาวเยือกเย็นก่อนไอแช่แข็งพ่นออกมา"],
        hlAt: "จุดที่ไอเย็นจัดกำลังจะพ่นออกมา (เห็นได้เสี้ยววินาทีก่อนเป้าหมายแข็งตัว) · รอยต่อระหว่างเนื้อเยื่อกับน้ำแข็งในบันทึกที่หายากที่สุด",
        mutationFull: {
            proTitle: "การอยู่รอดข้ามยุคสมัย / ไม่มีสัตว์ใดคุกคามได้",
            proDesc: "ไม่มีบันทึกใดยืนยันได้ว่ามีสิ่งใดเคยเป็นภัยต่อมันจริงๆ เชื่อกันว่ารอดพ้นภัยพิบัติทางธรณีวิทยาและการเปลี่ยนแปลงของดาว Ithra มาได้หลายยุคสมัยติดต่อกัน อาจเก่าแก่กว่าสิ่งมีชีวิตอื่นใดที่มีบันทึกไว้ทั้งหมด",
            conTitle: "การผูกติดกับธารน้ำแข็ง / ไม่มีที่ไปหากน้ำแข็งหายไป",
            conDesc: "ส่วนของร่างที่หลอมรวมกับน้ำแข็งจริงทำให้แทบเคลื่อนที่เป็นอิสระจากธารน้ำแข็งไม่ได้เลย ผูกชะตากับสภาพภูมิอากาศของ Kessara โดยสมบูรณ์ — ถ้าน้ำแข็งละลายหมดในอนาคต (ตามธีมฤดูหนาวใหญ่ The Long Winter ที่ผันผวน) จะไม่มีที่ให้มันอยู่รอดต่อได้เลย"
        },
        dangerDetail: {
            raw: "~194 / 200 (ประเมินคร่าวๆ)", percent: 97, tier: "ประเมินไม่ได้แน่ชัด (Unratable)",
            factors: ["ไอแช่แข็งทันที ไม่มีทางป้องกันที่ยืนยันได้ (+10)", "ไม่มีบันทึกจุดอ่อนใดๆ เลย (+10)", "ขนาด/รูปทรงที่ไม่แน่นอนทำให้ประเมินความเสี่ยงล่วงหน้าไม่ได้ (+9)"],
            note: "ตัวเลขนี้เป็นการประมาณจากหลักฐานที่มีอยู่จำกัดมาก คลาดเคลื่อนได้มากกว่าสิ่งมีชีวิตชนิดอื่นทั้งหมดในบันทึก — ทีมวิจัยยังไม่กล้าฟันธงว่านี่คือคะแนนที่แท้จริงหรือแค่สิ่งที่หลักฐานเท่าที่มีบอกได้"
        },
        combat: [
            ["ไอแช่แข็งทันที (Instant Freeze Breath)", "พ่นไอเย็นจัดออกมาแล้วเป้าหมายแข็งตัวในเสี้ยววินาที เร็วกว่าที่อุณหพลศาสตร์ปกติจะอธิบายได้ — ไม่มีบันทึกกลไกที่แน่ชัด มีแต่ผลลัพธ์"]
        ],
        abilities: [
            {
                name: "ร่างที่ไม่มีขอบเขตแน่นอน", type: "Physiology — สรีรวิทยา",
                desc: "ไม่สามารถระบุได้ว่าส่วนไหนของธารน้ำแข็งคือ \"ตัวมัน\" และส่วนไหนคือน้ำแข็งธรรมดา — บันทึกภาคสนามแต่ละครั้งเห็นส่วนต่างกัน ในตำแหน่งต่างกัน จนไม่มีใครยืนยันได้ว่าเคยเห็น \"สิ่งเดียวกัน\" ซ้ำสองครั้งหรือเปล่า",
                origin: "การอยู่รอดข้ามภัยพิบัติหลายยุคสมัยอาจต้องแลกมาด้วยการไม่มีรูปแบบร่างกายที่ตายตัวอีกต่อไป — ยิ่งไม่มีรูปแบบที่แน่นอนให้จดจำหรือโจมตี ยิ่งไม่มีอะไรเรียนรู้ที่จะล่ามันได้"
            }
        ],
        notes: [
            ["", "<strong>ทดสอบ Tier V — REALITY-DEFYING / COSMIC</strong>: ออกแบบเพื่อทดสอบว่าการเขียนให้ผู้สังเกตแทบประมวลเป็น \"สิ่งมีชีวิตตัวเดียว\" ไม่ได้ (ขนาด/รูปทรงไม่ตรงกันในแต่ละบันทึก, ไม่มีใครเห็นตัวเต็ม) ยังทำให้ field ต่างๆ ของระบบ Codex (size/height/weight/head/body/limbs) มีข้อมูลพอให้อ่านได้อย่างมีความหมายหรือไม่ — เลือกเขียนแบบ \"ไม่ทราบ/ไม่ยืนยันได้\" อย่างตั้งใจแทนการมโนตัวเลขขึ้นมาลอยๆ"],
            ["warn", "สถานะ DRAFT — มี field `prompt` แล้ว (เขียนตามคำขอ) แต่ยังไม่ได้เปลี่ยนสถานะเป็น ALIVE จนกว่าจะรีวิว anatomy ทั้งหมดผ่าน — ย่อหน้าที่ 1 เขียนแบบไม่ยืนยันขนาด/รูปทรงอย่างตั้งใจ ต่างจากสูตรมาตรฐานที่ต้องการความชัดเจนตั้งแต่ประโยคแรก เพราะความไม่แน่นอนนี้คือใจความของ Tier V ของตัวนี้เอง"]
        ],
        prompt: "A colossal, ancient alien cryptid whose true scale has never been confirmed by any surviving witness, its largest observed extent rising over 6 meters where it breaches the surface of a fractured glacier wall, the rest of its mass disappearing directly into ice that may or may not be a separate substance from its own body. Where a head might be expected, witnesses disagree entirely: some describe a deep shadow with a shifting silhouette moving just beneath a wall of clear ice, others describe a scaled, ice-like crust that ripples on its own as if breathing, and no two accounts place a mouth, eye, or sensory organ in the same location twice; the only consistent detail across every surviving record is a single point somewhere on its visible surface that exhales a blast of freezing vapor an instant before anything nearby flash-freezes solid, its exact source never seen clearly enough to describe. Its body has no confirmed frame at all: tissue and glacier ice appear to be a single continuous substance in multiple places, with no boundary anyone has been able to identify between what is truly living matter and what is merely the ice around it, no visible spine, and no tail, only a mass that recedes into the glacier itself at every edge. It shows no confirmed limbs in any surviving account: some records describe something like many thin sensory appendages, others describe an unbroken smooth mass with nothing protruding at all, as though its entire visible body moves as one piece rather than through any limb. In the rare instances its surface has been touched and described, it shifts between ice-hard and tissue-soft within the same patch of surface in the span of seconds, dangerously cold enough to burn on contact. It carries no true camouflage pattern, its visible surface simply blending into the clarity and fracture-lines of the surrounding glacier ice so completely that its outline cannot be traced with any confidence. Its unmatched survival across every calamity Ithra has ever recorded comes at the cost of being fused so completely into the glacier it inhabits that it could never leave the ice even if it wanted to. Its coloration is a harmonious pale glacial blue-white palette, deepened by cold slate-blue shadows within the deep ice and lifted by near-white highlights along every fracture and facet, with pale cyan tones worked through the clearer sections of ice and dark frozen indigo in its deepest recesses, and a glowing pale blue-white highlight reserved only for the instant before its freezing breath is released and for the rare seams where its own tissue meets the ice around it. It lies half-revealed within a towering wall of ancient blue glacier ice deep beneath the surface of the Glass Shelf in Kessara, its form dissolving into the fractured ice at every edge, a faint mist of freezing vapor gathering somewhere along its unseen length.\n\nPhotorealistic 3D creature render, cinematic film-VFX quality, standing full-body in its natural habitat environment, three-quarter view, shot with a telephoto lens at eye level, shallow depth of field with softly blurred background glacier ice, volumetric god rays filtering through the ice from above, soft naturalistic backlighting that makes the fractured ice and frozen tissue glow from within, hyper-detailed micro-texturing on every ice facet and surface, subsurface scattering, physically-based rendering, muted cold natural color grading with deep shadows, 1:1 square composition, subject centered and fully visible from head to feet, no readable text."
});
