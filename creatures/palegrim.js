/* ITH-215-847 — Palegrim (ALIVE) */
creaturesData.push({
        id: "ITH-215-847", name: "Palegrim", status: "ALIVE", era: "ยุคป่าหมอก (Mistwood Era)",
        imageKey: "PALEGRIM", color: "#d4d4d8",
        category: "สัตว์กินซากตามรอย Korrune ระยะปลอดภัย (Long-range trailing scavenger)",
        habitat: "เคลื่อนย้ายตามอาณาเขตของ Korrune ทั่วทวีป Verath ไม่ยึดถิ่นตายตัว",
        foodChain: "ผู้ย่อยสลายฉวยโอกาส — กินเศษซากที่ Korrune ทิ้งไว้เท่านั้น ไม่ล่าเองเลย",
        danger: "3% (Harmless, extremely skittish)", size: "ระดับ 2 — เล็ก (เท่าสุนัขจิ้งจอกตัวเล็ก)",
        height: "0.35 ม. ที่ไหล่ · ลำตัวยาว 0.55 ม.", weight: "7 กก.",
        desc: "สัตว์กินซากขี้อายที่สุดในป่าหมอก ไม่เคยล่าเหยื่อเองเลยแม้แต่ครั้งเดียว ดำรงชีวิตด้วยการดมกลิ่นเครื่องหมายอาณาเขตของ Korrune แล้วตามรอยไปอย่างระมัดระวังสุดขีด รอจนมั่นใจว่า Korrune จากไปไกลจริงๆ ก่อนจะเข้าไปแทะเศษซากที่เหลือ การมีอยู่ของมันคือหลักฐานทางอ้อมที่ชัดเจนที่สุดว่า Korrune ยังมีชีวิตและล่าอยู่จริงในป่าหมอก แม้แทบไม่มีใครเคยเห็นตัว Korrune ตรงๆ เลยก็ตาม",
        mutation: { pro: "จมูกไวจับกลิ่นเตือนภัยของ Korrune ได้จากระยะไกลมาก / แทบไม่มีคู่แข่งแย่งซากเพราะไม่มีใครกล้าเข้าใกล้เขตของ Korrune", con: "ขี้อายจนเกินเหตุ / หนีทิ้งซากทันทีที่ได้กลิ่นแปลกปลอมแม้เพียงน้อยนิด บางครั้งอดอาหารเพราะไม่กล้าเข้าใกล้พอ" },
        weapons: [ "ไม่มีอาวุธ", "หลบหนีเร็วมากเป็นการป้องกันตัวหลัก", "ประสาทสัมผัสไวจนแทบไม่เคยถูกจับได้คาที่" ],
        social: "อยู่ตัวเดียวเกือบตลอดชีวิต หลีกเลี่ยงสัตว์ชนิดอื่นทุกชนิดไม่ใช่แค่ Korrune เท่านั้น พบเจอกันเองได้แค่ช่วงผสมพันธุ์สั้นๆ ปีละครั้ง",
        head: [
            ["ดวงตา", "ตาเล็กเรียวรี ระวังภัยตลอดเวลา", "กวาดมองรอบตัวแทบไม่หยุดนิ่งแม้ขณะกิน มองเห็นได้ดีทั้งกลางวันและกลางคืน"],
            ["จมูก", "จมูกแยกแฉกคล้ายกลีบบานได้ (Splayed Chemosensory Nose)", "ปลายจมูกไม่ใช่รูกลมแบบสัตว์ทั่วไป แต่แยกเป็นกลีบเนื้อเล็กๆ หลายแฉกรอบปลายจมูกที่บานออกได้เมื่อสูดดม เพิ่มพื้นที่ผิวรับกลิ่นให้จับกลิ่นเครื่องหมายอาณาเขตของ Korrune ได้จากระยะไกลกว่าสัตว์อื่นเกือบทุกชนิด แยกความเข้มข้นของกลิ่นได้ละเอียดพอจะบอกได้ว่า Korrune ผ่านไปแล้วนานแค่ไหน หุบแฉกกลับแนบสนิทเมื่อไม่ได้ใช้งาน"],
            ["ปาก", "ปากเล็กแหลม", "ฟันเล็กเหมาะกับการแทะเศษซากที่เหลือ ไม่แข็งแรงพอจะฉีกเนื้อสดได้เลย"],
            ["หู", "หูสองข้างไม่เท่ากัน (Asymmetric Twin Ears)", "หูข้างหนึ่งใหญ่กว่าอีกข้างอย่างเห็นได้ชัดและหมุนได้ไกลกว่า ใช้จับทิศทางเสียงแบบสามเหลี่ยมได้แม่นยำกว่าหูคู่ที่เท่ากัน ส่วนหูข้างเล็กมักหมอบแนบหัวไว้เพื่อลดพื้นที่หน้าตัดให้เห็นตัวยากขึ้น สลับข้างที่ตั้งฟังกับข้างที่หมอบไปเรื่อยๆ ตามทิศเสียงที่สงสัย"],
            ["EXTRA #1", "ต่อมรับกลิ่นไวพิเศษ (Hyper-sensitive Scent Organ)", "แยกแยะกลิ่นเตือนภัยเฉพาะตัวของ Korrune ออกจากกลิ่นอื่นทั้งหมดในป่าได้ทันที เป็นสัญชาตญาณที่ฝังลึกที่สุดของมัน — กลีบจมูกจะบานออกเต็มที่โดยอัตโนมัติทันทีที่จับกลิ่นนั้นได้ ก่อนหุบกลับอย่างรวดเร็วเมื่อมั่นใจในทิศทาง"],
            ["EXTRA #2", "ขนสีซีดกลืนหมอก (Pale Fog Coat)", "ขนสีเทาอ่อนซีดเกือบขาวทั่วตัว กลืนกับหมอกและแสงจางในทุกช่วงเวลา ไม่ใช่การพรางตัวเพื่อล่า แต่เพื่อหลบทุกสายตาให้มากที่สุด"]
        ],
        body: [
            ["BODY FRAME", "โครงเพรียวเบาคล่องแคล่ว", "สร้างมาเพื่อวิ่งหนีเร็วและทนวิ่งทางไกลได้นาน ไม่ใช่เพื่อต่อสู้หรือล่าเลยแม้แต่น้อย"],
            ["SPINE", "สันหลังยืดหยุ่นปานกลาง", "รองรับการวิ่งเปลี่ยนทิศกะทันหันเมื่อตกใจ"],
            ["TAIL", "หางยาวพองฟู", "Utility — พองฟูขึ้นทันทีเมื่อตกใจ ทำให้ดูตัวใหญ่ขึ้นเสี้ยววินาทีก่อนจะหันหลังวิ่งหนีจริง"]
        ],
        limbs: [
            ["#1", "ขา", "ขาหน้า", "เรียวเบา เหมาะกับการวิ่งเร็วระยะสั้นถึงกลาง ไม่เหมาะกับการขุดหรือต่อสู้"],
            ["#2", "ขา", "ขาหลัง", "ยาวกว่าขาหน้าเล็กน้อย ให้แรงเร่งออกตัวเร็วเมื่อตกใจสุดขีด"]
        ],
        skin: [
            ["ลำตัว", "ขนสั้นสีเทาอ่อนซีดเกือบขาวทั่วตัว กลืนกับหมอกทุกช่วงเวลา"],
            ["ใต้ท้อง", "สีอ่อนกว่าลำตัวอีกเล็กน้อย"],
            ["ขา", "ขนสั้นแน่นกว่าลำตัวเล็กน้อยเพื่อลดเสียงตอนวิ่ง"]
        ],
        pattern: "สีเทาอ่อนซีดสม่ำเสมอทั่วตัวแทบไม่มีลาย กลืนกับหมอกจนแทบมองไม่เห็นแม้ในระยะใกล้ถ้าไม่ขยับตัว",
        pal: [["สีหลัก", "#d4d4d8"], ["เงา", "#71717a"], ["แสง", "#f4f4f5"], ["เสริม A", "#a1a1aa"], ["เสริม B", "#e4e4e7"]],
        hl: ["#f4f4f5", "เทาอ่อนซีดกลืนหมอก"],
        hlAt: "ดวงตาเล็กที่ไม่เคยหยุดกวาดมองรอบตัว · กลีบจมูกที่บานออกเต็มที่ตอนจับกลิ่น Korrune ได้ · หูสองข้างที่ขนาดไม่เท่ากันหมุนคนละจังหวะ · หางที่พองฟูขึ้นทันทีเมื่อตกใจ",
        mutationFull: {
            proTitle: "จมูกไวจับกลิ่น Korrune / แทบไม่มีคู่แข่งแย่งอาหาร",
            proDesc: "จมูกที่ไวต่อกลิ่นเครื่องหมายอาณาเขตของ Korrune มากเป็นพิเศษ ทำให้มันตามรอยหาซากที่เหลือได้โดยแทบไม่มีคู่แข่งเลย เพราะสัตว์อื่นแทบทุกชนิดหลีกเลี่ยงกลิ่นนั้นด้วยสัญชาตญาณจนไม่กล้าเข้าใกล้เลยด้วยซ้ำ",
            conTitle: "ขี้อายจนเกินเหตุ / เสี่ยงอดอาหาร",
            conDesc: "ความระมัดระวังสุดขีดที่ทำให้มันปลอดภัยจาก Korrune เอง ก็ทำให้มันพลาดโอกาสกินซากไปบ่อยครั้งเช่นกัน บางครั้งรอนานเกินไปจนซากถูกผู้ย่อยสลายรายอื่นแย่งไปหมดก่อน"
        },
        dangerDetail: {
            raw: "6 / 200", percent: 3, tier: "ไม่มีพิษภัย (Harmless)",
            factors: [],
            note: "ไม่มีอันตรายต่อสิ่งมีชีวิตใดเลย แม้แต่จะเข้าใกล้มันก็ยากมากเพราะความระวังภัยสูงเกินปกติ"
        },
        combat: [
            ["Scent Trailing", "ตามรอยกลิ่นเครื่องหมายอาณาเขตของ Korrune จากระยะไกลมาก แยกความเข้มข้นของกลิ่นได้ว่าผ่านไปนานแค่ไหนก่อนตัดสินใจเข้าใกล้"],
            ["Startle Flee", "หนีทันทีที่ได้กลิ่นหรือเสียงแปลกปลอมแม้เพียงเล็กน้อย ไม่รอพิสูจน์ว่าอันตรายจริงหรือไม่"]
        ],
        notes: [
            ["", "<strong>หลักฐานที่มีชีวิต</strong>: นักวิจัยภาคสนามส่วนใหญ่ไม่เคยเห็น Korrune ตัวเป็นๆ เลยสักครั้ง สิ่งเดียวที่ยืนยันได้ว่ามันยังมีชีวิตและล่าอยู่จริงในพื้นที่หนึ่งๆ คือการพบ Palegrim หลบๆ ซ่อนๆ อยู่แถวนั้น"],
            ["", "<strong>ระยะปลอดภัยที่แท้จริง</strong>: Palegrim ไม่เคยเข้าใกล้ Korrune ในระยะที่มองเห็นตัวได้เลยแม้แต่ครั้งเดียวตลอดการสังเกตที่บันทึกไว้ ระยะที่มันเลือกเข้าใกล้เศษซากเสมอคือหลังกลิ่นเตือนภัยจางลงต่ำกว่าระดับที่สัตว์ทั่วไปยังตรวจจับได้เท่านั้น"]
        ],
        prompt: "A small, extremely skittish alien scavenger standing 0.35 meters at the shoulder with a body 0.55 meters long, resembling a cross between a fennec fox and a lean wild dog, its entire existence built around one behavior: staying as far from danger as possible while still surviving off it. Its head bears small, narrow, constantly scanning eyes suited to both day and night vision, a nose tipped not with an ordinary round nostril but with several small fleshy petal-like lobes that flare open wide to maximize scent-detecting surface area whenever it catches the faintest trace of Korrune's territorial warning musk, folding flat closed again once it is confident of the direction, a small sharp-toothed mouth suited only to gnawing leftover scraps rather than tearing fresh meat, and two visibly asymmetric ears — one noticeably larger and rotating through a wider arc to triangulate sound direction, the other kept low and flattened against the skull to minimize its silhouette, the two roles swapping constantly as it tracks a suspected noise, triggering instant flight at the faintest unfamiliar sound. Its coat is pale ash-grey fur, almost white, uniform and nearly patternless, blending into fog and diffuse light at almost any time of day, not evolved for hunting camouflage but purely to avoid being seen by anything at all. Its body is a light, lean, agile frame built entirely for fast, sustained fleeing rather than any kind of fighting or hunting, with a moderately flexible spine for sudden direction changes when startled, and a long fluffy tail that puffs up instantly the moment it is frightened, briefly making it look larger just before it turns and bolts. It has two pairs of legs: slender front legs built for short-to-medium bursts of speed, and slightly longer hind legs that provide the explosive acceleration it needs the instant it senses danger. Its coat is pale grey fur over its entire body, slightly lighter still on its underbelly, with denser, sound-dampening fur on its legs to keep its footsteps as quiet as possible while it flees. Its hyper-sensitive nose for Korrune's scent markers lets it scavenge leftovers with almost no competition, since nearly every other animal in the mistwood instinctively avoids that scent entirely, at the cost of being so overcautious that it frequently waits too long and loses the scraps to bolder decomposers instead. Its coloration is a soft pale ash-grey palette throughout, deepened only slightly by muted grey shadows and lifted by near-white highlights along its flanks and tail, with no bright or glowing markings anywhere on its body, favoring total visual disappearance over any kind of display. It stands frozen mid-step at the edge of a misty clearing in the Verath mistwood, its larger ear rotated fully toward an unseen sound while the smaller one lies flat, its petal-like nose lobes still half-flared from a recent scent, tail beginning to puff up, poised on the exact verge of bolting.\n\nPhotorealistic 3D creature render, cinematic film-VFX quality, full-body in its natural habitat environment, three-quarter view, shot with a telephoto lens at eye level, shallow depth of field with softly blurred foggy background, soft diffuse natural lighting, hyper-detailed micro-texturing on fur and surface, subsurface scattering, physically-based rendering, muted pale natural color grading, 1:1 square composition, subject centered and fully visible, no readable text."
});
