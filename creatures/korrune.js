/* ITH-205-001 — Korrune (ALIVE) */
creaturesData.push({
        id: "ITH-205-001", name: "Korrune", status: "ALIVE", era: "ยุคป่าหมอก (Mistwood Era)",
        imageKey: "KORRUNE", color: "#eef4f8",
        category: "ผู้ล่าสูงสุดแห่งยุคป่าหมอก (Mistwood Apex Predator, ambush-stalker)",
        habitat: "เคลื่อนย้ายข้ามทุกชั้นของทวีป Verath ไม่ยึดอาณาเขตตายตัว",
        foodChain: "ยอดสุดของห่วงโซ่อาหารในยุคปัจจุบัน — ล่าได้แม้กระทั่งฝูง Karvos เต็มฝูง",
        danger: "92% (Apex Predator)", size: "ระดับ 6 — ใหญ่มาก (ใหญ่กว่า Karvos มาก แต่เล็กกว่า Vorthak)", height: "2.4 ม. ที่ไหล่ · 4.6 ม. ยาวรวมหาง", weight: "2,100 กก.",
        desc: "นักล่าเดี่ยวที่หายากที่สุดในป่าหมอก พบเห็นได้น้อยมากเพราะประชากรต่ำและครองอาณาเขตกว้างมหาศาล ไม่มีสัตว์ชนิดใดในยุคปัจจุบันไล่ล่ามันได้ แม้แต่ฝูง Karvos ยังต้องหลบหนีเมื่อกลิ่นของมันลอยมาตามลม เชื่อกันว่าสืบเชื้อสายมาจากสัตว์กลุ่มเดียวกับที่รอดจากฤดูหนาวใหญ่ในยุคหมุนเวียน สายเลือดเดียวกับ Frostmane",
        mutation: { pro: "ต่อมกลิ่นเตือนภัยสัญชาตญาณ + ขนกันเสียงเงียบกริบ / ล่าแบบซุ่มเงียบที่แทบไม่มีใครหนีทัน", con: "อัตราสืบพันธุ์ต่ำมาก ต้องการอาณาเขตกว้างมหาศาลต่อตัว / ประชากรทั้งทวีปเหลือน้อยจนเสี่ยงสูญพันธุ์ตลอดเวลา" },
        weapons: [ "เขี้ยวยาวคู่หน้าแบบเซเบอร์ทูธ (กัดจุดตายครั้งเดียวจบ)", "กรงเล็บหดได้แบบแมวใหญ่", "ต่อมกลิ่นเตือนภัยที่สัตว์อื่นจดจำได้โดยสัญชาตญาณ", "ขนกันเสียงเคลื่อนไหวได้เงียบสนิท" ],
        social: "ล่าเดี่ยวโดยสมบูรณ์ ครองอาณาเขตกว้างกว่า 800 ตร.กม./ตัว หลีกเลี่ยงกันเองด้วยกลิ่นทำเครื่องหมาย พบคู่ผสมพันธุ์ได้ยากมาก อายุขัยยาวนาน ~120-150 ปี",
        head: [
            ["ดวงตา", "ตาคู่หน้าโตกลม ม่านตาเงินเทา", "รูม่านตาขยายกว้างสุดขั้ว มองเห็นในหมอกทึบยามค่ำคืนได้ดีเยี่ยม มีชั้นสะท้อนแสง (Tapetum) ทำให้ดวงตาเรืองแสงซีดจางเหมือนผีเวลาสะท้อนแสงน้อยนิด"],
            ["จมูก", "จมูกยาวไวต่อกลิ่นสุดขั้ว", "ดมกลิ่นฝูง Karvos ได้ไกลเป็นกิโลเมตรก่อนเห็นตัว เป็นเหตุผลที่ฝูง Karvos มักหนีไปก่อนที่จะเจอหน้ากันจริงๆ"],
            ["ปาก", "เขี้ยวยาวคู่หน้าแบบเซเบอร์ทูธ", "ยาวโค้งคมกริบ ออกแบบมาเพื่อกัดจุดตายเพียงครั้งเดียวให้จบ ไม่ใช่กัดฉีกยื้อแย่งแบบนักล่าฝูง ฟันกรามด้านในบางแต่คมสำหรับตัดเนื้อหลังเหยื่อหยุดนิ่งแล้ว"],
            ["หู", "หูใหญ่หมุนได้อิสระ พับแนบหัวได้", "พับแนบเมื่อย่องเข้าหาเหยื่อเพื่อลดพื้นที่หน้าตัดและเงาที่เหยื่ออาจสังเกตเห็น กางเต็มที่เพื่อฟังเสียงลมหายใจเหยื่อในระยะไกล"],
            ["EXTRA #1", "ต่อมกลิ่นเตือนภัยข้างขากรรไกร", "ปล่อยกลิ่นเฉพาะตัวที่สัตว์แทบทุกชนิดในป่าหมอกจดจำและหวาดกลัวได้โดยสัญชาตญาณโดยไม่ต้องเคยเจอตัวมันมาก่อน — เป็นกลไกที่ทำให้ฝูง Karvos ทั้งฝูงหนีได้โดยไม่ต้องเห็นตัว"],
            ["EXTRA #2", "ขนกันเสียงรอบตัวพร้อมเส้นเลือดเรืองแสงใต้ผิว (Silent-fur)", "ขนละเอียดเป็นพิเศษดูดซับเสียงการเคลื่อนไหว คล้ายขนนกฮูก ทำให้เดินย่องผ่านพุ่มไม้และโคลนได้แทบไม่มีเสียงแม้จะมีมวลกายกว่าสองตัน ใต้ขนมีร่างแหเส้นเลือดฝอยเรืองแสงจางสีขาวอมฟ้าพาดทั่วตัว ปกติมองไม่เห็นเลย แต่จะเรืองสว่างขึ้นเป็นเสี้ยววินาทีก่อนพุ่งกระโจนโจมตี — เหยื่อที่สังเกตทันจะเห็นแค่แสงจางวาบขึ้นในความมืดก่อนถูกงับ"]
        ],
        body: [
            ["BODY FRAME", "โครงแมวใหญ่ยืดยาวล่ำสัน", "อกลึก หลังยืดหยุ่นสูง สร้างมาเพื่อหมอบคลานต่ำและพุ่งกระโจนระยะสั้นด้วยแรงระเบิด ไม่ใช่ไล่ล่าทางไกลแบบ Karvos"],
            ["SPINE", "กระดูกสันหลังยืดหยุ่นสูงมาก", "โค้งงอได้มากกว่าสัตว์ล่าเนื้อทั่วไป ช่วยให้หมอบตัวแนบพื้นได้แทบราบและกระโจนจากที่สูงหรือพื้นราบได้ระยะไกลผิดปกติ"],
            ["TAIL", "หางแยกสองแฉกคล้ายหนวดที่ปลายท่อนสุดท้าย เห็นรอยแยกชัดเจนตลอดเวลา", "Utility — สองในสามแรกเป็นหางหนาปกติ แต่ท่อนสุดท้ายแยกออกเป็นสองแขนงเรียวคล้ายหนวดที่ขยับได้อิสระจากกัน เห็นเป็นสองเส้นแยกกันชัดเจนตลอดเวลาเหมือนลิ้นงู ใช้ถ่วงสมดุลขณะกระโจนโจมตีหรือเปลี่ยนทิศกลางอากาศกะทันหัน ทั้งสองแขนงแนบชิดกันและแทบไม่ขยับเวลาซุ่มเพื่อไม่ให้เผยตำแหน่ง แต่จะสะบัดแยกออกจากกันเต็มที่ในจังหวะสุดท้ายก่อนตะปบเพื่อรบกวนการกะระยะของเหยื่อ"]
        ],
        limbs: [
            ["#1", "ขา", "ขาหน้า", "ล่ำแข็งแรง อุ้งเท้าใหญ่แผ่กระจายน้ำหนักบนโคลนอ่อนไม่ให้จม กรงเล็บหดเก็บได้สนิทเวลาย่องเพื่อไม่ให้เกิดเสียง กางออกเต็มที่เฉพาะจังหวะตะปบสุดท้าย"],
            ["#2", "ขา", "ขาหลัง", "กล้ามเนื้อสะโพกมหาศาล ให้แรงระเบิดกระโจนจากจุดหยุดนิ่งสนิทไปสู่ความเร็วเต็มที่ได้ในเสี้ยววินาที — ท่าล่าหลักของมันคือรอไม่ไล่"]
        ],
        skin: [
            ["ลำตัว/ขา", "ขนสั้นแน่นสีเทาเข้มถึงดำสนิท ดูดกลืนแสงสูง แทบไม่สะท้อนแสงเลย ทำให้กลืนไปกับเงาและหมอกทึบจนแยกไม่ออกจากความมืดรอบตัวจนกว่าจะขยับ"],
            ["ใบหน้า/ต่อมกลิ่น", "หนังเปลือยเรียบรอบจมูกและต่อมกลิ่น ไม่มีขนบังเพื่อไม่ให้กลิ่นเตือนภัยที่ปล่อยออกมาติดค้างในขนตัวเอง"],
            ["อุ้งเท้า", "แผ่นรองเท้าหนานุ่มพิเศษ ดูดซับแรงกระแทกและเสียงฝีเท้าได้เกือบสมบูรณ์แม้ตอนลงน้ำหนักเต็มตัว"]
        ],
        pattern: "ลายควันจางๆ สีเทาเข้มไล่ระดับไม่สม่ำเสมอทั่วตัว คล้ายเงาหมอกที่พัดผ่าน ทำให้ขอบลำตัวดูพร่าเลือนกลืนกับพื้นหลังแม้อยู่ในระยะใกล้ ซ้อนทับด้วยร่างแหเส้นเลือดเรืองแสงจางใต้ผิวที่ปกติมองไม่เห็นเลยจนกว่าจะเรืองสว่างขึ้นชั่วขณะก่อนโจมตี นี่คือเหตุผลที่มันถูกเรียกกันว่า \"ผีแห่งป่าหมอก\"",
        pal: [["สีหลัก", "#3a3d42"], ["เงา", "#131518"], ["แสง", "#9aa4ac"], ["เสริม A", "#4a5258"], ["เสริม B", "#383a52"]],
        hl: ["#eef4f8", "ขาวอมฟ้าซีดเหมือนแสงผี"],
        hlAt: "ดวงตาคู่ที่เรืองแสงซีดลอยอยู่ในความมืดก่อนเห็นตัวจริง · ไอลมหายใจในอากาศเย็นของหมอก · ขอบเขี้ยวเซเบอร์ทูธเป็นมันวาว · ร่างแหเส้นเลือดใต้ผิวที่เรืองวาบก่อนโจมตี · ปลายหางแยกแฉกคล้ายหนวดที่สะบัดในจังหวะสุดท้าย",
        mutationFull: {
            proTitle: "ต่อมกลิ่น + ขนกันเสียง / การล่าแบบซุ่มเงียบสมบูรณ์แบบ",
            proDesc: "ต่อมกลิ่นเตือนภัยที่สัตว์อื่นจดจำได้โดยสัญชาตญาณ บวกกับขนกันเสียงที่ทำให้เคลื่อนไหวเงียบสนิทแม้มีมวลกายมหาศาล ทำให้มันครองตำแหน่งนักล่าที่ไม่มีใครในป่าหมอกกล้าท้าทาย แทบไม่ต้องต่อสู้เลยเพราะเหยื่อและคู่แข่งหนีไปก่อนที่จะเจอตัว",
            conTitle: "ระบบสืบพันธุ์ / ขนาดประชากร",
            conDesc: "ต้องการอาณาเขตกว้างมหาศาลต่อตัวเพื่อหาอาหารพอเลี้ยงร่างกายขนาดนี้ อัตราสืบพันธุ์ต่ำมากและใช้เวลานานหลายปีกว่าจะโตเต็มวัย ทำให้ประชากรทั้งทวีปเหลือน้อยมากตลอดเวลา นักล่าที่แข็งแกร่งที่สุดในยุคปัจจุบันจึงกลับเป็นสายพันธุ์ที่เปราะบางที่สุดต่อการสูญพันธุ์"
        },
        dangerDetail: {
            raw: "184 / 200", percent: 92, tier: "จ้าวป่า (Apex Predator)",
            factors: ["เขี้ยวเซเบอร์ทูธกัดจุดตายเดียวจบ (+10)", "ล่องหนด้วยกลิ่นกันภัย+ขนกันเสียง (+10)", "กระโจนระเบิดแรงจากจุดหยุดนิ่ง (+9)", "ขนาดตัวระดับ 6 (+9)"],
            note: "คะแนนอันตรายสูงที่สุดในบันทึกยุคป่าหมอกทั้งหมด สูงกว่า Karvos ทั้งฝูงและเทียบเท่าระดับที่ Vorthak เคยครองในยุคหมุนเวียน ต่างกันตรงที่ Korrune ไม่จำเป็นต้องอวดแสนยานุภาพเลย เพราะแทบไม่มีใครเคยเห็นมันมาก่อนที่จะตาย"
        },
        combat: [
            ["ซุ่มเงียบสมบูรณ์ (Perfect Stalk)", "ใช้ขนกันเสียงและสีลำตัวกลืนหมอกย่องเข้าใกล้เหยื่อในระยะไม่กี่เมตรโดยไม่ถูกสังเกตเลย ก่อนพุ่งกระโจนระเบิดแรงเพียงครั้งเดียว"],
            ["กัดจุดตาย (One-Bite Kill)", "ใช้เขี้ยวเซเบอร์ทูธกัดจุดสำคัญเพียงครั้งเดียวให้เหยื่อหยุดนิ่งทันที ไม่ยื้อยุดต่อสู้ยืดเยื้อเหมือนนักล่าฝูง"],
            ["ประกาศเขตด้วยกลิ่น (Scent Warning)", "ทำเครื่องหมายกลิ่นตามอาณาเขตเป็นระยะ สัตว์ส่วนใหญ่ที่ผ่านมาเจอกลิ่นนี้จะเปลี่ยนเส้นทางทันทีโดยไม่รอพิสูจน์"]
        ],
        abilities: [
            {
                name: "การเคลื่อนไหวไร้เสียงสมบูรณ์", type: "Concealment — การเคลื่อนไหวไร้เสียง",
                desc: "ขนดูดกลืนเสียงและแสงจนตัวขนาดใหญ่กว่าฝูง Karvos ทั้งฝูงรวมกันเคลื่อนผ่านใบไม้แห้งได้โดยไม่มีแม้แต่ใบเดียวส่งเสียง แม้ตอนเดินจากไปหลังกินอิ่มก็ยังคงเงียบสนิทเหมือนเดิมทุกก้าว",
                origin: "เพื่อรักษาตำแหน่งจ้าวป่าไว้โดยแทบไม่ต้องต่อสู้เลย ความเงียบสัมบูรณ์กลายเป็นอาวุธหลักมากกว่าเขี้ยวหรือกรงเล็บ เพราะเหยื่อที่ไม่มีทางรู้ล่วงหน้าว่ากำลังถูกจับตามองอยู่ไม่มีโอกาสได้เตรียมตัวหนีเลยสักครั้ง"
            },
            {
                name: "การเลือกเป้าหมายอย่างจงใจ", type: "Cognitive — การประเมินเป้าหมาย",
                desc: "เลือกจู่โจมตัวที่ทำหน้าที่ประสานงานฝูงโดยเฉพาะแทนที่จะเป็นตัวที่ใกล้หรือเล็กที่สุด และประเมินภัยรอบตัวได้แม่นยำพอจะจ้องสบตาสิ่งที่บินวนอยู่เหนือหัวอยู่หลายวินาทีก่อนตัดสินใจว่าไม่ใช่ภัยคุกคามแล้วกลับไปกินต่อโดยไม่สนใจอีกเลย",
                origin: "นักล่าซุ่มทั่วไปมักตอบสนองต่อสิ่งที่ใกล้ที่สุดหรือเคลื่อนไหวชัดที่สุด แต่ Korrune แทบไม่มีคู่แข่งหรือภัยคุกคามใดๆ ในป่าหมอกเลย พฤติกรรมประเมินเป้าหมายก่อนตัดสินใจจึงมีที่ว่างให้พัฒนาได้เต็มที่ ไม่ต้องรีบตอบสนองแบบสัญชาตญาณดิบเหมือนนักล่าที่ยังมีคู่แข่ง"
            }
        ],
        notes: [
            ["warn", "<strong>ช่องว่างของห่วงโซ่อาหารที่เพิ่งอุดได้</strong> ก่อนหน้านี้ Karvos เป็นนักล่าที่มีคะแนน Danger สูงสุดในยุคปัจจุบันเพียงระดับ \"Dangerous\" (48%) เท่านั้น ไม่ใช่ Apex ตัวจริง Korrune คือคำตอบของตำแหน่งยอดห่วงโซ่ที่ระบบนิเวศยุคป่าหมอกยังขาดอยู่"],
            ["", "<strong>สายเลือดผู้รอดชีวิต</strong> เชื่อกันว่า Korrune สืบเชื้อสายมาจากกลุ่มสัตว์มีขนหนาชนิดเดียวกับที่รอดพ้นฤดูหนาวใหญ่ในยุคหมุนเวียน สายเลือดเดียวกับ <em style='color:var(--accent-default)'>Frostmane</em> แห่งทวีป Kessara แต่วิวัฒนาการไปคนละทิศทางเมื่อกลับมาสู่ป่าที่อบอุ่นชื้นแฉะ"],
            ["", "ลักษณะที่ตั้งใจไว้เบื้องต้น: หายากมาก ล่าเดี่ยว ครองอาณาเขตกว้าง มีกลิ่นเตือนภัยที่สัตว์อื่นจดจำได้โดยสัญชาตญาณ ออกแบบระบบ Slot เต็มรูปแบบแล้ว"]
        ],
        prompt: "An extremely alien apex predator standing 2.4 meters at the shoulder, its overall silhouette echoing a massive big cat but its details reading as unmistakably otherworldly, built entirely for a perfect, silent stalk rather than a prolonged chase or a brute-force collision. Its head bears a pair of large round eyes with pale silver-grey irises and hugely dilated pupils, backed by a reflective tapetum that makes them glow faintly like ghost-lights in near-total darkness, a long nose extraordinarily sensitive to scent, able to detect a rival pack's trail from over a kilometer away long before any visual contact, and a mouth armed with a pair of long curved saber-like canine fangs built for a single precise killing bite, backed by thin sharp molars for cutting once prey has gone still. Its large ears rotate independently and fold flat against its skull when stalking to minimize its silhouette. A scent gland beside its jaw constantly releases a distinct warning musk that nearly every animal in the mistwood instinctively recognizes and fears without ever having encountered the creature itself, and its entire coat is made of unusually fine sound-dampening fur, similar in function to an owl's silent feathers, beneath which a faint network of pale white-blue bioluminescent capillaries runs across its whole body, normally completely invisible and only flaring into a ghostly glow for a split second right before it strikes. Its body is an elongated, powerfully muscled frame with a deep chest and an extraordinarily flexible spine that lets it flatten almost to the ground while stalking and launch explosive leaps from a dead stop across unusual distances. Its long thick tail trails behind it for roughly two-thirds of its length before visibly forking into two distinct, slender, independently mobile whip-like branches for its final third, the split clearly visible at all times like a snake's tongue rather than a single tapered tip, each branch resembling a fleshy tentacle more than fur-tipped hair; the two branches stay close together and nearly motionless while stalking so as not to betray its position, then flick fully apart from one another in the final instant before a strike to throw off its prey's sense of distance. It has two pairs of legs: powerful forelegs with broad paws that spread its weight across soft mud without sinking, retractable claws kept fully sheathed while stalking and bared only in the final strike, and immensely muscled hind legs that store the explosive force needed to go from complete stillness to full speed in a fraction of a second. Its body and legs are covered in short, dense, light-absorbing fur in near-black charcoal grey that reflects almost no light, letting it dissolve into shadow and thick fog until the instant it moves, while the skin around its nose and scent glands is left bare so its warning musk does not linger trapped in its own fur, and its paw pads are unusually thick and soft, absorbing the sound and shock of even a full stride. Faint, uneven smoke-grey striations drift across its entire coat like passing shadows of fog, overlaid with the barely visible tracery of its subdermal vein network, blurring its outline even at close range — the reason it is known as the ghost of the mistwood. Its scent gland and silencing, vein-lit fur let it stalk so completely undetected that it rarely needs to fight at all, at the cost of demanding an enormous solitary territory and breeding so rarely that its entire population remains critically small at all times. Its coloration is a harmonious charcoal-slate palette, deepened by near-black shadows in the recesses and lifted by pale ash-grey highlights along its flanks, with cool muted blue-grey worked into its shoulders and deep indigo-grey in the joint shadows, and a faint pale white-blue highlight reserved only for the ghostly glow of its eyes in darkness, the flaring capillary network beneath its fur, the tentacle-like split of its tail-tip, and the polished edge of its saber fangs. It stands utterly still in the deep mist between towering moss-covered trees of the Verath mistwood, ears half-flattened, its tail's twin tentacle-like branches clearly visible trailing behind it, faint veins glowing beneath its coat as it closes the final distance to its prey without a single sound.\n\nPhotorealistic 3D creature render, cinematic film-VFX quality, standing full-body in its natural habitat environment, three-quarter view, shot with a telephoto lens at eye level, shallow depth of field with softly blurred background fog and foliage, volumetric god rays filtering through mist from above, soft naturalistic backlighting that makes its ghostly eyes, glowing veins, and breath-mist glow from within, hyper-detailed micro-texturing on every hair and surface, subsurface scattering, physically-based rendering, muted natural color grading with deep shadows, 1:1 square composition, subject centered and fully visible from head to feet, no readable text."
});
