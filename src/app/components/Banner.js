"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Clock, Users, Truck, Zap, ChevronRight, Heart, Shield, Activity, MapPin, MoveRight } from "lucide-react";

const BLUE = "#0d47a1";
const BLUE_DARK = "#0a3880";
const BLUE_MID = "#1565c0";
const BLUE_PALE = "#e3eaf7";
const GREEN = "#2e7d32";
const GREEN_LIGHT = "#388e3c";
const WHITE = "#ffffff";

const SLIDES = [
  {
    url: "https://images.pexels.com/photos/15571631/pexels-photo-15571631.jpeg",
    eyebrow: "Rapid Emergency Response",
    headline: ["Fast &", "Reliable"],
    accent: "Ambulance",
    sub: "Reaching you within 5 minutes",
  },
  {
    url: "https://images.pexels.com/photos/3584101/pexels-photo-3584101.jpeg",
    eyebrow: "Expert Medical Care",
    headline: ["Certified", "Paramedics"],
    accent: "On Every Call",
    sub: "Trained for advanced life support",
  },
  {
    url: "https://images.pexels.com/photos/9391904/pexels-photo-9391904.jpeg",
    eyebrow: "Advanced Life Support",
    headline: ["State-of-the-Art", "Equipment"],
    accent: "On Board",
    sub: "ICU-grade tools in every vehicle",
  },
];

const STATS = [
  { value: "10K+", label: "Patients Served", Icon: Users },
  { value: "24/7", label: "Always Available", Icon: Clock },
  { value: "50+", label: "Fleet Size", Icon: Truck },
  { value: "<5min", label: "Response Time", Icon: Zap },
];

const SERVICES = [
  { Icon: Heart, text: "Cardiac Emergency" },
  { Icon: Activity, text: "ICU Transport" },
  { Icon: Shield, text: "Neonatal Care" },
  { Icon: MapPin, text: "City-wide Coverage" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.72, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.3 } },
};

export default function Banner() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setCurrent(p => (p + 1) % SLIDES.length), 5800);
  };

  useEffect(() => { resetTimer(); return () => clearInterval(timerRef.current); }, []);

  const goTo = (i) => { setCurrent(i); resetTimer(); };
  const slide = SLIDES[current];

  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", overflow: "hidden", marginTop: -40, fontFamily: "'Jost', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Marcellus&family=Jost:wght@300;400;500;600;700&display=swap');

        @keyframes pulseRed {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(2.5); opacity: 0; }
        }

        .banner-content {
          position: relative;
          z-index: 10;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          padding: 64px 32px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 48px;
        }

        .banner-left {
          flex: 1;
          min-width: 280px;
          color: white;
        }

        .banner-right {
          flex: 0 0 360px;
          max-width: 380px;
        }

        .banner-headline {
          font-family: 'Marcellus', serif;
          font-weight: 400;
          font-size: clamp(2.4rem, 6vw, 5rem);
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: white;
          margin: 0;
        }

        .banner-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 44px;
        }

        .banner-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }

        .stat-row {
          transition: background 0.25s;
        }
        .stat-row:not(:last-child) { border-bottom: 1px solid rgba(255,255,255,0.07); }
        .stat-row:hover { background: rgba(255,255,255,0.04); }
        .stat-row:hover .stat-val { color: ${GREEN_LIGHT}; }
        .stat-val { transition: color 0.3s; }

        @media (max-width: 900px) {
          .banner-content {
            padding: 80px 24px 48px;
            flex-direction: column;
            gap: 32px;
          }
          .banner-right {
            flex: none;
            width: 100%;
            max-width: 100%;
          }
        }

        @media (max-width: 600px) {
          .banner-content {
            padding: 60px 16px 40px;
          }
          .banner-pills {
            gap: 8px;
            margin-bottom: 32px;
          }
          .banner-ctas {
            gap: 12px;
          }
          .banner-cta-primary {
            font-size: 13px !important;
            padding: 12px 22px !important;
          }
          .banner-cta-secondary {
            font-size: 13px !important;
            padding: 12px 22px !important;
          }
          .stat-val-text {
            font-size: 28px !important;
          }
        }

        @media (max-width: 400px) {
          .banner-headline {
            font-size: 2rem !important;
          }
        }
      `}</style>

      {/* BG Slideshow */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          style={{
            position: "absolute", inset: 0, zIndex: 0,
            backgroundImage: `url(${slide.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ opacity: 0, scale: 1.07 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
      </AnimatePresence>

      <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "rgba(0,0,0,0.72)" }} />

      <div className="banner-content">
        {/* LEFT */}
        <div className="banner-left">
          {/* Live badge */}
          <motion.div variants={fadeUp} custom={0} initial="hidden" animate="show" style={{ marginBottom: 28 }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "rgba(255,255,255,0.08)", backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.18)", borderRadius: 999,
              padding: "8px 18px", fontFamily: "'Jost', sans-serif",
              fontWeight: 500, fontSize: 13, color: WHITE, letterSpacing: "0.04em",
            }}>
              <span style={{ position: "relative", display: "flex", width: 8, height: 8 }}>
                <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#ef5350", animation: "pulseRed 1.8s infinite" }} />
                <span style={{ position: "relative", borderRadius: "50%", background: "#ef5350", width: 8, height: 8, display: "block" }} />
              </span>
              24 / 7 Emergency Services Active
            </span>
          </motion.div>

          {/* Eyebrow */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`eyebrow-${current}`}
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                fontFamily: "'Jost', sans-serif", fontWeight: 600, fontSize: 12,
                textTransform: "uppercase", letterSpacing: "0.22em",
                color: GREEN_LIGHT, margin: "0 0 16px",
                display: "flex", alignItems: "center", gap: 10,
              }}
            >
              <span style={{ display: "inline-block", width: 28, height: 1.5, background: GREEN_LIGHT }} />
              {slide.eyebrow}
            </motion.p>
          </AnimatePresence>

          {/* Headline */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`headline-${current}`}
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{ marginBottom: 18 }}
            >
              <h1 className="banner-headline">
                {slide.headline[0]}<br />{slide.headline[1]}
              </h1>
              <h1 className="banner-headline" style={{ opacity: 0.92 }}>{slide.accent}</h1>
            </motion.div>
          </AnimatePresence>

          {/* Service pills */}
          <motion.div variants={stagger} initial="hidden" animate="show" className="banner-pills">
            {SERVICES.map(({ Icon, text }) => (
              <motion.div key={text} variants={fadeUp}
                whileHover={{ scale: 1.06, y: -2 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 7,
                  background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)",
                  backdropFilter: "blur(10px)", borderRadius: 999, padding: "7px 16px",
                  fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: 13,
                  color: "rgba(255,255,255,0.88)", cursor: "default", letterSpacing: "0.02em",
                }}
              >
                <Icon size={13} strokeWidth={2} />
                {text}
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={fadeUp} custom={5} initial="hidden" animate="show" className="banner-ctas">
            <motion.a href="tel:108"
              whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
              className="banner-cta-primary"
              style={{
                display: "inline-flex", alignItems: "center", gap: 11,
                background: WHITE, color: BLUE_DARK,
                fontFamily: "'Jost', sans-serif", fontWeight: 700, fontSize: 15,
                padding: "15px 32px", borderRadius: 999, textDecoration: "none",
                boxShadow: "0 12px 36px rgba(255,255,255,0.18)", letterSpacing: "0.04em",
              }}
            >
              <Phone size={17} strokeWidth={2.5} />
              Call Now — 9990083014
            </motion.a>
            <motion.a href="#services"
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              className="banner-cta-secondary"
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: "rgba(255,255,255,0.07)", color: WHITE,
                fontFamily: "'Jost', sans-serif", fontWeight: 500, fontSize: 15,
                padding: "15px 32px", borderRadius: 999, textDecoration: "none",
                border: "1.5px solid rgba(255,255,255,0.28)", backdropFilter: "blur(10px)", letterSpacing: "0.04em",
              }}
            >
              Our Services
              <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
                <MoveRight size={17} strokeWidth={2} />
              </motion.span>
            </motion.a>
          </motion.div>
        </div>

        {/* RIGHT: Stats Panel */}
        <motion.div
          className="banner-right"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: "rgba(0,0,0,0.60)", backdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20,
            overflow: "hidden", position: "relative",
          }}
        >
          <div style={{ height: 3, background: `linear-gradient(90deg, ${BLUE_MID}, ${GREEN_LIGHT}, transparent)` }} />

          <div style={{
            padding: "20px 26px 16px", borderBottom: "1px solid rgba(255,255,255,0.07)",
            display: "flex", alignItems: "center", justifyContent: "space-between",
          }}>
            <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 600, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.22em", color: "rgba(255,255,255,0.38)", margin: 0 }}>
              By The Numbers
            </p>
            <span style={{
              fontFamily: "'Jost', sans-serif", fontWeight: 600, fontSize: 10,
              textTransform: "uppercase", letterSpacing: "0.14em", color: GREEN_LIGHT,
              background: `${GREEN}22`, border: `1px solid ${GREEN_LIGHT}44`,
              padding: "3px 10px", borderRadius: 999,
            }}>
              Live
            </span>
          </div>

          {STATS.map(({ value, label, Icon }, i) => (
            <motion.div
              key={label}
              className="stat-row"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              style={{ display: "flex", alignItems: "center", padding: "18px 26px", gap: 16, cursor: "default" }}
            >
              <span style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: 11, color: "rgba(255,255,255,0.2)", letterSpacing: "0.06em", minWidth: 20 }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div style={{
                width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                background: `linear-gradient(135deg, ${BLUE}40, ${GREEN}28)`,
                border: `1px solid ${BLUE_MID}44`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Icon size={16} color={GREEN_LIGHT} strokeWidth={1.8} />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.42)", margin: 0 }}>
                  {label}
                </p>
              </div>
              <p className="stat-val stat-val-text" style={{ fontFamily: "'Marcellus', serif", fontWeight: 400, fontSize: 36, color: WHITE, margin: 0, lineHeight: 1, letterSpacing: "-0.01em", minWidth: 84, textAlign: "right" }}>
                {value}
              </p>
            </motion.div>
          ))}

          {/* Book CTA */}
          <motion.div
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.82 }}
            whileHover={{ backgroundColor: `${GREEN}22` }}
            style={{
              margin: "10px 16px 16px",
              background: `linear-gradient(130deg, ${GREEN}1a 0%, ${BLUE}18 100%)`,
              border: `1px solid ${GREEN_LIGHT}30`,
              borderRadius: 14, padding: "16px 20px",
              display: "flex", alignItems: "center", justifyContent: "space-between",
              cursor: "pointer", transition: "background 0.25s",
              position: "relative", overflow: "hidden",
            }}
          >
            <div>
              <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 700, fontSize: 14, color: WHITE, margin: "0 0 4px", letterSpacing: "0.02em" }}>
                Book a Non-Emergency Ride
              </p>
              <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: 12, color: "rgba(255,255,255,0.45)", margin: 0 }}>
                Schedule in advance
              </p>
            </div>
            <ChevronRight size={22} color={WHITE} />
          </motion.div>

          {/* Slide counter */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px 18px" }}>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              {SLIDES.map((_, i) => (
                <button key={i} onClick={() => goTo(i)} style={{
                  border: "none", cursor: "pointer", padding: 0, borderRadius: 999, height: 4,
                  background: i === current ? WHITE : "rgba(255,255,255,0.28)",
                  transition: "width 0.45s ease, background 0.3s",
                  width: i === current ? 28 : 8,
                }} />
              ))}
            </div>
            <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: 11, color: "rgba(255,255,255,0.35)", margin: 0, letterSpacing: "0.1em" }}>
              {String(current + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}