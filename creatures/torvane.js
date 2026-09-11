/* ITH-221-081 — Torvane — ambient dread asset: เสียง 'หายใจ' ที่ไม่มีใครเคยเห็นตัว */
creaturesData.push({
        id: "ITH-221-081", name: "Torvane", nickname: "เจ้าลมหายใจใต้ราก", status: "ALIVE", era: "ยุคป่าหมอก (Mistwood Era)",
        imageKey: "TORVANE", color: "#ffb347",
        category: "ผู้กรองอาหาร · สิ่งมีชีวิตกรองอากาศฝังตัวในโพรงต้นไม้ยักษ์ (Wood-embedded air-filtering endosymbiont)",
        habitat: "Zone 6: The Hollow Roots — ฝังตัวลึกในโพรงแก่นไม้ของต้นไม้ยักษ์ที่สูงเกิน 150 ม. ทั่วทวีป Verath (มักพบเป็นกลุ่มในบางแนวป่าเท่านั้น ไม่ใช่ทุกต้น)",
        foodChain: "ผู้บริโภคปฐมภูมิที่ซ่อนเร้นที่สุดในป่าหมอก — กรองสปอร์/ละอองเรณูจากอากาศชื้นที่ไหลผ่านโพรงไม้ ไม่มีสัตว์ใดล่าได้เพราะไม่มีใครเข้าถึงตัวมันได้เลย",
        danger: "0% (Completely Harmless — but deeply unnerving)", size: "เส้นผ่านศูนย์กลางราว 1.1-1.4 ม. ต่อหนึ่งตัว (ฝังอยู่ในแก่นไม้ ไม่มีส่วนใดโผล่พ้นเปลือกไม้เลย)", height: "ไม่ปรากฏความสูงภายนอก — อยู่ลึกในเนื้อไม้ทั้งหมด", weight: "ประมาณ 90-120 กก. (หนาแน่นกว่าที่ขนาดควรจะเป็นมาก)",
        desc: "สิ่งมีชีวิตที่ไม่มีใครในบันทึกภาคสนามเคยเห็นตัวจริงเลยแม้แต่ครั้งเดียว เพราะมันฝังตัวอยู่ลึกในโพรงแก่นไม้ของต้นไม้ยักษ์ที่สูงเสียดฟ้าทะลุชั้นหมอกไปแล้ว อาศัยโพรงธรรมชาติภายในลำต้นเป็นทั้งบ้านและอวัยวะหายใจ ดูดอากาศชื้นที่มีสปอร์/ละอองเรณูลอยปนผ่านเข้าตัวเป็นจังหวะช้าสม่ำเสมอตลอดวัน จังหวะการดูด-พ่นอากาศนั้นสะท้อนก้องผ่านโพรงไม้กลวงทั้งต้นออกมาเป็นเสียงครางทุ้มต่ำยาวคล้ายลมหายใจของสิ่งมีชีวิตขนาดมหึมา ดังไปทั่วทั้งแนวป่าที่มันอาศัยอยู่ นักเดินป่าหลายรุ่นเล่าต่อกันมาว่า 'มีบางอย่างหายใจอยู่ในต้นไม้เก่า' ของบางแนวป่า โดยไม่มีใครเคยพิสูจน์ได้เลยว่าเสียงนั้นมาจากอะไรกันแน่ เพราะไม่มีวิธีเข้าไปดูข้างในโพรงไม้ที่ยังมีชีวิตอยู่ได้โดยไม่ทำลายต้นไม้ทั้งต้น",
        mutation: { pro: "ฝังตัวอยู่ในแก่นไม้ที่ยังมีชีวิตของต้นไม้ยักษ์ทำให้ปลอดภัยจากผู้ล่าทุกชนิดในป่าหมอกโดยสมบูรณ์ — ไม่มีบันทึกว่าสัตว์ใดเข้าถึงตัวมันได้เลยตลอดประวัติการสังเกต และอาหาร (สปอร์/ละอองเรณูในอากาศ) แทบไม่มีวันหมด", con: "ผูกชะตากับต้นไม้ต้นเดียวที่มันอาศัยอยู่โดยสมบูรณ์ — ไม่มีความสามารถย้ายที่อยู่ได้เลยแม้แต่น้อย หากต้นไม้นั้นตายหรือล้มลงด้วยเหตุใดก็ตาม มันจะตายไปพร้อมกันทันทีโดยไม่มีทางหนีรอด" },
        weapons: [ "ไม่มีอาวุธ", "ไม่มีกลไกป้องกันตัวใดๆ เพราะไม่เคยถูกคุกคามโดยตรงเลยตลอดประวัติการสังเกต", "ตำแหน่งที่ฝังลึกในแก่นไม้มีชีวิตคือการป้องกันตัวเดียวที่มันมี" ],
        social: "อยู่ตัวเดียวต่อหนึ่งต้นไม้เสมอ ไม่มีบันทึกว่าสองตัวเคยอาศัยต้นเดียวกัน จังหวะการ 'หายใจ' ของแต่ละตัวเป็นเอกเทศ ไม่ประสานกับตัวอื่นในแนวป่าเดียวกันแม้จะอยู่ใกล้กันมาก",
        head: [
            ["ดวงตา", "ไม่มี", "ไม่มีความจำเป็นต้องมองเห็นเลยเมื่ออาศัยอยู่ในความมืดสนิทตลอดชีวิต"],
            ["จมูก", "ไม่มีในความหมายทั่วไป", "รับรู้ความเข้มข้นของสปอร์/ละอองเรณูในกระแสอากาศที่ไหลผ่านโพรงไม้ผ่านเยื่อรับสารเคมีรอบผิวลำตัวแทน"],
            ["ปาก", "ช่องดูด-พ่นอากาศคู่หนึ่ง (Bellows Vents)", "ช่องเนื้อเยื่อยืดหดได้คู่หนึ่งที่ดูดอากาศชื้นเข้าและพ่นอากาศที่กรองแล้วออกเป็นจังหวะสม่ำเสมอ เป็นแหล่งกำเนิดเสียง 'หายใจ' ที่ก้องผ่านโพรงไม้ทั้งต้น"],
            ["หู", "ไม่มี", "รับรู้การเปลี่ยนแปลงความชื้น/ความดันอากาศในโพรงไม้แทนการได้ยินเสียงจริง ปรับจังหวะหายใจตามสภาพอากาศภายนอกทางอ้อมผ่านค่านี้"],
            ["EXTRA #1", "รากยึดกับเนื้อไม้เจ้าบ้าน (Host-Fused Anchor Roots)", "รากเนื้อเยื่อเล็กจำนวนมากแทรกซึมเข้าเนื้อไม้ของต้นไม้เจ้าบ้านโดยไม่ทำร้ายต้นไม้ — เป็นทั้งจุดยึดตัวและช่องแลกเปลี่ยนความชื้นกับต้นไม้"],
            ["EXTRA #2", "ผิวเรืองแสงอำพันจางที่ช่องหายใจ", "ผิวรอบช่องดูด-พ่นอากาศเรืองแสงสีอำพันจางมากเป็นจังหวะตามการหายใจ มองเห็นได้เฉพาะกรณีที่แก่นไม้บริเวณนั้นบางหรือแตกร้าวพอให้แสงลอดออกมาได้เท่านั้น ซึ่งเกิดขึ้นน้อยมาก"]
        ],
        body: [
            ["BODY FRAME", "ทรงกลมมนหนาแน่นคล้ายก้อนหินฝังในแก่นไม้", "ไม่มีโครงกระดูก ร่างกายทั้งหมดเป็นเนื้อเยื่อหนาแน่นทรงตัวอยู่ได้ด้วยแรงดันภายในและการยึดของโพรงไม้รอบตัว"],
            ["SPINE", "ไม่มี", "ไม่จำเป็นต้องมีโครงสร้างรองรับการเคลื่อนไหวเลยเพราะไม่เคยเคลื่อนที่ไปจากตำแหน่งเดิม"],
            ["TAIL", "ไม่มี", "Utility — ไม่มี"]
        ],
        limbs: [
            ["#1", "ไม่มีระยางค์เคลื่อนที่", "ไม่มี", "ไม่มีขา ปีก หรือระยางค์ใดเลย มีเพียงรากยึดจำนวนมากที่แทรกอยู่กับเนื้อไม้เจ้าบ้านถาวรตลอดชีวิต"]
        ],
        skin: [
            ["ลำตัว", "เนื้อเยื่อหนาแน่นสีน้ำตาลเข้มปนแดง ไม่มีลักษณะภายนอกที่แยกจากเนื้อไม้ได้เลยด้วยตาเปล่าถ้าไม่ตัดเข้าไปดูข้างใน"],
            ["ช่องหายใจ", "ผิวบางกว่าจุดอื่น เรืองแสงอำพันจางมากตามจังหวะหายใจ"],
            ["ราก", "เนื้อเยื่อบางยืดหยุ่นแทรกซึมกับเสี้ยนไม้ของต้นไม้เจ้าบ้านจนแยกไม่ออก"]
        ],
        pattern: "ไม่มีลายพราง — ไม่มีความจำเป็นต้องพรางตัวเลยเพราะไม่เคยถูกมองเห็นจากภายนอกได้ในสภาพปกติ พื้นผิวที่มีเพียงเนื้อเยื่อหนาแน่นกลืนกับแก่นไม้รอบตัวโดยสมบูรณ์",
        pal: [["สีหลัก", "#5c4632"], ["เงา", "#241b13"], ["แสง", "#a8886a"], ["เสริม A", "#7a5f42"], ["เสริม B", "#3a2c1e"]],
        hl: ["#ffb347", "อำพันจางเรืองแสงตามจังหวะหายใจที่ช่องดูด-พ่นอากาศ"],
        hlAt: "ผิวรอบช่องดูด-พ่นอากาศตอนหายใจ — มองเห็นได้ก็ต่อเมื่อแก่นไม้บริเวณนั้นบางหรือแตกร้าวพอเท่านั้น",
        mutationFull: {
            proTitle: "ฝังตัวในแก่นไม้มีชีวิต / ปลอดภัยจากผู้ล่าทุกชนิดโดยสมบูรณ์",
            proDesc: "ไม่มีบันทึกว่าสัตว์ใดในป่าหมอกเข้าถึงตัวมันได้เลยตลอดประวัติการสังเกต เพราะฝังลึกอยู่ในแก่นไม้ของต้นไม้ที่สูงเกิน 150 เมตร อาหาร (สปอร์/ละอองเรณูในกระแสอากาศชื้น) ก็มีอยู่ตลอดเวลาไม่มีวันหมดตราบใดที่ต้นไม้ยังมีชีวิตอยู่",
            conTitle: "ผูกชะตากับต้นไม้ต้นเดียวโดยสมบูรณ์",
            conDesc: "ไม่มีความสามารถเคลื่อนย้ายตัวเองได้เลยแม้แต่น้อยตลอดชีวิต หากต้นไม้เจ้าบ้านตายหรือล้มลงไม่ว่าด้วยเหตุใด (พายุ อายุขัย ไฟป่า) มันจะตายไปพร้อมกันทันทีโดยไม่มีทางป้องกันหรือหนีรอดได้เลย"
        },
        dangerDetail: {
            raw: "0 / 200", percent: 0, tier: "ไม่มีพิษภัย (Harmless)",
            factors: [],
            note: "ไม่มีอันตรายทางกายภาพใดเลยเพราะไม่มีทางเข้าถึงตัวมันได้ในสภาพปกติ ความน่าขนลุกทั้งหมดมาจากเสียง 'หายใจ' ที่ก้องผ่านโพรงไม้โดยไม่มีคำอธิบายที่จับต้องได้ — นักเดินป่าหลายรุ่นหลีกเลี่ยงตั้งแคมป์ใต้แนวต้นไม้ที่มีเสียงนี้แม้จะรู้อยู่แล้วว่าไม่เคยมีใครได้รับอันตรายจริงจากมันเลยสักครั้ง"
        },
        combat: [
            ["Resonant Breathing", "ดูด-พ่นอากาศที่กรองแล้วเป็นจังหวะสม่ำเสมอตลอดวัน เสียงก้องผ่านโพรงไม้กลวงทั้งต้นออกมาเป็นเสียงครางทุ้มต่ำคล้ายลมหายใจของสิ่งมีชีวิตขนาดมหึมา"],
            ["Humidity-Synced Rhythm", "ปรับจังหวะหายใจตามความชื้น/ความดันอากาศภายนอกทางอ้อม ทำให้จังหวะเสียงเปลี่ยนไปตามสภาพอากาศ — บางแนวป่ามีเรื่องเล่าว่าฟังจังหวะนี้ทำนายพายุที่กำลังจะมาได้แม่นกว่าสังเกตท้องฟ้า"]
        ],
        abilities: [
            {
                name: "การกรองอากาศจังหวะสม่ำเสมอ", type: "Physiology — สรีรวิทยา",
                desc: "ดูดอากาศชื้นที่มีสปอร์/ละอองเรณูลอยปนผ่านช่องดูด-พ่นอากาศคู่หนึ่งเป็นจังหวะสม่ำเสมอตลอดวันโดยไม่หยุด กรองอนุภาคอาหารออกก่อนพ่นอากาศที่เหลือกลับออกไป — จังหวะนี้เองที่ก้องผ่านโพรงไม้ทั้งต้นกลายเป็นเสียงที่ผู้คนเข้าใจผิดว่าเป็นสิ่งมีชีวิตขนาดมหึมากำลังหายใจอยู่ใกล้ๆ",
                origin: "วิวัฒนาการขึ้นในสภาพแวดล้อมที่ปลอดภัยที่สุดเท่าที่จะเป็นไปได้ (ฝังลึกในแก่นไม้มีชีวิต) จนไม่มีแรงกดดันให้ต้องพรางเสียงหรือควบคุมจังหวะหายใจเลย ต่างจากสิ่งมีชีวิตอื่นแทบทุกชนิดในป่าหมอกที่ต้องเงียบเสียงตัวเองตลอดเวลาเพื่อความอยู่รอด"
            }
        ],
        notes: [
            ["", "<strong>เสียงที่ไม่มีใครเคยพิสูจน์ที่มา</strong>: ออกแบบมาเป็น asset เสริมบรรยากาศฝั่งลึกลับ/น่าขนลุก — ให้บางแนวป่าของ Verath มีเสียง 'หายใจ' ก้องอยู่เป็นพื้นหลังโดยไม่มีสิ่งมีชีวิตอันตรายใดๆ อยู่เบื้องหลังเลยจริงๆ"],
            ["warn", "prompt ด้านล่างเบี่ยงจากสูตร RENDER SPEC มาตรฐานโดยตั้งใจ (ดู creatures/README.md) — เพราะตาม lore ไม่มีใครเคยเห็นตัวนี้จากภายนอกเลย จึงเขียนเป็น 'หน้าตัดโพรงไม้' ที่เผยให้เห็นร่างมันฝังอยู่ในแก่นไม้แทนภาพยืนเต็มตัวในธรรมชาติแบบตัวอื่น — ยังคงย่อหน้า 1 ครบทุกข้อและวลี aspect ratio บังคับท้าย prompt เป๊ะตามกฎ"]
        ],
        prompt: "A dense, rounded alien organism roughly 1.1 to 1.4 meters across and completely invisible from the outside, glimpsed only through a rare vertical crack in the living heartwood of a colossal tree trunk rising over 150 meters into the mist above, its rounded mass wedged deep within a natural hollow of the wood. It has no eyes of any kind, having no need for sight after a lifetime spent in absolute darkness; it has no external nose, instead reading the concentration of drifting spores and pollen in the humid air through chemical-sensing tissue spread across its outer surface; its mouth is a pair of soft, muscular bellows vents that rhythmically draw humid air in and push filtered air back out in a slow, steady cycle, the true source of the deep resonant breathing sound that echoes through the hollow trunk around it; it has no external ears, instead sensing shifts in humidity and air pressure within its wooden hollow directly through its own tissue. Fine anchoring roots thread outward from its body into the living grain of the host tree without harming it, both securing it in place and exchanging moisture with the wood; the skin immediately around its paired breathing vents is thinner than the rest of its body and glows a faint amber with every pulse of its breath, visible only on the rare occasion the surrounding heartwood is thin or cracked enough to let the light through, exactly as it is glimpsed here. Its body has no true frame at all, a dense rounded mass of tissue held in shape by internal pressure and by the tight embrace of the wood hollow around it rather than any skeleton; it has no spine, having never once needed to move from where it sits; it has no tail. It has no limbs of any kind beyond its fine anchoring roots, which spread permanently into the surrounding wood fiber rather than gripping or walking. Its outer tissue is a dense reddish umber-brown, textured so close to the heartwood around it that it cannot be told apart from the tree without cutting directly into the trunk; the skin around its breathing vents is thinner and glows a faint dim amber; its anchoring roots are pale and pliant, threading invisibly into the grain of the host wood until the two are impossible to separate. It carries no camouflage pattern at all, having never once needed to hide from a predator that could never reach it, its dense tissue simply reading as one more part of the tree's own grain. Living fused inside a tree that has never once been touched by any predator on record buys it complete safety and an endless supply of airborne spores, at the total cost of being unable to move even a fraction of a centimeter should that single tree ever fall. Its coloration is a harmonious deep umber-brown palette, deepened by near-black shadow in the depths of the wood grain around it and lifted by pale warm-tan highlights along the exposed edges of the crack, with muted ochre tones worked through the surrounding heartwood and a darker aged-wood shade framing the hollow, and a glowing pale amber highlight reserved only for the thin skin around its breathing vents as they pulse. The crack in the ancient trunk around it is framed by rough torn bark and exposed wood grain, deep forest mist drifting faintly beyond the opening, the rest of the tree's hollow interior fading into total darkness past the reach of the light.\n\nPhotorealistic 3D creature render, cinematic film-VFX quality, revealed in cross-section through a crack in its host tree's trunk, three-quarter view, shot with a macro lens at close range, shallow depth of field with the torn bark and exposed heartwood grain softly blurred at the edges, volumetric god rays filtering through the crack from outside, soft naturalistic backlighting that makes its breathing vents glow from within, crisp rim lighting along its silhouette, hyper-sharp micro-detail texturing on every fiber of wood grain and tissue, subsurface scattering, physically-based rendering, muted natural color grading with deep shadows, 1:1 square composition, subject centered and fully visible from head to feet, no readable text."
});
