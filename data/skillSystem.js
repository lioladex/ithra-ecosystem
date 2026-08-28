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

   `recoveryAction` คือวิธีฟื้นฟู AP ตามพฤติกรรมจริงของแต่ละสายพันธุ์
   (in-fiction) แทนการฟื้นตามเวลา — apRestored: 0 = ไม่มีการฟื้นฟูปกติ
================================================================== */

const CREATURE_PROFILES = {
    LUVENN: {
        sizeTier: 5, frame: 'light', apMax: 4,
        recoveryAction: {
            label: "กางแผงคอรับแสง", apRestored: 4,
            flavor: "ชูคอขึ้นสุด กางแผงรับแสงออกเต็มวง ดูดซับแสงที่กระจายผ่านหมอกจนอิ่มเต็มที่"
        }
    },
    KARVOS: {
        sizeTier: 4, frame: 'normal', apMax: 3,
        recoveryAction: {
            label: "ซุ่มนิ่งสะสมแรง", apRestored: 2,
            flavor: "หมอบนิ่งในโคลนเย็น ปล่อยให้จังหวะหัวใจช้าลงทีละนิดจนกล้ามเนื้อคลายตัวเต็มที่"
        }
    },
    VORTHAK: {
        sizeTier: 6, frame: 'heavy', apMax: 5,
        recoveryAction: {
            label: "กินซากเหยื่อ", apRestored: 5,
            flavor: "ฉีกกินซากที่เพิ่งล้มจนอิ่ม — ต้องล่าสำเร็จก่อนเท่านั้นถึงจะฟื้นฟูได้เต็มที่"
        }
    },
    SKYTHER: {
        sizeTier: 5, frame: 'light', apMax: 4,
        recoveryAction: {
            label: "ร่อนลมร้อน", apRestored: 2,
            flavor: "กางปีกลอยตามกระแสลมร้อนที่ลอยขึ้นจากหมอกเบื้องล่างโดยแทบไม่กระพือปีก"
        }
    },
    FROSTMANE: {
        sizeTier: 5, frame: 'heavy', apMax: 4,
        recoveryAction: {
            label: "รวมฝูงหนีหนาว", apRestored: 2,
            flavor: "เบียดตัวเข้ากับฝูงในโพรงน้ำแข็ง ไอความอุ่นจากตัวข้างเคียงช่วยให้กล้ามเนื้อคลายลง"
        }
    },
    THRENDLE: {
        sizeTier: 6, frame: 'normal', apMax: 5,
        recoveryAction: {
            label: "ฝังตัวรอน้ำลง", apRestored: 5,
            flavor: "ฝังตัวลึกในโคลนเย็นของทุ่งสันทรายจนน้ำขึ้นรอบถัดไป"
        }
    },
    PALLOWFIN: {
        sizeTier: 3, frame: 'light', apMax: 3,
        recoveryAction: {
            label: "ว่ายรวมฝูง", apRestored: 1,
            flavor: "แทรกตัวกลับเข้ากลางฝูง กระแสน้ำที่ตัวอื่นสร้างช่วยผ่อนแรงว่าย"
        }
    },
    DUNKRELL: {
        sizeTier: 4, frame: 'heavy', apMax: 3,
        recoveryAction: {
            label: "พรางนิ่งกินซาก", apRestored: 1,
            flavor: "หยุดนิ่งเป็นท่อนไม้ผุ ค่อยๆ ย่อยเศษซากรอบตัวไปทีละนิด"
        }
    },
    MISTCRAWLER: {
        sizeTier: 2, frame: 'light', apMax: 2,
        recoveryAction: {
            label: "พักในใย", apRestored: 2,
            flavor: "หลบเข้าไปในซอกใยที่ขึงไว้ นิ่งจนแยกไม่ออกจากเปลือกไม้"
        }
    },
    GLIMMERWING: {
        sizeTier: 1, frame: 'light', apMax: 2,
        recoveryAction: {
            label: "ซิงค์แสงกับฝูง", apRestored: 1,
            flavor: "กะพริบแสงพร้อมจังหวะกับฝูงรอบตัว จนพลังงานไหลกลับมาเท่าๆ กันทั้งกลุ่ม"
        }
    },
    KORRUNE: {
        sizeTier: 6, frame: 'normal', apMax: 5,
        recoveryAction: {
            label: "หายเข้าไปในหมอก", apRestored: 0,
            flavor: "แทบไม่มีใครเคยเห็นมันหยุดพัก — ไม่มีการฟื้นฟู AP ตามปกติ"
        }
    },
    CINDERGRUB: {
        sizeTier: 1, frame: 'normal', apMax: 2,
        recoveryAction: {
            label: "ดูดแร่ธาตุจากปล่อง", apRestored: 2,
            flavor: "เกาะนิ่งข้างปล่องความร้อน ดูดซับแร่ธาตุและแก๊สจากไอน้ำพุร้อน"
        }
    },
    THESSEK: {
        sizeTier: 4, frame: 'normal', apMax: 3,
        recoveryAction: {
            label: "ขุดโพรงพัก", apRestored: 2,
            flavor: "ขุดโพรงตื้นซุ่มพักตัว รอจนแรงขาที่ใช้ขุดกลับมาเต็มที่"
        }
    },
    VASHLI: {
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
    }
};
