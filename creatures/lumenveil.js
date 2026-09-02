/* ITH-213-064 — Lumenveil (ALIVE) */
creaturesData.push({
        id: "ITH-213-064", name: "Lumenveil", nickname: "แผ่นเรืองทอง", status: "ALIVE", era: "ยุคป่าหมอก (Mistwood Era)",
        imageKey: "LUMENVEIL", color: "#86efac",
        category: "ผู้ผลิต (สังเคราะห์แสง) · สิ่งมีชีวิตกินแสงเกาะกิ่งไม้กึ่งเคลื่อนที่ (Semi-sessile light-absorbing canopy organism)",
        habitat: "รอยต่อชั้นเรือนยอดกับชั้นหมอกกลาง (Verath, Canopy-Mist Boundary)",
        foodChain: "ผู้ผลิตปฐมภูมิลอยตัวชั้นเรือนยอด — แหล่งอาหารหลักที่แท้จริงของร่างสี่ขา",
        danger: "0% (Harmless, non-motile)", size: "ระดับ 2 — เล็กต่อผืน (ผืนหนึ่งกว้างเฉลี่ย 1.5 ม.)",
        height: "หนา 5-15 ซม. · ผืนหนึ่งแผ่กว้างได้ถึง 2 ม.", weight: "6-10 กก. ต่อผืน",
        desc: "สิ่งมีชีวิตห้อยคลุมกิ่งไม้ยักษ์เป็นผืนเยื่อหนาชื้นตรงรอยต่อระหว่างเรือนยอดกับชั้นหมอกกลาง จุดที่แสงจาก Ashvel กระจายผ่านหมอกลงมาพอดี ผิวโปร่งแสงเผยเห็นร่างแหท่อลำเลียงของเหลวสีทองเต้นเป็นจังหวะช้าๆ อยู่ใต้ผิว คล้ายเห็นเส้นเลือดเต้นผ่านผิวหนังบาง ไม่มีราก ไม่ล่าเหยื่อ ดำรงชีวิตด้วยการดูดซับแสงและความชื้นในอากาศผ่านกลุ่มรูหายใจที่คอยหุบ-ขยายทั่วผืนอยู่ตลอดเวลา เคลื่อนที่ได้ช้ามากด้วยระบบยึดเกาะที่ค่อยๆ คืบคลานหาจุดรับแสงที่ดีกว่าเป็นสัปดาห์ๆ คือแหล่งอาหารหลักที่แท้จริงที่ร่างสี่ขาปีนขึ้นไปแทะกินเมื่อแสงถึงพื้นป่าไม่พอ",
        mutation: { pro: "ดำรงชีวิตด้วยแสงและความชื้นล้วนๆ / ไม่ต้องล่าหรือแข่งขันกับใครเลย", con: "เคลื่อนที่ได้ช้ามากจนแทบนับว่านิ่ง / ถูกกินเป็นฝูงจากร่างสี่ขาได้ง่ายโดยไม่มีทางหนีเลยแม้แต่น้อย" },
        weapons: [ "ไม่มีอาวุธ", "ไม่มีการป้องกันตัวใดๆ", "ชดเชยด้วยอัตราการงอกใหม่ที่เร็วมากหลังถูกแทะกิน" ],
        social: "ไม่มีปฏิสัมพันธ์ทางสังคม ผืนเดียวสามารถแตกหน่อเป็นผืนใหม่ได้เองเมื่อโตเต็มที่ กระจายพันธุ์แบบไม่มีเพศ ผืนใกล้กันอาจเชื่อมรวมเป็นผืนเดียวกันได้เมื่อโตชนกัน",
        head: [
            ["ดวงตา", "ไม่มี", "ไม่มีอวัยวะรับภาพใดๆ รับรู้แสงผ่านเซลล์รับแสงกระจายทั่วผิวแทน"],
            ["จมูก", "ไม่มี", "รับรู้ความชื้นในอากาศผ่านผิวเยื่อบางทั่วผืนโดยตรง"],
            ["ปาก", "ไม่มี", "ไม่มีระบบย่อยอาหารแบบสัตว์ ดูดซับพลังงานจากแสงและสารอาหารจากความชื้น/ไอหมอกผ่านผิวทั้งผืน"],
            ["หู", "ไม่มี", "ไม่รับรู้เสียงหรือแรงสั่นสะเทือนใดๆ ไม่มีปฏิกิริยาต่อสิ่งกระตุ้นภายนอกเลยนอกจากแสงและการถูกแทะกิน"],
            ["EXTRA #1", "กลุ่มรูหายใจหุบ-ขยาย (Pulsing Stoma Clusters)", "รูหายใจขนาดจิ๋วรวมกลุ่มกันเป็นหย่อมๆ ไม่สม่ำเสมอทั่วผืน หุบ-ขยายเป็นจังหวะช้าๆ ตลอดเวลาเพื่อแลกเปลี่ยนความชื้นในอากาศ เห็นเป็นการเคลื่อนไหวแผ่วๆ ทั่วผืนแม้ตอนที่เหลือทั้งตัวนิ่งสนิท"],
            ["EXTRA #2", "จุดยึดเกาะแบบราก (Holdfast Nodes)", "ปุ่มยึดคล้ายรากกระจายด้านล่างผืน ปล่อยยึดจุดเดิมและงอกยึดจุดใหม่สลับกันช้าๆ เป็นวิธีเดียวที่มันมี 'เคลื่อนที่' ได้"]
        ],
        body: [
            ["BODY FRAME", "ผืนเยื่อหนาไม่สม่ำเสมอ ไม่มีโครงกระดูก", "เนื้อเยื่อคล้ายเยื่อพังผืดหนาอุ้มของเหลวได้สูง ผิวหนาไม่เท่ากันทั่วผืน นูนเป็นถุงเก็บพลังงานสะสมกระจายไม่สม่ำเสมอ ไม่ใช่ผืนเรียบแบน — รูปทรงบิดเบี้ยวเปลี่ยนไปตามกิ่งไม้และอายุของแต่ละหย่อม"],
            ["SPINE", "ไม่มีแกนกระดูก แต่มีร่างแหท่อลำเลียง", "ท่อลำเลียงของเหลวสีทองแตกแขนงคล้ายเส้นเลือดฝอยทั่วผืน มองเห็นเต้นเป็นจังหวะช้าๆ ผ่านผิวโปร่งแสงได้ด้วยตาเปล่า"],
            ["TAIL", "ไม่มี", "ไม่มีส่วนหางหรือระยางค์ยื่นใดๆ นอกจากขอบผืนที่ห้อยพลิ้วไม่เท่ากันลงมาตามแรงโน้มถ่วง"]
        ],
        limbs: [
            ["#1", "จุดยึดเกาะ", "ด้านล่างผืน", "ปุ่มยึดเกาะขนาดเล็กหลายสิบจุดกระจายด้านล่างผืน ทำหน้าที่แทนขาหรือรากในการเกาะติดกิ่งไม้และคืบคลานอย่างช้าๆ"]
        ],
        skin: [
            ["ผืนด้านบน (รับแสง)", "เยื่อโปร่งแสงหนาไม่เท่ากันสีเขียวอมทอง เห็นร่างแหท่อลำเลียงเต้นจางๆ อยู่ใต้ผิว ผิวสัมผัสชื้นลื่นแบบเยื่อพังผืด ไม่ใช่ขนหรือมอส"],
            ["ผืนด้านล่าง (ยึดเกาะ)", "สีซีดกว่า มีปุ่มยึดเกาะกระจายทั่ว เนื้อสัมผัสเหนียวหนืดกว่าด้านบนเล็กน้อย"],
            ["ขอบผืน", "บางที่สุด โปร่งแสงจนเกือบมองทะลุเห็นเส้นเลือดข้างใน มักถูกแทะกินก่อนส่วนอื่นเพราะบางที่สุด"]
        ],
        pattern: "ผิวโปร่งแสงไม่สม่ำเสมอ เผยร่างแหท่อลำเลียงสีทองแตกแขนงเป็นเส้นเต้นจางๆ ทั่วผืน แทรกด้วยถุงเก็บพลังงานนูนขึ้นเป็นหย่อมๆ กระจายไม่สม่ำเสมอ ไม่ใช่ลายผิวเรียบสม่ำเสมอ",
        pal: [["สีหลัก", "#4d7c0f"], ["เงา", "#1a2e05"], ["แสง", "#fde68a"], ["เสริม A", "#166534"], ["เสริม B", "#ca8a04"]],
        hl: ["#fde68a", "ทองอ่อนเต้นจังหวะช้าๆ ตามท่อลำเลียงใต้ผิว"],
        hlAt: "ร่างแหท่อลำเลียงสีทองที่เต้นเป็นจังหวะเห็นได้ผ่านผิวโปร่งแสง · รูหายใจที่หุบ-ขยายทั่วผืนตลอดเวลา · รอยแทะที่ขอบผืนเผยเนื้อเยื่อชั้นในสีเข้มกว่า",
        mutationFull: {
            proTitle: "ดำรงชีวิตด้วยแสงล้วนๆ / ไม่มีคู่แข่งแย่งอาหาร",
            proDesc: "ไม่ต้องล่า ไม่ต้องแข่งขันกับสิ่งมีชีวิตใดเพื่ออาหาร อาศัยแค่แสงจาก Ashvel กับความชื้นในอากาศที่มีเหลือเฟือในป่าหมอกก็ดำรงชีวิตได้ตลอดไป เป็นวิธีดำรงชีวิตที่ประหยัดพลังงานและปลอดภัยที่สุดในระบบนิเวศทั้งหมด",
            conTitle: "เคลื่อนที่แทบไม่ได้ / ไร้การป้องกันตัวโดยสิ้นเชิง",
            conDesc: "คืบคลานได้ช้าเพียงไม่กี่มิลลิเมตรต่อสัปดาห์ผ่านจุดยึดเกาะเท่านั้น ไม่มีทางหนีหรือป้องกันตัวจากสัตว์กินพืชที่ปีนขึ้นมาแทะเลยแม้แต่น้อย ต้องพึ่งอัตราการงอกใหม่ที่รวดเร็วเป็นกลไกเดียวในการอยู่รอดของเผ่าพันธุ์"
        },
        dangerDetail: {
            raw: "0 / 200", percent: 0, tier: "ไม่มีพิษภัยโดยสิ้นเชิง (Completely Harmless)",
            factors: [],
            note: "ไม่มีกลไกป้องกันตัวใดๆ เลยแม้แต่อย่างเดียว ความอยู่รอดของสายพันธุ์ขึ้นอยู่กับการงอกใหม่เร็วกว่าอัตราที่ถูกแทะกินเท่านั้น"
        },
        combat: [],
        abilities: [
            {
                name: "การเติบโตไล่ตามแสง", type: "Sensory — การรับรู้ทิศทางแสง",
                desc: "ผืนที่อยู่ใกล้แสงแรงที่สุดพองตัวและอวบน้ำกว่า ส่วนขอบที่อยู่ในร่มบางจนเกือบโปร่งใส เมื่อต้นไม้เจ้าบ้านโตสูงขึ้นเรื่อยๆ รอยแผลเป็นจางๆ ไล่ระดับขึ้นตามลำต้นคือร่องรอยที่มันค่อยๆ 'ไต่' ตามแสงขึ้นไปทีละหย่อมตลอดหลายปี",
                origin: "ไม่มีทางเคลื่อนที่แบบสัตว์เลย การเคลื่อนไหวทั้งหมดของมันจึงเกิดขึ้นข้ามชั่วอายุของเนื้อเยื่อตัวเอง ไม่ใช่ข้ามช่วงชีวิตหนึ่งเดียว — รอยแผลบนลำต้นคือประวัติการอพยพที่บีบอัดอยู่ในสิ่งมีชีวิตเดียว"
            }
        ],
        notes: [
            ["", "<strong>ปริศนาที่เพิ่งไขได้</strong>: บันทึกเดิมของร่างสี่ขาเคยระบุเพียงว่ามัน 'กินแสงและความชื้น' โดยไม่มีแหล่งอาหารที่ชัดเจน — แผ่นเรืองทองคือคำตอบ: มันคือพืชที่ร่างสี่ขาปีนขึ้นเรือนยอดต่ำเพื่อแทะกินเวลาแสงที่พื้นป่าไม่พอ อธิบายได้ว่าทำไมร่างสี่ขาถึงยังมีแผงรับแสงที่วิวัฒนาการมาสำหรับ 'สังเคราะห์แสงเสริม' ได้พอดี ไม่ใช่กลไกเดียวที่เลี้ยงร่างกายทั้งหมด"],
            ["", "<strong>ผู้เชื่อมสองชั้นป่า</strong>: ผืนแผ่นเรืองทองที่แผ่ขยายจนเชื่อมกันเป็นสะพานธรรมชาติระหว่างกิ่งไม้ยักษ์ บางครั้งกลายเป็นทางเดินให้เจ้าตาโตข้ามกิ่งโดยไม่ต้องกระโดดเสี่ยงตกเลย"]
        ],
        prompt: "A non-motile, deeply alien light-absorbing organism draped over a giant tree branch as an irregular, uneven membranous sheet roughly 1.5 to 2 meters across and 5 to 15 centimeters thick, reading unmistakably as a living organ-like tissue rather than any plant, moss, lichen, or fungus — closer in feel to a sheet of translucent flesh or a stretched internal membrane than to any kind of soft foliage, hanging exactly at the boundary where the canopy meets the mid-level mist layer. It has no head, eyes, nose, mouth, or ears in any conventional sense: tiny photoreceptor cells scattered across its entire surface sense the direction of the strongest light, small clusters of stoma-like breathing pores dilate and contract in a slow visible rhythm across uneven patches of its surface even while the rest of it stays still, and small root-like holdfast nodes on its underside slowly release and regrow their grip, letting the whole sheet creep only a few millimeters toward better light over the course of weeks. Its body is a boneless, spineless membrane of uneven thickness that bulges unevenly into blister-like energy-storage sacs scattered irregularly across its surface rather than lying flat, its translucent tissue revealing a branching network of golden fluid-filled vessels beneath the surface, visibly pulsing in a slow rhythm like veins seen through thin skin; it has no tail and no limbs beyond its scattered holdfast nodes, and no means of active movement whatsoever. Its upper surface is a wet-looking, faintly glistening translucent membrane in mottled deep green and gold, thickest and most swollen with stored energy in random bulging patches, its underside paler and studded with small gripping nodes and a slightly tackier, mucus-like texture, and its outer edges are its thinnest and most transparent tissue, almost see-through, showing the golden vessel network directly and bearing visible torn, regrowing patches where herbivores have grazed on it. Its effortless, sunlight-and-humidity-only metabolism means it never has to hunt or compete with anything for food, at the total cost of being essentially defenseless and nearly immobile, relying entirely on regrowing faster than it is eaten by canopy herbivores that climb up to graze on it. Its coloration is an uneven, mottled deep green and gold, darkest and most saturated in its swollen storage blisters, and almost colorless translucent gold at its thinnest, most torn, most transparent edges, with the pulsing golden vessel network visible as a bright accent threading beneath the surface throughout. An irregular, organ-like translucent sheet of it drapes unevenly over a massive moss-covered branch high in the misty canopy of the Verath mistwood, its surface glistening faintly wet, golden vessels visibly pulsing beneath the skin, uneven storage blisters catching the light differently across its torn and regrowing edges.\n\nPhotorealistic 3D organism render, cinematic film-VFX quality, full sheet visible draped over its branch in natural habitat, three-quarter view, shot with a telephoto lens at eye level, shallow depth of field with softly blurred background canopy and mist, volumetric god rays filtering through fog, soft naturalistic backlighting that makes the translucent tissue and pulsing vessels glow from within, hyper-detailed wet micro-texturing, strong subsurface scattering revealing internal structure, physically-based rendering, warm natural color grading, 1:1 square composition, subject centered and fully visible, no readable text."
});
