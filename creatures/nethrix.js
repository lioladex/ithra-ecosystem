/* ITH-222-518 — Nethrix (ALIVE) */
creaturesData.push({
        id: "ITH-222-518", name: "Nethrix", nickname: "เจ้าลายล่อ", status: "ALIVE", era: "ยุคป่าหมอก (Mistwood Era)",
        imageKey: "NETHRIX", color: "#eab308",
        category: "สัตว์กินเนื้อ · นักล่าซุ่มโจมตีที่ใช้ลายจุดลวงล่อเหยื่อเข้าหา (Aggressive-mimicry ambush predator)",
        habitat: "พื้นป่าใต้ชั้นซากใบไม้ทับถมหนาของ Verath หมอบนิ่งอยู่จุดเดียวได้นานหลายวันรอเหยื่อเข้าใกล้เอง ไม่ย้ายที่ซุ่มบ่อย",
        foodChain: "ผู้ล่าซุ่มโจมตีระดับกลาง-สูง — ล่าสัตว์ขนาดเล็กถึงกลางที่หลงเข้ามาใกล้ลายล่อ แทบไม่ไล่ล่าเชิงรุกเองเลย",
        danger: "59% (Dangerous)", size: "ระดับ 3 — กลาง (ลำตัวเท่าหมาป่าตัวใหญ่ แต่ขายาวกว่ามาก)",
        height: "ลำตัวยาว 0.85 ม. (ไม่รวมขา) · ช่วงขากว้างสุดเมื่อกางเต็มที่ 2.4 ม.", weight: "55 กก.",
        desc: "นักล่าซุ่มโจมตีที่ไม่เคยไล่ล่าเหยื่อเองเลยแม้แต่ครั้งเดียว หมอบนิ่งอยู่ใต้ซากใบไม้ทับถมนานหลายวันจนกลืนเป็นเนื้อเดียวกับพื้นป่า เผยให้เห็นแค่ลายจุดสีสันสดใสข้างลำตัวที่ไม่หยุดกะพริบเรียกความสนใจ เหยื่อที่หลงเข้ามาดูให้ใกล้จะไม่มีโอกาสรู้ตัวอีกเลยว่ากำลังเดินเข้าหาปากของสิ่งที่มันคิดว่าเป็นแค่ก้อนใบไม้กองหนึ่ง กรามคู่ใหญ่ข้างปากและเขี้ยวแหลมคมด้านในคือสิ่งสุดท้ายที่เหยื่อส่วนใหญ่ได้เห็น",
        mutation: { pro: "ลายจุดสีสันสดใสข้างลำตัวลวงล่อเหยื่อให้เดินเข้าหาเอง / ไม่ต้องออกแรงไล่ล่าเลย ประหยัดพลังงานมหาศาลเทียบกับนักล่าไล่ล่าทั่วไป", con: "ต้องหมอบนิ่งสนิทเป็นเวลานานมากถึงจะได้ผล / เสียเปรียบทันทีถ้าเหยื่อไม่หลงกลหรือตัวใหญ่เกินกว่าจะจับไหว เพราะเคลื่อนที่ไล่ล่าระยะไกลไม่เก่งเลย" },
        weapons: [ "กรามคู่ขนาดใหญ่ข้างปาก (Crushing Mandibles)", "เขี้ยวแหลมคมฉีดพิษ (Venomous Fangs)", "เหล็กในปลายหางห่อหุ้มด้วยขนสีสัน (Concealed Tail Stinger)", "แขนคู่หน้าจับยึดเหยื่อ (Raptorial Forelimbs)" ],
        social: "อยู่ตัวเดียวตลอดชีวิต หวงพื้นที่ซุ่มของตัวเองอย่างเข้มงวด ไม่ยอมแบ่งจุดซุ่มกับตัวอื่นแม้เป็นคู่ผสมพันธุ์ ต้องส่งสัญญาณจากระยะไกลก่อนเข้าใกล้กันได้",
        head: [
            ["ดวงตา", "ตาสี่ดวงสองขนาด (Twin-Pair Eyes)", "คู่หน้าขนาดใหญ่วางตรงกลางหันไปทางเดียวกัน ใช้กะระยะเหยื่อที่กำลังเข้าใกล้ลายล่อได้แม่นยำ คู่หลังเล็กกว่าอยู่ด้านข้างหัว มองครอบคลุมมุมกว้างรอบตัวไว้จับความเคลื่อนไหวแม้จะจ้องอยู่ที่เหยื่อตรงหน้า ทั้งสี่ดวงแทบไม่กะพริบเลยตลอดช่วงที่หมอบนิ่งรอ"],
            ["กราม", "กรามคู่ใหญ่ยื่นข้างปาก (Paired Crushing Mandibles)", "แผ่นกรามแข็งหนาโค้งงอนยื่นออกมาทั้งสองข้างของปาก ใช้หนีบกดเหยื่อไว้กับพื้นทันทีที่เข้าถึงระยะ แรงหนีบมากพอจะบดเปลือกแข็งของเหยื่อบางชนิดได้โดยตรง"],
            ["เขี้ยว", "เขี้ยวแหลมคมฉีดพิษ (Venomous Fangs)", "ซ่อนอยู่ด้านในกรามคู่ใหญ่ ยื่นแทงลงทันทีที่เหยื่อถูกหนีบไว้แน่น ฉีดพิษที่ทำให้ระบบประสาทเหยื่อเป็นอัมพาตอย่างรวดเร็ว ไม่ต้องใช้แรงต่อสู้ยืดเยื้อ"],
            ["EXTRA #1", "ขนรับแรงสั่นสะเทือนรอบหัว (Vibration-sensing Bristles)", "กระจุกขนแข็งเล็กละเอียดรอบปากและหัว ไวต่อแรงสั่นสะเทือนบนพื้นและอากาศรอบตัวมากเป็นพิเศษ ทำให้รู้จังหวะที่เหยื่อเข้าใกล้พอดีได้โดยไม่ต้องพึ่งสายตาเลยแม้แต่น้อย เพราะช่วงหมอบนิ่งสุดขีดแทบไม่ขยับหัวเลย"]
        ],
        body: [
            ["BODY FRAME", "ลำตัวป้อมกลมหมอบต่ำ", "ส่วนอกแคบด้านหน้าต่อกับลำตัวป้อมกลมขนาดใหญ่ด้านหลังที่หมอบแนบพื้นได้สนิท ให้ทรงกลมมนกลืนไปกับกองใบไม้รอบตัวเมื่อหมอบนิ่ง"],
            ["SPINE / เกราะหลัง", "แผ่นเกราะเรียงจากกลางหลังถึงปลายก้น (Dorsal Armor Plates)", "แผ่นเกราะแข็งหนาเรียงซ้อนกันเป็นแนวยาวตั้งแต่กลางหลังไปจนสุดปลายก้น ปกป้องอวัยวะภายในจากการถูกโจมตีตอบโต้ขณะหนีบเหยื่อไว้แน่น"],
            ["TAIL / ปลายหาง", "เหล็กในซ่อนใต้ขนสีสัน (Fur-wrapped Stinger)", "ปลายก้นมีเหล็กในโค้งแหลมซ่อนอยู่ใต้พู่ขนสีสันสดใสที่ปกคลุมมิดจนมองไม่เห็นเหล็กในเลยตามปกติ พลิกยื่นออกมาแทงเฉพาะตอนต้องใช้เป็นทางเลือกสำรองเมื่อเหยื่อดิ้นหลุดจากกรามหรือเมื่อถูกสัตว์อื่นเข้าใกล้จุดซุ่มโดยไม่ทันตั้งตัว"]
        ],
        limbs: [
            ["#1", "แขน", "แขนคู่หน้า", "สั้นกว่าขาเดินมาก ปลายมีขอเกี่ยวแข็งไว้จับยึดเหยื่อกดเข้าหาปากทันทีที่กรามหนีบติด ไม่ใช้เดินหรือรับน้ำหนักตัวเลย"],
            ["#2", "ขา", "ขาเดินหกข้าง", "สามคู่เรียวยาวยื่นกว้างออกทั้งสองข้างลำตัว ปลายขาแหลมเกาะพื้นและซากใบไม้ได้มั่นคงแม้ในท่าหมอบนิ่งนานหลายวันโดยไม่ต้องขยับเลย"]
        ],
        skin: [
            ["ลำตัว/ขา", "ขนแข็งสั้นสีน้ำตาลเทาหม่นลายด่าง กลืนกับซากใบไม้ทับถมจนแยกไม่ออกเมื่อหมอบนิ่ง"],
            ["แผ่นเกราะหลัง-ก้น", "ผิวแข็งหนาสีเข้มเกือบดำ เรียงเป็นแผ่นซ้อนทับกันแน่น ต่างจากขนนุ่มส่วนอื่นของลำตัวชัดเจน"],
            ["ข้างลำตัว (แถบลายล่อ)", "ผิวเรียบเนียนกว่าจุดอื่น เผยลายจุดสีสันสดใสตัดกับขนสีหม่นรอบข้างอย่างจงใจ เป็นจุดเดียวบนตัวที่ไม่ได้ออกแบบมาเพื่อพราง"],
            ["พู่ขนปลายหาง", "ขนยาวฟูสีสันสดใสกว่าลายล่อข้างลำตัวอีก ห่อหุ้มเหล็กในไว้มิดจนดูเหมือนเป็นเพียงเครื่องประดับไม่มีอันตราย"]
        ],
        pattern: "ลำตัวหลักส่วนใหญ่เป็นลายพรางสีน้ำตาลเทาหม่นด่างไม่สม่ำเสมอ กลืนกับพื้นป่าและซากใบไม้ทับถมจนแทบแยกไม่ออก ยกเว้นแถบข้างลำตัวทั้งสองข้างที่มีลายจุดสีสันสดใสเรียงเป็นกลุ่มคล้ายกลุ่มผลไม้สุกหรือไข่ฟองเล็กที่เรืองแวววาวอ่อนๆ เมื่อโดนแสงส่องผ่านหมอก จงใจขัดกับลายพรางส่วนอื่นของตัวอย่างสิ้นเชิง เพื่อดึงความสนใจของเหยื่อให้มองมาที่จุดนั้นแทนที่จะสังเกตเห็นรูปทรงลำตัวทั้งหมด",
        pal: [["สีหลัก", "#57534e"], ["เงา", "#1c1917"], ["แสง", "#a8a29e"], ["เสริม A (ลายล่อ)", "#eab308"], ["เสริม B (พู่หาง)", "#f472b6"]],
        hl: ["#eab308", "เหลืองอำพันสดใส แต้มเฉพาะที่ลายจุดข้างลำตัวและพู่ขนปลายหาง"],
        hlAt: "ตาคู่หน้าขนาดใหญ่ที่จ้องนิ่งไม่กะพริบขณะรอเหยื่อ · ลายจุดสีเหลืองอำพันสดใสข้างลำตัวที่ดูเหมือนกลุ่มผลไม้สุกหรือไข่ฟองเล็ก · กรามคู่ใหญ่โค้งงอนข้างปาก · พู่ขนสีสันสดที่ปลายหางซ่อนเหล็กในไว้ข้างใน",
        mutationFull: {
            proTitle: "ลายจุดลวงล่อเหยื่อให้เข้าใกล้เอง / ประหยัดพลังงานมหาศาล",
            proDesc: "แทนที่จะออกแรงไล่ล่าแบบนักล่าทั่วไป Nethrix ใช้ลายจุดสีสันสดใสข้างลำตัวหลอกล่อให้เหยื่อเดินเข้าหาปากเองโดยไม่รู้ตัว ตราบใดที่หมอบนิ่งสนิทพอ แทบไม่ต้องใช้พลังงานเลยตลอดการล่าทั้งกระบวนการ",
            conTitle: "ต้องหมอบนิ่งนานมาก / ไล่ล่าระยะไกลไม่เก่งเลย",
            conDesc: "กลยุทธ์ทั้งหมดพังทันทีถ้าเหยื่อไม่สนใจลายล่อหรือสังเกตเห็นความผิดปกติของกองใบไม้ก่อน เพราะร่างกายที่หมอบต่ำป้อมกลมไม่ได้ถูกสร้างมาเพื่อวิ่งไล่ระยะไกลเลยแม้แต่น้อย พลาดโอกาสแล้วต้องรอวันใหม่เท่านั้น"
        },
        dangerDetail: {
            raw: "118 / 200", percent: 59, tier: "อันตราย (Dangerous)",
            factors: ["พิษจากเขี้ยวทำให้ระบบประสาทเหยื่อเป็นอัมพาตอย่างรวดเร็ว (+10)", "เหล็กในสำรองปลายหางเผื่อกรณีเหยื่อดิ้นหลุด (+7)", "กรามคู่ใหญ่บดขยี้เปลือกแข็งได้โดยตรง (+6)", "ลายจุดลวงตาทำให้เหยื่อเข้าใกล้เองโดยไม่รู้ตัว (+5)"],
            note: "คิดจากสถานการณ์ที่เหยื่อเข้าใกล้ลายล่อจนอยู่ในระยะกรามแล้วเท่านั้น หากเหยื่อไม่สนใจลายหรือหลบเลี่ยงจุดซุ่มได้ทัน ความอันตรายจริงจะลดฮวบทันที เพราะแทบไม่ไล่ล่าเชิงรุกเองเลย"
        },
        combat: [
            ["ซุ่มนิ่งกะพริบลายล่อ", "หมอบนิ่งสนิทใต้ซากใบไม้นานหลายวัน ปล่อยให้เห็นแค่ลายจุดสีสันข้างลำตัว รอจนเหยื่อเดินเข้ามาในระยะกรามเองโดยไม่ต้องขยับตัวแม้แต่นิดเดียว"],
            ["หนีบ-ฉีดพิษ", "กรามคู่ใหญ่หนีบกดเหยื่อไว้กับพื้นทันทีที่เข้าถึงระยะ เขี้ยวแทงตามหลังทันควันฉีดพิษให้เป็นอัมพาต จบภายในไม่กี่วินาทีโดยแทบไม่ต้องออกแรงสู้"],
            ["เหล็กในสำรอง", "ใช้เฉพาะเมื่อเหยื่อดิ้นหลุดจากกรามหรือถูกโจมตีตอบโต้กะทันหัน พลิกปลายหางแทงเหล็กในที่ซ่อนอยู่ใต้พู่ขนสีสันออกมาเป็นทางเลือกสุดท้าย"]
        ],
        abilities: [
            {
                name: "การลวงล่อด้วยลายจุด", type: "Hunting Tactic — กลยุทธ์การล่า",
                desc: "ลายจุดสีสันสดใสข้างลำตัวเรียงตัวคล้ายกลุ่มผลไม้สุกหรือไข่ฟองเล็ก ดึงดูดเหยื่อกินพืช/แมลงให้เดินเข้ามาดูใกล้ๆ เอง ยิ่งหมอบนิ่งได้นานเท่าไหร่ โอกาสที่เหยื่อจะเข้าใกล้จนถึงระยะกรามก็ยิ่งสูงขึ้นเท่านั้น",
                origin: "วิวัฒนาการมาจากแรงกดดันที่ต้องแข่งกับนักล่าไล่ล่าความเร็วสูงในป่าหมอกอย่างเจ้าตัวสี่ขา — ร่างที่ป้อมกลมหมอบต่ำไม่มีทางไล่ทันเหยื่อเร็วได้เลย จึงเลือกทางตรงข้ามคือทำให้เหยื่อเดินมาหาเองแทน"
            },
            {
                name: "การหมอบนิ่งระยะยาว", type: "Concealment — การพรางตัว",
                desc: "หมอบนิ่งสนิทอยู่จุดเดียวได้นานหลายวันติดต่อกันโดยไม่ขยับแม้แต่ขาข้างเดียว อัตราการเผาผลาญลดต่ำลงมากระหว่างรอ ทำให้ประหยัดพลังงานพอจะรอเหยื่อได้นานกว่านักล่าไล่ล่าทั่วไปหลายเท่าตัว",
                origin: "ผลพวงตรงจากกลยุทธ์ลวงล่อ — ถ้าขยับตัวแม้แต่นิดเดียวระหว่างรอ ภาพลวงตาที่สร้างไว้จะพังทันที ร่างกายจึงต้องพัฒนาความสามารถอดทนนิ่งสุดขีดควบคู่กันไปด้วย"
            },
            {
                name: "การรับรู้แรงสั่นสะเทือนรอบทิศ", type: "Sensory — ประสาทสัมผัส",
                desc: "ขนแข็งไวสัมผัสรอบหัวจับแรงสั่นสะเทือนบนพื้นและอากาศได้แม่นยำ รู้จังหวะที่เหยื่อเข้าใกล้ระยะกรามได้พอดีโดยไม่ต้องขยับหัวหรือตาเลยแม้แต่น้อย",
                origin: "ชดเชยข้อจำกัดของการหมอบนิ่งสุดขีด — ตาที่จ้องนิ่งอยู่จุดเดียวมองไม่เห็นเหยื่อที่เข้ามาจากด้านข้างหรือด้านหลัง ขนรับแรงสั่นสะเทือนจึงกลายเป็นประสาทสัมผัสหลักที่พึ่งพาได้ตลอดเวลาแทน"
            }
        ],
        notes: [
            ["", "<strong>ภาพลวงตาที่รอดจากการตรวจสอบใกล้</strong>: สัตว์กินพืช/แมลงหลายชนิดในป่าหมอกเดินเข้าใกล้กองใบไม้ที่มีจุดสีสันแบบนี้โดยไม่ลังเลเลย เพราะไม่มีสัญญาณอันตรายอื่นใดให้สังเกตนอกจากความนิ่งที่ดูเหมือนเป็นเรื่องปกติของกองใบไม้ทั่วไป"],
            ["", "<strong>จุดซุ่มที่ไม่เคยเปลี่ยน</strong>: นักวิจัยภาคสนามที่เคยพบจุดซุ่มของ Nethrix ตัวหนึ่งสามารถกลับมาพบตัวเดิมที่จุดเดิมได้อีกในอีกหลายสัปดาห์ถัดมา ตราบใดที่ยังไม่เคยจับเหยื่อสำเร็จจนต้องย้ายที่เพราะกลิ่นซากเหยื่อเก่าเริ่มรบกวน"]
        ],
        prompt: "An alien ambush predator about 0.85 meters long in the body with a leg span up to 2.4 meters, its squat, rounded, low-slung body pressed flat against the forest floor, motionless and half-buried under a mound of leaf litter it has not moved from in days. Its head carries two pairs of eyes of different sizes, a large forward-facing pair set in the center for judging the distance of approaching prey and a smaller lateral pair on either side for peripheral motion detection, all four nearly unblinking while it waits, a pair of large curved crushing mandibles flanking its mouth, thick and strong enough to crack a hard-shelled prey's exterior directly, sharp venomous fangs hidden just inside the mandibles ready to strike the instant prey is pinned, and a fine bristling ring of vibration-sensing hairs around its mouth and head that lets it feel an approaching footstep through the ground and air without needing to move its eyes at all. Its body is a compact, low, rounded frame built for ambush stillness rather than pursuit, with a row of thick dark armor plates running from the middle of its back down to the tip of its rear, protecting its vital organs while it grips struggling prey, and a curved stinger hidden at the very tip of its rear beneath a plume of vividly colored fur, flipped out to strike only as a backup when prey breaks free of its mandibles or something else closes in unnoticed. It has 2 pairs of limbs: a short pair of hooked raptorial forearms used only to grip prey and drag it toward its mouth once the mandibles clamp down, never for walking, and six long slender walking legs in three matched pairs splayed wide to either side of its body, anchoring firmly into the leaf litter and holding a motionless stance for days without shifting at all. Its body and legs are covered in short coarse mottled brown-grey fur that blends seamlessly into forest leaf litter, its back-to-tail armor plating a darker, near-black, hard-shelled texture distinct from the softer fur elsewhere, while the fur along both flanks turns smooth and unusually vivid, and the fur plume hiding its tail stinger is the most vividly colored of all, looking almost ornamental rather than dangerous. Its body is otherwise an irregular mottled brown-grey camouflage pattern blending into forest debris, broken deliberately by a patch of bright amber-yellow spots along each flank clustered to resemble ripe fruit or a cluster of small glowing eggs, catching a faint sheen when light filters through the mist, standing in stark deliberate contrast to the camouflage covering the rest of its body, drawing a prey animal's eye there instead of to its true outline. Its lure-spot deception lets it hunt while expending almost no energy at all, at the cost of being poorly built for any real pursuit once prey fails to take the bait or notices something is wrong. Its coloration is a harmonious muted brown-grey palette, deepened by near-black shadows in the recesses of its armor plating and lifted by pale stone-grey highlights along its raised legs, with warm umber tones worked into its mottled flanks and rose-pink accents in its tail plume, and a glowing amber-yellow highlight reserved only for its wide unblinking forward eyes, the fruit-like lure spots along its flanks, its curved crushing mandibles, and the vividly colored fur plume hiding the stinger at its tail. It lies motionless beneath a mound of decaying leaves on the forest floor of the Verath mistwood, its lure spots the only part of it visible in the dim understory light, patient and unmoving, waiting for something curious to come close enough to see.\n\nPhotorealistic 3D creature render, cinematic film-VFX quality, standing full-body in its natural habitat environment, three-quarter view, shot with a telephoto lens at eye level, shallow depth of field with softly blurred background leaf litter and forest floor, volumetric god rays filtering through mist from above, soft naturalistic backlighting that makes the amber lure spots and tail plume glow from within, crisp rim lighting along its silhouette, hyper-sharp micro-detail texturing on every hair and surface, subsurface scattering, physically-based rendering, muted natural color grading with deep shadows, 1:1 square composition, subject centered and fully visible from head to feet, no readable text."
});
