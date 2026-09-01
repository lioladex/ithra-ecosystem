/* ITH-A-338-104 — Thessek (EXTINCT) — redesign 2026-09-01: Tier I → Tier II (Heavily Alien) */
creaturesData.push({
        id: "ITH-A-338-104", name: "Thessek", nickname: "เจ้าเงาที่คุ้นเคย", status: "EXTINCT", era: "ยุคหมุนเวียน (Cycling Era)",
        imageKey: "THESSEK", color: "#ffb84a",
        category: "สัตว์กินเนื้อ · นักล่าลำดับรองแบบซุ่มขุด (Mesopredator, ambush burrower) — Alien Intensity Tier II", habitat: "ทุ่งหินตะกอนโล่งแจ้งเชิงเทือกเขา Sorn",
        danger: "41% (Dangerous)", size: "ระดับ 4 — กลาง (เท่าสุนัขใหญ่)", height: "0.85 ม. ที่ไหล่", weight: "68 กก.",
        desc: "นักล่าลำดับรองที่ตกเป็นเหยื่อประจำของ Vorthak ขุดโพรงซุ่มและพุ่งแทงจากด้านล่าง ยังคงเดิน 4 ขา ขนาดใกล้เคียง Karvos ตามหมายเหตุเฉพาะตัว (จุดที่ทำให้สัญชาตญาณเก่าของตัวเอกสับสนในฉากตื่นรู้) แต่หาง/พื้นผิวปรับให้เอเลี่ยนเข้มข้นขึ้นแล้ว",
        mutation: { pro: "แรงขุดและตะปบสูง ขุดโพรงซุ่มได้เร็วมาก", con: "ความเร็วในการวิ่งระยะไกลต่ำ หนี Apex Predator ไม่พ้น" },
        weapons: [ "กรงเล็บหน้าโค้งยาว 3 นิ้ว (คมสองด้าน)", "เขี้ยวหน้ายาวโค้ง (คล้ายงาสั้น)", "หนามกระดูกคู่บนสันจมูก (งัดจากล่างขึ้นบน)", "หางแยกแฉกปลายคล้ายหนวด (ฟาด/รัดได้)" ],
        social: "ล่าเดี่ยวหรือเป็นคู่ ยึดอาณาเขตโพรงของตัวเอง ก้าวร้าวต่อ Thessek ตัวอื่นที่รุกล้ำ",
        head: [
            ["ดวงตา", "ม่านตาเหลืองขุ่น รูม่านตาแนวตั้ง มีผลึกจิ๋วกระจายในเนื้อตา", "ปรับรับแสงได้กว้างมาก มองเห็นทั้งในโพรงมืดสนิทและบนทุ่งแดดจ้า ผิวม่านตามีเกล็ดผลึกเล็กจิ๋วฝังอยู่ กระจายแสงเป็นประกายจางเมื่อโดนไฟส่อง วัดระยะได้พอประมาณแต่ไม่แม่นเท่านักล่าไล่ล่า"],
            ["จมูก", "จมูกกว้างแบน รูจมูกปิดสนิทได้ ผิวรอบจมูกแตกลายคริสตัลจาง", "ดมกลิ่นผ่านชั้นดินได้ ตรวจจับสัตว์ขุดใต้ดินที่เคลื่อนไหวอยู่ลึกถึงครึ่งเมตรใต้เท้าตัวเอง ผิวรอบจมูกมีลายแตกคล้ายแร่ผลึกบางๆ ต่างจากผิวส่วนอื่น"],
            ["ปาก", "เขี้ยวหน้าคู่ยาวโค้งคล้ายงาสั้น ผิวเขี้ยวมันวาวแบบออบซิเดียน", "ใช้แทงตรึงเหยื่อจากด้านล่างและงัดตัวเหยื่อขึ้นจากโพรง ด้านในเป็นฟันตัดคมเรียงถี่สำหรับฉีกเนื้อ เขี้ยวผิวมันวาวสีดำอมทองแบบแร่ภูเขาไฟ ไม่ใช่งาสีขาวขุ่นธรรมดา — ขากรรไกรอ้าได้ไม่กว้างนัก เน้นแรงกัดเฉือนมากกว่าการงับรอบตัวเหยื่อ"],
            ["หู", "หูตั้งยาวปลายมน พับปิดสนิทได้ ขอบหูมีเส้นแร่ผลึกจาง", "หมุนอิสระ ใหญ่กว่าสัดส่วนหัวเพราะต้องฟังเสียงฝีเท้าเหยื่อผ่านพื้นดินขณะซุ่มอยู่ในโพรง ขอบในของหูมีเส้นแร่ผลึกบางเรืองแสงจางเมื่อย้อนแสง"],
            ["EXTRA #1", "ถุงลมข้างลำคอที่พองได้", "พองเป็นกระเปาะสองข้างแล้วคำรามความถี่ต่ำสะเทือนผ่านพื้นดิน ใช้ประกาศอาณาเขตและทำให้สัตว์เล็กที่ซ่อนใต้ดินตื่นตกใจวิ่งออกจากรูเพื่อจะได้ตะปบ"],
            ["EXTRA #2", "หนามกระดูกคู่บนสันจมูก ผิวคริสตัลสวิลล์เข้มข้น", "แหลมสั้นโค้งไปข้างหน้า ผิวหนามเป็นลายสวิลล์คริสตัล/ออบซิเดียนบิดเป็นเกลียวแทนกระดูกเรียบธรรมดา ใช้ทั้งงัดหินและกระแทกแทงเหยื่อจากด้านล่างขึ้นบนในจังหวะที่พุ่งขึ้นจากโพรง"]
        ],
        body: [
            ["BODY FRAME", "โครงสี่ขาลำตัวลึก อกกว้างเอวคอด", "ให้เงาร่างของนักล่าสี่ขาอย่างชัดเจน — ขนาด/ท่าทาง/จำนวนขาตรงกับ Karvos ตามหมายเหตุเฉพาะตัว ลำตัวหนาแน่นแต่ยืดหยุ่นพอจะบิดตัวในโพรงแคบได้"],
            ["SPINE", "สันกล้ามเนื้อหนา ขนหยาบสั้นเรียงตั้ง แซมเส้นแร่ผลึกจาง", "จุดยึดกล้ามเนื้อไหล่ที่ใช้ทั้งขุดดินและตะปบ กางตั้งขึ้นเมื่อข่มขู่คู่แข่ง แซมเส้นแร่ผลึกบางเรืองแสงจางตามแนวขนที่กางตั้ง ทำให้เงาด้านข้างดูมีสันหลังโหนกเด่นชัด"],
            ["TAIL", "หางแยกเป็นสองแฉกที่ท่อนปลาย ปลายแฉกคล้ายหนวดสัมผัสได้", "Utility — สองในสามแรกเป็นหางหนาปกติทำหน้าที่สมอยึดโพรง แต่ท่อนปลายแยกเป็นสองแฉกเรียวคล้ายหนวดที่ขยับได้อิสระจากกัน ขณะพุ่งขึ้นจากโพรงเข้าใส่เหยื่อ หางท่อนหลักจะขดยันผนังโพรงเป็นจุดหมุน ส่วนปลายแฉกทั้งสองสะบัดหาสมดุลอย่างอิสระ และใช้ค้ำพื้นเป็นขาที่สามขณะยืนสองขาสำรวจทุ่ง"]
        ],
        limbs: [
            ["#1", "ขา", "ขาหน้า", "สั้นล่ำกล้ามเนื้อหนาแบบตัวตุ่นผสมหมี ปลายเป็นกรงเล็บโค้งยาวสามนิ้ว คมทั้งสองด้าน ใช้ขุดดินเป็นหลัก แต่คมพอจะกรีดเปิดท้องเหยื่อขนาดเล็กได้ในจังหวะเดียว"],
            ["#2", "ขา", "ขาหลัง", "ยาวกว่าขาหน้า กล้ามเนื้อสะโพกหนา ใช้ดีดตัวพุ่งขึ้นจากโพรงด้วยความเร็วสูงในระยะ 2-3 เมตรแรก"]
        ],
        skin: [
            ["ลำตัว/สะโพก", "ขนสั้นหยาบแน่นสีน้ำตาลเทา ปนฝุ่นดินตลอดเวลาจนสีกลืนไปกับพื้นทุ่ง"],
            ["ไหล่/สันหลัง", "ขนหยาบยาวกว่าส่วนอื่น เป็นแผงหนาปกป้องบริเวณที่มักถูกกัดจากด้านบน เส้นขนกลวงมีแกนใสจางแซมเส้นแร่ผลึกเล็กๆ คล้ายตระกูลเดียวกับ Karvos แต่ไม่เรืองแสง — จุดที่ Apex Predator มักโจมตีเป็นอันดับแรก"],
            ["ขาหน้า/อุ้งเท้า", "หนังหนาด้านแตกลายเหมือนหนังช้าง ทนการเสียดสีกับหินและดินแข็ง"],
            ["หาง/จมูก", "หนังเปลือยเป็นปล้องแข็งแทรกลายคริสตัลสวิลล์บางๆ ไม่มีขนเพื่อไม่ให้ดินติดพัน"]
        ],
        pattern: "ลายจุดกระจายสีเข้มบนพื้นน้ำตาลเทา หนาแน่นที่สุดบริเวณสีข้างและสะโพก จางลงที่ใต้ท้อง เลียนแบบลายเงาก้อนหินกระจายบนพื้นทุ่ง แทรกด้วยลายสวิลล์คริสตัลบางๆ รอบหนามจมูกและปลายหางแฉก มีแถบสีอ่อนพาดขวางสะโพกสองแถบ ใช้แสดงอาณาเขตต่อ Thessek ตัวอื่น",
        pal: [["สีหลัก", "#7a6b58"], ["เงา", "#2e2820"], ["แสง", "#d4c6ae"], ["เสริม A", "#4a7a80"], ["เสริม B", "#5a5a80"]],
        hl: ["#ffb84a", "เหลืองอำพันขุ่นเรืองแสง"],
        hlAt: "ดวงตาที่สะท้อนแสงในโพรงมืด (tapetum lucidum) กระจายประกายผลึกจิ๋ว · ถุงลมข้างลำคอเมื่อพองคำราม · ขอบในของหูและปลายหางแฉกเมื่อย้อนแสง",
        mutationFull: {
            proTitle: "ขาหน้า / แรงขุดและตะปบ",
            proDesc: "กล้ามเนื้อไหล่และกรงเล็บพัฒนาจนขุดโพรงซุ่มได้เร็วมากและตะปบเหยื่อขนาดเล็กให้ตายในจังหวะเดียวได้ ครองพื้นที่ล่าใต้ดินที่นักล่าอื่นเข้าไม่ถึง",
            conTitle: "ขา / ความเร็วในการวิ่งระยะไกล",
            conDesc: "ขาหน้าที่หนักและสั้นเพื่อการขุด ทำให้พุ่งได้เร็วแค่ 2-3 เมตรแรก พอเกิน 200 เมตรก็หมดแรง ไม่มีทางหนีรอดจาก Apex Predator ที่ไล่ล่าทางไกลได้เลย นี่คือเหตุผลที่มันตกเป็นอาหารประจำของร่างเก่าของตัวเอก"
        },
        dangerDetail: {
            raw: "78 / 190", percent: 41, tier: "อันตราย (Dangerous)",
            factors: ["กรงเล็บโค้งคมสองด้าน (+8)", "เขี้ยวหน้าโค้งยาว (+7)", "หนามกระดูกบนสันจมูก (+6)"],
            note: "Thessek อันตรายต่อสัตว์ขนาดเล็กและกลางอย่างมาก และสามารถทำให้นักล่าที่ใหญ่กว่าบาดเจ็บสาหัสได้หากถูกต้อนจนมุม แต่ต่อ Apex Predator ประจำถิ่นที่ไล่ล่าทางไกลได้ มันแทบไม่มีทางสู้เลย เพราะจุดแข็งทั้งหมดของมันคือการซุ่มโจมตีระยะประชิด"
        },
        combat: [
            ["พุ่งขึ้นจากใต้เท้า (Ambush Impale)", "ขุดโพรงตื้นแล้วหมอบรอใต้ดินโดยโผล่แค่ปลายจมูกและหู เมื่อได้ยินฝีเท้าเหยื่อผ่านเหนือหัว จะพุ่งทะลุดินขึ้นมาแทงด้วยหนามสันจมูกจากด้านล่างขึ้นบน"],
            ["ฟาดหางแฉก (Split-tail Lash)", "ปลายหางที่แยกสองแฉกฟาดสลับจังหวะไม่พร้อมกัน ทำให้เป้าหมายคาดเดาทิศทางฟาดถัดไปได้ยากกว่าหางเดี่ยวธรรมดา"]
        ],
        confusion: [
            ["เงาร่างสี่ขาลำตัวลึก อกกว้างเอวคอด", "มี", "มี", "no"],
            ["สันหลังโหนกเป็นแนว", "มี (กล้ามเนื้อขุด)", "มี (ท่อระบายความร้อน)", "no"],
            ["หูตั้งแหลมหมุนได้", "มี", "มี", "no"],
            ["หางยาว", "มี (สมอยึดโพรง + ปลายแฉกคล้ายหนวด)", "มี (ธงนำทาง)", "no"],
            ["ขนาดตัวระดับ 4", "มี", "มี", "no"],
            ["มีกรงเล็บและเขี้ยว (เป็นนักล่า)", "มี", "มี", "no"],
            ["จำนวนที่มาพร้อมกัน", "ล่าเดี่ยว/เป็นคู่", "ฝูง 5–8 ตัว", "warn"],
            ["ตำแหน่งที่โจมตี", "จากใต้ดินขึ้นบน", "จากรอบทิศบนพื้น", "yes"],
            ["ดวงตา", "รูม่านตาแนวตั้ง", "ตาหน้า + แอ่งรับความร้อน", "yes"],
            ["ปาก", "เขี้ยวหน้าโค้ง อ้าไม่กว้าง", "ปากแยกสี่แฉก อ้ากว้างมาก", "yes"]
        ],
        extinction: {
            title: "ป่าหมอกกลบทุ่งโล่ง (The Mistwood Encroachment)",
            cause: "เมื่อป่าหมอกขยายตัวปกคลุมทุ่งหินตะกอนในช่วงปลายยุคหมุนเวียน ดินที่เคยแห้งแข็งกลายเป็นโคลนชื้นแฉะและมีรากไม้หนาแน่นสอดประสานกันทั่วพื้นที่",
            why: [
                "ขุดโพรงไม่ได้อีกต่อไป — โคลนเปียกยุบตัวง่ายและรากไม้กีดขวาง ทำให้กลยุทธ์ซุ่มใต้ดินที่เป็นจุดแข็งทั้งหมดของมันใช้การไม่ได้",
                "เหยื่อใต้ดินหายไป — สัตว์ขุดที่มันล่าอพยพหรือสูญพันธุ์ไปพร้อมกับการเปลี่ยนสภาพพื้นดิน",
                "แข่งขันกับผู้ล่าชั้นใหม่ไม่ได้ — สิ่งมีชีวิตที่ปรับตัวเข้ากับป่าหมอกได้ (บรรพบุรุษของ Karvos) เข้ามาแทนที่ตำแหน่งนักล่าลำดับรองในระบบนิเวศใหม่นี้"
            ],
            irony: "Thessek สูญพันธุ์เพราะโลกที่มันอยู่เปลี่ยนไป ไม่ใช่เพราะถูกล่าจนหมด — แต่รูปลักษณ์ของมันกลับหลอกหลอนระบบนิเวศใหม่ต่อไปอีก 40 ล้านปี ผ่านสัญชาตญาณที่ฝังอยู่ในตัวเอก"
        },
        notes: [
            ["", "<strong>redesign 2026-09-01</strong>: ปรับจาก Tier I เป็น Tier II (Heavily Alien) หลังยกเลิกกฎ Silhouette Lock — หมายเหตุเฉพาะตัวที่ต้องรักษาไว้คือ \"เดิน 4 ขา เป็นนักล่า ขนาดใกล้เคียง Karvos\" เท่านั้น ส่วนหางและพื้นผิวจึงปรับให้เข้มข้นขึ้นได้ (หางแยกแฉกคล้ายหนวด + ผิวคริสตัล/ออบซิเดียนสวิลล์) โดยไม่กระทบ silhouette หลักที่ทำให้สัญชาตญาณสับสนกับ Karvos ได้"],
            ["", "<strong>กลยุทธ์การล่า \"พุ่งขึ้นจากใต้เท้า\"</strong>: ขุดโพรงตื้นแล้วหมอบรอใต้ดินโดยโผล่แค่ปลายจมูกและหู เมื่อได้ยินฝีเท้าเหยื่อผ่านเหนือหัว จะพุ่งทะลุดินขึ้นมาแทงด้วยหนามสันจมูกจากด้านล่างขึ้นบน <em style='color:var(--accent-default)'>จุดโจมตีที่สัตว์ส่วนใหญ่ไม่มีสัญชาตญาณป้องกัน</em>"],
            ["", "<strong>พฤติกรรมยืนสำรวจ</strong>: ระหว่างเปลี่ยนจุดซุ่ม มันจะยืนสองขาหลังใช้หางยันพื้นเป็นขาที่สาม หมุนหูกวาดหาเสียงรอบทุ่ง ท่านี้เองที่ทำให้เงาร่างของมันโดดเด่นเห็นได้จากไกล และเป็นท่าที่ Apex Predator ใช้ระบุตำแหน่งมันได้ง่ายที่สุด"],
            ["warn", "<strong>สัญชาตญาณที่ฝังลึกที่สุด</strong>: ตัวเอกล่า Thessek ซ้ำนับหมื่นครั้งตลอด 300,000 ปี จนเกิดวงจรสัญชาตญาณ: <em style='color:#ffb84a'>\"เงาร่างสี่ขาลำตัวลึก + สันหลังโหนก + หูตั้งแหลม + หางยาว + มีอาวุธ = นักล่าที่ฉันเหนือกว่า → ยืนหยัดไว้ ไม่ต้องหนี\"</em> สัญชาตญาณนี้ไม่ได้บอกว่านี่คือสัตว์ไม่มีพิษภัย มันบอกชัดว่านี่คือนักล่าที่มีอาวุธ แต่จัดหมวดว่าเป็นนักล่าที่อยู่ต่ำกว่าตัวเองในห่วงโซ่ ซึ่งเป็นการประเมินที่ถูกต้อง เมื่อ 40 ล้านปีก่อน ในร่างที่ต่างออกไปโดยสิ้นเชิง"]
        ],
        prompt: "A medium dog-sized alien quadrupedal ambush predator standing 0.85 meters at the shoulder, solidly built and heavy for its size, with a deep chest, narrow waist and sloping hindquarters. Its head is a low flat wedge-shaped skull with a sloping forehead built to push up through soil, a pair of murky yellow eyes set slightly forward with vertical slit pupils, their irises flecked with tiny embedded crystal facets that catch light in a faint sparkle, a broad flat sealing nose at the tip of the snout with a faint crystalline crackle-pattern in the skin around it, and a narrow wedge-shaped mouth with a pair of long outward-curving tusk-like front fangs, their surface glossy black-and-gold like polished obsidian rather than ordinary bone, used for impaling and levering prey, backed by rows of fine shearing teeth. Tall rounded ears rotate independently and can fold flat shut, oversized relative to its head, their inner rims traced with faint glowing mineral veining. A pair of inflatable air sacs sit on either side of its throat, swollen and translucent amber-orange with visible veins as it emits a low territorial growl, and a pair of short forward-curving bone spurs rise from the bridge of its snout, their surface twisted into a swirling obsidian-crystal texture rather than plain bone, used to strike upward from below. Its body is a four-legged frame with a thick raised muscular ridge running along its spine covered in short coarse bristling hair threaded with faint glowing mineral filaments, raised in threat display. It has 2 pairs of legs: short heavily muscled front legs like a mole crossed with a bear, ending in three long curved double-edged claws sharp enough to open prey in a single swipe, and longer powerful hind legs built to launch it explosively out of a burrow. Its long tapering tail stays a single thick bony rod for its first two-thirds, braced against the ground as a third leg, but its final third splits into two slender whip-like tendril tips that move independently of each other, flicking for balance while the rest of the tail stays rigid. Its torso and haunches are covered in short coarse dust-caked grey-brown fur, longer and shaggier across the shoulders and spine, each hair faintly hollow with a dim translucent core threaded with tiny mineral flecks, while its forelegs and paws are thick cracked elephant-like hide and its tail and snout are bare segmented skin faintly patterned with thin crystalline swirls. Dark scattered spots cover its flanks and haunches, densest along the sides and fading toward the belly, mimicking scattered stone shadows, with two pale bands across the rump and faint crystal-swirl tracery around its nose spurs and forked tail-tip. Its powerful digging forelimbs let it hunt from beneath the soil, at the cost of tiring quickly in any long chase. Its coloration is a harmonious muted earth-brown and grey palette, deepened by near-black brown shadows in the recesses and lifted by pale dusty beige highlights along the raised fur and ridges, with cool muted teal tones in the belly and joint shadows and grey-violet woven into the darker spots, and a glowing amber highlight reserved only for its reflective crystal-flecked eyes, its inflated throat sacs, the backlit inner surfaces of its ears, and the forked tips of its tail. It crouches low at the mouth of a freshly dug burrow on an open windswept alien plain of pale sedimentary rock and sparse dry vegetation, distant mountains and gathering fog on the horizon behind it, spinal ridge raised, claws braced, forked tail-tip flicking, head lowered in a predatory stance.\n\nPhotorealistic 3D creature render, cinematic film-VFX quality, standing full-body in its natural habitat environment, three-quarter view, shot with a telephoto lens at eye level, shallow depth of field with softly blurred background terrain, volumetric god rays raking low across the plain, soft naturalistic backlighting that makes the translucent throat sacs, ears and crystal-flecked eyes glow from within, hyper-detailed micro-texturing on every hair and surface, subsurface scattering, physically-based rendering, muted natural color grading with deep shadows, 1:1 square composition, subject centered and fully visible from head to feet, no readable text."
});
