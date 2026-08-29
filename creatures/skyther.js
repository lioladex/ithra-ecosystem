/* ITH-201-330 — Skyther (ALIVE) */
creaturesData.push({
        id: "ITH-201-330", name: "Skyther", status: "ALIVE", era: "ยุคป่าหมอก (Mistwood Era)",
        imageKey: "SKYTHER", color: "#fcd34d",
        category: "นักล่าและผู้กินซากชั้นเรือนยอด (Apex aerial scavenger-predator)", 
        habitat: "ป่าหมอกชั้นเรือนยอด (Verath, The Inner Canopy)",
        foodChain: "ผู้ล่าระดับสูงสุดทางอากาศ — โฉบกิน Luvenn วัยอ่อน และขโมยซากเหยื่อจาก Karvos",
        danger: "65% (Highly Lethal)", size: "ระดับ 5 — ใหญ่ (ปีกกว้างเท่าเครื่องบินเล็ก)", 
        height: "2.2 ม. (เวลายืน) · ปีกกางกว้าง 8.5 ม.", weight: "140 กก. (เบาผิดปกติ)",
        desc: "เจ้าเวหาแห่งป่าหมอก ร่อนตรวจการณ์เหนือเรือนยอดได้นานหลายวันโดยแทบไม่กระพือปีก อาศัยกระแสลมร้อนที่ลอยขึ้นจากหมอกเบื้องล่าง สายตาคมกริบมองเห็นรอยเลือดจากความสูง 2 กิโลเมตร มักโฉบลงมาขโมยซากหรือจับเหยื่อขนาดเล็กบินขึ้นไปทิ้งดิ่งลงมาให้กระดูกแหลก",
        mutation: { pro: "โครงกระดูกกลวงแบบรังผึ้ง น้ำหนักเบาหวิวแต่รับแรงต้านลมได้มหาศาล", con: "เปราะบางอย่างรุนแรง หากถูกตบหรือกระแทกบนพื้นดิน กระดูกจะหักทันที" },
        weapons: [ "จะงอยปากตะขอคมกริบ (ฉีกหนังหนาได้ในครั้งเดียว)", "กรงเล็บเท้าแบบล็อกอัตโนมัติ (Zygodactyl) แรงบีบ 800 psi", "ทิ้งดิ่งเหยื่อจากความสูง 200 เมตร" ],
        social: "หวงถิ่นรุนแรง ล่าเดี่ยวเป็นหลัก อาณาเขตครอบคลุมเรือนยอดกว่า 100 ตร.กม. จะรวมฝูงชั่วคราว (3-5 ตัว) เฉพาะตอนเจอซากสัตว์ขนาดใหญ่ (เช่น ซาก Vorthak ในอดีต)",
        head: [
            ["ดวงตา", "4 ดวง (คู่หน้า + คู่ล่าง)", "คู่หน้าเป็นตานักล่ามองไกลสามมิติ คู่ล่างเล็กกว่าชี้ลงพื้นเพื่อตรวจจับความเคลื่อนไหวผ่านละอองหมอกใต้ท้องขณะบิน ม่านตาสีทองสว่าง"],
            ["จมูก", "ร่องจมูกแบบปิดได้", "มีแผ่นหนังปิดโพรงจมูกอัตโนมัติเมื่อบินด้วยความเร็วสูงหรือปะทะลมหนาวชั้นบรรยากาศชั้นบน"],
            ["ปาก", "จะงอยปากตะขอกระดูก", "ไร้ฟัน ขอบปากเป็นหยักฟันเลื่อยคมกริบแบบมีดหั่นเนื้อ ออกแบบมาเพื่อฉีกทึ้งหนังและเอ็นเหนียวๆ ของซากสัตว์โดยเฉพาะ อ้าได้กว้างเพื่อกลืนกระดูกชิ้นเล็ก"],
            ["หู", "ช่องหูภายใน (Aerodynamic)", "ไม่มีใบหูต้านลม แต่มีโครงสร้างสะท้อนเสียงในกะโหลกที่ไวต่อความถี่ของ 'เสียงร้องเจ็บปวด' ของสัตว์ที่กำลังจะตาย"],
            ["EXTRA #1", "หงอนรับแสง (Solar-sail Crest)", "แผ่นพังผืดกางได้หลังหัว มีหลอดเลือดดำแตกแขนงเป็นลายไม่สมมาตรคล้ายรอยแตกของแร่ผลึกมากกว่าเส้นเลือดสัตว์ทั่วไป ใช้กางรับแดดจาก Ashvel เพื่ออุ่นเลือดไปเลี้ยงสมองอย่างรวดเร็วหลังจากการบินในที่สูงที่หนาวเหน็บ"],
            ["EXTRA #2", "ถุงลมใต้คอ (Gular Pouch)", "ถุงหนังยืดหยุ่นได้เหมือนนกกระทุง ใช้เก็บก้อนเนื้อเพื่อนำกลับไปเลี้ยงลูก หรือสำรอกกรดเข้มข้นใส่ศัตรูเมื่อถูกต้อนจนมุม"]
        ],
        body: [
            ["BODY FRAME", "โครงสร้าง 6 ขาแบบไวเวิร์น", "อกลึกและกระดูกอก (Keel) ใหญ่มหาศาลเพื่อยึดกล้ามเนื้อปีก เอวคอดเล็ก ลำตัวเพรียวลู่ลมสุดขีด"],
            ["SPINE", "สันกระดูกมีช่องระบายอากาศ", "มีช่อง (Spiracles) เล็กๆ ตามแนวสันหลัง เชื่อมต่อกับถุงลมในร่างกาย ช่วยดึงออกซิเจนเข้าสู่กล้ามเนื้อโดยตรงระหว่างบิน"],
            ["TAIL", "หางยาวปลายหางรูปว่าว", "หางแข็งตึง ปลายหางมีแผ่นหนังรูปข้าวหลามตัด ทำหน้าที่เป็นหางเสือ (Rudder) รักษาความเสถียรเมื่อต้องบินโฉบในกระแสลมแปรปรวน"]
        ],
        limbs: [
            ["#1", "ปีก", "ระยางค์คู่หน้าสุด", "ปีกหนังขนาดมหึมา (กาง 8.5 ม.) ค้ำยันด้วยนิ้วยาว 3 นิ้ว ไม่มีขนนก ผิวปีกมีเกล็ดขนาดไมครอนช่วยลดแรงเสียดทาน นิ้วโป้งมีตะขอแหลมสำหรับเกี่ยวปีนป่ายเรือนยอดไม้"],
            ["#2", "แขน", "ระยางค์คู่กลาง", "แขนสั้นขนาดเล็กแต่มีกล้ามเนื้อแน่น ปลายเป็นกรงเล็บ 3 นิ้ว ทำหน้าที่ยึดจับซากเหยื่อให้อยู่กับที่ในขณะที่จะงอยปากออกแรงดึงทึ้ง"],
            ["#3", "ขา", "ระยางค์คู่หลังสุด", "ขายาวแข็งแรง ปลายเท้าแบบ Zygodactyl (นิ้วชี้หน้า 2 หลัง 2) ล็อกติดกับกิ่งไม้ใหญ่ได้เหนียวแน่นแม้ตอนนอนหลับ และใช้โฉบจับเหยื่อกลางอากาศ"]
        ],
        skin: [
            ["ปีกและหลัง", "หนังเรียบตึง เกล็ดขนาดไมครอน (Dermal denticles) คล้ายฉลาม มีประกายเหลือบรุ้งจางๆ เมื่อกระทบแสง ลดเสียงลมปะทะ ทำให้บินเงียบกริบ ประกายเหลือบเกิดจากโครงสร้างเกล็ดไมครอนซ้อนชั้นแบบเดียวกับหินแร่ตัดเจียระไนมากกว่าเกล็ดสัตว์เลื้อยคลานทั่วไป"],
            ["ใต้ท้องและลำคอ", "หนังหนาเหนียวมีรอยย่น ปกป้องอวัยวะภายในจากการถูกกิ่งไม้ขูดขีดขณะโฉบลงมาในป่าชั้นกลาง"],
            ["ขาและแขน", "หุ้มด้วยเกล็ดแข็งแผ่นใหญ่แบบสัตว์เลื้อยคลาน ป้องกันการถูกเหยื่อแว้งกัด"]
        ],
        pattern: "การพรางตัวแบบ Countershading: หลังปีกสีน้ำเงินเข้มอมเทา (กลืนกับสียอดไม้เมื่อมองจากด้านบน) ใต้ท้องและใต้ปีกสีฟ้าอ่อนปนขาว (กลืนกับสีท้องฟ้าและแสงกระจายเมื่อมองจากด้านล่าง)",
        pal: [["สีหลัก", "#2a4b5c"], ["เงา", "#11222b"], ["แสง", "#6a8a9c"], ["เสริม A", "#5c3a2a"], ["เสริม B", "#5c2a3a"]],
        hl: ["#fcd34d", "เหลืองทองแสงอาทิตย์ (Sun-gold)"],
        hlAt: "ดวงตาทั้ง 4 ดวง · เส้นเลือดแตกแขนงไม่สมมาตรในหงอนรับแสงเมื่อกางออก · ขอบรอยหยักของจะงอยปาก · ประกายเหลือบรุ้งบนเกล็ดปีกเมื่อกระทบแสง",
        mutationFull: {
            proTitle: "กระดูกรังผึ้ง / การร่อนในกระแสลมร้อน",
            proDesc: "วิวัฒนาการกระดูกให้กลวงและมีโครงตาข่ายภายในแบบสมบูรณ์แบบ ทำให้น้ำหนักตัวเบาจนสามารถกางปีกร่อนไปตามกระแสลมร้อน (Thermals) ที่ลอยขึ้นจากป่าหมอกได้ตลอดทั้งวันโดยแทบไม่ใช้พลังงาน",
            conTitle: "ความหนาแน่นมวล / ความเปราะบางบนพื้นดิน",
            conDesc: "เพื่อให้ร่อนได้ กระดูกจึงสูญเสียความหนาแน่นไปเกือบหมด หากมันพลาดตกลงพื้นดิน หรือถูกสัตว์กินเนื้อภาคพื้นดิน (เช่น Karvos) ตะปบเพียงครั้งเดียว กระดูกมันจะหักร้าวทันที มันจึงหลีกเลี่ยงพื้นดินประดุจลาวาเดือด"
        },
        dangerDetail: {
            raw: "130 / 200", percent: 65, tier: "อันตรายสูง (Highly Lethal)",
            factors: ["ขนาดปีกและกรงเล็บ (+8)", "โฉบจับทิ้งดิ่งจากที่สูง (+9)", "โจมตีจากมุมอับสายตา (+9)"],
            note: "ระดับความอันตรายพุ่งสูงปรี๊ดเมื่อคุณอยู่บนพื้นที่เปิดโล่งหรือบนเรือนยอดไม้ แต่จะลดลงเหลือ 0 ทันทีหากคุณหลบอยู่ใต้พุ่มไม้ทึบ หรือบังคับให้มันต้องสู้บนพื้นดิน"
        },
        combat: [
            ["Gravity Drop", "โฉบจับเหยื่อขนาดกลาง (เช่น Vashli หรือ Luvenn วัยอ่อน) บินทะยานขึ้นฟ้า แล้วปล่อยทิ้งลงมากระแทกหินหรือกิ่งไม้ใหญ่ให้ตายก่อนลงมากิน"],
            ["Acid Regurgitation", "หากถูกศัตรูรุมล้อม มันจะสำรอกน้ำย่อยกรดเข้มข้นที่กำลังย่อยซากสัตว์ในถุงลมออกมาสาดใส่หน้าศัตรู เพื่อซื้อเวลาให้ตัวเองกระพือปีกหนี"],
            ["Thief's Swoop", "รอดูนกนักล่าหรือสัตว์อื่นล่าเหยื่อจนเสร็จ จากนั้นโฉบลงมาด้วยความเร็วสูง ใช้เสียงกระพือปีกและขนาดตัวข่มขู่ให้ผู้ล่าเดิมตกใจผละออก แล้วขโมยซากนั้นไป"]
        ],
        notes: [
            ["", "<strong>โจรแห่งป่าหมอก</strong> ฝูง Karvos เกลียดชัง Skyther เป็นอย่างมาก เพราะหลายครั้งที่ Karvos ไล่ต้อนเหยื่อจนเหนื่อยหอบและเพิ่งล้มเหยื่อได้ Skyther จะโฉบลงมาจากฟ้าและคีบซากนั้นบินหนีไปต่อหน้าต่อตา"],
            ["warn", "<strong>เงามัจจุราชของ Luvenn</strong> ในร่างของ Luvenn (ตัวเอก) แม้ว่าจะระแวง Karvos บนพื้นป่า แต่สัญชาตญาณความกลัวที่ฝังลึกที่สุดเมื่ออยู่ใต้ช่องว่างของเรือนยอดไม้ คือเงาขนาดมหึมาที่พาดผ่านพื้นดิน สัญชาตญาณ Luvenn จะสั่งให้ 'ยืนนิ่งและหยุดหายใจ' ทันทีเมื่อเห็นเงาของ Skyther"]
        ],
        prompt: "A massive alien wyvern-like aerial apex predator-scavenger standing 2.2 meters tall with its wings folded, boasting an immense 8.5-meter wingspan when fully spread, deceptively light-framed with a deep keeled chest and a fully honeycombed hollow skeleton built for endless soaring. Its head bears four glowing sun-gold eyes: a forward-facing binocular pair for hunting from great height and a smaller downward-facing pair beneath them for scanning movement through the fog below, a sealed nostril groove that closes shut during high-speed dives or in the freezing upper air, and a toothless hooked bone beak with serrated blade-like edges built for tearing thick hide and tough sinew, gaping wide enough to swallow small bones whole. Its ears are internal aerodynamic sound-channels tuned to the frequency of a dying animal's cry rather than external flaps. A translucent solar-sail crest webbed with asymmetric, irregularly branching blood vessels — tracing more like mineral fracture lines than an animal's veins — flares from the back of its skull to catch sunlight and rapidly rewarm its blood after flights through bitterly cold high air, and an elastic gular throat pouch hangs beneath its chin, used to carry meat back to its young or to regurgitate concentrated digestive acid at any attacker that corners it. Its six-limbed body has a deep-keeled aerodynamic frame with tiny spiracle vents running along the spine that feed air directly into its flight muscles, tapering to a stiff tail ending in a diamond-shaped kite of skin that acts as a rudder in turbulent wind. It has three limb pairs: immense leathery wings spanning 8.5 meters, braced by three long fingers and a hooked thumb-talon for climbing canopy trunks; short but densely muscled grasping arms with three talons for pinning carrion in place while the beak tears; and long powerful legs ending in zygodactyl raptor feet that lock rigid onto branches even while asleep and snatch prey clean out of midair. Its wings and back are sheathed in taut, shark-like micro-scaled skin with a faint gem-like iridescent sheen when it catches direct light, structured in overlapping layers like cut mineral facets rather than ordinary scales, that silences the sound of air over its body, while its throat and underbelly are thick creased hide protecting its organs from canopy branches, and its arms and legs are armored in large reptilian scutes against a struggling prey's bite. Countershading splits its body cleanly: deep slate-blue-grey above to vanish against the canopy from a hunter's-eye view, pale fog-blue below to vanish against the sky from beneath. Its hollow honeycombed skeleton lets it ride thermal updrafts for days without a single wingbeat, at the cost of shattering instantly the moment it is struck or forced down onto solid ground. Its coloration is a harmonious cool slate-blue palette, deepened by near-black blue-grey shadows in the recesses and lifted by pale sky-blue highlights along the wing membranes, with rust-brown tones worked into the leg and arm-joint scales and dull crimson streaked along the wing membrane edges, and a glowing sun-gold highlight reserved only for its four eyes, the veins of its solar-sail crest and the serrated edge of its beak. It perches on a massive moss-covered branch high in the misty canopy of an alien fog-forest, wings held half-spread in a threatening display, crest flared, looking down over the drifting mist below.\n\nPhotorealistic 3D creature render, cinematic film-VFX quality, perched full-body in its natural canopy habitat, three-quarter view, shot with a telephoto lens at eye level, shallow depth of field with softly blurred background canopy and mist, volumetric god rays filtering through the fog behind it, soft naturalistic backlighting that makes the translucent crest and wing membranes glow from within, hyper-detailed micro-texturing on every scale and surface, subsurface scattering, physically-based rendering, muted natural color grading with deep shadows, 1:1 square composition, subject centered and fully visible from head to feet, no readable text."
});
