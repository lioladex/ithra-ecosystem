/* ITH-207-275 — Pallowfin (ALIVE) */
creaturesData.push({
        id: "ITH-207-275", name: "Pallowfin", status: "ALIVE", era: "ยุคป่าหมอก (Mistwood Era)",
        imageKey: null, color: "#eaf4ff",
        category: "ปลากรองอาหารฝูงใหญ่ (Filter-feeding shoaler)",
        habitat: "แหล่งน้ำ/พื้นที่ชุ่มน้ำ — The Resonant Strait และทุ่งสันทรายมหึมา",
        foodChain: "ผู้บริโภคปฐมภูมิของแหล่งน้ำ — ฐานอาหารหลักของ Threndle",
        danger: "6% (Harmless)", size: "ระดับ 3 — เล็ก (เท่าปลาขนาดกลาง)", height: "ลำตัวยาว 42 ซม.", weight: "2.6 กก. (ต่อตัว)",
        desc: "สัตว์น้ำลำตัวแบนรวมฝูงหนาแน่นนับร้อยถึงหลายพันตัว กรองแพลงก์ตอนและอินทรียวัตถุจากน้ำตลอดเวลาที่ว่าย เป็นอาหารหลักของ Threndle และนักล่าน้ำอื่นๆ ฝูงจะเปลี่ยนทิศพร้อมกันอย่างฉับพลันเป็นแนวเดียวกันทั้งฝูงเมื่อพบภัย ราวกับเป็นสิ่งมีชีวิตเดียวกัน",
        mutation: { pro: "เส้นข้างลำตัว (Lateral line) เชื่อมประสาทกับฝูงแทบเรียลไทม์ / ทั้งฝูงเปลี่ยนทิศพร้อมกันจนดูเหมือนเป็นก้อนเดียวที่จับเป้าไม่ได้", con: "แทบไร้สัญชาตญาณเอาตัวรอดเมื่ออยู่ตัวเดียว / ตัวที่พลัดฝูงจะตื่นตระหนกและกลายเป็นเหยื่อง่ายในเวลาไม่กี่วินาที" },
        weapons: [ "ไม่มีอาวุธใดๆ ทั้งสิ้น", "พึ่งพาความหนาแน่นของฝูงและการเปลี่ยนทิศพร้อมกันเท่านั้น", "แผงเกล็ดสะท้อนแสงแบบวาบเดียวพร้อมกันทั้งฝูง (Confusion Flash)" ],
        social: "ฝูงหนาแน่นตั้งแต่หลายร้อยถึงหลายพันตัว ว่ายประสานทิศทางตลอดเวลาผ่านเส้นข้างลำตัว อพยพตามจังหวะน้ำขึ้น-ลงเพื่อตามแหล่งแพลงก์ตอน",
        head: [
            ["ดวงตา", "ตาโตข้างหัวทั้งสองข้าง", "มุมมองกว้างเกือบรอบตัว ใช้จับตำแหน่งตัวข้างเคียงในฝูงและสังเกตภัยจากทุกทิศพร้อมกัน"],
            ["จมูก", "รูจมูกคู่เล็กด้านหน้าหัว", "รับกลิ่นสารเคมีจากกลุ่มแพลงก์ตอนบานในน้ำ นำฝูงไปยังแหล่งอาหารใหม่ได้ไว"],
            ["ปาก", "ปากกว้างอ้าค้างพร้อมซี่กรองละเอียด", "อ้าค้างขณะว่ายตลอดเวลา น้ำไหลผ่านซี่กรองบางละเอียดคล้ายหวีที่กรองแพลงก์ตอนและอินทรียวัตถุออกจากน้ำอย่างต่อเนื่องโดยไม่ต้องหยุดว่าย"],
            ["หู", "ไม่มีหูภายนอก มีเส้นข้างลำตัวแทน", "เส้นข้างลำตัว (Lateral line) ทอดยาวตลอดตัว รับแรงสั่นสะเทือนจากตัวข้างเคียงเป็นเครือข่ายทำให้ทั้งฝูงเปลี่ยนทิศพร้อมกันได้เกือบพร้อมเพรียงในเสี้ยววินาที"],
            ["EXTRA #1", "ครีบขอบข้างลำตัวคล้ายเศษแก้วบาง (Flash Fringe)", "ครีบขอบบางแข็งกึ่งโปร่งใสเรียงตามสีข้างคล้ายเศษแก้วหรือผลึกน้ำแข็งมากกว่าเนื้อครีบปลาทั่วไป สะท้อนแสงเป็นประกายวาบพร้อมกันทั้งฝูงเมื่อพลิกตัวหันทิศกะทันหัน สร้างภาพวาบสว่างสับสนต่อผู้ล่า"],
            ["EXTRA #2", "เกล็ดสะท้อนแสงรุ้งลายสวิลล์ (Iridescent Patch)", "เกล็ดบริเวณสีข้างกระจายแสงเป็นประกายรุ้งเรียงตัวเป็นลายสวิลล์ไม่สมมาตรคล้ายผิวมุกตัดขวางมากกว่าเกล็ดปลาเรียบๆ เมื่อฝูงว่ายชิดกันแน่น ทำให้ผู้ล่าแยกเป้าหมายตัวเดียวออกจากกลุ่มแสงวาบทั้งหมดได้ยากมาก"]
        ],
        body: [
            ["BODY FRAME", "ลำตัวแบนบางกดด้านข้าง", "รูปทรงแบนสูงลึกแบบปลาฝูงทั่วไป ให้พื้นที่ผิวมากสำหรับสะท้อนแสงและความคล่องตัวสูงในการเลี้ยวกะทันหัน"],
            ["SPINE", "กระดูกสันหลังยืดหยุ่นสูง", "บิดตัวได้รวดเร็วเพื่อเปลี่ยนทิศทางพร้อมฝูงในเสี้ยววินาทีโดยไม่ชนตัวข้างเคียง"],
            ["TAIL", "หางเป็นแฉกคู่ (Forked tail)", "Utility — พุ่งความเร็วสูงระยะสั้นเมื่อฝูงแตกกระเจิงหนีการโจมตี"]
        ],
        limbs: [
            ["#1", "ครีบ", "ครีบอก (คู่หน้า)", "ครีบบางใช้ทรงตัวและเลี้ยวละเอียดขณะว่ายกรองอาหารช้าๆ เป็นฝูง"],
            ["#2", "ครีบ", "ครีบท้อง (คู่หลัง)", "ช่วยพยุงสมดุลแนวดิ่งขณะฝูงเปลี่ยนความลึกตามแหล่งแพลงก์ตอน"]
        ],
        skin: [
            ["หลัง", "เกล็ดละเอียดสีเทาอมฟ้าเข้ม กลืนกับผิวน้ำเมื่อมองจากด้านบน (Countershading)"],
            ["ท้อง", "เกล็ดสีเงินซีดเกือบขาว กลืนกับแสงจากผิวน้ำเมื่อมองจากด้านล่าง"],
            ["สีข้าง", "เกล็ดสะท้อนแสงรุ้งบางเป็นพิเศษ จุดกำเนิดปรากฏการณ์แสงวาบสับสนของทั้งฝูงเมื่อพลิกตัวพร้อมกัน"]
        ],
        pattern: "ลายเส้นแนวนอนจางๆ สีเข้มกว่าตัวเล็กน้อยพาดตามสีข้าง ไล่โทนจากหลังเข้มลงท้องซีดแบบ Countershading คลาสสิก เสริมด้วยแถบเกล็ดรุ้งที่ระยิบระยับเมื่อฝูงเคลื่อนไหวพร้อมกัน",
        pal: [["สีหลัก", "#9ab4c8"], ["เงา", "#1c2a36"], ["แสง", "#eef4f8"], ["เสริม A", "#6a9ca0"], ["เสริม B", "#a892b8"]],
        hl: ["#eaf4ff", "แวววาวสีรุ้งขาวเงิน"],
        hlAt: "แผงครีบขอบข้างลำตัวเมื่อวาบสะท้อนแสงพร้อมกันทั้งฝูง · เกล็ดสีข้างเป็นประกายรุ้งจางเมื่อฝูงว่ายชิดแน่น",
        mutationFull: {
            proTitle: "เส้นข้างลำตัว / เครือข่ายสัญชาตญาณฝูง",
            proDesc: "เส้นข้างลำตัวไวต่อแรงสั่นสะเทือนจนเชื่อมต่อการเคลื่อนไหวของตัวข้างเคียงได้แทบเรียลไทม์ ทำให้ฝูงทั้งหมดเปลี่ยนทิศทางพร้อมกันเหมือนเป็นสิ่งมีชีวิตเดียว ผู้ล่าแยกเป้าหมายตัวเดียวออกจากกลุ่มแสงวาบสับสนได้ยากมาก",
            conTitle: "สัญชาตญาณเดี่ยว / การเอาตัวรอดนอกฝูง",
            conDesc: "แทบไม่มีสัญชาตญาณเอาตัวรอดเดี่ยวเหลืออยู่เลย ตัวที่พลัดหลงจากฝูงไม่ว่าจะด้วยกระแสน้ำหรือการไล่ล่าจะตื่นตระหนกและว่ายไร้ทิศทาง กลายเป็นเหยื่อที่ง่ายที่สุดในระบบนิเวศทั้งหมดภายในเวลาไม่กี่วินาที"
        },
        dangerDetail: {
            raw: "10 / 170", percent: 6, tier: "ไม่มีพิษภัย (Harmless)",
            factors: ["ไม่มีอาวุธใดๆ (+0)", "ขนาดตัวเล็ก (+3)", "การรวมฝูงหนาแน่นเฉยๆ ไม่นับเป็นภัยคุกคาม (+7)"],
            note: "ไม่มีอันตรายต่อสิ่งมีชีวิตอื่นเลยแม้แต่น้อย คะแนนทั้งหมดมาจากการมีอยู่เป็นจำนวนมากเท่านั้น เป็นฐานอาหารสำคัญที่สุดของแหล่งน้ำทั้งระบบ"
        },
        combat: [
            ["วาบแสงสับสน (Confusion Flash)", "เมื่อถูกโจมตี ทั้งฝูงพลิกตัวสะท้อนแสงพร้อมกันเป็นวาบสว่างวูบเดียว ทำให้ผู้ล่าอย่าง Threndle เสียเป้าหมายชั่วขณะ"],
            ["แตกฝูงสับสน (Bait-ball Scatter)", "เมื่อสูญเสียการประสานฝูงชั่วคราว ฝูงจะแตกกระจายไปหลายทิศทางพร้อมกัน เพิ่มโอกาสรอดของฝูงโดยรวมแม้บางตัวจะถูกจับกิน"]
        ],
        notes: [
            ["", "<strong>เอกภาพของฝูง</strong> — Pallowfin แต่ละตัวแทบไม่มีความสามารถป้องกันตัวเลย แต่เครือข่ายเส้นข้างลำตัวที่เชื่อมทั้งฝูงเข้าด้วยกันทำให้พฤติกรรมโดยรวมซับซ้อนและคาดเดายากราวกับเป็นสิ่งมีชีวิตขนาดยักษ์เพียงตัวเดียว"],
            ["", "ลักษณะที่ตั้งใจไว้เบื้องต้น: ฝูงหนาแน่น กรองอาหาร ว่ายน้ำประสานฝูง — ออกแบบระบบ Slot เต็มรูปแบบแล้ว"]
        ],
        prompt: "A small school of moderately alien medium-sized filter-feeding fish, each individual about 42 centimeters long, densely packed into a shimmering shoal of hundreds swimming in tight coordinated formation through open water. Each fish has a laterally compressed, deep-bodied frame with large eyes set on either side of the head giving it near-panoramic vision to track neighboring fish and spot danger from any direction, a pair of small nostril pits at the front of the head that detect the chemical trail of a plankton bloom from a distance, and a wide mouth held permanently agape while swimming, lined with fine comb-like filtering gill rakers that strain plankton and organic matter continuously from the water without ever needing to stop. It has no external ears, relying instead on a lateral line running the length of its body that senses the faintest vibrations from every neighboring fish, linking the entire shoal into something closer to a single coordinated organism than a collection of individuals. A fringe of thin, hard, semi-translucent flash-fins lines its flanks, reading more like shards of cut glass or ice than ordinary fin tissue, catching and reflecting light in a single unified flash across the whole shoal whenever it banks sharply, and its flanks are covered in especially fine iridescent scales arranged in swirling, asymmetric patterns resembling a cross-section of polished mother-of-pearl rather than a regular scale grid, scattering a faint rainbow shimmer when the shoal swims in a tight ball, making it nearly impossible for a predator to lock onto any single fish within the shimmering, flashing mass. Its body is a laterally compressed, deep frame typical of a schooling filter-feeder, with a highly flexible spine allowing instantaneous synchronized turns without colliding with its neighbors, and a forked tail fin provides bursts of speed when the shoal scatters explosively to escape a strike. It has two pairs of thin fins, a pectoral pair used for fine steering and stability while filter-feeding slowly, and a pelvic pair that helps it hold vertical balance as the shoal shifts depth to follow plankton blooms. Its back is covered in fine dark blue-grey scales that blend with the water's surface when viewed from above, its belly is covered in pale near-white scales that vanish against the bright water surface when viewed from below, and its flanks carry the especially fine swirl-patterned iridescent scales responsible for the shoal's confusing flash display. Faint horizontal striping, slightly darker than the body, runs along its flanks in a classic countershaded gradient from dark back to pale belly, overlaid with a shimmering iridescent swirl that sparkles whenever the shoal moves in unison. Its lateral-line network lets the entire shoal move and turn as one confusing, flashing mass that overwhelms any single predator's ability to target one fish, at the cost of almost no individual survival instinct at all — a fish separated from the shoal panics instantly and becomes the easiest prey in the entire ecosystem within seconds. Its coloration is a harmonious pale silvery blue-grey palette, deepened by near-black blue shadows in the recesses and lifted by near-white highlights along its belly and flanks, with muted teal worked into its back scales and pale violet iridescence shimmering across its sides, and a glowing pearlescent white-silver highlight reserved only for the synchronized flash of its glass-like fin fringes and the swirling iridescent shimmer of its flank scales. The shoal swims in a tight, swirling ball through the sunlit shallows of a tidal channel in the Resonant Strait, scales flashing in unison as the group banks sharply together.\n\nPhotorealistic 3D creature render, cinematic film-VFX quality, swimming full-body in its natural habitat environment, three-quarter view, shot with a telephoto lens at eye level, shallow depth of field with softly blurred background water and distant shoal members, volumetric god rays filtering down through the water's surface, soft naturalistic backlighting that makes the iridescent scales and glass-like fin fringes glow from within, hyper-detailed micro-texturing on every scale and surface, subsurface scattering, physically-based rendering, muted natural color grading with deep shadows, 1:1 square composition, subject centered and fully visible from head to feet, no readable text."
});
