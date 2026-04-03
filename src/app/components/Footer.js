export default function Footer() {
  const quickLinks = ["Home", "Services", "Ambulance Types", "Why Us", "FAQ", "Contact"];
  const services = ["Emergency Transport", "ICU Ambulance", "Air Ambulance", "Neonatal Care", "Patient Transfer", "Event Standby"];

  return (
    <footer style={{ background: "#0d47a1", color: "#fff", fontFamily: "'Jost', sans-serif", position: "relative", overflow: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Marcellus&family=Jost:wght@300;400;500;600;700&display=swap');

        .footer-link {
          color: rgba(255,255,255,0.60);
          text-decoration: none;
          font-family: 'Jost', sans-serif;
          font-size: 13.5px;
          font-weight: 400;
          letter-spacing: 0.02em;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: color 0.25s, gap 0.25s;
        }
        .footer-link::before {
          content: '';
          display: inline-block;
          width: 0;
          height: 1px;
          background: #ffffff;
          transition: width 0.28s ease;
          flex-shrink: 0;
        }
        .footer-link:hover { color: #fff; gap: 10px; }
        .footer-link:hover::before { width: 14px; }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 13px;
          padding: 11px 0;
          border-bottom: 1px solid rgba(255,255,255,0.10);
          font-size: 13.5px;
          color: rgba(255,255,255,0.60);
          font-weight: 400;
          transition: color 0.2s;
        }
        .contact-item:last-child { border-bottom: none; }
        .contact-item:hover { color: rgba(255,255,255,0.95); }

        .contact-icon {
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.20);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 14px;
        }

        .col-heading {
          font-family: 'Marcellus', serif;
          font-size: 17px;
          font-weight: 400;
          color: #fff;
          margin: 0 0 22px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .col-heading::after {
          content: '';
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, rgba(255,255,255,0.30), transparent);
        }

        .emergency-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #2e7d32;
          border: 1px solid rgba(255,255,255,0.20);
          border-radius: 6px;
          padding: 10px 20px;
          font-family: 'Jost', sans-serif;
          font-weight: 700;
          font-size: 15px;
          color: #fff;
          letter-spacing: 0.04em;
          text-decoration: none;
          transition: background 0.25s, transform 0.2s;
          cursor: pointer;
        }
        .emergency-badge:hover { background: #388e3c; transform: translateY(-2px); }

        .social-btn {
          width: 34px; height: 34px; border-radius: 8px;
          background: rgba(255,255,255,0.10);
          border: 1px solid rgba(255,255,255,0.18);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.55);
          font-size: 13px;
          text-decoration: none;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
        }
        .social-btn:hover {
          background: rgba(255,255,255,0.22);
          color: #fff;
          border-color: rgba(255,255,255,0.40);
        }

        .bottom-link {
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          font-size: 12px;
          transition: color 0.2s;
        }
        .bottom-link:hover { color: #fff; }

        @keyframes scrollX {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .footer-grid {
          max-width: 1200px;
          margin: 0 auto;
          padding: 64px 36px 52px;
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
          gap: 48px 40px;
        }

        .footer-bottom {
          max-width: 1200px;
          margin: 0 auto;
          padding: 18px 36px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .footer-bottom-links {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px 32px;
          }
        }

        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 36px;
            padding: 48px 24px 40px;
          }
          .footer-bottom {
            padding: 16px 24px;
            flex-direction: column;
            align-items: flex-start;
          }
          .footer-bottom-links {
            gap: 16px;
          }
          .footer-ticker {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .footer-bottom-links {
            flex-wrap: wrap;
            gap: 10px 16px;
          }
        }
      `}</style>

      {/* Top green accent line */}
      <div style={{ height: 3, background: "linear-gradient(90deg, #2e7d32, #388e3c, rgba(255,255,255,0.15), transparent)" }} />

      {/* Scrolling ticker */}
      <div className="footer-ticker" style={{
        borderBottom: "1px solid rgba(255,255,255,0.10)",
        overflow: "hidden", padding: "10px 0",
        background: "rgba(0,0,0,0.12)",
      }}>
        <div style={{ display: "flex", whiteSpace: "nowrap", animation: "scrollX 26s linear infinite" }}>
          {[...Array(2)].map((_, p) => (
            <span key={p} style={{ display: "inline-flex" }}>
              {["🚑 24/7 Emergency Response", "🏥 50+ Ambulances On Standby", "💚 10,000+ Lives Saved", "📍 City-wide Coverage", "✅ Certified Paramedics", "⚡ Response Under 5 Min"].map((t, i) => (
                <span key={i} style={{
                  padding: "0 36px",
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 500, fontSize: 12,
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  color: "rgba(255,255,255,0.45)",
                }}>
                  {t}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Main grid */}
      <div className="footer-grid">
        {/* Brand column */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <img src="/logo-footer.png" alt="footer-logo" style={{ height: 80, width: "auto", maxWidth: 160 }} />
          </div>
          <p style={{
            fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: 13.5,
            color: "rgba(255,255,255,0.60)", lineHeight: 1.8, margin: "0 0 28px", maxWidth: 230,
          }}>
            Fast, reliable, and compassionate emergency medical services — 24/7, always by your side.
          </p>
          <p style={{
            fontFamily: "'Jost', sans-serif", fontWeight: 500, fontSize: 11,
            textTransform: "uppercase", letterSpacing: "0.18em",
            color: "rgba(255,255,255,0.45)", marginBottom: 10,
          }}>
            Emergency Hotline
          </p>
          <a href="tel:108" className="emergency-badge">
            <span style={{ fontSize: 16 }}>📞</span>
            Call 108 — Free
          </a>
          <div style={{ height: 1, background: "rgba(255,255,255,0.14)", margin: "28px 0 22px" }} />
          <div style={{ display: "flex", gap: 10 }}>
            {["𝕏", "in", "f", "▶"].map((s, i) => (
              <a key={i} href="#" className="social-btn">{s}</a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="col-heading">Quick Links</h4>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 13 }}>
            {quickLinks.map(link => (
              <li key={link}><a href="#" className="footer-link">{link}</a></li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="col-heading">Our Services</h4>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 13 }}>
            {services.map(s => (
              <li key={s}><a href="#" className="footer-link">{s}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="col-heading">Contact Us</h4>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {[
              { icon: "📞", label: "Emergency", value: "108", strong: true },
              { icon: "📞", label: "Helpline", value: "+91-98765-43210" },
              { icon: "✉️", label: "Email", value: "help@ambulacare.com" },
              { icon: "📍", label: "Address", value: "123 Medical Lane, New Delhi" },
            ].map(({ icon, label, value, strong }) => (
              <div key={label} className="contact-item">
                <div className="contact-icon">{icon}</div>
                <div>
                  <div style={{
                    fontFamily: "'Jost', sans-serif", fontWeight: 500, fontSize: 10,
                    textTransform: "uppercase", letterSpacing: "0.16em",
                    color: "rgba(255,255,255,0.40)", marginBottom: 2,
                  }}>
                    {label}
                  </div>
                  <div style={{
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: strong ? 700 : 400, fontSize: 13.5,
                    color: strong ? "#fff" : "rgba(255,255,255,0.65)",
                  }}>
                    {value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}>
        <div className="footer-bottom">
          <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: 12, color: "rgba(255,255,255,0.42)", margin: 0 }}>
            © 2025 AmbulaCare. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(l => (
              <a key={l} href="#" className="bottom-link">{l}</a>
            ))}
          </div>
        </div>
      </div>

      {/* BG decoration circles */}
      <div style={{ position: "absolute", bottom: -100, left: -100, width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,0,0,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: -60, right: -60, width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle, rgba(46,125,50,0.18) 0%, transparent 70%)", pointerEvents: "none" }} />
    </footer>
  );
}