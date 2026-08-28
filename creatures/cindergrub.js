/* ITH-210-077 — Cindergrub (ALIVE) */
creaturesData.push({
        id: "ITH-210-077", name: "Cindergrub", status: "ALIVE", era: "ยุคป่าหมอก (Mistwood Era)",
        imageKey: null, color: "#ff6a2e",
        category: "แมลงทนความร้อนแห่งภูเขาไฟ (Thermotolerant insect, chemosynthetic grazer)",
        habitat: "หมู่เกาะ Dothen (เขตภูเขาไฟ) — The Basalt Calderas",
        foodChain: "ผู้บริโภคปฐมภูมิ/ผู้ย่อยสลายของหมู่เกาะ Dothen — อาหารหลักของสัตว์เฉพาะถิ่นบนเกาะ",
        danger: "5% (Harmless)", size: "ระดับ 1 — จิ๋ว", height: "ลำตัวยาว 9 ซม.", weight: "0.06 กก.",
        desc: "แมลงตัวหนอนเปลือกแข็งอาศัยใกล้ปล่องความร้อนใต้ดินของหมู่เกาะภูเขาไฟ กินสาหร่ายทนร้อนและเศษซากอินทรีย์ที่ถูกความร้อนเผาไหม้บางส่วน เปลือกนอกทนกรดและความร้อนสูงได้ดีเยี่ยม เป็นอาหารหลักของสัตว์เฉพาะถิ่นบนเกาะ",
        mutation: { pro: "เปลือกไคตินทนความร้อน/กรด + แบคทีเรียสังเคราะห์เคมีในทางเดินอาหาร / อยู่รอดในจุดที่ร้อนเกือบเดือดซึ่งไม่มีสิ่งมีชีวิตอื่นทนได้เลย", con: "ไม่มีกลไกทนความเย็นใดๆ เลย / ห่างจากปล่องความร้อนเพียงไม่กี่เมตรในอากาศเย็นก็ตายอย่างรวดเร็ว" },
        weapons: [ "ไม่มีอาวุธเชิงรุก", "เปลือกแข็งทนความร้อน/กรดเป็นเกราะป้องกันเดียว", "ขุดมุดซ่อนตัวในซอกหินได้เร็ว" ],
        social: "อยู่รวมกันเป็นกลุ่มหนาแน่นรอบปล่องความร้อนเดียวกันนับร้อยตัว แทบไม่แข่งขันกันเพราะอาหารจากแบคทีเรียเคมีสังเคราะห์มีเหลือเฟือ",
        head: [
            ["ดวงตา", "จุดรับแสงเล็กจิ๋วสองจุด", "แทบไร้ประโยชน์ในความมืดของซอกหินใกล้ปล่องความร้อน ใช้แค่แยกกลางวัน-กลางคืนหยาบๆ"],
            ["จมูก", "หนวดคู่รับความร้อนและสารเคมี", "ไวต่ออุณหภูมิและสารประกอบกำมะถันในอากาศเป็นพิเศษ ใช้เดินตามระดับความร้อนที่พอดี ไม่ร้อนถึงตายไม่เย็นถึงตายเช่นกัน"],
            ["ปาก", "ขากรรไกรขูดถากคู่เล็ก", "ขูดคราบสาหร่ายทนร้อนออกจากหินร้อนและบดเศษอินทรีย์ไหม้เกรียมที่ลอยมาตามไอน้ำพุร้อน"],
            ["หู", "ไม่มีหูภายนอก", "รับแรงสั่นสะเทือนจากพื้นดินผ่านแผ่นเกราะลำตัวแทน ทำหน้าที่เป็นสัญญาณเตือนภัยแผ่นดินไหว/ภูเขาไฟล่วงหน้า"],
            ["EXTRA #1", "หนามคริสตัลออบซิเดียนแทงทะลุเปลือก (Obsidian Spurs)", "แท่งคริสตัลดำใสงอกทะลุแผ่นเกราะออกมาเป็นกระจุกไม่สมมาตรตามแนวหลัง ปลายแหลมเรืองแสงส้มจากภายใน ทำหน้าที่ทั้งระบายความร้อนส่วนเกินและเป็นฉนวนกันน้ำเดือด/ไอน้ำพุร้อนไปพร้อมกัน — ไม่มีสัตว์ชนิดใดบนดาว Ithra ที่มีโครงสร้างแบบนี้"],
            ["EXTRA #2", "ปล้องท้องสังเคราะห์เคมี (Chemosynthetic Segment)", "ปล้องท้องกึ่งโปร่งแสงเรืองแสงจางบรรจุแบคทีเรียที่อาศัยร่วมกัน เปลี่ยนสารประกอบกำมะถันจากปล่องความร้อนเป็นพลังงานให้ร่างกายโดยตรง เสริมจากการกินสาหร่าย"]
        ],
        body: [
            ["BODY FRAME", "โครงลำตัวปล้องสั้นแบบตัวหนอน", "ลำตัวสั้นอ้วนหลายปล้อง เตี้ยแนบพื้น เหมาะกับการมุดซอกหินแคบใกล้ปล่องความร้อน"],
            ["SPINE", "แผ่นเกราะปล้องหลังเรียงซ้อน", "ปล้องเกราะแข็งเรียงจากหัวถึงท้าย ยืดหยุ่นพอให้บิดตัวมุดซอกหินแคบได้"],
            ["TAIL", "กระจุกหนามคริสตัลแยกแฉกท้ายลำตัว", "Utility — แทนที่จะเป็นปล้องทู่ธรรมดา ปลายลำตัวแตกเป็นแท่งคริสตัลแยกแฉกคล้ายพัดหินย่อยหลายแฉก ใช้ระบายความร้อนส่วนเกินออกจากร่างกายเป็นหลัก แต่ละแฉกขยับได้อิสระเล็กน้อยตามการไหลของไอน้ำร้อนรอบตัว"]
        ],
        limbs: [
            ["#1", "ขา", "ขาสั้นไม่สมมาตร (4-6 คู่ แล้วแต่ตัว)", "ขาสั้นแข็งแรงปลายมีเล็บเล็กยึดเกาะหินภูเขาไฟขรุขระได้แน่น จำนวนคู่ขาต่อตัวไม่เท่ากันเสมอไปและมักไม่สมมาตรซ้าย-ขวา เคลื่อนที่ช้าแต่มั่นคง มุดหลบเข้าซอกหินได้เร็วเมื่อรู้สึกถึงความร้อนเกินขีดจำกัด"]
        ],
        skin: [
            ["ลำตัวทั่วไป", "เปลือกไคตินดำมันวาวคล้ายหินออบซิเดียนหลอมรวมกับผลึกแร่ พื้นผิวดูเหมือนหินอัคนีเย็นตัวปนคริสตัลมากกว่าเปลือกแมลงทั่วไป ทนความร้อนสูงและสารคัดหลั่งกรดเคลือบผิวช่วยป้องกันไอกรดกำมะถัน"],
            ["ปล้องท้อง", "ผิวกึ่งโปร่งแสงบางกว่าส่วนอื่น เผยให้เห็นแสงเรืองจากแบคทีเรียสังเคราะห์เคมีภายใน"]
        ],
        pattern: "ลายแตกร้าวเรืองแสงส้มพาดสวิลล์ไม่สมมาตรทั่วเปลือกคล้ายผลึกแร่ในหินอัคนีตัดขวาง ไม่ใช่รอยแตกเรียบง่ายแบบลาวาเย็นตัวธรรมดา เข้มขึ้นและซับซ้อนขึ้นเมื่ออยู่ใกล้ปล่องความร้อนมากขึ้น",
        pal: [["สีหลัก", "#1c1a18"], ["เงา", "#050505"], ["แสง", "#6a6660"], ["เสริม A", "#8a4a2a"], ["เสริม B", "#4a4642"]],
        hl: ["#ff6a2e", "ส้มแดงเรืองแสงแบบลาวา"],
        hlAt: "ลายแตกร้าวเรืองแสงส้มทั่วเปลือก · ปล้องท้องสังเคราะห์เคมีที่เรืองแสงจางตลอดเวลา · หนวดรับความร้อนเมื่อใกล้ปล่อง",
        mutationFull: {
            proTitle: "เปลือกทนความร้อน/กรด + แบคทีเรียสังเคราะห์เคมี / การอยู่รอดในจุดที่ไม่มีใครทนได้",
            proDesc: "แผ่นเกราะไคตินฉนวนความร้อนบวกแบคทีเรียสังเคราะห์เคมีในปล้องท้องทำให้ Cindergrub อาศัยอยู่ติดปล่องความร้อนใต้พิภพที่ร้อนเกือบเดือดได้โดยตรง เป็นพื้นที่ที่แทบไม่มีสิ่งมีชีวิตอื่นใดบนเกาะแข่งขันด้วยได้เลย",
            conTitle: "การควบคุมอุณหภูมิ / ความทนทานต่อความเย็น",
            conDesc: "ร่างกายไม่มีกลไกรักษาความอบอุ่นใดๆ เลยเพราะไม่เคยจำเป็นต้องมี ห่างจากปล่องความร้อนเพียงไม่กี่เมตรในอากาศเย็นปกติของเกาะ ร่างกายจะแข็งตัวและตายอย่างรวดเร็ว ทำให้ผูกติดกับพื้นที่รอบปล่องความร้อนแคบๆ ไปตลอดชีวิต"
        },
        dangerDetail: {
            raw: "7 / 180", percent: 5, tier: "ไม่มีพิษภัย (Harmless)",
            factors: ["สารคัดหลั่งกรดอ่อนที่เปลือก (+4)", "ไม่มีอาวุธเชิงรุก (+0)", "ขนาดตัวจิ๋ว (+3)"],
            note: "ไม่เป็นอันตรายต่อสิ่งมีชีวิตขนาดใหญ่เลย สารคัดหลั่งที่เปลือกอาจระคายผิวเล็กน้อยหากสัมผัสโดยตรงเป็นเวลานานเท่านั้น เป็นฐานอาหารสำคัญของระบบนิเวศเกาะภูเขาไฟทั้งหมด"
        },
        combat: [
            ["มุดหลบซอกหิน (Crevice Retreat)", "เมื่อรู้สึกถึงแรงสั่นสะเทือนของภัยคุกคาม จะมุดตัวเข้าซอกหินแคบใกล้ตัวทันที ที่ที่สัตว์ขนาดใหญ่กว่าตามเข้าไปไม่ได้"]
        ],
        notes: [
            ["", "<strong>ระบบเตือนภัยธรรมชาติ</strong> — เพราะไวต่อแรงสั่นสะเทือนใต้พิภพเป็นพิเศษ ฝูง Cindergrub ที่มุดหนีพร้อมกันเป็นจำนวนมากบางครั้งเป็นสัญญาณเตือนล่วงหน้าของการปะทุภูเขาไฟที่นักสำรวจบนเกาะเรียนรู้ที่จะสังเกต"],
            ["", "ลักษณะที่ตั้งใจไว้เบื้องต้น: ทนกรด/ความร้อนสูง อาศัยใกล้ปล่องความร้อน เปลือกแข็ง — ออกแบบระบบ Slot เต็มรูปแบบแล้ว"]
        ],
        prompt: "An extremely alien tiny grub-like organism about 9 centimeters long, segmented and low-slung, its entire body plan reading as a fusion of living tissue and cooled volcanic mineral rather than a conventional earthly insect, built to wedge into narrow cracks in volcanic rock beside a geothermal vent. Its head bears two minuscule simple eye-spots of almost no use in the darkness near the vents, barely distinguishing day from night, and a pair of sensitive antennae tuned to heat and sulfur-compound concentration in the air, letting it stay within the exact temperature band that keeps it alive, never straying too close to lethal heat nor too far into the cold. Its small scraping mandibles rasp thermophilic algae from superheated rock and grind lightly charred organic debris carried on rising steam. It has no external ears, sensing vibration instead through plates along its body, giving it an early warning sense for seismic tremors and volcanic activity. Jagged translucent black obsidian-crystal spurs erupt directly through its dorsal shell in an irregular, asymmetric cluster rather than a neat row, glowing faintly orange from within at their tips, functioning as both heat-radiating vents and insulating shielding against near-boiling vent water and scalding steam, and a thinner, semi-translucent abdominal segment houses a symbiotic colony of chemosynthetic bacteria, glowing faintly from within, that converts sulfur compounds from the vent directly into usable energy. Its body is a short, plump, many-segmented grub-like frame kept low to the ground, flexible enough to wedge into the tightest volcanic crevices, with an armored dorsal ridge of overlapping crystalline plates running its full length, ending not in a simple blunt segment but in a fanned cluster of forked obsidian spikes that flexes independently with the drifting heat of the vent, venting excess body heat outward. Its legs are short, powerful, and unevenly distributed, four to six pairs depending on the individual and rarely symmetric left to right, each ending in small gripping claws that hold firm against rough jagged volcanic rock, moving slowly but with total stability, able to retreat into a crevice almost instantly the moment the surrounding heat crosses its tolerance threshold. Its shell reads less like insect chitin and more like a fusion of glossy black obsidian and embedded mineral crystal, coated in a mildly acidic secretion that shields it from sulfuric vapor, while its abdominal segment is thinner and semi-translucent, letting the glow of its internal bacteria show through. Swirling, asymmetric glowing orange cracks trace across its shell like mineral veining inside a cross-sectioned volcanic geode rather than simple surface cracking, growing brighter and more intricate the closer it sits to the geothermal vent. Its crystalline heat-and-acid-resistant shell combined with its chemosynthetic gut lets it thrive in a niche lethal to virtually everything else on the island, at the cost of having no cold tolerance whatsoever — even a short distance from the vent in the island's ordinary air, it chills and dies within minutes. Its coloration is a harmonious obsidian-black palette, deepened by true-black shadows in the recesses between plates and lifted by dull grey highlights along the raised crystal ridges, with rust-orange sulfur staining worked into the lower shell and ashen grey along the leg joints, and a glowing molten orange-red highlight reserved only for the veined geode-like cracks of its shell, the tips of its obsidian spurs, and the faint inner glow of its chemosynthetic abdominal segment. It clings to steaming black volcanic rock at the edge of a sulfurous vent in the Basalt Calderas of the Dothen islands, its asymmetric crystal spurs catching the ember-light, surrounded by rising steam and a scattering of other Cindergrubs on the glowing, cracked stone.\n\nPhotorealistic 3D creature render, macro photography style, cinematic film-VFX quality, resting full-body on volcanic rock in its natural habitat, extreme close-up three-quarter view, shot with a macro lens, shallow depth of field with steam and distant vent glow softly blurred behind it, volumetric steam-light and glowing ember-orange bokeh from the vent, soft backlighting that makes the crystal spurs and geode-veined shell glow from within, hyper-detailed micro-texturing on the obsidian shell, subsurface scattering, physically-based rendering, muted natural color grading with deep shadows, 1:1 square composition, subject centered and fully visible, no readable text."
});
