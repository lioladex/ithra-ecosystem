/* ITH-510-961 — Karvos (ALIVE) */
creaturesData.push({
        id: "ITH-510-961", name: "Karvos", status: "ALIVE", era: "ยุคป่าหมอก (Mistwood Era)",
        imageKey: "KARVOS", color: "#ff7a3d",
        category: "นักล่าฝูงรับความร้อน (Thermoreceptive pack-hunter)", habitat: "ป่าหมอกชั้นพื้นดิน (Verath)",
        foodChain: "ผู้ล่าระดับสูงของชั้นพื้นดิน — ล่า Luvenn เป็นอาหารหลัก",
        danger: "48% (Dangerous) - ต่อ 1 ตัว", size: "ระดับ 4 — กลาง (เท่าสุนัขใหญ่)", height: "0.95 ม. ที่ไหล่", weight: "58 กก.",
        desc: "นักล่าฝูงที่โจมตี Luvenn ในฉากตื่นรู้ ล่าด้วยการต้อนให้เหยื่อวิ่งจนตัวร้อน สื่อสารกันในฝูงด้วยแถบเรืองแสงข้างแก้ม มีระบบตาสองชั้น (ภาพปกติ + รังสีความร้อน)",
        mutation: { pro: "จมูก / อ่านรอยเท้าความร้อนตกค้างบนพื้นได้นานครึ่งชั่วโมง", con: "ผิวหนัง / เมื่อวิ่งไล่ ร่างกายจะร้อนและเรืองแสง เปิดเผยตำแหน่ง" },
        weapons: [ "ปากแยกกางออกสี่ทิศสมมาตร อ้าได้กว้างผิดปกติ", "ระบบมองเห็นสองชั้น (ภาพปกติ + แอ่งรับความร้อน)", "การล่าประสานงานเป็นฝูง 5-8 ตัว" ],
        social: "ฝูง 5–8 ตัว มีลำดับชั้นชัดเจน ล้อมและไล่ต้อนแบบหมาป่า สื่อสารด้วยการเรืองแสงเป็นจังหวะแทนการหอน",
        head: [
            ["ดวงตา", "ระบบสองชั้น — ตานักล่า + แอ่งรับความร้อน", "ดวงตาคู่หน้าให้การมองเห็นสามมิติและวัดระยะแม่นยำ ใต้ตาแต่ละข้างมีแอ่งรับรังสีความร้อน (pit organ) เป็นร่องลึกลงถึงจะงอย"],
            ["จมูก", "จมูกยาวรับไอความร้อน", "โพรงจมูกยาวผิดปกติ นอกจากดมกลิ่นยังรับไอความร้อนที่ลอยขึ้นจากรอยเท้าเหยื่อ ตามรอยความอุ่นที่หลงเหลือได้นานถึงครึ่งชั่วโมง"],
            ["ปาก", "ปากแยกกางออกสี่ทิศเมื่ออ้าเต็มที่ (บน-ล่าง-ซ้าย-ขวา คล้ายเครื่องหมายบวก)", "ไม่ใช่แค่อ้ากว้าง แต่แยกออกเป็น 4 กลีบเนื้อรูปลิ่มชี้ตรงขึ้น-ลง-ซ้าย-ขวาเท่าๆ กันจากจุดศูนย์กลางเดียวกัน แต่ละกลีบมีแถวฟันซี่แหลมของตัวเองเรียงรอบ เห็นช่องว่างมืดชัดเจนระหว่างกลีบ ดูเหมือนดอกไม้เนื้อที่มีแต่ฟันมากกว่าปากสัตว์อ้ากว้างธรรมดา เผยวงขากรรไกรกว้างกว่าหมาป่าจริงเกือบเท่าตัว ลึกเข้าไปตรงกลางมีเนื้อเยื่อเรืองแสงส้มแดงจางๆ ตามธีมความร้อนของมัน"],
            ["หู", "หูตั้งแหลมโปร่งแสง", "หมุนได้อิสระ ผิวหูด้านในบางจนโปร่งแสง เห็นเส้นเลือดฝอยเป็นตาข่ายเมื่อย้อนแสง ทำหน้าที่เป็นแผงระบายความร้อนหลักด้วย"],
            ["EXTRA #1", "ตาที่สามใต้คาง", "แอ่งรับความร้อนดวงเดี่ยวชี้ลงพื้น อ่านรอยเท้าอุ่นๆ ขณะก้มหัวตามรอย วิ่งตามรอยได้เต็มความเร็วโดยไม่ต้องหยุดดม"],
            ["EXTRA #2", "แถบเรืองแสงข้างแก้มและสันจมูก", "เส้นเรืองแสงส้มอมแดงกะพริบเป็นจังหวะ สื่อสารกับฝูงแทนการหอน — การหอนเปิดเผยตำแหน่ง แต่แสงมองเห็นได้เฉพาะสมาชิกฝูงที่ล้อมอยู่"]
        ],
        body: [
            ["BODY FRAME", "โครงหมาป่าสี่ขาลำตัวลึก", "อกกว้าง เอวคอด สะโพกลาด — สรีระสัตว์วิ่งไล่ทางไกล แต่คอหนาและไหล่ล่ำกว่าหมาป่าจริงชัดเจน"],
            ["SPINE", "แนวขนสันหลังพองตั้งได้ + ท่อระบายความร้อน", "ใต้ผิวหนังตามแนวมีท่อระบายความร้อนเรืองแสงจางๆ เมื่อวิ่งไล่จนร่างกายร้อน แนวสันหลังจะเรืองส้มขึ้นเรื่อยๆ เป็นมาตรวัดความเหนื่อยที่ทั้งฝูงมองเห็นกันได้"],
            ["TAIL", "หางยาวพวงขนหนา ปลายเรืองแสงส้ม", "Utility — ธงนำทางในหมอก ขณะไล่ล่าในหมอกทึบ ปลายหางเรืองแสงคือจุดเดียวที่ฝูงมองเห็นกันได้"]
        ],
        limbs: [
            ["#1", "ขา", "ขาหน้า", "ยาวเรียวแบบหมาป่า อุ้งเท้าแผ่กว้างมีพังผืดบางระหว่างนิ้วกระจายน้ำหนักบนโคลน เล็บทื่อยึดเกาะพื้น แผ่นรองอุ้งเท้ามีตัวรับความร้อนอ่านอุณหภูมิพื้นได้ขณะวิ่ง"],
            ["#2", "ขา", "ขาหลัง", "ข้อพับลึก กล้ามเนื้อต้นขาหนา ให้แรงส่งต่อเนื่องในการไล่ระยะไกล ไม่ใช่การกระโจนครั้งเดียว"]
        ],
        skin: [
            ["ลำตัว/คอ/สะโพก", "ขนสองชั้นแบบหมาป่า ชั้นในหนาแน่นกันความชื้น ชั้นนอกยาวหยาบกันน้ำ — แต่ละเส้นขนกลวงและมีแกนใส ทำให้เมื่อร่างกายร้อน ความร้อนจะเรืองผ่านโคนขนออกมาเห็นเป็นแสงจางๆ"],
            ["ใบหน้า/สันจมูก/รอบแอ่งความร้อน", "หนังเปลือยเรียบเหนียวสีเข้ม ไม่มีขนบัง เพื่อไม่ให้รบกวนการรับรังสีความร้อน"],
            ["อุ้งเท้า/ใต้ท้อง", "หนังหนาด้าน ทนการเสียดสีกับรากไม้และโคลน"]
        ],
        pattern: "ลายทางแนวตั้งจางๆ พาดสีข้างแบบเสือ ที่ค่อยๆ แตกสลายเป็นลายจุดกระจายบริเวณสะโพกและขา ช่วยพรางตัวในเงาไม้ที่แตกเป็นลำแสง ลายเส้นเรืองแสงบางๆ ที่ปรากฏขึ้นเฉพาะตอนร่างกายร้อนจากการวิ่งซ้อนทับอยู่เหนือลายพรางนี้อีกชั้น",
        pal: [["สีหลัก", "#5a6670"], ["เงา", "#1c242b"], ["แสง", "#c3ccd4"], ["เสริม A", "#b56a3a"], ["เสริม B", "#c9a24a"]],
        hl: ["#ff7a3d", "ส้มแดงเรืองแสง"],
        hlAt: "แถบเรืองแสงข้างแก้มและสันจมูก · ท่อระบายความร้อนตามแนวสันหลัง · กระจุกขนปลายหาง · ประกายในดวงตาเมื่อจับเป้าได้",
        palNote: "ตัวมันเป็นสีเย็นเทาน้ำเงินกลืนไปกับหมอกและเงาไม้ แต่ทุกจุดที่เกี่ยวข้องกับ \"ความร้อน\" กลับเรืองสีส้มแดงตัดออกมาชัดเจน — เป็นสัตว์ที่ตัวเย็นแต่ล่าด้วยความร้อน",
        mutationFull: {
            proTitle: "จมูก / การรับรู้ความร้อนตกค้าง",
            proDesc: "ระบบรับความร้อนพัฒนาจนอ่านรอยเท้าอุ่นที่หลงเหลือบนพื้นได้นานถึงครึ่งชั่วโมง ทำให้ตามรอยฝูงเหยื่อในป่าหมอกที่กลิ่นถูกความชื้นชะล้างไปหมดได้ ในถิ่นที่นักล่าอื่นตามกลิ่นไม่ได้เลย",
            conTitle: "ผิวหนัง / การพรางตัวเมื่อเคลื่อนไหว",
            conDesc: "ระบบระบายความร้อนที่เรืองแสงทำให้ซ่อนตัวได้ดีเยี่ยมตอนนิ่ง แต่พอวิ่งไล่จนตัวร้อน แนวสันหลังและลายเรืองแสงจะสว่างขึ้นจนเหยื่อมองเห็นได้ในที่มืด ยิ่งไล่นาน มันก็ยิ่งเปิดเผยตัวเอง จึงต้องจบการล่าให้เร็ว"
        },
        dangerDetail: {
            raw: "96 / 200", percent: 48, tier: "อันตราย (Dangerous)",
            factors: ["ปากแยกกางสี่ทิศพร้อมเขี้ยวโค้ง (+9)", "ระบบมองความร้อนสองชั้น (+8)", "ขายาวไล่ล่าทางไกล (+6)"],
            note: "คิดจาก 1 ตัวเท่านั้น: เมื่อล่าเป็นฝูง 5–8 ตัวพร้อมระบบสื่อสารด้วยแสงที่ทำให้ประสานงานได้เงียบสนิท ความอันตรายจริงเทียบเท่าระดับ Apex Predator"
        },
        combat: [
            ["การล่าแบบ \"ไล่ให้ร้อน\"", "Karvos ไม่จู่โจมทันที แต่ไล่ต้อนเหยื่อให้วิ่งจนอุณหภูมิร่างกายสูงขึ้น เพราะเหยื่อที่ร้อนจะสว่างขึ้นในสายตาของมัน ยิ่งเหยื่อวิ่งหนีนานเท่าไหร่ มันก็ยิ่งมองเห็นชัดขึ้นเท่านั้น"],
            ["สื่อสารด้วยแสงแทนการหอน", "ล่าในความเงียบสนิท ใช้แถบเรืองแสงข้างแก้มกะพริบเป็นรหัส มองเห็นได้เฉพาะสมาชิกฝูงที่ล้อมอยู่รอบทิศ เหยื่อจะไม่รู้เลยว่าถูกล้อมไว้แล้วจนกระทั่งสายเกินไป"]
        ],
        /* abilities — ทักษะประจำตัวที่ "เห็นใช้งานจริง" ต้องเผชิญหน้ามากพอ (TIER 2
           เหมือน combat) แยกจาก weapons (อาวุธ/การป้องกันทางกายภาพ) เพราะนี่คือ
           ความสามารถเชิงระบบ — ประสาทสัมผัส, การพราง, การสื่อสาร, กลยุทธ์ที่สืบทอด
           ข้ามรุ่น — มี Lore ที่มาชัดเจนของตัวเอง ผูกเชื่อมกับ creature อื่นและกับ
           ฉากจริงใน data/journey.js ได้ (ดู origin ของแต่ละทักษะด้านล่าง) */
        abilities: [
            {
                name: "การมองเห็นรังสีความร้อนสองชั้น", type: "Sensory — ประสาทสัมผัส",
                desc: "ดวงตาคู่หน้าให้ภาพสามมิติตามปกติ ส่วนแอ่งรับความร้อนใต้ตาทั้งสองข้างและใต้คางอีกหนึ่งจุดสร้างภาพซ้อนทับเป็นคราบความอุ่น — ไม่ใช่เห็นแค่ 'มีอะไรอยู่ตรงนั้น' แต่เห็นว่าตรงไหนของร่างเหยื่อร้อนกว่าตรงไหน",
                origin: "วิวัฒนาการขึ้นเพื่อชดเชยหมอกหนาที่ปกคลุม Verath เกือบตลอดเวลา ในยุคที่บรรพบุรุษของมันยังล่าด้วยสายตาปกติล้วนๆ อัตราการล่าพลาดในหมอกทึบสูงจนเกือบทำให้สายพันธุ์สูญพันธุ์ แอ่งรับความร้อนจึงไม่ใช่อวัยวะเสริม แต่คือเหตุผลเดียวที่มันยังอยู่รอดมาถึงทุกวันนี้"
            },
            {
                name: "การพรางตัวด้วยสีเย็น", type: "Concealment — การพรางตัว",
                desc: "ขนสีเทาน้ำเงินเย็นกลืนไปกับเงาไม้และหมอกได้สนิทตอนลำตัวยังเย็น เดินผ่านพุ่มไม้ในระยะไม่ถึงห้าเมตรได้โดยไม่มีใครสังเกตเห็น — แต่เป็นการพรางตัวที่ทำลายตัวเองได้: ยิ่งไล่ล่านานเท่าไหร่ ท่อระบายความร้อนใต้ผิวก็ยิ่งเรืองแสงส้มแดงขึ้นเรื่อยๆ จนสิ่งที่เคยซ่อนอยู่ในเงาไม้กลายเป็นจุดสว่างที่มองเห็นได้ไกล",
                origin: "เป็นการแลกที่มากับระบบระบายความร้อนของมันเอง สีตัวไม่ได้ถูกออกแบบมาเพื่อพรางในเวลาไล่ล่า แต่เพื่อพรางตอนซุ่มรอ — ฝูงที่ล่าเก่งจริงจึงต้องจบการไล่ให้เร็วที่สุด ก่อนที่ตัวเองจะกลายเป็นสิ่งที่มองเห็นง่ายที่สุดในป่าแทนเหยื่อ"
            },
            {
                name: "การสื่อสารด้วยแสงเงียบ", type: "Social — การสื่อสารในฝูง",
                desc: "แถบเรืองแสงข้างแก้มกะพริบเป็นจังหวะสั้น-ยาวต่างกันแทนความหมาย มองเห็นได้เฉพาะมุมที่สมาชิกฝูงล้อมอยู่รอบทิศเท่านั้น ไม่มีเสียงหอนหรือเสียงร้องใดๆ หลุดออกไปให้เหยื่อรู้ตัวก่อนเวลา",
                origin: "พัฒนาขึ้นแทนการหอนแบบสัตว์ฝูงทั่วไป เพราะการล่าด้วยความร้อนต้องอาศัยจังหวะเงียบสนิทเพื่อไม่ให้เหยื่อตื่นตกใจจนวิ่งกระจายก่อนถูกล้อมครบวง สายเลือดที่ยังหอนอยู่ล่าไม่สำเร็จพอจะสืบทอดต่อมาได้"
            },
            {
                name: "กลยุทธ์ไล่ให้ร้อน", type: "Hunting Tactic — กลยุทธ์การล่า",
                desc: "ไม่จู่โจมทันทีที่เจอเหยื่อ แต่ไล่ต้อนให้วิ่งจนอุณหภูมิร่างกายสูงขึ้นก่อนเสมอ เพราะเหยื่อที่ร้อนคือเหยื่อที่มองเห็นชัดที่สุดในสายตารับความร้อนของมัน เป็นการเปลี่ยนแรงตอบสนองตามสัญชาตญาณของเหยื่อ (วิ่งหนี) ให้กลายเป็นอาวุธของตัวเอง",
                origin: "ผูกตรงกับ Luvenn ที่ต้องอาบแสงจนตัวอุ่นเพื่อดำรงชีวิต — พฤติกรรมที่หล่อเลี้ยงชีวิต Luvenn คือสัญญาณเดียวกับที่เรียก Karvos มาหาแบบเจาะจง ไม่ใช่เรื่องบังเอิญ แต่เป็นแรงกดดันวิวัฒนาการที่ผลักทั้งสองสายพันธุ์ให้ล็อกกันแบบนี้มานานนับล้านปี"
            },
            {
                name: "ความจำกลยุทธ์ข้ามรุ่น", type: "Cognitive — ความจำระดับฝูง",
                desc: "กลลวงหรือจุดอ่อนของเหยื่อที่ฝูงหนึ่งเคยเรียนรู้มา จะถูกส่งต่อเป็นรูปแบบพฤติกรรมล่าที่ลูกฝูงรุ่นถัดไปทำตามได้เองโดยแทบไม่ต้องลองผิดลองถูกซ้ำ ไม่ใช่ความจำแบบปัจเจกตัวต่อตัว แต่เป็นรูปแบบพฤติกรรมที่ฝังอยู่ในวิธีล่าของทั้งฝูง",
                origin: "หลักฐานชัดเจนที่สุดคือปุ่มเรืองแสงลวงเป้าที่หางของ Ozgrun — กลลวงที่เคยได้ผลกับ Karvos ตัวเดียวโดดๆ ในอดีต แต่ฝูงที่ล่า Ozgrun ซ้ำมาหลายรุ่นรู้ทันแล้วว่าปุ่มนั้นเป็นของปลอม จึงมุ่งเจาะกลางวงม้วนตัวตรงๆ ไม่สนใจปุ่มที่หางอีกต่อไป — เป็นความรู้ที่ไม่มีตัวใดตัวหนึ่งเคยพิสูจน์เองในชีวิตเดียว แต่ทั้งฝูงรู้ร่วมกัน"
            }
        ],
        confusion: [
            ["เงาร่างสี่ขาลำตัวลึก อกกว้างเอวคอด", "มี", "มี", "no"],
            ["สันหลังโหนกเป็นแนว", "มี (กล้ามเนื้อขุด)", "มี (ท่อระบายความร้อน)", "no"],
            ["หูตั้งแหลมหมุนได้", "มี", "มี", "no"],
            ["หางยาว", "มี (สมอยึดโพรง)", "มี (ธงนำทาง)", "no"],
            ["ขนาดตัวระดับ 4", "มี", "มี", "no"],
            ["มีกรงเล็บและเขี้ยว (เป็นนักล่า)", "มี", "มี", "no"],
            ["จำนวนที่มาพร้อมกัน", "ล่าเดี่ยว/เป็นคู่", "ฝูง 5–8 ตัว", "warn"],
            ["ตำแหน่งที่โจมตี", "จากใต้ดินขึ้นบน", "จากรอบทิศบนพื้น", "yes"],
            ["ดวงตา", "รูม่านตาแนวตั้ง", "ตาหน้า + แอ่งรับความร้อน", "yes"],
            ["ปาก", "เขี้ยวหน้าโค้ง อ้าไม่กว้าง", "ปากแยกกางสี่ทิศ อ้ากว้างมาก", "yes"]
        ],
        notes: [
            ["warn", "<strong>ประเด็นที่แหลมคมที่สุดในเรื่อง</strong>. Luvenn ดำรงชีวิตด้วยการอาบแดดจนตัวอุ่น ส่วน Karvos ล่าด้วยการมองหาความอุ่น ฝูง Luvenn ที่เพิ่งกางแผงคอรับแสงเสร็จจึงสว่างโพลนราวคบไฟในสายตาของ Karvos: <em style='color:#ffb84a'>พฤติกรรมที่หล่อเลี้ยงชีวิตพวกมัน คือพฤติกรรมเดียวกับที่เรียกความตายมาหา</em> และเมื่อตกใจวิ่งหนี ตัวก็ยิ่งร้อน ยิ่งสว่าง ยิ่งถูกไล่ล่าง่ายขึ้น ยกเว้นตัวเอกตัวเดียวที่ไม่ได้วิ่ง"]
        ],
        prompt: "A medium dog-sized alien wolf-like pack predator standing 0.95 meters at the shoulder, lean and long-limbed with the deep chest and narrow waist of a long-distance chase hunter, but with an unusually thick neck and heavy shoulders. Its head is a long tapering wolf-like skull with a pair of forward-facing pale amber predator eyes, and beneath each eye runs a deep vertical heat-sensing pit organ groove down toward the muzzle. It has a long wolf muzzle with a permanently damp nose, and right now its mouth is wide open in a four-way radial split: not a simple gape, but four distinct wedge-shaped flesh flaps — one pointing straight up, one straight down, one left, one right, exactly like the four points of a plus sign or an X — peeled apart from a shared central opening with clear dark negative space visible between each flap, each flap independently lined with its own row of curved inward-facing fangs, the whole open maw reading unmistakably as a four-petaled flower of teeth rather than an ordinary animal snarl, its jaw circumference nearly twice that of a real wolf, with a throat that glows a dim menacing orange-red deep inside the central opening. Its tall pointed ears rotate independently and are so thin they glow translucent when backlit, showing a web of capillaries. A single downward-facing heat-sensing pit sits beneath its chin. Glowing orange-red bioluminescent stripes run along its cheeks and the bridge of its snout. Its body is a four-legged wolf frame, and along its spine from nape to tail base runs a raised ridge of erectile fur beneath which faintly glowing heat-vent channels shine warm orange. It has 2 pairs of legs: long slender wolf-like front legs with broad splayed paws, thin webbing between the toes and heat-sensing pads underneath, and deep-jointed muscular hind legs built for sustained pursuit. Its long bushy tail ends in a tuft of fur that glows soft orange. Its torso is covered in a dense double coat of coarse water-repellent fur where each hair is hollow with a translucent core, letting body heat glow faintly through at the roots, while its face and the skin around the heat pits are bare, smooth and dark, and its paws and belly are thick calloused hide. Faint vertical tiger-like stripes run along its flanks and dissolve into scattered leopard-like spots across its haunches and legs, overlaid with delicate luminous lines that only appear when its body runs hot. It hunts by heat, tracking the warmth left in footprints, at the visible cost of glowing brighter the longer it runs. Its coloration is a harmonious cool smoke blue-grey palette, deepened by near-black blue shadows in the recesses and lifted by pale silver-grey highlights along the raised fur and ridges, with warm brick-orange tones woven through the neck and shoulder fur and muted amber at the eyes and hair tips, and a glowing orange-red highlight reserved only for its cheek stripes, its spinal heat vents, its tail tuft and the catchlight in its eyes. It stalks low through the dark misty undergrowth of an alien fog-forest floor, among tangled roots, black mud and standing water, head lowered and turned to face the viewer nearly head-on so its four-way split maw is fully visible and unmistakable, spinal ridge fur raised and faintly glowing.\n\nPhotorealistic 3D creature render, cinematic film-VFX quality, standing full-body in its natural habitat environment, three-quarter view with the head turned to camera, shot with a telephoto lens at eye level, shallow depth of field with softly blurred background foliage, volumetric god rays filtering through mist from above, soft naturalistic backlighting that makes the translucent ears and fur glow from within, hyper-detailed micro-texturing on every hair and surface, subsurface scattering, physically-based rendering, muted natural color grading with deep shadows, 1:1 square composition, subject centered and fully visible from head to feet, no readable text."
});
