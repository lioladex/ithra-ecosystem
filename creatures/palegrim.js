/* ITH-215-847 — Palegrim (ALIVE) */
creaturesData.push({
        id: "ITH-215-847", name: "Palegrim", nickname: "เจ้าเงาสีซีด", status: "ALIVE", era: "ยุคป่าหมอก (Mistwood Era)",
        imageKey: "PALEGRIM", color: "#e4e4e7",
        category: "สัตว์กินซาก/ผู้ย่อยสลาย · สัตว์กินซากตามรอยเจ้าไร้เสียงระยะปลอดภัย (Long-range trailing scavenger)",
        habitat: "เคลื่อนย้ายตามอาณาเขตของเจ้าไร้เสียงทั่วทวีป Verath ไม่ยึดถิ่นตายตัว — พบบ่อยที่สุดที่ Zone 15: The Still Reach ตามอาณาเขตหลักของมัน",
        foodChain: "ผู้ย่อยสลายฉวยโอกาส — กินเศษซากที่เจ้าไร้เสียงทิ้งไว้เท่านั้น ไม่ล่าเองเลย",
        danger: "3% (Harmless, extremely skittish)", size: "ระดับ 2 — เล็ก (เท่าสุนัขจิ้งจอกตัวเล็ก)",
        height: "0.35 ม. ที่ไหล่ · ลำตัวยาว 0.55 ม.", weight: "7 กก.",
        desc: "สัตว์กินซากขี้อายที่สุดในป่าหมอก ไม่เคยล่าเหยื่อเองเลยแม้แต่ครั้งเดียว ดำรงชีวิตด้วยการดมกลิ่นเครื่องหมายอาณาเขตของเจ้าไร้เสียงแล้วตามรอยไปอย่างระมัดระวังสุดขีด รอจนมั่นใจว่าเจ้าไร้เสียงจากไปไกลจริงๆ ก่อนจะเข้าไปแทะเศษซากที่เหลือ การมีอยู่ของมันคือหลักฐานทางอ้อมที่ชัดเจนที่สุดว่าเจ้าไร้เสียงยังมีชีวิตและล่าอยู่จริงในป่าหมอก แม้แทบไม่มีใครเคยเห็นตัวเจ้าไร้เสียงตรงๆ เลยก็ตาม ตัวมันเองก็งดงามอย่างประหลาด — ขนสีขาวนวลฟูราวกับหมอกจับตัวเป็นก้อน แซมด้วยปลายขนสีดำสนิทตามหูและหาง กับหงอนขนขาวฟูสองแฉกตั้งเด่นเหนือหูที่ทำให้ใบหน้าดูสง่างามมีเอกลักษณ์ ราวกับเป็นภาพลวงตาที่ป่าหมอกสร้างขึ้นมากกว่าจะเป็นสัตว์จริง",
        mutation: { pro: "จมูกไวจับกลิ่นเตือนภัยของเจ้าไร้เสียงได้จากระยะไกลมาก / แทบไม่มีคู่แข่งแย่งซากเพราะไม่มีใครกล้าเข้าใกล้เขตของเจ้าไร้เสียง", con: "ขี้อายจนเกินเหตุ / หนีทิ้งซากทันทีที่ได้กลิ่นแปลกปลอมแม้เพียงน้อยนิด บางครั้งอดอาหารเพราะไม่กล้าเข้าใกล้พอ" },
        weapons: [ "ไม่มีอาวุธ", "หลบหนีเร็วมากเป็นการป้องกันตัวหลัก", "ประสาทสัมผัสไวจนแทบไม่เคยถูกจับได้คาที่" ],
        social: "อยู่ตัวเดียวเกือบตลอดชีวิต หลีกเลี่ยงสัตว์ชนิดอื่นทุกชนิดไม่ใช่แค่เจ้าไร้เสียงเท่านั้น พบเจอกันเองได้แค่ช่วงผสมพันธุ์สั้นๆ ปีละครั้ง",
        head: [
            ["ดวงตา", "ตาเล็กเรียวรีสีเทานวล (Pale Grey Eyes)", "ดวงตาทั้งสองข้างเป็นสีเทานวลอ่อนเหมือนหมอกจับตัว กวาดมองรอบตัวแทบไม่หยุดนิ่งแม้ขณะกิน มองเห็นได้ดีทั้งกลางวันและกลางคืน สีเทานวลที่กลืนไปกับขนรอบดวงตาทำให้ผู้พบเห็นแทบแยกไม่ออกว่าดวงตาเริ่มต้นจากตรงไหน"],
            ["จมูก", "จมูกเล็กเปียกชื้นสีดำปกติ (Sensitive Black Nose)", "ปลายจมูกเล็กเปียกชื้นสีดำสนิทแบบสัตว์ทั่วไป ไม่มีรูปทรงพิเศษภายนอกให้สังเกตเห็นเลย แต่ภายในมีเซลล์รับกลิ่นหนาแน่นกว่าสัตว์ทั่วไปหลายเท่า จับกลิ่นเครื่องหมายอาณาเขตของเจ้าไร้เสียงได้จากระยะไกลกว่าสัตว์อื่นเกือบทุกชนิด แยกความเข้มข้นของกลิ่นได้ละเอียดพอจะบอกได้ว่าเจ้าไร้เสียงผ่านไปแล้วนานแค่ไหน ปลายจมูกกระตุกถี่ๆ เมื่อสูดดมกลิ่นเข้มข้น"],
            ["ปาก", "ปากเล็กแหลม", "ฟันเล็กเหมาะกับการแทะเศษซากที่เหลือ ไม่แข็งแรงพอจะฉีกเนื้อสดได้เลย"],
            ["หู", "หูสองข้างเรียวยาวแหลมสมมาตร ชี้เฉียงไปด้านหลัง (Tapered Swept-back Ears)", "หูทั้งสองข้างมีขนาดและรูปทรงเท่ากันทุกประการ เรียวยาวแหลมคล้ายใบมีดบาง ตั้งเอนชี้เฉียงไปด้านหลังตามแนวกะโหลกแทนที่จะตั้งชันขึ้นตรง ให้รูปทรงลู่ลมกลมกลืนไปกับเส้นสันหลังเวลาวิ่งหนี หมุนได้อิสระจากกันคนละทิศเพื่อจับทิศทางเสียงแบบสามเหลี่ยมได้แม่นยำ ปลายหูทั้งสองข้างมีขนสีดำสนิทตัดกับขนขาวนวลทั่วตัวอย่างคมชัดเท่ากันทั้งคู่ เมื่อต้องหลบซ่อน หูข้างใดข้างหนึ่งจะหุบแนบหัวลงสลับกันไปตามจังหวะ ลดพื้นที่หน้าตัดให้เห็นตัวยากขึ้นโดยไม่เสียสมดุลของรูปทรงใบหน้า"],
            ["EXTRA #1", "ต่อมรับกลิ่นไวพิเศษ (Hyper-sensitive Scent Organ)", "แยกแยะกลิ่นเตือนภัยเฉพาะตัวของเจ้าไร้เสียงออกจากกลิ่นอื่นทั้งหมดในป่าได้ทันที เป็นสัญชาตญาณที่ฝังลึกที่สุดของมัน — ปลายจมูกจะกระตุกถี่และสูดดมแรงขึ้นโดยอัตโนมัติทันทีที่จับกลิ่นนั้นได้ ก่อนสงบลงอย่างรวดเร็วเมื่อมั่นใจในทิศทาง"],
            ["EXTRA #2", "ขนสีขาวนวลฟูกลืนหมอก (Pale Fog Coat)", "ขนฟูนุ่มสีขาวนวลเกือบบริสุทธิ์ทั่วตัว กลืนกับหมอกและแสงจางในทุกช่วงเวลา ไม่ใช่การพรางตัวเพื่อล่า แต่เพื่อหลบทุกสายตาให้มากที่สุด ทว่าปลายขนสีดำสนิทตามหูและหาง กับหงอนขนขาวฟูเหนือหู กลับทำให้มันดูโดดเด่นและลึกลับขึ้นในคราวเดียวกัน"],
            ["EXTRA #3", "หงอนขนขาว 1 คู่ (Paired White Fur Crests)", "กระจุกขนสีขาวนวลยาวฟูสองแฉกงอกตั้งชันเหนือหูทั้งสองข้าง ไม่ใช่เขาหรืออวัยวะแข็งใดๆ เป็นเพียงขนที่งอกหนาแน่นเป็นพิเศษจนตั้งทรงสง่างามได้เอง ต่างจากขนเรียบส่วนอื่นของหัวอย่างชัดเจน ไวต่อการสั่นสะเทือนของคลื่นเสียงความถี่ต่ำที่เจ้าไร้เสียงปล่อยออกมาก่อนเคลื่อนไหว ทำให้รู้ตัวก่อนได้ยินเสียงจริงเสียอีก"]
        ],
        body: [
            ["BODY FRAME", "โครงผอมเพรียวสง่างามคล่องแคล่ว", "ลำตัวผอมเพรียวลงอีกเล็กน้อยจากเดิม สร้างมาเพื่อวิ่งหนีเร็วและทนวิ่งทางไกลได้นาน สัดส่วนซ้าย-ขวาสมมาตรเท่ากันทุกด้านให้ท่วงท่าสง่างามแม้ในยามหลบหนี ไม่ใช่เพื่อต่อสู้หรือล่าเลยแม้แต่น้อย"],
            ["SPINE", "สันหลังยืดหยุ่นปานกลาง", "รองรับการวิ่งเปลี่ยนทิศกะทันหันเมื่อตกใจ"],
            ["NECK", "แถบขนเข้มรอบคอ (Dark Collar Band)", "แถบขนสีเทาเข้มถึงดำพาดรอบลำคอคล้ายปลอกคอธรรมชาติ ตัดกับขนขาวนวลรอบข้างอย่างชัดเจน ไม่ใช่เครื่องประดับแต่เป็นรอยพรางที่ตัดเส้นเงาลำตัวให้ดูสั้นลงเมื่อมองจากระยะไกลในหมอก"],
            ["TAIL", "หางยาวสง่างามพองฟูปลายดำ", "Utility — พองฟูขึ้นทันทีเมื่อตกใจ ทำให้ดูตัวใหญ่ขึ้นเสี้ยววินาทีก่อนจะหันหลังวิ่งหนีจริง ขนหางสีขาวนวลไล่เข้มเป็นสีดำสนิทที่ปลายเป็นแพซ้อนหลายชั้นเรียงตัวสมมาตรรอบแกนหาง เคลื่อนไหวสะบัดตามจังหวะวิ่งจนดูราวกับเงาควันลอยตามอย่างสง่างาม"]
        ],
        limbs: [
            ["#1", "ขา", "ขาหน้า", "เรียวยาวเพรียวบาง เหมาะกับการวิ่งเร็วระยะสั้นถึงกลาง ไม่เหมาะกับการขุดหรือต่อสู้"],
            ["#2", "ขา", "ขาหลัง", "เรียวยาวกว่าขาหน้าอีกเล็กน้อย ให้แรงเร่งออกตัวเร็วเมื่อตกใจสุดขีด"]
        ],
        skin: [
            ["ลำตัว", "ขนฟูนุ่มสีขาวนวลเกือบบริสุทธิ์ทั่วตัว กลืนกับหมอกทุกช่วงเวลา"],
            ["ใต้ท้อง", "สีขาวนวลอ่อนกว่าลำตัวอีกเล็กน้อย เกือบเป็นสีครีม"],
            ["ขา", "ขนสั้นแน่นกว่าลำตัวเล็กน้อยเพื่อลดเสียงตอนวิ่ง"],
            ["หู / ปลายหาง", "ขนไล่เข้มจากขาวนวลเป็นสีดำสนิทตัดกันชัดเจน คือจุดสีเข้มเดียวที่พบบนตัวทั้งหมด"],
            ["หงอนขน", "ขนสีขาวนวลยาวฟูตั้งชันสองแฉกเหนือหู หนาแน่นและยาวกว่าขนส่วนอื่นของหัวอย่างเห็นได้ชัด แต่ยังคงเป็นสีขาวนวลเดียวกับลำตัว ไม่ใช่จุดสีเข้ม"]
        ],
        pattern: "ขาวนวลสม่ำเสมอทั่วตัวแทบไม่มีลาย ยกเว้นปลายหู ปลายหาง และแถบคอที่ไล่เข้มเป็นสีดำสนิท กับหงอนขนขาวฟูสองแฉกเหนือหูที่ตั้งเด่นเป็นเอกลักษณ์ กลืนกับหมอกจนแทบมองไม่เห็นแม้ในระยะใกล้ถ้าไม่ขยับตัว",
        pal: [["สีหลัก", "#f4f4f5"], ["เงา", "#3f3f46"], ["แสง", "#ffffff"], ["เสริม A", "#d4d4d8"], ["เสริม B", "#18181b"]],
        hl: ["#18181b", "ดำสนิท แต้มเฉพาะที่ปลายหู ปลายหาง และแถบคอ"],
        hlAt: "ดวงตาสีเทานวลที่ไม่เคยหยุดกวาดมองรอบตัว · ปลายจมูกที่กระตุกถี่ตอนจับกลิ่นเจ้าไร้เสียงได้ · หูสองข้างปลายดำเรียวยาวแหลมสมมาตรที่ตั้งเอนไปด้านหลังและหมุนอิสระคนละทิศทาง · หงอนขนขาวฟูสองแฉกตั้งเด่นเหนือหูทั้งสองข้าง · หางพวงฟูปลายดำที่พองขึ้นทันทีเมื่อตกใจ",
        mutationFull: {
            proTitle: "จมูกไวจับกลิ่นเจ้าไร้เสียง / แทบไม่มีคู่แข่งแย่งอาหาร",
            proDesc: "จมูกที่ไวต่อกลิ่นเครื่องหมายอาณาเขตของเจ้าไร้เสียงมากเป็นพิเศษ ทำให้มันตามรอยหาซากที่เหลือได้โดยแทบไม่มีคู่แข่งเลย เพราะสัตว์อื่นแทบทุกชนิดหลีกเลี่ยงกลิ่นนั้นด้วยสัญชาตญาณจนไม่กล้าเข้าใกล้เลยด้วยซ้ำ",
            conTitle: "ขี้อายจนเกินเหตุ / เสี่ยงอดอาหาร",
            conDesc: "ความระมัดระวังสุดขีดที่ทำให้มันปลอดภัยจากเจ้าไร้เสียงเอง ก็ทำให้มันพลาดโอกาสกินซากไปบ่อยครั้งเช่นกัน บางครั้งรอนานเกินไปจนซากถูกผู้ย่อยสลายรายอื่นแย่งไปหมดก่อน"
        },
        dangerDetail: {
            raw: "6 / 200", percent: 3, tier: "ไม่มีพิษภัย (Harmless)",
            factors: [],
            note: "ไม่มีอันตรายต่อสิ่งมีชีวิตใดเลย แม้แต่จะเข้าใกล้มันก็ยากมากเพราะความระวังภัยสูงเกินปกติ"
        },
        combat: [
            ["Scent Trailing", "ตามรอยกลิ่นเครื่องหมายอาณาเขตของเจ้าไร้เสียงจากระยะไกลมาก แยกความเข้มข้นของกลิ่นได้ว่าผ่านไปนานแค่ไหนก่อนตัดสินใจเข้าใกล้"],
            ["Startle Flee", "หนีทันทีที่ได้กลิ่นหรือเสียงแปลกปลอมแม้เพียงเล็กน้อย ไม่รอพิสูจน์ว่าอันตรายจริงหรือไม่"]
        ],
        abilities: [
            {
                name: "การประเมินความเสี่ยงด้วยหู-จมูกไวสัมผัส", type: "Sensory — การประเมินความเสี่ยง",
                desc: "หูสองข้างขนาดเท่ากันหมุนอิสระคนละทิศเพื่อกวาดหาทิศเสียงตลอดเวลา สลับข้างหุบแนบหัวเป็นจังหวะเพื่อลดพื้นที่ให้เห็นตัวยากขึ้นโดยไม่เสียสมดุลของรูปหน้า ส่วนจมูกที่ไวต่อกลิ่นเป็นพิเศษคอยตามรอยทิศที่เจ้าไร้เสียงจากไปและแยกความเข้มข้นของกลิ่นได้ว่าผ่านไปนานแค่ไหน — ไม่เข้าใกล้ซากจนกว่าจะมั่นใจว่าเจ้าของซากไปไกลจริงแล้วเท่านั้น",
                origin: "กินซากที่นักล่าที่อันตรายที่สุดในป่าทิ้งไว้ให้กำไรก็ต่อเมื่อไม่เคยคำนวณผิดพลาดว่ามันจากไปจริงหรือยัง ประสาทสัมผัสสองชุดที่ทำงานคนละหน้าที่พร้อมกันจึงไม่ต้องเดาเลยแม้แต่ครั้งเดียว"
            }
        ],
        notes: [
            ["", "<strong>หลักฐานที่มีชีวิต</strong>: นักวิจัยภาคสนามส่วนใหญ่ไม่เคยเห็นเจ้าไร้เสียงตัวเป็นๆ เลยสักครั้ง สิ่งเดียวที่ยืนยันได้ว่ามันยังมีชีวิตและล่าอยู่จริงในพื้นที่หนึ่งๆ คือการพบเจ้าเงาสีซีดหลบๆ ซ่อนๆ อยู่แถวนั้น"],
            ["", "<strong>ระยะปลอดภัยที่แท้จริง</strong>: เจ้าเงาสีซีดไม่เคยเข้าใกล้เจ้าไร้เสียงในระยะที่มองเห็นตัวได้เลยแม้แต่ครั้งเดียวตลอดการสังเกตที่บันทึกไว้ ระยะที่มันเลือกเข้าใกล้เศษซากเสมอคือหลังกลิ่นเตือนภัยจางลงต่ำกว่าระดับที่สัตว์ทั่วไปยังตรวจจับได้เท่านั้น"]
        ],
        prompt: "A small fennec-fox-sized alien scavenger standing 0.35 meters at the shoulder with a body 0.55 meters long, a slightly slimmer, elegantly symmetric, light lean frame poised low and alert, built entirely around staying unseen. Its head carries a pair of small, narrow, ceaselessly scanning eyes in a pale, misty grey, like fog given form, suited equally to daylight and darkness, a small, moist, perfectly ordinary black nose with no unusual outward shape, its exceptional power hidden entirely inside a scent organ far denser than any normal animal's, its nostrils twitching rapidly the instant it catches even a trace of Korrune's territorial warning musk before settling again once it is confident of the direction, its mouth small and sharp-toothed, built only for gnawing leftover scraps and never for tearing fresh meat, and a pair of long, slender, blade-like ears tapering to a sharp point, perfectly matched in size and shape, swept back at a sharp angle along the skull rather than standing upright, streamlining into its silhouette as it runs, each rotating independently through a wide arc to triangulate distant sound, one folding flatter against the skull to minimize its silhouette while the other stays angled outward, the two roles constantly swapping as it tracks a suspected noise without ever breaking the balanced symmetry of its face. A deeper scent organ behind its nose lets it separate that one warning musk from every other scent in the forest on pure reflex, and a pair of tall, plush white fur crests rising in matching symmetry just above each ear, not horns or any hard growth but simply fur grown thick and dense enough to hold its own elegant upright shape, quivering at the faintest low-frequency vibration before any sound is truly heard. Its body is a light, lean, agile frame with gracefully symmetric proportions throughout, built entirely for fast, sustained fleeing rather than fighting or hunting, with a moderately flexible spine for sudden direction changes when startled, a natural band of dark charcoal-to-black fur wrapped evenly around its neck like a collar that breaks up its silhouette in the fog, and a long, elegant, multi-plumed tail with its feathered layers fanning out in matching symmetry around the tail's axis, puffing up instantly the moment it is frightened, fading from white at the base to rich black at its feathered tips. It has 2 pairs of legs, evenly matched left to right: long, slender front legs built for short-to-medium bursts of speed, and long, slender hind legs, slightly longer still, that deliver the explosive first stride it needs the instant it senses danger. Its torso is covered in soft, plush, almost pure white fur, its underside a shade paler still and closer to cream, with shorter denser fur along its legs to muffle its footsteps, while the fur at its ear tips and tail deepens smoothly into solid black, and the paired crests above its ears stay the same plush near-white as its coat, standing out purely through their length and shape rather than color. Its coat is otherwise uniform and nearly patternless, fading into fog and diffuse light at almost any hour, broken only by its black ear tips, tail tip, neck band, and the twin upright white crests behind its ears. Its hyper-sensitive nose for Korrune's scent markers lets it scavenge leftovers with almost no competition, since nearly every other animal in the mistwood instinctively avoids that scent, at the cost of being so overcautious it frequently waits too long and loses the scraps to bolder decomposers instead. Its coloration is a harmonious pale near-white palette, deepened by near-black slate shadows in the recesses and lifted by pale silver-grey highlights along its flanks, with soft ash-grey tones worked through its haunches and a deep charcoal-black shade along its neck band, and a glowing deep-black highlight reserved only for its ear tips and its tail tip, with the paired fur crests behind its ears left in the same luminous near-white as the rest of its coat. It stands frozen at the edge of a misty clearing in the Verath mistwood, one ear angled fully toward an unseen sound while the other lies flatter against its skull, its small nose still twitching from a recent scent, tail beginning to puff, poised on the exact verge of bolting.\n\nPhotorealistic 3D creature render, cinematic film-VFX quality, standing full-body in its natural habitat environment, three-quarter view, shot with a telephoto lens at eye level, shallow depth of field with softly blurred background fog and undergrowth, volumetric god rays filtering through mist from above, soft naturalistic backlighting that makes the translucent ear rims and fine fur glow from within, crisp rim lighting along its silhouette, hyper-sharp micro-detail texturing on every hair and surface, subsurface scattering, physically-based rendering, muted natural color grading with deep shadows, 1:1 square composition, subject centered and fully visible from head to feet, no readable text."
});
