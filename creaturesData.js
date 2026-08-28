/* ==================================================================
   IMAGE LIBRARY (Google Drive Thumbnail Links)
================================================================== */
const IMAGE_LIBRARY = {
    VORTHAK: "https://drive.google.com/thumbnail?id=1OiaJsDKfbT5tU648MaG1SOtKPCcdy_RK&sz=w1000",
    LUVENN: "https://drive.google.com/thumbnail?id=1tkBRJ8HEdstjAC4Cn1o4z5msB9bhLNU_&sz=w1000",
    KARVOS: "https://drive.google.com/thumbnail?id=1BYJE5iwJ3fKKJnZZDeACr0UYbEZ0EaG6&sz=w1000",
    THESSEK: "https://drive.google.com/thumbnail?id=13qIStx13DfiiSd-vkBY9zwV5I-kUmTgH&sz=w1000",
    SKYTHER: "https://drive.google.com/thumbnail?id=1ryqkoLH0ZqigZLaGC9wc6W1CPeD8biVu&sz=w1000",
};

/* ==================================================================
   CREATURES DATABASE
================================================================== */
const creaturesData = [
    {
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
        prompt: "A massive alien dinosaur-like apex predator standing 2.6 meters at the shoulder, heavily armored and built like a living battering ram. Its head features a thick bony battering crest covering its forehead, ending in two blunt forward-curving bone spurs. It has small forward-facing eyes with deep crimson vertical-slit pupils, set deep in protective bone sockets. Its massive jaws are lined with thick conical bone-crushing teeth, not meant for shearing meat but snapping bones. It has a deeply keeled chest, a thick tree-trunk neck, and shoulders noticeably higher than its hips. A row of thick, sharp bone spikes runs along its spine from nape to the base of the tail, highest at the shoulders to form a prominent hump, heavily scarred from a lifetime of combat. Its tail is long and thick, ending in a massive bone club structure. It stands on four legs: the front limbs are immensely thick like stone pillars, ending in broad paws with three blunt heavy claws; the hind limbs are powerfully muscled for charging. Its entire body is covered in 6cm-thick rubbery hide with round bone osteoderms embedded under the skin, forming a cracked mud-like pattern. The head, shoulders, and spine are covered in true interlocking bone armor plates, deeply scarred. It has sparse, wire-like bristles scattered across its body. The coloration is a deep dried-blood rust red and clay-brown palette, with bone-white scars and pale dusty beige highlights on the spinal spikes. The eyes glow with a fierce crimson light in the shadows. It stands aggressively in a barren rocky plain with distant sandstone pillars and swirling dust, roaring. Photorealistic 3D creature render, cinematic film-VFX quality, telephoto lens, shallow depth of field, dramatic dusty lighting, highly detailed textures, Unreal Engine 5 style."
    },
    {
        id: "ITH-A-338-104", name: "Thessek", status: "EXTINCT", era: "ยุคหมุนเวียน (Cycling Era)",
        imageKey: "THESSEK", color: "#ffb84a",
        category: "นักล่าลำดับรองแบบซุ่มขุด (Mesopredator, ambush burrower)", habitat: "ทุ่งหินตะกอนโล่งแจ้งเชิงเทือกเขา Sorn",
        danger: "41% (Dangerous)", size: "ระดับ 4 — กลาง (เท่าสุนัขใหญ่)", height: "0.85 ม. ที่ไหล่", weight: "68 กก.",
        desc: "นักล่าลำดับรองที่ตกเป็นเหยื่อประจำของ Vorthak ขุดโพรงซุ่มและพุ่งแทงจากด้านล่าง รูปร่างภายนอกมีส่วนคล้าย Karvos มากจนทำให้สัญชาตญาณเก่าของตัวเอกสับสนในฉากตื่นรู้",
        mutation: { pro: "แรงขุดและตะปบสูง ขุดโพรงซุ่มได้เร็วมาก", con: "ความเร็วในการวิ่งระยะไกลต่ำ หนี Apex Predator ไม่พ้น" },
        weapons: [ "กรงเล็บหน้าโค้งยาว 3 นิ้ว (คมสองด้าน)", "เขี้ยวหน้ายาวโค้ง (คล้ายงาสั้น)", "หนามกระดูกคู่บนสันจมูก (งัดจากล่างขึ้นบน)" ],
        social: "ล่าเดี่ยวหรือเป็นคู่ ยึดอาณาเขตโพรงของตัวเอง ก้าวร้าวต่อ Thessek ตัวอื่นที่รุกล้ำ",
        head: [
            ["ดวงตา", "ม่านตาเหลืองขุ่น รูม่านตาแนวตั้ง", "ปรับรับแสงได้กว้างมาก มองเห็นทั้งในโพรงมืดสนิทและบนทุ่งแดดจ้า วัดระยะได้พอประมาณแต่ไม่แม่นเท่านักล่าไล่ล่า"],
            ["จมูก", "จมูกกว้างแบน รูจมูกปิดสนิทได้", "ดมกลิ่นผ่านชั้นดินได้ ตรวจจับสัตว์ขุดใต้ดินที่เคลื่อนไหวอยู่ลึกถึงครึ่งเมตรใต้เท้าตัวเอง"],
            ["ปาก", "เขี้ยวหน้าคู่ยาวโค้งคล้ายงาสั้น", "ใช้แทงตรึงเหยื่อจากด้านล่างและงัดตัวเหยื่อขึ้นจากโพรง ด้านในเป็นฟันตัดคมเรียงถี่สำหรับฉีกเนื้อ — ขากรรไกรอ้าได้ไม่กว้างนัก เน้นแรงกัดเฉือนมากกว่าการงับรอบตัวเหยื่อ"],
            ["หู", "หูตั้งยาวปลายมน พับปิดสนิทได้", "หมุนอิสระ ใหญ่กว่าสัดส่วนหัวเพราะต้องฟังเสียงฝีเท้าเหยื่อผ่านพื้นดินขณะซุ่มอยู่ในโพรง"],
            ["EXTRA #1", "ถุงลมข้างลำคอที่พองได้", "พองเป็นกระเปาะสองข้างแล้วคำรามความถี่ต่ำสะเทือนผ่านพื้นดิน ใช้ประกาศอาณาเขตและทำให้สัตว์เล็กที่ซ่อนใต้ดินตื่นตกใจวิ่งออกจากรูเพื่อจะได้ตะปบ"],
            ["EXTRA #2", "หนามกระดูกคู่บนสันจมูก", "แหลมสั้นโค้งไปข้างหน้า ใช้ทั้งงัดหินและกระแทกแทงเหยื่อจากด้านล่างขึ้นบนในจังหวะที่พุ่งขึ้นจากโพรง"]
        ],
        body: [
            ["BODY FRAME", "โครงสี่ขาลำตัวลึก อกกว้างเอวคอด", "ให้เงาร่างของนักล่าสี่ขาอย่างชัดเจน ลำตัวหนาแน่นแต่ยืดหยุ่นพอจะบิดตัวในโพรงแคบได้"],
            ["SPINE", "สันกล้ามเนื้อหนา ขนหยาบสั้นเรียงตั้ง", "จุดยึดกล้ามเนื้อไหล่ที่ใช้ทั้งขุดดินและตะปบ กางตั้งขึ้นเมื่อข่มขู่คู่แข่ง ทำให้เงาด้านข้างดูมีสันหลังโหนกเด่นชัด"],
            ["TAIL", "หางยาวหนาผิวเปลือยเป็นปล้องแข็ง", "Utility — สมอยึดในโพรง ขณะพุ่งขึ้นจากโพรงเข้าใส่เหยื่อ หางจะขดยันผนังโพรงเป็นจุดหมุน ทำให้ได้แรงส่งเต็มที่โดยตัวไม่ถอยหลัง และใช้ค้ำพื้นเป็นขาที่สามขณะยืนสองขาสำรวจทุ่ง"]
        ],
        limbs: [
            ["#1", "ขา", "ขาหน้า", "สั้นล่ำกล้ามเนื้อหนาแบบตัวตุ่นผสมหมี ปลายเป็นกรงเล็บโค้งยาวสามนิ้ว คมทั้งสองด้าน ใช้ขุดดินเป็นหลัก แต่คมพอจะกรีดเปิดท้องเหยื่อขนาดเล็กได้ในจังหวะเดียว"],
            ["#2", "ขา", "ขาหลัง", "ยาวกว่าขาหน้า กล้ามเนื้อสะโพกหนา ใช้ดีดตัวพุ่งขึ้นจากโพรงด้วยความเร็วสูงในระยะ 2-3 เมตรแรก"]
        ],
        skin: [
            ["ลำตัว/สะโพก", "ขนสั้นหยาบแน่นสีน้ำตาลเทา ปนฝุ่นดินตลอดเวลาจนสีกลืนไปกับพื้นทุ่ง"],
            ["ไหล่/สันหลัง", "ขนหยาบยาวกว่าส่วนอื่น เป็นแผงหนาปกป้องบริเวณที่มักถูกกัดจากด้านบน — จุดที่ Apex Predator มักโจมตีเป็นอันดับแรก"],
            ["ขาหน้า/อุ้งเท้า", "หนังหนาด้านแตกลายเหมือนหนังช้าง ทนการเสียดสีกับหินและดินแข็ง"],
            ["หาง/จมูก", "หนังเปลือยเป็นปล้องแข็ง ไม่มีขนเพื่อไม่ให้ดินติดพัน"]
        ],
        pattern: "ลายจุดกระจายสีเข้มบนพื้นน้ำตาลเทา หนาแน่นที่สุดบริเวณสีข้างและสะโพก จางลงที่ใต้ท้อง — เลียนแบบลายเงาก้อนหินกระจายบนพื้นทุ่ง ช่วยพรางตัวขณะหมอบรอที่ปากโพรง มีแถบสีอ่อนพาดขวางสะโพกสองแถบ ใช้แสดงอาณาเขตต่อ Thessek ตัวอื่น",
        pal: [["สีหลัก", "#7a6b58"], ["เงา", "#2e2820"], ["แสง", "#d4c6ae"], ["เสริม A", "#4a7a80"], ["เสริม B", "#5a5a80"]],
        hl: ["#ffb84a", "เหลืองอำพันขุ่นเรืองแสง"],
        hlAt: "ดวงตาที่สะท้อนแสงในโพรงมืด (tapetum lucidum) · ถุงลมข้างลำคอเมื่อพองคำราม · ขอบในของหูเมื่อย้อนแสง",
        mutationFull: {
            proTitle: "ขาหน้า / แรงขุดและตะปบ",
            proDesc: "กล้ามเนื้อไหล่และกรงเล็บพัฒนาจนขุดโพรงซุ่มได้เร็วมากและตะปบเหยื่อขนาดเล็กให้ตายในจังหวะเดียวได้ ครองพื้นที่ล่าใต้ดินที่นักล่าอื่นเข้าไม่ถึง",
            conTitle: "ขา / ความเร็วในการวิ่งระยะไกล",
            conDesc: "ขาหน้าที่หนักและสั้นเพื่อการขุด ทำให้พุ่งได้เร็วแค่ 2-3 เมตรแรก พอเกิน 200 เมตรก็หมดแรง — ไม่มีทางหนีรอดจาก Apex Predator ที่ไล่ล่าทางไกลได้เลย นี่คือเหตุผลที่มันตกเป็นอาหารประจำของร่างเก่าของตัวเอก"
        },
        dangerDetail: {
            raw: "78 / 190", percent: 41, tier: "อันตราย (Dangerous)",
            factors: ["กรงเล็บโค้งคมสองด้าน (+8)", "เขี้ยวหน้าโค้งยาว (+7)", "หนามกระดูกบนสันจมูก (+6)"],
            note: "Thessek อันตรายต่อสัตว์ขนาดเล็กและกลางอย่างมาก และสามารถทำให้นักล่าที่ใหญ่กว่าบาดเจ็บสาหัสได้หากถูกต้อนจนมุม — แต่ต่อ Apex Predator ประจำถิ่นที่ไล่ล่าทางไกลได้ มันแทบไม่มีทางสู้เลย เพราะจุดแข็งทั้งหมดของมันคือการซุ่มโจมตีระยะประชิด"
        },
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
            ["", "<strong>กลยุทธ์การล่า \"พุ่งขึ้นจากใต้เท้า\"</strong> — ขุดโพรงตื้นแล้วหมอบรอใต้ดินโดยโผล่แค่ปลายจมูกและหู เมื่อได้ยินฝีเท้าเหยื่อผ่านเหนือหัว จะพุ่งทะลุดินขึ้นมาแทงด้วยหนามสันจมูกจากด้านล่างขึ้นบน — <em style='color:var(--accent-default)'>จุดโจมตีที่สัตว์ส่วนใหญ่ไม่มีสัญชาตญาณป้องกัน</em>"],
            ["", "<strong>พฤติกรรมยืนสำรวจ</strong> — ระหว่างเปลี่ยนจุดซุ่ม มันจะยืนสองขาหลังใช้หางยันพื้นเป็นขาที่สาม หมุนหูกวาดหาเสียงรอบทุ่ง — ท่านี้เองที่ทำให้เงาร่างของมันโดดเด่นเห็นได้จากไกล และเป็นท่าที่ Apex Predator ใช้ระบุตำแหน่งมันได้ง่ายที่สุด"],
            ["warn", "<strong>สัญชาตญาณที่ฝังลึกที่สุด</strong> — ตัวเอกล่า Thessek ซ้ำนับหมื่นครั้งตลอด 300,000 ปี จนเกิดวงจรสัญชาตญาณ: <em style='color:#ffb84a'>\"เงาร่างสี่ขาลำตัวลึก + สันหลังโหนก + หูตั้งแหลม + หางยาว + มีอาวุธ = นักล่าที่ฉันเหนือกว่า → ยืนหยัดไว้ ไม่ต้องหนี\"</em> สัญชาตญาณนี้ไม่ได้บอกว่านี่คือสัตว์ไม่มีพิษภัย — มันบอกชัดว่านี่คือนักล่าที่มีอาวุธ แต่จัดหมวดว่าเป็นนักล่าที่อยู่ต่ำกว่าตัวเองในห่วงโซ่ ซึ่งเป็นการประเมินที่ถูกต้องอย่างสมบูรณ์แบบ — เมื่อ 40 ล้านปีก่อน ในร่างที่ต่างออกไปโดยสิ้นเชิง"]
        ],
        prompt: "A medium dog-sized alien quadrupedal ambush predator standing 0.85 meters at the shoulder, solidly built and heavy for its size, with a deep chest, narrow waist and sloping hindquarters. Its head is a low flat wedge-shaped skull with a sloping forehead built to push up through soil, a pair of murky yellow eyes set slightly forward with vertical slit pupils and a reflective tapetum shine, a broad flat sealing nose at the tip of the snout, and a narrow wedge-shaped mouth with a pair of long outward-curving tusk-like front fangs for impaling and levering prey, backed by rows of fine shearing teeth, its jaw built for crushing force rather than wide gape. Tall rounded ears rotate independently and can fold flat shut, oversized relative to its head. A pair of inflatable air sacs sit on either side of its throat, swollen and translucent amber-orange with visible veins as it emits a low territorial growl, and a pair of short forward-curving bone spurs rise from the bridge of its snout, used to strike upward from below. Its body is a four-legged frame with a thick raised muscular ridge running along its spine covered in short coarse bristling hair, raised in threat display. It has 2 pairs of legs: short heavily muscled front legs like a mole crossed with a bear, ending in three long curved double-edged claws sharp enough to open prey in a single swipe, and longer powerful hind legs built to launch it explosively out of a burrow. Its long thick tapering tail is bare and segmented, braced against the ground as a third leg. Its torso and haunches are covered in short coarse dust-caked grey-brown fur, longer and shaggier across the shoulders and spine, while its forelegs and paws are thick cracked elephant-like hide and its tail and snout are bare segmented skin. Dark scattered spots cover its flanks and haunches, densest along the sides and fading toward the belly, mimicking scattered stone shadows, with two pale bands across the rump. Its powerful digging forelimbs let it hunt from beneath the soil, at the cost of tiring quickly in any long chase. Its coloration is a harmonious muted earth-brown and grey palette, deepened by near-black brown shadows in the recesses and lifted by pale dusty beige highlights along the raised fur and ridges, with cool muted teal tones in the belly and joint shadows and grey-violet woven into the darker spots, and a glowing amber highlight reserved only for its reflective eyes, its inflated throat sacs and the backlit inner surfaces of its ears. It crouches low at the mouth of a freshly dug burrow on an open windswept alien plain of pale sedimentary rock and sparse dry vegetation, distant mountains and gathering fog on the horizon behind it, spinal ridge raised, claws braced, head lowered in a predatory stance.\n\nPhotorealistic 3D creature render, cinematic film-VFX quality, standing full-body in its natural habitat environment, three-quarter view, shot with a telephoto lens at eye level, shallow depth of field with softly blurred background terrain, volumetric god rays raking low across the plain, soft naturalistic backlighting that makes the translucent throat sacs and ears glow from within, hyper-detailed micro-texturing on every hair and surface, subsurface scattering, physically-based rendering, muted natural color grading with deep shadows, 1:1 square composition, subject centered and fully visible from head to feet, no readable text."
    },
    {
        id: "ITH-014-772", name: "Luvenn", status: "ALIVE", era: "ยุคป่าหมอก (Mistwood Era)",
        imageKey: "LUVENN", color: "#6ef2a0",
        category: "สัตว์กินแสงสี่ขา (Quadrupedal photosynthetic grazer)", habitat: "ป่าหมอกชั้นกลาง (Verath, Mist Layer)",
        foodChain: "ผู้ผลิตและผู้บริโภคปฐมภูมิ — เหยื่อหลักของ Karvos",
        danger: "20% (Harmless)", size: "ระดับ 5 — ใหญ่ (เท่าม้า)", height: "1.9 ม. ที่ไหล่ · 2.8 ม. เมื่อชูคอเต็มที่", weight: "310 กก.",
        desc: "สิ่งมีชีวิตกึ่งพืช ร่างปัจจุบันที่ตัวเอกสวมอยู่ ณ จุดตื่นรู้ ไร้อาวุธ วิ่งช้ามาก ดำรงชีวิตด้วยการกางแผงคอรับแสงกระจายผ่านหมอก อาศัยมวลน้ำหนักตัวในการป้องกันตัวเมื่อจวนตัว",
        mutation: { pro: "สังเคราะห์แสงในแสงกระจายผ่านหมอกทึบได้ดีเยี่ยม", con: "ขายาวแต่ไร้มัดกล้ามเนื้อวิ่ง หนีภัยได้ช้ามาก" },
        weapons: [ "ไม่มีอาวุธโดยสิ้นเชิง", "พึ่งพาการพรางตัวและการอยู่รวมฝูง", "อาศัยมวลน้ำหนักตัวชนปะทะเท่านั้นหากถูกต้อนจนมุม" ],
        social: "ฝูงขนาดกลาง 10–30 ตัว เคลื่อนย้ายตามแสงที่ส่องผ่านเรือนยอดในแต่ละช่วงของวัน",
        head: [
            ["ดวงตา", "ตาคู่ด้านข้างหัว", "ม่านตาเขียวมรกตเรืองแสงอ่อน รูม่านตาแนวนอน มองรอบตัวได้เกือบ 360° แลกกับจุดบอดตรงหน้าที่กว้างผิดปกติ"],
            ["จมูก", "ไร้จมูกภายนอก", "มีเพียงร่องหายใจบางๆ ข้างจะงอย รับสารเคมีในอากาศผ่านผิวหนังทั่วร่างแทน"],
            ["ปาก", "จะงอยแข็งไร้ฟัน", "ไม่ใช้กินอาหาร ใช้เพียงเล็มแต่งเกล็ดใบไม้ตัวเองและดึงเศษใบแห้งออก พลังงานทั้งหมดมาจากการสังเคราะห์แสงและการดูดความชื้น"],
            ["หู", "หูใบไม้กางตั้งได้สองข้าง", "รูปทรงเหมือนใบไม้แหลมยาว หมุนจับทิศเสียงได้อิสระ ทำหน้าที่รับเสียงและรับแสงเสริมพร้อมกัน"],
            ["EXTRA #1", "แผงคอใบไม้พับได้ (Solar Ruff)", "แผ่นคล้ายใบไม้หลายสิบแผ่นเรียงซ้อนเหลื่อมรอบคอ ขอบหยักมีเส้นใบเรืองแสง พับแนบคอปกติ กางเป็นรัศมีเต็มวงเมื่อรับแสง — อวัยวะสังเคราะห์แสงหลักของสปีชีส์"],
            ["EXTRA #2", "หงอนใบไม้คู่บนกระหม่อม", "ใบไม้ยาวสองแฉกชี้ขึ้นด้านหลัง เป็นเซ็นเซอร์วัดทิศทาง/ความเข้มของแสง สั่งให้คอหันตามแสงอัตโนมัติ — กลไกเบื้องหลังพฤติกรรมเฮลิโอโทรปิซึม"]
        ],
        body: [
            ["BODY FRAME", "โครงสัตว์กีบสี่ขาสูงโปร่ง", "สรีระคล้ายกวางผสมม้า คอยาวเรียวยกสูง หลังลาดเอียงลงท้าย อกลึกแต่ท้องแฟบ (ไม่มีกระเพาะใหญ่)"],
            ["SPINE", "ปุ่มกลมเรียงเป็นแถวคล้ายตุ่มเมล็ดพืช", "ไล่จากท้ายทอยถึงกลางหลัง เป็นต่อมสะสมน้ำเลี้ยงสำรอง พองขึ้นเมื่ออิ่มแสงและยุบลงเมื่อขาดแคลน ฝูงใช้อ่านสภาพร่างกายของกันและกันได้"],
            ["TAIL", "ไม่มีหาง", "สมดุลร่างกายพึ่งพาคอที่ยาวและแผงคอที่ถ่วงน้ำหนักด้านหน้าแทน"]
        ],
        limbs: [
            ["#1", "ขา", "ขาหน้า", "เรียวยาวข้อต่อสูงแบบกวางผสมนกยาง ปลายเป็นกีบแยกสองแฉก แตกออกเป็นรากฝอยสีเขียวอ่อนหลายเส้นเมื่อวางน้ำหนักนิ่ง ใช้ดูดความชื้นและแร่ธาตุจากพื้นดินชื้นโดยตรง"],
            ["#2", "ขา", "ขาหลัง", "โครงเดียวกับขาหน้าแต่ข้อพับย้อนกลับชัดกว่า ให้แรงส่งตอนก้าวเดินระยะไกล — ไม่มีมัดกล้ามเนื้อสำหรับวิ่งเร็ว"]
        ],
        skin: [
            ["ลำตัว/สะโพก/คอ", "เกล็ดรูปใบไม้ปลายแหลมเรียงซ้อนเหลื่อมกันถี่ยิบนับพันแผ่น ให้เนื้อสัมผัสฟูนุ่มคล้ายขนสัตว์ทั้งที่เป็นเกล็ดแข็งบาง"],
            ["ขาส่วนล่าง", "หนังเปลือยเรียบสีเข้มกว่า มีร่องตามยาวเหมือนเปลือกไม้ ทนต่อการเสียดสีกับพุ่มไม้"],
            ["แผงคอ/หงอน/หู", "แผ่นใบไม้บางกึ่งโปร่งแสง เห็นเส้นใบชัดเจนเมื่อมีแสงส่องทะลุจากด้านหลัง"]
        ],
        pattern: "เส้นใบ (venation) สีอ่อนแตกแขนงบนเกล็ดทุกแผ่นทั่วทั้งตัว เข้มที่สุดบนแผงคอและจางลงตามลำตัว — ยามสังเคราะห์แสงเต็มที่ เส้นใบบนแผงคอจะเรืองแสงเขียวมรกตอ่อนๆ มองเห็นได้ในที่ร่ม",
        pal: [["สีหลัก", "#4a7a52"], ["เงา", "#1c3028"], ["แสง", "#a8c98a"], ["เสริม A", "#8a4a3a"], ["เสริม B", "#4a4470"]],
        hl: ["#6ef2a0", "เขียวมรกตเรืองแสง"],
        hlAt: "ดวงตา · เส้นใบบนแผงคอเมื่อกางรับแสง · รากฝอยที่ปลายกีบขณะดูดความชื้น",
        mutationFull: {
            proTitle: "ผิวหนัง / การสังเคราะห์แสงในแสงกระจาย",
            proDesc: "ดูดซับพลังงานจากแสงที่กระเจิงผ่านหมอกทึบได้มีประสิทธิภาพสูงกว่าพืชและสิ่งมีชีวิตอื่นบน Ithra มาก ทำให้อยู่รอดในชั้นกลางที่แสงตรงส่องไม่ถึงได้",
            conTitle: "ขา / ความเร็วในการวิ่ง",
            conDesc: "ขายาวแต่ไร้มัดกล้ามเนื้อสำหรับเร่งความเร็ว วิ่งหนีได้ช้ากว่าสัตว์เหยื่อขนาดเดียวกันอย่างชัดเจน ต้องพึ่งการอยู่รวมฝูงและการพรางตัวแทน"
        },
        dangerDetail: {
            raw: "34 / 170", percent: 20, tier: "ไม่มีพิษภัย (Harmless)",
            factors: ["ขนาดตัวที่ใหญ่ (+6)", "ขายาวเรียว (+4)", "จะงอยแข็ง (+3)"],
            note: "ไม่มีอาวุธใดๆ ทั้งสิ้น คะแนนทั้งหมดมาจากมวลกายและความสูงล้วนๆ อันตรายเพียงในแง่ \"ถูกเหยียบหรือชนโดยไม่ตั้งใจ\" เท่านั้น"
        },
        notes: [
            ["", "<strong>พฤติกรรมรับแสง (Heliotropic Display)</strong> — เมื่อพบจุดที่แสงลอดผ่านเรือนยอด Luvenn จะหยุดนิ่ง ปล่อยรากฝอยจากกีบลงดิน ชูคอขึ้นสุด แล้วกางแผงคอใบไม้ออกเต็มวง จากนั้นค่อยๆ หมุนหัวตามทิศทางแสงตลอดวันเหมือนดอกทานตะวัน ทั้งฝูงทำพร้อมกันเป็นภาพราวกับดงต้นไม้เคลื่อนที่ได้ — <em style='color:var(--accent-default)'>และนี่คือช่วงที่พวกมันเปราะบางที่สุด</em> เพราะทั้งเคลื่อนไหวช้าและถูกยึดติดกับพื้นด้วยรากชั่วคราว"],
            ["warn", "ยีนด้อยเรื่องความเร็วเป็นกุญแจของฉากตื่นรู้ — ตัวเอกไม่ได้แค่ลังเลเพราะสัญชาตญาณขัดกัน แต่โดยสรีระแล้วมันก็หนีไม่ทันอยู่แล้ว การที่มันรอดมาได้จึงขัดกับสามัญสำนึกของทั้งฝูงและตัวมันเอง"]
        ],
        prompt: "A large horse-sized quadrupedal alien herbivore standing 1.9 meters at the shoulder, deceptively light-framed with a lean, hollow-boned build, deep chest but flat belly. Its head is slightly smaller than expected for its body, with a sharp beak-like mouth with no teeth, a pair of emerald-green glowing eyes set on the sides of the head with horizontal herbivore pupils, no external nose, and a pair of tall pointed leaf-shaped ears that rotate independently. A pair of long forked leaf-like crest fronds rise from the crown of its head, angled backward. Around its neck it wears a magnificent foldable ruff built from dozens of overlapping leaf-shaped fronds of varying sizes, each with serrated edges and prominent central veins, fanned wide open in a full radiating collar to catch the light. Its body is a tall, deer-and-horse-like hoofed frame with a long raised neck, and a row of small round seed-like nodules runs along its spine from the nape to mid-back. It has 2 pairs of legs: long slender high-jointed front legs like a heron crossed with a deer, and reversed-jointed hind legs of the same build, all ending in split hooves that split into fine pale-green root filaments where they touch the wet ground. It has no tail. Its torso, neck and haunches are covered in thousands of small overlapping pointed leaf-shaped scales layered so densely they read as soft fur, larger across the chest and neck and finer toward the head and lower legs, while the lower legs are bare dark bark-textured hide. Pale branching leaf-vein patterns run across every scale, strongest on the neck ruff. It is a photosynthetic creature adapted to absorb diffuse light through thick fog, at the cost of being visibly built for slow, deliberate movement rather than speed. Its coloration is a harmonious muted forest-green palette, deepened by near-black blue-green shadows in the recesses and lifted by pale yellow-green highlights along the raised scale edges, with subtle dried-leaf russet tones at the outer scale margins and muted blue-violet in the under-belly shadows, and a glowing emerald-green highlight reserved only for its eyes, the veins of its neck ruff, and the root filaments at its hooves. It stands in a dense misty alien fog-forest among towering moss-covered trees and hanging vines, head tilted upward and turned toward an unseen shaft of light, neck ruff fully unfurled.\n\nPhotorealistic 3D creature render, cinematic film-VFX quality, standing full-body in its natural habitat environment, three-quarter view, shot with a telephoto lens at eye level, shallow depth of field with softly blurred background foliage, volumetric god rays filtering through mist from above, soft naturalistic backlighting that makes the translucent leaf fronds glow from within, hyper-detailed micro-texturing on every scale and surface, subsurface scattering, physically-based rendering, muted natural color grading with deep shadows, 1:1 square composition, subject centered and fully visible from head to feet, no readable text."
    },
    {
        id: "ITH-510-961", name: "Karvos", status: "ALIVE", era: "ยุคป่าหมอก (Mistwood Era)",
        imageKey: "KARVOS", color: "#ff7a3d",
        category: "นักล่าฝูงรับความร้อน (Thermoreceptive pack-hunter)", habitat: "ป่าหมอกชั้นพื้นดิน (Verath)",
        foodChain: "ผู้ล่าระดับสูงของชั้นพื้นดิน — ล่า Luvenn เป็นอาหารหลัก",
        danger: "48% (Dangerous) - ต่อ 1 ตัว", size: "ระดับ 4 — กลาง (เท่าสุนัขใหญ่)", height: "0.95 ม. ที่ไหล่", weight: "58 กก.",
        desc: "นักล่าฝูงที่โจมตี Luvenn ในฉากตื่นรู้ ล่าด้วยการต้อนให้เหยื่อวิ่งจนตัวร้อน สื่อสารกันในฝูงด้วยแถบเรืองแสงข้างแก้ม มีระบบตาสองชั้น (ภาพปกติ + รังสีความร้อน)",
        mutation: { pro: "จมูก / อ่านรอยเท้าความร้อนตกค้างบนพื้นได้นานครึ่งชั่วโมง", con: "ผิวหนัง / เมื่อวิ่งไล่ ร่างกายจะร้อนและเรืองแสง เปิดเผยตำแหน่ง" },
        weapons: [ "ปากแยกสี่แฉก อ้าได้กว้างผิดปกติ", "ระบบมองเห็นสองชั้น (ภาพปกติ + แอ่งรับความร้อน)", "การล่าประสานงานเป็นฝูง 5-8 ตัว" ],
        social: "ฝูง 5–8 ตัว มีลำดับชั้นชัดเจน ล้อมและไล่ต้อนแบบหมาป่า สื่อสารด้วยการเรืองแสงเป็นจังหวะแทนการหอน",
        head: [
            ["ดวงตา", "ระบบสองชั้น — ตานักล่า + แอ่งรับความร้อน", "ดวงตาคู่หน้าให้การมองเห็นสามมิติและวัดระยะแม่นยำ ใต้ตาแต่ละข้างมีแอ่งรับรังสีความร้อน (pit organ) เป็นร่องลึกลงถึงจะงอย"],
            ["จมูก", "จมูกยาวรับไอความร้อน", "โพรงจมูกยาวผิดปกติ นอกจากดมกลิ่นยังรับไอความร้อนที่ลอยขึ้นจากรอยเท้าเหยื่อ ตามรอยความอุ่นที่หลงเหลือได้นานถึงครึ่งชั่วโมง"],
            ["ปาก", "ปากแยกสี่แฉกเมื่ออ้าเต็มที่", "เขี้ยวโค้งและฟันกรามตัดแบบสัตว์กินเนื้อ ริมฝีปากแยกออกได้เป็นสี่แฉก เผยวงขากรรไกรกว้างกว่าหมาป่าจริงเกือบเท่าตัว"],
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
        pattern: "ลายทางแนวตั้งจางๆ พาดสีข้างแบบเสือ ที่ค่อยๆ แตกสลายเป็นลายจุดกระจายบริเวณสะโพกและขา ช่วยพรางตัวในเงาไม้ที่แตกเป็นลำแสง — ซ้อนทับด้วยลายเส้นเรืองแสงบางๆ ที่ปรากฏขึ้นเฉพาะตอนที่ร่างกายร้อนจากการวิ่ง",
        pal: [["สีหลัก", "#5a6670"], ["เงา", "#1c242b"], ["แสง", "#c3ccd4"], ["เสริม A", "#b56a3a"], ["เสริม B", "#c9a24a"]],
        hl: ["#ff7a3d", "ส้มแดงเรืองแสง"],
        hlAt: "แถบเรืองแสงข้างแก้มและสันจมูก · ท่อระบายความร้อนตามแนวสันหลัง · กระจุกขนปลายหาง · ประกายในดวงตาเมื่อจับเป้าได้",
        palNote: "ตัวมันเป็นสีเย็นเทาน้ำเงินกลืนไปกับหมอกและเงาไม้ แต่ทุกจุดที่เกี่ยวข้องกับ \"ความร้อน\" กลับเรืองสีส้มแดงตัดออกมาชัดเจน — เป็นสัตว์ที่ตัวเย็นแต่ล่าด้วยความร้อน",
        mutationFull: {
            proTitle: "จมูก / การรับรู้ความร้อนตกค้าง",
            proDesc: "ระบบรับความร้อนพัฒนาจนอ่านรอยเท้าอุ่นที่หลงเหลือบนพื้นได้นานถึงครึ่งชั่วโมง ทำให้ตามรอยฝูงเหยื่อในป่าหมอกที่กลิ่นถูกความชื้นชะล้างไปหมดได้ ในถิ่นที่นักล่าอื่นตามกลิ่นไม่ได้เลย",
            conTitle: "ผิวหนัง / การพรางตัวเมื่อเคลื่อนไหว",
            conDesc: "ระบบระบายความร้อนที่เรืองแสงทำให้ซ่อนตัวได้ดีเยี่ยมตอนนิ่ง แต่พอวิ่งไล่จนตัวร้อน แนวสันหลังและลายเรืองแสงจะสว่างขึ้นจนเหยื่อมองเห็นได้ในที่มืด — ยิ่งไล่นาน มันก็ยิ่งเปิดเผยตัวเอง จึงต้องจบการล่าให้เร็ว"
        },
        dangerDetail: {
            raw: "96 / 200", percent: 48, tier: "อันตราย (Dangerous)",
            factors: ["ปากแยกสี่แฉกพร้อมเขี้ยวโค้ง (+9)", "ระบบมองความร้อนสองชั้น (+8)", "ขายาวไล่ล่าทางไกล (+6)"],
            note: "คิดจาก 1 ตัวเท่านั้น — เมื่อล่าเป็นฝูง 5–8 ตัวพร้อมระบบสื่อสารด้วยแสงที่ทำให้ประสานงานได้เงียบสนิท ความอันตรายจริงเทียบเท่าระดับ Apex Predator"
        },
        combat: [
            ["การล่าแบบ \"ไล่ให้ร้อน\"", "Karvos ไม่จู่โจมทันที แต่ไล่ต้อนเหยื่อให้วิ่งจนอุณหภูมิร่างกายสูงขึ้น เพราะเหยื่อที่ร้อนจะสว่างขึ้นในสายตาของมัน ยิ่งเหยื่อวิ่งหนีนานเท่าไหร่ มันก็ยิ่งมองเห็นชัดขึ้นเท่านั้น"],
            ["สื่อสารด้วยแสงแทนการหอน", "ล่าในความเงียบสนิท ใช้แถบเรืองแสงข้างแก้มกะพริบเป็นรหัส มองเห็นได้เฉพาะสมาชิกฝูงที่ล้อมอยู่รอบทิศ เหยื่อจะไม่รู้เลยว่าถูกล้อมไว้แล้วจนกระทั่งสายเกินไป"]
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
            ["ปาก", "เขี้ยวหน้าโค้ง อ้าไม่กว้าง", "ปากแยกสี่แฉก อ้ากว้างมาก", "yes"]
        ],
        notes: [
            ["warn", "<strong>ประเด็นที่แหลมคมที่สุดในเรื่อง</strong> — Luvenn ดำรงชีวิตด้วยการอาบแดดจนตัวอุ่น ส่วน Karvos ล่าด้วยการมองหาความอุ่น ฝูง Luvenn ที่เพิ่งกางแผงคอรับแสงเสร็จจึงสว่างโพลนราวคบไฟในสายตาของ Karvos — <em style='color:#ffb84a'>พฤติกรรมที่หล่อเลี้ยงชีวิตพวกมัน คือพฤติกรรมเดียวกับที่เรียกความตายมาหา</em> และเมื่อตกใจวิ่งหนี ตัวก็ยิ่งร้อน ยิ่งสว่าง ยิ่งถูกไล่ล่าง่ายขึ้น — ยกเว้นตัวเอกตัวเดียวที่ไม่ได้วิ่ง"]
        ],
        prompt: "A medium dog-sized alien wolf-like pack predator standing 0.95 meters at the shoulder, lean and long-limbed with the deep chest and narrow waist of a long-distance chase hunter, but with an unusually thick neck and heavy shoulders. Its head is a long tapering wolf-like skull with a pair of forward-facing pale amber predator eyes, and beneath each eye runs a deep vertical heat-sensing pit organ groove down toward the muzzle. It has a long wolf muzzle with a permanently damp nose, and a mouth lined with curved fangs and shearing molars whose lips split open into four petal-like flaps when fully agape, revealing a jaw circumference nearly twice that of a real wolf. Its tall pointed ears rotate independently and are so thin they glow translucent when backlit, showing a web of capillaries. A single downward-facing heat-sensing pit sits beneath its chin. Glowing orange-red bioluminescent stripes run along its cheeks and the bridge of its snout. Its body is a four-legged wolf frame, and along its spine from nape to tail base runs a raised ridge of erectile fur beneath which faintly glowing heat-vent channels shine warm orange. It has 2 pairs of legs: long slender wolf-like front legs with broad splayed paws, thin webbing between the toes and heat-sensing pads underneath, and deep-jointed muscular hind legs built for sustained pursuit. Its long bushy tail ends in a tuft of fur that glows soft orange. Its torso is covered in a dense double coat of coarse water-repellent fur where each hair is hollow with a translucent core, letting body heat glow faintly through at the roots, while its face and the skin around the heat pits are bare, smooth and dark, and its paws and belly are thick calloused hide. Faint vertical tiger-like stripes run along its flanks and dissolve into scattered leopard-like spots across its haunches and legs, overlaid with delicate luminous lines that only appear when its body runs hot. It hunts by heat, tracking the warmth left in footprints, at the visible cost of glowing brighter the longer it runs. Its coloration is a harmonious cool smoke blue-grey palette, deepened by near-black blue shadows in the recesses and lifted by pale silver-grey highlights along the raised fur and ridges, with warm brick-orange tones woven through the neck and shoulder fur and muted amber at the eyes and hair tips, and a glowing orange-red highlight reserved only for its cheek stripes, its spinal heat vents, its tail tuft and the catchlight in its eyes. It stalks low through the dark misty undergrowth of an alien fog-forest floor, among tangled roots, black mud and standing water, head lowered and turned toward the viewer, spinal ridge fur raised and faintly glowing.\n\nPhotorealistic 3D creature render, cinematic film-VFX quality, standing full-body in its natural habitat environment, three-quarter view, shot with a telephoto lens at eye level, shallow depth of field with softly blurred background foliage, volumetric god rays filtering through mist from above, soft naturalistic backlighting that makes the translucent ears and fur glow from within, hyper-detailed micro-texturing on every hair and surface, subsurface scattering, physically-based rendering, muted natural color grading with deep shadows, 1:1 square composition, subject centered and fully visible from head to feet, no readable text."
    },
    {
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
            ["EXTRA #1", "หงอนรับแสง (Solar-sail Crest)", "แผ่นพังผืดกางได้หลังหัว มีหลอดเลือดดำหนาแน่น ใช้กางรับแดดจาก Ashvel เพื่ออุ่นเลือดไปเลี้ยงสมองอย่างรวดเร็วหลังจากการบินในที่สูงที่หนาวเหน็บ"],
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
            ["ปีกและหลัง", "หนังเรียบตึง เกล็ดขนาดไมครอน (Dermal denticles) คล้ายฉลาม ลดเสียงลมปะทะ ทำให้บินเงียบกริบ"],
            ["ใต้ท้องและลำคอ", "หนังหนาเหนียวมีรอยย่น ปกป้องอวัยวะภายในจากการถูกกิ่งไม้ขูดขีดขณะโฉบลงมาในป่าชั้นกลาง"],
            ["ขาและแขน", "หุ้มด้วยเกล็ดแข็งแผ่นใหญ่แบบสัตว์เลื้อยคลาน ป้องกันการถูกเหยื่อแว้งกัด"]
        ],
        pattern: "การพรางตัวแบบ Countershading: หลังปีกสีน้ำเงินเข้มอมเทา (กลืนกับสียอดไม้เมื่อมองจากด้านบน) ใต้ท้องและใต้ปีกสีฟ้าอ่อนปนขาว (กลืนกับสีท้องฟ้าและแสงกระจายเมื่อมองจากด้านล่าง)",
        pal: [["สีหลัก", "#2a4b5c"], ["เงา", "#11222b"], ["แสง", "#6a8a9c"], ["เสริม A", "#5c3a2a"], ["เสริม B", "#5c2a3a"]],
        hl: ["#fcd34d", "เหลืองทองแสงอาทิตย์ (Sun-gold)"],
        hlAt: "ดวงตาทั้ง 4 ดวง · เส้นเลือดในหงอนรับแสงเมื่อกางออก · ขอบรอยหยักของจะงอยปาก",
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
            ["", "<strong>โจรแห่งป่าหมอก</strong> — ฝูง Karvos เกลียดชัง Skyther เป็นอย่างมาก เพราะหลายครั้งที่ Karvos ไล่ต้อนเหยื่อจนเหนื่อยหอบและเพิ่งล้มเหยื่อได้ Skyther จะโฉบลงมาจากฟ้าและคีบซากนั้นบินหนีไปต่อหน้าต่อตา"],
            ["warn", "<strong>เงามัจจุราชของ Luvenn</strong> — ในร่างของ Luvenn (ตัวเอก) แม้ว่าจะระแวง Karvos บนพื้นป่า แต่สัญชาตญาณความกลัวที่ฝังลึกที่สุดเมื่ออยู่ใต้ช่องว่างของเรือนยอดไม้ คือเงาขนาดมหึมาที่พาดผ่านพื้นดิน สัญชาตญาณ Luvenn จะสั่งให้ 'ยืนนิ่งและหยุดหายใจ' ทันทีเมื่อเห็นเงาของ Skyther"]
        ],
        prompt: "A massive alien wyvern-like aerial scavenger predator named Skyther standing on a giant moss-covered branch high in a foggy alien forest canopy. It has an immense 8.5-meter wingspan, currently folded but partially spread in a threatening posture. It has a six-limbed frame: two massive leathery wings with three long fingers and a hooked thumb talon, two short muscular grasping arms near the chest with three talons, and two powerful long hind legs with zygodactyl raptor claws (two toes forward, two backward) gripping the bark. Its head features a sharp, serrated hook-like bone beak without teeth, and four glowing sun-gold eyes (a binocular front pair and a smaller downward-looking pair). A translucent solar-sail crest with visible veins is flared on the back of its head. An expandable leathery gular pouch hangs under its throat. Its body has a deep keeled chest and aerodynamic shape, leading to a stiff tail ending in a diamond-shaped skin rudder. The skin is micro-scaled and leathery, countershaded: deep slate-blue and teal on the back and outer wings to blend with the canopy, and pale fog-blue on the underbelly. Rust-brown accents appear on the thick scales of the legs and arm joints. Dull crimson patterns streak the edges of the wing membranes. Sun-gold highlights glow in its eyes and the edges of its crest. Photorealistic 3D creature render, cinematic film-VFX quality, telephoto lens, shallow depth of field, volumetric god rays filtering through the thick misty canopy behind it, dynamic lighting, 1:1 square composition, highly detailed textures, Unreal Engine 5 style."
    },
    {
        id: "ITH-202-115", name: "Vashli", status: "ALIVE", era: "ยุคป่าหมอก (Mistwood Era)",
        imageKey: null, color: "#38bdf8",
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
            ["ดวงตา", "ตาโตปูดโปน 2 ดวง", "ม่านตาสีฟ้าไซอัน (Cyan) รูม่านตาขยายได้กว้างมาก มองเห็นกว้างถึง 270 องศาเพื่อระวังภัยจากด้านบนและกะระยะกระโดดระหว่างกิ่งไม้"],
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
            ["", "<strong>ระบบนิเวศแห่งเรือนยอด</strong> — ในขณะที่ Luvenn กินแสงอยู่ชั้นล่าง Vashli จะเป็นตัวแต่งกิ่งไม้ ช่วยดึงยอดใบไม้อ่อนไม่ให้ทึบเกินไป ทำให้แสงสามารถส่องทะลุไปถึง Luvenn เบื้องล่างได้"],
            ["warn", "<strong>จุดอ่อนของสัญชาตญาณ</strong> — ตัวเอกในร่าง Luvenn จะคุ้นเคยกับแสงวับๆ สีฟ้าของหาง Vashli ที่ร่วงหล่นลงมาจากฟ้า (เมื่อพวกมันร่วงหล่นหรือพลาดถูกโฉบ) ทำให้บางครั้งตัวเอกเผลอเงยหน้ามองสีฟ้าที่ร่วงลงมา ซึ่งเป็นการเปิดจุดอ่อนให้ Karvos บนพื้นดินเข้าโจมตีได้"]
        ],
        prompt: "A small cat-sized alien canopy browser named Vashli, resembling a hybrid of a lemur, a gecko, and a gazelle, clinging to the side of a massive ancient tree trunk in an alien mist-forest. It has a slender, hyper-agile frame with a highly flexible spine. Its head features two oversized, slightly bulging eyes with bright glowing cyan irises and wide pupils, a short blunt snout, and long swiveling tufted ears. Folded gliding skin flaps (patagium) rest along its neck and armpits. It has four spindly limbs with powerful spring-like hind legs. Its four-fingered hands and feet end in gecko-like micro-setae pads with retractable small hooks for flawless gripping. A highly prehensile tail, 1.5 times the length of its body, wraps securely around a smaller vine, with a visibly glowing cyan scent gland at its tip. The creature's back and head are covered in rough bark-like fur with patchy moss-green accents, colored in disruptive camouflage stripes of deep brown, ash brown, and dark wood shadows to perfectly blend with the tree. The underbelly is smooth and paler. Subtle cyan bioluminescent highlights glow in its eyes and at the tail tip. Photorealistic 3D creature render, cinematic film-VFX quality, telephoto lens, shallow depth of field, naturalistic canopy lighting with volumetric god rays breaking through the mist, macro details on the bark and fur, Unreal Engine 5 style, 1:1 square composition, facing the camera slightly while looking upward nervously."
    },
    {
        id: "ITH-203-882", name: "Glimmerwing", status: "ALIVE", era: "ยุคป่าหมอก (Mistwood Era)",
        imageKey: null, color: "#06b6d4",
        category: "แมลงแกนกลางระบบนิเวศ (Keystone Species)", 
        habitat: "ทั่วทั้งทวีป Verath",
        danger: "0% (Harmless)", size: "ระดับ 1 — จิ๋ว", 
        height: "10 ซม.", weight: "0.1 กก.",
        desc: "แมลงโปร่งแสงที่สื่อสารกันด้วยแสงสีฟ้า (Hive Mind) ชอบตอมแผงคอของ Luvenn เพื่อกินน้ำหวาน เป็นแหล่งอาหารให้ผู้ล่าและเป็นเข็มทิศแห่งป่า",
        mutation: { pro: "เครือข่ายความคุ้มครองฝูง (Hive Mind)", con: "แสงเรืองรองดึงดูดผู้ล่าในยามค่ำคืน" },
        weapons: ["ไม่มี"],
        social: "ฝูงใหญ่นับล้านตัว สื่อสารกันรวดเร็วระดับเสี้ยววินาที",
        head: [
            ["หนวด", "รับสารเคมีและคลื่นความถี่", "เชื่อมต่อข้อมูลกับฝูงและตรวจจับการเปลี่ยนแปลงของสภาพอากาศล่วงหน้า"],
            ["ตา", "ตาประกอบหลายพันเลนส์", "ประมวลผลการเคลื่อนไหวของสิ่งมีชีวิตอื่นได้ไวกว่าตาปกติ 5 เท่า มองเห็นเป็นเส้นแสง"]
        ],
        body: [
            ["ช่องท้อง", "บรรจุสารเรืองแสง (Bioluminescent organ)", "สว่างตามอารมณ์และระดับความตื่นตัวของฝูง สามารถกระพริบเปลี่ยนจังหวะได้ตามสัญญาณเตือนภัย"]
        ],
        limbs: [
            ["ปีก", "ปีกโปร่งแสง 4 ปีก", "กระจายแสงให้กว้างขึ้นและบินต้านลมแรงได้ดี มีโครงสร้างเส้นใยบางเบาแต่มั่นคง"]
        ],
        skin: [
            ["เปลือก", "บางเบาและสะท้อนแสงไฟไซอัน", "ช่วยพรางตัวในหมอกยามเช้าแต่เด่นชัดในเวลากลางคืน"]
        ],
        combat: [
            ["Flash Blind", "เมื่อเจอภัยคุกคาม ฝูงนับพันตัวจะกระพริบแสงสีฟ้าไซอันพร้อมกันด้วยความสว่างสูงสุด ทำให้ศัตรูตาพร่าชั่วขณะ เปิดโอกาสให้เหยื่อหรือตัวมันเองหนีได้"]
        ],
        notes: [
            ["warn", "<strong>ดาบสองคมของ Luvenn</strong> — แสงของ Glimmerwing ที่บินตอมแผงคอ Luvenn จะช่วยให้ภาพดูสวยงามและบอกจุดที่มีแหล่งอาหาร แต่ในคืนที่มืดมิด แสงสีฟ้าเหล่านี้คือเป้าหมายที่ฝูง Karvos จะตามมาล่าได้อย่างง่ายดาย"]
        ],
        prompt: "A macro shot of a delicate glowing alien insect known as a Glimmerwing, about 10 cm in size, resting on a giant dark alien leaf in a misty jungle. It has a translucent, faintly glowing cyan body with a bioluminescent abdomen pulsing with soft light. It has four large, ethereal wings that reflect light like a prism, structured with incredibly fine glowing cyan veins. Its head features large compound eyes and long sweeping antennae. Thousands of other Glimmerwings can be seen blurred in the background as tiny glowing cyan orbs drifting through the thick fog, creating a magical, dream-like atmosphere. Photorealistic 3D creature render, macro photography, shallow depth of field, sharp focus on the main insect, glowing subsurface scattering, volumetric lighting, Unreal Engine 5 style."
    },
    {
        id: "ITH-204-560", name: "Mistcrawler", status: "DRAFT", era: "ยุคป่าหมอก (Mistwood Era)",
        imageKey: null, color: "#38bdf8",
        category: "สัตว์ขาปล้องล่าแมลง (Arthropod insectivore)",
        habitat: "ป่าหมอกชั้นกลางต่อเนื่องพื้นดิน (Verath, Mist Layer)",
        foodChain: "ผู้บริโภคทุติยภูมิขนาดเล็ก — ล่า Glimmerwing และแมลงอื่น เป็นเหยื่อของสัตว์ปีกและ Karvos วัยอ่อน",
        danger: "ยังไม่ประเมิน (Draft)", size: "ระดับ 2 โดยประมาณ (เท่าแมวเล็ก)", height: "ยังไม่กำหนด", weight: "ยังไม่กำหนด",
        desc: "สัตว์หลายขาลำตัวยาวคล้ายตะขาบผสมแมงมุม ทอใยเหนียวดักฝูง Glimmerwing ตามช่องว่างระหว่างต้นไม้ เคลื่อนไหวเงียบกริบ มีขนรับแรงสั่นไวมากตามลำตัวเพื่อตรวจจับแมลงที่ติดใย",
        notes: [["", "ลักษณะที่ตั้งใจไว้เบื้องต้น: หลายขา ทอใยดักแมลง ขนรับแรงสั่นไวมาก — รอออกแบบระบบ Slot เต็มรูปแบบ"]]
    },
    {
        id: "ITH-205-001", name: "Korrune", status: "DRAFT", era: "ยุคป่าหมอก (Mistwood Era)",
        imageKey: null, color: "#38bdf8",
        category: "ผู้ล่าสูงสุดแห่งยุคป่าหมอก (Mistwood Apex Predator)",
        habitat: "เคลื่อนย้ายข้ามทุกชั้นของทวีป Verath ไม่ยึดอาณาเขตตายตัว",
        foodChain: "ยอดสุดของห่วงโซ่อาหารในยุคปัจจุบัน — ล่าได้แม้กระทั่งฝูง Karvos",
        danger: "ยังไม่ประเมิน (คาดว่าสูงกว่า Karvos มาก — Draft)", size: "ระดับ 6 โดยประมาณ (ใหญ่กว่า Karvos มาก แต่เล็กกว่า Vorthak)", height: "ยังไม่กำหนด", weight: "ยังไม่กำหนด",
        desc: "นักล่าเดี่ยวที่หายากที่สุดในป่าหมอก พบเห็นได้น้อยมากเพราะประชากรต่ำและครองอาณาเขตกว้างมหาศาล ไม่มีสัตว์ชนิดใดในยุคปัจจุบันไล่ล่ามันได้ แม้แต่ฝูง Karvos ยังต้องหลบหนีเมื่อกลิ่นของมันลอยมาตามลม เชื่อกันว่าสืบเชื้อสายมาจากสัตว์กลุ่มเดียวกับที่รอดจากฤดูหนาวใหญ่ในยุคหมุนเวียน",
        notes: [
            ["warn", "<strong>ช่องว่างของห่วงโซ่อาหารที่เพิ่งอุดได้</strong> — ก่อนหน้านี้ Karvos เป็นนักล่าที่มีคะแนน Danger สูงสุดในยุคปัจจุบันเพียงระดับ \"Dangerous\" (48%) เท่านั้น ไม่ใช่ Apex ตัวจริง Korrune คือคำตอบของตำแหน่งยอดห่วงโซ่ที่ระบบนิเวศยุคป่าหมอกยังขาดอยู่"],
            ["", "ลักษณะที่ตั้งใจไว้เบื้องต้น: หายากมาก ล่าเดี่ยว ครองอาณาเขตกว้าง มีกลิ่นเตือนภัยที่สัตว์อื่นจดจำได้โดยสัญชาตญาณ — รอออกแบบระบบ Slot เต็มรูปแบบ"]
        ]
    },
    {
        id: "ITH-206-410", name: "Threndle", status: "DRAFT", era: "ยุคป่าหมอก (Mistwood Era)",
        imageKey: null, color: "#38bdf8",
        category: "ผู้ล่าสูงสุดแห่งสายน้ำ (Aquatic apex predator)",
        habitat: "แหล่งน้ำ/พื้นที่ชุ่มน้ำ (กระแสน้ำขึ้นลงจากดวงจันทร์ Ren และ Kol)",
        foodChain: "ยอดสุดของห่วงโซ่อาหารในแหล่งน้ำ/พื้นที่ชุ่มน้ำ",
        danger: "ยังไม่ประเมิน (Draft)", size: "ระดับ 5-6 โดยประมาณ", height: "ยังไม่กำหนด", weight: "ยังไม่กำหนด",
        desc: "สัตว์นักล่าลำตัวยาวเพรียวอาศัยในน้ำลึกของพื้นที่ชุ่มน้ำ ใช้ประโยชน์จากกระแสน้ำขึ้นลงที่ซับซ้อนจากดวงจันทร์สองดวงในการซุ่มโจมตี มักโผล่ขึ้นมาฉวยเหยื่อที่มาริมน้ำในจังหวะน้ำขึ้นที่คาดเดายาก",
        notes: [["", "ลักษณะที่ตั้งใจไว้เบื้องต้น: ว่ายน้ำเร็ว ซุ่มในโซนน้ำขึ้นน้ำลง อาจมีอวัยวะรับการเปลี่ยนแปลงความดันน้ำ — รอออกแบบระบบ Slot เต็มรูปแบบ"]]
    },
    {
        id: "ITH-207-275", name: "Pallowfin", status: "DRAFT", era: "ยุคป่าหมอก (Mistwood Era)",
        imageKey: null, color: "#38bdf8",
        category: "ปลากรองอาหารฝูงใหญ่ (Filter-feeding shoaler)",
        habitat: "แหล่งน้ำ/พื้นที่ชุ่มน้ำ",
        foodChain: "ผู้บริโภคปฐมภูมิของแหล่งน้ำ — ฐานอาหารหลักของ Threndle",
        danger: "ยังไม่ประเมิน (Draft)", size: "ระดับ 3 โดยประมาณ", height: "ยังไม่กำหนด", weight: "ยังไม่กำหนด",
        desc: "สัตว์น้ำลำตัวแบนรวมฝูงหนาแน่นนับร้อยตัว กรองแพลงก์ตอนและอินทรียวัตถุจากน้ำ เป็นอาหารหลักของ Threndle และนักล่าน้ำอื่นๆ ฝูงจะเปลี่ยนทิศพร้อมกันอย่างรวดเร็วเมื่อพบภัย",
        notes: [["", "ลักษณะที่ตั้งใจไว้เบื้องต้น: ฝูงหนาแน่น กรองอาหาร ว่ายน้ำประสานฝูง — รอออกแบบระบบ Slot เต็มรูปแบบ"]]
    },
    {
        id: "ITH-208-640", name: "Dunkrell", status: "DRAFT", era: "ยุคป่าหมอก (Mistwood Era)",
        imageKey: null, color: "#38bdf8",
        category: "ผู้ย่อยสลายซากขนาดใหญ่ (Large detritivore/scavenger)",
        habitat: "พื้นป่าหมอก/หนองบึง (Verath, Forest Floor)",
        foodChain: "ผู้ย่อยสลาย — เก็บกินซากที่เหลือจาก Karvos, Skyther และนักล่าอื่น",
        danger: "ยังไม่ประเมิน (Draft)", size: "ระดับ 3-4 โดยประมาณ", height: "ยังไม่กำหนด", weight: "ยังไม่กำหนด",
        desc: "สัตว์เคลื่อนไหวเชื่องช้าปกคลุมด้วยเปลือกคล้ายเชื้อรา อาศัยตามพื้นป่าชื้น กินซากสัตว์และเศษซากพืชที่เหลือจากนักล่าอื่น มีบทบาทสำคัญในการหมุนเวียนสารอาหารกลับสู่ดิน แทบไม่มีศัตรูตามธรรมชาติเพราะเปลือกมีรสขมและอาจมีพิษอ่อนๆ",
        notes: [["", "ลักษณะที่ตั้งใจไว้เบื้องต้น: เคลื่อนไหวเชื่องช้ามาก เปลือกคล้ายเชื้อรามีพิษอ่อน สำคัญต่อวงจรสารอาหารของทั้งป่า — รอออกแบบระบบ Slot เต็มรูปแบบ"]]
    },
    {
        id: "ITH-209-903", name: "Frostmane", status: "DRAFT", era: "ยุคป่าหมอก (Mistwood Era)",
        imageKey: null, color: "#38bdf8",
        category: "สัตว์กินพืชขนหนาแห่งขั้วดาว (Polar grazer)",
        habitat: "ทวีป Kessara (เขตหนาวเย็น)",
        foodChain: "ผู้บริโภคปฐมภูมิหลักของทวีป Kessara",
        danger: "ยังไม่ประเมิน (Draft)", size: "ระดับ 5 โดยประมาณ", height: "ยังไม่กำหนด", weight: "ยังไม่กำหนด",
        desc: "สัตว์กีบขนาดใหญ่ปกคลุมด้วยขนหนาหลายชั้น อาศัยรวมฝูงใหญ่ในทุ่งหิมะของ Kessara ขุดคุ้ยหิมะหาพืชเตี้ยที่ขึ้นใต้น้ำแข็ง ทนความหนาวจัดได้ดีกว่าสัตว์สายพันธุ์ใดในบันทึก ถือเป็นตัวอย่างของสิ่งมีชีวิตที่ปรับตัวรอดจากฤดูหนาวใหญ่ได้สำเร็จ",
        notes: [["warn", "<strong>เชื่อมโยงกับ Vorthak</strong> — Frostmane คือภาพตรงข้ามของ Vorthak: สัตว์เล็กมีขนหนาที่ปรับตัวรอดฤดูหนาวใหญ่ได้ ขณะที่ Apex Predator ตัวมหึมาไร้ขนกลับสูญพันธุ์ไป ลักษณะที่ตั้งใจไว้เบื้องต้น: ขนหนามาก ทนหนาวสุดขั้ว อยู่รวมฝูงใหญ่ — รอออกแบบระบบ Slot เต็มรูปแบบ"]]
    },
    {
        id: "ITH-210-077", name: "Cindergrub", status: "DRAFT", era: "ยุคป่าหมอก (Mistwood Era)",
        imageKey: null, color: "#38bdf8",
        category: "แมลงทนความร้อนแห่งภูเขาไฟ (Thermotolerant insect)",
        habitat: "หมู่เกาะ Dothen (เขตภูเขาไฟ)",
        foodChain: "ผู้บริโภคปฐมภูมิ/ผู้ย่อยสลายของหมู่เกาะ Dothen",
        danger: "ยังไม่ประเมิน (Draft)", size: "ระดับ 1-2 โดยประมาณ", height: "ยังไม่กำหนด", weight: "ยังไม่กำหนด",
        desc: "แมลงตัวหนอนเปลือกแข็งอาศัยใกล้ปล่องความร้อนใต้ดินของหมู่เกาะภูเขาไฟ กินสาหร่ายทนร้อนและเศษซากอินทรีย์ที่ถูกความร้อนเผาไหม้บางส่วน เปลือกนอกทนกรดและความร้อนสูงได้ดีเยี่ยม เป็นอาหารหลักของสัตว์เฉพาะถิ่นบนเกาะ",
        notes: [["", "ลักษณะที่ตั้งใจไว้เบื้องต้น: ทนกรด/ความร้อนสูง อาศัยใกล้ปล่องความร้อน เปลือกแข็ง — รอออกแบบระบบ Slot เต็มรูปแบบ"]]
    }
];