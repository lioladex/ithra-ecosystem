/* ITH-014-772 — Luvenn (ALIVE) */
creaturesData.push({
        id: "ITH-014-772", name: "Luvenn", status: "ALIVE", era: "ยุคป่าหมอก (Mistwood Era)",
        imageKey: "LUVENN", color: "#6ef2a0",
        category: "สัตว์กินแสงสี่ขา (Quadrupedal photosynthetic grazer)", habitat: "ป่าหมอกชั้นกลาง (Verath, Mist Layer)",
        foodChain: "ผู้ผลิตและผู้บริโภคปฐมภูมิ — เหยื่อหลักของ Karvos",
        danger: "20% (Harmless)", size: "ระดับ 5 — ใหญ่ (เท่าม้า)", height: "1.9 ม. ที่ไหล่ · 2.8 ม. เมื่อชูคอเต็มที่", weight: "310 กก.",
        desc: "สิ่งมีชีวิตกึ่งพืช ร่างปัจจุบันที่ตัวเอกสวมอยู่ ณ จุดตื่นรู้ ไร้อาวุธ วิ่งช้ามาก ดำรงชีวิตด้วยการกางแผงคอรับแสงกระจายผ่านหมอก อาศัยมวลน้ำหนักตัวในการป้องกันตัวเมื่อจวนตัว",
        mutation: { pro: "สังเคราะห์แสงในแสงกระจายผ่านหมอกทึบได้ดีเยี่ยม", con: "ขายาวแต่ไร้มัดกล้ามเนื้อวิ่ง หนีภัยได้ช้ามาก" },
        weapons: [ "ไม่มีอาวุธโดยสิ้นเชิง", "พึ่งพาการพรางตัวและการอยู่รวมฝูง", "อาศัยมวลน้ำหนักตัวชนปะทะเท่านั้นหากถูกต้อนจนมุม" ],
        social: "ฝูงขนาดกลาง 10–30 ตัว เคลื่อนย้ายตามแสงที่ส่องผ่านเรือนยอดในแต่ละช่วงของวัน",
        head: [
            ["ดวงตา", "ตาคู่ด้านข้างหัว", "ม่านตาเขียวมรกตเรืองแสงอ่อน รูม่านตาแนวนอน มองรอบตัวได้เกือบ 360° แลกกับจุดบอดตรงหน้าที่กว้างผิดปกติ"],
            ["จมูก", "ไร้จมูกภายนอก", "มีเพียงร่องหายใจบางๆ ข้างจะงอย รับสารเคมีในอากาศผ่านผิวหนังทั่วร่างแทน"],
            ["ปาก", "จะงอยแข็งไร้ฟัน", "ไม่ใช้กินอาหาร ใช้เพียงเล็มแต่งเกล็ดใบไม้ตัวเองและดึงเศษใบแห้งออก พลังงานทั้งหมดมาจากการสังเคราะห์แสงและการดูดความชื้น"],
            ["หู", "หูใบไม้กางตั้งได้สองข้าง", "รูปทรงเหมือนใบไม้แหลมยาว หมุนจับทิศเสียงได้อิสระ ทำหน้าที่รับเสียงและรับแสงเสริมพร้อมกัน"],
            ["EXTRA #1", "แผงคอใบไม้พับได้ (Solar Ruff)", "แผ่นคล้ายใบไม้หลายสิบแผ่นเรียงซ้อนเหลื่อมรอบคอ ขอบหยักมีเส้นใบเรืองแสง พับแนบคอปกติ กางเป็นรัศมีเต็มวงเมื่อรับแสง — อวัยวะสังเคราะห์แสงหลักของสปีชีส์"],
            ["EXTRA #2", "หงอนใบไม้คู่บนกระหม่อม", "ใบไม้ยาวสองแฉกชี้ขึ้นด้านหลัง เป็นเซ็นเซอร์วัดทิศทาง/ความเข้มของแสง สั่งให้คอหันตามแสงอัตโนมัติ — กลไกเบื้องหลังพฤติกรรมเฮลิโอโทรปิซึม"]
        ],
        body: [
            ["BODY FRAME", "โครงสัตว์กีบสี่ขาสูงโปร่ง", "สรีระคล้ายกวางผสมม้า คอยาวเรียวยกสูง หลังลาดเอียงลงท้าย อกลึกแต่ท้องแฟบ (ไม่มีกระเพาะใหญ่)"],
            ["SPINE", "ปุ่มกลมเรียงเป็นแถวคล้ายตุ่มเมล็ดพืช", "ไล่จากท้ายทอยถึงกลางหลัง เป็นต่อมสะสมน้ำเลี้ยงสำรอง พองขึ้นเมื่ออิ่มแสงและยุบลงเมื่อขาดแคลน ฝูงใช้อ่านสภาพร่างกายของกันและกันได้"],
            ["TAIL", "ไม่มีหาง", "สมดุลร่างกายพึ่งพาคอที่ยาวและแผงคอที่ถ่วงน้ำหนักด้านหน้าแทน"]
        ],
        limbs: [
            ["#1", "ขา", "ขาหน้า", "เรียวยาวข้อต่อสูงแบบกวางผสมนกยาง ปลายเป็นกีบแยกสองแฉก แตกออกเป็นรากฝอยสีเขียวอ่อนหลายเส้นเมื่อวางน้ำหนักนิ่ง ใช้ดูดความชื้นและแร่ธาตุจากพื้นดินชื้นโดยตรง"],
            ["#2", "ขา", "ขาหลัง", "โครงเดียวกับขาหน้าแต่ข้อพับย้อนกลับชัดกว่า ให้แรงส่งตอนก้าวเดินระยะไกล — ไม่มีมัดกล้ามเนื้อสำหรับวิ่งเร็ว"]
        ],
        skin: [
            ["ลำตัว/สะโพก/คอ", "เกล็ดรูปใบไม้ปลายแหลมเรียงซ้อนเหลื่อมกันถี่ยิบนับพันแผ่น ให้เนื้อสัมผัสฟูนุ่มคล้ายขนสัตว์ทั้งที่เป็นเกล็ดแข็งบาง"],
            ["ขาส่วนล่าง", "หนังเปลือยเรียบสีเข้มกว่า มีร่องตามยาวเหมือนเปลือกไม้ ทนต่อการเสียดสีกับพุ่มไม้"],
            ["แผงคอ/หงอน/หู", "แผ่นใบไม้บางกึ่งโปร่งแสง เห็นเส้นใบชัดเจนเมื่อมีแสงส่องทะลุจากด้านหลัง"]
        ],
        pattern: "เส้นใบ (venation) สีอ่อนแตกแขนงบนเกล็ดทุกแผ่นทั่วทั้งตัว เข้มที่สุดบนแผงคอและจางลงตามลำตัว — ยามสังเคราะห์แสงเต็มที่ เส้นใบบนแผงคอจะเรืองแสงเขียวมรกตอ่อนๆ มองเห็นได้ในที่ร่ม",
        pal: [["สีหลัก", "#4a7a52"], ["เงา", "#1c3028"], ["แสง", "#a8c98a"], ["เสริม A", "#8a4a3a"], ["เสริม B", "#4a4470"]],
        hl: ["#6ef2a0", "เขียวมรกตเรืองแสง"],
        hlAt: "ดวงตา · เส้นใบบนแผงคอเมื่อกางรับแสง · รากฝอยที่ปลายกีบขณะดูดความชื้น",
        mutationFull: {
            proTitle: "ผิวหนัง / การสังเคราะห์แสงในแสงกระจาย",
            proDesc: "ดูดซับพลังงานจากแสงที่กระเจิงผ่านหมอกทึบได้มีประสิทธิภาพสูงกว่าพืชและสิ่งมีชีวิตอื่นบน Ithra มาก ทำให้อยู่รอดในชั้นกลางที่แสงตรงส่องไม่ถึงได้",
            conTitle: "ขา / ความเร็วในการวิ่ง",
            conDesc: "ขายาวแต่ไร้มัดกล้ามเนื้อสำหรับเร่งความเร็ว วิ่งหนีได้ช้ากว่าสัตว์เหยื่อขนาดเดียวกันอย่างชัดเจน ต้องพึ่งการอยู่รวมฝูงและการพรางตัวแทน"
        },
        dangerDetail: {
            raw: "34 / 170", percent: 20, tier: "ไม่มีพิษภัย (Harmless)",
            factors: ["ขนาดตัวที่ใหญ่ (+6)", "ขายาวเรียว (+4)", "จะงอยแข็ง (+3)"],
            note: "ไม่มีอาวุธใดๆ ทั้งสิ้น คะแนนทั้งหมดมาจากมวลกายและความสูงล้วนๆ อันตรายเพียงในแง่ \"ถูกเหยียบหรือชนโดยไม่ตั้งใจ\" เท่านั้น"
        },
        notes: [
            ["", "<strong>พฤติกรรมรับแสง (Heliotropic Display)</strong> — เมื่อพบจุดที่แสงลอดผ่านเรือนยอด Luvenn จะหยุดนิ่ง ปล่อยรากฝอยจากกีบลงดิน ชูคอขึ้นสุด แล้วกางแผงคอใบไม้ออกเต็มวง จากนั้นค่อยๆ หมุนหัวตามทิศทางแสงตลอดวันเหมือนดอกทานตะวัน ทั้งฝูงทำพร้อมกันเป็นภาพราวกับดงต้นไม้เคลื่อนที่ได้ — <em style='color:var(--accent-default)'>และนี่คือช่วงที่พวกมันเปราะบางที่สุด</em> เพราะทั้งเคลื่อนไหวช้าและถูกยึดติดกับพื้นด้วยรากชั่วคราว"],
            ["warn", "ยีนด้อยเรื่องความเร็วเป็นกุญแจของฉากตื่นรู้ — ตัวเอกไม่ได้แค่ลังเลเพราะสัญชาตญาณขัดกัน แต่โดยสรีระแล้วมันก็หนีไม่ทันอยู่แล้ว การที่มันรอดมาได้จึงขัดกับสามัญสำนึกของทั้งฝูงและตัวมันเอง"]
        ],
        prompt: "A large horse-sized quadrupedal alien herbivore standing 1.9 meters at the shoulder, deceptively light-framed with a lean, hollow-boned build, deep chest but flat belly. Its head is slightly smaller than expected for its body, with a sharp beak-like mouth with no teeth, a pair of emerald-green glowing eyes set on the sides of the head with horizontal herbivore pupils, no external nose, and a pair of tall pointed leaf-shaped ears that rotate independently. A pair of long forked leaf-like crest fronds rise from the crown of its head, angled backward. Around its neck it wears a magnificent foldable ruff built from dozens of overlapping leaf-shaped fronds of varying sizes, each with serrated edges and prominent central veins, fanned wide open in a full radiating collar to catch the light. Its body is a tall, deer-and-horse-like hoofed frame with a long raised neck, and a row of small round seed-like nodules runs along its spine from the nape to mid-back. It has 2 pairs of legs: long slender high-jointed front legs like a heron crossed with a deer, and reversed-jointed hind legs of the same build, all ending in split hooves that split into fine pale-green root filaments where they touch the wet ground. It has no tail. Its torso, neck and haunches are covered in thousands of small overlapping pointed leaf-shaped scales layered so densely they read as soft fur, larger across the chest and neck and finer toward the head and lower legs, while the lower legs are bare dark bark-textured hide. Pale branching leaf-vein patterns run across every scale, strongest on the neck ruff. It is a photosynthetic creature adapted to absorb diffuse light through thick fog, at the cost of being visibly built for slow, deliberate movement rather than speed. Its coloration is a harmonious muted forest-green palette, deepened by near-black blue-green shadows in the recesses and lifted by pale yellow-green highlights along the raised scale edges, with subtle dried-leaf russet tones at the outer scale margins and muted blue-violet in the under-belly shadows, and a glowing emerald-green highlight reserved only for its eyes, the veins of its neck ruff, and the root filaments at its hooves. It stands in a dense misty alien fog-forest among towering moss-covered trees and hanging vines, head tilted upward and turned toward an unseen shaft of light, neck ruff fully unfurled.\n\nPhotorealistic 3D creature render, cinematic film-VFX quality, standing full-body in its natural habitat environment, three-quarter view, shot with a telephoto lens at eye level, shallow depth of field with softly blurred background foliage, volumetric god rays filtering through mist from above, soft naturalistic backlighting that makes the translucent leaf fronds glow from within, hyper-detailed micro-texturing on every scale and surface, subsurface scattering, physically-based rendering, muted natural color grading with deep shadows, 1:1 square composition, subject centered and fully visible from head to feet, no readable text."
});
