"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const BLUE = "#0d47a1";
const BLUE_DARK = "#0a3880";
const GREEN = "#2e7d32";
const YELLOW = "#fdd835";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] },
  }),
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const STATS = [
  { value: "14+", label: "Years of Service", color: BLUE },
  { value: "100%", label: "Certified Staff", color: GREEN },
  { value: "10K+", label: "Lives Saved", color: BLUE },
];

export default function Welcome() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="welcome" ref={ref} style={{ padding: "100px 0", background: "#fff", overflow: "hidden", fontFamily: "'Jost', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Marcellus&family=Jost:wght@300;400;500;600;700&display=swap');

        .welcome-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 72px;
        }

        .welcome-image-col {
          flex: 0 0 460px;
          position: relative;
          min-width: 280px;
        }

        .welcome-content-col {
          flex: 1;
          min-width: 280px;
        }

        .welcome-stats-grid {
          display: flex;
          gap: 0;
          align-items: stretch;
          background: #f8faff;
          border: 1px solid rgba(13,71,161,0.08);
          border-radius: 20px;
          padding: 28px 32px;
        }

        .welcome-ctas {
          margin-top: 36px;
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        @media (max-width: 1024px) {
          .welcome-image-col {
            flex: 0 0 380px;
          }
          .welcome-wrapper {
            gap: 48px;
          }
        }

        @media (max-width: 860px) {
          .welcome-wrapper {
            flex-direction: column;
            gap: 40px;
            padding: 0 20px;
          }
          .welcome-image-col {
            flex: none;
            width: 100%;
            max-width: 500px;
            margin: 0 auto;
          }
          .welcome-content-col {
            width: 100%;
          }
        }

        @media (max-width: 600px) {
          section#welcome {
            padding: 60px 0 !important;
          }
          .welcome-stats-grid {
            padding: 20px 16px;
            gap: 0;
          }
          .welcome-ctas {
            flex-direction: column;
          }
          .welcome-ctas a {
            text-align: center;
            justify-content: center;
          }
          .welcome-image-height {
            height: 320px !important;
          }
        }

        @media (max-width: 400px) {
          .welcome-stats-grid {
            flex-direction: column;
            gap: 16px;
          }
          .welcome-stats-divider {
            display: none !important;
          }
          .welcome-stat-item {
            flex-direction: row !important;
            gap: 12px;
            align-items: center;
            border-bottom: 1px solid #e5e7eb;
            padding-bottom: 12px;
          }
          .welcome-stat-item:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }
        }
      `}</style>

      <div className="welcome-wrapper">
        {/* LEFT: Image */}
        <motion.div
          className="welcome-image-col"
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Decorative offset block */}
          <div style={{
            position: "absolute", top: 20, left: 20, right: -20, bottom: -20,
            borderRadius: 36,
            background: `linear-gradient(135deg, ${BLUE}12, ${GREEN}12)`,
            border: `1.5px dashed ${BLUE}22`,
            zIndex: 0,
          }} />

          <div className="welcome-image-height" style={{
            position: "relative", zIndex: 1, borderRadius: 32,
            overflow: "hidden", height: 480,
            boxShadow: `0 32px 72px ${BLUE}20`,
          }}>
            <motion.img
              src="https://images.pexels.com/photos/27914821/pexels-photo-27914821.jpeg"
              alt="Ambulance emergency response"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
              initial={{ scale: 1.08 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 45%, rgba(13,71,161,0.6) 100%)", pointerEvents: "none" }} />

            {/* Live badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
              style={{
                position: "absolute", bottom: 24, left: 24, zIndex: 3,
                background: "rgba(255,255,255,0.13)", backdropFilter: "blur(14px)",
                border: "1px solid rgba(255,255,255,0.28)", borderRadius: 16, padding: "12px 18px",
                display: "flex", alignItems: "center", gap: 12,
              }}
            >
              <motion.span
                style={{ width: 10, height: 10, borderRadius: "50%", background: "#4caf50", display: "block", flexShrink: 0 }}
                animate={{ opacity: [1, 0.3, 1], scale: [1, 1.5, 1] }}
                transition={{ duration: 1.6, repeat: Infinity }}
              />
              <div>
                <p style={{ margin: 0, fontFamily: "'Jost', sans-serif", fontWeight: 700, fontSize: 13, color: "#fff", lineHeight: 1 }}>Always Available</p>
                <p style={{ margin: "3px 0 0", fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: 11, color: "rgba(255,255,255,0.65)" }}>24 × 7 Emergency Services</p>
              </div>
            </motion.div>

            {/* Est badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.75 }}
              style={{
                position: "absolute", top: 20, right: 20, zIndex: 3,
                background: YELLOW, borderRadius: 14, padding: "8px 14px",
                display: "flex", flexDirection: "column", alignItems: "center",
              }}
            >
              <span style={{ fontFamily: "'Marcellus', serif", fontSize: 13, color: BLUE_DARK, lineHeight: 1 }}>Est.</span>
              <span style={{ fontFamily: "'Jost', sans-serif", fontWeight: 700, fontSize: 20, color: BLUE_DARK, lineHeight: 1.2 }}>2010</span>
            </motion.div>
          </div>

          {/* Floating stat card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            whileHover={{ y: -4 }}
            style={{
              position: "absolute", bottom: -28, right: -12, zIndex: 4,
              background: BLUE, borderRadius: 20, padding: "18px 24px",
              boxShadow: `0 16px 40px ${BLUE}40`, minWidth: 130, textAlign: "center",
            }}
          >
            <p style={{ fontFamily: "'Marcellus', serif", fontSize: 28, color: "white", margin: 0, lineHeight: 1 }}>50+</p>
            <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: 11, color: "rgba(255,255,255,0.6)", margin: "5px 0 0", textTransform: "uppercase", letterSpacing: "0.08em" }}>Fleet Size</p>
          </motion.div>
        </motion.div>

        {/* RIGHT: Content */}
        <motion.div className="welcome-content-col" variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"}>
          <motion.span variants={fadeUp} custom={0}
            style={{ fontFamily: "'Jost', sans-serif", color: GREEN, fontWeight: 600, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.18em", display: "flex", alignItems: "center", gap: 10 }}
          >
            <span style={{ display: "inline-block", width: 32, height: 1.5, background: GREEN }} />
            Welcome to AmbulaCare
          </motion.span>

          <motion.h2 variants={fadeUp} custom={1}
            style={{ fontFamily: "'Marcellus', serif", fontWeight: 400, fontSize: "clamp(2rem, 4vw, 3rem)", color: BLUE, margin: "18px 0 22px", lineHeight: 1.2, letterSpacing: "-0.01em" }}
          >
            Your Trusted Emergency
            <br /><span style={{ color: GREEN }}>Medical Partner</span>
          </motion.h2>

          <motion.p variants={fadeUp} custom={2} style={{ color: "#4b5563", lineHeight: 1.85, fontSize: 16, marginBottom: 14, fontWeight: 300 }}>
            AmbulaCare has been serving communities with rapid, compassionate emergency medical transport since 2010. Our fleet of modern ambulances and expert paramedics ensure you receive the best care — right from the scene to the hospital.
          </motion.p>
          <motion.p variants={fadeUp} custom={3} style={{ color: "#4b5563", lineHeight: 1.85, fontSize: 16, marginBottom: 44, fontWeight: 300 }}>
            Whether it's a medical emergency, patient transfer, or event medical standby — we are always one call away.
          </motion.p>

          {/* Stats */}
          <motion.div variants={fadeUp} custom={4} className="welcome-stats-grid">
            {STATS.map((s, i) => (
              <>
                <div key={s.label} className="welcome-stat-item" style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
                  <motion.p
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
                    style={{ fontFamily: "'Marcellus', serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: s.color, margin: 0, lineHeight: 1 }}
                  >
                    {s.value}
                  </motion.p>
                  <p style={{ fontFamily: "'Jost', sans-serif", color: "#6b7280", fontSize: 12, margin: "6px 0 0", fontWeight: 400, letterSpacing: "0.03em", textAlign: "center" }}>
                    {s.label}
                  </p>
                </div>
                {i < STATS.length - 1 && (
                  <div key={`d${i}`} className="welcome-stats-divider" style={{ width: 1, background: "#e5e7eb", margin: "0 20px" }} />
                )}
              </>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={fadeUp} custom={5} className="welcome-ctas">
            <motion.a href="tel:108" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: BLUE, color: "#fff",
                fontFamily: "'Jost', sans-serif", fontWeight: 600, fontSize: 15,
                padding: "14px 28px", borderRadius: 999, textDecoration: "none",
                boxShadow: `0 12px 32px ${BLUE}35`,
              }}
            >
              📞 Call 108 — Emergency
            </motion.a>
            <motion.a href="#services" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "transparent", color: BLUE,
                fontFamily: "'Jost', sans-serif", fontWeight: 600, fontSize: 15,
                padding: "14px 28px", borderRadius: 999, textDecoration: "none",
                border: `1.5px solid ${BLUE}40`,
              }}
            >
              Learn More →
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}