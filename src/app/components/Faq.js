"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const BLUE = "#0d47a1";
const GREEN = "#2e7d32";

const faqs = [
  { q: "How quickly can an ambulance reach me?", a: "Our average response time is under 5 minutes within city limits. We have GPS-tracked dispatch to route the nearest ambulance to you." },
  { q: "Do you accept insurance?", a: "Yes, we accept most major health insurance providers. Please carry your insurance card when booking." },
  { q: "Is there a service available 24/7?", a: "Absolutely! Our helpline and ambulance fleet operate 24 hours a day, 7 days a week including holidays." },
  { q: "Can I book an ambulance in advance?", a: "Yes! You can pre-book for planned hospital visits, transfers, or medical events through our app or helpline." },
  { q: "What should I do while waiting for the ambulance?", a: "Keep the patient calm, don't move them unnecessarily, keep the area clear, and stay on the line with our dispatcher for guidance." },
  { q: "Do you provide ambulances for events?", a: "Yes, we offer medical standby services for corporate events, sports events, marathons, and large gatherings." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="faq" ref={ref}
      style={{ padding: "100px 0", background: "#f8faff", fontFamily: "'Jost', sans-serif", overflow: "hidden" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Marcellus&family=Jost:wght@300;400;500;600;700&display=swap');

        @media (max-width: 640px) {
          #faq {
            padding: 60px 0 !important;
          }
          .faq-question-text {
            font-size: 14px !important;
          }
          .faq-button {
            padding: 16px 16px !important;
          }
          .faq-answer {
            padding: 0 16px 20px 60px !important;
          }
          .faq-num {
            display: none !important;
          }
        }

        @media (max-width: 400px) {
          .faq-answer {
            padding: 0 16px 20px 16px !important;
          }
        }
      `}</style>

      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div style={{ textAlign: "center", marginBottom: 64 }}
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span style={{ color: GREEN, fontWeight: 600, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.18em", display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
            <span style={{ display: "inline-block", width: 28, height: 1.5, background: GREEN }} />
            Got Questions?
            <span style={{ display: "inline-block", width: 28, height: 1.5, background: GREEN }} />
          </span>
          <h2 style={{ fontFamily: "'Marcellus', serif", fontWeight: 400, fontSize: "clamp(2rem, 4vw, 3rem)", color: BLUE, margin: "16px 0 0", letterSpacing: "-0.01em" }}>
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {faqs.map((faq, i) => (
            <FAQItem
              key={i} faq={faq} index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ faq, index, isOpen, onToggle, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: "#fff", borderRadius: 18,
        border: `1px solid ${isOpen ? BLUE + "40" : "#e8edf5"}`,
        overflow: "hidden", transition: "border 0.3s",
        boxShadow: isOpen ? `0 8px 32px ${BLUE}0c` : "none",
      }}
    >
      <motion.button
        onClick={onToggle}
        className="faq-button"
        style={{
          width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "22px 28px", background: "transparent", border: "none",
          cursor: "pointer", textAlign: "left", gap: 16,
        }}
        whileTap={{ scale: 0.995 }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <span className="faq-num" style={{
            minWidth: 32, height: 32, borderRadius: 10,
            background: isOpen ? BLUE : "#f0f4ff",
            color: isOpen ? "#fff" : BLUE,
            fontFamily: "'Jost', sans-serif", fontWeight: 700, fontSize: 13,
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "background 0.3s, color 0.3s", flexShrink: 0,
          }}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="faq-question-text" style={{
            fontFamily: "'Jost', sans-serif", fontWeight: 600,
            color: isOpen ? BLUE : "#111827", fontSize: 15.5, lineHeight: 1.4, transition: "color 0.3s",
          }}>
            {faq.q}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0, background: isOpen ? BLUE : "#f0f4ff" }}
          transition={{ duration: 0.3 }}
          style={{
            width: 34, height: 34, borderRadius: 10, flexShrink: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          {isOpen
            ? <Minus size={15} color="#fff" strokeWidth={2.5} />
            : <Plus size={15} color={BLUE} strokeWidth={2.5} />
          }
        </motion.div>
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div className="faq-answer" style={{
              padding: "0 28px 26px 78px",
              fontFamily: "'Jost', sans-serif", fontWeight: 300,
              color: "#4b5563", lineHeight: 1.85, fontSize: 15,
            }}>
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}