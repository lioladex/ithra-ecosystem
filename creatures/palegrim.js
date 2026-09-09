/* ITH-215-847 — Palegrim (ALIVE) */
creaturesData.push({
        id: "ITH-215-847", name: "Palegrim", nickname: "เจ้าเงาสีซีด", status: "ALIVE", era: "ยุคป่าหมอก (Mistwood Era)",
        imageKey: "PALEGRIM", color: "#e4e4e7",
        category: "สัตว์กินซาก/ผู้ย่อยสลาย · สัตว์กินซากตามรอยเจ้าไร้เสียงระยะปลอดภัย (Long-range trailing scavenger)",
        habitat: "เคลื่อนย้ายตามอาณาเขตของเจ้าไร้เสียงทั่วทวีป Verath ไม่ยึดถิ่นตายตัว",
        foodChain: "ผู้ย่อยสลายฉวยโอกาส — กินเศษซากที่เจ้าไร้เสียงทิ้งไว้เท่านั้น ไม่ล่าเองเลย",
        danger: "3% (Harmless, extremely skittish)", size: "ระดับ 2 — เล็ก (เท่าสุนัขจิ้งจอกตัวเล็ก)",
        height: "0.35 ม. ที่ไหล่ · ลำตัวยาว 0.55 ม.", weight: "7 กก.",
        desc: "สัตว์กินซากขี้อายที่สุดในป่าหมอก ไม่เคยล่าเหยื่อเองเลยแม้แต่ครั้งเดียว ดำรงชีวิตด้วยการดมกลิ่นเครื่องหมายอาณาเขตของเจ้าไร้เสียงแล้วตามรอยไปอย่างระมัดระวังสุดขีด รอจนมั่นใจว่าเจ้าไร้เสียงจากไปไกลจริงๆ ก่อนจะเข้าไปแทะเศษซากที่เหลือ การมีอยู่ของมันคือหลักฐานทางอ้อมที่ชัดเจนที่สุดว่าเจ้าไร้เสียงยังมีชีวิตและล่าอยู่จริงในป่าหมอก แม้แทบไม่มีใครเคยเห็นตัวเจ้าไร้เสียงตรงๆ เลยก็ตาม ตัวมันเองก็งดงามอย่างประหลาด — ขนสีขาวนวลฟูราวกับหมอกจับตัวเป็นก้อน แซมด้วยปลายขนสีดำสนิทตามหู หาง และปุ่มเขาอ่อนคล้ายกิ่งไม้บนหัว ราวกับเป็นภาพลวงตาที่ป่าหมอกสร้างขึ้นมากกว่าจะเป็นสัตว์จริง",
        mutation: { pro: "จมูกไวจับกลิ่นเตือนภัยของเจ้าไร้เสียงได้จากระยะไกลมาก / แทบไม่มีคู่แข่งแย่งซากเพราะไม่มีใครกล้าเข้าใกล้เขตของเจ้าไร้เสียง", con: "ขี้อายจนเกินเหตุ / หนีทิ้งซากทันทีที่ได้กลิ่นแปลกปลอมแม้เพียงน้อยนิด บางครั้งอดอาหารเพราะไม่กล้าเข้าใกล้พอ" },
        weapons: [ "ไม่มีอาวุธ", "หลบหนีเร็วมากเป็นการป้องกันตัวหลัก", "ประสาทสัมผัสไวจนแทบไม่เคยถูกจับได้คาที่" ],
        social: "อยู่ตัวเดียวเกือบตลอดชีวิต หลีกเลี่ยงสัตว์ชนิดอื่นทุกชนิดไม่ใช่แค่เจ้าไร้เสียงเท่านั้น พบเจอกันเองได้แค่ช่วงผสมพันธุ์สั้นๆ ปีละครั้ง",
        head: [
            ["ดวงตา", "ตาเล็กเรียวรี สองสีต่างกัน (Mismatched Twin-Hue Eyes)", "ข้างหนึ่งสีเหลืองอำพัน อีกข้างสีฟ้าหมอกซีด กวาดมองรอบตัวแทบไม่หยุดนิ่งแม้ขณะกิน มองเห็นได้ดีทั้งกลางวันและกลางคืน สีตาที่ต่างกันทำให้ผู้พบเห็นรู้สึกราวกับถูกจ้องมองจากสองมุมพร้อมกัน"],
            ["จมูก", "จมูกแยกแฉกคล้ายกลีบบานได้ (Splayed Chemosensory Nose)", "ปลายจมูกไม่ใช่รูกลมแบบสัตว์ทั่วไป แต่แยกเป็นกลีบเนื้อเล็กๆ หลายแฉกรอบปลายจมูกที่บานออกได้เมื่อสูดดม เพิ่มพื้นที่ผิวรับกลิ่นให้จับกลิ่นเครื่องหมายอาณาเขตของเจ้าไร้เสียงได้จากระยะไกลกว่าสัตว์อื่นเกือบทุกชนิด แยกความเข้มข้นของกลิ่นได้ละเอียดพอจะบอกได้ว่าเจ้าไร้เสียงผ่านไปแล้วนานแค่ไหน หุบแฉกกลับแนบสนิทเมื่อไม่ได้ใช้งาน"],
            ["ปาก", "ปากเล็กแหลม", "ฟันเล็กเหมาะกับการแทะเศษซากที่เหลือ ไม่แข็งแรงพอจะฉีกเนื้อสดได้เลย"],
            ["หู", "หูสองข้างไม่เท่ากัน ปลายดำสนิท (Asymmetric Black-tipped Ears)", "หูข้างหนึ่งใหญ่กว่าอีกข้างอย่างเห็นได้ชัดและหมุนได้ไกลกว่า ใช้จับทิศทางเสียงแบบสามเหลี่ยมได้แม่นยำกว่าหูคู่ที่เท่ากัน ปลายหูทั้งสองข้างมีขนสีดำสนิทตัดกับขนขาวนวลทั่วตัวอย่างคมชัด ส่วนหูข้างเล็กมักหมอบแนบหัวไว้เพื่อลดพื้นที่หน้าตัดให้เห็นตัวยากขึ้น สลับข้างที่ตั้งฟังกับข้างที่หมอบไปเรื่อยๆ ตามทิศเสียงที่สงสัย"],
            ["EXTRA #1", "ต่อมรับกลิ่นไวพิเศษ (Hyper-sensitive Scent Organ)", "แยกแยะกลิ่นเตือนภัยเฉพาะตัวของเจ้าไร้เสียงออกจากกลิ่นอื่นทั้งหมดในป่าได้ทันที เป็นสัญชาตญาณที่ฝังลึกที่สุดของมัน — กลีบจมูกจะบานออกเต็มที่โดยอัตโนมัติทันทีที่จับกลิ่นนั้นได้ ก่อนหุบกลับอย่างรวดเร็วเมื่อมั่นใจในทิศทาง"],
            ["EXTRA #2", "ขนสีขาวนวลฟูกลืนหมอก (Pale Fog Coat)", "ขนฟูนุ่มสีขาวนวลเกือบบริสุทธิ์ทั่วตัว กลืนกับหมอกและแสงจางในทุกช่วงเวลา ไม่ใช่การพรางตัวเพื่อล่า แต่เพื่อหลบทุกสายตาให้มากที่สุด ทว่าปลายขนสีดำสนิทตามหู หาง และเขาอ่อน กลับทำให้มันดูโดดเด่นและลึกลับขึ้นในคราวเดียวกัน"],
            ["EXTRA #3", "ปุ่มเขาอ่อนคล้ายกิ่งไม้ (Twin Antler-like Horn Buds)", "ปุ่มเขาแข็งสีเข้มแตกกิ่งเล็กๆ สองปุ่มงอกอยู่เหนือหูทั้งสองข้าง ไม่ใช่เขาจริงที่ใช้สู้หรือขวิด เนื้อในกลวงเบา มีไว้สั่นสะเทือนตอบสนองต่อคลื่นเสียงความถี่ต่ำที่เจ้าไร้เสียงปล่อยออกมาก่อนเคลื่อนไหว ทำให้รู้ตัวก่อนได้ยินเสียงจริงเสียอีก"],
            ["EXTRA #4", "รอยแต้มรูปเพชรกลางหน้าผาก (Forehead Facet Mark)", "จุดสีเข้มเป็นประกายรูปคล้ายเพชรเม็ดเล็กอยู่กลางหน้าผากพอดีระหว่างดวงตาทั้งสองสี ผิวหนังบริเวณนั้นบางกว่าปกติเล็กน้อยและสะท้อนแสงจางๆ ยามชื้น เป็นจุดที่ทำให้ใบหน้าของมันดูราวกับมีเครื่องหมายบางอย่างสลักไว้ตั้งแต่เกิด"]
        ],
        body: [
            ["BODY FRAME", "โครงเพรียวเบาคล่องแคล่ว", "สร้างมาเพื่อวิ่งหนีเร็วและทนวิ่งทางไกลได้นาน ไม่ใช่เพื่อต่อสู้หรือล่าเลยแม้แต่น้อย"],
            ["SPINE", "สันหลังยืดหยุ่นปานกลาง", "รองรับการวิ่งเปลี่ยนทิศกะทันหันเมื่อตกใจ"],
            ["NECK", "แถบขนเข้มรอบคอ (Dark Collar Band)", "แถบขนสีเทาเข้มถึงดำพาดรอบลำคอคล้ายปลอกคอธรรมชาติ ตัดกับขนขาวนวลรอบข้างอย่างชัดเจน ไม่ใช่เครื่องประดับแต่เป็นรอยพรางที่ตัดเส้นเงาลำตัวให้ดูสั้นลงเมื่อมองจากระยะไกลในหมอก"],
            ["TAIL", "หางยาวพองฟูปลายดำ", "Utility — พองฟูขึ้นทันทีเมื่อตกใจ ทำให้ดูตัวใหญ่ขึ้นเสี้ยววินาทีก่อนจะหันหลังวิ่งหนีจริง ขนหางสีขาวนวลไล่เข้มเป็นสีดำสนิทที่ปลายเป็นแพซ้อนหลายชั้น เคลื่อนไหวสะบัดตามจังหวะวิ่งจนดูราวกับเงาควันลอยตาม"]
        ],
        limbs: [
            ["#1", "ขา", "ขาหน้า", "เรียวเบา เหมาะกับการวิ่งเร็วระยะสั้นถึงกลาง ไม่เหมาะกับการขุดหรือต่อสู้"],
            ["#2", "ขา", "ขาหลัง", "ยาวกว่าขาหน้าเล็กน้อย ให้แรงเร่งออกตัวเร็วเมื่อตกใจสุดขีด"]
        ],
        skin: [
            ["ลำตัว", "ขนฟูนุ่มสีขาวนวลเกือบบริสุทธิ์ทั่วตัว กลืนกับหมอกทุกช่วงเวลา"],
            ["ใต้ท้อง", "สีขาวนวลอ่อนกว่าลำตัวอีกเล็กน้อย เกือบเป็นสีครีม"],
            ["ขา", "ขนสั้นแน่นกว่าลำตัวเล็กน้อยเพื่อลดเสียงตอนวิ่ง"],
            ["หู / เขาอ่อน / ปลายหาง", "ขนไล่เข้มจากขาวนวลเป็นสีดำสนิทตัดกันชัดเจน คือจุดสีเข้มเดียวที่พบบนตัวทั้งหมด"]
        ],
        pattern: "ขาวนวลสม่ำเสมอทั่วตัวแทบไม่มีลาย ยกเว้นปลายหู ปุ่มเขาอ่อน ปลายหาง และแถบคอที่ไล่เข้มเป็นสีดำสนิท กับรอยแต้มรูปเพชรจางๆ กลางหน้าผาก กลืนกับหมอกจนแทบมองไม่เห็นแม้ในระยะใกล้ถ้าไม่ขยับตัว",
        pal: [["สีหลัก", "#f4f4f5"], ["เงา", "#3f3f46"], ["แสง", "#ffffff"], ["เสริม A", "#d4d4d8"], ["เสริม B", "#18181b"]],
        hl: ["#18181b", "ดำสนิท แต้มเฉพาะที่ปลายหู ปุ่มเขาอ่อน ปลายหาง แถบคอ และรอยแต้มรูปเพชรกลางหน้าผาก"],
        hlAt: "ดวงตาสองสี — อำพันกับฟ้าหมอกซีด — ที่ไม่เคยหยุดกวาดมองรอบตัว · กลีบจมูกที่บานออกเต็มที่ตอนจับกลิ่นเจ้าไร้เสียงได้ · หูสองข้างปลายดำที่ขนาดไม่เท่ากันหมุนคนละจังหวะ · ปุ่มเขาอ่อนคล้ายกิ่งไม้เหนือหูทั้งสองข้าง · รอยแต้มรูปเพชรกลางหน้าผาก · หางพวงฟูปลายดำที่พองขึ้นทันทีเมื่อตกใจ",
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
                name: "การประเมินความเสี่ยงด้วยหู-จมูกไม่สมมาตร", type: "Sensory — การประเมินความเสี่ยง",
                desc: "หูข้างใหญ่หมุนกวาดหาทิศเสียงตลอดเวลาขณะหูข้างเล็กหมอบแนบหัวลดพื้นที่ให้เห็นตัวยาก ส่วนกลีบจมูกที่บานได้ตามรอยทิศที่เจ้าไร้เสียงจากไปและแยกความเข้มข้นของกลิ่นได้ว่าผ่านไปนานแค่ไหน — ไม่เข้าใกล้ซากจนกว่าจะมั่นใจว่าเจ้าของซากไปไกลจริงแล้วเท่านั้น",
                origin: "กินซากที่นักล่าที่อันตรายที่สุดในป่าทิ้งไว้ให้กำไรก็ต่อเมื่อไม่เคยคำนวณผิดพลาดว่ามันจากไปจริงหรือยัง ประสาทสัมผัสสองชุดที่ทำงานคนละหน้าที่พร้อมกันจึงไม่ต้องเดาเลยแม้แต่ครั้งเดียว"
            }
        ],
        notes: [
            ["", "<strong>หลักฐานที่มีชีวิต</strong>: นักวิจัยภาคสนามส่วนใหญ่ไม่เคยเห็นเจ้าไร้เสียงตัวเป็นๆ เลยสักครั้ง สิ่งเดียวที่ยืนยันได้ว่ามันยังมีชีวิตและล่าอยู่จริงในพื้นที่หนึ่งๆ คือการพบเจ้าเงาสีซีดหลบๆ ซ่อนๆ อยู่แถวนั้น"],
            ["", "<strong>ระยะปลอดภัยที่แท้จริง</strong>: เจ้าเงาสีซีดไม่เคยเข้าใกล้เจ้าไร้เสียงในระยะที่มองเห็นตัวได้เลยแม้แต่ครั้งเดียวตลอดการสังเกตที่บันทึกไว้ ระยะที่มันเลือกเข้าใกล้เศษซากเสมอคือหลังกลิ่นเตือนภัยจางลงต่ำกว่าระดับที่สัตว์ทั่วไปยังตรวจจับได้เท่านั้น"]
        ],
        prompt: "A small fennec-fox-sized alien scavenger standing 0.35 meters at the shoulder with a body 0.55 meters long, a light lean frame poised low and alert, built entirely around staying unseen. Its head carries a pair of small, narrow, ceaselessly scanning eyes of two different colors, one warm amber and the other a pale misty blue, suited equally to daylight and darkness, its nose splitting not into an ordinary round nostril but into several small fleshy petal-like lobes that flare open wide to maximize scent-detecting surface area the instant it catches even a trace of Korrune's territorial warning musk, folding flat and sealed shut again once it is confident of the direction, its mouth small and sharp-toothed, built only for gnawing leftover scraps and never for tearing fresh meat, and two visibly asymmetric ears tipped in solid black fur, one noticeably larger and rotating through a wide arc to triangulate distant sound, the other kept low and flattened against the skull to minimize its silhouette, the two roles constantly swapping as it tracks a suspected noise. A deeper scent organ behind the nasal lobes lets it separate that one warning musk from every other scent in the forest on pure reflex, and a pair of small, smooth, dark antler-like horn buds branch gently upward just behind each ear, not weapons but hollow resonant growths that quiver at the faintest low-frequency vibration before any sound is truly heard, while a single small diamond-shaped dark facet mark sits centered on its forehead exactly between its two mismatched eyes, catching a faint glint of light. Its body is a light, lean, agile frame built entirely for fast, sustained fleeing rather than fighting or hunting, with a moderately flexible spine for sudden direction changes when startled, a natural band of dark charcoal-to-black fur wrapped around its neck like a collar that breaks up its silhouette in the fog, and a long, voluminous, multi-plumed tail that puffs up instantly the moment it is frightened, fading from white at the base to rich black at its feathered tips. It has 2 pairs of legs: slender front legs built for short-to-medium bursts of speed, and slightly longer hind legs that deliver the explosive first stride it needs the instant it senses danger. Its torso is covered in soft, plush, almost pure white fur, its underside a shade paler still and closer to cream, with shorter denser fur along its legs to muffle its footsteps, while the fur at its ear tips, antler-buds and tail deepens smoothly into solid black. Its coat is otherwise uniform and nearly patternless, fading into fog and diffuse light at almost any hour, broken only by its black ear tips, antler-buds, tail tip, neck band and the faint diamond mark on its brow. Its hyper-sensitive nose for Korrune's scent markers lets it scavenge leftovers with almost no competition, since nearly every other animal in the mistwood instinctively avoids that scent, at the cost of being so overcautious it frequently waits too long and loses the scraps to bolder decomposers instead. Its coloration is a harmonious pale near-white palette, deepened by near-black slate shadows in the recesses and lifted by pale silver-grey highlights along its flanks, with soft ash-grey tones worked through its haunches and a deep charcoal-black shade along its neck band, and a glowing deep-black highlight reserved only for its ear tips, its antler-buds, its tail tip and the diamond mark on its brow. It stands frozen at the edge of a misty clearing in the Verath mistwood, its larger ear rotated fully toward an unseen sound while the smaller one lies flat, its petal-like nose lobes still half-flared from a recent scent, tail beginning to puff, poised on the exact verge of bolting.\n\nPhotorealistic 3D creature render, cinematic film-VFX quality, standing full-body in its natural habitat environment, three-quarter view, shot with a telephoto lens at eye level, shallow depth of field with softly blurred background fog and undergrowth, volumetric god rays filtering through mist from above, soft naturalistic backlighting that makes the translucent ear rims and fine fur glow from within, hyper-detailed micro-texturing on every hair and surface, subsurface scattering, physically-based rendering, muted natural color grading with deep shadows, 1:1 square composition, subject centered and fully visible from head to feet, no readable text."
});
