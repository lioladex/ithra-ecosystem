/* ITH-202-115 — Vashli (ALIVE) */
creaturesData.push({
        id: "ITH-202-115", name: "Vashli", status: "ALIVE", era: "ยุคป่าหมอก (Mistwood Era)",
        imageKey: "VASHLI", color: "#38bdf8",
        category: "สัตว์กินพืชปีนป่ายชั้นเรือนยอด (Canopy browser)",
        habitat: "ป่าหมอกชั้นเรือนยอด (Verath, The Inner Canopy)",
        foodChain: "ผู้บริโภคปฐมภูมิของชั้นเรือนยอด — เหยื่อหลักของ Skyther และนักล่าอื่นๆ",
        danger: "15% (Harmless)", size: "ระดับ 3 — เล็ก (เท่าแมวป่าตัวใหญ่)", 
        height: "0.45 ม. ที่ไหล่ · ลำตัวยาว 0.7 ม. (ไม่รวมหาง)", weight: "12 กก.",
        desc: "นักยิมนาสติกแห่งป่าหมอก สัตว์เลี้ยงลูกด้วยนมกึ่งสัตว์เลื้อยคลานที่ใช้ชีวิตทั้งหมดบนกิ่งไม้ขนาดยักษ์ มีความว่องไวสูงมาก อาหารหลักคือยอดไม้อ่อนและน้ำหวานจากดอกไม้เรือนยอด เป็นเหยื่ออันดับหนึ่งของ Skyther จึงวิวัฒนาการประสาทสัมผัสและกล้ามเนื้อเพื่อหลบหลีกการโจมตีจากท้องฟ้าโดยเฉพาะ",
        mutation: { pro: "นิ้วเท้าแบบตุ๊กแกและหางยึดเกาะ / วิ่งกลับหัวใต้กิ่งไม้ได้อย่างอิสระ", con: "ระบบเผาผลาญสูงมาก / ต้องกินอาหารแทบจะตลอดเวลา ขาดอาหารเพียง 2 วันจะตายทันที" },
        weapons: [ "ไม่มีอาวุธสำหรับต่อสู้", "เน้นการหลบหนีด้วยการทิ้งตัวลงสู่กิ่งไม้เบื้องล่าง (Gravity Drop Escape)", "การพรางตัวเนียนสนิทไปกับเปลือกไม้ (Crypsis)" ],
        social: "อาศัยเป็นกลุ่มครอบครัวเล็กๆ (3-5 ตัว) สื่อสารกันด้วยกลิ่นและแสงวับๆ จากปลายหาง นอนเรียงซ้อนกันเพื่อพรางตัวให้ดูเหมือนก้อนหินหรือปมไม้ใหญ่บนกิ่ง",
        head: [
            ["ดวงตา", "ตาโตปูดโปน 2 ดวง ม่านตาแบ่งเป็นเหลี่ยมจาง", "ม่านตาสีฟ้าไซอัน (Cyan) แบ่งเป็นเหลี่ยมเล็กจางๆ คล้ายผลึกมากกว่าม่านตากลมเรียบทั่วไป รูม่านตาขยายได้กว้างมาก มองเห็นกว้างถึง 270 องศาเพื่อระวังภัยจากด้านบนและกะระยะกระโดดระหว่างกิ่งไม้"],
            ["จมูก", "ร่องจมูกสั้น", "ไม่เด่นชัด แต่รับกลิ่นพรรณไม้สุกและกลิ่นฟีโรโมนเตือนภัยจากฝูงได้ไว"],
            ["ปาก", "ฟันกรามแบบกรรไกร (Shearing teeth)", "หน้าตาสั้นทู่ มีฟันตัดที่คมกริบสำหรับกัดขั้วเหนียวๆ ของใบไม้เรือนยอดให้ขาดในฉับเดียว"],
            ["หู", "หูยาวปลายมน พับแนบหัวได้", "หมุนได้ 180 องศา ไวต่อเสียงแหวกอากาศของปีก Skyther หากได้ยินเสียงลมเปลี่ยนทิศ จะทิ้งตัวลงล่างทันที"],
            ["EXTRA #1", "ลิ้นยืดหดได้ (Prehensile Tongue)", "ลิ้นเหนียวและยาว ใช้ตวัดดึงใบไม้หรือแมลงขนาดเล็กเข้าปากโดยที่ตัวไม่ต้องขยับออกจากจุดซ่อนตัว"],
            ["EXTRA #2", "พังผืดข้างลำคอ (Gliding Flaps)", "แผ่นหนังบางๆ พับซ่อนอยู่ข้างคอถึงรักแร้ ไม่ได้ใช้บิน แต่ใช้กางเพื่อชะลอความเร็วขณะทิ้งตัวดิ่งลงสู้กิ่งไม้ชั้นล่าง"]
        ],
        body: [
            ["BODY FRAME", "โครงสี่ขาเพรียวบาง", "สรีระคล้ายลีเมอร์ผสมกิ้งก่า กระดูกเบา ลำตัวยืดหยุ่นสูงมาก บิดตัวกลางอากาศได้ 180 องศาเพื่อเปลี่ยนทิศทางตอนร่วง"],
            ["SPINE", "กระดูกสันหลังยืดหยุ่น", "หุ้มด้วยขนหยาบที่เกาะตัวกันเป็นก้อนคล้ายมอสหรือตะไคร่น้ำ ช่วยพรางตัวเมื่อหมอบแนบกับกิ่งไม้"],
            ["TAIL", "หางยาวกว่าลำตัว 1.5 เท่า", "Utility — หางม้วนจับ (Prehensile) หุ้มด้วยเกล็ดกันลื่นด้านล่าง ใช้เกี่ยวพันกิ่งไม้เป็นขาที่ 5 ปลายหางมีต่อมเรืองแสงสีฟ้าใช้แกว่งส่งสัญญาณเตือนภัยในกลุ่ม"]
        ],
        limbs: [
            ["#1", "แขน", "ขาหน้า", "เรียวยาว นิ้วมือ 4 นิ้วกางแยกอิสระ ปลายนิ้วมีโครงสร้างขนขนาดไมครอน (Setae) แบบตุ๊กแก + เล็บตะขอซ่อนได้ ยึดเกาะพื้นผิวลื่นหรือวิ่งตีลังกาใต้ต้นไม้ได้สบาย"],
            ["#2", "ขา", "ขาหลัง", "กล้ามเนื้อต้นขาแน่น ข้อพับสปริงตัวสูง กระโดดไกลได้ถึง 15 เมตรในแรงโน้มถ่วง 0.85G ปลายเท้ามีลักษณะยึดเกาะแบบเดียวกับขาหน้า"]
        ],
        skin: [
            ["แผ่นหลังและหัว", "ขนสั้นหยาบ สากเหมือนเปลือกไม้ มีหย่อมขนที่ลักษณะเหมือนมอสสีเขียวแซม"],
            ["ใต้ท้องและใต้คอ", "หนังเรียบเนียน สีอ่อนกว่าเพื่อลดเงา (Countershading) ไม่ให้เด่นเมื่อมองจากข้างล่าง"],
            ["ฝ่ามือและใต้หาง", "หนังเปลือยเป็นร่องริ้วๆ ลายขวาง เพิ่มแรงเสียดทานสูงสุด"]
        ],
        pattern: "ลายพรางแบบก่อกวน (Disruptive Coloration) เป็นริ้วสีน้ำตาลเข้มสลับอ่อน ไม่สม่ำเสมอ เลียนแบบรอยแตกของเปลือกไม้ยักษ์ในป่า Verath",
        pal: [["สีหลัก", "#6b4f3b"], ["เงา", "#2a1d13"], ["แสง", "#a38c78"], ["เสริม A", "#4a7a52"], ["เสริม B", "#3d5e78"]],
        hl: ["#38bdf8", "ฟ้าไซอันเรืองแสง (Cyan Bioluminescence)"],
        hlAt: "ดวงตาคู่โต · ต่อมกลิ่นที่ปลายหาง (กะพริบเวลาตกใจ) · รอยเส้นเลือดฝอยบนพังผืดคอเวลาย้อนแสง",
        mutationFull: {
            proTitle: "ฝ่าเท้าไมครอนและหางตะขอ / การเคลื่อนที่อิสระ",
            proDesc: "วิวัฒนาการโครงสร้างระดับไมโครที่ปลายนิ้วแบบเดียวกับสัตว์เลื้อยคลาน ทำให้มันวิ่งสวนแรงโน้มถ่วง หรือห้อยหัววิ่งใต้กิ่งไม้ยักษ์ได้สบายๆ เป็นทริคหลักในการหลบหลีกกรงเล็บของ Skyther ที่โฉบมาจากด้านบน",
            conTitle: "ระบบเผาผลาญสูงลิ่ว / ความต้องการอาหารต่อเนื่อง",
            conDesc: "เพื่อให้ร่างกายตอบสนองและกระโดดได้เร็วขนาดนี้ เครื่องยนต์ในร่างกายต้องเดินเครื่องเต็มที่ตลอดเวลา มันจึงต้องกินยอดไม้และน้ำหวานแทบจะทุกชั่วโมงขณะตื่น หากขาดอาหารเกิน 2 วัน มันจะหมดแรงและตายไปเอง"
        },
        dangerDetail: {
            raw: "30 / 200", percent: 15, tier: "ไม่มีพิษภัย (Harmless)",
            factors: ["ความคล่องตัวสูง (+5)", "ฟันกรามคม (+2)"],
            note: "สำหรับมนุษย์หรือนักล่าอื่นๆ Vashli ไม่มีอันตรายใดๆ เลย มันคือขนมขบเคี้ยวที่วิ่งเร็วมากของป่าเรือนยอด อาศัยเพียงความเร็วและการพรางตัวในการเอาชีวิตรอด"
        },
        combat: [
            ["Gravity Drop Escape", "เมื่อถูกจู่โจมจากด้านบน จะไม่กระโดดหนีไปข้างหน้า แต่จะปล่อยมือให้ร่วงดิ่งลงสู่เบื้องล่างทันที แล้วกางพังผืดคอชะลอความเร็วเพื่อไปคว้ากิ่งไม้ในชั้นที่ต่ำกว่า (Drop & Catch)"],
            ["Under-branch Scramble", "เมื่อ Skyther บินโฉบ มันจะพลิกตัวตวัดรัดใต้กิ่งไม้และห้อยหัวซ่อนตัว ปล่อยให้นักล่าโฉบพลาดไปชนเปลือกไม้เปล่าๆ"]
        ],
        notes: [
            ["", "<strong>ระบบนิเวศแห่งเรือนยอด</strong>: ในขณะที่ Luvenn กินแสงอยู่ชั้นล่าง Vashli จะเป็นตัวแต่งกิ่งไม้ ช่วยดึงยอดใบไม้อ่อนไม่ให้ทึบเกินไป ทำให้แสงสามารถส่องทะลุไปถึง Luvenn เบื้องล่างได้"],
            ["warn", "<strong>จุดอ่อนของสัญชาตญาณ</strong>: ตัวเอกในร่าง Luvenn จะคุ้นเคยกับแสงวับๆ สีฟ้าของหาง Vashli ที่ร่วงหล่นลงมาจากฟ้า (เมื่อพวกมันร่วงหล่นหรือพลาดถูกโฉบ) ทำให้บางครั้งตัวเอกเผลอเงยหน้ามองสีฟ้าที่ร่วงลงมา ซึ่งเป็นการเปิดจุดอ่อนให้ Karvos บนพื้นดินเข้าโจมตีได้"]
        ],
        prompt: "A small cat-sized alien canopy browser standing 0.45 meters at the shoulder with a body 0.7 meters long, resembling a hybrid of a lemur, a gecko, and a gazelle, built for a life spent entirely gripping giant tree branches. Its head bears a pair of oversized, slightly bulging eyes with bright glowing cyan irises faintly faceted like cut crystal rather than smoothly round, and wide dilating pupils giving it nearly 270 degrees of vision to watch the sky for aerial threats and judge the distance of a jump, a short unremarkable nasal groove that nonetheless picks up the scent of ripening plants and the pack's alarm pheromone, a short blunt face with sharp shearing teeth built to sever tough leaf stems in a single bite, and long rounded tufted ears that rotate a full 180 degrees and fold flat against the head, exquisitely tuned to the sound of wingbeats cutting the air, triggering an instant drop reflex the moment the wind changes. A long prehensile tongue darts out to snag leaves or small insects without it ever needing to leave its hiding spot, and folded skin flaps lie tucked along its neck and armpits, not built for true flight but for flaring open to slow a controlled fall through the canopy. Its body is a slender, hyper-flexible lemur-and-gecko frame with lightweight bones that can twist a full 180 degrees in midair to reorient itself while falling, and its coarse fur clumps along the spine into moss-like tufts that camouflage it while pressed flat against a branch. Its tail is one and a half times the length of its body, fully prehensile, scaled with non-slip ridges on the underside, wrapping branches to serve as a fifth limb, and tipped with a glowing cyan scent gland that flicks as an alarm signal to the rest of its family group. It has two pairs of limbs: slender forelimbs with four splayed fingers ending in gecko-like micro-setae pads and small retractable hook claws that grip flawlessly even upside-down beneath a branch, and powerful spring-loaded hind legs with the same gripping structure at the feet, capable of launching it up to 15 meters in Ithra's 0.85G gravity. Its back and head are covered in rough, coarse, bark-textured fur patched with moss-green tufts, while its underbelly and underthroat are smooth, pale countershaded skin that reduces its visibility from below, and its palms and the underside of its tail are bare, ridged skin built for maximum grip. Its gecko-like micro-setae feet and hooked prehensile tail let it move freely against gravity, running upside-down beneath branches to defeat Skyther's aerial strikes, at the cost of a metabolism so extreme it must feed almost constantly while awake, collapsing and dying within two days of going without food. Its coloration is a harmonious bark-brown palette, deepened by near-black brown shadows in the recesses and lifted by pale dusty tan highlights along its raised fur, with muted moss-green worked into the tufted patches along its spine and dull slate-blue in the underbelly and joint shadows, and a glowing cyan-blue highlight reserved only for its eyes, the scent gland at its tail tip, and the faint capillary lines of its neck flaps when backlit. It clings to the bark of a massive ancient tree trunk deep in the misty canopy of the Verath mistwood, body pressed flat against the wood, tail coiled around a branch, head turned slightly upward as it watches the sky nervously.\n\nPhotorealistic 3D creature render, cinematic film-VFX quality, standing full-body in its natural habitat environment, three-quarter view, shot with a telephoto lens at eye level, shallow depth of field with softly blurred background foliage, volumetric god rays filtering through mist from above, soft naturalistic backlighting that makes its eyes and tail-tip gland glow from within, hyper-detailed micro-texturing on every hair and surface, subsurface scattering, physically-based rendering, muted natural color grading with deep shadows, 1:1 square composition, subject centered and fully visible from head to feet, no readable text."
});
