/* ITH-A-001-000 — Vorthak (EXTINCT) — redesign 2026-09-01: Tier I → Tier IV (Anatomically Unbound) */
creaturesData.push({
        id: "ITH-A-001-000", name: "Vorthak", nickname: "สัญชาตญาณที่ไม่เคยเห็นตัว", status: "EXTINCT", era: "ยุคหมุนเวียน (Cycling Era)",
        imageKey: "VORTHAK", color: "#ff3b28",
        category: "สัตว์กินเนื้อ · ผู้ล่าสูงสุดประจำถิ่น (Apex Predator, pursuit-crusher) — Alien Intensity Tier IV", habitat: "ทุ่งหินตะกอนโล่งแจ้งเชิงเทือกเขา Sorn",
        danger: "88% (Apex Predator)", size: "ระดับ 6 — ใหญ่มาก (เท่าช้าง)", height: "2.6 ม. ที่ไหล่ · 7.6 ม. ยาวรวมหาง", weight: "3,800 กก.",
        desc: "เครื่องจักรกระแทกขนาดยักษ์ที่ไม่มี \"หน้า\" แบบสัตว์ใดเลย อวัยวะรับสัมผัสทั้งหมดกระจายไม่สมมาตรอยู่หน้าลำตัวแทน เป็นร่างที่ตัวเอกสวมใส่นานที่สุดในอดีต (~300,000 ปี) ต้นตอของสัญชาตญาณการต่อสู้ทั้งหมดในฉากตื่นรู้ — ไม่ผูก silhouette กับ Luvenn เลย เชื่อมกันแค่เทคนิคการล่าแบบ Counter ที่ยังไหลอยู่ในสัญชาตญาณ สูญพันธุ์ไปในเหตุการณ์ฤดูหนาวใหญ่",
        mutation: { pro: "โครงกระดูกทึบตัน มีแรงปะทะมหาศาล แปลงมวลกายเป็นอาวุธ", con: "ไร้ขนปกคลุม ทนความหนาวไม่ได้เลยแม้แต่น้อย" },
        weapons: [ "ขากรรไกรบดกระดูก (แรงกัดสูงสุดในระบบนิเวศ)", "ขาหน้ากระแทก (แรงฟาด 2 ตัน)", "กลุ่มเดือยกระดูกแตกแฉกไม่สมมาตรหน้าลำตัว (Fracture-Spur Cluster)", "หางแตกแขนงปลายไม่สมมาตร กวาด 360 องศา" ],
        social: "ล่าเดี่ยวโดยสมบูรณ์ พบตัวอื่นเฉพาะฤดูผสมพันธุ์ ก้าวร้าวถึงขั้นฆ่ากันเองเมื่อรุกล้ำอาณาเขต (~400 ตร.กม./ตัว) · อายุขัย 180–240 ปี",
        head: [
            ["การรับรู้เป้าหมาย (ไม่เป็นคู่ ไม่มีตำแหน่ง \"หน้า\")", "กลุ่มแอ่งรับแรงสั่น/แรงดันอากาศกระจายไม่สมมาตรทั่วหน้าลำตัว", "ไม่มีดวงตาแบบสัตว์ทั่วไปเลย มีแต่แอ่งรับสัมผัสจำนวนไม่เท่ากันทั้งสองข้างของลำตัว วัดระยะเป้าหมายจากแรงสั่นสะเทือนของพื้นดินและแรงลมที่เคลื่อนผ่านมากกว่าการมองเห็นภาพ แม่นยำที่สุดในระยะพุ่งชน"],
            ["โพรงรับกลิ่นเลือดแบบแฟรกทัล", "เครือข่ายโพรงแตกแขนงคล้ายถ้ำย่อยไม่รู้จบ ไม่ใช่โพรงเดี่ยว", "แทนที่จะเป็นโพรงจมูกเดียว เป็นเครือข่ายโพรงแตกแขนงซับซ้อนขึ้นเรื่อยๆ ตามอายุ (รูปแบบเดียวกับรอยแตกบนเกราะ) ดมกลิ่นเลือดได้ไกลถึง 8 กิโลเมตรในทุ่งโล่ง ยิ่งตัวแก่เครือข่ายยิ่งซับซ้อน ยิ่งดมได้ไวขึ้น"],
            ["ปาก — รอยแยกที่ถ่างทั้งหน้าลำตัว", "ไม่ใช่ขากรรไกรคู่เดียว แต่เป็นรอยแตกตามแนวเกราะที่ถ่างออกเผยวงแหวนแผ่นบดซ้อนกันหลายชั้น", "เมื่อเตรียมกัด รอยแตกตามลายเกราะหน้าลำตัวจะถ่างออกพร้อมกันเป็นปากบานคล้ายดอกไม้หิน เผยวงแหวนแผ่นกระดูกบดซ้อนกันหลายชั้นด้านใน แรงกัดสูงสุดในระบบนิเวศ กลืนกระดูก/เกราะเหยื่อได้ทั้งหมดไม่เหลือซาก"],
            ["การรับเสียง", "ไม่มีหูเลย รับผ่านเครือข่ายเกราะทั้งตัว", "ทั้งร่างทำหน้าที่เป็นแผ่นรับแรงสั่นเดียวกัน ไม่มีจุดรับเสียงเฉพาะจุด ทำให้ไม่มีจุดเปราะบางที่จะถูกกัดขาดในการปะทะเหมือนหูสัตว์ทั่วไป"],
            ["EXTRA #1", "กลุ่มเดือยกระดูกแตกแฉกไม่สมมาตร (Fracture-Spur Cluster)", "แทนที่เกราะหน้าผากและเขาคู่แบบเดิม เป็นกลุ่มเดือยกระดูกจำนวนไม่เท่ากันงอกแตกแฉกไม่สมมาตรจากหน้าลำตัว แต่ละเดือยยาว/โค้งต่างกัน ใช้เกี่ยวงัดเหยื่อและเป็นค้อนกระแทกในตัวเดียวกัน มีโพรงอากาศซับแรงกระแทกซ่อนอยู่ในทุกเดือย"],
            ["EXTRA #2", "ร่างแหเส้นใยแร่ธาตุตามรอยแผล (Scar-Circuit Filaments)", "เส้นใยแร่ธาตุบางเรืองแสงจางงอกตามแนวรอยแตกทุกครั้งที่หายจากบาดแผล สานเป็นร่างแหซับซ้อนขึ้นเรื่อยๆ ตลอดชีวิต ทำหน้าที่รับสัมผัสมากกว่าให้ความอบอุ่น — และนี่คือจุดตายของสปีชีส์นี้ในภายหลัง เพราะไม่มีหน้าที่กักเก็บความร้อนเลยแม้แต่น้อย"]
        ],
        body: [
            ["BODY FRAME", "โครงสี่ขาลำตัวลึกมหึมา ไร้ตำแหน่ง \"หัว\" ที่แยกจากลำตัวชัดเจน", "อกกว้างมาก คอสั้นหนาราวลำต้นไม้จนแทบกลืนเป็นเนื้อเดียวกับลำตัว ไม่มีส่วนใดอ่านออกเป็น \"หัว\" แยกต่างหากแบบสัตว์ทั่วไป — สรีระของเครื่องจักรกระแทกล้วนๆ"],
            ["SPINE", "แนวเดือยกระดูกแตกแฉกแบบแฟรกทัล ไม่ใช่แถวเรียบง่าย", "ตั้งแต่ท้ายทอยถึงโคนหาง เดือยแต่ละจุดแตกแขนงย่อยเพิ่มขึ้นตามจำนวนบาดแผลที่เคยหายมาแล้ว ในตัวที่อายุมากแนวสันหลังจึงซับซ้อนเป็นลายแฟรกทัลที่ไม่มีสองตัวเหมือนกันเลย เป็นบันทึกการต่อสู้ตลอดชีวิตที่อ่านได้ตรงตัว"],
            ["TAIL", "หางแตกแขนงปลายไม่สมมาตร น้ำหนักรวม ~200 กก.", "Utility — อาวุธกวาดพื้นที่ 360° ปลายหางแตกเป็นก้อนกระดูกหลายก้อนไม่เท่ากันห้อยจากแกนเดียว เหวี่ยงกวาดรอบตัวได้เต็มวงโดยแต่ละก้อนแกว่งไม่พร้อมกัน ทำลายทุกอย่างในรัศมี 2.4 เมตร ใช้เมื่อถูกรุมล้อมจากหลายทิศ และถ่วงสมดุลขณะยกขาหน้าฟาด — ไม่ใช่ \"แขนขาหลัก\" จึงไม่ผูกกฎสมมาตรคู่เหมือนขา"]
        ],
        limbs: [
            ["#1", "ขา", "ขาหน้า (1 คู่ ซ้าย-ขวา)", "ล่ำหนาราวเสาหิน กล้ามเนื้อไหล่มหาศาล ปลายเป็นอุ้งเท้ากว้างมีกรงเล็บทู่หนาสามนิ้ว — ยกฟาดลงได้ด้วยแรงเกือบสองตัน อาวุธหลักที่ใช้ทุบเหยื่อให้กระดูกหักในครั้งเดียว (ท่านี้คือที่มาโดยตรงของสัญชาตญาณ \"สวนกลางอากาศ\" ที่ยังไหลอยู่ในร่าง Luvenn)"],
            ["#2", "ขา", "ขาหลัง (1 คู่ ซ้าย-ขวา)", "หนาแน่นกล้ามเนื้อสะโพกใหญ่ ให้แรงส่งพุ่งชนและเตะถีบไปด้านหลังได้รุนแรงพอทำให้สัตว์ขนาดกลางกระดูกซี่โครงยุบ ป้องกันตัวจากด้านหลังโดยไม่ต้องหันตัว (ที่มาของ \"เตะหลัง\" และจังหวะเข้า-ออกที่สืบทอดมาเช่นกัน)"]
        ],
        skin: [
            ["ทั่วลำตัว", "หนังหนา 6 ซม. เหนียวเหมือนยาง มีแผ่นกระดูกกลม (osteoderm) ฝังใต้ผิวหนังเรียงไม่เป็นตารางสม่ำเสมออีกต่อไป แต่กระจายตามแนวรอยแตกแฟรกทัล — เขี้ยวของ Thessek แทงทะลุไม่ได้เลย"],
            ["หน้าลำตัว/ไหล่/สันหลัง", "เกราะกระดูกแท้ประกบซ้อนกันเป็นลายแฟรกทัลที่แตกแขนงจากจุดที่เคยบาดเจ็บจริง ผิวด้านหยาบเต็มไปด้วยรอยแผลเป็นและรอยบิ่น ตามรอยแตกมีประกายแร่ธาตุจางๆ เหมือนหินแปรมากกว่ากระดูกสัตว์ทั่วไป"],
            ["ใต้ท้อง/ซอกขา", "หนังบางกว่าอย่างเห็นได้ชัด — จุดอ่อนเดียวของร่างกาย ซึ่งมันปกป้องด้วยการไม่ยอมล้มลงเด็ดขาด"],
            ["ร่างแหเส้นใยแร่ธาตุทั่วตัว", "เรืองแสงจางตามแนวรอยแผลเก่า ทำหน้าที่เป็นเซ็นเซอร์สัมผัสมากกว่าให้ความอบอุ่น — และนี่คือจุดตายของสปีชีส์นี้ในภายหลัง"]
        ],
        pattern: "ลายแตกแฟรกทัลที่ไม่ใช่ลายตายตัวแบบโคลนแห้งอีกต่อไป แต่เติบโตแตกแขนงจริงจากจุดที่เคยบาดเจ็บ ยิ่งต่อสู้มามาก ลายยิ่งซับซ้อนเป็นเรขาคณิตเฉพาะตัวที่ไม่มีสองตัวเหมือนกัน พร้อมรอยแผลเป็นสีซีดตัดขวางนับไม่ถ้วนแทรกอยู่ในโครงข่ายนั้น",
        pal: [["สีหลัก", "#7a3f32"], ["เงา", "#2a1512"], ["แสง", "#d9b8a8"], ["เสริม A", "#4a6b45"], ["เสริม B", "#4a6478"]],
        hl: ["#ff3b28", "แดงเลือดเรืองแสงเข้ม"],
        hlAt: "แอ่งรับสัมผัสที่เรืองแดงจางในเงามืด · ร่องลึกระหว่างแผ่นเกราะแฟรกทัลที่เผยเนื้อเยื่อเรืองแดงเมื่อร่างกายร้อนจากการต่อสู้ · ภายในรอยแยกปากเมื่อถ่างกว้าง · ร่างแหเส้นใยแร่ธาตุตามรอยแผลทั่วตัว",
        mutationFull: {
            proTitle: "โครงกระดูก / ความหนาแน่นและแรงปะทะ",
            proDesc: "กระดูกทึบตันไร้โพรงอากาศบวกเกราะแฟรกทัลใต้ผิวหนังทั่วตัว ทำให้แปลงมวลกายทั้งหมดเป็นอาวุธได้ ปะทะสิ่งใดก็ตามได้โดยแทบไม่บาดเจ็บ ไม่มีสิ่งมีชีวิตใดในทุ่งหินตะกอนที่รับการปะทะเต็มแรงแล้วยังยืนอยู่ได้",
            conTitle: "ผิวหนัง / การรักษาความอบอุ่น",
            conDesc: "เพื่อระบายความร้อนมหาศาลจากมวลกล้ามเนื้อและเกราะหนัก จึงแทบไม่มีขนเลย ทนความหนาวไม่ได้เลยแม้แต่น้อย ในยุคที่ทุ่งหินตะกอนอบอุ่นตลอดปี นี่ไม่เคยเป็นปัญหา จนกระทั่งวันที่มันกลายเป็นปัญหาเดียวที่สำคัญ"
        },
        dangerDetail: {
            raw: "176 / 200", percent: 88, tier: "จ้าวป่า (Apex Predator)",
            factors: ["ขนาดตัวระดับ 6 (+10)", "ปากถ่างบดกระดูกรอบทิศ (+10)", "ขาหน้าฟาดแรงสองตัน (+10)", "หางแตกแขนงกวาด 360° (+9)", "เกราะแฟรกทัลทั้งตัว (+9)"],
            note: "ไม่มีจุดใดในโปรไฟล์นี้ที่เป็นจุดอ่อนเชิงการต่อสู้เลย จุดอ่อนเดียวของมันคืออุณหภูมิ ซึ่งไม่ใช่สิ่งที่ต่อสู้ด้วยได้"
        },
        combat: [
            ["สวนกลางอากาศ (Counter-slam)", "รอให้เหยื่อกระโจนเข้าหา แล้วยกขาหน้ากระแทกใส่ในจังหวะที่ตัวมันลอยอยู่กลางอากาศและเปลี่ยนทิศไม่ได้ — ท่าที่ใช้จัดการ Thessek ที่พุ่งขึ้นจากโพรงมานับหมื่นครั้ง"],
            ["ปากบาน (Bloom Bite)", "รอยแตกหน้าลำตัวถ่างเปิดพร้อมกันเป็นวงแหวนบดในเสี้ยววินาที ทำให้เป้าหมายเสียหลักและมึนงงก่อนจะโดนกัดซ้ำ"],
            ["เตะหลัง (Rear kick)", "เตะถีบไปด้านหลังโดยไม่ต้องหันตัว ใช้เมื่อมีศัตรูเข้าประชิดจากทางท้าย"],
            ["จังหวะเข้า-ออก", "ไม่ยืนรับการรุมโจมตี เคลื่อนเข้าปะทะแล้วถอยออกทันที ไม่ให้ศัตรูหลายตัวเกาะติดพร้อมกัน — จังหวะที่ต้องอาศัยประสบการณ์นับแสนปีจึงทำได้อย่างเป็นธรรมชาติ"]
        ],
        abilities: [
            {
                name: "การรับรู้รอบทิศโดยไม่มีตา", type: "Sensory — ประสาทสัมผัส",
                desc: "แอ่งรับแรงสั่น/แรงดันอากาศที่กระจายไม่สมมาตรทั่วหน้าลำตัวรวมกันเป็นภาพเป้าหมายรอบทิศทางเดียว ไม่มีมุมอับสายตาเลยแม้แต่จุดเดียว วัดระยะพุ่งชนได้แม่นยำโดยไม่ต้องมองเห็นภาพจริง",
                origin: "นักล่าที่ชนะด้วยมวลกายมหาศาลไม่มีเวลาพลาดแม้แต่ครั้งเดียว ระบบสายตาที่มีมุมอับจะทำให้พลาดจังหวะพุ่งชนได้ ธรรมชาติจึงเลือกทางที่ไม่มีมุมอับเลยแทน"
            },
            {
                name: "เกราะที่เติบโตตามบาดแผล", type: "Physiology — สรีรวิทยา",
                desc: "ทุกครั้งที่บาดแผลหายดี เกราะและร่างแหเส้นใยแร่ธาตุจะแตกแขนงเพิ่มตรงจุดนั้นจริงๆ ไม่ใช่แค่แผลเป็น ทำให้ตัวที่ผ่านศึกมามากมีเกราะซับซ้อนและรับสัมผัสไวกว่าตัวหนุ่มจริง",
                origin: "อายุขัยยาวนานกว่า 200 ปีของนักล่าเดี่ยวที่ไม่มีศัตรูตามธรรมชาติ ทำให้ร่างกายมีเวลาสะสมการปรับตัวจากประสบการณ์จริงแทนที่จะรอวิวัฒนาการข้ามรุ่น — ราคาที่ต้องจ่ายคือพลังงานทั้งหมดทุ่มไปกับระบบนี้จนไม่เหลือให้ระบบรักษาความอบอุ่นเลย"
            }
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
            ["", "<strong>redesign 2026-09-01</strong>: ปรับจาก Tier I (silhouette lock ตายตัว) เป็น Tier IV (Anatomically Unbound) หลังยกเลิกกฎ Silhouette Lock — Vorthak ไม่เคยผูก silhouette กับ Luvenn จริงๆ เชื่อมกันแค่เทคนิคการล่าแบบ Counter ที่ไหลผ่านสัญชาตญาณเท่านั้น จึงปลดอิสระทางกายวิภาคได้เต็มที่ ยกเว้นขาหน้า-ขาหลัง (2 คู่) ที่ต้องคงไว้เพราะผูกกับท่า \"สวนกลางอากาศ\"/\"เตะหลัง\" ที่เขียนไว้แล้วใน data/journey.js ฉากตื่นรู้"],
            ["warn", "<strong>สัญชาตญาณที่ไม่มีภาพประกอบ</strong>: Confluence เองก็ไม่เคยเห็น \"หน้า\" ของ Vorthak เลยแม้แต่ครั้งเดียวในความทรงจำ เพราะร่างนี้ไม่มีหน้าให้จำตั้งแต่ต้น — สิ่งที่หลงเหลือมาถึงฉากตื่นรู้จึงเป็นแค่ท่วงท่าการเคลื่อนไหวล้วนๆ ไม่มีภาพใบหน้าให้เชื่อมโยง ตรงกับกฎ \"ภาพของร่างเก่าส่งต่อไม่ได้\" ใน memory-and-transformation.md เป๊ะๆ"]
        ],
        prompt: "A massive, deeply alien apex predator standing 2.6 meters at the shoulder, built like a living battering ram with no discernible head at all — its entire front torso reads as one fused mass where a head might be expected, deceptively unstoppable once it commits to a charge. Instead of eyes, a cluster of pressure-and-vibration-sensing pits scattered asymmetrically across its front mass, unequal in number and position on either side, reads the ground tremor and air pressure of a target with total accuracy from any angle rather than seeing an image at all. In place of a single nose, a branching fractal network of scent-cavities honeycombs its skull-mass, growing more intricate with age, letting it scent blood up to 8 kilometers across open plain. It has no separate mouth in a fixed location: fracture lines running across its armored front mass split open all at once into a flower-like ring of overlapping bone-crushing plates, built to snap and swallow bone whole rather than shear meat, closing again into smooth cracked armor when not in use. It has no ears at all; its entire armored shell conducts vibration as a single sensory surface, leaving no single vulnerable point the way an ear would. Instead of a paired crest and horns, an irregular, asymmetric cluster of jagged bone spurs of differing lengths and curves erupts from the front of its mass, used to hook and lever prey off balance and as a battering weapon, each spur hollow inside to absorb impact shock. A faint glowing network of mineral filament traces across its entire body, branching outward from every point it has ever been wounded and healed, functioning as a touch sensor rather than for warmth. Its body has a deeply keeled chest and thick tree-trunk build, shoulders noticeably higher than its hips, with no neck distinct from its head-mass — the frame of a machine built not for speed but for an unstoppable charge — its spine bearing a fractal branching array of bone spikes, denser and more intricate wherever old wounds have healed, so that no two individuals ever carry the same pattern. Its tail is long and thick, ending not in a single club but in several unequal bone masses hanging loosely from one shared root, swinging independently as it sweeps a full 360 degrees, flattening everything within a 2.4-meter radius when surrounded from multiple sides, and counterbalancing its body as its front legs strike. It stands on four legs in two ordinary matched pairs: the front limbs are immensely thick like stone pillars with massive shoulder muscle, ending in broad paws with three blunt heavy claws that slam down with nearly two tons of force and shatter prey bone in a single blow; the hind limbs carry dense hip muscle, powering the charge and driving a rear kick strong enough to crack the ribs of a mid-sized animal without it ever needing to turn around. Its entire body is sheathed in 6-centimeter-thick rubbery hide with round bone osteoderms embedded beneath it, no longer arranged in a neat grid but following the branching fractal fracture-pattern of its armor, while its front mass, shoulders and spine carry true interlocking bone armor plates, deeply scarred and chipped, faint mineral glints catching along the cracks like a metamorphic rock face, and its underbelly and leg-pits are noticeably thinner skin — the single weak point on its body, one it protects only by refusing ever to fall. A glowing fractal network of mineral filament threads across its entire body, branching wherever it has healed from injury. A cracked, branching fractal pattern of pale fissures runs across its entire body, growing more intricate and unique with every wound it has survived, deepening with age into a dense mesh of pale battle scars unlike any other individual's. Its solid, cavity-free bone and full-body armor let it convert its entire mass into an unstoppable weapon that nothing in its ecosystem can withstand at full impact, at the cost of having almost no coat to retain heat, leaving it utterly unable to tolerate even mild cold. Its coloration is a harmonious deep dried-blood rust-red and clay-brown palette, deepened by near-black brown shadows in the recesses and lifted by pale dusty beige highlights along the spinal spikes, with muted olive-green tones worked into the deep skin folds and old scar tissue and cool slate blue-grey in the underbelly and leg-pit shadows, and a glowing deep blood-red highlight reserved only for its sensory pits in shadow, the deep fractal grooves between its armor plates when its body runs hot from battle, and the inside of its bloom-bite maw when it splits open. It stands aggressively in a barren, open sedimentary rock plain at the foot of the Sorn mountains, distant sandstone pillars and swirling dust behind it, its front mass lowered and its bloom-bite fracture lines beginning to split open.\n\nPhotorealistic 3D creature render, cinematic film-VFX quality, standing full-body in its natural habitat environment, three-quarter view, shot with a telephoto lens at eye level, shallow depth of field with softly blurred background rocky terrain and drifting dust, volumetric god rays raking low across the plain, soft naturalistic backlighting that makes the glowing fractal filaments and sensory pits glow from within, hyper-detailed micro-texturing on every scar and surface, subsurface scattering, physically-based rendering, muted natural color grading with deep shadows, 1:1 square composition, subject centered and fully visible from head to feet, no readable text."
});
