/* =================================================================
   ACTION POINT / SKILL SYSTEM (SYS-SIM extension)
   ------------------------------------------------------------------
   ต้องโหลดไฟล์นี้ก่อน data/journey.js เสมอ (ดูลำดับ <script> ใน
   index.html) เพราะ journey.js เรียก CREATURE_PROFILES / SKILL_DEFINITIONS
   ตรงๆ ตอนคำนวณ AP และ observation progress

   AP MAX มาจาก sizeTier เดียวกับคอลัมน์ "ระดับ" ใน field `size` ของ
   creatures/*.js ตรงๆ (ระดับ 1 จิ๋ว → ระดับ 6 ใหญ่มาก) ไม่ได้คิดสูตรใหม่
   ทับของเดิม — มวลกายมากกว่า = สำรองพลังงานมากกว่า:
     tier 1-2 → AP 2 · tier 3-4 → AP 3 · tier 5 → AP 4 · tier 6 → AP 5

   `frame` (light/normal/heavy) อ้างจาก field `mutation`/`prompt` เดิมของ
   แต่ละตัวตรงๆ (เช่น Luvenn "hollow-boned build", Skyther "เบาผิดปกติ",
   Vorthak "โครงกระดูกทึบตัน") ไว้เป็นตัวคูณ cost ของ action ที่ผูกร่างกาย
   ในอนาคต (ยังไม่มี action ไหนใช้จริงตอนนี้ — เก็บไว้เป็น profile ให้
   ระบบทักษะต่อไปดึงไปใช้ได้ทันทีโดยไม่ต้องนิยามใหม่)

   `organs` คือรายการอวัยวะที่ร่างนั้นมีจริง ใช้คู่กับ `requiresOrgan` ของ
   SKILL_DEFINITIONS — ทักษะที่ "เข้าใจแล้ว" ยังใช้จริงไม่ได้ถ้าร่างปัจจุบันไม่มี
   อวัยวะที่ทักษะนั้นต้องใช้ (ดู skillUsable() ใน data/journey.js) ชื่ออวัยวะต้อง
   สะกดตรงกับ requiresOrgan เป๊ะๆ เพราะเทียบกันด้วย string ตรงๆ

   `recoveryAction` คือวิธีฟื้นฟู AP ตามพฤติกรรมจริงของแต่ละสายพันธุ์
   (in-fiction) แทนการฟื้นตามเวลา — apRestored: 0 = ไม่มีการฟื้นฟูปกติ
================================================================== */

const CREATURE_PROFILES = {
    LUVENN: {
        organs: ["ขาสี่ข้าง"],
        sizeTier: 5, frame: 'light', apMax: 4,
        recoveryAction: {
            label: "กางแผงคอรับแสง", apRestored: 4,
            flavor: "ชูคอขึ้นสุด กางแผงรับแสงออกเต็มวง ดูดซับแสงที่กระจายผ่านหมอกจนอิ่มเต็มที่"
        }
    },
    KARVOS: {
        organs: ["ขาสี่ข้าง", "ขาสี่ข้างสำหรับวิ่งไล่ระยะไกล"],
        sizeTier: 4, frame: 'normal', apMax: 3,
        recoveryAction: {
            label: "ซุ่มนิ่งสะสมแรง", apRestored: 2,
            flavor: "หมอบนิ่งในโคลนเย็น ปล่อยให้จังหวะหัวใจช้าลงทีละนิดจนกล้ามเนื้อคลายตัวเต็มที่"
        }
    },
    VORTHAK: {
        organs: ["ขาสี่ข้าง"],
        sizeTier: 6, frame: 'heavy', apMax: 5,
        recoveryAction: {
            label: "กินซากเหยื่อ", apRestored: 5,
            flavor: "ฉีกกินซากที่เพิ่งล้มจนอิ่ม — ต้องล่าสำเร็จก่อนเท่านั้นถึงจะฟื้นฟูได้เต็มที่"
        }
    },
    SKYTHER: {
        organs: ["ปีก"],
        sizeTier: 5, frame: 'light', apMax: 4,
        recoveryAction: {
            label: "ร่อนลมร้อน", apRestored: 2,
            flavor: "กางปีกลอยตามกระแสลมร้อนที่ลอยขึ้นจากหมอกเบื้องล่างโดยแทบไม่กระพือปีก"
        }
    },
    FROSTMANE: {
        organs: ["ขาสี่ข้าง"],
        sizeTier: 5, frame: 'heavy', apMax: 4,
        recoveryAction: {
            label: "รวมฝูงหนีหนาว", apRestored: 2,
            flavor: "เบียดตัวเข้ากับฝูงในโพรงน้ำแข็ง ไอความอุ่นจากตัวข้างเคียงช่วยให้กล้ามเนื้อคลายลง"
        }
    },
    THRENDLE: {
        organs: ["ขาสี่ข้าง"],
        sizeTier: 6, frame: 'normal', apMax: 5,
        recoveryAction: {
            label: "ฝังตัวรอน้ำลง", apRestored: 5,
            flavor: "ฝังตัวลึกในโคลนเย็นของทุ่งสันทรายจนน้ำขึ้นรอบถัดไป"
        }
    },
    PALLOWFIN: {
        organs: ["ครีบ"],
        sizeTier: 3, frame: 'light', apMax: 3,
        recoveryAction: {
            label: "ว่ายรวมฝูง", apRestored: 1,
            flavor: "แทรกตัวกลับเข้ากลางฝูง กระแสน้ำที่ตัวอื่นสร้างช่วยผ่อนแรงว่าย"
        }
    },
    DUNKRELL: {
        organs: ["ขาสี่ข้าง"],
        sizeTier: 4, frame: 'heavy', apMax: 3,
        recoveryAction: {
            label: "พรางนิ่งกินซาก", apRestored: 1,
            flavor: "หยุดนิ่งเป็นท่อนไม้ผุ ค่อยๆ ย่อยเศษซากรอบตัวไปทีละนิด"
        }
    },
    MISTCRAWLER: {
        organs: ["ขาปล้อง"],
        sizeTier: 2, frame: 'light', apMax: 2,
        recoveryAction: {
            label: "พักในใย", apRestored: 2,
            flavor: "หลบเข้าไปในซอกใยที่ขึงไว้ นิ่งจนแยกไม่ออกจากเปลือกไม้"
        }
    },
    GLIMMERWING: {
        organs: ["ปีก"],
        sizeTier: 1, frame: 'light', apMax: 2,
        recoveryAction: {
            label: "ซิงค์แสงกับฝูง", apRestored: 1,
            flavor: "กะพริบแสงพร้อมจังหวะกับฝูงรอบตัว จนพลังงานไหลกลับมาเท่าๆ กันทั้งกลุ่ม"
        }
    },
    KORRUNE: {
        organs: ["ขาสี่ข้าง"],
        sizeTier: 6, frame: 'normal', apMax: 5,
        recoveryAction: {
            label: "หายเข้าไปในหมอก", apRestored: 0,
            flavor: "แทบไม่มีใครเคยเห็นมันหยุดพัก — ไม่มีการฟื้นฟู AP ตามปกติ"
        }
    },
    CINDERGRUB: {
        organs: ["ขาปล้อง"],
        sizeTier: 1, frame: 'normal', apMax: 2,
        recoveryAction: {
            label: "ดูดแร่ธาตุจากปล่อง", apRestored: 2,
            flavor: "เกาะนิ่งข้างปล่องความร้อน ดูดซับแร่ธาตุและแก๊สจากไอน้ำพุร้อน"
        }
    },
    THESSEK: {
        organs: ["ขาสี่ข้าง", "กรงเล็บขุด"],
        sizeTier: 4, frame: 'normal', apMax: 3,
        recoveryAction: {
            label: "ขุดโพรงพัก", apRestored: 2,
            flavor: "ขุดโพรงตื้นซุ่มพักตัว รอจนแรงขาที่ใช้ขุดกลับมาเต็มที่"
        }
    },
    VELLITH: {
        organs: [],
        sizeTier: 2, frame: 'light', apMax: 2,
        recoveryAction: {
            label: "ลอยนิ่งตามลม", apRestored: 1,
            flavor: "ปล่อยให้ถุงแก๊สพยุงไว้เฉยๆ ไม่ต้านลม ไม่บังคับทิศ จนแรงกลับมาทีละน้อย"
        }
    },
    OZGRUN: {
        organs: ["ขาสี่ข้าง", "กรงเล็บขุด"],
        sizeTier: 4, frame: 'heavy', apMax: 3,
        recoveryAction: {
            label: "ขุดรากไม้กิน", apRestored: 2,
            flavor: "ใช้กรงเล็บขุดรากอวบน้ำใต้โคนไม้ใหญ่ กินไปเรื่อยๆ โดยไม่ต้องระวังอะไรมากนักเพราะมีเกราะคุ้มอยู่แล้ว"
        }
    },
    LUMENVEIL: {
        organs: [],
        sizeTier: 2, frame: 'light', apMax: 2,
        recoveryAction: {
            label: "อาบแสงจนถุงเต่ง", apRestored: 2,
            flavor: "แผ่ผืนเยื่อรับแสงที่ลอดผ่านหมอกลงมาจนถุงใต้ผิวนูนเต็มทุกถุง"
        }
    },
    SEVRIN: {
        organs: ["แผ่นหนังร่อน"],
        sizeTier: 1, frame: 'light', apMax: 2,
        recoveryAction: {
            label: "หลบในโพรงไม้", apRestored: 1,
            flavor: "มุดเข้าโพรงไม้แคบๆ ที่ตัวใหญ่กว่านี้เข้าไม่ได้ แล้วนิ่งรอจนฟ้ามืดอีกครั้ง"
        }
    },
    PALEGRIM: {
        organs: ["ขาสี่ข้าง"],
        sizeTier: 2, frame: 'light', apMax: 2,
        recoveryAction: {
            label: "แทะซากที่เหลือ", apRestored: 2,
            flavor: "รอจนแน่ใจว่าเจ้าของซากไปไกลจริงแล้ว ค่อยเข้าไปแทะส่วนที่เหลือติดกระดูก"
        }
    },
    VASHLI: {
        organs: ["ขาปีนป่าย"],
        sizeTier: 3, frame: 'light', apMax: 3,
        recoveryAction: {
            label: "ห้อยหัวพักใต้กิ่ง", apRestored: 1,
            flavor: "ห้อยหัวลงใต้กิ่งไม้ นิ่งจนขาดใจนึกว่าไม่มีอะไรอยู่ตรงนั้น"
        }
    }
};

/* SKILL_DEFINITIONS — ทักษะที่เรียนรู้ได้ผ่าน action "สังเกต" ระหว่าง
   encounter กับสิ่งมีชีวิตที่มีทักษะนั้น (ดู field `teachesSkill` บน
   รายการ pool ของ step.explore ใน data/journey.js) — obsNeeded อ้างจาก
   Alien Intensity Tier ของสิ่งมีชีวิตที่สอน (ดู rulebook.js): ยิ่ง Tier
   สูง ยิ่งเป็นกลไกที่ไกลจากสัญชาตญาณเดิม ยิ่งต้องสังเกตซ้ำมากขึ้น
     Tier I → 2 ครั้ง · Tier II → 3 ครั้ง · Tier III-IV → 4-5 ครั้ง
   ทักษะที่เข้าใจแล้ว (learned) ยังต้องมี organ รองรับในร่างปัจจุบันด้วย
   ถึงจะใช้งานจริงได้ — เป็นความเข้าใจที่ส่งผ่านข้ามร่างได้ (เหมือน
   "จังหวะการเคลื่อนไหว" ใน data/memoryMechanics.js) แต่ไม่ใช่ organ */
const SKILL_DEFINITIONS = {
    FLIGHT: {
        name: "การบิน (Flight)", // ใช้ตอน "รู้แล้ว" เท่านั้น (dev/debug และหลัง learned) — ห้ามโชว์ตอนยังไม่ครบ เพราะ Confluence เองก็ยังไม่รู้ว่าสิ่งที่กำลังสังเกตอยู่คืออะไร
        progressLabel: "พยายามทำความเข้าใจรูปแบบการเคลื่อนไหวบางอย่าง",
        requiresOrgan: "ปีก",
        obsNeeded: 6, // Skyther สอน — Alien Intensity Tier II (base 3) ×2 ตามที่ปรับความยากขึ้น
        learnedLabel: "เรียนรู้การบิน"
    },
    PACK_HUNT: {
        name: "การล่าเป็นฝูง (Pack Hunt)", // Karvos สอน — ต้องสังเกตซ้ำหลายครั้งระหว่างบินตามฝูงใน Ch.2
        progressLabel: "พยายามทำความเข้าใจจังหวะการประสานงานบางอย่างระหว่างพวกมัน",
        requiresOrgan: "ขาสี่ข้างสำหรับวิ่งไล่ระยะไกล", // ร่าง Skyther (2 ขา+ปีก+แขน) ไม่มีอวัยวะนี้ — เก็บความเข้าใจไว้ก่อน ใช้ไม่ได้จนกว่าจะสวมร่างที่มีขาแบบนี้
        obsNeeded: 5, // Karvos เป็น Alien Intensity Tier III (ล่าฝูงประสานงาน ไม่ใช่แค่ไล่เดี่ยว)
        learnedLabel: "เข้าใจการล่าเป็นฝูง"
    }
};
