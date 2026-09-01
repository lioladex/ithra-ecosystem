/* ITH-214-529 — Sevrin (ALIVE) */
creaturesData.push({
        id: "ITH-214-529", name: "Sevrin", status: "ALIVE", era: "ยุคป่าหมอก (Mistwood Era)",
        imageKey: "SEVRIN", color: "#f97373",
        category: "สัตว์ขนาดเล็กเลียนแบบสัญญาณเตือนภัย (Bioluminescent mimic, nocturnal glider)",
        habitat: "ชั้นหมอกกลาง (Verath, The Mist Layer)",
        foodChain: "ผู้บริโภคทุติยภูมิขนาดเล็ก — ล่าแมลงและ Glimmerwing เป็นเหยื่อฉวยโอกาสของนักล่าที่ไม่ทันสังเกตลายเลียนแบบ",
        danger: "5% (Harmless, deceptive appearance only)", size: "ระดับ 1 — จิ๋ว (เท่ากระรอกตัวเล็ก)",
        height: "ลำตัวยาว 0.25 ม. (ไม่รวมพังผืดร่อน)", weight: "0.9 กก.",
        desc: "สัตว์กลางคืนขนาดจิ๋วที่วิวัฒนาการลายเรืองแสงบนหลังให้เลียนแบบเส้นแสงส้มแดงใต้ผิวหนังของ Karvos วัยอ่อนแบบย่อส่วน แม้ตัวมันเองไม่มีพิษหรืออันตรายใดๆ เลย แต่ลายเลียนแบบนี้หลอกให้นักล่าหลายชนิดลังเลพอจะให้มันร่อนหนีทัน เป็นตัวอย่างของ Batesian mimicry ที่ชัดเจนที่สุดในป่าหมอก",
        mutation: { pro: "ลายเรืองแสงเลียนแบบ Karvos วัยอ่อน / นักล่าลังเลก่อนโจมตีเสมอ", con: "ใช้ได้แค่กลางคืนหรือที่มืดพอ / กลางวันลายจางจนไร้ประโยชน์ ต้องพึ่งการพรางตัวแบบธรรมดาแทน" },
        weapons: [ "ไม่มีอาวุธจริง", "ลายเรืองแสงเลียนแบบ (Bioluminescent Mimicry)", "พังผืดร่อนหนีระยะสั้น (Glide Escape)" ],
        social: "อยู่ตัวเดียว หากินกลางคืนเท่านั้น หลบซ่อนในโพรงไม้เล็กตอนกลางวันเป็นกลุ่มครอบครัวเล็กๆ ไม่เกิน 4 ตัว",
        head: [
            ["ดวงตา", "ตากลมโตพิเศษสำหรับกลางคืน", "รูม่านตาขยายกว้างสุดขั้วในที่มืด ม่านตาสีแดงอมส้มจางๆ กลืนกับลายเรืองแสงบนตัว"],
            ["จมูก", "จมูกเล็กไวต่อกลิ่นแมลง", "ตามกลิ่นแมลงและ Glimmerwing ในความมืดได้แม่นยำ"],
            ["ปาก", "ปากเล็กมีฟันแหลมเรียง", "ฟันเล็กแหลมคมพอจับแมลงตัวเล็กได้ ไม่มีพลังกัดมากพอจะเป็นอันตรายต่อสัตว์ใหญ่เลย"],
            ["หู", "หูใหญ่บางตั้งชัน", "ไวต่อเสียงกระพือปีกแมลงและเสียงฝีเท้านักล่าที่เข้าใกล้"],
            ["EXTRA #1", "ลายเรืองแสงเลียนแบบบนหลัง (Mimic Glow Pattern)", "เส้นแสงส้มแดงจางๆ เรืองขึ้นเป็นจังหวะตามแนวสันหลัง เลียนแบบเส้นแสงใต้ผิวของ Karvos วัยอ่อนแบบย่อส่วนเป๊ะ ควบคุมความสว่างได้เองตามระดับความตกใจ"],
            ["EXTRA #2", "พังผืดร่อนข้างลำตัว (Gliding Membrane)", "พังผืดบางยืดระหว่างขาหน้า-ขาหลัง กางร่อนหนีในแนวเฉียงได้ไกลถึง 12 เมตรเมื่อลายเลียนแบบซื้อเวลาไม่พอ"]
        ],
        body: [
            ["BODY FRAME", "โครงเล็กเพรียวคล่องแคล่ว", "กระดูกเบามาก ลำตัวยืดหยุ่นสูง เหมาะกับการกระโดดและร่อนระหว่างกิ่งเล็กๆ"],
            ["SPINE", "สันหลังโค้งเด่นชัด", "แนวสันหลังนูนขึ้นเล็กน้อยเพื่อให้ลายเรืองแสงเลียนแบบดูเป็นเส้นนูนคล้ายของจริงมากที่สุด"],
            ["TAIL", "หางยาวเรียวไม่เรืองแสง", "Utility — ใช้ถ่วงสมดุลขณะร่อนเท่านั้น ตั้งใจไม่มีลายเรืองแสงเพื่อไม่ให้เผยสัดส่วนตัวจริงที่เล็กกว่า Karvos มาก"]
        ],
        limbs: [
            ["#1", "ขา", "ขาหน้า", "เล็กเรียว ปลายนิ้วมีเล็บโค้งเกาะกิ่งไม้ ขอบด้านในยึดพังผืดร่อน"],
            ["#2", "ขา", "ขาหลัง", "ยาวกว่าขาหน้าเล็กน้อย ใช้สปริงตัวกระโดดก่อนกางพังผืดร่อน"]
        ],
        skin: [
            ["หลัง", "ขนสั้นสีน้ำตาลเข้มแซมลายเรืองแสงส้มแดงตามแนวสันหลัง"],
            ["ใต้ท้อง", "ขนสีอ่อนกว่ามาก ไม่มีลายเรืองแสงเลย เพราะไม่จำเป็นต้องข่มขู่จากมุมนี้"],
            ["พังผืดร่อน", "หนังบางเรียบ โปร่งแสงเล็กน้อยตรงขอบ"]
        ],
        pattern: "ลายเรืองแสงเส้นส้มแดงตามแนวสันหลังเลียนแบบ Karvos วัยอ่อนแบบย่อส่วน ล้อมด้วยขนสีน้ำตาลเข้มกลืนความมืดยามค่ำคืน",
        pal: [["สีหลัก", "#78350f"], ["เงา", "#292524"], ["แสง", "#f97373"], ["เสริม A", "#57534e"], ["เสริม B", "#fb923c"]],
        hl: ["#f97373", "ส้มแดงเรืองแสงเลียนแบบ Karvos วัยอ่อน"],
        hlAt: "เส้นลายเรืองแสงบนสันหลังที่ควบคุมความสว่างได้เองตามระดับตกใจ · ดวงตาโตสะท้อนแสงในความมืด",
        mutationFull: {
            proTitle: "ลายเรืองแสงเลียนแบบ / ซื้อเวลาก่อนนักล่าตัดสินใจ",
            proDesc: "ลายเรืองแสงที่เลียนแบบเส้นแสงใต้ผิวของ Karvos วัยอ่อนได้แม่นยำมากพอจะทำให้นักล่าหลายชนิดลังเลไม่กล้าโจมตีทันที เพราะกลัวจะเจอฝูง Karvos ตัวเต็มวัยซุ่มอยู่ใกล้ๆ เสี้ยววินาทีที่ลังเลนั้นเพียงพอให้มันร่อนหนีได้ทันเสมอ",
            conTitle: "ใช้ได้เฉพาะที่มืดพอ / ไร้ประโยชน์ตอนกลางวัน",
            conDesc: "ลายเรืองแสงต้องพึ่งความมืดของชั้นหมอกกลางยามค่ำคืนถึงจะเห็นชัดพอหลอกได้ กลางวันแสงจ้าทำให้ลายจางจนแทบมองไม่เห็น ต้องหลบซ่อนในโพรงไม้แทนทั้งวันเพื่อรอกลางคืน"
        },
        dangerDetail: {
            raw: "10 / 200", percent: 5, tier: "ไม่มีพิษภัยจริง แต่ดูอันตรายลวงตา (Deceptively Harmless)",
            factors: ["ลายเลียนแบบทำให้ผู้ล่าลังเล (+5 เชิงจิตวิทยา ไม่ใช่อันตรายจริง)"],
            note: "ไม่มีอันตรายทางกายภาพเลยแม้แต่น้อย อันตรายทั้งหมดเป็นภาพลวงตาล้วนๆ ที่ได้ผลเฉพาะกับนักล่าที่ยังไม่เคยจับมันได้และรู้ทันมาก่อน"
        },
        combat: [
            ["Mimic Glow", "เรืองแสงลายเลียนแบบ Karvos วัยอ่อนทันทีที่รู้สึกถูกจับตามอง สร้างความลังเลให้ผู้ล่าก่อนตัดสินใจโจมตี"],
            ["Glide Escape", "ใช้จังหวะลังเลของผู้ล่ากระโจนออกกางพังผืดร่อนหนีในแนวเฉียงไปยังกิ่งไม้ที่ปลอดภัยกว่า"]
        ],
        abilities: [
            {
                name: "การเลียนแบบลายเรืองแสงของนักล่า", type: "Concealment — การเลียนแบบ (Mimicry)",
                desc: "เลียนแบบลายเรืองแสงส้มแดงข้างแก้มของ Karvos วัยอ่อนได้แม่นยำพอจะกระตุ้นสัญชาตญาณระแวงภัยของผู้ที่เคยเผชิญหน้า Karvos มาก่อน ให้ชะงักไปเสี้ยววินาทีก่อนจะทันรู้ตัวว่าเป็นตัวเล็กกว่ามากที่ไม่มีอันตรายจริง แล้วใช้จังหวะนั้นกางพังผืดร่อนหนีไปอีกกิ่งอย่างเงียบเชียบ",
                origin: "ยืมความน่ากลัวของสิ่งที่อันตรายจริงมาใช้ ถูกกว่าการวิวัฒนาการเกราะหรืออาวุธของตัวเองมาก ตราบใดที่ไม่มีนักล่าตัวไหนได้เจอมันบ่อยพอจะจับโป๊ะกลลวงนี้ได้"
            }
        ],
        notes: [
            ["", "<strong>นักหลอกลวงแห่งความมืด</strong>: นักวิจัยภาคสนามบางคนเชื่อว่าลายเรืองแสงของ Sevrin วิวัฒนาการมาจากการอยู่ใกล้รังของ Karvos วัยอ่อนเป็นเวลานาน จนค่อยๆ ปรับตัวให้เลียนแบบได้แนบเนียนขึ้นรุ่นต่อรุ่น"],
            ["warn", "<strong>ล่อตาล่อใจ</strong>: ตัวเอกในร่างใดก็ตามที่เคยเผชิญหน้า Karvos มาก่อนมักสะดุ้งถอยหนีทันทีที่เห็นลายเรืองแสงของ Sevrin ในที่มืด ก่อนจะรู้ตัวว่าถูกหลอกเมื่อสายเกินจะไล่จับ"]
        ],
        prompt: "A tiny nocturnal alien mimic creature, its body 0.25 meters long, roughly the size of a small squirrel, resembling a cross between a flying squirrel and a gecko, its entire evolutionary strategy built around one deceptive trick. Its head bears a pair of oversized round eyes with dilated reddish-orange irises perfectly suited to near-total darkness, a small nose keenly tuned to the scent of insects, a small mouth lined with sharp but harmless insect-catching teeth, and large thin upright ears tuned to the sound of insect wingbeats and approaching predator footsteps. Down the ridge of its spine runs a controllable bioluminescent glow pattern in orange-red, precisely mimicking in miniature the subdermal heat-vein glow of a juvenile Karvos, its brightness rising and falling with its own level of alarm, while a thin gliding membrane stretches between its front and back legs, letting it launch into a long diagonal glide of up to 12 meters when the mimicry alone fails to buy enough time. Its body is a small, light-boned, agile frame built for quick leaps and glides between thin branches, its spine ridge slightly raised to make the mimic glow pattern read as a convincingly raised vein-line, and its long slender tail carries no glow markings at all, deliberately, so as not to reveal its true small proportions next to an actual Karvos. It has two pairs of legs: slender clawed forelegs gripping the inner edge of its gliding membrane, and slightly longer hind legs that spring-load its leap before the membrane opens. Its back is covered in short dark brown fur interrupted by the glowing orange-red mimic pattern along the spine, its underbelly is a much paler, unmarked fur with no glow at all since it has no need to intimidate from below, and its gliding membrane is smooth thin skin, faintly translucent at the edges. Its convincing bioluminescent mimicry buys it a crucial moment of predator hesitation, at the total cost of being completely useless in daylight, when the glow fades to nearly invisible and it must hide in a tree hollow until dark instead. Its coloration is a dark umber-brown palette for concealment, deepened by near-black shadows in its fur and lifted by the vivid orange-red glow of its mimic markings along the spine, with warm rust-orange worked subtly into its glowing pattern's edges. It clings low on a mossy branch in the deep darkness of the Verath mist layer at night, its spine glow pulsing faintly orange-red, large reflective eyes catching the last trace of ambient light, poised mid-startle just before a glide.\n\nPhotorealistic 3D creature render, cinematic film-VFX quality, full-body in its natural nighttime habitat, three-quarter view, shot with a telephoto lens at eye level, shallow depth of field with a near-black blurred background, dramatic low-key lighting sourced mainly from its own glowing spine pattern, hyper-detailed micro-texturing on fur and membrane, subsurface scattering, physically-based rendering, cool dark natural color grading, 1:1 square composition, subject centered and fully visible, no readable text."
});
