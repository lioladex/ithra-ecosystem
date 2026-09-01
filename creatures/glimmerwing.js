/* ITH-203-882 — Glimmerwing (ALIVE) */
creaturesData.push({
        id: "ITH-203-882", name: "Glimmerwing", nickname: "ฝูงแสงกะพริบ", status: "ALIVE", era: "ยุคป่าหมอก (Mistwood Era)",
        imageKey: "GLIMMERWING", color: "#06b6d4",
        category: "แมลงแกนกลางระบบนิเวศ (Keystone Species)", 
        habitat: "ทั่วทั้งทวีป Verath",
        danger: "0% (Harmless)", size: "ระดับ 1 — จิ๋ว", 
        height: "10 ซม.", weight: "0.1 กก.",
        desc: "แมลงโปร่งแสงที่สื่อสารกันด้วยแสงสีฟ้า (Hive Mind) ชอบตอมแผงคอของ Luvenn เพื่อกินน้ำหวาน เป็นแหล่งอาหารให้ผู้ล่าและเป็นเข็มทิศแห่งป่า",
        mutation: { pro: "เครือข่ายความคุ้มครองฝูง (Hive Mind)", con: "แสงเรืองรองดึงดูดผู้ล่าในยามค่ำคืน" },
        weapons: ["ไม่มี"],
        social: "ฝูงใหญ่นับล้านตัว สื่อสารกันรวดเร็วระดับเสี้ยววินาที",
        head: [
            ["หนวด", "รับสารเคมีและคลื่นความถี่", "เชื่อมต่อข้อมูลกับฝูงและตรวจจับการเปลี่ยนแปลงของสภาพอากาศล่วงหน้า"],
            ["ตา", "ตาประกอบหลายพันเลนส์", "ประมวลผลการเคลื่อนไหวของสิ่งมีชีวิตอื่นได้ไวกว่าตาปกติ 5 เท่า มองเห็นเป็นเส้นแสง"]
        ],
        body: [
            ["ช่องท้อง", "ปล้องท้องกึ่งคริสตัลแบ่งเป็นห้องเรืองแสง (Bioluminescent organ)", "ปล้องท้องโปร่งแสงแบ่งเป็นห้องเล็กๆ ไม่สมมาตรคล้ายผลึกแร่ตัดขวาง แต่ละห้องเรืองสว่างต่างจังหวะกันตามอารมณ์และระดับความตื่นตัวของฝูง สามารถกระพริบเปลี่ยนจังหวะได้ตามสัญญาณเตือนภัย"]
        ],
        limbs: [
            ["ปีก", "ปีกโปร่งแสง 4 ปีก ลายเส้นใยแตกแขนงไม่สมมาตร", "กระจายแสงให้กว้างขึ้นและบินต้านลมแรงได้ดี มีโครงสร้างเส้นใยบางเบาแต่มั่นคง เส้นใยแตกแขนงเป็นลวดลายไม่สมมาตรคล้ายรอยแตกของแร่ผลึกมากกว่าเส้นใบแมลงทั่วไป"]
        ],
        skin: [
            ["เปลือก", "บางเบาเป็นแผ่นผลึกเล็กหลายเหลี่ยมสะท้อนแสงไฟไซอัน เปลือกไม่เรียบเนียนแบบแมลงทั่วไป แต่แตกเป็นแผงผลึกเล็กหลายเหลี่ยมเหมือนเกล็ดแร่ประกอบกัน ช่วยพรางตัวในหมอกยามเช้าแต่เด่นชัดในเวลากลางคืน"]
        ],
        combat: [
            ["Flash Blind", "เมื่อเจอภัยคุกคาม ฝูงนับพันตัวจะกระพริบแสงสีฟ้าไซอันพร้อมกันด้วยความสว่างสูงสุด ทำให้ศัตรูตาพร่าชั่วขณะ เปิดโอกาสให้เหยื่อหรือตัวมันเองหนีได้"]
        ],
        abilities: [
            {
                name: "การสื่อสารด้วยแสงกะพริบทั้งฝูง", type: "Social — การสื่อสาร",
                desc: "กะพริบแสงสีฟ้าอ่อนระหว่างตัวเป็นภาษาที่ไม่มีเสียง ทำให้บินตอมใกล้กันหนาแน่นได้โดยไม่ชนกันแม้แต่ตัวเดียว และทั้งฝูงตอบสนองต่อเงาที่เคลื่อนผ่านพร้อมกันเป็นหนึ่งเดียว — จังหวะกะพริบเร่งขึ้นเมื่อเงาเคลื่อนไหว ช้าลงเมื่อเงานั้นหยุดนิ่ง",
                origin: "ตัวเดียวเล็กเกินกว่าจะรับรู้ภัยได้ไวพอด้วยตัวเอง เครือข่ายแสงที่เชื่อมทั้งฝูงเข้าด้วยกันจึงทำให้สิ่งที่ตัวหนึ่งสังเกตเห็น กลายเป็นสิ่งที่ทั้งฝูงตอบสนองได้ทันทีเสมือนเป็นสิ่งมีชีวิตเดียว"
            }
        ],
        notes: [
            ["warn", "<strong>ดาบสองคมของ Luvenn</strong>. แสงของ Glimmerwing ที่บินตอมแผงคอ Luvenn ช่วยให้ภาพดูสวยงามและบอกจุดที่มีแหล่งอาหาร แต่ในคืนที่มืดมิด แสงสีฟ้าเหล่านี้คือเป้าหมายที่ฝูง Karvos ตามมาล่าได้อย่างง่ายดาย"]
        ],
        prompt: "A heavily alien tiny organism about 10 centimeters long, resting on the surface of a giant dark alien leaf beaded with mist, its form reading more like a living sliver of glowing crystal than a conventional insect. Its body is a translucent, faintly glowing cyan exoskeleton broken into small, irregular, many-faceted crystalline plates like a mosaic of cut gemstone rather than smooth chitin, with a soft inner light visible through the shell, and a swollen abdomen divided into small asymmetric translucent chambers resembling a cross-sectioned mineral geode, each chamber glowing at a slightly different brightness that shifts with the mood and alert level of its hive-mind swarm, flashing in sharp coordinated bursts the instant danger is sensed. Its head carries large compound eyes built from thousands of micro-lenses that process motion five times faster than a simple eye, reading the world as streaking lines of light, plus a pair of long sweeping antennae that pick up chemical signals and airborne pressure changes to sense storms before they arrive. Its body has no limbs beyond thin jointed legs gripping the leaf surface, and four delicate, gossamer-thin wings fan out from its thorax, structured with fine glowing cyan veins that split and branch in irregular, asymmetric patterns resembling mineral fracture lines rather than an ordinary insect's wing venation, splitting light like a prism, built light enough to fight through strong wind yet strong enough to carry it for miles as part of its migrating swarm. Its faceted crystalline shell reflects cyan light in a way that all but vanishes into the morning fog yet burns like a beacon after dark — and this is the exact trade-off that defines the species: the same glow that lets a million-strong hive coordinate in a heartbeat is the glow that calls predators from a mile off in the dark. Its coloration is a harmonious translucent cyan palette throughout, deepened by faint blue-grey shadow at the joints and lifted by near-white highlights along the crystalline facet edges, with a glowing cyan highlight pulsing at its faceted abdomen chambers, its compound eyes, and the fractured tracery of its wing veins. Thousands of other Glimmerwings hover blurred in the deep background as tiny drifting cyan orbs, scattered through thick rolling fog between the black silhouettes of distant alien trees.\n\nPhotorealistic 3D creature render, macro photography style, cinematic film-VFX quality, resting full-body on a leaf in its natural habitat, extreme close-up three-quarter view, shot with a macro lens, shallow depth of field with the swarm and forest softly blurred behind it, volumetric fog light and glowing bokeh from distant swarm members, soft backlighting that makes the faceted crystalline body and wings glow from within, hyper-detailed micro-texturing on the exoskeleton facets and wing veins, subsurface scattering, physically-based rendering, muted natural color grading with deep shadows, 1:1 square composition, subject centered and fully visible, no readable text."
});
