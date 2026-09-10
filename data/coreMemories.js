/* =================================================================
   CORE MEMORIES (DIR-03)
   แทนที่ MEMORY MECHANICS + DESIGN RULEBOOK บนหน้าเว็บ (ย้ายไปเก็บเป็น
   codex/memory-and-transformation.md และ codex/creature-design.md แทน —
   ดู codex/README.md)

   1 บท = 1 Core Memory เดียว คัดจากฉากที่ "สร้างความเปลี่ยนแปลง" ให้
   Confluence จริง (ไม่ใช่แค่ฉากที่สวย) — ผูกกับ step id ใน journey/chapterN.js
   ตรงๆ เพื่อให้แก้เนื้อเรื่องแล้วไม่ลืม sync จุดนี้

   ปลดล็อกทีละอันตามที่อ่านจบแต่ละบทจริง (เช็คผ่าน journeyChapterFinished()
   ที่นิยามไว้ใน data/journey.js) — ก่อนปลดล็อกแสดงเป็นการ์ดเงาแบบเดียวกับ
   Life-Form Database เพื่อไม่สปอยล์ล่วงหน้า

   field `image`: อ้างอิง CDN เดียวกับ creatures/_imageLibrary.js
   (assets/memories/chapterN.jpg) — ยังไม่มีไฟล์จริง รอ generate จาก prompt
   ด้านล่างแล้ว apply ผ่าน scripts/fix-image-assets.js ตามปกติ ก่อนมีไฟล์จริง
   การ์ดจะ fallback ไปโชว์ NO VISUAL DATA เหมือนตัวสิ่งมีชีวิตที่ยังไม่มีรูป
*/
const CORE_MEMORIES = [
    {
        chapter: 1,
        chapterTitle: "การตื่นรู้",
        stepId: "the-overlap",
        tag: "T+1 — เงาที่ซ้อนทับกลางแอ่งโคลน",
        title: "เงาที่ซ้อนทับ",
        caption: "วินาทีแรกที่มีสิ่งมีชีวิตอื่นปรากฏตัวต่อหน้า — เงาสี่ขาที่พุ่งออกมากลางแอ่งโคลนใต้แสงสีส้ม กลายเป็นแม่แบบร่างกายแรกที่ Confluence เคยรู้จัก",
        image: `${ITHRA_CDN_BASE}/memories/chapter1.jpg`,
        prompt: "Photorealistic 3D render, cinematic film-VFX quality, wide establishing shot in 16:9 widescreen cinematic composition. Deep alien rainforest clearing at dusk, thick canopy breaking apart to spill dying orange sunlight across a shallow mud pool on the forest floor. A sleek four-legged creature with smooth pale hide and retractable claws bursts through the undergrowth directly ahead, caught mid-leap, its silhouette overlapping and merging with the blurred, dissolving silhouette of a small indistinct pale newly-formed creature crouched at the pool's edge — the two shadows cast by the same low orange light stretch across the mud and cross into one another. Volumetric god rays cut through settling dust kicked up by the impact, subsurface scattering on wet mud and displaced water droplets frozen mid-splash, shallow depth of field with the background canopy softly blurred, full scene visible, no text, no illustration, no painting, no concept art style."
    },
    {
        chapter: 2,
        chapterTitle: "ผู้ล่าและเหยื่อ",
        stepId: "the-silent-one",
        tag: "T+6 — ดวงตาที่เรืองจากความมืด",
        title: "เจ้าของดวงตาคู่นั้น",
        caption: "ครั้งแรกที่สบตากับเงาสีดำสนิท — ไม่มีเสียง ไม่มีการเคลื่อนไหว มีแค่แสงเรืองสีฟ้าซีดสองจุดจ้องกลับมาจากความมืด",
        image: `${ITHRA_CDN_BASE}/memories/chapter2.jpg`,
        prompt: "Photorealistic 3D render, cinematic film-VFX quality, close observational shot in 16:9 widescreen cinematic composition. Pitch-black alien forest interior at night, dense fog drifting low between tree trunks. In the far mid-ground, a pair of pale icy-blue glowing eyes emerges from total darkness, faint bioluminescent light barely tracing the outline of a sleek jet-black predator's head and shoulders, the rest of its body dissolved into the surrounding black. Thin foliage silhouettes frame the foreground from a hidden vantage point. Volumetric moonlight shafts filtering through fog, subsurface scattering on the glowing eyes only, everything else in near-total shadow, shallow depth of field, full scene visible, no text, no illustration, no painting, no concept art style."
    },
    {
        chapter: 3,
        chapterTitle: "จุดบอด",
        stepId: "near-strike",
        tag: "T+7 — จุดบอดร่วม",
        title: "จุดบอดร่วม",
        caption: "ฝูงเจ้าตัวสี่ขาพุ่งออกจากแนวป่าพร้อมกันสี่ทิศ ขณะที่ตัวเฝ้าระวังของฝูงเหยื่อมัวจ้องกิ่งไม้ผิดกิ่ง — บทเรียนแรกเรื่องจุดบอดที่ทุกฝ่ายมีเหมือนกัน",
        image: `${ITHRA_CDN_BASE}/memories/chapter3.jpg`,
        prompt: "Photorealistic 3D render, cinematic film-VFX quality, wide action shot in 16:9 widescreen cinematic composition. Golden dusk light over a forest clearing, a herd of deer-like bioluminescent grazers scattering in panic as four sleek pale four-legged predators burst simultaneously from the treeline in perfect unison, the lead predator mid-lunge closing its jaws around the flank of the slowest, most isolated grazer at the herd's edge. Motion blur on the fleeing herd, dust and torn foliage kicked into the air, volumetric backlight rays cutting through the dust cloud, subsurface scattering on the translucent ear-membranes of the fleeing herd, shallow depth of field keeping the strike in sharp focus, full scene visible, no text, no illustration, no painting, no concept art style."
    },
    {
        chapter: 4,
        chapterTitle: "เถ้าถ่าน",
        stepId: "the-parting",
        tag: "T+9 — วินาทีที่ควบคุมไม่ทัน",
        title: "วินาทีที่ควบคุมไม่ทัน",
        caption: "กลางพายุเถ้าที่หายใจแทบไม่ได้ ร่างกายล้มลงกลางขบวนที่วิ่งเบียดกัน แล้วเริ่มตัดสินใจเปลี่ยนร่างเองโดยไม่รอให้คิดทัน",
        image: `${ITHRA_CDN_BASE}/memories/chapter4.jpg`,
        prompt: "Photorealistic 3D render, cinematic film-VFX quality, chaotic wide shot in 16:9 widescreen cinematic composition. Thick grey volcanic ash storm choking a fleeing stampede of alien creatures, visibility reduced to a few body-lengths, dull orange embers drifting through the haze. At the center of the frame a single body has stumbled and gone down mid-stampede, its outline already beginning to blur and dissolve at the edges as unseen limbs and mass ripple beneath the skin mid-transformation, caught in the instant before it fully reforms. Volumetric orange ember-light diffusing through the ash cloud, subsurface scattering on the dissolving silhouette's edges, motion-blurred legs of the stampede thundering past on both sides, shallow depth of field, full scene visible, no text, no illustration, no painting, no concept art style."
    },
    {
        chapter: 5,
        chapterTitle: "เปลวเบื้องล่าง",
        stepId: "above-the-lava",
        tag: "T+11 — เหนือลาวาไม่กี่ช่วงตัว",
        title: "เหนือลาวาไม่กี่ช่วงตัว",
        caption: "ร่างใหม่กางปีกรับไอร้อนที่ลอยขึ้นจากก้นเหวไว้แทนที่จะร่วงลงไป ระยะห่างจากผิวลาวาเหลือแค่ไม่กี่ช่วงตัว",
        image: `${ITHRA_CDN_BASE}/memories/chapter5.jpg`,
        prompt: "Photorealistic 3D render, cinematic film-VFX quality, dramatic wide shot in 16:9 widescreen cinematic composition. Deep volcanic chasm glowing with molten lava far below, heat shimmer distorting the air. A wide-winged creature with taut membrane wings fully extended glides just a few body-lengths above the lava surface, catching a rising thermal updraft, wingtips almost brushing the glowing molten rock. Volumetric orange-red light from the lava lighting the underside of the wings and belly, subsurface scattering on the thin translucent wing membrane, heat haze and drifting embers rising past camera, shallow depth of field with the cavern walls fading into darkness above, full scene visible, no text, no illustration, no painting, no concept art style."
    },
    {
        chapter: 6,
        chapterTitle: "สองจ้าวป่า",
        stepId: "titans-finish",
        tag: "T+12 — เผด็จศึก",
        title: "เผด็จศึก",
        caption: "เขี้ยวคู่ใหญ่ฝังลงตรงจุดเปราะบางที่สุดของเกราะหนา เปลือกที่เคยแข็งแกร่งที่สุดในป่าแตกออก — จ้าวป่าตัวเดิมล้มลงต่อหน้าโดยไม่รู้ตัวว่ามีใครเฝ้าดูอยู่",
        image: `${ITHRA_CDN_BASE}/memories/chapter6.jpg`,
        prompt: "Photorealistic 3D render, cinematic film-VFX quality, intense climactic shot in 16:9 widescreen cinematic composition. Dense mist-shrouded forest floor tangled in torn spider-like webbing, dim pre-dawn light filtering through the canopy. A massive white-armored eight-legged predator thrashes as its segmented shell cracks open along one flank with dark ichor spraying, while a sleek jet-black predator clings tight to its back with all four clawed limbs locked into the exposed seam, fangs sunk deep into the one unarmored weak point. Volumetric backlight silhouetting both combatants against the pale mist, subsurface scattering on the cracked pale armor plates and spilled fluid, motion blur on the thrashing legs, shallow depth of field, full scene visible, no text, no illustration, no painting, no concept art style."
    }
];
