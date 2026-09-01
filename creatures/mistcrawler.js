/* ITH-204-560 — Mistcrawler (ALIVE) */
creaturesData.push({
        id: "ITH-204-560", name: "Mistcrawler", nickname: "เจ้าใยระยิบ", status: "ALIVE", era: "ยุคป่าหมอก (Mistwood Era)",
        imageKey: "MISTCRAWLER", color: "#d4e8e8",
        category: "สัตว์ขาปล้องล่าแมลงแบบทอใย (Arthropod web-trap insectivore)",
        habitat: "ป่าหมอกชั้นกลางต่อเนื่องพื้นดิน (Verath, Mist Layer)",
        foodChain: "ผู้บริโภคทุติยภูมิขนาดเล็ก — ล่า Glimmerwing และแมลงอื่น เป็นเหยื่อของสัตว์ปีกขนาดเล็กและ Karvos วัยอ่อน",
        danger: "28% (Cautious)", size: "ระดับ 2 — เล็ก (เท่าแมวเล็ก)", height: "ลำตัวยาว 38 ซม. (ไม่รวมขา)", weight: "3.4 กก.",
        desc: "สัตว์ขาปล้องลำตัวยาวคล้ายตะขาบผสมแมงมุม ทอใยเหนียวขึงระหว่างช่องว่างลำต้นไม้เพื่อดักฝูง Glimmerwing เคลื่อนไหวเงียบกริบและแทบไม่ใช้สายตา อาศัยขนรับแรงสั่นสะเทือนไวสุดขั้วทั่วลำตัวในการระบุตำแหน่งเหยื่อที่ติดใยได้แม่นยำโดยไม่ต้องเห็น",
        mutation: { pro: "ขนรับแรงสั่น (Trichobothria) ทั่วตัว / อ่านตำแหน่งและขนาดเหยื่อที่ติดใยได้แม่นยำโดยไม่ต้องใช้สายตาเลย", con: "ขาที่ปรับมาเพื่อไต่เกาะใยและเปลือกไม้โดยเฉพาะ / เดินบนพื้นราบโล่งได้ช้าและเงอะงะมาก" },
        weapons: [ "เขี้ยวคีลิเซอราฉีดพิษอัมพาต (ใช้ได้ผลกับแมลง/สัตว์เล็กเท่านั้น)", "ใยเหนียวดักเหยื่อระหว่างช่องต้นไม้", "ขนรับแรงสั่นระบุตำแหน่งเหยื่อแม่นยำในความมืดสนิท" ],
        social: "อยู่ตัวเดียว หวงพื้นที่ใยของตัวเอง สร้างใยใหม่ทุก 2-3 คืนตามเส้นทางฝูง Glimmerwing ที่เปลี่ยนไป",
        head: [
            ["ดวงตา", "กลุ่มตาเดี่ยว (Ocelli) 6-8 ดวงเรียงกระจุกไม่สมมาตร", "มองเห็นได้แค่ความต่างแสง-มืดหยาบๆ ไม่ใช้ระบุตำแหน่งเหยื่อ เป็นเพียงสัมผัสสำรองรู้ทิศทางแสงเวลาโผล่จากที่ซ่อน จำนวนและตำแหน่งตาเดี่ยวไม่เท่ากันทั้งสองข้างของหัว"],
            ["จมูก", "ไม่มีจมูก มีก้านรับสารเคมีคู่หน้า", "ก้านสัมผัส (Palps) สั้นสั่นตลอดเวลา รับกลิ่นฟีโรโมนและสารเคมีจากปีกแมลงที่ติดใย บอกได้ว่าเป็น Glimmerwing หรือแมลงชนิดอื่น"],
            ["ปาก", "เขี้ยวคีลิเซอราคู่หน้าโค้งแหลม", "ฉีดพิษอัมพาตเข้าเหยื่อที่ติดใยโดยไม่ต้องต่อสู้ พิษออกฤทธิ์เร็วกับแมลงแต่เจือจางเกินกว่าจะเป็นอันตรายต่อสัตว์ขนาดใหญ่"],
            ["หู", "ไม่มีหูภายนอก", "รับเสียง/แรงสั่นผ่านขนไวสั่นตามลำตัวและขาแทนทั้งหมด"],
            ["EXTRA #1", "ต่อมทอใยที่ปลายท้อง (Spinnerets)", "รังไหมเหนียวพิเศษ ทอเป็นเส้นใยขึงระหว่างช่องว่างต้นไม้เป็นร่างแหดักฝูงแมลงบิน เหนียวพอจะหยุดฝูง Glimmerwing ที่บินเร็วได้ทันที"],
            ["EXTRA #2", "ขนรับแรงสั่นสะเทือนโคนเรืองแสงจาง (Trichobothria) ทั่วตัว", "ขนละเอียดหลายพันเส้นกระจายทั่วลำตัวและขา ไวพอจะรู้ตำแหน่ง ขนาด และทิศทางดิ้นของเหยื่อที่ติดใยห่างออกไปหลายเมตรโดยไม่ต้องสัมผัสหรือมองเห็น โคนขนแต่ละเส้นมีจุดเรืองแสงขาวอมฟ้าจิ๋วซึ่งจะสว่างวาบเป็นจังหวะตามความแรงของแรงสั่นที่รับได้"]
        ],
        body: [
            ["BODY FRAME", "โครงลำตัวยาวหลายปล้องแบนราบ", "ลำตัวเพรียวยาวแบนราบติดผิวเปลือกไม้ได้สนิท ปรับมาเพื่อหมอบซ่อนตัวข้างใยรอจังหวะมากกว่าไล่ล่า"],
            ["SPINE", "แผ่นเกราะปล้องหลังแข็ง", "ปล้องเกราะเรียงจากหัวถึงท้ายลำตัว ม้วนตัวขดเป็นวงแน่นได้ทันทีเมื่อถูกคุกคาม ปิดจุดอ่อนใต้ท้องทั้งหมด"],
            ["TAIL", "ไม่มีหางแท้ ปล้องท้ายสุดคือฐานต่อมทอใย", "Utility — ปล้องท้ายลำตัวหมุนเล็งทิศทางได้อิสระ ใช้ยิงเส้นใยเกาะยึดเวลาต้องข้ามช่องว่างกว้างหรือหย่อนตัวหนีอย่างรวดเร็ว"]
        ],
        limbs: [
            ["#1", "ขา", "ขาเดินหลายคู่ (6 คู่)", "ขาเรียวยาวปลายมีเล็บโค้งคู่ยึดเกาะเปลือกไม้และเส้นใยได้แน่นหนา ไต่กลับหัวใต้กิ่งไม้หรือเพดานโพรงได้อย่างอิสระ แต่บนพื้นราบโล่งจะเดินได้ช้าและเสียการทรงตัวง่าย"],
            ["#2", "ขา", "ขาหน้าดัดแปลง (ก้านสัมผัส)", "คู่หน้าสุดสั้นกว่าคู่อื่นและไวต่อการสัมผัสเป็นพิเศษ ใช้จับห่อเหยื่อที่ดิ้นด้วยใยเพิ่มก่อนฉีดพิษ ไม่ใช้เดินเป็นหลัก"]
        ],
        skin: [
            ["ลำตัว/หลัง", "เกราะไคตินแข็งลายด่างเหมือนเปลือกไม้ผุ สีกลืนกับเปลือกไม้และมอสจนแทบมองไม่เห็นเวลาหมอบนิ่งข้างใย"],
            ["ใต้ท้อง", "เปลือกบางกว่าเล็กน้อย สีอ่อนกว่า — จุดที่ป้องกันด้วยการขดตัวเป็นวงเมื่อถูกคุกคามแทนการมีเกราะหนา"],
            ["ขา", "ปล้องขาไคตินเรียบมัน สีเข้ม ผิวมันวาวเล็กน้อยช่วยลดแรงเสียดทานเวลาไต่เส้นใยของตัวเอง"]
        ],
        pattern: "ลายด่างแตกไม่สม่ำเสมอสีน้ำตาลเข้ม-อ่อนสลับกันทั่วลำตัว เลียนแบบเปลือกไม้ผุและรอยมอสเกาะ แทรกด้วยจุดเรืองแสงขาวอมฟ้าจิ๋วที่โคนขนรับแรงสั่นกระจายไม่สมมาตรทั่วตัว ช่วยพรางตัวขณะหมอบนิ่งข้างใยเป็นเวลานานหลายชั่วโมง",
        pal: [["สีหลัก", "#4a3f2e"], ["เงา", "#1c1712"], ["แสง", "#a89878"], ["เสริม A", "#4a5a3a"], ["เสริม B", "#5a4a5e"]],
        hl: ["#d4e8e8", "ขาวนวลอมฟ้าจางๆ"],
        hlAt: "แววตาสะท้อนแสงจากกลุ่มตาเดี่ยวในที่มืด · ปลายเขี้ยวคีลิเซอราเป็นมันวาว · เส้นใยเหนียวที่เกาะหยดน้ำค้างในหมอก",
        mutationFull: {
            proTitle: "ขนรับแรงสั่น / การล่าโดยไม่ใช้สายตา",
            proDesc: "ขนไวสั่นทั่วตัวพัฒนาจนอ่านตำแหน่ง ขนาด และแรงดิ้นของเหยื่อที่ติดใยได้แม่นยำโดยไม่ต้องเห็นหรือสัมผัสโดยตรง ทำให้ล่าได้อย่างมีประสิทธิภาพแม้ในหมอกทึบยามค่ำคืนที่มืดสนิท",
            conTitle: "ขา / การเคลื่อนที่บนพื้นราบ",
            conDesc: "โครงขาที่ปรับมาเพื่อไต่เกาะเปลือกไม้และเส้นใยโดยเฉพาะทำให้เดินบนพื้นราบโล่งได้ช้าและเงอะงะผิดปกติ หากพลัดตกจากต้นไม้ลงพื้นดินจะเสี่ยงตกเป็นเหยื่อของนักล่าภาคพื้นได้ง่ายกว่าปกติมาก"
        },
        dangerDetail: {
            raw: "53 / 190", percent: 28, tier: "พอระวังตัวได้ (Cautious)",
            factors: ["พิษอัมพาตจากเขี้ยวคีลิเซอรา (+6)", "ใยเหนียวดักเหยื่อ (+4)", "ขนรับแรงสั่นความแม่นยำสูง (+4)"],
            note: "อันตรายแทบเป็นศูนย์ต่อสิ่งมีชีวิตขนาดใหญ่กว่าแมว พิษเจือจางเกินกว่าจะทำอะไรได้มากกว่าอาการคันบวมเฉพาะจุด คะแนนส่วนใหญ่มาจากศักยภาพในการดักและกำจัดแมลงจำนวนมากอย่างเงียบเชียบ"
        },
        combat: [
            ["ทอใยดักล่วงหน้า (Web Ambush)", "ขึงใยเหนียวระหว่างช่องว่างต้นไม้ตามเส้นทางที่ฝูง Glimmerwing มักบินผ่าน แล้วหมอบนิ่งรอข้างใยเป็นเวลานานหลายชั่วโมงโดยไม่ขยับ"],
            ["ล็อกเป้าด้วยแรงสั่น (Vibration Lock-on)", "เมื่อรู้สึกถึงแรงสั่นของเหยื่อที่ติดใย จะไต่เข้าหาอย่างแม่นยำโดยไม่ต้องเห็นเลย แล้วฉีดพิษอัมพาตให้หยุดดิ้นก่อนกัดกิน"],
            ["ขดตัวป้องกัน (Defensive Coil)", "เมื่อถูกคุกคามโดยตรง จะม้วนขดตัวเป็นวงแน่นทันที ปิดใต้ท้องที่เปราะบางไว้ด้านในและเผยแผ่นเกราะหลังแข็งออกด้านนอกแทน"]
        ],
        abilities: [
            {
                name: "การล่าด้วยความนิ่งสมบูรณ์", type: "Concealment — การล่าซุ่ม",
                desc: "ขึงใยเหนียวระหว่างต้นไม้แล้วหมอบนิ่งข้างใยจนกลืนกับเปลือกไม้สนิท ไม่ขยับแม้แต่น้อยเป็นเวลาหลายชั่วโมง ขยับก็ต่อเมื่อมีเหยื่อบินเข้ามาใกล้เกินไปด้วยตัวมันเองเท่านั้น",
                origin: "ตัวเล็กและช้าเกินกว่าจะไล่ล่าอะไรได้เลย วิวัฒนาการจึงพลิกข้อจำกัดนี้เป็นข้อได้เปรียบ — ความนิ่งที่ทนทานกว่าความอดทนของเหยื่อทุกตัวคือกลยุทธ์ที่ไม่ต้องพึ่งความเร็วหรือแรงเลยสักนิด"
            }
        ],
        notes: [
            ["", "<strong>ผู้ล่าที่ไม่ต้องเห็นเหยื่อ</strong> Mistcrawler เป็นหนึ่งในสัตว์ไม่กี่ชนิดของป่าหมอกที่ล่าได้อย่างมีประสิทธิภาพเต็มที่แม้ในความมืดสนิท เพราะไม่เคยพึ่งพาสายตาเป็นหลักตั้งแต่แรก"],
            ["", "ลักษณะที่ตั้งใจไว้เบื้องต้น: หลายขา ทอใยดักแมลง ขนรับแรงสั่นไวมาก ออกแบบระบบ Slot เต็มรูปแบบแล้ว"]
        ],
        prompt: "A moderately alien cat-sized arthropod predator with an elongated, flattened, many-segmented body roughly 38 centimeters long, resembling a hybrid of a centipede and a spider, built to lie flush against tree bark for hours without moving. Its head carries a loose, asymmetric cluster of six to eight small simple ocelli rather than a neat matching pair, their number and placement differing from one side of the head to the other, only sensing rough changes in light and dark, a pair of short constantly-twitching sensory palps in place of a nose that read pheromone traces from insect wings caught in silk, and a pair of curved hollow chelicerae fangs that inject a fast-acting paralytic venom, effective on insects but far too dilute to trouble anything larger than a housecat. It has no external ears, sensing sound and vibration entirely through its body instead. At the tip of its abdomen sit a pair of silk-spinning spinnerets that weave strong sticky strands across gaps between tree trunks, and its entire body and legs are covered in thousands of ultra-sensitive vibration-sensing bristles (trichobothria), each rooted in a tiny point of pale white-blue bioluminescence that flickers in rhythm with the strength of vibration it senses, fine enough to read the exact position, size, and struggle pattern of prey caught in its web from several meters away without ever touching or seeing it. Its body is a long flattened multi-segmented frame armored along the back with hardened chitin plates that let it curl into a tight defensive coil, sealing its softer underside completely when threatened, and it has no true tail — only a final abdominal segment that rotates freely and functions as an aiming point for shooting anchor threads across wide gaps or dropping away in a controlled fall. It has six pairs of long, slender walking legs ending in curved paired claws that grip bark and silk strands with total confidence, letting it walk upside-down along the underside of branches or crevice ceilings, though it moves slowly and clumsily on open flat ground; a shorter, unusually touch-sensitive front pair of legs functions like modified palps, wrapping and pinning struggling prey in extra silk before the fangs strike. Its back and body are sheathed in a mottled, uneven, dark-and-pale bark-textured chitin that renders it nearly invisible while motionless beside its web, faintly speckled with the tiny glowing bristle-roots scattered asymmetrically across its surface, while its underside is a slightly paler, thinner-plated chitin protected mainly by its coiling defense rather than armor thickness, and its leg segments are smooth glossy dark chitin that reduces friction when climbing its own silk lines. Its vibration-sensing bristles let it hunt with total precision in absolute darkness without ever needing sight, at the cost of legs so specialized for climbing bark and silk that it becomes slow and awkward the instant it is displaced onto open flat ground. Its coloration is a harmonious dark bark-brown palette, deepened by near-black brown shadows in the recesses between segments and lifted by pale dusty tan highlights along the raised chitin ridges, with muted moss-green patches worked into the mottling along its back and dull violet-grey along the leg joints, and a faint pale frosty white-blue highlight reserved only for the glint of its ocelli cluster in darkness, the tiny glowing roots of its sensory bristles, the polished tips of its chelicerae fangs, and the dew-beaded silk strands of its web. It waits motionless beside a wide web strung between two moss-covered tree trunks deep in the misty mid-canopy of the Verath mistwood, legs splayed flat against the bark, body angled toward a faint tremor in the silk.\n\nPhotorealistic 3D creature render, cinematic film-VFX quality, standing full-body in its natural habitat environment, three-quarter view, shot with a telephoto lens at eye level, shallow depth of field with softly blurred background foliage and web strands, volumetric god rays filtering through mist from above, soft naturalistic backlighting that makes the dew-beaded silk, glowing bristle-roots, and pale eye-glints glow from within, hyper-detailed micro-texturing on every bristle and chitin plate, subsurface scattering, physically-based rendering, muted natural color grading with deep shadows, 1:1 square composition, subject centered and fully visible from head to feet, no readable text."
});
