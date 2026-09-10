/* ITH-220-593 — Murrow — ambient dread asset: มุมป่าหมอกที่ลึกลับ น่าขนลุก */
creaturesData.push({
        id: "ITH-220-593", name: "Murrow", nickname: "เจ้าเงาที่นิ่งรอ", status: "ALIVE", era: "ยุคป่าหมอก (Mistwood Era)",
        imageKey: "MURROW", color: "#d8cdb8",
        category: "สัตว์กินซาก/ผู้ย่อยสลาย · สิ่งมีชีวิตนิ่งรอความตายด้วยการดักกลิ่นล่วงหน้า (Sessile-drifting death-scent scavenger)",
        habitat: "The Dark Mire และรอยต่อพื้นป่า-หนองบึงที่มีรากไม้ยักษ์หนาแน่น (Verath, Forest Floor)",
        foodChain: "ผู้ย่อยสลายที่ไม่ล่าและไม่ตามรอยสิ่งมีชีวิตเลย — ดูดซึมสารอาหารจากซากที่เพิ่งเริ่มเน่าเปื่อยเท่านั้น แข่งขันแย่งซากโดยตรงกับ Dunkrell และ Palegrim",
        danger: "5% (Harmless, but deeply unsettling)", size: "ระดับ 4 — สูงเพรียวเท่าคนโตส่วนใหญ่", height: "1.7-2.1 ม.", weight: "45-60 กก. (เบามากเทียบกับความสูง)",
        desc: "สิ่งมีชีวิตทรงสูงเพรียวผิวคล้ายเปลือกไม้แห้งที่มักยืนนิ่งเป็นกลุ่ม 3-8 ตัวจนแยกไม่ออกจากต้นไม้ตายจริงในสายตาแรก ไม่ล่า ไม่ไล่ตามสิ่งใด แต่รับรู้สารเคมีจางๆ ที่ร่างกายบาดเจ็บหรือกำลังจะตายปล่อยออกมาได้จากระยะไกลมาก แล้วเคลื่อนตัวเข้าหาแหล่งกลิ่นนั้นช้าจนตาเปล่าจับไม่ได้ — ช้าพอที่นักเดินป่าที่ผ่านจุดเดิมคนละวันจะสาบานได้ว่า 'ต้นไม้ตาย' กลุ่มนั้นขยับตำแหน่งไปเองระหว่างคืน เมื่อมีอะไรตายลงใกล้ๆ ในที่สุด กลุ่มมันก็มักยืนรายล้อมพร้อมอยู่แล้วพอดี บางครั้งเผยรอยแยกคล้ายเปลือกตาบนลำตัวที่เปิดออกเต็มที่เพื่อจับความเคลื่อนไหวเมื่อมั่นใจว่าไม่มีใครสังเกตอยู่ แล้วปิดสนิททันทีที่รู้สึกว่าถูกจ้องกลับ — ไม่มีใครเคยจับภาพมันขยับได้จริงเลยสักครั้ง มีแต่คำบอกเล่าว่า 'มันกะพริบตา'",
        mutation: { pro: "กลยุทธ์กินอาหารที่ปลอดภัยที่สุดในป่าหมอก แทบไม่มีผู้ล่าชนิดใดสนใจสิ่งที่ดูเหมือนไม้ตายเลย และไม่ต้องเสี่ยงเผชิญหน้ากับสิ่งมีชีวิตใดเลยตลอดชีวิต", con: "เคลื่อนที่ช้าจนแทบเป็นศูนย์ — ถ้าตัดสินใจเคลื่อนเข้าหากลิ่นที่สุดท้ายไม่ได้นำไปสู่การตาย (บาดแผลหาย/สัตว์หนีรอดไปได้) จะต้องใช้เวลานานหลายเดือนกว่าจะเคลื่อนตัวไปยังแหล่งกลิ่นใหม่ที่ดีกว่า สูญเสียโอกาสไปมหาศาลจากการเดาผิดเพียงครั้งเดียว" },
        weapons: [ "ไม่มีอาวุธ", "ไม่มีกลไกป้องกันตัวเลยนอกจากความนิ่งสนิทที่ทำให้ไม่มีใครสังเกตเห็นตั้งแต่แรก", "รากยึดใต้ลำตัวยึดพื้นแน่นมากจนแทบดึงออกไม่ได้หากพยายามลาก" ],
        social: "รวมกลุ่ม 3-8 ตัวยืนนิ่งใกล้กันเป็น 'แนวป่า' เดียวกันเสมอ ไม่มีปฏิสัมพันธ์ระหว่างกันที่สังเกตเห็นได้เลยนอกจากทิศทางการเคลื่อนตัวเข้าหากลิ่นเดียวกันอย่างพร้อมเพรียง เหมือนต่างตัวต่างตัดสินใจเองแต่บังเอิญตรงกันเสมอ",
        head: [
            ["ดวงตา", "ไม่มีตาแบบสัตว์ทั่วไป", "มีแต่รอยแยกคล้ายเปลือกตาเดียวกลางลำตัวส่วนบน ปิดสนิทแนบเนียนกับผิวเปลือกไม้จนมองไม่ออกเกือบตลอดเวลา เปิดออกเผยเยื่อรับแสงสีซีดข้างในเฉพาะตอนมั่นใจว่าไม่มีใครสังเกต"],
            ["จมูก", "ไม่มีจมูกภายนอก", "รับสารเคมีที่บ่งบอกบาดแผล/ความตายผ่านรูพรุนเล็กจิ๋วนับพันรูทั่วผิวลำตัวแทน ไวมากจนตรวจจับกลิ่นเลือดจางๆ ได้จากระยะหลายร้อยเมตร"],
            ["ปาก", "ไม่มีปากภายนอกที่ใช้กัด/เคี้ยว", "ดูดซึมสารอาหารที่ละลายแล้วจากซากที่เน่าเปื่อยผ่านรากที่ยึดพื้นดินโดยตรง ไม่เคยสัมผัสซากด้วยส่วนบนของลำตัวเลย"],
            ["หู", "ไม่มีหูภายนอก", "รับแรงสั่นสะเทือนของพื้นดินผ่านรากที่ยึดอยู่แทน รู้ทันทีที่มีสิ่งมีชีวิตขนาดใหญ่เดินเข้าใกล้แม้จะยังไกล"],
            ["EXTRA #1", "รอยแยกคล้ายเปลือกตา (The Seam)", "รอยแยกแนวตั้งเดียวกลางลำตัวส่วนบนที่เปิดเผยเยื่อรับแสงสีซีดข้างในได้เต็มที่ ปิดกลับสนิทในเสี้ยววินาทีทันทีที่รู้สึกว่าถูกจ้องกลับ — ไม่มีบันทึกภาคสนามใดจับภาพมันเปิดค้างได้เลยสักครั้ง"],
            ["EXTRA #2", "รากยึดใต้ลำตัว", "รากเนื้อเยื่อหนาแน่นจำนวนมากยึดพื้นดินไว้แน่น ปรับความยาว/ทิศทางได้ทีละเสี้ยวมิลลิเมตรต่อวันเพื่อ 'เดิน' เข้าหากลิ่นอย่างช้าที่สุดเท่าที่จะจินตนาการได้"]
        ],
        body: [
            ["BODY FRAME", "ลำตัวสูงเพรียวตรง เอียงเล็กน้อยคล้ายต้นไม้ตาย", "ไม่มีข้อต่อที่เห็นชัดเจนตลอดความสูง ยืนนิ่งในท่าเดียวได้นานเป็นเดือนโดยไม่เปลี่ยนท่า"],
            ["SPINE", "แกนกลางแข็งคล้ายเนื้อไม้", "แข็งพอจะทรงตัวสูงเพรียวได้โดยไม่ล้ม แต่ไม่ยืดหยุ่นพอจะขยับเร็วได้เลยแม้แต่น้อย"],
            ["TAIL", "ไม่มี", "Utility — ไม่มี ลำตัวเรียวแหลมขึ้นไปจนถึงปลายบนแทน"]
        ],
        limbs: [
            ["#1", "ราก/ขา", "1 คู่ ฐานล่างลำตัว", "รากหนาแน่นสองกลุ่มซ้าย-ขวาที่ฐานลำตัวทำหน้าที่ทั้งยึดพื้นและ 'เดิน' อย่างช้าที่สุด ปรับตำแหน่งทีละเสี้ยวมิลลิเมตรต่อวันในทิศทางของกลิ่นที่ตรวจจับได้"]
        ],
        skin: [
            ["ลำตัว", "เนื้อสัมผัสแข็งแตกลายคล้ายเปลือกไม้แห้งจริง สีเทาอมน้ำตาลซีด"],
            ["รอยแยกเปลือกตา", "ผิวบางกว่าจุดอื่นมาก เผยเยื่อสีซีดเรืองจางเมื่อเปิด"],
            ["ราก", "ผิวเหนียวชื้นตัดกับลำตัวส่วนบนที่แห้งสนิท"]
        ],
        pattern: "ลายแตกของเปลือกไม้ธรรมชาติทั่วลำตัว ไม่สม่ำเสมอและแตกต่างกันทุกตัวเหมือนต้นไม้จริงแต่ละต้น กลืนกับกลุ่มต้นไม้ตายจริงรอบข้างจนแยกด้วยตาเปล่าแทบไม่ได้เลยถ้าไม่จ้องนานพอ",
        pal: [["สีหลัก", "#4a453e"], ["เงา", "#201d19"], ["แสง", "#8f867a"], ["เสริม A", "#635c52"], ["เสริม B", "#a89c8c"]],
        hl: ["#d8cdb8", "สีซีดจางของเยื่อรับแสงในรอยแยกเปลือกตา"],
        hlAt: "เยื่อรับแสงสีซีดข้างในรอยแยกเปลือกตาตอนเปิดเต็มที่ — จุดเดียวที่ต่างจากพื้นผิวเปลือกไม้ทั้งตัว",
        mutationFull: {
            proTitle: "กลยุทธ์กินอาหารที่ปลอดภัยที่สุดในป่าหมอก",
            proDesc: "ด้วยรูปลักษณ์ที่กลืนไปกับต้นไม้ตายสนิทและไม่เคยเข้าใกล้สิ่งมีชีวิตขณะยังมีชีวิตอยู่เลย แทบไม่มีนักล่าชนิดใดในป่าหมอกสนใจมันเลยแม้แต่น้อย — ตลอดประวัติการสังเกตไม่เคยมีบันทึกว่ามันถูกล่าแม้แต่ครั้งเดียว",
            conTitle: "เคลื่อนที่ช้าจนแทบเป็นศูนย์",
            conDesc: "การเคลื่อนตัวทีละเสี้ยวมิลลิเมตรต่อวันหมายความว่าการตัดสินใจแต่ละครั้งผูกมัดมันไว้นานหลายเดือน หากกลิ่นที่ตามไปสุดท้ายไม่นำไปสู่ซากจริง (บาดแผลหายเอง สัตว์หนีรอดไปได้) มันจะเสียเวลาและพลังงานมหาศาลไปกับการเดาที่ผิดพลาดเพียงครั้งเดียว"
        },
        dangerDetail: {
            raw: "10 / 200", percent: 5, tier: "ไม่มีพิษภัย (Harmless)",
            factors: ["ไม่มีอันตรายทางกายภาพเลย แต่ความนิ่งสนิทที่ไม่มีใครจับได้ว่ามันขยับสร้างความรู้สึกไม่ปลอดภัยทางจิตใจต่อผู้พบเห็น (+5, ปรับตามความรู้สึก ไม่ใช่ภัยจริง)"],
            note: "ไม่มีบันทึกว่ามันทำร้ายสิ่งมีชีวิตใดเลยแม้แต่ครั้งเดียว อันตรายที่แท้จริงคือความรู้สึกหลอนที่มันทิ้งไว้กับผู้พบเห็น — นักเดินป่าหลายคนหลีกเลี่ยงพื้นที่ที่มีกลุ่มมันยืนอยู่โดยไม่จำเป็นต้องมีเหตุผลทางภัยจริงรองรับเลย"
        },
        combat: [
            ["Glacial Reposition", "เคลื่อนรากทีละเสี้ยวมิลลิเมตรต่อวันเข้าหาแหล่งกลิ่นความตาย — ช้าเกินกว่าตาเปล่าจะจับการเคลื่อนไหวได้ในคราวเดียว"],
            ["Seam Withdrawal", "หุบรอยแยกเปลือกตากลับสนิทในเสี้ยววินาทีทันทีที่รู้สึกว่าถูกจ้องกลับ ไม่มีบันทึกภาคสนามใดจับภาพมันเปิดค้างได้เลย"]
        ],
        abilities: [
            {
                name: "การดักกลิ่นความตายล่วงหน้า", type: "Sensory — ประสาทสัมผัส",
                desc: "รูพรุนนับพันรูทั่วผิวตรวจจับสารเคมีบ่งชี้บาดแผล/การติดเชื้อ/ความตายที่ใกล้เข้ามาได้จากระยะหลายร้อยเมตร แม่นยำพอจะแยกได้ว่าสิ่งมีชีวิตตัวไหนในพื้นที่กำลังจะตายก่อนตัวอื่นแม้จะยังดูปกติดีต่อสายตาทั่วไป",
                origin: "วิวัฒนาการมาจากแรงกดดันของการเป็นผู้ย่อยสลายที่เคลื่อนที่ไม่ได้เลยในทางปฏิบัติ — การรอจนซากเกิดขึ้นแล้วค่อยเริ่มเคลื่อนตัวจะช้าเกินไปเสมอเมื่อเทียบกับ Dunkrell และ Palegrim ที่เคลื่อนที่เร็วกว่ามาก การทำนายล่วงหน้าจึงเป็นทางรอดทางเดียว"
            },
            {
                name: "การนิ่งสนิทแบบไม่มีขีดจำกัดเวลา", type: "Concealment — การพรางตัว",
                desc: "ยืนอยู่ในท่าเดียวได้นานเป็นเดือนโดยไม่ขยับส่วนใดที่มองเห็นได้ด้วยตาเปล่าเลย รวมกลุ่มกันหลายตัวจนอ่านเป็น 'แนวต้นไม้ตาย' แทนที่จะเป็นสิ่งมีชีวิต",
                origin: "ผลพวงตรงจากกลยุทธ์ล่าแบบไม่ล่าเลย — ความปลอดภัยทั้งหมดของมันตั้งอยู่บนการไม่ถูกจัดว่าเป็นสิ่งมีชีวิตตั้งแต่แรกมองเห็น"
            }
        ],
        confusion: [
            ["กลุ่มต้นไม้ตายริมหนองบึง", "มี", "มี", "warn"],
            ["การขยับตำแหน่งข้ามคืน", "ไม่มี (ต้นไม้จริงอยู่นิ่ง)", "มี แต่ช้าเกินจับได้ด้วยตา", "yes"],
            ["รอยแยกคล้ายดวงตาที่กะพริบ", "ไม่มี", "มี แต่ไม่มีใครจับภาพขณะเปิดได้", "yes"]
        ],
        notes: [
            ["", "<strong>มุมป่าที่ 'จับตามอง'</strong>: ออกแบบมาเป็น asset เสริมบรรยากาศฝั่งลึกลับ/น่าขนลุก — ไม่มีอันตรายจริง แต่ทำให้บางมุมของ The Dark Mire รู้สึกเหมือนถูกเฝ้ามองอยู่ตลอดเวลาโดยไม่มีหลักฐานที่จับต้องได้ว่าใครเฝ้ามอง"]
        ],
        prompt: "A tall, gaunt alien lifeform standing 1.7 to 2.1 meters high, its bark-textured body leaning at a slight, unsettling angle exactly like a dead tree, standing motionless among a cluster of three to eight identical others at the edge of a dark forest mire. It has no eyes in any conventional sense: instead a single vertical seam runs down the upper portion of its trunk-like body, sealed flush with the surrounding bark texture and all but invisible, capable of splitting open to reveal a pale light-sensing membrane beneath before snapping shut again in an instant; it has no external nose, instead reading the faintest chemical trace of injury or death through thousands of microscopic pores scattered across its entire bark-like surface; it has no external mouth for biting or chewing, drawing dissolved nutrients from decaying matter directly through the root-like limbs fused to the ground below; it has no external ears, sensing the tremor of anything large moving nearby through those same buried roots. Its most distinctive feature is that vertical seam itself, a hairline crack running down its upper trunk that, in the rare instant it is caught open, reveals a faintly glowing pale membrane beneath before sealing shut the moment it senses it is being watched; below it, a dense mass of thick anchoring roots grips the ground, able to shift by a fraction of a millimeter at a time toward the direction of a detected scent. Its body frame is tall, slender, and unnervingly straight, with no visible joints along its entire height, able to hold one unmoving posture for months at a time; its rigid, wood-like core provides just enough structure to keep it standing upright without ever bending quickly; it has no tail, its body simply tapering to a narrow point at its uppermost tip. Its single pair of limbs is a dense cluster of thick anchoring roots at the base of its body, gripping the soil and serving as both its only means of feeding and its only means of movement, repositioning by a fraction of a millimeter each day toward whatever scent of decay it has detected. Its body is covered in hard, deeply cracked, dry bark-like tissue in pale grey-brown, indistinguishable from real dead wood at a glance; the skin around its vertical seam is noticeably thinner than the rest of its body, revealing a faint pale glow when open; its roots are damp and leathery, in sharp contrast to the bone-dry trunk above them. Its cracked bark pattern is irregular and different on every individual, exactly like real tree bark, blending it seamlessly into the surrounding stand of true dead trees until it is nearly impossible to tell apart without staring for a long, uncomfortable while. Passing as motionless dead wood keeps it safe from every predator in the mist-forest that has ever been recorded, at the cost of being able to move only by a fraction of a millimeter each day, so that a single wrong guess about a dying scent can cost it months it can never get back. Its coloration is a harmonious weathered grey-brown palette, deepened by near-black shadow in the deepest bark fissures and lifted by pale ash-tan highlights along its raised bark ridges, with muted olive-brown tones worked into the cracked texture and a paler dry driftwood tone along its uppermost length, and a glowing pale cream highlight reserved only for the light-sensing membrane glimpsed for an instant through its open seam. It stands in near-total darkness among several identical silhouettes at the root-tangled edge of the Dark Mire, thick mist pooling low between them, its vertical seam caught in the rare instant of splitting open, the pale glow of the membrane beneath the single visible point of light in the frame — a detail no field record has ever captured before it seals shut again.\n\nPhotorealistic 3D creature render, cinematic film-VFX quality, standing full-body in its natural habitat environment, three-quarter view, shot with a telephoto lens at eye level, shallow depth of field with softly blurred background dead trees dissolving into mire mist, near-total darkness broken only by faint moonlight filtering through the fog, soft naturalistic backlighting that makes the glimpsed seam membrane the sole glowing focal point in the frame, crisp rim lighting along its silhouette, hyper-sharp micro-detail texturing on every bark crack and root fiber, subsurface scattering, physically-based rendering, muted natural color grading with deep crushed shadows, 1:1 square composition, subject centered and fully visible from head to feet, no readable text."
});
