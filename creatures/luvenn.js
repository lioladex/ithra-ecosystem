/* ITH-014-772 — Luvenn (ALIVE) */
creaturesData.push({
        id: "ITH-014-772", name: "Luvenn", nickname: "ร่างสี่ขา", status: "ALIVE", era: "ยุคป่าหมอก (Mistwood Era)",
        imageKey: "LUVENN", color: "#6ef2a0",
        category: "ผู้ผลิต (สังเคราะห์แสง) · สัตว์กินแสงสี่ขา (Quadrupedal photosynthetic grazer)", habitat: "ป่าหมอกชั้นกลาง (Verath, Mist Layer)",
        foodChain: "ผู้ผลิตและผู้บริโภคปฐมภูมิ — เหยื่อหลักของ Karvos",
        danger: "20% (Harmless)", size: "ระดับ 5 — ใหญ่ (เท่าม้า)", height: "2.05 ม. ที่ไหล่ · 3.1 ม. เมื่อชูคอเต็มที่", weight: "310 กก.",
        desc: "สิ่งมีชีวิตกึ่งพืช ร่างปัจจุบันที่ตัวเอกสวมอยู่ ณ จุดตื่นรู้ ไร้อาวุธ วิ่งช้ามาก ดำรงชีวิตด้วยการกางแผงรับแสงจากกลางหัวรับแสงกระจายผ่านหมอก อาศัยมวลน้ำหนักตัวในการป้องกันตัวเมื่อจวนตัว",
        mutation: { pro: "สังเคราะห์แสงในแสงกระจายผ่านหมอกทึบได้ดีเยี่ยม", con: "ขายาวแต่ไร้มัดกล้ามเนื้อวิ่ง หนีภัยได้ช้ามาก" },
        weapons: [ "ไม่มีอาวุธโดยสิ้นเชิง", "พึ่งพาการพรางตัวและการอยู่รวมฝูง", "อาศัยมวลน้ำหนักตัวชนปะทะเท่านั้นหากถูกต้อนจนมุม" ],
        social: "ฝูงขนาดกลาง 10–30 ตัว เคลื่อนย้ายตามแสงที่ส่องผ่านเรือนยอดในแต่ละช่วงของวัน",
        head: [
            ["ดวงตา", "ตาคู่ด้านข้างหัว", "ม่านตาเขียวมรกตเรืองแสงอ่อน รูม่านตาแนวนอน มองรอบตัวได้เกือบ 360° แลกกับจุดบอดตรงหน้าที่กว้างผิดปกติ"],
            ["จมูก", "ไร้จมูกภายนอก", "มีเพียงร่องหายใจบางๆ ข้างจะงอย รับสารเคมีในอากาศผ่านผิวหนังทั่วร่างแทน"],
            ["ปาก", "จะงอยแข็งไร้ฟัน", "ไม่ใช้กินอาหาร ใช้เพียงเล็มแต่งเกล็ดใบไม้ตัวเองและดึงเศษใบแห้งออก พลังงานทั้งหมดมาจากการสังเคราะห์แสงและการดูดความชื้น"],
            ["หู", "หูใบไม้กางตั้งได้สองข้าง", "รูปทรงเหมือนใบไม้แหลมยาว หมุนจับทิศเสียงได้อิสระ ทำหน้าที่รับเสียงและรับแสงเสริมพร้อมกัน"],
            ["EXTRA #1", "แผงรับแสงแบบพัดนกยูง (Solar Ruff)", "โคนก้านแผงทั้งหมดฝังอยู่ที่ฐานกะโหลกบริเวณกลางหัว ไม่ใช่รอบคอแบบปลอกคอ ปกติจะพับแนบเรียงเป็นริ้วยาวคล้ายกลีบพาดลงมาตามท้ายทอยและลำคอจนถึงไหล่ ให้ความรู้สึกเหมือนแผงขนหรือครีบมากกว่าใบไม้จริง ขอบมีเส้นใบเรืองแสงจาง เมื่อรับแสงเต็มที่จะกางแผ่ออกเป็นวงพัดใหญ่รอบหัวคล้ายหางนกยูง — อวัยวะสังเคราะห์แสงหลักของสปีชีส์"],
            ["EXTRA #2", "หงอนใบไม้คู่บนกระหม่อม", "ใบไม้ยาวสองแฉกชี้ขึ้นด้านหลัง เป็นเซ็นเซอร์วัดทิศทาง/ความเข้มของแสง สั่งให้คอหันตามแสงอัตโนมัติ — กลไกเบื้องหลังพฤติกรรมเฮลิโอโทรปิซึม"]
        ],
        body: [
            ["BODY FRAME", "โครงสัตว์กีบสี่ขาสูงโปร่ง", "สรีระคล้ายกวางผสมม้า คอยาวเรียวชะลูดกว่าสัตว์กีบทั่วไปอย่างเห็นได้ชัดและยกสูง หลังลาดเอียงลงท้าย อกลึกแต่ท้องแฟบ (ไม่มีกระเพาะใหญ่)"],
            ["SPINE", "ปุ่มกลมเรียงเป็นแถวคล้ายตุ่มเมล็ดพืช", "ไล่จากท้ายทอยถึงกลางหลัง เป็นต่อมสะสมน้ำเลี้ยงสำรอง พองขึ้นเมื่ออิ่มแสงและยุบลงเมื่อขาดแคลน ฝูงใช้อ่านสภาพร่างกายของกันและกันได้"],
            ["TAIL", "ไม่มีหาง", "สมดุลร่างกายพึ่งพาคอที่ยาวและแผงคอที่ถ่วงน้ำหนักด้านหน้าแทน"]
        ],
        limbs: [
            ["#1", "ขา", "ขาหน้า", "เรียวยาวข้อต่อสูงแบบกวางผสมนกยาง ยาวขึ้นกว่าสัดส่วนสัตว์กีบทั่วไปเล็กน้อยเพื่อชูลำตัวให้แผงรับแสงเข้าถึงช่องแสงในเรือนยอดได้สูงขึ้น ปลายเป็นกีบแยกสองแฉก แตกออกเป็นรากฝอยสีเขียวอ่อนหลายเส้นเมื่อวางน้ำหนักนิ่ง ใช้ดูดความชื้นและแร่ธาตุจากพื้นดินชื้นโดยตรง"],
            ["#2", "ขา", "ขาหลัง", "โครงเดียวกับขาหน้าแต่ข้อพับย้อนกลับชัดกว่าและยาวขึ้นตามสัดส่วนเดียวกัน ให้แรงส่งตอนก้าวเดินระยะไกล — ไม่มีมัดกล้ามเนื้อสำหรับวิ่งเร็ว"]
        ],
        skin: [
            ["ลำตัว/สะโพก/คอ", "เกล็ดรูปใบไม้ปลายแหลมเรียงซ้อนเหลื่อมกันถี่ยิบนับพันแผ่น ให้เนื้อสัมผัสฟูนุ่มคล้ายขนสัตว์ทั้งที่เป็นเกล็ดแข็งบาง"],
            ["ขาส่วนล่าง", "หนังเปลือยเรียบสีเข้มกว่า มีร่องตามยาวเหมือนเปลือกไม้ ทนต่อการเสียดสีกับพุ่มไม้"],
            ["แผงรับแสง/หงอน/หู", "แผ่นครีบบางกึ่งโปร่งแสง ทรงเพรียวยาวคล้ายริ้วใบไม้แต่ไม่ใช่ทรงใบไม้จริง เห็นเส้นใบชัดเจนเมื่อมีแสงส่องทะลุจากด้านหลัง"]
        ],
        pattern: "เส้นใบ (venation) สีอ่อนแตกแขนงบนเกล็ดและริ้วครีบทุกแผ่นทั่วทั้งตัว ให้ความรู้สึกคล้ายใบไม้โดยไม่ลอกทรงใบไม้จริงตรงๆ ยังคงความเป็นเอเลี่ยน เข้มที่สุดบนแผงรับแสงและจางลงตามลำตัว ยามสังเคราะห์แสงเต็มที่ เส้นใบบนแผงรับแสงจะเรืองแสงเขียวมรกตอ่อนๆ มองเห็นได้แม้ในที่ร่ม",
        pal: [["สีหลัก", "#4a7a52"], ["เงา", "#1c3028"], ["แสง", "#a8c98a"], ["เสริม A", "#8a4a3a"], ["เสริม B", "#4a4470"]],
        hl: ["#6ef2a0", "เขียวมรกตเรืองแสง"],
        hlAt: "ดวงตา · เส้นใบบนแผงรับแสงเมื่อกางเต็มที่ · รากฝอยที่ปลายกีบขณะดูดความชื้น",
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
        abilities: [
            {
                name: "การหันรับแสงอัตโนมัติ", type: "Sensory — การรับรู้ทิศทางแสง",
                desc: "หงอนใบไม้คู่บนกระหม่อมวัดทิศทางและความเข้มของแสงตลอดเวลา สั่งให้คอหันตามช่องแสงที่ดีที่สุดโดยอัตโนมัติโดยไม่ต้องมีการตัดสินใจ ทั้งฝูงหยุดเดินและหันไปทางเดียวกันพร้อมกันได้ในเสี้ยววินาทีเดียวเมื่อช่องแสงเปิดออกเหนือหัว",
                origin: "แผงรับแสงมีค่าแค่ไหนก็ไร้ประโยชน์ถ้าหันผิดทิศแม้เพียงไม่กี่องศาในหมอกทึบที่แสงลอดผ่านเป็นช่องแคบๆ เท่านั้น เซ็นเซอร์นี้จึงพัฒนาให้ไวและเร็วกว่าการมองเห็นด้วยตาเปล่าตามปกติ เพราะพลาดโอกาสรับแสงแต่ละครั้งหมายถึงพลังงานที่เสียไปจริง"
            },
            {
                name: "การดูแลตัวที่อ่อนแอที่สุดโดยไม่ต้องสบตา", type: "Social — พฤติกรรมฝูง",
                desc: "สมาชิกที่อ่อนแอที่สุดในฝูง (แผงรับแสงกางไม่เต็มที่ ร่างมีรอยแผลเป็นเก่า) ได้รับพื้นที่แสงที่ดีที่สุดและไม่เคยถูกทิ้งไว้ข้างหลังเลย ทั้งที่ไม่มีตัวใดในฝูงเคยมองตรงไปที่มันสักครั้ง — ตัวอื่นๆ เพียงแค่ชะลอฝีเท้าหรือขยับตำแหน่งให้เองโดยไม่มีสัญญาณระหว่างกัน",
                origin: "ฝูงที่รอดจาก Karvos ได้คือฝูงที่ไม่มีจุดอ่อนให้ผู้ล่าเลือกจู่โจมง่ายๆ พฤติกรรมปรับตำแหน่งให้สมาชิกอ่อนแอที่สุดอัตโนมัติจึงฝังลึกกว่าการตัดสินใจของตัวใดตัวหนึ่ง เป็นกลไกที่ทำงานได้แม้ไม่มีใครในฝูง 'รู้ตัว' ว่ากำลังช่วยเหลือใครอยู่"
            },
            {
                name: "ความจำเส้นทางอพยพข้ามรุ่น", type: "Cognitive — ความจำระดับฝูง",
                desc: "ฝูงเดินตามร่องเส้นทางเดิมที่สึกลึกลงไปในดินมากกว่าที่สมาชิกฝูงปัจจุบันเพียงไม่กี่ตัวจะเคยเดินสร้างไว้เองได้ นำทางด้วยกลิ่นและทิศลมมากกว่าสายตา และหันรับทิศลมใหม่พร้อมกันทั้งฝูงก่อนที่สมาชิกตัวใดจะทันก้าวเท้าออกไปสักก้าวเดียว",
                origin: "เส้นทางอพยพที่ปลอดภัยที่สุดไม่ใช่สิ่งที่ฝูงหนึ่งค้นพบได้เองในชั่วอายุเดียว แต่เป็นความรู้ที่สะสมและส่งต่อผ่านร่องเส้นทางกับกลิ่นที่ทิ้งไว้ข้ามรุ่นนับไม่ถ้วน ฝูงที่หลงทางออกจากร่องเดิมมักไม่มีเรื่องราวให้เล่าต่อ"
            }
        ],
        notes: [
            ["", "<strong>พฤติกรรมรับแสง (Heliotropic Display)</strong> เมื่อพบจุดที่แสงลอดผ่านเรือนยอด Luvenn จะหยุดนิ่ง ปล่อยรากฝอยจากกีบลงดิน ชูคอขึ้นสุด แล้วกางแผงรับแสงออกเต็มวงเป็นพัดใหญ่รอบหัวคล้ายหางนกยูง จากนั้นค่อยๆ หมุนหัวตามทิศทางแสงตลอดวันเหมือนดอกทานตะวัน ทั้งฝูงทำพร้อมกันเป็นภาพราวกับดงต้นไม้เคลื่อนที่ได้ <em style='color:var(--accent-default)'>และนี่คือช่วงที่พวกมันเปราะบางที่สุด</em> เพราะทั้งเคลื่อนไหวช้าและถูกยึดติดกับพื้นด้วยรากชั่วคราว"],
            ["warn", "ยีนด้อยเรื่องความเร็วเป็นกุญแจของฉากตื่นรู้ — ตัวเอกไม่ได้แค่ลังเลเพราะสัญชาตญาณขัดกัน แต่โดยสรีระแล้วมันก็หนีไม่ทันอยู่แล้ว การที่มันรอดมาได้จึงขัดกับสามัญสำนึกของทั้งฝูงและตัวมันเอง"]
        ],
        prompt: "A large horse-sized quadrupedal alien herbivore standing 2.05 meters at the shoulder and reaching 3.1 meters with its neck fully raised, deceptively light-framed with a lean, hollow-boned build, deep chest but flat belly, its neck and legs both noticeably longer and more elongated than a typical hoofed grazer's. Its head is slightly smaller than expected for its body, with a sharp beak-like mouth with no teeth, a pair of emerald-green glowing eyes set on the sides of the head with horizontal herbivore pupils, no external nose, and a pair of tall pointed leaf-shaped ears that rotate independently. A pair of long forked crest fronds rise from the crown of its head, angled backward, and it is directly behind these, anchored at the base of its skull rather than around its throat, that its magnificent solar ruff begins. When folded away, the ruff lies flat as a long cascade of slender, finely ridged frond-ribbons that drape down the nape, along the neck, and onto the shoulders, reading more like a mane of fins than a collar of leaves. When it catches the light, the entire structure unfurls outward from that same crown-anchored base into one enormous fan spread wide behind and around the head, opening like a peacock's tail rather than a simple ring. Its body is a tall, deer-and-horse-like hoofed frame with a long raised neck, and a row of small round seed-like nodules runs along its spine from the nape to mid-back. It has 2 pairs of legs, both proportioned slightly longer than a typical grazer's to lift its solar fan higher toward gaps in the canopy: long slender high-jointed front legs like a heron crossed with a deer, and reversed-jointed hind legs of the same build, all ending in split hooves that split into fine pale-green root filaments where they touch the wet ground. It has no tail. Its torso, neck and haunches are covered in thousands of small overlapping pointed scales layered so densely they read as soft fur, larger across the chest and neck and finer toward the head and lower legs, each scale slender and finely ridged rather than a literal leaf silhouette, alien in shape while still evoking foliage, while the lower legs are bare dark bark-textured hide. Pale branching vein patterns run across every scale, strongest on the solar fan. It is a photosynthetic creature adapted to absorb diffuse light through thick fog, at the cost of being visibly built for slow, deliberate movement rather than speed. Its coloration is a harmonious muted forest-green palette, deepened by near-black blue-green shadows in the recesses and lifted by pale yellow-green highlights along the raised scale edges, with subtle dried-leaf russet tones at the outer scale margins and muted blue-violet in the under-belly shadows, and a glowing emerald-green highlight reserved only for its eyes, the veins of its solar fan, and the root filaments at its hooves. It stands in a dense misty alien fog-forest among towering moss-covered trees and hanging vines, head tilted upward and turned toward an unseen shaft of light, its solar fan fully unfurled behind its head like a spread peacock tail.\n\nPhotorealistic 3D creature render, cinematic film-VFX quality, standing full-body in its natural habitat environment, three-quarter view, shot with a telephoto lens at eye level, shallow depth of field with softly blurred background foliage, volumetric god rays filtering through mist from above, soft naturalistic backlighting that makes the translucent frond ribbons glow from within, hyper-detailed micro-texturing on every scale and surface, subsurface scattering, physically-based rendering, muted natural color grading with deep shadows, 1:1 square composition, subject centered and fully visible from head to feet, no readable text."
});
