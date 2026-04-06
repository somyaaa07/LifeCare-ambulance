"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, UserCheck, ShieldCheck, Banknote, Smartphone, Moon } from "lucide-react";

const BLUE = "#0d47a1";
const BLUE_DARK = "#0a3880";
const GREEN = "#2e7d32";
const GREEN_LIGHT = "#388e3c";

const reasons = [
  { Icon: Zap, title: "5-Minute Response", desc: "Our GPS-enabled dispatch ensures the nearest ambulance reaches you within minutes.", accent: BLUE },
  { Icon: UserCheck, title: "Expert Paramedics", desc: "All staff are certified EMTs and paramedics trained for advanced life support.", accent: GREEN },
  { Icon: ShieldCheck, title: "Fully Equipped", desc: "Every ambulance carries AED, ventilators, oxygen, and advanced medical gear.", accent: BLUE },
  { Icon: Banknote, title: "Affordable Rates", desc: "Transparent pricing with no hidden charges. Insurance accepted.", accent: GREEN },
  { Icon: Smartphone, title: "Live Tracking", desc: "Track your ambulance in real-time via our app or SMS updates.", accent: BLUE },
  { Icon: Moon, title: "24/7 Available", desc: "Day or night, we are always ready. Our helpline never sleeps.", accent: GREEN },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: (i) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="why" ref={ref}
      style={{ padding: "100px 0", background: "#fff", fontFamily: "'Jost', sans-serif", overflow: "hidden", position: "relative" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Marcellus&family=Jost:wght@300;400;500;600;700&display=swap');

        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .why-cta-bar {
          margin-top: 56px;
          background: linear-gradient(135deg, #0d47a1, #0a3880);
          border-radius: 28px;
          padding: 40px 48px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          position: relative;
          overflow: hidden;
        }

        .why-cta-buttons {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        @media (max-width: 1024px) {
          .why-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .why-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          #why {
            padding: 60px 0 !important;
          }
          .why-cta-bar {
            padding: 28px 24px;
            border-radius: 20px;
            flex-direction: column;
            align-items: flex-start;
          }
          .why-cta-buttons {
            width: 100%;
          }
          .why-cta-buttons a {
            flex: 1;
            justify-content: center;
          }
        }

        @media (max-width: 400px) {
          .why-cta-buttons {
            flex-direction: column;
          }
          .why-cta-buttons a {
            text-align: center;
          }
        }
      `}</style>

      {/* Decorative bg text */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        fontFamily: "'Marcellus', serif",
        fontSize: "clamp(80px, 14vw, 160px)",
        color: `${BLUE}04`, pointerEvents: "none",
        whiteSpace: "nowrap", userSelect: "none",
        zIndex: 0, letterSpacing: "-0.04em",
      }}>
        AmbulaCare
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div style={{ textAlign: "center", marginBottom: 72 }}
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span style={{ color: GREEN, fontWeight: 600, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.18em", display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
            <span style={{ display: "inline-block", width: 28, height: 1.5, background: GREEN }} />
            Our Strengths
            <span style={{ display: "inline-block", width: 28, height: 1.5, background: GREEN }} />
          </span>
          <h2 style={{ fontFamily: "'Marcellus', serif", fontWeight: 400, fontSize: "clamp(2rem, 4vw, 3rem)", color: BLUE, margin: "16px 0 16px", letterSpacing: "-0.01em" }}>
            Why Choose Us?
          </h2>
          <p style={{ color: "#6b7280", maxWidth: 440, margin: "0 auto", lineHeight: 1.8, fontWeight: 300, fontSize: 16 }}>
            When every second counts, trust AmbulaCare to deliver.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div className="why-grid" initial="hidden" animate={inView ? "show" : "hidden"}>
          {reasons.map((reason, i) => (
            <ReasonCard key={reason.title} {...reason} index={i} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="why-cta-bar"
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <div style={{ position: "relative", zIndex: 1 }}>
            <p style={{ fontFamily: "'Marcellus', serif", fontWeight: 400, fontSize: "clamp(1.2rem, 2.5vw, 1.75rem)", color: "#fff", margin: "0 0 6px" }}>
              Ready to experience the difference?
            </p>
            <p style={{ color: "rgba(255,255,255,0.65)", fontWeight: 300, fontSize: 15, margin: 0 }}>
              Available round the clock — call us or book online.
            </p>
          </div>
          <div className="why-cta-buttons" style={{ position: "relative", zIndex: 1 }}>
            <motion.a href="tel:108" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "white", color: BLUE_DARK,
                fontFamily: "'Jost', sans-serif", fontWeight: 700, fontSize: 15,
                padding: "13px 28px", borderRadius: 999, textDecoration: "none", letterSpacing: "0.02em",
              }}
            >
              📞 Call 9990083014
            </motion.a>
            <motion.a href="#services" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(255,255,255,0.12)", color: "#fff",
                fontFamily: "'Jost', sans-serif", fontWeight: 600, fontSize: 15,
                padding: "13px 28px", borderRadius: 999, textDecoration: "none",
                border: "1.5px solid rgba(255,255,255,0.3)",
              }}
            >
              View Services
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ReasonCard({ Icon, title, desc, accent, index }) {
  return (
    <motion.div
      variants={cardVariant}
      custom={index}
      whileHover={{ y: -6, boxShadow: `0 20px 48px ${accent}14` }}
      style={{
        background: "#fff", borderRadius: 22, border: "1px solid #e8edf5",
        padding: "28px 28px", display: "flex", gap: 20, alignItems: "flex-start",
        cursor: "default", transition: "box-shadow 0.3s",
        position: "relative", overflow: "hidden",
      }}
    >
      <motion.div
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 3,
          background: `linear-gradient(90deg, ${accent}, ${accent}80)`,
          transformOrigin: "left", borderRadius: "2px 2px 0 0",
        }}
        transition={{ duration: 0.35 }}
      />
      <div style={{
        width: 52, height: 52, borderRadius: 15, flexShrink: 0,
        background: `${accent}10`, border: `1px solid ${accent}20`,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <Icon size={20} color={accent} strokeWidth={1.8} />
      </div>
      <div style={{ flex: 1 }}>
        <h3 style={{ fontFamily: "'Jost', sans-serif", fontWeight: 700, fontSize: 15.5, color: "#111827", margin: "0 0 8px", letterSpacing: "0.01em" }}>
          {title}
        </h3>
        <p style={{ fontFamily: "'Jost', sans-serif", color: "#6b7280", fontSize: 13.5, lineHeight: 1.8, margin: 0, fontWeight: 300 }}>
          {desc}
        </p>
      </div>
    </motion.div>
  );
}