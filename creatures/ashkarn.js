/* ITH-216-330 — Ashkarn (DRAFT) — ทดสอบ ALIEN INTENSITY SCALE Tier IV */
creaturesData.push({
        id: "ITH-216-330", name: "Ashkarn", nickname: "เจ้าหินที่ตื่น", status: "DRAFT", era: "ยุคป่าหมอก (Mistwood Era)",
        imageKey: "ASHKARN", color: "#ff5a2e",
        category: "สัตว์กินเนื้อ · นักล่าปีกจำศีลตามวัฏจักรภูเขาไฟ (Cyclic dormant volcanic apex predator)",
        habitat: "หมู่เกาะภูเขาไฟ Dothen — Zone 1: The Basalt Calderas",
        foodChain: "ผู้ล่าสูงสุดตามฤดูกาลปะทุ — ล่าทุกสิ่งมีชีวิตที่ตื่นตระหนกหนีลาวาในรัศมีปล่องภูเขาไฟที่มันจำศีลอยู่",
        danger: "70% (Highly Lethal) — เฉพาะช่วงตื่น", size: "ระดับ 7 — ยักษ์ (เท่าวาฬ)", height: "6.2 ม. ที่มวลลำตัวเมื่อคลี่ตัวเต็มที่ (ไม่รวมปีก) · ปีก 1 คู่ ขนาดต่างกันสุดขั้ว ปีกซ้าย 32 ม. ปีกขวา 10 ม. รวมกางเต็มที่ 42 ม.", weight: "32 ตัน (รวมเปลือกหินที่ยังไม่แตกออกหมด)",
        desc: "สิ่งมีชีวิตที่ใช้ชีวิตส่วนใหญ่หลอมรวมเป็นเนื้อเดียวกับหินบะซอลต์ในปล่องภูเขาไฟจนแยกไม่ออกจากหินจริง จำศีลลึกเป็นสิบๆ ปีระหว่างรอบการปะทุ เมื่อภูเขาไฟเริ่มเคลื่อนไหว ความร้อน/แรงสั่นสะเทือนจะปลุกให้เปลือกหินแตกออกและมันจึงตื่นล่า อาศัยความโกลาหลของฝูงสัตว์ที่หนีตายจากลาวาเป็นช่วงเวลาล่าเพียงช่วงเดียวในรอบหลายปี ก่อนกลับไปจำศีลอีกครั้งเมื่อพื้นดินเย็นลง",
        mutation: { pro: "หลอมร่างเป็นหินจำศีลได้เกือบไม่ใช้พลังงานเลย อยู่รอดได้แม้ภูเขาไฟสงบนิ่งนานนับสิบปี", con: "ต้องพึ่งความร้อนจากการปะทุจริงเท่านั้นถึงจะ \"ตื่น\" ได้ — ถ้าภูเขาไฟลูกนั้นดับสนิทถาวรจะไม่มีวันตื่นอีกเลย" },
        weapons: [ "ปีกข้างที่มีมวลมากที่สุดฟาดเป็นอาวุธหลักได้ในตัว", "แอ่งรับความร้อน 5 จุดล็อกเป้าเหยื่อที่ตัวร้อนกว่าลาวารอบข้างได้แม่นยำ", "เปลือกหินที่ยังไม่แตกหมดตามผิวใช้เป็นเกราะธรรมชาติระหว่างล่า" ],
        social: "อยู่ตัวเดียวตลอดชีวิต ไม่เคยพบเจอกันเองนอกฤดูปะทุ ต่างปล่องภูเขาไฟก็ต่างตัว ไม่มีอาณาเขตทับซ้อนเพราะช่วงตื่นของแต่ละตัวขึ้นอยู่กับภูเขาไฟที่มันฝังตัวอยู่ล้วนๆ",
        head: [
            ["แอ่งรับความร้อน (ไม่เป็นคู่)", "5 จุดกระจายไม่สมมาตรทั่วก้อนหัว-ลำตัวที่หลอมเป็นเนื้อเดียว", "ไม่มีตาแบบสัตว์ทั่วไปเลย มีแต่แอ่งรับรังสีความร้อนกระจายไม่เท่ากันทั้งจำนวนและตำแหน่งทั้งสองข้าง ไม่มีจุดใดที่นับเป็น \"หน้า\" ได้ชัดเจน อ่านความร้อนของเป้าหมายที่ร้อนกว่าลาวารอบข้างได้แม่นยำในระยะไกล"],
            ["ช่องรับไอกำมะถัน", "ร่องแยกไม่สมมาตรข้างแอ่งความร้อนที่ใหญ่ที่สุด", "แทนจมูก รับไอกำมะถันและแรงสั่นสะเทือนจากลาวาที่กำลังเคลื่อนตัวใต้ดิน เป็นสัญญาณเตือนล่วงหน้าว่าใกล้ถึงเวลาตื่น"],
            ["ปาก", "รอยแยกลึกที่ผิวหินซึ่งเผยให้เห็นเมื่อตื่นเท่านั้น", "ตอนจำศีลมองไม่เห็นเป็นปากเลย เป็นแค่รอยแตกร้าวบนผิวหิน เมื่อตื่นแล้วรอยแยกนั้นถ่างออกเผยขากรรไกรหินบะซอลต์ขอบคมที่ซ่อนอยู่ข้างใน"],
            ["การรับเสียง", "ไม่มีหูภายนอก", "รับแรงสั่นสะเทือนผ่านเนื้อหินที่หลอมรวมกับร่างกายโดยตรง ไวต่อความถี่ของแผ่นดินไหวก่อนปะทุมากกว่าเสียงในอากาศ"],
            ["EXTRA #1", "ท่อระบายความร้อนใต้เปลือกหิน", "ร่างแหท่อระบายความร้อนกระจายไม่สมมาตรใต้เปลือกออบซิเดียน เปิดออกเรืองส้มแดงเฉพาะตอนล่าเพื่อระบายความร้อนสะสมจากการออกแรงบิน ปิดสนิทกลับเป็นหินเรียบตอนจำศีล"],
            ["EXTRA #2", "แกนผลึกสะสมพลังงานกลางลำตัว", "แกนผลึกออบซิเดียนหนาทึบฝังลึกกลางมวลลำตัว สะสมพลังงานความร้อนไว้ตลอดหลายสิบปีที่จำศีล เป็นแหล่งพลังงานเดียวที่เลี้ยงร่างกายไว้จนกว่าจะตื่นมาล่าได้อีกครั้ง"]
        ],
        body: [
            ["BODY FRAME", "ก้อนหิน-เนื้อเยื่อหลอมรวม ปีก-ขาเป็นคู่ปกติ แต่ขนาดสองข้างต่างกันสุดขั้ว", "ยังคงโครงร่างพื้นฐานเป็นคู่ซ้าย-ขวาแบบสัตว์ปีกทั่วไป (ปีก 1 คู่ ขา 1 คู่) แต่สัดส่วนสองข้างต่างกันมากจนดูไม่สมดุล ด้านที่มีปีกใหญ่หนักกว่าอีกด้านมาก สมดุลน้ำหนักทำผ่านการกระจายมวลหินภายในแทนรูปทรงภายนอก"],
            ["SPINE", "แนวรอยแตกผลึกออบซิเดียนแทนกระดูกสันหลัง", "ไม่มีกระดูกสันหลังจริง มีแต่แนวรอยแตกที่ผลึกออบซิเดียนเรียงตัวเป็นแนว ทำหน้าที่แทนความยืดหยุ่นของร่างกาย เรืองแสงส้มแดงจากภายในเฉพาะตอนตื่นและร่างกายยังร้อนอยู่"],
            ["TAIL", "ไม่มีหางแท้ ปลายลำตัวเป็นก้อนหินแหลมเอียงไปทางด้านที่เบากว่า", "Utility — ก้อนหินแหลมที่ปลายลำตัวถ่วงสมดุลตอนบินคู่กับความไม่เท่ากันของปีกสองข้าง ไม่ได้มีไว้ทำอะไรเฉพาะนอกจากถ่วงน้ำหนัก"]
        ],
        limbs: [
            ["#1", "ปีก", "ข้างซ้าย (ใหญ่)", "ปีกข้างซ้ายมีขนาดมหึมา ยาวกว่าตัวมันเองหลายเท่า ผิวปีกมีลายแตกคล้ายลาวาแข็งตัว เป็นแหล่งแรงยกหลักเวลาบิน"],
            ["#2", "ปีก", "ข้างขวา (เล็กกว่ามาก)", "ปีกข้างขวายังเป็นปีกจริงที่ใช้งานได้ ไม่ใช่ปีกลีบเล็กไร้ประโยชน์ แต่เล็กกว่าข้างซ้ายมาก ทำหน้าที่บังคับทิศทางละเอียดขณะที่ปีกซ้ายให้แรงยกหลัก"],
            ["#3", "ขา", "1 คู่ (ซ้าย-ขวา)", "ขาคู่ปกติ ปลายเท้าแบนกว้างยึดผนังปล่องภูเขาไฟตอนจำศีลได้มั่นคง ทั้งสองข้างรูปทรงเหมือนกัน"]
        ],
        skin: [
            ["ผิวช่วงจำศีล", "ผลึกออบซิเดียนแตกเป็นเหลี่ยมจริงทางธรณีเคมี ไม่ใช่แค่ลาย", "ไม่สามารถแยกออกจากหินภูเขาไฟจริงด้วยตาเปล่าได้เลยตอนจำศีล เป็นแร่จริงที่งอกจากผิวหนังจริง ไม่ใช่การพรางตัวแบบผิวหนังธรรมดา"],
            ["ผิวช่วงตื่น", "รอยแตกเรืองส้มแดงตามแนวผลึกที่แยกออกจากกัน", "เมื่อตื่นแล้ว เปลือกออบซิเดียนแตกเผยเนื้อเยื่อสีแดงเข้มร้อนจัดข้างใต้ตามรอยแยก เห็นแสงเรืองจากภายในลอดออกมาตามรอยแตก"],
            ["ปลายปีก/ขา", "หินหลอมเย็นตัวเป็นขอบคมธรรมชาติ", "ขอบปีกและขาแข็งพอจะเป็นอาวุธได้ในตัวโดยไม่ต้องมีเขี้ยวหรือกรงเล็บเพิ่ม"]
        ],
        pattern: "ไม่มีลายพรางแบบสัตว์ทั่วไป — พื้นผิวคือรอยแตกของหินจริงที่กระจายไม่สม่ำเสมอทั่วตัว ยิ่งใกล้จุดที่เคยแตกออกตื่นมาแล้วหลายรอบ รอยแตกยิ่งซับซ้อนขึ้นเป็นชั้นๆ เหมือนวงปีต้นไม้ของหิน",
        pal: [["สีหลัก", "#2b2320"], ["เงา", "#0f0c0a"], ["แสง", "#6b5d52"], ["เสริม A", "#8a3a1e"], ["เสริม B", "#4a4038"]],
        hl: ["#ff5a2e", "ส้มแดงเรืองแสงจากรอยแตก"],
        hlAt: "รอยแตกตามแนวผลึกสันหลังเมื่อตื่น · ช่องขากรรไกรที่ถ่างออกจากรอยแยกผิวหิน · ขอบปีก/ขาตอนร้อนจัด",
        mutationFull: {
            proTitle: "การหลอมร่างเป็นหินจำศีล / ประหยัดพลังงานเกือบสมบูรณ์",
            proDesc: "ระหว่างจำศีล ร่างกายแทบไม่ใช้พลังงานเลยเพราะหลอมเป็นเนื้อเดียวกับหินจริงทางธรณีเคมี ไม่ใช่แค่การจำศีลทางชีวภาพทั่วไป ทำให้อยู่รอดได้แม้ภูเขาไฟลูกนั้นสงบนิ่งไปนานนับสิบปีโดยไม่ต้องกินอะไรเลยสักครั้ง",
            conTitle: "การพึ่งพาความร้อนจากการปะทุจริง / ผูกชะตากับภูเขาไฟลูกเดียว",
            conDesc: "ไม่มีกลไกใดปลุกมันได้นอกจากความร้อน/แรงสั่นสะเทือนจากการปะทุจริงของภูเขาไฟลูกที่มันฝังตัวอยู่เท่านั้น ถ้าภูเขาไฟลูกนั้นดับสนิทถาวรและไม่ปะทุอีกเลย มันจะไม่มีวันตื่นขึ้นมาอีกต่อไป ไม่มีทางย้ายไปปล่องอื่นได้ด้วยตัวเอง"
        },
        dangerDetail: {
            raw: "140 / 200", percent: 70, tier: "อันตรายสูง (Highly Lethal) — เฉพาะช่วงตื่น",
            factors: ["มวลกายมหึมาบวกแรงกระแทกจากปีกซ้าย-ขวาที่ขนาดต่างกันสุดขั้ว (+9)", "แอ่งรับความร้อนล็อกเป้าแม่นยำท่ามกลางความโกลาหลของลาวา (+8)", "ขอบปีก/ขาคมจากหินหลอมเย็นตัว (+7)"],
            note: "คะแนนนี้ใช้ได้เฉพาะช่วงตื่นเท่านั้น ซึ่งเกิดขึ้นน้อยมากในรอบชีวิตหนึ่ง — ตลอดช่วงจำศีลอันยาวนาน อันตรายเท่ากับก้อนหินก้อนหนึ่งอย่างแท้จริง ไม่ตอบสนองต่อสิ่งใดเลยแม้จะถูกโจมตีตรงๆ"
        },
        combat: [
            ["การตื่นกลางความโกลาหล (Eruption Wake)", "แตกออกจากเปลือกหินทันทีที่ความร้อน/แรงสั่นสะเทือนถึงระดับที่กำหนด ไม่มีช่วงตื่นตัวช้าๆ แบบสัตว์จำศีลทั่วไป — จากหินนิ่งสนิทเป็นล่าเต็มที่ในไม่กี่วินาที"],
            ["บินด้วยแรงยกไม่เท่ากัน (Uneven-Lift Flight)", "ปีกซ้าย-ขวาขนาดต่างกันมากให้แรงยกไม่เท่ากัน ใช้ความต่างนี้เลี้ยวและไต่ระดับแทนการบินตรงแบบสัตว์ปีกทั่วไป — เส้นทางบินจึงดูสะดุดเป็นจังหวะ ไม่ราบเรียบ ทั้งที่ยังมีปีกแค่คู่เดียวตามปกติ"]
        ],
        abilities: [
            {
                name: "การรับรู้ความร้อนแบบไม่มีจุดศูนย์กลาง", type: "Sensory — ประสาทสัมผัส",
                desc: "แอ่งรับความร้อน 5 จุดที่กระจายไม่สมมาตรทั่วตัวทำงานร่วมกันเป็นภาพความร้อนรอบทิศทางเดียว ไม่มีมุมอับสายตาแบบสัตว์ที่มีตาคู่หน้าเดียว — ล็อกเป้าหมายที่ร้อนกว่าลาวารอบข้างได้จากทุกทิศพร้อมกัน",
                origin: "วิวัฒนาการขึ้นเพื่อล่าในสภาพแวดล้อมที่ทุกอย่างรอบตัวร้อนจัดอยู่แล้ว (ลาวา ไอกำมะถัน หินหลอม) ระบบสายตาแบบมีทิศทางเดียวจะพลาดเป้าที่โผล่มาจากด้านข้าง การกระจายจุดรับความร้อนรอบตัวจึงจำเป็นต่อการอยู่รอด ไม่ใช่แค่ทางเลือก"
            },
            {
                name: "จำศีลแบบธรณีเคมี", type: "Physiology — สรีรวิทยา",
                desc: "ผิวหนังงอกผลึกออบซิเดียนจริงระหว่างจำศีล ไม่ใช่การพรางตัวแค่สีผิว — ร่างกายกลายเป็นส่วนหนึ่งของหินภูเขาไฟจริงจนแยกไม่ออกด้วยตาเปล่า และกลับคืนสภาพเนื้อเยื่อได้เมื่อความร้อนจากการปะทุมาถึง",
                origin: "ผูกชะตากับวัฏจักรภูเขาไฟลูกเดียวมาหลายชั่วอายุจนกลไกจำศีลพัฒนาไปไกลกว่าการจำศีลทางชีวภาพทั่วไป กลายเป็นกระบวนการทางธรณีเคมีที่ย้อนกลับได้ — ราคาที่ต้องจ่ายคือพึ่งพาภูเขาไฟลูกนั้นจนแทบเปลี่ยนที่อยู่ไม่ได้เลย"
            }
        ],
        confusion: [
            ["ก้อนหินภูเขาไฟขนาดใหญ่ริมปล่อง", "มี (ตอนจำศีล)", "มี", "warn"],
            ["รอยแตกเรืองแสงส้มแดง", "ไม่มี", "มี (เฉพาะตอนตื่น)", "yes"],
            ["ปีก", "ไม่มี", "มี 1 คู่ ขนาดสองข้างต่างกันสุดขั้ว", "yes"],
            ["การเคลื่อนไหว", "ไม่มีเลย", "แตกออกจากหินอย่างฉับพลันเมื่อตื่น", "yes"]
        ],
        notes: [
            ["", "<strong>ทดสอบ Tier IV — ANATOMICALLY UNBOUND</strong>: ออกแบบเพื่อทดสอบว่าการหลุดจากตรรกะกายวิภาคสัตว์โลก (แอ่งรับความร้อนไม่เป็นคู่, ร่างจำศีลเป็นหินจริง) ยังอ่านเป็นสิ่งมีชีวิตที่มีเหตุผลเชิงวิวัฒนาการรองรับได้ครบตามกฎ creature-design.md หรือไม่"],
            ["warn", "<strong>แก้ไข 2026-09-01</strong>: ดราฟต์แรกออกแบบปีก 3 ข้าง/ขา 3 ข้างไม่สมมาตร (จำนวน) — AI image-gen render จำนวนแขนขาไม่คงที่ (บางภาพ 2 แขน 2 ขา บางภาพ 5 ปีก) และขนาดออกมาดูธรรมดาไม่ colossal แก้เป็นปีก 1 คู่/ขา 1 คู่ตามปกติ แต่ปีกสองข้างขนาดต่างกันสุดขั้วแทน (asymmetric ที่ขนาด ไม่ใช่จำนวน) ตามกฎใหม่ใน creature-design.md — ดูรายละเอียดกฎที่แก้ใน creatures/README.md หัวข้อ ALIEN INTENSITY SCALE"],
            ["warn", "สถานะ DRAFT — มี field `prompt` แล้ว (เขียนตามคำขอ) แต่ยังไม่ได้เปลี่ยนสถานะเป็น ALIVE จนกว่าจะรีวิว anatomy ทั้งหมดผ่าน"]
        ],
        prompt: "A titanic, whale-scale alien volcanic apex predator, so vast that its own shadow swallows the crater floor beneath it, caught in the instant of breaking free from a shell of solidified obsidian rock along a caldera wall that looks small beside it: its fused head-and-body mass alone stands 6.2 meters tall, dwarfed by its own wings, which span an immense 42 meters in total. Count its limbs carefully and exactly: it has exactly ONE PAIR of wings, one on the left and one on the right like any normal winged animal, but the two wings are wildly mismatched in size — its left wing is a colossal 32-meter sail of a wing, several times larger than its own body, while its right wing is a much smaller (though still fully functional) 10-meter wing, clearly the same kind of limb just at a fraction of the size. It has exactly ONE PAIR of legs, left and right, matched in shape and size like a normal quadruped's hind legs, ending in broad flat feet built to grip a crater wall. Do not draw three wings, four legs, or any odd or unmatched limb count — this creature has a completely ordinary limb count (2 wings, 2 legs), the alien wrongness comes entirely from the extreme size mismatch between its left and right wing, not from extra or missing limbs. Its head is a single fused mass of head and torso with no true face: five heat-sensing pits are scattered asymmetrically across its surface in place of eyes, unmatched in number and position from one side to the other, reading the heat of anything hotter than the surrounding lava at any angle at once; a jagged vent beside the largest pit reads sulfurous gas and the tremor of magma moving underground in place of a nose; its mouth is invisible while dormant, existing only as a fracture line in the rock that splits open when it wakes to reveal a basalt jaw with cracked obsidian edges; it has no external ears, sensing vibration directly through the fused rock of its own body. Beneath its obsidian crust runs an asymmetric network of heat-vent channels that stay sealed flat and invisible during dormancy but glow deep orange-red through hairline cracks the instant it wakes and begins to overheat from exertion, and deep at the center of its fused mass sits a dense obsidian energy-storage core, visible only as a faint inner glow through one wide fissure in its chest, the single reserve that sustains it through decades of dormancy between eruptions. Its body is a fused rock-and-flesh mass, heavily weighted toward the side with its huge left wing and counterbalanced by a spur of rock at its rear, spine replaced by a jagged line of obsidian fracture crystals that glows orange only while awake and warm, and no true tail, only that asymmetric rock spur jutting from the rear of its mass to help balance the mismatched wings in flight. Its massive left wing and its much smaller right wing share the same membrane texture, fissured like cooling lava, the left one so large it reads almost like a sail or a cliff face unfurling beside the comparatively modest right wing; its two matched legs end in broad flat feet built to grip the uneven walls of a volcanic vent while dormant. Its surface during dormancy is genuine faceted obsidian crust indistinguishable from real volcanic rock, cracking open when awake to reveal deep red-hot tissue glowing along every fracture line, while its wing and leg edges cool into naturally sharp obsidian rims that double as weapons. Its surface bears no camouflage pattern in the animal sense, only the irregular fracture-lines of real cooled rock, layered ring upon ring like tree rings of stone at the points where it has broken open and resealed across many previous eruption cycles. It hibernates fused into solid volcanic rock for decades between eruptions at almost zero energy cost, at the price of being able to wake only when the genuine heat of an eruption reaches it, with no way to rouse itself otherwise. Its coloration is a harmonious near-black volcanic charcoal palette, deepened by pure black shadows in the deepest fracture recesses and lifted by pale ash-grey highlights along the raised rock ridges, with rust-orange tones worked into the long-cooled fracture lines and dull warm grey along the wing membranes, and a glowing orange-red highlight reserved only for the fresh fracture lines along its spine, the crack revealing its core, and the searing edges of its wings and legs when active. It is emerging explosively from the crater wall of an active volcanic caldera on Dothen, its enormous left wing alone eclipsing the jagged basalt spires around it, drifting ash and molten lava glowing deep orange far below dwarfed by its scale, its mismatched pair of wings caught mid-unfurl in the heat-shimmer rising off the rock — exactly two wings (one huge, one small) and exactly two legs, an ordinary limb count with an extreme size mismatch, not extra limbs.\n\nPhotorealistic 3D creature render, cinematic film-VFX quality, standing full-body in its natural habitat environment, three-quarter view from a distance wide enough to show its full titanic scale against the caldera around it, shot with a telephoto lens at eye level, shallow depth of field with softly blurred background basalt and drifting ash, volumetric heat-shimmer and ash lit by a deep orange glow from the crater below, soft dramatic backlighting that makes the fracture lines and core glow from within, hyper-detailed micro-texturing on every rock facet and surface, subsurface scattering, physically-based rendering, muted volcanic color grading with deep shadows, 1:1 square composition, subject centered and fully visible from head to feet, no readable text."
});
