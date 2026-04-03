"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, RefreshCw, Wind, Baby, Tent, Home, ArrowUpRight } from "lucide-react";

const BLUE = "#0d47a1";
const GREEN = "#2e7d32";
const GREEN_LIGHT = "#388e3c";

const services = [
  { Icon: Heart, title: "Emergency Transport", desc: "Immediate response to medical emergencies with life support systems onboard.", accent: BLUE },
  { Icon: RefreshCw, title: "Patient Transfer", desc: "Safe and comfortable inter-hospital or home-to-hospital transfers.", accent: GREEN },
  { Icon: Wind, title: "Air Ambulance", desc: "Helicopter and air transport for critical long-distance emergencies.", accent: BLUE },
  { Icon: Baby, title: "Neonatal Ambulance", desc: "Specialized care for newborns with NICU equipment on the go.", accent: GREEN },
  { Icon: Tent, title: "Event Medical Standby", desc: "On-site medical support for events, marathons, and gatherings.", accent: BLUE },
  { Icon: Home, title: "Home Care Transport", desc: "Comfortable transport for non-emergency medical appointments.", accent: GREEN },
];

const cardVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  show: (i) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.65, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="services" ref={ref}
      style={{ padding: "100px 0", background: "#f8faff", fontFamily: "'Jost', sans-serif", overflow: "hidden" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Marcellus&family=Jost:wght@300;400;500;600;700&display=swap');

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .services-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          #services {
            padding: 60px 0 !important;
          }
        }

        @media (max-width: 480px) {
          .services-card {
            padding: 28px 24px !important;
          }
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div
          style={{ textAlign: "center", marginBottom: 72 }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span style={{ color: GREEN, fontWeight: 600, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.18em", display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
            <span style={{ display: "inline-block", width: 28, height: 1.5, background: GREEN }} />
            What We Offer
            <span style={{ display: "inline-block", width: 28, height: 1.5, background: GREEN }} />
          </span>
          <h2 style={{ fontFamily: "'Marcellus', serif", fontWeight: 400, fontSize: "clamp(2rem, 4vw, 3rem)", color: BLUE, margin: "16px 0 16px", letterSpacing: "-0.01em" }}>
            Our Services
          </h2>
          <p style={{ color: "#6b7280", maxWidth: 480, margin: "0 auto", lineHeight: 1.8, fontWeight: 300, fontSize: 16 }}>
            Comprehensive emergency medical transport solutions tailored to every situation.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div className="services-grid" initial="hidden" animate={inView ? "show" : "hidden"}>
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ Icon, title, desc, accent, index }) {
  return (
    <motion.div
      variants={cardVariant}
      custom={index}
      whileHover={{ y: -8, boxShadow: `0 24px 48px ${accent}18` }}
      className="services-card"
      style={{
        background: "#fff", borderRadius: 24, padding: "36px 32px",
        border: "1px solid #e8edf5", cursor: "default",
        position: "relative", overflow: "hidden", transition: "box-shadow 0.3s",
      }}
    >
      <div style={{
        position: "absolute", top: 0, right: 0, width: 80, height: 80,
        background: `${accent}08`, borderRadius: "0 24px 0 80px",
      }} />
      <motion.div style={{
        width: 56, height: 56, borderRadius: 16,
        background: `${accent}12`, border: `1px solid ${accent}20`,
        display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24,
      }}>
        <Icon size={22} color={accent} strokeWidth={1.8} />
      </motion.div>
      <h3 style={{ fontFamily: "'Marcellus', serif", fontWeight: 400, fontSize: 19, color: accent, margin: "0 0 12px" }}>
        {title}
      </h3>
      <p style={{ color: "#6b7280", lineHeight: 1.8, fontSize: 14, fontWeight: 300, margin: "0 0 20px" }}>
        {desc}
      </p>
      <motion.div whileHover={{ x: 4 }}
        style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          color: accent, fontWeight: 600, fontSize: 13, letterSpacing: "0.04em",
          textTransform: "uppercase", cursor: "pointer",
        }}
      >
        Learn more <ArrowUpRight size={14} />
      </motion.div>
    </motion.div>
  );
}