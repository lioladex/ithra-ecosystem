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

   ความสม่ำเสมอของตัวละครข้าม prompt: แต่ละ prompt ด้านล่างไม่ได้บรรยายตัว
   ละครแบบทั่วไป (เช่น "a black predator") แต่คัดลอกวลีเฉพาะตัวที่นิยาม
   หน้าตาจริงจากไฟล์ creatures/<name>.js field `prompt` ของตัวนั้นมาสับใส่
   ตรงๆ (marker เดียวกับที่ครีเจอร์ใช้ในพอร์ตเทรตของตัวเอง เช่น ลาย
   "four-way radial split mouth" ของ Karvos หรือ "electric blue-white
   lightning-crack markings" ของ Korrune) เพราะเครื่องมือ AI gen ที่ใช้ไม่มี
   ระบบ reference-image/character-seed ให้ผูกตัวละครข้ามภาพ ข้อความจึงเป็น
   สิ่งเดียวที่ล็อกหน้าตาให้ตรงกับภาพโปรไฟล์ได้ — ถ้าแก้ prompt ของตัวไหนใน
   creatures/*.js ในอนาคต ต้องกลับมา sync ประโยคที่ยกมาตรงนี้ด้วย
   ข้อยกเว้นคือบทที่ 4 ("the-parting") ที่ตั้งใจเว้นให้คลุมเครือ เพราะร่าง
   กำลังอยู่กลางการเปลี่ยนรูปโดยยังไม่มีแม่แบบตายตัว (ตรงกับเนื้อเรื่องจริง)
*/
const CORE_MEMORIES = [
    {
        chapter: 1,
        chapterTitle: "การตื่นรู้",
        stepId: "the-overlap",
        tag: "T+1 — ภาพซ้อนทับ",
        title: "เงาที่ซ้อนทับ",
        caption: "วินาทีแรกที่มีสิ่งมีชีวิตอื่นปรากฏตัวต่อหน้า — เงาสี่ขาที่พุ่งออกมากลางแอ่งโคลนใต้แสงสีส้ม กลายเป็นแม่แบบร่างกายแรกที่ Confluence เคยรู้จัก",
        image: `${ITHRA_CDN_BASE}/memories/chapter1.jpg`,
        prompt: "Photorealistic 3D render, cinematic film-VFX quality, wide establishing shot in 16:9 widescreen cinematic composition. Deep alien rainforest clearing at dusk, thick canopy breaking apart to spill dying orange sunlight across a shallow mud pool on the forest floor. A medium dog-sized alien wolf-like pack predator — lean long-limbed frame with an unusually thick neck and heavy shoulders, forward-facing pale amber predator eyes, its mouth split wide open into a four-way radial gape of wedge-shaped flesh flaps like the four points of a plus sign, each lined with its own row of curved fangs, tall pointed ears so thin they glow translucent, glowing orange-red bioluminescent stripes along its cheeks and the bridge of its snout, cool smoke blue-grey fur with faint vertical tiger stripes dissolving into leopard-like spots — bursts through the undergrowth directly ahead, frozen mid-leap over the mud. A faint, semi-transparent ghostly silhouette — a plain featureless shadow-shape with no legs, anatomy or detail of its own, not resembling the predator's form at all — hangs stamped perfectly over the predator's body, as if two exposures of the same instant were layered on top of one another: one solid and lit by the orange dusk light, one a flat pale shape bleeding through from underneath like an afterimage. Volumetric god rays cut through settling dust kicked up by the impact, subsurface scattering on wet mud and displaced water droplets frozen mid-splash, shallow depth of field with the background canopy softly blurred, full scene visible, no text, no illustration, no painting, no concept art style."
    },
    {
        chapter: 2,
        chapterTitle: "ผู้ล่าและเหยื่อ",
        stepId: "the-silent-one",
        tag: "T+6 — สิ่งที่เดินโดยไม่มีเสียง",
        title: "เจ้าของดวงตาคู่นั้น",
        caption: "มองลงมาจากฟ้าเห็นเงาสีดำสนิทกัดฝูงเจ้าตัวสี่ขาจนนิ่งไปตัวหนึ่ง แล้วมันก็เงยหน้าขึ้นมาสบตากับที่เฝ้ามองอยู่พอดี",
        image: `${ITHRA_CDN_BASE}/memories/chapter2.jpg`,
        prompt: "Photorealistic 3D render, cinematic film-VFX quality, aerial point-of-view shot in 16:9 widescreen cinematic composition, looking straight down from just above a gap in the misty canopy. On the forest floor below, a scattered pack of lean dog-sized wolf-like predators with thick necks and glowing orange-red cheek stripes flee in every direction. At the center of the clearing, a colossal apex predator — its head buried in dense, bristling black fur with heavy brow-tufts casting a fixed feral scowl, its body far larger and more powerfully muscled than the fleeing pack around it — stands over one of the pack's own with its long curved fangs still sunk mid-bite, faint electric blue-white lightning-crack markings just visible tracing through its black fur. It goes utterly still, then slowly lifts its head and looks straight up, its large round eyes glowing cold electric blue-white with a reflective tapetum, its gaze locking directly with the camera's vantage point in the sky above it. Hazy daylight filters down through the canopy gap in volumetric shafts, subsurface scattering on the glowing eyes and fang edges, motion blur on the scattering pack in the middle distance, shallow depth of field with the forest floor softly receding at the edges, full scene visible, no text, no illustration, no painting, no concept art style."
    },
    {
        chapter: 3,
        chapterTitle: "จุดบอด",
        stepId: "near-strike",
        tag: "T+7 — จุดบอดร่วม",
        title: "จุดบอดร่วม",
        caption: "เจ้าตัวสี่ขาฝูงหนึ่งพุ่งออกจากฝั่งตรงข้ามพร้อมกัน ขณะที่ตัวเฝ้าระวังของฝูงเผลอไปมัวล็อกสายตากับเงาปีกกว้างที่เกาะนิ่งอยู่บนกิ่ง — บทเรียนแรกเรื่องจุดบอดที่ทุกฝ่ายมีเหมือนกัน",
        image: `${ITHRA_CDN_BASE}/memories/chapter3.jpg`,
        prompt: "Photorealistic 3D render, cinematic film-VFX quality, wide action shot in 16:9 widescreen cinematic composition. A misty forest clearing scattered with tall horse-sized alien grazers grazing warily — small beaked heads, emerald-green glowing eyes, tall translucent leaf-shaped ears, a fan-like solar ruff of slender frond-ribbons half-raised at the neck. Perched motionless on a low branch off to one side, a massive wyvern-like flyer with folded wings and a translucent solar-sail crest sits like a still shadow against the light, locked in an unbroken stare with the nearest grazer, whose long neck has lowered halfway into a wary half-alert posture. From the opposite treeline, four lean dog-sized wolf-like predators with thick necks, four-way radial split jaws and glowing orange-red cheek stripes burst out simultaneously in total silence, the frontmost one already cornering a straggler at the herd's outer edge mid-stride. The rest of the herd explodes into scattering motion in every direction. Volumetric backlight rays cutting through settling dust and disturbed foliage, subsurface scattering on the translucent ear-membranes, solar fan and wing membrane, shallow depth of field keeping the ambush in sharp focus while the grazing herd in the foreground blurs, full scene visible, no text, no illustration, no painting, no concept art style."
    },
    {
        chapter: 4,
        chapterTitle: "เถ้าถ่าน",
        stepId: "the-parting",
        tag: "T+9 — วินาทีที่ควบคุมไม่ทัน",
        title: "วินาทีที่ควบคุมไม่ทัน",
        caption: "กลางพายุเถ้าที่หายใจแทบไม่ได้ ร่างกายฝืนวิ่งปนไปกับขบวนที่เบียดกันแน่น จนบางอย่างเริ่มขยับอยู่ใต้ผิวเองโดยไม่รอให้คิดทัน",
        image: `${ITHRA_CDN_BASE}/memories/chapter4.jpg`,
        prompt: "Photorealistic 3D render, cinematic film-VFX quality, chaotic ground-level shot in 16:9 widescreen cinematic composition. Thick grey volcanic ash storm choking a dense, mixed stampede of alien creatures of every size running shoulder to shoulder in the same direction, visibility reduced to a few body-lengths, dull orange embers drifting through the haze. In the middle of the crush, a lean winged creature runs awkwardly on legs unused to bearing its full weight, wings clamped tight and half-spread for balance rather than flight, chest heaving for air that will not come, its silhouette rippling faintly at the edges as something shifts and moves beneath its own skin without being told to. Just ahead, the shape of another creature lies motionless on the ground, already being stepped over by the unbroken stampede. Volumetric orange ember-light diffusing through the ash cloud, subsurface scattering on the rippling silhouette's edges, motion-blurred legs of the stampede pressing in from both sides, shallow depth of field, full scene visible, no text, no illustration, no painting, no concept art style."
    },
    {
        chapter: 5,
        chapterTitle: "เปลวเบื้องล่าง",
        stepId: "above-the-lava",
        tag: "T+11 — เหนือลาวาไม่กี่ช่วงตัว",
        title: "เหนือลาวาไม่กี่ช่วงตัว",
        caption: "ร่างใหม่กางปีกรับไอร้อนที่ลอยขึ้นจากก้นเหวไว้แทนที่จะร่วงลงไป ระยะห่างจากผิวลาวาเหลือแค่ไม่กี่ช่วงตัว",
        image: `${ITHRA_CDN_BASE}/memories/chapter5.jpg`,
        prompt: "Photorealistic 3D render, cinematic film-VFX quality, dramatic wide shot in 16:9 widescreen cinematic composition. Deep volcanic chasm glowing with molten lava far below, heat shimmer distorting the air. A massive wyvern-like flyer with an immense wingspan, four glowing sun-gold eyes, a toothless hooked beak with serrated blade-like edges, and a translucent solar-sail crest webbed with branching fracture-line veins flaring from the back of its skull, its shark-like micro-scaled wings catching a gem-like iridescent sheen, slate-blue-grey above and pale fog-blue below — glides just a few body-lengths above the lava surface, catching a rising thermal updraft, wingtips almost brushing the glowing molten rock. Volumetric orange-red light from the lava lights the underside of its wings and crest, subsurface scattering on the thin translucent wing membrane, heat haze and drifting embers rising past camera, shallow depth of field with the cavern walls fading into darkness above, full scene visible, no text, no illustration, no painting, no concept art style."
    },
    {
        chapter: 6,
        chapterTitle: "สองจ้าวป่า",
        stepId: "titans-finish",
        tag: "T+12 — เผด็จศึก",
        title: "เผด็จศึก",
        caption: "เขี้ยวคู่ใหญ่ฝังลงตรงจุดเปราะบางที่สุดของเกราะหนา เปลือกที่เคยแข็งแกร่งที่สุดในป่าแตกออก — จ้าวป่าตัวเดิมล้มลงต่อหน้าโดยไม่รู้ตัวว่ามีใครเฝ้าดูอยู่",
        image: `${ITHRA_CDN_BASE}/memories/chapter6.jpg`,
        prompt: "Photorealistic 3D render, cinematic film-VFX quality, intense climactic shot in 16:9 widescreen cinematic composition. Dense mist-shrouded forest floor tangled in torn spider-like webbing, dim pre-dawn light filtering through the canopy. A colossal bone-white ambush predator, its body armored in overlapping segmented plates with long jagged spine-tipped edges, thrashes on its eight radial limbs as its shell cracks open along one flank with dark ichor spraying, its faint blue-green glowing eyes and twin pulsing lure-tendrils above its mouth dimming. Clinging tight to its back, a heavily-muscled predator with dense bristling black fur, a thick jutting mane, and pale icy blue-white eyes locks all four clawed limbs with bared retractable claws into the exposed seam, electric blue-white lightning-crack markings flaring bright across its fur, its long curved fangs sunk deep into the one unarmored weak point. Volumetric backlight silhouetting both combatants against the pale mist, subsurface scattering on the cracked pale armor plates, spilled fluid and glowing fur markings, motion blur on the thrashing legs, shallow depth of field, full scene visible, no text, no illustration, no painting, no concept art style."
    }
];
