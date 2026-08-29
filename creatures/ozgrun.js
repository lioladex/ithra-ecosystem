/* ITH-212-118 — Ozgrun (ALIVE) */
creaturesData.push({
        id: "ITH-212-118", name: "Ozgrun", status: "ALIVE", era: "ยุคป่าหมอก (Mistwood Era)",
        imageKey: "OZGRUN", color: "#f97316",
        category: "สัตว์หุ้มเกราะแร่ธาตุกินราก (Mineral-plated root-forager, defensive roller)",
        habitat: "พื้นป่าและหนองบึง (Verath, The Dark Mire)",
        foodChain: "ผู้บริโภคปฐมภูมิภาคพื้น — เหยื่อสำคัญของฝูง Karvos (ต้องล่าเป็นทีมเท่านั้น)",
        danger: "22% (Low, but costly to hunt alone)", size: "ระดับ 4 — กลาง (เท่าหมูป่าตัวใหญ่)",
        height: "0.6 ม. ที่ไหล่ (ท่ายืดตัวเดิน) · ม้วนตัวเหลือเส้นผ่านศูนย์กลาง 0.9 ม.", weight: "85 กก.",
        desc: "สัตว์ขุดรากภาคพื้นที่หุ้มตัวด้วยแผ่นเกราะแร่ธาตุที่มันดูดซึมจากดินโคลนแล้วตกผลึกขึ้นเองบนผิวหนัง เมื่อถูกคุกคามจะม้วนตัวกลมสนิทจนแทบไม่มีจุดอ่อนให้กัด พร้อมยื่นปุ่มเรืองแสงลวงเป้าที่ปลายหางออกด้านนอกวงแทนตำแหน่งจุดอ่อนจริง ผู้ล่าเดี่ยวที่ไม่รู้ทันมักกัดผิดจุดไปโดนเกราะหนาเปล่าๆ ฝูง Karvos ตัวเดียวจึงแทบไม่มีทางเจาะเกราะได้เลย ต้องอาศัยตัวหนึ่งพลิกตัวมันหงายในขณะที่อีกตัวเจาะจุดอ่อนกลางวงที่แท้จริงพร้อมกัน จึงกลายเป็นเหยื่อที่สอนบทเรียนเรื่อง <em>การล่าเป็นทีมและการรู้ทันกลลวง</em> ให้ฝูงได้ชัดที่สุด",
        mutation: { pro: "เกราะแร่ธาตุตกผลึกเองได้ + หางลวงเป้า / ป้องกันตัวสองชั้น", con: "ม้วนตัวได้ก็พลิกกลับไม่ได้ด้วยตัวเอง / กลลวงหลอกได้แค่ผู้ล่าที่ไม่เคยรู้ทันมาก่อนเท่านั้น" },
        weapons: [ "เกราะแร่ธาตุตกผลึกหนา (Bio-mineral Plating)", "ม้วนตัวกลมสนิทจนไร้จุดกัด (Full Curl Defense)", "ไม่มีอาวุธโจมตี" ],
        social: "อยู่ตัวเดียวหรือคู่แม่ลูก ขุดโพรงตื้นตามรากไม้ใหญ่ ไม่รวมฝูงเพราะไม่มีเหตุผลต้องป้องกันตัวเป็นกลุ่ม — เกราะของแต่ละตัวเพียงพออยู่แล้วต่อนักล่าเดี่ยวทุกชนิดในป่า ยกเว้นฝูง Karvos ที่ล่าเป็นทีม",
        head: [
            ["ดวงตา", "ตาเล็กจิ๋ว 2 ดวง ซ่อนใต้เกราะ", "แทบไม่มีประโยชน์ในความมืดของพื้นป่า มองเห็นได้แค่แสง-มืดคร่าวๆ พึ่งพาจมูกและการสั่นสะเทือนของพื้นดินเป็นหลัก"],
            ["จมูก", "จมูกยาวโค้งแบบงวงสั้น", "ไวต่อกลิ่นรากไม้และแร่ธาตุใต้ดิน ขุดตามกลิ่นได้แม่นยำโดยไม่ต้องเห็น"],
            ["ปาก", "ปากไร้ฟันแบบจะงอยขุด", "ไม่มีฟันเลย ใช้ขอบปากแข็งคล้ายจะงอยขุดและบดรากไม้เหนียวๆ ให้ละเอียดก่อนกลืน"],
            ["หู", "รูหูเล็กปิดได้สนิท", "ปิดสนิทเวลาม้วนตัวป้องกันภัย กันดินโคลนและแมลงไม่ให้เข้าไปในโพรงหู"],
            ["EXTRA #1", "แผ่นเกราะแร่ธาตุตกผลึก (Crystalline Bio-plating)", "ผิวหนังดูดซึมแร่ธาตุจากดินโคลนแล้วตกผลึกเป็นแผ่นแข็งซ้อนกันเป็นชั้นๆ ทั่วหลังและข้างลำตัว แข็งพอจะกันเขี้ยว Karvos ตัวเดียวกัดไม่เข้าเลย"],
            ["EXTRA #2", "ผิวใต้ท้องเรืองแสงจาง — จุดอ่อนจริง (True Underbelly)", "ผิวบางเปลือยเรืองแสงส้มจางๆ อัตโนมัติเมื่อตกใจสุดขีดเหมือนหางล่อเป้าทุกประการ แต่ซ่อนอยู่กลางวงม้วนตัวเสมอ มองไม่เห็นเลยจากภายนอกจนกว่าจะถูกพลิกหงายจริงๆ"]
        ],
        body: [
            ["BODY FRAME", "โครงกลมหนาป้อม", "กระดูกสันหลังโค้งงอได้เต็มวงกลม ม้วนตัวให้หัวจรดหางได้สนิทภายในเสี้ยววินาที"],
            ["SPINE", "ข้อต่อสันหลังแบบบานพับซ้อน", "แต่ละข้อล็อกเข้าหากันแน่นเมื่อม้วนตัวเต็มที่ ทำให้แผ่นเกราะเรียงชิดกันไม่มีช่องว่างให้เขี้ยวสอดเข้า"],
            ["TAIL", "หางสั้นทู่มีปุ่มเรืองแสงลวงเป้า (Decoy Glow Node)", "Utility — ปลายหางมีปุ่มเนื้อเยื่อบางเรืองแสงส้มเลียนแบบผิวใต้ท้องจริงได้แนบเนียนมาก ยื่นออกด้านนอกวงม้วนตัวพอดีเวลาขดป้องกันตัว ล่อให้ผู้ล่าเดี่ยวที่ไม่รู้ทันกัดพลาดเป้าไปโดนเกราะหนาแทนจุดอ่อนจริงที่ซ่อนอยู่กลางวง"]
        ],
        limbs: [
            ["#1", "ขา", "ขาหน้า", "สั้นแต่แข็งแรงมาก ปลายเท้าแบนกว้างมีเล็บทู่สำหรับขุดดินโคลนหารากไม้ ไม่เหมาะกับการวิ่งหนีเลย"],
            ["#2", "ขา", "ขาหลัง", "สั้นป้อมเช่นกัน ใช้ดันตัวม้วนกลมหรือดันตัวคืบคลานช้าๆ เท่านั้น ความเร็วสูงสุดแทบเท่าการเดินของ Luvenn"]
        ],
        skin: [
            ["หลังและข้างลำตัว", "แผ่นเกราะแร่ธาตุสีส้มอิฐหนาซ้อนเป็นชั้น ผิวสัมผัสแข็งกร้านคล้ายหินภูเขาไฟมากกว่าเปลือกสัตว์"],
            ["ใต้ท้อง", "หนังบางเปลือยไม่มีเกราะเลย เรืองแสงส้มจางเมื่อตกใจ"],
            ["ขาและหัว", "หุ้มเกราะบางกว่าลำตัวแต่ยังหนากว่าใต้ท้องมาก"]
        ],
        pattern: "แผ่นเกราะแตกลายเป็นแผ่นไม่สม่ำเสมอคล้ายดินแตกระแหงหรือหินภูเขาไฟเย็นตัว สีส้มอิฐเข้มสลับน้ำตาลไหม้ กลืนกับโคลนแห้งบนพื้นป่าได้ดี",
        pal: [["สีหลัก", "#9a3412"], ["เงา", "#431407"], ["แสง", "#f97316"], ["เสริม A", "#78716c"], ["เสริม B", "#ea580c"]],
        hl: ["#fb923c", "ส้มเรืองแสงใต้ท้อง (Panic Glow)"],
        hlAt: "ปุ่มลวงเป้าเรืองแสงส้มที่ปลายหางเวลาขดตัว · รอยแตกของแผ่นเกราะที่มันวาวจางเมื่อกระทบแสง",
        mutationFull: {
            proTitle: "เกราะแร่ธาตุตกผลึกเอง + หางล่อเป้า / ป้องกันสองชั้น",
            proDesc: "ดูดซึมแร่ธาตุจากดินโคลนที่กินเข้าไปพร้อมรากไม้แล้วตกผลึกเป็นแผ่นเกราะแข็งขึ้นเองทั่วตัว เมื่อม้วนตัวเต็มที่แทบไม่มีนักล่าเดี่ยวตัวใดในป่าหมอกเจาะเข้าได้เลย ยิ่งไปกว่านั้นปุ่มเรืองแสงลวงเป้าที่ปลายหางยังหลอกให้ผู้ล่าที่ไม่รู้ทันกัดผิดจุดไปโดนเกราะหนาแทนจุดอ่อนจริง — เป็นการป้องกันตัวสองชั้นที่ซับซ้อนที่สุดในบรรดาเหยื่อภาคพื้นทั้งหมด",
            conTitle: "พลิกกลับตัวเองไม่ได้ / กลลวงใช้ได้แค่ครั้งแรก",
            conDesc: "กล้ามเนื้อที่ใช้ม้วนตัวไม่มีแรงมากพอจะพลิกกลับคืนท่ายืนได้เองหากถูกพลิกหงาย และปุ่มลวงเป้าก็หลอกได้แค่ผู้ล่าที่ไม่เคยรู้ทันมาก่อนเท่านั้น — ฝูง Karvos ที่ล่ามันซ้ำหลายรุ่นเรียนรู้แล้วว่าปุ่มที่หางเป็นของปลอม จึงมุ่งเจาะกลางวงม้วนตัวโดยตรงแทนเสมอ"
        },
        dangerDetail: {
            raw: "44 / 200", percent: 22, tier: "อันตรายต่ำแต่ล่ายาก (Low Risk, High Effort)",
            factors: ["เกราะแร่ธาตุ (+8 ต่อผู้ล่า ไม่ใช่ต่อเหยื่อ)", "หางล่อเป้า (+4 เชิงกลลวง)", "ไม่มีอาวุธโจมตี (+0)"],
            note: "ตัวมันเองไม่มีอันตรายต่อผู้ล่าเลย แต่เกราะที่แข็งเกินไปบวกกับกลลวงที่หางทำให้กลายเป็นเหยื่อที่ 'แพงที่สุด' ในแง่พลังงานที่ต้องเสียไปเพื่อล่า — นักล่าเดี่ยวส่วนใหญ่เลือกจะเดินผ่านไปหาเหยื่อที่ง่ายกว่าแทน"
        },
        combat: [
            ["Full Curl Defense", "ม้วนตัวกลมสนิทภายในเสี้ยววินาทีเมื่อรับรู้ภัย ข้อต่อสันหลังล็อกเข้าหากันจนแผ่นเกราะเรียงชิดไม่มีช่องว่างเลย ปล่อยให้ปุ่มลวงเป้าที่หางยื่นออกด้านนอกวงแทนจุดอ่อนจริง"],
            ["Pack Flip Vulnerability", "จุดอ่อนแท้จริงต้องถูกพลิกหงายโดยแรงภายนอกเท่านั้นถึงจะเผยออกมา ฝูง Karvos ที่รู้ทันกลลวงแล้วใช้ตัวหนึ่งงัดพลิกพร้อมอีกตัวเจาะกลางวงม้วนตัวทันทีที่พลิกได้ ไม่สนใจปุ่มเรืองแสงที่หางเลย"]
        ],
        notes: [
            ["", "<strong>บทเรียนของฝูง</strong>: ต่างจาก Luvenn หรือ Vashli ที่ล่าได้ด้วยตัวเดียว Ozgrun คือเหยื่อชนิดเดียวในป่าหมอกที่ฝูง Karvos ต้อง 'วางแผน' ล่วงหน้าจริงๆ ก่อนลงมือ — แบ่งหน้าที่พลิกตัวกับเจาะจุดอ่อนอย่างชัดเจน ทั้งยังต้องรู้ทันกลลวงที่หางด้วย เป็นภาพการทำงานเป็นทีมและการเรียนรู้ข้ามรุ่นที่ต่างจากการไล่ต้อนเหยื่อวิ่งแบบปกติโดยสิ้นเชิง"],
            ["", "<strong>ผู้พรวนดินแห่งหนองบึง</strong>: การขุดหารากไม้ตลอดเวลาของมันช่วยเติมอากาศให้ดินโคลนแน่นๆ ของ Zone 3 ทางอ้อม ทำให้รากไม้ยักษ์เหนือมันเติบโตได้ดีขึ้น"]
        ],
        prompt: "A medium-sized alien armored root-forager standing 0.6 meters at the shoulder and capable of curling into a tight 0.9-meter sphere, resembling a cross between an armadillo and a boulder more than any single earth animal, its whole design built around one purpose: becoming an impenetrable ball of rock. Its head bears a pair of tiny eyes nearly useless in the darkness of the forest floor, hidden beneath its plating and sensing only rough light and dark, a short curved trunk-like nose extremely sensitive to the smell of roots and minerals underground, a toothless beak-like mouth built for grinding tough root fiber, and small ears that seal completely shut when it curls up to keep mud and insects out. Crystalline bio-mineral plates grown from minerals absorbed straight from the mud layer its back and flanks in overlapping armored segments, hard enough that a single Karvos bite cannot penetrate them at all, while its true weak point — a bare, unarmored underbelly that glows faintly orange under extreme panic — stays hidden deep inside its curled form, completely out of sight from outside. Its body is a thick, rounded, powerfully built frame with a spine of stacked hinge-like vertebrae that lock rigidly together when fully curled, closing every gap between armor plates so no fang can find purchase, except for one deliberate gap. Its short blunt tail ends in a small fleshy decoy node that glows with the exact same faint orange as its true underbelly, positioned to poke out from the outside of its curled form as a false target, tricking an inexperienced lone predator into wasting a bite on solid armor while the real weak point stays sealed at the center. It has two pairs of short, powerful legs ending in broad flat digging claws built for tearing through mud after roots, utterly unsuited to running, giving it a top speed barely faster than a leisurely walk. Its back and flanks are covered in thick brick-orange mineral plates cracked into an irregular mosaic like cooled volcanic rock, while its hidden underbelly and its tail's decoy node are both bare thin skin that glows dull orange under panic, and its legs and head carry a thinner but still substantial layer of the same crystalline plating. Its self-grown mineral armor and decoy tail node make it a two-layered defense nearly invulnerable to any single naive predator in the mistwood, at the total cost of being unable to right itself once flipped, and of a trick that only fools a predator that has never learned to tell the false glow from the real one — the layered vulnerability that makes it prey only an experienced, coordinated pack can exploit. Its coloration is a harmonious brick-orange and burnt-umber palette, deepened by near-black shadows in the deep cracks between plates and lifted by warm amber highlights along the raised plate edges, with cool grey-brown worked into the leg armor and a soft orange glow reserved only for its hidden true underbelly and its tail's decoy node. It is curled defensively into a tight armored ball on the muddy floor of the Verath dark mire, half-sunk in dark wet soil among tangled giant roots, faint bioluminescent moss glowing nearby in the gloom.\n\nPhotorealistic 3D creature render, cinematic film-VFX quality, full-body in its natural habitat environment, three-quarter view, shot with a telephoto lens at eye level, shallow depth of field with softly blurred background roots and mud, moody low ambient light with faint bioluminescent accents, hyper-detailed micro-texturing on every plate and surface, subsurface scattering, physically-based rendering, muted dark natural color grading, 1:1 square composition, subject centered and fully visible, no readable text."
});
