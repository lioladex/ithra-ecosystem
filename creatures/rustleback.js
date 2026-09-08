/* ITH-219-742 — Rustleback — ambient life asset: เติมการเคลื่อนไหว/ชีวิตให้พื้นป่าหมอก */
creaturesData.push({
        id: "ITH-219-742", name: "Rustleback", nickname: "เจ้าพุ่มไม้วิ่ง", status: "ALIVE", era: "ยุคป่าหมอก (Mistwood Era)",
        imageKey: "RUSTLEBACK", color: "#e8c15a",
        category: "สัตว์กินซาก/ผู้ย่อยสลาย · สัตว์เล็กหากินซากพืชเป็นฝูงเล็กตามพื้นป่า (Small gregarious forest-floor detritivore)",
        habitat: "พื้นป่าหมอกทั่วทวีป Verath (Forest Floor, ต่อเนื่องถึงชายขอบ The Dark Mire)",
        foodChain: "ผู้ย่อยสลายชั้นล่าง — กินใบ Lumenveil ที่ร่วงหล่น เชื้อรา และเศษพืชเน่าตามพื้นป่า เป็นเหยื่อพื้นฐานของ Karvos, Mistcrawler และสัตว์กินเนื้อขนาดเล็ก-กลางแทบทุกชนิด",
        danger: "2% (Harmless)", size: "ระดับ 2 — เล็ก (เท่ากระต่ายป่า)",
        height: "0.25 ม. ที่ไหล่ · ลำตัวยาว 0.4 ม.", weight: "3-4 กก.",
        desc: "สัตว์เล็กที่พบเห็นได้แทบทุกก้าวบนพื้นป่าหมอก อยู่รวมกันเป็นฝูงย่อย 6-10 ตัว วิ่งซุกซนไปมาระหว่างรากไม้ยักษ์ตลอดวันเพื่อคุ้ยหาใบไม้ร่วงและเชื้อราตามพื้นชื้น เสียงกรอบแกรบของมันวิ่งผ่านพุ่มไม้เตี้ยคือเสียงพื้นหลังที่คุ้นเคยที่สุดของป่าหมอกชั้นล่าง มากพอที่นักเดินป่าจะไม่สะดุ้งอีกต่อไปเมื่อได้ยิน แต่ตัวมันเองสะดุ้งง่ายมาก แตกฝูงวิ่งหนีไปคนละทิศทันทีที่มีเสียงหรือกลิ่นแปลกปลอมเพียงเล็กน้อย",
        mutation: { pro: "แตกฝูงกระจายทิศทางพร้อมกันเมื่อตกใจ (Flash Scatter) ทำให้ผู้ล่าไล่ตามเป้าหมายเดียวได้ยากท่ามกลางตัวที่วิ่งกระจายไปทุกทิศ", con: "ตกใจง่ายเกินเหตุจนแทบไม่มีสมาธิหากินต่อเนื่อง — ต้องกินบ่อยครั้งสั้นๆ ตลอดวันแทนกินอิ่มมื้อเดียว เพราะถูกขัดจังหวะด้วยความตกใจอยู่ตลอด" },
        weapons: [ "ไม่มีอาวุธ", "การแตกฝูงกระจายทิศทางพร้อมกันคือการป้องกันตัวหลัก", "ตะกุยขุดดินเร็วหลบเข้าโพรงรากไม้ได้ในไม่กี่วินาที" ],
        social: "อยู่รวมกันเป็นฝูงย่อย 6-10 ตัวตลอดชีวิต แบ่งเวรเงยหน้าระวังภัยสลับกันขณะตัวอื่นก้มกินอยู่เสมอ ฝูงที่เสียตัวเฝ้าระวังไปจะรวมกับฝูงข้างเคียงแทนที่จะแยกอยู่ตัวเดียว",
        head: [
            ["ดวงตา", "ตากลมโตอยู่ด้านข้างหัว", "มุมมองกว้างเกือบรอบตัว มองเห็นความเคลื่อนไหวรอบข้างได้ไวมากแม้กำลังก้มหน้าคุ้ยหาอาหารอยู่"],
            ["จมูก", "จมูกชื้นไวต่อกลิ่นเน่าเปื่อย", "แยกกลิ่นใบไม้ที่เพิ่งร่วงกับที่เน่าแล้วได้ ช่วยเลือกกินส่วนที่ย่อยง่ายที่สุดก่อน"],
            ["ปาก", "ฟันหน้าแบนคม", "เหมาะกับการแทะใบไม้เปื่อยและเชื้อรา ไม่แข็งแรงพอจะกัดเนื้อสัตว์อื่นได้เลย"],
            ["หู", "หูตั้งหมุนได้รอบทิศ", "หมุนแยกทิศทางเสียงได้อิสระจากกันทั้งสองข้าง จับเสียงฝีเท้าของนักล่าที่เข้าใกล้ได้ไวกว่าตาเสมอ"],
            ["EXTRA #1", "ลายแถบบั้นท้ายสว่าง (Startle Flash Patch)", "หย่อมขนสีเหลืองทองสว่างซ่อนอยู่ใต้โคนขนบั้นท้าย เผยออกให้เห็นชัดเจนก็ต่อเมื่อวิ่งหนีเท่านั้น ทำหน้าที่เป็นเป้าล่อสายตาให้ผู้ล่าไล่ตามจุดเดียวขณะฝูงกระจายไปคนละทิศ"],
            ["EXTRA #2", "หนวดสั้นรอบจมูก", "รับสัมผัสพื้นผิว/สั่นสะเทือนของพื้นดินขณะก้มหน้าคุ้ยหาอาหารในที่มืดหรือหมอกหนา"]
        ],
        body: [
            ["BODY FRAME", "ลำตัวเตี้ยกลมป้อม", "ศูนย์ถ่วงต่ำ วิ่งเปลี่ยนทิศกะทันหันระหว่างรากไม้ได้คล่องแคล่วโดยไม่เสียการทรงตัว"],
            ["SPINE", "สันหลังโค้งยืดหยุ่นสูง", "รองรับการกระโดดหลบสิ่งกีดขวางบนพื้นป่าที่ขรุขระด้วยรากไม้พันกัน"],
            ["TAIL", "หางสั้นพองฟู", "Utility — ซ่อนลายแถบสว่างไว้ใต้โคนขนจนกว่าจะวิ่งหนีจริง"]
        ],
        limbs: [
            ["#1", "ขา", "ขาหน้า", "สั้น ปลายเล็บแข็งใช้คุ้ยดินและใบไม้ร่วงหาเชื้อรา"],
            ["#2", "ขา", "ขาหลัง", "แข็งแรงกว่าขาหน้ามาก ให้แรงเร่งออกตัวเร็วเมื่อแตกฝูงหนี"]
        ],
        skin: [
            ["ลำตัว", "ขนสั้นหนาสีน้ำตาลแดงกลืนกับดินและรากไม้"],
            ["ใต้ท้อง", "ขนสีอ่อนกว่าลำตัวเล็กน้อย"],
            ["บั้นท้าย", "ขนสีน้ำตาลปกติซ่อนหย่อมสีเหลืองทองไว้ข้างใต้ เผยออกเฉพาะตอนวิ่งหนี"]
        ],
        pattern: "ลายจุดน้ำตาลเข้ม-อ่อนกระจายทั่วลำตัวคล้ายเศษใบไม้ร่วงคละกัน กลืนกับพื้นป่าสนิทตอนนิ่งอยู่ แต่หย่อมเหลืองทองที่บั้นท้ายจะกะพริบให้เห็นชัดเป็นจังหวะทุกครั้งที่กระโดดหนี",
        pal: [["สีหลัก", "#6b4a35"], ["เงา", "#2b1c14"], ["แสง", "#c9a888"], ["เสริม A", "#8a5f3f"], ["เสริม B", "#4a3324"]],
        hl: ["#e8c15a", "เหลืองทองสว่างที่หย่อมขนบั้นท้าย"],
        hlAt: "หย่อมขนบั้นท้ายที่เผยออกเฉพาะตอนวิ่งหนี — จุดเดียวที่สว่างชัดบนทั้งตัว",
        mutationFull: {
            proTitle: "แตกฝูงกระจายทิศทางพร้อมกัน / ผู้ล่าไล่เป้าเดี่ยวได้ยาก",
            proDesc: "เมื่อตกใจ ทั้งฝูงกระโดดออกวิ่งกระจายไปคนละทิศพร้อมกันทันที หย่อมสีเหลืองทองที่บั้นท้ายแต่ละตัวเผยออกพร้อมกันเป็นจุดสว่างหลายจุดกระจายทุกทิศ ทำให้ผู้ล่าตัดสินใจไล่ตามเป้าหมายเดียวไม่ทันก่อนที่ทุกจุดจะหายลับเข้าพุ่มไม้ไปหมด",
            conTitle: "ตกใจง่ายเกินเหตุ / กินอาหารได้ไม่ต่อเนื่อง",
            conDesc: "ประสาทตกใจไวเกินไปจนแทบทุกเสียง/กลิ่นแปลกปลอมเพียงเล็กน้อยก็ทำให้ทั้งฝูงหยุดกินและวิ่งหนีทันที ต้องกลับมาหากินซ้ำหลายรอบสั้นๆ ตลอดวันแทนกินอิ่มต่อเนื่อง เสียเวลาและพลังงานไปกับความตื่นตระหนกที่บ่อยครั้งไม่มีภัยจริงเลย"
        },
        dangerDetail: {
            raw: "4 / 200", percent: 2, tier: "ไม่มีพิษภัย (Harmless)",
            factors: [],
            note: "ไม่มีอันตรายต่อสิ่งมีชีวิตใดเลย ความสำคัญของมันอยู่ที่การเป็นฐานอาหารหลักของห่วงโซ่อาหารพื้นป่า และเป็น 'เสียงกรอบแกรบพื้นหลัง' ที่บอกว่าพื้นป่าบริเวณนั้นยังปกติดี — ความเงียบกะทันหันของมันคือสัญญาณเตือนภัยที่แม่นยำพอๆ กับของ Duskchime"
        },
        combat: [
            ["Flash Scatter", "แตกฝูงกระโดดวิ่งกระจายไปคนละทิศพร้อมกันทันทีที่ตกใจ หย่อมสีเหลืองทองที่บั้นท้ายกะพริบเผยออกเป็นเป้าล่อสายตาชั่วขณะขณะวิ่ง"],
            ["Root-Hole Dive", "ตะกุยขุดดินเร็วหลบเข้าโพรงรากไม้ใกล้ตัวได้ในไม่กี่วินาทีเมื่อไม่มีทางหนีอื่น"]
        ],
        abilities: [
            {
                name: "การเฝ้าระวังผลัดเวร", type: "Social — พฤติกรรมฝูง",
                desc: "ในฝูงย่อยจะมีอย่างน้อยหนึ่งตัวเงยหน้าระวังภัยตลอดเวลาสลับกันเป็นเวรขณะตัวอื่นก้มหน้ากินอยู่ ตัวที่เฝ้าระวังจะส่งเสียงร้องสั้นแหลมทันทีที่พบภัย กระตุ้นให้ทั้งฝูงแตกวิ่งพร้อมกันโดยไม่ต้องเห็นภัยด้วยตาตัวเองเลย",
                origin: "แรงกดดันจากการเป็นเหยื่อพื้นฐานของนักล่าแทบทุกชนิดในป่าหมอกบีบให้ต้องกินอาหารและระวังภัยไปพร้อมกันตลอดเวลา การแบ่งเวรจึงเป็นทางเดียวที่ทำให้ฝูงกินได้เพียงพอโดยไม่ต้องเสี่ยงทั้งฝูงพร้อมกัน"
            }
        ],
        notes: [
            ["", "<strong>เสียง/ภาพเคลื่อนไหวพื้นหลังของพื้นป่า</strong>: ออกแบบมาเป็น asset เสริมบรรยากาศ — ให้พื้นป่าหมอกรู้สึกมีการเคลื่อนไหวและชีวิตอยู่ตลอดเวลาแม้ในฉากที่ไม่มีสัตว์หลักปรากฏตัว"]
        ],
        prompt: "A small alien forest-floor creature about the size of a wild hare, standing 0.25 meters at the shoulder with a body 0.4 meters long, caught mid-scurry between a tangle of giant tree roots. Its head carries large round eyes set on the sides of its skull, giving it a near-panoramic field of view that catches motion even while its head is lowered to forage; a small moist nose sits above its mouth, sensitive enough to tell freshly fallen leaves from ones already rotting; its mouth holds flat sharp front teeth suited to shredding soft rotten leaves and fungus, far too weak to bite through flesh; its upright ears swivel independently of one another, catching the direction of an approaching predator's footsteps well before its eyes ever could. Short whiskers ring its nose, reading the texture and vibration of the ground as it noses through leaf litter in dim light or thick mist; hidden beneath the fur at the base of its short fluffed tail is a patch of bright golden-yellow fur, invisible while at rest and revealed only the instant it bolts, flashing as a decoy target while the rest of the herd scatters in every direction. Its body frame is low, squat, and round, keeping its center of gravity close to the ground so it can cut sharply between roots without losing its footing; its spine is unusually flexible, letting it bound clear over tangled roots and fallen debris in a single leap; its short fluffed tail conceals the bright rump patch until the instant it flees. Its front legs are short, tipped with sturdy claws for raking through leaf litter and soil in search of fungus; its hind legs are noticeably more powerful, built for the explosive burst of speed it needs the moment the herd scatters. Its fur is short and thick, a reddish umber-brown that blends completely into the leaf litter and root bark around it, its underbelly a shade paler, and the fur over its rump patch reading as ordinary brown until it flares to reveal the bright gold beneath. Its coat carries a mottled pattern of dark and light brown flecks scattered irregularly across its body like a scatter of fallen leaves, vanishing it into the forest floor while still, its hidden golden rump patch flashing into view in rhythmic bursts only while it runs. Scattering explosively in every direction the instant it startles makes it nearly impossible for a predator to commit to chasing any single member of its herd, at the cost of a nervous system so easily startled that it can rarely feed for long without breaking off to flee at a false alarm. Its coloration is a harmonious reddish-umber palette, deepened by near-black shadow low along its flanks and lifted by pale warm-tan highlights along its back and cheeks, with ochre-brown tones worked through its mottled coat and a darker root-bark shade along its legs, and a glowing golden-yellow highlight reserved only for the rump patch it flashes while fleeing. Several more of its herd forage and dart between the giant roots around it, mist drifting low across the forest floor behind them.\n\nPhotorealistic 3D creature render, cinematic film-VFX quality, standing full-body in its natural habitat environment, three-quarter view, shot with a telephoto lens at eye level, shallow depth of field with softly blurred background roots and forest floor, volumetric god rays filtering through mist from above, soft naturalistic backlighting that makes its rump patch glow from within, hyper-detailed micro-texturing on every strand of fur and surface, subsurface scattering, physically-based rendering, muted natural color grading with deep shadows, 1:1 square composition, subject centered and fully visible from head to feet, no readable text."
});
