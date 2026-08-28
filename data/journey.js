/* =================================================================
   JOURNEY OF CONFLUENCE (SYS-SIM)
   โหลดเข้า container ผ่าน JS (ดู index.html initContentSections())
================================================================= */
const JOURNEY_HTML = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 50vh; text-align: center; border: 1px dashed rgba(56, 189, 248, 0.3); border-radius: 8px; background: rgba(0,0,0,0.4); position: relative; overflow: hidden;">
                <div class="scan-line" style="height: 100%; top: -100%; animation: scanline 6s linear infinite; opacity: 0.1;"></div>
                
                <div class="card-icon" style="font-size: 4rem; color: #4a5568; margin-bottom: 20px; animation: pulse 3s infinite;">◬</div>
                <h3 class="font-hud" style="color: #94a3b8; letter-spacing: 5px; font-size: 1.5rem;">MODULE OFFLINE</h3>
                <p style="color: #64748b; max-width: 400px; margin-top: 15px; line-height: 1.6;">
                    ระบบจำลองสถานการณ์ตื่นรู้ (Visual Novel Interface) กำลังอยู่ในระหว่างการพัฒนา.<br><br>
                    <span style="color: var(--accent-default); font-family: 'Rajdhani', sans-serif; font-weight: bold; letter-spacing: 1px;">AWAITING NARRATIVE INPUT...</span>
                </p>
            </div>
`;
