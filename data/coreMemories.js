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
   บทที่ 4 ("the-parting"): ร่างตอนนั้นยังเป็น Skyther อยู่เต็มตัว (ยังไม่มี
   host-switch จนกว่าจะจบ step นี้ — ดู header comment ของ journey/chapter4.js)
   จึงยังใส่ identity marker ของ Skyther เหมือนบทอื่น เพียงแต่ให้เถ้าหนาบัง
   บางส่วนและเพิ่มริ้วใต้ผิวที่เริ่มขยับเป็นสัญญาณเปลี่ยนร่างที่กำลังจะมาถึง
   ไม่ได้ทำให้ตัวมันเองดูคลุมเครือทั้งหมด
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
        prompt: "Photorealistic 3D render, cinematic film-VFX quality, wide establishing shot in 16:9 widescreen cinematic composition. Deep alien rainforest clearing at dusk, thick canopy breaking apart to spill dying orange sunlight across a shallow mud pool on the forest floor. A medium dog-sized alien wolf-like pack predator — lean long-limbed frame with an unusually thick neck and heavy shoulders, forward-facing pale amber predator eyes, tall pointed ears so thin they glow translucent, glowing orange-red bioluminescent stripes along its cheeks and the bridge of its snout, cool smoke blue-grey fur with faint vertical tiger stripes dissolving into leopard-like spots — bursts through the undergrowth directly ahead, frozen mid-leap over the mud, its mouth wide open NOT in a simple single wolf-like gape but split into four distinct wedge-shaped flesh flaps radiating outward like the four points of a plus sign or an X — one pointing straight up, one straight down, one left, one right, peeled apart from a shared central opening with clear dark negative space between each flap, each flap independently lined with its own row of curved inward-facing fangs, the whole open maw unmistakably reading as a four-petaled flower of teeth rather than an ordinary animal snarl, a dim orange-red glow visible deep in the throat at the center. Directly on top of the predator's body, perfectly aligned with its outline, a solid flat silhouette in opaque dark ink-grey hovers like a shadow stamped onto the scene: completely featureless, with no fur, no ears, no tail, no legs, no visible anatomy or texture of any kind, just a plain flat undefined shape the same size and position as the predator underneath it, as though the shape of something else was double-exposed into the same frame without any of its own detail rendered — not a copy of the predator, not another creature, just an empty dark silhouette overlaying it like an unexplained mark on the photograph. Volumetric god rays cut through settling dust kicked up by the impact, subsurface scattering on wet mud and displaced water droplets frozen mid-splash, shallow depth of field with the background canopy softly blurred, full scene visible, no text, no illustration, no painting, no concept art style."
    },
    {
        chapter: 2,
        chapterTitle: "ผู้ล่าและเหยื่อ",
        stepId: "the-silent-one",
        tag: "T+6 — สิ่งที่เดินโดยไม่มีเสียง",
        title: "เจ้าของดวงตาคู่นั้น",
        caption: "มองลงมาจากฟ้าเห็นเงาสีดำสนิทกัดฝูงเจ้าตัวสี่ขาจนนิ่งไปตัวหนึ่ง แล้วมันก็เงยหน้าขึ้นมาสบตากับที่เฝ้ามองอยู่พอดี",
        image: `${ITHRA_CDN_BASE}/memories/chapter2.jpg`,
        prompt: "Photorealistic 3D render, cinematic film-VFX quality, aerial point-of-view shot in 16:9 widescreen cinematic composition, looking straight down from just above a gap in the misty canopy. An empty, quiet forest clearing floor below, no other animals anywhere in view. At the center of the clearing, alone, a colossal apex predator far bigger than a tiger, more like a small elephant in sheer bulk, standing a massive 2.4 meters at the shoulder with an immensely thick, heavily muscled frame — its head buried in dense, bristling black fur with heavy brow-tufts casting a fixed feral scowl — looms and towers overwhelmingly over the limp body of a single lean dog-sized wolf-like predator no taller than roughly 0.95 meters at the shoulder, barely a quarter of the apex predator's shoulder height and looking almost small-dog-sized and fragile by comparison, dwarfed completely beneath it, lying naturally on its side with ordinary, correctly proportioned quadruped canine anatomy — one head, four clearly separate legs, a deep chest and narrow waist, no fused, extra, warped or malformed limbs — a thick neck and glowing orange-red cheek stripes, its mouth slack in death but still clearly split into four distinct wedge-shaped flesh flaps radiating outward like the four points of a plus sign rather than a single ordinary canine gape, each flap lined with its own small fangs. The apex predator's long curved fangs are still sunk mid-bite into the kill, its jaws and head alone nearly as large as the dead animal's entire ribcage, faint electric blue-white lightning-crack markings just visible tracing through its black fur. Its tail is bare and hairless near the tip, deep black skin rather than furred there, clearly forking partway down its length into two distinct separate strands that visibly diverge apart from each other like a wide letter V, each strand thin, independent and unmistakably separate from the other rather than staying together as one line or one curled shape. It goes utterly still, then slowly lifts its head and looks straight up, its large round eyes glowing cold electric blue-white with a reflective tapetum, its gaze locking directly with the camera's vantage point in the sky above it. Hazy daylight filters down through the canopy gap in volumetric shafts, subsurface scattering on the glowing eyes and fang edges, shallow depth of field with the forest floor softly receding at the edges, full scene visible, no text, no illustration, no painting, no concept art style."
    },
    {
        chapter: 3,
        chapterTitle: "จุดบอด",
        stepId: "near-strike",
        tag: "T+7 — จุดบอดร่วม",
        title: "จุดบอดร่วม",
        caption: "เจ้าตัวสี่ขาฝูงหนึ่งพุ่งออกจากฝั่งตรงข้ามพร้อมกัน ขณะที่ตัวเฝ้าระวังของฝูงเผลอไปมัวล็อกสายตากับเงาปีกกว้างที่เกาะนิ่งอยู่บนกิ่ง — บทเรียนแรกเรื่องจุดบอดที่ทุกฝ่ายมีเหมือนกัน",
        image: `${ITHRA_CDN_BASE}/memories/chapter3.jpg`,
        prompt: "Photorealistic 3D render, cinematic film-VFX quality, wide point-of-view shot in 16:9 widescreen cinematic composition, framed as if looking outward from a low branch — no creature's own body, wings or perch visible in frame, just the view out into the clearing. A forest clearing at high midday, bright hazy overhead sunlight breaking through gaps in the dense canopy in sharp-edged shafts, hot hard-edged light rather than warm golden dusk tones. A small herd of exactly seven tall horse-sized alien grazers stands in the clearing, no more than seven animals total, each with correct natural quadruped anatomy: a deceptively light, hollow-boned frame with a deep chest and flat belly, a long raised neck, slender high-jointed forelegs that bend backward at the knee like a deer's, and reversed-jointed hind legs of the same long slender build, all four legs planted naturally and bearing its weight in a normal standing or running gait, never bent at an unnatural angle or twisted out of proportion — small beaked heads held level on the raised neck, emerald-green glowing eyes, tall translucent leaf-shaped ears. Six of them have their fan-like solar ruffs fully unfurled wide open behind their heads catching the direct overhead sun; only one, a few meters out, has its ruff half-collapsed and its long neck lowered halfway in a wary half-alert stare directed straight back toward the hidden vantage point, its body still standing in the same correct natural anatomy as the rest of the herd. From the treeline on the far side of the clearing, exactly four lean dog-sized wolf-like predators with thick necks, four-way radial split jaws and glowing orange-red cheek stripes have already closed in around that one distracted grazer from several directions at once, boxing it in on multiple sides rather than a single predator chasing alongside it, cutting off every line of escape in the same instant, its fan now collapsing in alarm as it realizes it is surrounded. The other six grazers explode into scattering motion away from the ambush in the opposite direction, their solar ruffs snapping shut and folding flat against their necks as they flee rather than staying open, each still moving with correct natural leg articulation, no twisted or malformed limbs. No other creatures of any kind are present in the scene — no flying reptile, no additional predators or grazers beyond these eleven animals. Dust kicked up glows in the overhead sunbeams, subsurface scattering on the translucent ear-membranes and solar fans, shallow depth of field keeping the ambush in sharp focus while the scattering herd blurs, full scene visible, no text, no illustration, no painting, no concept art style."
    },
    {
        chapter: 4,
        chapterTitle: "เถ้าถ่าน",
        stepId: "the-parting",
        tag: "T+9 — วินาทีที่ควบคุมไม่ทัน",
        title: "วินาทีที่ควบคุมไม่ทัน",
        caption: "กลางพายุเถ้าที่หายใจแทบไม่ได้ ร่างกายฝืนวิ่งปนไปกับขบวนที่เบียดกันแน่น จนบางอย่างเริ่มขยับอยู่ใต้ผิวเองโดยไม่รอให้คิดทัน",
        image: `${ITHRA_CDN_BASE}/memories/chapter4.jpg`,
        prompt: "Photorealistic 3D render, cinematic film-VFX quality, chaotic ground-level shot in 16:9 widescreen cinematic composition. Thick grey volcanic ash storm choking a dense, mixed stampede of alien creatures of every size running shoulder to shoulder in the same direction, visibility reduced to a few body-lengths, dull orange embers drifting through the haze. In the middle of the crush, a massive wyvern-like flyer — its four glowing sun-gold eyes, toothless hooked beak with serrated blade-like edges, and translucent solar-sail crest only half-visible through the swirling ash — runs awkwardly on legs unused to bearing its full weight, its immense wings clamped tight and half-spread for balance rather than flight, its shark-like micro-scaled wings and slate-blue-grey countershading dulled and caked with grey ash, chest heaving for air that will not come, its silhouette rippling faintly at the edges as something shifts and moves beneath its own skin without being told to, though its overall wyvern shape is still clearly recognizable. Just ahead, the shape of another creature lies motionless on the ground, already being stepped over by the unbroken stampede. Volumetric orange ember-light diffusing through the ash cloud, subsurface scattering on the rippling silhouette's edges, motion-blurred legs of the stampede pressing in from both sides, shallow depth of field, full scene visible, no text, no illustration, no painting, no concept art style."
    },
    {
        chapter: 5,
        chapterTitle: "เปลวเบื้องล่าง",
        stepId: "above-the-lava",
        tag: "T+11 — เหนือลาวาไม่กี่ช่วงตัว",
        title: "เหนือลาวาไม่กี่ช่วงตัว",
        caption: "ร่างใหม่กางปีกรับไอร้อนที่ลอยขึ้นจากก้นเหวไว้แทนที่จะร่วงลงไป ระยะห่างจากผิวลาวาเหลือแค่ไม่กี่ช่วงตัว",
        image: `${ITHRA_CDN_BASE}/memories/chapter5.jpg`,
        prompt: "Photorealistic 3D render, cinematic film-VFX quality, dramatic wide shot in 16:9 widescreen cinematic composition. Deep volcanic chasm glowing with molten lava far below, heat shimmer distorting the air. A massive wyvern-like flyer with an immense wingspan, four glowing sun-gold eyes, a toothless hooked beak with serrated blade-like edges, and a translucent solar-sail crest webbed with branching fracture-line veins flaring from the back of its skull, its shark-like micro-scaled wings catching a gem-like iridescent sheen, slate-blue-grey above and pale fog-blue below, its four eyes only just snapped open as if waking mid-fall — glides just a few body-lengths above the lava surface, no longer plummeting, catching a rising thermal updraft, wingtips almost brushing the glowing molten rock. Volumetric orange-red light from the lava lights the underside of its wings and crest, subsurface scattering on the thin translucent wing membrane, heat haze and drifting embers rising past camera, shallow depth of field with the cavern walls fading into darkness above, full scene visible, no text, no illustration, no painting, no concept art style."
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
