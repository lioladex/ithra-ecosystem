/* ITH-209-903 — Frostmane (ALIVE) */
creaturesData.push({
        id: "ITH-209-903", name: "Frostmane", status: "ALIVE", era: "ยุคป่าหมอก (Mistwood Era)",
        imageKey: "FROSTMANE", color: "#ffc978",
        category: "สัตว์กินพืชขนหนาแห่งขั้วดาว (Polar grazer, herd herbivore)",
        habitat: "ทวีป Kessara (เขตหนาวเย็น) — The Frost Tundra & Pine Barrens",
        foodChain: "ผู้บริโภคปฐมภูมิหลักของทวีป Kessara — เหยื่อของนักล่าขั้วดาวที่ยังไม่บันทึก",
        danger: "24% (Cautious)", size: "ระดับ 5 — ใหญ่ (เท่าไบสัน)", height: "2.0 ม. ที่ไหล่", weight: "710 กก.",
        desc: "สัตว์กีบขนาดใหญ่ปกคลุมด้วยขนหนาหลายชั้น อาศัยรวมฝูงใหญ่ในทุ่งหิมะของ Kessara ขุดคุ้ยหิมะหาพืชเตี้ยที่ขึ้นใต้น้ำแข็ง ทนความหนาวจัดได้ดีกว่าสัตว์สายพันธุ์ใดในบันทึก ถือเป็นตัวอย่างของสิ่งมีชีวิตที่ปรับตัวรอดจากฤดูหนาวใหญ่ได้สำเร็จ สายเลือดเดียวกับ Korrune แห่งทวีป Verath",
        mutation: { pro: "ขนสองชั้น + โหนกไขมันสะสมพลังงาน + โพรงจมูกอุ่นอากาศ / ทนความหนาวจัดที่สุดในบันทึกทั้งหมด", con: "ระบบร่างกายปรับมาเพื่อกักความร้อนโดยเฉพาะ / ทนความร้อนแม้เพียงเล็กน้อยไม่ได้เลย เสี่ยงลมแดดตายง่ายมาก" },
        weapons: [ "เขาโค้งคู่หน้าแบบพลั่วขุดหิมะ (ใช้ป้องกันตัวได้เมื่อจำเป็น)", "มวลกายมหาศาลชนปะทะ", "อยู่รวมฝูงใหญ่ป้องกันตัวร่วมกัน" ],
        social: "ฝูงใหญ่ 40-120 ตัว เคลื่อนย้ายตามแนวหิมะที่ยังขุดคุ้ยได้ ตัวโตเต็มวัยล้อมตัวอ่อนไว้ตรงกลางฝูงเสมอเมื่อเจอภัย",
        head: [
            ["ดวงตา", "ตาเล็กลึกใต้คิ้วขนหนา", "เบ้าตาลึกและคิ้วขนหนาปกป้องจากลมหิมะและแสงสะท้อนจ้าจากน้ำแข็ง ม่านตาสีเข้มปรับตัวกับแสงจ้าสะท้อนหิมะได้ดี"],
            ["จมูก", "โพรงจมูกภายในซับซ้อนหลายชั้น", "อุ่นอากาศเย็นจัดก่อนถึงปอดผ่านโครงสร้างโพรงจมูกที่ซับซ้อน รูจมูกภายนอกหดแคบได้อัตโนมัติเมื่อเจอพายุหิมะ"],
            ["ปาก", "ฟันกรามแบนกว้างสำหรับบดเล็ม", "ปากกว้างทู่แข็งแรงพอจะขบพืชแข็งใต้น้ำแข็งและบดเปลือกไม้แห้งในฤดูขาดแคลนได้"],
            ["หู", "หูกลมเล็กแนบชิดหัว", "พื้นที่ผิวน้อยที่สุดเท่าที่จะทำได้เพื่อลดการสูญเสียความร้อน ตรงข้ามกับสัตว์เขตร้อนที่มักมีหูใหญ่"],
            ["EXTRA #1", "เขาโค้งคู่หน้าแบบพลั่วผิวกึ่งคริสตัลน้ำแข็ง (Snow-plow Horns)", "เขาแข็งหนาโค้งลงด้านหน้า ผิวเขาเป็นมันวาวกึ่งโปร่งแสงคล้ายน้ำแข็งอัดแน่นมากกว่ากระดูกเขาสัตว์ทั่วไป ใช้ไถและพลั่วหิมะหนาออกเพื่อเข้าถึงพืชเตี้ยที่ขึ้นใต้น้ำแข็ง เป็นเครื่องมือหากินหลักมากกว่าอาวุธ"],
            ["EXTRA #2", "โหนกไขมันสะสมพลังงานที่ไหล่", "โหนกไขมันหนาสะสมพลังงานสำรอง ใช้ประทังชีวิตผ่านพายุหิมะยาวนานหรือคืนขั้วโลกที่มืดต่อเนื่องได้โดยแทบไม่ต้องกินอะไรเลย"]
        ],
        body: [
            ["BODY FRAME", "โครงร่างหนาล่ำแบบไบสันผสมมัสก็อกซ์", "ไหล่สูงล่ำ ลำตัวลึกหนา อัตราส่วนพื้นที่ผิวต่อปริมาตรต่ำที่สุดเท่าที่จะเป็นไปได้เพื่อรักษาความร้อนในร่างกาย"],
            ["SPINE", "แผงขนคอ-ไหล่หนาสูง (Frostmane)", "ขนยาวหนาที่สุดของร่างกายรวมตัวเป็นแผงคล้ายแผงคอสิงโตรอบคอถึงไหล่ ที่มาของชื่อสายพันธุ์ ทำหน้าที่กันลมและใช้แสดงตัวตนในฝูง"],
            ["TAIL", "หางสั้นทู่แนบชิดลำตัว", "Utility — สั้นและหนาแน่นเพื่อลดพื้นที่ผิวสูญเสียความร้อน ไม่มีประโยชน์ใช้สอยอื่นนอกจากไล่แมลง"]
        ],
        limbs: [
            ["#1", "ขา", "ขาหน้า", "สั้นหนาแข็งแรง ปลายกีบกว้างแผ่คล้ายรองเท้าหิมะ กระจายน้ำหนักไม่ให้จมหิมะลึก ขนยาวปกคลุมลงมาถึงกีบ"],
            ["#2", "ขา", "ขาหลัง", "โครงเดียวกับขาหน้า ให้แรงยันเวลาไถหิมะและยืนต้านลมพายุแรงเป็นเวลานาน"]
        ],
        skin: [
            ["ลำตัวทั่วไป", "ขนใต้แน่นหนาสองชั้น + ขนยาวคลุมทับ ชั้นในดักอากาศอุ่นแน่นหนา ชั้นนอกยาวหยาบสะบัดหิมะและน้ำแข็งออกได้เอง"],
            ["คอ/ไหล่", "แผงขนยาวหนาที่สุด (Mane) หนาและยาวเป็นพิเศษ ที่มาของชื่อ Frostmane"],
            ["ใต้ท้อง/ขาส่วนล่าง", "ขนสั้นหนาแน่นเป็นพิเศษ ป้องกันความเย็นจากการสัมผัสหิมะโดยตรงตลอดเวลา"]
        ],
        pattern: "แทบไม่มีลวดลายเด่นชัด สีขนเกือบขาวครีมกลืนกับหิมะทั้งทุ่ง มีเพียงปลายขนยาวสีเข้มแซมเล็กน้อยให้ผิวดูเป็นมันประกายน้ำแข็งเมื่อต้องแสง",
        pal: [["สีหลัก", "#e8e2d4"], ["เงา", "#6a7480"], ["แสง", "#f8f6f0"], ["เสริม A", "#a8c4d4"], ["เสริม B", "#5a4a3a"]],
        hl: ["#ffc978", "อำพันทองอุ่นที่ดวงตา"],
        hlAt: "ดวงตาสีอำพันทองอุ่นตัดกับขนขาวทั้งตัว · เกล็ดน้ำแข็งเกาะปลายขนแผงคอเมื่อต้องแสง",
        mutationFull: {
            proTitle: "ขนสองชั้น + โหนกไขมัน + โพรงจมูกอุ่นอากาศ / การทนความหนาวสุดขั้ว",
            proDesc: "ระบบกักเก็บความร้อนสามชั้น (ขนสองชั้น, โหนกไขมันสะสมพลังงาน, โพรงจมูกอุ่นอากาศก่อนถึงปอด) ทำงานร่วมกันจนทนความหนาวจัดที่สุดในบันทึกทั้งหมดของ Ithra ได้ เป็นตัวอย่างสิ่งมีชีวิตที่ปรับตัวรอดจากฤดูหนาวใหญ่ได้สำเร็จ",
            conTitle: "การควบคุมอุณหภูมิ / ความทนทานต่อความร้อน",
            conDesc: "ระบบร่างกายทั้งหมดถูกออกแบบมาเพื่อกักความร้อนไว้โดยเฉพาะ ไม่มีกลไกระบายความร้อนที่มีประสิทธิภาพเลย แม้อากาศอุ่นขึ้นเพียงเล็กน้อยก็เสี่ยงเป็นลมแดดถึงตายได้ง่ายมาก ทำให้ไม่มีทางอพยพออกจากเขตหนาวเย็นของ Kessara ได้เลยตลอดชีวิต"
        },
        dangerDetail: {
            raw: "46 / 190", percent: 24, tier: "พอระวังตัวได้ (Cautious)",
            factors: ["เขาโค้งคู่หน้าแบบพลั่ว (+7)", "มวลกายมหาศาลชนปะทะ (+8)", "อยู่รวมฝูงป้องกันตัวร่วมกัน (+5)"],
            note: "โดยปกติไม่ก้าวร้าวและเลี่ยงการปะทะเสมอ อันตรายเกิดขึ้นเฉพาะเมื่อฝูงตื่นตระหนกพร้อมกันจนวิ่งเหยียบทุกอย่างขวางหน้า หรือตัวผู้ป้องกันฝูงจากภัยคุกคามโดยตรงเท่านั้น"
        },
        combat: [
            ["ล้อมป้องกันฝูง (Herd Wall)", "เมื่อเจอภัย ตัวโตเต็มวัยจะล้อมวงหันเขาออกด้านนอกป้องกันตัวอ่อนที่อยู่ตรงกลางฝูงไว้เสมอ"],
            ["พุ่งชนป้องกันตัว (Defensive Charge)", "หากถูกรุกล้ำโดยตรง จะพุ่งชนด้วยมวลกายและเขาพลั่วเพื่อผลักไสภัยคุกคามออกไปมากกว่าจะฆ่า"]
        ],
        notes: [
            ["warn", "<strong>เชื่อมโยงกับ Vorthak</strong>. Frostmane คือภาพตรงข้ามของ Vorthak: สัตว์เล็กมีขนหนาที่ปรับตัวรอดฤดูหนาวใหญ่ได้ ขณะที่ Apex Predator ตัวมหึมาไร้ขนกลับสูญพันธุ์ไป"],
            ["", "<strong>สายเลือดที่แยกทางกัน</strong>. เชื่อกันว่า Frostmane และ <em style='color:var(--accent-default)'>Korrune</em> สืบเชื้อสายมาจากบรรพบุรุษกลุ่มเดียวกันที่รอดพ้นฤดูหนาวใหญ่ในยุคหมุนเวียน แต่วิวัฒนาการแยกทางกันอย่างสิ้นเชิงเมื่อกลุ่มหนึ่งอยู่ต่อที่ขั้วโลกเย็นจัด อีกกลุ่มอพยพกลับสู่ป่าหมอกอบอุ่นชื้นแฉะ"],
            ["", "ลักษณะที่ตั้งใจไว้เบื้องต้น: ขนหนามาก ทนหนาวสุดขั้ว อยู่รวมฝูงใหญ่ ทั้งหมดนี้ออกแบบเป็นระบบ Slot เต็มรูปแบบแล้ว"]
        ],
        prompt: "A large alien polar herbivore standing 2.0 meters at the shoulder, resembling a hybrid of a bison and a muskox, built with an extremely low surface-area-to-volume ratio to conserve body heat above all else. Its head bears small deep-set eyes shielded by heavy brow fur against wind and blinding snow-glare, dark irises well adapted to the constant bright reflection off ice, an internally complex, multi-chambered nasal cavity that warms freezing air before it reaches the lungs, with external nostrils that narrow automatically in a blizzard, and a wide, tough-lipped mouth with broad flat grinding teeth built to crop tough tundra plants and grind dry bark during lean seasons. Its ears are small, rounded, and held tight against its skull, minimizing exposed surface area to reduce heat loss, the opposite adaptation of a warm-climate animal's large ears. A pair of thick, forward-curving snow-plow horns rise from its brow, their surface glossy and faintly translucent like compacted ice rather than ordinary keratin, used mainly to shovel through deep snow crust to reach buried vegetation and only secondarily as a weapon, and a thick fat hump sits over its shoulders, storing enough energy reserves to survive long blizzards or extended polar darkness with barely any feeding at all. Its body is a heavily built, bison-and-muskox-like frame with high thick shoulders and a deep torso, and a tall thick mane of fur grows longest and densest from its neck to its shoulders, giving the species its name, serving as both a windbreak and a visual display of health and status within the herd. Its tail is short, blunt, and held close against its body, its size minimized purely to reduce heat loss, with no function beyond swatting insects. It has two pairs of short, powerfully built legs ending in broad splayed hooves that spread its weight like snowshoes to avoid sinking into deep snow, thick fur running all the way down to the hooves themselves. Its entire body is covered in a dense two-layer coat, a tightly packed woolly undercoat trapping warm air close to the skin, topped by a long coarse outer guard-hair layer that sheds snow and ice on its own, thickest and longest as the neck-and-shoulder mane, while its belly and lower legs carry especially dense short fur for constant contact with snow. Its coat shows almost no distinct pattern at all, a near-white cream color blending seamlessly with the surrounding snowfields, broken only by slightly darker guard-hair tips that catch the light with an icy sheen. Its triple-layer heat-retention system of double coat, fat hump, and warming nasal passages lets it withstand the most extreme cold ever recorded on Ithra, at the cost of having no meaningful way to shed heat at all — even a mild rise in temperature risks fatal heatstroke, permanently trapping it within Kessara's frozen zones. Its coloration is a harmonious pale frost-cream palette, deepened by cool blue-grey shadows in the recesses and lifted by near-white highlights along its raised mane, with pale icy blue worked into the shadowed underside of its coat and a dull brown undercoat visible in worn patches, and a warm glowing amber-gold highlight reserved only for its eyes, standing out against the otherwise all-white coat. It stands within a large herd on the wind-scoured snowfields of the Kessara tundra, mane raised against the wind, horns lowered to plow through a drift, breath visible in the freezing air.\n\nPhotorealistic 3D creature render, cinematic film-VFX quality, standing full-body in its natural habitat environment, three-quarter view, shot with a telephoto lens at eye level, shallow depth of field with softly blurred background snowfield and herd members, volumetric god rays cutting through blowing snow, soft naturalistic backlighting that makes its breath-mist and frosted mane glow from within, hyper-detailed micro-texturing on every hair and surface, subsurface scattering, physically-based rendering, muted natural color grading with deep shadows, 1:1 square composition, subject centered and fully visible from head to feet, no readable text."
});
