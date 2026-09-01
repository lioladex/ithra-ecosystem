/* ITH-211-350 — Vellith (ALIVE) */
creaturesData.push({
        id: "ITH-211-350", name: "Vellith", status: "ALIVE", era: "ยุคป่าหมอก (Mistwood Era)",
        imageKey: "VELLITH", color: "#c4b5fd",
        category: "สิ่งมีชีวิตลอยฟ้าแบบฝูงอาณานิคม (Colonial gas-drifter, aerial swarm-raft)",
        habitat: "น่านฟ้าเปิดเหนือเรือนยอด (Verath, The Open Sky above The Inner Canopy)",
        foodChain: "ผู้บริโภคปฐมภูมิลอยฟ้า — กินสปอร์และละอองเกสรที่ลอยขึ้นจากป่าหมอก เป็นเหยื่อฉวยโอกาสของ Skyther",
        danger: "8% (Harmless)", size: "ระดับ 2 ต่อหน่วย — เล็ก แต่รวมฝูงเป็นแพลอยฟ้าขนาดใหญ่ได้ (แพหนึ่งกว้างได้ถึง 40 ม.)",
        height: "แต่ละหน่วยเส้นผ่านศูนย์กลาง 0.6 ม. · แพลอยฟ้าเต็มขนาดยาวได้เกิน 40 ม.", weight: "0.4 กก. ต่อหน่วย (แทบไม่มีน้ำหนักสุทธิเพราะแก๊สในตัวเบากว่าอากาศ)",
        desc: "ไม่ใช่สัตว์ตัวเดียว แต่เป็นอาณานิคมของหน่วยชีวิตโปร่งแสงหลายร้อยหน่วยที่เชื่อมต่อกันด้วยเยื่อบางใสจนมองจากไกลเหมือนเมฆลอยผิดธรรมชาติ แต่ละหน่วยพองตัวด้วยแก๊สที่ผลิตเองภายในถุงกลวงกลางลำตัว ลอยตามกระแสลมเป็นแพขนาดใหญ่อยู่เหนือเรือนยอดตลอดชั่วอายุ ไม่เคยแตะพื้นดินเลยสักครั้ง",
        mutation: { pro: "ถุงแก๊สลอยตัวในตัว / บินได้โดยไม่ต้องมีปีกหรือออกแรงเลย", con: "ควบคุมทิศทางตัวเองแทบไม่ได้ / ต้องพึ่งกระแสลมทั้งหมด หน่วยที่หลุดฝูงหรือลอยต่ำเกินไปมักถูกโฉบกินก่อนจะลอยกลับขึ้นที่สูงทัน" },
        weapons: [ "ไม่มีอาวุธ", "ปล่อยประจุไฟฟ้าสถิตอ่อนๆ ระหว่างหน่วยเมื่อถูกรบกวน (Startle Discharge)", "รวมฝูงหนาแน่นจนมองทะลุยาก (Cloud Confusion)" ],
        social: "อาณานิคมเดียวอาจมีหลายร้อยถึงหลายพันหน่วยเชื่อมกัน ลอยเป็นแพเดียวตลอดชีวิต แยกตัวออกจากกันเฉพาะตอนแพใหญ่เกินจนกระแสลมพยุงไม่ไหว จึงแตกเป็นแพย่อยสองสามแพลอยแยกทาง",
        head: [
            ["ดวงตา", "ไม่มีตาแบบสัตว์ทั่วไป", "แต่ละหน่วยมีจุดรับแสงเรียบง่ายกระจายรอบผิวแทน แยกแค่สว่าง-มืดได้ ไม่เห็นภาพ ใช้ร่วมกันทั้งอาณานิคมเพื่อรู้ทิศทางแสงอาทิตย์"],
            ["จมูก", "ไม่มี", "รับรู้สารเคมีในอากาศผ่านเยื่อบางรอบตัวแทน ไวต่อสปอร์และละอองเกสรที่เป็นอาหาร"],
            ["ปาก", "รูดูดขนาดจิ๋วรอบผิวหน่วย", "หลายร้อยรูเล็กจิ๋วกระจายทั่วผิวแต่ละหน่วย ดูดซับสปอร์/ละอองเกสรที่ลอยผ่านเข้าตัวโดยตรงไม่ต้องเคี้ยว"],
            ["หู", "ไม่มี", "รับแรงสั่นสะเทือนของอากาศผ่านเยื่อเชื่อมระหว่างหน่วยแทน เป็นเหตุผลที่ทั้งแพขยับหนีพร้อมกันได้แม้แค่หน่วยเดียวรับรู้ภัยก่อน"],
            ["EXTRA #1", "ถุงแก๊สกลวงกลางลำตัว (Buoyancy Bladder)", "ผลิตแก๊สเบากว่าอากาศเองภายในถุงโปร่งแสงกลางตัว ควบคุมปริมาณแก๊สเพื่อลอยขึ้น-ลงเล็กน้อยได้ แต่ควบคุมทิศทางแนวราบไม่ได้เลย"],
            ["EXTRA #2", "เยื่อเชื่อมระหว่างหน่วย (Colony Membrane)", "เยื่อใสบางเหนียวเชื่อมทุกหน่วยในแพเข้าด้วยกัน ส่งสัญญาณไฟฟ้าอ่อนๆ ผ่านเยื่อนี้เพื่อประสานการขยับทั้งฝูงพร้อมกัน"]
        ],
        body: [
            ["BODY FRAME", "ทรงกลมกลวงโปร่งแสง", "แต่ละหน่วยเป็นถุงเยื่อโปร่งแสงทรงกลมบางเบา ไม่มีโครงกระดูกเลย รูปทรงคงตัวอยู่ได้ด้วยแรงดันแก๊สภายในเท่านั้น"],
            ["SPINE", "ไม่มี", "ไม่มีโครงสร้างแข็งใดๆ ในตัว ยุบตัวได้ทันทีหากถุงแก๊สรั่ว"],
            ["TAIL", "ไม่มี", "แต่ละหน่วยมีเพียงเส้นเยื่อบางๆ ห้อยเป็นชายพลิ้วรอบขอบล่าง ทำหน้าที่ลดแรงต้านลมและช่วยให้แพลอยนิ่งขึ้นเวลาลมกระโชก"]
        ],
        limbs: [
            ["#1", "ไม่มีระยางค์", "ไม่มี", "ไม่มีขาหรือปีกเลยสักหน่วยเดียว การเคลื่อนที่ทั้งหมดพึ่งพาแรงลอยตัวของแก๊สภายในและกระแสลมภายนอกล้วนๆ"]
        ],
        skin: [
            ["ผิวหน่วย", "เยื่อบางใสเกือบโปร่งแสงทั้งหมด สีม่วงอ่อนจางๆ เห็นเงาถุงแก๊สและอวัยวะภายในรางๆ ผ่านผิว"],
            ["จุดรับแสง", "หย่อมสีเข้มกระจายเป็นจุดๆ รอบผิว ทำหน้าที่รับรู้แสง-มืด"],
            ["เยื่อเชื่อม", "บางเหนียวกว่าผิวหน่วยปกติ ยืดหยุ่นสูงเพื่อรับแรงดึงเวลาลมพัดแรง"]
        ],
        pattern: "ไม่มีลายพราง — ผิวโปร่งแสงเกือบทั้งหมด สะท้อนสีท้องฟ้าและหมอกรอบตัวตามธรรมชาติ ทำให้แพทั้งแพดูเหมือนเมฆชิ้นหนึ่งมากกว่าสิ่งมีชีวิต",
        pal: [["สีหลัก", "#c4b5fd"], ["เงา", "#6d28d9"], ["แสง", "#ede9fe"], ["เสริม A", "#93c5fd"], ["เสริม B", "#f5f3ff"]],
        hl: ["#ede9fe", "ม่วงอ่อนโปร่งแสงคล้ายไอหมอก"],
        hlAt: "ถุงแก๊สกลางลำตัวที่มองเห็นเป็นเงาโปร่งผ่านผิว · ประกายไฟฟ้าสถิตจางๆ ระหว่างหน่วยตอนตกใจ · ขอบเยื่อชายพลิ้วเวลาลมพัด",
        mutationFull: {
            proTitle: "ถุงแก๊สลอยตัวในตัว / ล่องลอยได้โดยไม่ต้องออกแรง",
            proDesc: "ผลิตแก๊สเบากว่าอากาศได้เองในถุงกลวงกลางลำตัว ทำให้ล่องลอยอยู่เหนือเรือนยอดได้ตลอดชีวิตโดยไม่ต้องกระพือปีกหรือออกแรงใดๆ เลย เป็นวิธีบินที่ประหยัดพลังงานที่สุดในระบบนิเวศป่าหมอก",
            conTitle: "ไร้การควบคุมทิศทาง / ตกเป็นเหยื่อง่ายเมื่อลอยต่ำ",
            conDesc: "ไม่มีวิธีบังคับทิศทางแนวราบเลย ต้องพึ่งกระแสลมทั้งหมด หน่วยที่หลุดจากแพหรือถูกลมพัดลอยต่ำเข้าใกล้เรือนยอดมากเกินไปมักกลายเป็นเหยื่อของ Skyther ที่โฉบกินได้ง่ายเพราะหนีไม่ทันเลย"
        },
        dangerDetail: {
            raw: "16 / 200", percent: 8, tier: "ไม่มีพิษภัย (Harmless)",
            factors: ["ประจุไฟฟ้าสถิตอ่อน (+3)"],
            note: "ไม่มีอันตรายต่อสิ่งมีชีวิตอื่นเลยนอกจากไฟฟ้าสถิตอ่อนๆ ที่แค่สะดุ้งได้ ความสำคัญของมันอยู่ที่การเป็นแหล่งอาหารลอยฟ้าให้ Skyther ฝึกโฉบล่าแบบเสี่ยงต่ำก่อนจะไปล่าเหยื่อที่อันตรายกว่า"
        },
        combat: [
            ["Cloud Confusion", "เมื่อถูกคุกคาม หน่วยทั้งแพเบียดตัวเข้าหากันแน่นขึ้นจนมองทะลุเข้าไปด้านในไม่ได้ ทำให้ผู้ล่าแยกเป้าหมายตัวเดียวออกจากฝูงได้ยาก"],
            ["Startle Discharge", "หน่วยที่ถูกสัมผัสโดยตรงปล่อยประจุไฟฟ้าสถิตอ่อนๆ ผ่านเยื่อเชื่อม ไม่ทำอันตรายจริงจัง แต่มากพอจะทำให้ผู้ล่าตัวเล็กสะดุ้งปล่อยมือ"]
        ],
        abilities: [
            {
                name: "การแยกส่วนอาณานิคมไร้ความเจ็บปวด", type: "Physiology — สรีรวิทยาอาณานิคม",
                desc: "แต่ละหน่วยพองและยุบตัวไม่พร้อมกันตลอดเวลาเหมือนกำลังหายใจแยกกันเอง เมื่อหน่วยหนึ่งถูกฉีกออกไปจากแพ ส่วนที่เหลือทั้งแพไม่มีท่าทีตอบสนองใดๆ เลย ไม่หนี ไม่เปลี่ยนจังหวะ ล่องลอยต่อไปเหมือนไม่มีอะไรเกิดขึ้น",
                origin: "ไม่มีระบบประสาทส่วนกลางเชื่อมทุกหน่วยเข้าด้วยกัน การสูญเสียหน่วยเดียวจึงไม่ต่างอะไรจากการหลุดร่วงของใบไม้ใบหนึ่งจากต้น — เป็นกลยุทธ์ต้านทานการถูกล่าด้วยจำนวนสำรองมหาศาลแทนการหนีหรือสู้"
            }
        ],
        notes: [
            ["", "<strong>เป้าซ้อมมือของนักล่าเวหา</strong>: Skyther วัยอ่อนมักฝึกโฉบจับ Vellith หน่วยที่ลอยต่ำก่อนจะโตพอไปล่าเหยื่อจริงจัง เพราะแทบไม่มีความเสี่ยงและแทบไม่ต่อสู้กลับเลย"],
            ["warn", "<strong>ดัชนีลมชั้นบน</strong>: นักบินระดับสูงในป่าหมอกใช้ทิศทางการลอยของแพ Vellith อ่านกระแสลมร้อนได้แม่นยำกว่าสังเกตหมอกเบื้องล่างเสียอีก เพราะมันลอยตามลมล้วนๆ ไม่มีแรงต้านของตัวเองเจือปน"]
        ],
        prompt: "A colonial aerial organism forming a drifting raft of hundreds of small translucent gas-filled spheroid units bound together by a thin membrane, each individual unit roughly 0.6 meters across, the whole raft capable of spanning over 40 meters, resembling a cross between a jellyfish colony and a cloud of soap bubbles rather than any bird or insect. Each unit has no true head, eyes, or mouth in the conventional sense: scattered dark photoreceptor patches dot its translucent surface to sense light and dark, dozens of microscopic absorption pores cover its skin to draw in drifting spores and pollen directly, and the connecting membrane between units carries faint bioelectric signals that let the whole colony flinch and drift in unison the instant one unit senses a threat. Each unit's body is a hollow, boneless, translucent spheroid held in shape entirely by internal gas pressure, its lower rim trailing a thin fringed membrane skirt that reduces wind drag and steadies the raft in gusts, with a faint glowing bladder visible as a soft shadow at its core where it manufactures its own lighter-than-air gas. It has no limbs, wings, or means of directional propulsion whatsoever; every unit rises and falls only slightly by regulating its internal gas volume and is otherwise entirely at the mercy of the wind. Its skin is a nearly transparent pale violet membrane through which the internal gas bladder and faint organs are visible as soft shadows, unpatterned and uncamouflaged, simply reflecting the color of the sky and mist around it so that the entire raft reads from a distance as an oddly coherent, slow-drifting cloud. Its effortless internal buoyancy lets it float above the canopy for its entire lifespan without ever expending energy on flight, at the total cost of directional control — any unit blown low into the canopy becomes easy prey for aerial hunters that can actually maneuver. Its coloration is a soft pale violet palette, deepened by muted purple shadows within the gas bladder's silhouette and lifted by near-white lavender highlights along the membrane's outer curve, with pale sky-blue worked into the fringed skirt and a soft white glow reserved for the faint static discharges that ripple between units when startled. A vast raft of it drifts high above the misty canopy of the Verath mistwood in open golden-orange light, hundreds of translucent spheres catching and scattering the light like a slow-moving cloud of glass bubbles, faint electric shimmers passing unit to unit across the connecting membrane.\n\nPhotorealistic 3D creature render, cinematic film-VFX quality, wide shot of the full drifting raft in its natural open-sky habitat, three-quarter aerial view, shot with a wide lens, soft volumetric backlighting that makes the translucent bodies glow faintly from within against the sky, hyper-detailed micro-texturing on the membrane surfaces, subsurface scattering, physically-based rendering, warm natural color grading, 1:1 square composition, subject filling the frame, no readable text."
});
