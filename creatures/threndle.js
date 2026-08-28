/* ITH-206-410 — Threndle (ALIVE) */
creaturesData.push({
        id: "ITH-206-410", name: "Threndle", status: "ALIVE", era: "ยุคป่าหมอก (Mistwood Era)",
        imageKey: null, color: "#4ce0c0",
        category: "ผู้ล่าสูงสุดแห่งสายน้ำ (Aquatic apex predator, tidal ambusher)",
        habitat: "แหล่งน้ำ/พื้นที่ชุ่มน้ำ (กระแสน้ำขึ้นลงจากดวงจันทร์ Ren และ Kol) — The Great Tidal Flats",
        foodChain: "ยอดสุดของห่วงโซ่อาหารในแหล่งน้ำ/พื้นที่ชุ่มน้ำ — ล่าฝูง Pallowfin เป็นอาหารหลัก",
        danger: "74% (Highly Lethal)", size: "ระดับ 6 — ใหญ่มาก", height: "ความยาวลำตัว 6.2 ม. (หัวถึงปลายหาง)", weight: "940 กก.",
        desc: "นักล่าลำตัวยาวเพรียวอาศัยในน้ำลึกของพื้นที่ชุ่มน้ำ ใช้ประโยชน์จากกระแสน้ำขึ้นลงที่ซับซ้อนคาดเดายากจากดวงจันทร์สองดวงในการซุ่มโจมตี มักโผล่ขึ้นมาฉวยเหยื่อที่มาริมน้ำในจังหวะน้ำขึ้นที่แทบไม่มีสิ่งมีชีวิตอื่นคาดเดาได้ทัน",
        mutation: { pro: "อวัยวะรับแรงดันน้ำข้างลำตัว (Lateral pressure sense) / คาดเดาจังหวะน้ำขึ้น-ลงได้แม่นยำล่วงหน้า ซุ่มเหยื่อได้ถูกจังหวะเสมอ", con: "โครงร่างปรับมาเพื่อว่ายน้ำโดยเฉพาะ / เคลื่อนไหวบนบกแห้งได้ช้ามากและติดอยู่กับที่หากน้ำลดจนหมด" },
        weapons: [ "ขากรรไกรยาวฟันซี่ละเอียดล็อกเหยื่อ (ไม่ปล่อยจนกว่าจะจมน้ำหมดแรง)", "แผงครีบหลังกางออกได้เพื่อพุ่งเลี้ยวกะทันหัน", "หางแบนพายทรงพลัง (พุ่งจากนิ่งสู่เต็มเร็วในเสี้ยววินาที)", "อวัยวะรับแรงดันน้ำทำนายจังหวะน้ำขึ้น-ลง" ],
        social: "อยู่ตัวเดียวยึดโซนน้ำลึกของตัวเอง ก้าวร้าวต่อ Threndle ตัวอื่นที่รุกล้ำ พบกันเฉพาะฤดูผสมพันธุ์ตามจังหวะน้ำขึ้นสูงสุดของทั้งสองดวงจันทร์ (The Clash Tide)",
        head: [
            ["ดวงตา", "ตาคู่ยกสูงบนหัว มีเปลือกตาที่สาม", "ตำแหน่งตาสูงทำให้ลอยตัวจมอยู่ใต้น้ำเกือบทั้งตัวได้ขณะยังมองเห็นผิวน้ำและฝั่ง เปลือกตาที่สาม (Nictitating membrane) โปร่งแสงปิดป้องกันตาขณะดำมุดยังมองเห็นได้ลาง ๆ"],
            ["จมูก", "รูจมูกยกสูงปิดผนึกได้สนิท", "อยู่บนปุ่มยกสูงสุดของหัว หายใจได้โดยโผล่แค่ปลายจมูกพ้นน้ำ ปิดผนึกอัตโนมัติสนิทเมื่อดำมุดเต็มตัว"],
            ["ปาก", "ขากรรไกรยาวแคบฟันซี่ละเอียดสบกัน มีหนวดรับสัมผัสรอบขอบปาก", "ฟันซี่เรียวแหลมสบกันเป็นกรงเหมือนหวี ออกแบบมาเพื่อกัดล็อกเหยื่อลื่นไม่ให้หลุดมากกว่าฉีกเนื้อ กัดแล้วดึงลงน้ำลึกจนเหยื่อจมน้ำหมดแรง รอบขอบปากมีหนวดรับสัมผัสเรียวบางกึ่งโปร่งแสงหลายเส้นคอยสะบัดหาความเคลื่อนไหวของเหยื่อในน้ำขุ่นที่มองไม่เห็นอะไรเลย"],
            ["หู", "ช่องหูเล็กมีลิ้นปิดใต้น้ำ", "ปิดสนิทอัตโนมัติเมื่อดำมุด รับเสียงผ่านการสั่นสะเทือนของกระดูกขากรรไกรแทนขณะอยู่ใต้น้ำ"],
            ["EXTRA #1", "แถบรับแรงดันน้ำข้างลำตัว (Pressure-line Organ)", "เส้นรับสัมผัสพาดยาวข้างลำตัวตลอดสองข้าง ไวต่อการเปลี่ยนแปลงแรงดันน้ำจากกระแสน้ำขึ้น-ลงที่ซับซ้อนของดวงจันทร์คู่ ทำให้รู้จังหวะน้ำขึ้นสูงสุดล่วงหน้าได้แม่นยำกว่าสัตว์น้ำชนิดอื่นทั้งหมด"],
            ["EXTRA #2", "แผงครีบหลังพับได้ (Dorsal Sail)", "แผ่นครีบสูงพับแนบหลังได้เวลาซุ่มเพื่อลดแรงต้านน้ำ กางเต็มที่เพื่อเลี้ยวกะทันหันขณะไล่หรือข่มขู่คู่แข่งในน้ำขุ่น"]
        ],
        body: [
            ["BODY FRAME", "โครงลำตัวเรียวยาวแบบจระเข้ผสมงู", "ลำตัวยาวยืดหยุ่นสูง สร้างมาเพื่อทั้งซุ่มนิ่งใต้น้ำเป็นเวลานานและพุ่งความเร็วสูงกะทันหันในระยะสั้น"],
            ["SPINE", "กระดูกสันหลังยืดหยุ่นสูงมาก", "บิดตัวโค้งข้างลำตัวได้กว้างเพื่อสร้างแรงพุ่งระเบิดจากนิ่งสนิทสู่ความเร็วเต็มที่แทบจะทันที"],
            ["TAIL", "หางยาวแบนคล้ายพาย ปลายแตกเป็นริ้วครีบบางคล้ายหนวด", "Utility — ตัวขับเคลื่อนหลักของร่างกาย พายส่ายข้างลำตัวสร้างแรงพุ่งความเร็วสูง และยันโคลนพื้นน้ำไว้ต้านกระแสน้ำแรงขณะซุ่มไม่ให้ถูกซัดลอย ท่อนปลายสุดแตกออกเป็นริ้วครีบบางกึ่งโปร่งแสงหลายเส้นคล้ายหนวดพลิ้ว สะบัดไหวตามกระแสน้ำตลอดเวลาแม้ลำตัวจะนิ่งสนิท"]
        ],
        limbs: [
            ["#1", "ขา", "ขาหน้า", "สั้นแข็งแรงมีพังผืดระหว่างนิ้ว ใช้คลานเปลี่ยนตำแหน่งบนพื้นโคลนหรือยันตัวยึดพื้นน้ำต้านกระแสน้ำขณะซุ่มรอ ไม่ใช่ตัวขับเคลื่อนหลัก"],
            ["#2", "ขา", "ขาหลัง", "โครงเดียวกับขาหน้าแต่ใหญ่กว่าเล็กน้อย ช่วยพยุงตัวคลานขึ้นเกยตื้นชั่วครู่เพื่อฉวยเหยื่อริมฝั่งก่อนพลิกตัวกลับลงน้ำทันที"]
        ],
        skin: [
            ["หลัง", "หนังเรียบลื่นสีมัวเข้มปนโคลน มีสันคริสตัลสีอำพันขุ่นแนวสันหลัง แท่งคริสตัลขรุขระไม่สมมาตรงอกทะลุผิวหนังแทนสันเกราะกระดูกทั่วไป ป้องกันการเสียดสีกับพื้นทรายและโคลนหยาบตอนซุ่มตื้น และเรืองแสงจางสีเขียวอมฟ้าได้เมื่ออยู่ในน้ำมืดสนิท"],
            ["ใต้ท้อง", "หนังอ่อนสีซีดกว่ามาก ลดความเด่นเมื่อมองจากด้านล่างขณะว่ายผ่านเหนือเหยื่อ (Countershading)"],
            ["ขา/อุ้งเท้า", "หนังหนาด้านมีพังผืดยึดนิ้ว ทนการเสียดสีกับโคลนหยาบและเปลือกหอยคมของพื้นที่ชุ่มน้ำ"]
        ],
        pattern: "ลายด่างพร่าสีโคลน-ทรายไม่สม่ำเสมอทั่วหลัง เลียนแบบเงาแดดที่กระทบโคลนขุ่นใต้น้ำ ช่วยพรางตัวให้กลืนกับพื้นน้ำขุ่นในเขตน้ำขึ้นน้ำลง",
        pal: [["สีหลัก", "#5a6b3e"], ["เงา", "#1c2414"], ["แสง", "#c9c49a"], ["เสริม A", "#2e6b64"], ["เสริม B", "#4a4258"]],
        hl: ["#4ce0c0", "เขียวอมฟ้าเรืองแสงจางๆ"],
        hlAt: "แถบรับแรงดันน้ำข้างลำตัวเมื่อเรืองแสงจางในน้ำมืด · ดวงตาเหนือผิวน้ำยามค่ำคืน · ขอบแผงครีบหลังเมื่อกางเต็มที่ · สันคริสตัลอำพันบนหลังและริ้วครีบปลายหางที่เรืองแสงจางในน้ำมืดสนิท",
        mutationFull: {
            proTitle: "อวัยวะรับแรงดันน้ำ / การคาดเดาจังหวะน้ำขึ้น-ลง",
            proDesc: "แถบรับแรงดันน้ำข้างลำตัวพัฒนาจนอ่านการเปลี่ยนแปลงแรงดันน้ำเล็กน้อยที่สุดได้ ทำให้รู้ล่วงหน้าว่าน้ำจะขึ้นสูงสุดเมื่อใดจากอิทธิพลซับซ้อนของดวงจันทร์ทั้งสอง ซุ่มดักเหยื่อที่ติดกับดักน้ำขึ้นได้แม่นยำในจังหวะที่สัตว์อื่นคาดเดาไม่ได้เลย",
            conTitle: "โครงร่าง / การเคลื่อนที่บนบกแห้ง",
            conDesc: "ร่างกายทั้งหมดถูกออกแบบมาเพื่อว่ายน้ำโดยเฉพาะ ขาสั้นเกินกว่าจะพยุงตัวเดินไกลบนบกแห้งได้ หากติดอยู่บนทุ่งสันทรายตอนน้ำลดจนหมดภายใน 12 ชั่วโมง จะเคลื่อนไหวได้ช้ามากและเสี่ยงตายจากการขาดน้ำหรือถูกล่าซ้ำ"
        },
        dangerDetail: {
            raw: "148 / 200", percent: 74, tier: "อันตรายสูง (Highly Lethal)",
            factors: ["ขากรรไกรล็อกเหยื่อไม่ปล่อย (+9)", "พุ่งความเร็วสูงกะทันหันจากจุดซุ่ม (+9)", "ทำนายจังหวะน้ำขึ้นแม่นยำ (+8)", "ขนาดตัวระดับ 6 (+7)"],
            note: "อันตรายสูงสุดในเขตน้ำทั้งหมด แต่จำกัดอยู่แค่ในหรือใกล้แหล่งน้ำลึกเท่านั้น — ห่างจากขอบน้ำเพียงไม่กี่เมตรบนบกแห้ง ความอันตรายจะลดฮวบเกือบเป็นศูนย์ทันที"
        },
        combat: [
            ["ซุ่มรอจังหวะน้ำขึ้น (Tidal Ambush)", "จมนิ่งอยู่ใต้น้ำขุ่นโดยโผล่แค่ปลายจมูกและตา รอจนกระแสน้ำขึ้นถึงจุดสูงสุดตามที่คาดการณ์ไว้แม่นยำ แล้วพุ่งฉวยเหยื่อที่ติดอยู่ริมน้ำโดยไม่ทันตั้งตัว"],
            ["ล็อก-จม (Death Roll & Drown)", "กัดล็อกเหยื่อไว้แน่นแล้วดึงลงน้ำลึกทันที หมุนตัวบิดให้เหยื่อสับสนทิศทางจนจมน้ำหมดแรงโดยไม่ต้องออกแรงกัดซ้ำ"],
            ["เกยตื้นชั่วคราว (Shore Snatch)", "ในจังหวะน้ำขึ้นสูงสุด จะคลานขึ้นเกยตื้นชั่วครู่เพื่อฉวยเหยื่อริมฝั่งที่ไม่ทันระวังตัว ก่อนพลิกตัวกลับลงน้ำภายในไม่กี่วินาที"]
        ],
        notes: [
            ["", "<strong>นักล่าที่อ่านดวงจันทร์ได้</strong> — Threndle เป็นสิ่งมีชีวิตไม่กี่ชนิดที่ใช้ประโยชน์จากความซับซ้อนของกระแสน้ำจากดวงจันทร์คู่ Ren และ Kol ได้อย่างเต็มที่ แทนที่จะเป็นอุปสรรค กระแสน้ำที่คาดเดายากกลับกลายเป็นอาวุธหลักของมัน"],
            ["warn", "<strong>ราคาของการเชี่ยวชาญ</strong> — ความเชี่ยวชาญในน้ำที่สมบูรณ์แบบแลกมาด้วยการเป็นสัตว์ที่อ่อนแอที่สุดในเขตของตัวเองทันทีที่น้ำลด ทุ่งสันทรายมหึมาที่จมอยู่ใต้น้ำลึกหลายเมตรตอนน้ำขึ้น จะแห้งขอดกลายเป็นโคลนเลนราบเรียบภายใน 12 ชั่วโมง — Threndle ที่คำนวณจังหวะผิดพลาดอาจติดอยู่บนบกแห้งจนตาย"],
            ["", "ลักษณะที่ตั้งใจไว้เบื้องต้น: ว่ายน้ำเร็ว ซุ่มในโซนน้ำขึ้นน้ำลง มีอวัยวะรับการเปลี่ยนแปลงความดันน้ำ — ออกแบบระบบ Slot เต็มรูปแบบแล้ว"]
        ],
        prompt: "A heavily alien aquatic apex predator with an elongated, sinuous body roughly 6.2 meters long from head to tail-tip, its overall crocodile-and-serpent silhouette unmistakable but its surface details reading as distinctly otherworldly, built to lie motionless just beneath murky tidal water for hours before striking. Its head bears a pair of eyes set high on raised sockets with a translucent third nictitating eyelid, positioned so it can stay almost fully submerged while still watching the surface and shoreline, a pair of nostrils on a raised bump at the snout tip that seal completely shut the instant it submerges fully, and a long narrow jaw lined with fine interlocking needle-like teeth built to lock onto slick struggling prey, ringed around its edge with several slender, translucent, whip-thin sensory barbels that trail and flick constantly, reading every current for the movement of hidden prey in water too murky to see through. Its small ears are sealed by an internal valve underwater, sensing sound instead through vibrations carried along its jawbone. A pressure-sensing organ runs the full length of both flanks like a raised bioluminescent lateral line, exquisitely tuned to the smallest shifts in water pressure caused by the complex tides of its twin moons, letting it predict the exact moment of peak high tide with total accuracy, and a tall foldable sail-like dorsal fin lies flat against its back while it lies in ambush to reduce drag, then flares wide open for sudden sharp turns when pursuing prey. Its body is an elongated crocodile-and-serpent frame with an extraordinarily flexible spine capable of powerful lateral undulation, launching it from complete stillness to full speed in an instant, and a long flattened paddle-like tail serves as its primary means of propulsion, its final third fraying apart into several thin, translucent, tentacle-like fin-fronds that drift and sway with the current even while the rest of its body stays perfectly motionless in ambush. It has two pairs of short, webbed, powerfully built limbs used mainly for crawling across mudflats and anchoring itself against the pull of the tide rather than for swimming, the slightly larger hind pair also letting it haul itself briefly onto shore to snatch prey at the water's edge before rolling back into the water. Its back is sheathed in smooth, slick, mud-dark skin studded along the spine with a jagged, asymmetric ridge of raw translucent amber-crystal growths rather than ordinary bone scutes, resistant to abrasion from coarse sand and glowing faintly teal-green in the darkest water, while its underside is pale, soft-skinned countershading that reduces its visibility from below, and its legs and paws are thick calloused hide toughened against the coarse mud and sharp shell fragments of the tidal flats. An uneven, blurred mud-and-sand mottling covers its back, mimicking the dappled shadows of sunlight through churned, murky water and rendering it nearly invisible in the tidal shallows. Its pressure-sensing organ lets it strike with perfect timing exactly when the tide traps prey against the shore, at the cost of a body built so completely for water that it becomes dangerously slow and vulnerable the moment it is caught on dry land as the tide recedes. Its coloration is a harmonious murky olive-brown palette, deepened by near-black shadows in the recesses and lifted by pale sandy-cream highlights along its dorsal ridge, with muted teal-green worked into its flanks and dull violet-grey in the belly and joint shadows, and a faint glowing teal-green highlight reserved only for its lateral pressure-sensing stripe, its crystalline dorsal ridge, the trailing fin-fronds of its tail, its eyes above the waterline at night, and the edge of its flared dorsal sail. It lies almost fully submerged in the murky tidal shallows of the Great Tidal Flats where Verath meets the Twin-Tide Ocean, its sensory barbels and tail-fronds drifting gently with the current, only its eyes and nostril ridge breaking the water's surface, utterly motionless as the tide creeps toward its peak.\n\nPhotorealistic 3D creature render, cinematic film-VFX quality, floating low in the water within its natural habitat environment, three-quarter view, shot with a telephoto lens at eye level, shallow depth of field with softly blurred background water and distant shoreline, volumetric god rays filtering through hazy tidal mist, soft naturalistic backlighting that makes its lateral pressure stripe, crystal ridge, and eyes glow faintly from within, hyper-detailed micro-texturing on every scale and surface, subsurface scattering, physically-based rendering, muted natural color grading with deep shadows, 1:1 square composition, subject centered and fully visible from head to feet, no readable text."
});
