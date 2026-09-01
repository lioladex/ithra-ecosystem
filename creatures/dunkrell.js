/* ITH-208-640 — Dunkrell (ALIVE) */
creaturesData.push({
        id: "ITH-208-640", name: "Dunkrell", status: "ALIVE", era: "ยุคป่าหมอก (Mistwood Era)",
        imageKey: "DUNKRELL", color: "#c8e05a",
        category: "ผู้ย่อยสลายซากขนาดใหญ่ (Large detritivore/scavenger)",
        habitat: "พื้นป่าหมอก/หนองบึง (Verath, Forest Floor — The Dark Mire)",
        foodChain: "ผู้ย่อยสลาย — เก็บกินซากที่เหลือจาก Karvos, Skyther และนักล่าอื่น",
        danger: "12% (Harmless)", size: "ระดับ 4 — กลาง (เท่าหมูใหญ่)", height: "0.7 ม. ที่หลัง · ลำตัวยาว 1.4 ม.", weight: "86 กก.",
        desc: "สัตว์เคลื่อนไหวเชื่องช้าปกคลุมด้วยเปลือกคล้ายเชื้อรา อาศัยตามพื้นป่าชื้น กินซากสัตว์และเศษซากพืชที่เหลือจากนักล่าอื่น มีบทบาทสำคัญในการหมุนเวียนสารอาหารกลับสู่ดิน แทบไม่มีศัตรูตามธรรมชาติเพราะเปลือกมีรสขมและมีพิษอ่อนๆ มักถูกเข้าใจผิดว่าเป็นท่อนไม้ผุหรือก้อนหินที่มีเชื้อราขึ้น",
        mutation: { pro: "เปลือกเชื้อราพิษอ่อน / นักล่าแทบทุกชนิดเรียนรู้ที่จะเลี่ยงโดยไม่ต้องพิสูจน์ซ้ำ แทบไม่มีศัตรูตามธรรมชาติเลย", con: "ระบบเผาผลาญและกล้ามเนื้อช้ามาก / หนีภัยแทบไม่ได้เลย ต้องพึ่งพาพิษเพียงอย่างเดียวเมื่อเจอสัตว์ที่ดื้อต่อพิษ" },
        weapons: [ "เปลือกเชื้อราขมมีพิษอ่อน (สปอร์ระคายเคือง)", "ไม่มีอาวุธเชิงรุกอื่นใด", "อาศัยการพรางตัวเป็นท่อนไม้/ก้อนหินเป็นเกราะป้องกันหลัก" ],
        social: "อยู่ตัวเดียว ไม่มีอาณาเขตชัดเจน เคลื่อนตัวช้าๆ ตามกลิ่นซากสัตว์ อายุขัยยาวนานมาก (คาดว่า 80-100 ปี) เพราะแทบไม่มีปัจจัยเสี่ยงจากการถูกล่า",
        head: [
            ["ดวงตา", "จุดรับแสงเล็กกระจายไม่สมมาตร 5-7 จุดทั่วหัว (Eye-spots)", "แทบมองไม่เห็นภาพ รับรู้ได้แค่ความต่างสว่าง-มืดหยาบๆ เพียงพอสำหรับสัตว์ที่ไม่ต้องไล่ล่าหรือหลบหนีอะไรเลย จำนวนและตำแหน่งจุดรับแสงไม่เท่ากันในแต่ละตัว งอกเพิ่มแบบสุ่มตามอายุคล้ายจุดเกิดใหม่บนก้อนหิน"],
            ["จมูก", "โพรงจมูกไวต่อกลิ่นซากเน่าเป็นพิเศษ", "ประสาทรับกลิ่นหลักของร่างกาย ดมกลิ่นซากสัตว์เน่าเปื่อยได้ไกลหลายร้อยเมตรแม้อยู่ใต้ใบไม้ทับถมหนา"],
            ["ปาก", "ปากขูดขบไร้ฟันแหลม", "ริมฝีปากหนาแข็งใช้ขูดถากเนื้อออกจากกระดูกซากสัตว์อย่างช้าๆ และบดเศษซากพืชแข็งได้ทั้งชิ้น ไม่ต้องรีบเพราะไม่มีใครมาแย่ง"],
            ["หู", "รูรับแรงสั่นสะเทือนเล็กสองข้าง", "รับรู้ฝีเท้าสัตว์ขนาดใหญ่ที่เดินผ่านใกล้เพื่อหมอบนิ่งพรางตัวทันเวลา ไม่ใช่เพื่อหนีแต่เพื่อไม่ถูกสังเกตเห็น"],
            ["EXTRA #1", "ปุ่มเชื้อรา-แร่ผลึกทั่วเปลือกหลัง", "ปุ่มคล้ายเห็ดปนแร่ผลึกขนาดเล็กกระจายทั่วแผ่นเกราะหลังอย่างไม่สมมาตร บางปุ่มมีรอยแตกเรืองแสงเหลืองอมเขียวจางๆ ปล่อยสปอร์ขมและระคายเคืองเมื่อถูกกัดหรือบุกรุก นักล่าที่เคยลองกัดจะจดจำและเลี่ยงตลอดไป"],
            ["EXTRA #2", "โพรงย่อยรองใต้ท้อง (Secondary Gut Chamber)", "ห้องย่อยพิเศษที่อาศัยจุลินทรีย์ช่วยย่อยเนื้อเยื่อและพืชที่เน่าเปื่อยแล้วให้กลายเป็นสารอาหารกลับคืนสู่ดินผ่านของเสียที่ขับออกมาตลอดเส้นทางที่มันคลานผ่าน"]
        ],
        body: [
            ["BODY FRAME", "โครงร่างต่ำหนาแบบเต่าผสมตัวกินไม้มอด", "ลำตัวหนาเตี้ยแนบพื้น จุดศูนย์ถ่วงต่ำมาก มั่นคงและยากจะพลิกคว่ำ สร้างมาเพื่อทนทานไม่ใช่เพื่อความเร็ว"],
            ["SPINE", "แผ่นเกราะหลังโดมแข็งเชื่อมเกือบเป็นชิ้นเดียว", "แผ่นเกราะกระดูกที่ปกคลุมด้วยเปลือกเชื้อราทั้งแผ่น แข็งพอจะทนแรงกัดจากนักล่าขนาดกลางได้โดยแทบไม่บาดเจ็บ"],
            ["TAIL", "ไม่มีหางแท้ ปลายลำตัวมนทู่", "Utility — ไม่มีประโยชน์ใช้สอยพิเศษ เพราะไม่จำเป็นต้องทรงตัวหรือขับเคลื่อนเร็ว"]
        ],
        limbs: [
            ["#1", "ขา", "ขาหน้า (2 คู่)", "สั้นหนาปลายมีเล็บทู่กว้าง ใช้พลิกซากสัตว์หรือขุดคุ้ยใบไม้ทับถมหาเศษซากที่ฝังอยู่ เคลื่อนที่ได้ช้ามากแม้ใช้แรงเต็มที่"],
            ["#2", "ขา", "ขาหลัง (2 คู่)", "โครงเดียวกับขาหน้า ให้แรงยันเวลาคลานพื้นดินอ่อนหรือโคลนโดยไม่จมติด"]
        ],
        skin: [
            ["หลัง/ด้านข้าง", "เปลือกหนังหนาปกคลุมทั้งหมดด้วยเชื้อราแบร็กเก็ตแบบพึ่งพา เติบโตร่วมกับผิวหนังจริงจนแยกไม่ออกว่าส่วนไหนเป็นสัตว์ส่วนไหนเป็นรา"],
            ["ใต้ท้อง", "หนังหนาเรียบไม่มีเชื้อราปกคลุม จุดเดียวที่ไม่มีเปลือกพิษ ป้องกันด้วยการแนบชิดพื้นตลอดเวลาแทน"],
            ["ขา/เท้า", "หนังหนาด้านทนความชื้น ทนต่อการแช่อยู่ในโคลนหนองบึงเป็นเวลานานโดยไม่เปื่อยหรือติดเชื้อ"]
        ],
        pattern: "ลายด่างพร่าสีเทา-เขียว-น้ำตาลไม่สม่ำเสมอทั่วเปลือก เลียนแบบเชื้อราและมอสที่ขึ้นบนท่อนไม้ผุจริง แทรกด้วยรอยแตกเรืองแสงเหลืองอมเขียวจางๆ ตามร่องระหว่างปุ่มเชื้อรา-แร่ผลึก คล้ายเส้นแร่ในหินที่แตกร้าว ตัวที่อายุมากจะมีลายซับซ้อนขึ้นเรื่อยๆ จนแยกไม่ออกจากสภาพแวดล้อมจริง",
        pal: [["สีหลัก", "#5a5a3e"], ["เงา", "#1c1c14"], ["แสง", "#a8a888"], ["เสริม A", "#8a9a4a"], ["เสริม B", "#6a4a5a"]],
        hl: ["#c8e05a", "เขียวอมเหลืองเรืองแสงจาง"],
        hlAt: "ปุ่มเชื้อราพิษที่เรืองแสงจางยามค่ำคืน (สัญญาณเตือนนักล่า) · ร่องเปลือกที่มีสปอร์เกาะเมื่อย้อนแสง",
        mutationFull: {
            proTitle: "เปลือกเชื้อราพิษ / การป้องกันตัวแบบไม่ต้องต่อสู้",
            proDesc: "เปลือกเชื้อราที่ปกคลุมทั้งตัวมีรสขมจัดและสปอร์ระคายเคืองเมื่อถูกกัด นักล่าแทบทุกชนิดเรียนรู้จากประสบการณ์เพียงครั้งเดียวและเลี่ยงตลอดไป ทำให้ Dunkrell ไม่จำเป็นต้องมีความเร็ว ความแข็งแรง หรือประสาทสัมผัสที่ดีเลยก็สามารถอยู่รอดได้",
            conTitle: "ระบบเผาผลาญ / ความเร็วในการเคลื่อนที่",
            conDesc: "เพื่อรักษาพลังงานไว้สำหรับผลิตสารพิษและเปลือกหนา ระบบเผาผลาญและกล้ามเนื้อทำงานช้ามากอย่างถาวร แทบไม่มีความสามารถในการหนีภัยใดๆ เลย หากเจอสัตว์ที่ดื้อต่อพิษหรือรู้จุดพลิกตัวคว่ำ Dunkrell แทบไม่มีทางป้องกันตัวเองได้อีกเลย"
        },
        dangerDetail: {
            raw: "20 / 170", percent: 12, tier: "ไม่มีพิษภัย (Harmless)",
            factors: ["สปอร์พิษระคายเคือง (+8)", "รสขมขับไล่ผู้ล่า (+6)", "ไม่มีอาวุธเชิงรุก (+0)"],
            note: "ไม่เป็นอันตรายเชิงรุกต่อสิ่งใดเลย พิษมีไว้เพื่อป้องกันตัวเท่านั้น อันตรายที่แท้จริงมีแค่การกินเข้าไปโดยไม่รู้ว่ามันไม่ใช่ท่อนไม้จริง"
        },
        combat: [
            ["พรางตัวนิ่งสนิท (Frozen Camouflage)", "เมื่อรู้สึกถึงแรงสั่นจากสัตว์ใหญ่เข้าใกล้ จะหยุดเคลื่อนไหวสนิททันที กลืนเป็นเนื้อเดียวกับท่อนไม้ผุหรือก้อนหินรอบตัว"],
            ["พิษป้องกันตัว (Passive Toxin)", "หากถูกกัดหรือบุกรุกจริง เปลือกเชื้อราจะปล่อยสปอร์ขมและระคายเคืองทันที มักทำให้ผู้โจมตีปล่อยและถอยหนีโดยไม่ต้องสู้เลย"]
        ],
        abilities: [
            {
                name: "ความเฉื่อยชาที่ไม่เปลี่ยนแปลงแม้ในอันตราย", type: "Physiology — จังหวะชีวิตคงที่",
                desc: "เคลื่อนที่ด้วยจังหวะเดิมทุกครั้งไม่ว่าจะกำลังหาซากกินอย่างสงบหรือติดอยู่กลางฝูงสัตว์ที่แตกตื่นหนีตาย ความเร็วสูงสุดที่ทำได้ยังคงช้ากว่าทุกสิ่งรอบตัวอย่างเห็นได้ชัด แต่ไม่เคยแสดงอาการตื่นตระหนกหรือเปลี่ยนจังหวะเลยแม้แต่น้อย",
                origin: "การพรางตัวเป็นท่อนไม้ผุมีค่าก็ต่อเมื่อไม่มีวันแตกลีลาออกจากบทบาทนั้นเลย สายพันธุ์ที่เคยตอบสนองต่อภัยด้วยความตื่นตระหนกมักเผยตัวเองออกมาจนถูกจับได้ง่ายกว่า ความเฉื่อยชาที่ไม่เปลี่ยนแปลงจึงกลายเป็นข้อได้เปรียบมากกว่าจุดอ่อนในระยะยาว"
            }
        ],
        notes: [
            ["", "<strong>ผู้เก็บกวาดที่ไม่มีใครอยากยุ่งด้วย</strong>: Dunkrell มีบทบาทสำคัญที่สุดในวงจรสารอาหารของป่าหมอกทั้งระบบ แต่แทบไม่มีใครสังเกตเห็นมันเลย เพราะความช้าและการพรางตัวที่แนบเนียนจนแยกไม่ออก"],
            ["", "ลักษณะที่ตั้งใจไว้เบื้องต้น: เคลื่อนไหวเชื่องช้ามาก เปลือกคล้ายเชื้อรามีพิษอ่อน สำคัญต่อวงจรสารอาหารของทั้งป่า ทั้งหมดนี้ออกแบบเป็นระบบ Slot เต็มรูปแบบแล้ว"]
        ],
        prompt: "A moderately alien pig-sized detritivore standing 0.7 meters at the back and 1.4 meters long, low-slung and heavy with its center of gravity kept deliberately close to the ground, built for endurance rather than speed and almost impossible to flip over, its silhouette reading as tortoise-like but its surface unmistakably otherworldly. Its head bears five to seven tiny simple eye-spots scattered asymmetrically across its skull rather than a neat matching pair, each barely registering more than rough light-and-dark contrast, an oversized nasal cavity extraordinarily sensitive to the scent of decaying carcasses, able to detect rotting meat from hundreds of meters away even buried beneath deep leaf litter, and a thick-lipped, toothless scraping mouth used to slowly strip meat from bone and grind tough plant debris at an unhurried pace, since nothing competes with it for the meal. Small vibration-sensing pits in place of ears detect the footsteps of larger animals passing nearby, prompting it to freeze in place rather than flee. Clusters of mushroom-like growths fused with small mineral nodules cover its entire dorsal shell in an uneven, asymmetric spread, faint glowing yellow-green cracks running between them like veins of ore, releasing a bitter, irritating spore cloud the instant it is bitten or disturbed, a defense so effective that most predators learn to avoid it permanently after a single encounter, and beneath its belly lies a secondary gut chamber filled with symbiotic microflora that breaks down rotted tissue and plant matter into nutrients, releasing them back into the soil in its wake as it slowly crawls across the forest floor. Its body is a low, thick, tortoise-and-woodlouse-like frame with an almost fused domed shell of bony plates entirely overgrown by the same fungal-mineral crust covering its skin, tough enough to shrug off a bite from a mid-sized predator almost without injury, and it has no true tail, only a blunt rounded rear end, since it never needs to balance for speed or sudden movement. It has four short, thick legs ending in broad blunt claws used to flip carcasses and dig through leaf litter for buried scraps, moving at an extremely slow pace even at full effort, its legs and feet covered in thick, weather-toughened hide that resists prolonged exposure to bog mud without rotting or infection. Its back and flanks are entirely covered by a thick bracket-fungus-and-mineral crust so fused with its true skin that the two are impossible to tell apart, while its underside is smooth thick hide left bare of fungal growth, its only true vulnerability, protected mainly by staying pressed flat against the ground at all times. An uneven, blotchy pattern of grey, green, and brown mottling covers its shell, closely mimicking the moss and fungus found on real rotting logs, threaded through with faint glowing yellow-green fracture lines like veins of ore running between the fungal nodules, growing more elaborate and convincing with age until the oldest individuals are nearly indistinguishable from the forest floor itself. Its toxic fungal-mineral shell lets it live with almost no natural predators at all, at the cost of a metabolism and musculature so slow that it has virtually no ability to flee anything that proves resistant to the toxin or learns to simply flip it over. Its coloration is a harmonious dull decayed brown-green palette, deepened by near-black damp shadows in the recesses and lifted by pale lichen-grey highlights along the raised fungal growths, with sickly yellow-green worked into the fungal blooms and dull bruised purple-brown in the deeper shell folds, and a faint sickly yellow-green bioluminescent highlight reserved only for the fungal-mineral growths and the fracture lines between them at night, glowing softly as a warning to any predator that gets too close. It lies motionless on the wet forest floor of the Dark Mire, indistinguishable from a moss-covered fallen log among the tangled roots and standing water, utterly still.\n\nPhotorealistic 3D creature render, cinematic film-VFX quality, standing full-body in its natural habitat environment, three-quarter view, shot with a telephoto lens at eye level, shallow depth of field with softly blurred background roots and standing water, volumetric god rays filtering through mist from above, soft naturalistic backlighting that makes the fungal growths and fracture lines glow faintly from within, hyper-detailed micro-texturing on every fungal bump and surface, subsurface scattering, physically-based rendering, muted natural color grading with deep shadows, 1:1 square composition, subject centered and fully visible from head to feet, no readable text."
});
