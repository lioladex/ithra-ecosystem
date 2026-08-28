/* ITH-A-001-000 — Vorthak (EXTINCT) */
creaturesData.push({
        id: "ITH-A-001-000", name: "Vorthak", status: "EXTINCT", era: "ยุคหมุนเวียน (Cycling Era)",
        imageKey: "VORTHAK", color: "#ff3b28",
        category: "ผู้ล่าสูงสุดประจำถิ่น (Apex Predator, pursuit-crusher)", habitat: "ทุ่งหินตะกอนโล่งแจ้งเชิงเทือกเขา Sorn",
        danger: "88% (Apex Predator)", size: "ระดับ 6 — ใหญ่มาก (เท่าช้าง)", height: "2.6 ม. ที่ไหล่ · 7.6 ม. ยาวรวมหาง", weight: "3,800 กก.",
        desc: "เครื่องจักรกระแทกขนาดยักษ์ มีเกราะกระดูกใต้ผิวหนังทั่วตัว เป็นร่างที่ตัวเอกสวมใส่นานที่สุดในอดีต (~300,000 ปี) ต้นตอของสัญชาตญาณการต่อสู้ทั้งหมดในฉากตื่นรู้ สูญพันธุ์ไปในเหตุการณ์ฤดูหนาวใหญ่",
        mutation: { pro: "โครงกระดูกทึบตัน มีแรงปะทะมหาศาล แปลงมวลกายเป็นอาวุธ", con: "ไร้ขนปกคลุม ทนความหนาวไม่ได้เลยแม้แต่น้อย" },
        weapons: [ "ขากรรไกรบดกระดูก (แรงกัดสูงสุดในระบบนิเวศ)", "ขาหน้ากระแทก (แรงฟาด 2 ตัน)", "เกราะกะโหลกหน้าผาก (Battering Crest)", "หางกระบองน้ำหนัก 200 กก. กวาด 360 องศา" ],
        social: "ล่าเดี่ยวโดยสมบูรณ์ พบตัวอื่นเฉพาะฤดูผสมพันธุ์ ก้าวร้าวถึงขั้นฆ่ากันเองเมื่อรุกล้ำอาณาเขต (~400 ตร.กม./ตัว) · อายุขัย 180–240 ปี",
        head: [
            ["ดวงตา", "ตาคู่หน้าเล็ก ม่านตาแดงเลือดหมู", "รูม่านตาแนวตั้งแคบ มองเห็นสามมิติแม่นยำสูงสุดสำหรับวัดระยะพุ่งชน ฝังลึกในเบ้าที่มีสันกระดูกคลุมป้องกัน"],
            ["จมูก", "โพรงจมูกกินพื้นที่ครึ่งกะโหลก", "ดมกลิ่นเลือดได้ไกลถึง 8 กิโลเมตรในทุ่งโล่ง ตามรอยเหยื่อบาดเจ็บได้ข้ามวัน"],
            ["ปาก", "ขากรรไกรบดกระดูก", "แรงกัดสูงสุดในระบบนิเวศ เขี้ยวรูปกรวยหนาทึบสองแถวสำหรับบดขยี้กระดูกไม่ใช่ฉีกเนื้อ กลืนกระดูก/เกราะเหยื่อได้ทั้งหมด ไม่เหลือซาก"],
            ["หู", "หูเล็กพับแนบกะโหลก", "แทบมองไม่เห็น ลดจุดเปราะบางที่จะถูกกัดในการปะทะ รับเสียงผ่านโพรงกระดูกกะโหลกที่หนาแทน"],
            ["EXTRA #1", "เกราะกะโหลกหน้าผาก (Battering Crest)", "แผ่นกระดูกหนา 12 ซม. โค้งนูนเต็มหน้าผาก ใช้เป็นค้อนกระแทก พุ่งชนโดยสมองไม่กระทบกระเทือน มีโพรงอากาศซับแรงกระแทกซ่อนด้านใน"],
            ["EXTRA #2", "เขาคู่หนาโค้งไปด้านหน้า", "งอกจากขอบเกราะหน้าผาก ปลายทู่ไม่แหลม ใช้เกี่ยวและงัดเหยื่อให้เสียหลักล้มก่อนขย้ำซ้ำ"]
        ],
        body: [
            ["BODY FRAME", "โครงสี่ขาลำตัวลึกมหึมา", "อกกว้างมาก คอสั้นหนาราวลำต้นไม้ ไหล่สูงกว่าสะโพกชัดเจน — สรีระของเครื่องจักรกระแทก ไม่ได้สร้างมาให้วิ่งเร็ว แต่หยุดไม่อยู่เมื่อเริ่มวิ่งแล้ว"],
            ["SPINE", "สันกระดูกหนาแหลมเรียงเป็นแถว", "ตั้งแต่ท้ายทอยถึงโคนหาง สูงสุดที่ไหล่จนเกิดเป็นโหนกเด่นชัด ในตัวที่อายุมากจะมีรอยแตกร้าว/รอยเชื่อมซ้ำนับร้อยแห่ง เป็นบันทึกการต่อสู้ตลอดชีวิต"],
            ["TAIL", "หางยาวปลายเป็นกระบองกระดูก ~200 กก.", "Utility — อาวุธกวาดพื้นที่ 360° เหวี่ยงกวาดรอบตัวได้เต็มวง ทำลายทุกอย่างในรัศมี 2.4 เมตร ใช้เมื่อถูกรุมล้อมจากหลายทิศ และถ่วงสมดุลขณะยกขาหน้าฟาด"]
        ],
        limbs: [
            ["#1", "ขา", "ขาหน้า", "ล่ำหนาราวเสาหิน กล้ามเนื้อไหล่มหาศาล ปลายเป็นอุ้งเท้ากว้างมีกรงเล็บทู่หนาสามนิ้ว — ยกฟาดลงได้ด้วยแรงเกือบสองตัน อาวุธหลักที่ใช้ทุบเหยื่อให้กระดูกหักในครั้งเดียว"],
            ["#2", "ขา", "ขาหลัง", "หนาแน่นกล้ามเนื้อสะโพกใหญ่ ให้แรงส่งพุ่งชนและเตะถีบไปด้านหลังได้รุนแรงพอทำให้สัตว์ขนาดกลางกระดูกซี่โครงยุบ ป้องกันตัวจากด้านหลังโดยไม่ต้องหันตัว"]
        ],
        skin: [
            ["ทั่วลำตัว", "หนังหนา 6 ซม. เหนียวเหมือนยาง มีแผ่นกระดูกกลม (osteoderm) ฝังใต้ผิวหนังเรียงเป็นตาราง — เขี้ยวของ Thessek แทงทะลุไม่ได้เลย"],
            ["หัว/ไหล่/สันหลัง", "เกราะกระดูกแท้ประกบซ้อนกัน ผิวด้านหยาบเต็มไปด้วยรอยแผลเป็นและรอยบิ่น"],
            ["ใต้ท้อง/ซอกขา", "หนังบางกว่าอย่างเห็นได้ชัด — จุดอ่อนเดียวของร่างกาย ซึ่งมันปกป้องด้วยการไม่ยอมล้มลงเด็ดขาด"],
            ["ขนแข็งสั้นห่างๆ ทั่วตัว", "คล้ายลวด ทำหน้าที่เป็นเซ็นเซอร์สัมผัสมากกว่าให้ความอบอุ่น — และนี่คือจุดตายของสปีชีส์นี้ในภายหลัง"]
        ],
        pattern: "ลายแตกร้าวคล้ายโคลนแห้งทั่วทั้งตัว เกิดจากร่องระหว่างแผ่นกระดูกใต้ผิวหนัง ตัวที่อายุมากจะมีลายนี้ลึกซับซ้อนขึ้นเรื่อยๆ พร้อมรอยแผลเป็นสีซีดตัดขวางนับไม่ถ้วน — ประเมินอายุและจำนวนการต่อสู้ได้จากความหนาแน่นของรอยแผล",
        pal: [["สีหลัก", "#7a3f32"], ["เงา", "#2a1512"], ["แสง", "#d9b8a8"], ["เสริม A", "#4a6b45"], ["เสริม B", "#4a6478"]],
        hl: ["#ff3b28", "แดงเลือดเรืองแสงเข้ม"],
        hlAt: "ดวงตาที่เรืองแดงเข้มในเงามืด · ร่องลึกระหว่างแผ่นเกราะที่เผยเนื้อเยื่อเรืองแดงเมื่อร่างกายร้อนจากการต่อสู้ · ภายในปากและลำคอเมื่ออ้ากว้าง",
        mutationFull: {
            proTitle: "โครงกระดูก / ความหนาแน่นและแรงปะทะ",
            proDesc: "กระดูกทึบตันไร้โพรงอากาศบวกเกราะใต้ผิวหนังทั่วตัว ทำให้แปลงมวลกายทั้งหมดเป็นอาวุธได้ ปะทะสิ่งใดก็ตามได้โดยแทบไม่บาดเจ็บ — ไม่มีสิ่งมีชีวิตใดในทุ่งหินตะกอนที่รับการปะทะเต็มแรงแล้วยังยืนอยู่ได้",
            conTitle: "ผิวหนัง / การรักษาความอบอุ่น",
            conDesc: "เพื่อระบายความร้อนมหาศาลจากมวลกล้ามเนื้อและเกราะหนัก จึงแทบไม่มีขนเลย ทนความหนาวไม่ได้เลยแม้แต่น้อย — ในยุคที่ทุ่งหินตะกอนอบอุ่นตลอดปี นี่ไม่เคยเป็นปัญหา จนกระทั่งวันที่มันกลายเป็นปัญหาเดียวที่สำคัญ"
        },
        dangerDetail: {
            raw: "176 / 200", percent: 88, tier: "จ้าวป่า (Apex Predator)",
            factors: ["ขนาดตัวระดับ 6 (+10)", "ขากรรไกรบดกระดูก (+10)", "ขาหน้าฟาดแรงสองตัน (+10)", "หางกระบองกวาด 360° (+9)", "เกราะกระดูกทั้งตัว (+9)"],
            note: "ไม่มีจุดใดในโปรไฟล์นี้ที่เป็นจุดอ่อนเชิงการต่อสู้เลย — จุดอ่อนเดียวของมันคืออุณหภูมิ ซึ่งไม่ใช่สิ่งที่ต่อสู้ด้วยได้"
        },
        combat: [
            ["สวนกลางอากาศ (Counter-slam)", "รอให้เหยื่อกระโจนเข้าหา แล้วยกขาหน้ากระแทกใส่ในจังหวะที่ตัวมันลอยอยู่กลางอากาศและเปลี่ยนทิศไม่ได้ — ท่าที่ใช้จัดการ Thessek ที่พุ่งขึ้นจากโพรงมานับหมื่นครั้ง"],
            ["ฟาดหัว (Crest bash)", "ใช้เกราะหน้าผากกระแทกตรงๆ ทำให้เป้าหมายเสียหลักและมึนงง"],
            ["เตะหลัง (Rear kick)", "เตะถีบไปด้านหลังโดยไม่ต้องหันตัว ใช้เมื่อมีศัตรูเข้าประชิดจากทางท้าย"],
            ["จังหวะเข้า-ออก", "ไม่ยืนรับการรุมโจมตี เคลื่อนเข้าปะทะแล้วถอยออกทันที ไม่ให้ศัตรูหลายตัวเกาะติดพร้อมกัน — จังหวะที่ต้องอาศัยประสบการณ์นับแสนปีจึงทำได้อย่างเป็นธรรมชาติ"]
        ],
        extinction: {
            title: "ฤดูหนาวใหญ่ (The Long Winter)",
            cause: "วงโคจรของ Ithra เปลี่ยน (ค่าความรีเพิ่มขึ้นจากแรงรบกวนของดวงจันทร์ทั้งสอง) ทำให้ดาวทั้งดวงเข้าสู่ยุคน้ำแข็งยาวนานหลายหมื่นปี อุณหภูมิเฉลี่ยลดลงกว่า 20 องศา ทุ่งหินตะกอนที่เคยอบอุ่นถูกหิมะปกคลุมตลอดปี",
            why: [
                "ไร้ขนปกคลุม — ร่างกายที่ออกแบบมาเพื่อระบายความร้อน กลายเป็นร่างกายที่กักความร้อนไว้ไม่ได้เลย",
                "มวลกายมหาศาล — ต้องการอาหารมหาศาลเพื่อรักษาอุณหภูมิ แต่เหยื่อในทุ่งลดจำนวนลงอย่างรวดเร็ว",
                "อายุขัยยาวและขยายพันธุ์ช้า — โตเต็มวัยที่ 25 ปี ออกลูกครั้งละตัวทุก 15-20 ปี ปรับตัวตามวิวัฒนาการไม่ทันอย่างสิ้นเชิง",
                "อาณาเขตกว้างและล่าเดี่ยว — เมื่อจำนวนลดลง ตัวที่เหลือกระจัดกระจายจนหาคู่ผสมพันธุ์ไม่พบ"
            ],
            irony: "สิ่งมีชีวิตที่แข็งแกร่งที่สุดในระบบนิเวศ ไม่มีศัตรูตามธรรมชาติแม้แต่ตัวเดียว และมีชีวิตยืนยาวถึงสองศตวรรษ กลับสูญพันธุ์เพราะอากาศเย็น — ขณะที่สัตว์เล็กมีขนหนาที่ Vorthak ไม่เคยเหลียวมองกลับรอดมาได้ และกลายเป็นบรรพบุรุษของสัตว์ในยุคป่าหมอกทั้งหมด รวมถึงบรรพบุรุษของ Karvos ด้วย",
            fate: "เมื่อร่าง Vorthak เริ่มอ่อนแอลงจากความหนาว สัญชาตญาณเอาตัวรอดของ Confluence สั่งให้ละทิ้งร่างนี้ไปสวมร่างสิ่งมีชีวิตที่ทนหนาวได้ — มันจึงเป็นหนึ่งใน Vorthak ตัวสุดท้ายที่ยังเคลื่อนไหวอยู่ในทุ่งน้ำแข็ง ก่อนจะทิ้งร่างนั้นไปโดยไม่มีความรู้สึกใดๆ เพราะในตอนนั้นมันยังไม่มีสติปัญญาที่จะรู้ว่าตัวเองเพิ่งเป็นพยานในการสูญพันธุ์ของสิ่งที่ตัวเองเคยเป็น"
        },
        notes: [
            ["", "<strong>การล่าแบบ \"ไล่ให้ร้อน\"</strong> — Karvos ไม่จู่โจมทันที แต่ไล่ต้อนเหยื่อให้วิ่งจนอุณหภูมิร่างกายสูงขึ้น เพราะเหยื่อที่ร้อนจะสว่างขึ้นในสายตาของมัน <em style='color:var(--accent-default)'>ยิ่งเหยื่อวิ่งหนีนานเท่าไหร่ มันก็ยิ่งมองเห็นชัดขึ้นเท่านั้น เป็นการล่าที่ลงโทษการหนี</em>"],
            ["", "<strong>สื่อสารด้วยแสงแทนการหอน</strong> — ต่างจากหมาป่าจริงที่หอนบอกตำแหน่ง Karvos ล่าในความเงียบสนิท ใช้แถบเรืองแสงข้างแก้มกะพริบเป็นรหัส มองเห็นได้เฉพาะสมาชิกฝูงที่ล้อมอยู่รอบทิศ — เหยื่อจะไม่รู้เลยว่าถูกล้อมไว้แล้วจนกระทั่งสายเกินไป"],
            ["warn", "<strong>ประเด็นที่แหลมคมที่สุด</strong> — Luvenn ดำรงชีวิตด้วยการอาบแดดจนตัวอุ่น ส่วน Karvos ล่าด้วยการมองหาความอุ่น ฝูง Luvenn ที่เพิ่งกางแผงคอรับแสงเสร็จจึงสว่างโพลนราวคบไฟในสายตาของ Karvos — <em style='color:#ffb84a'>พฤติกรรมที่หล่อเลี้ยงชีวิตพวกมัน คือพฤติกรรมเดียวกับที่เรียกความตายมาหา</em> และเมื่อตกใจวิ่งหนี ตัวก็ยิ่งร้อน ยิ่งสว่าง ยิ่งถูกไล่ล่าง่ายขึ้น — ยกเว้นตัวเดียวที่ไม่ได้วิ่ง"]
        ],
        prompt: "A massive alien dinosaur-like apex predator standing 2.6 meters at the shoulder, heavily armored and built like a living battering ram, deceptively unstoppable once it commits to a charge. Its head bears small forward-facing eyes with deep crimson vertical-slit pupils sunk deep into protective bone-ridged sockets for precise depth judgment when closing on a target, a nasal cavity filling half its skull that can scent blood up to 8 kilometers across open plain, massive jaws lined with two rows of thick conical bone-crushing teeth built to snap and swallow bone rather than shear meat, and small ears folded flat and barely visible, sound instead carried through the thick canals of its own skull bone. A bony battering crest 12 centimeters thick curves over its forehead like a hammer, its hidden internal air pockets absorbing the shock of a full charge without concussion, and a pair of thick blunt-tipped horns curve forward from the crest's edge, used to hook and lever prey off balance before it is bitten down again and again. Its body has a deeply keeled chest, a thick tree-trunk neck, and shoulders noticeably higher than its hips — the frame of a machine built not for speed but for an unstoppable charge — with a row of thick sharp bone spikes running along its spine from nape to tail base, tallest at the shoulders to form a prominent hump, and in old individuals scarred with hundreds of healed cracks and fusions that record a lifetime of combat. Its tail is long and thick, ending in a roughly 200-kilogram bone club that sweeps a full 360 degrees, flattening everything within a 2.4-meter radius when it is surrounded from multiple sides, and counterbalancing its body as its front legs strike. It stands on four legs: the front limbs are immensely thick like stone pillars with massive shoulder muscle, ending in broad paws with three blunt heavy claws that slam down with nearly two tons of force and shatter prey bone in a single blow; the hind limbs carry dense hip muscle, powering the charge and driving a rear kick strong enough to crack the ribs of a mid-sized animal without it ever needing to turn around. Its entire body is sheathed in 6-centimeter-thick rubbery hide with round bone osteoderms embedded beneath it in a tight grid, tough enough that nothing in the plain can bite through it, while its head, shoulders and spine carry true interlocking bone armor plates, deeply scarred and chipped, and its underbelly and leg-pits are noticeably thinner skin — the single weak point on its body, one it protects only by refusing ever to fall. Sparse wire-like bristles are scattered across its body, functioning more as touch sensors than for warmth. A cracked, dried-mud-like pattern of pale fissures runs across its entire body, born from the grooves between its embedded armor plates and deepening with age into a dense mesh of pale battle scars. Its solid, cavity-free bone and full-body armor let it convert its entire mass into an unstoppable weapon that nothing in its ecosystem can withstand at full impact, at the cost of having almost no coat to retain heat, leaving it utterly unable to tolerate even mild cold. Its coloration is a harmonious deep dried-blood rust-red and clay-brown palette, deepened by near-black brown shadows in the recesses and lifted by pale dusty beige highlights along the spinal spikes, with muted olive-green tones worked into the deep skin folds and old scar tissue and cool slate blue-grey in the underbelly and leg-pit shadows, and a glowing deep blood-red highlight reserved only for its eyes in shadow, the deep grooves between its armor plates when its body runs hot from battle, and the inside of its mouth and throat when it gapes wide. It stands aggressively in a barren, open sedimentary rock plain at the foot of the Sorn mountains, distant sandstone pillars and swirling dust behind it, head lowered and roaring.\n\nPhotorealistic 3D creature render, cinematic film-VFX quality, standing full-body in its natural habitat environment, three-quarter view, shot with a telephoto lens at eye level, shallow depth of field with softly blurred background rocky terrain and drifting dust, volumetric god rays raking low across the plain, soft naturalistic backlighting that makes the glowing armor grooves and eyes glow from within, hyper-detailed micro-texturing on every scar and surface, subsurface scattering, physically-based rendering, muted natural color grading with deep shadows, 1:1 square composition, subject centered and fully visible from head to feet, no readable text."
});
