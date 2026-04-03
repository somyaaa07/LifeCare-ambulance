"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, ChevronRight } from "lucide-react";

const BLUE = "#0d47a1";
const BLUE_DARK = "#0a3880";
const GREEN = "#2e7d32";
const YELLOW = "#fdd835";

const types = [
  {
    image: "https://images.pexels.com/photos/27914835/pexels-photo-27914835.jpeg",
    title: "Basic Life Support", abbr: "BLS", color: BLUE,
    features: ["Oxygen supply", "First aid equipment", "Trained EMT", "Stretcher & wheelchair"],
    tag: "Most Common",
  },
  {
    image: "https://images.pexels.com/photos/8943080/pexels-photo-8943080.jpeg",
    title: "Advanced Life Support", abbr: "ALS", color: GREEN,
    features: ["Cardiac monitor & AED", "IV medications", "Advanced airway mgmt", "Paramedic onboard"],
    tag: "Critical Care",
  },
  {
    image: "https://images.pexels.com/photos/27671625/pexels-photo-27671625.jpeg",
    title: "Air Ambulance", abbr: "AIR", color: BLUE,
    features: ["Helicopter transport", "ICU-level care inflight", "Long-distance coverage", "Specialist doctors"],
    tag: "Long Distance",
  },
  {
    image: "https://images.pexels.com/photos/34104793/pexels-photo-34104793.jpeg",
    title: "Neonatal Ambulance", abbr: "NEO", color: GREEN,
    features: ["Transport incubator", "Neonatal ventilator", "Specialized nursing", "NICU connectivity"],
    tag: "Newborn Care",
  },
  {
    image: "https://images.pexels.com/photos/27793076/pexels-photo-27793076.jpeg",
    title: "ICU Ambulance", abbr: "ICU", color: BLUE,
    features: ["Mobile ICU setup", "Ventilator support", "Critical care team", "Multi-para monitor"],
    tag: "Intensive Care",
  },
  {
    image: "https://images.pexels.com/photos/27914802/pexels-photo-27914802.jpeg",
    title: "Patient Transport Vehicle", abbr: "PTV", color: GREEN,
    features: ["Non-emergency transport", "Wheelchair accessible", "Comfortable seating", "Home-hospital transfer"],
    tag: "Non-Emergency",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 48, scale: 0.95 },
  show: (i) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function TypesOfAmbulance() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(null);

  return (
    <section id="types" ref={ref}
      style={{ padding: "100px 0", background: "#fff", fontFamily: "'Jost', sans-serif", overflow: "hidden" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Marcellus&family=Jost:wght@300;400;500;600;700&display=swap');

        .types-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        @media (max-width: 1024px) {
          .types-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .types-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          #types {
            padding: 60px 0 !important;
          }
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div style={{ textAlign: "center", marginBottom: 72 }}
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span style={{ color: GREEN, fontWeight: 600, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.18em", display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
            <span style={{ display: "inline-block", width: 28, height: 1.5, background: GREEN }} />
            Our Fleet
            <span style={{ display: "inline-block", width: 28, height: 1.5, background: GREEN }} />
          </span>
          <h2 style={{ fontFamily: "'Marcellus', serif", fontWeight: 400, fontSize: "clamp(2rem, 4vw, 3rem)", color: BLUE, margin: "16px 0 16px", letterSpacing: "-0.01em" }}>
            Types of Ambulance
          </h2>
          <p style={{ color: "#6b7280", maxWidth: 500, margin: "0 auto", lineHeight: 1.8, fontWeight: 300, fontSize: 16 }}>
            From basic first aid to mobile ICUs — we have the right vehicle for every medical need.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div className="types-grid" initial="hidden" animate={inView ? "show" : "hidden"}>
          {types.map((type, i) => (
            <motion.div
              key={type.title}
              variants={cardVariant}
              custom={i}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              whileHover={{ y: -8 }}
              style={{
                background: "#fff", borderRadius: 24, overflow: "hidden",
                border: `1px solid ${hovered === i ? type.color + "40" : "#e8edf5"}`,
                boxShadow: hovered === i ? `0 24px 56px ${type.color}16` : "0 2px 12px rgba(0,0,0,0.04)",
                transition: "border 0.3s, box-shadow 0.3s", cursor: "default",
              }}
            >
              {/* Image */}
              <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
                <motion.img
                  src={type.image}
                  alt={type.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  animate={{ scale: hovered === i ? 1.07 : 1 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
                <div style={{ position: "absolute", inset: 0, background: `linear-gradient(180deg, transparent 20%, ${type.color}cc 100%)` }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 22px" }}>
                  <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
                    <div>
                      <span style={{
                        fontFamily: "'Jost', sans-serif", fontWeight: 700, fontSize: 10,
                        background: YELLOW, color: BLUE_DARK, padding: "3px 10px", borderRadius: 999,
                        textTransform: "uppercase", letterSpacing: "0.08em",
                        display: "inline-block", marginBottom: 6,
                      }}>
                        {type.tag}
                      </span>
                      <h3 style={{ fontFamily: "'Marcellus', serif", fontWeight: 400, fontSize: 18, color: "#fff", margin: 0, lineHeight: 1.25 }}>
                        {type.title}
                      </h3>
                    </div>
                    <span style={{ fontFamily: "'Jost', sans-serif", fontWeight: 700, fontSize: 26, color: "rgba(255,255,255,0.25)", letterSpacing: "0.06em", lineHeight: 1 }}>
                      {type.abbr}
                    </span>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: "22px 22px 24px" }}>
                <ul style={{ listStyle: "none", margin: "0 0 20px", padding: 0 }}>
                  {type.features.map((f) => (
                    <li key={f} style={{
                      display: "flex", alignItems: "center", gap: 10,
                      padding: "7px 0", borderBottom: "1px solid #f3f4f6",
                    }}>
                      <CheckCircle2 size={14} color={type.color} strokeWidth={2} style={{ flexShrink: 0 }} />
                      <span style={{ fontFamily: "'Jost', sans-serif", color: "#374151", fontSize: 13.5, fontWeight: 400 }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                  style={{
                    width: "100%", padding: "13px 0", borderRadius: 14,
                    background: "transparent", border: `1.5px solid ${type.color}50`,
                    color: type.color, fontFamily: "'Jost', sans-serif", fontWeight: 600, fontSize: 14,
                    cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    letterSpacing: "0.04em", transition: "background 0.25s, border-color 0.25s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = type.color; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = type.color; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = type.color; e.currentTarget.style.borderColor = `${type.color}50`; }}
                >
                  Book This Ambulance <ChevronRight size={15} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}