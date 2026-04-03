"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

const BLUE = "#0d47a1";
const BLUE_DARK = "#0a3880";
const GREEN = "#2e7d32";
const GREEN_LIGHT = "#388e3c";

const CONTACTS = [
  { Icon: Phone, label: "Emergency Helpline", value: "108 / +91-98765-43210", accent: BLUE },
  { Icon: Mail, label: "Email Us", value: "help@ambulacare.com", accent: GREEN },
  { Icon: MapPin, label: "Head Office", value: "123 Medical Lane, New Delhi — 110001", accent: BLUE },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function GetInTouch() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={ref}
      style={{ padding: "100px 0", background: "#f8faff", fontFamily: "'Jost', sans-serif", overflow: "hidden", position: "relative" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Marcellus&family=Jost:wght@300;400;500;600;700&display=swap');

        .git-input:focus { outline: none; border-color: ${BLUE} !important; box-shadow: 0 0 0 3px ${BLUE}14; }
        .git-input::placeholder { color: #9ca3af; font-weight: 300; }

        .contact-layout {
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
          align-items: stretch;
        }

        .contact-info-col {
          flex: 0 0 360px;
          min-width: 280px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contact-form-col {
          flex: 1;
          min-width: 280px;
        }

        .contact-map-placeholder {
          flex: 1;
          min-height: 180px;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          border: 1px solid #e8edf5;
          background: linear-gradient(135deg, ${BLUE}08, ${GREEN}08);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 900px) {
          .contact-layout {
            flex-direction: column;
          }
          .contact-info-col {
            flex: none;
            width: 100%;
          }
          .contact-map-placeholder {
            min-height: 140px;
          }
        }

        @media (max-width: 640px) {
          #contact {
            padding: 60px 0 !important;
          }
          .contact-form-inner {
            padding: 28px 20px !important;
          }
        }

        @media (max-width: 480px) {
          .contact-contact-card {
            padding: 16px !important;
          }
          .contact-contact-card-icon {
            width: 44px !important;
            height: 44px !important;
          }
        }
      `}</style>

      {/* Background watermark */}
      <div style={{
        position: "absolute", right: -40, top: "50%", transform: "translateY(-50%)",
        fontFamily: "'Marcellus', serif", fontSize: "clamp(60px, 12vw, 140px)",
        color: `${BLUE}04`, pointerEvents: "none", userSelect: "none",
        whiteSpace: "nowrap", letterSpacing: "-0.04em",
      }}>
        Get In Touch
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div style={{ textAlign: "center", marginBottom: 72 }}
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span style={{ color: GREEN, fontWeight: 600, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.18em", display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
            <span style={{ display: "inline-block", width: 28, height: 1.5, background: GREEN }} />
            Reach Out
            <span style={{ display: "inline-block", width: 28, height: 1.5, background: GREEN }} />
          </span>
          <h2 style={{ fontFamily: "'Marcellus', serif", fontWeight: 400, fontSize: "clamp(2rem, 4vw, 3rem)", color: BLUE, margin: "16px 0 14px", letterSpacing: "-0.01em" }}>
            Get In Touch With Us
          </h2>
          <p style={{ color: "#6b7280", maxWidth: 480, margin: "0 auto", lineHeight: 1.8, fontWeight: 300, fontSize: 16 }}>
            Need an ambulance or have a query? Fill the form or contact us directly — our team is ready to assist 24/7.
          </p>
        </motion.div>

        <div className="contact-layout">
          {/* LEFT: Info */}
          <motion.div className="contact-info-col" initial="hidden" animate={inView ? "show" : "hidden"}>
            {CONTACTS.map(({ Icon, label, value, accent }, i) => (
              <motion.div
                key={label} variants={fadeUp} custom={i}
                whileHover={{ x: 6 }}
                className="contact-contact-card"
                style={{
                  background: "#fff", borderRadius: 20, padding: "22px 24px",
                  border: "1px solid #e8edf5",
                  display: "flex", alignItems: "center", gap: 18,
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  transition: "box-shadow 0.3s",
                }}
              >
                <div className="contact-contact-card-icon" style={{
                  width: 52, height: 52, borderRadius: 16, flexShrink: 0,
                  background: `${accent}12`, border: `1px solid ${accent}20`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Icon size={20} color={accent} strokeWidth={1.8} />
                </div>
                <div>
                  <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 700, fontSize: 12, color: accent, margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    {label}
                  </p>
                  <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: 14.5, color: "#374151", margin: 0, lineHeight: 1.5 }}>
                    {value}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Map placeholder */}
            <motion.div variants={fadeUp} custom={3} className="contact-map-placeholder">
              <div style={{ textAlign: "center" }}>
                <MapPin size={36} color={`${BLUE}50`} strokeWidth={1.5} style={{ display: "block", margin: "0 auto 10px" }} />
                <p style={{ fontFamily: "'Jost', sans-serif", color: `${BLUE}70`, fontSize: 13, fontWeight: 500, margin: 0 }}>New Delhi, India</p>
                <p style={{ fontFamily: "'Jost', sans-serif", color: "#9ca3af", fontSize: 12, fontWeight: 300, margin: "4px 0 0" }}>View on Google Maps →</p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Form */}
          <motion.div className="contact-form-col"
            initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="contact-form-inner" style={{
              background: "#fff", borderRadius: 28, padding: "40px",
              border: "1px solid #e8edf5",
              boxShadow: "0 8px 40px rgba(13,71,161,0.07)",
            }}>
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ textAlign: "center", padding: "48px 0" }}
                  >
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, damping: 14 }}>
                      <CheckCircle size={64} color={GREEN} strokeWidth={1.5} style={{ display: "block", margin: "0 auto 20px" }} />
                    </motion.div>
                    <h3 style={{ fontFamily: "'Marcellus', serif", fontWeight: 400, fontSize: 26, color: GREEN, margin: "0 0 10px" }}>
                      Message Sent!
                    </h3>
                    <p style={{ fontFamily: "'Jost', sans-serif", color: "#6b7280", fontWeight: 300, fontSize: 15 }}>
                      Our team will contact you shortly.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                      onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", message: "" }); }}
                      style={{
                        marginTop: 24, padding: "12px 28px", borderRadius: 999,
                        background: "transparent", border: `1.5px solid ${BLUE}40`,
                        color: BLUE, fontFamily: "'Jost', sans-serif", fontWeight: 600, fontSize: 14, cursor: "pointer",
                      }}
                    >
                      Send Another Message
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                    <div>
                      <p style={{ fontFamily: "'Marcellus', serif", fontWeight: 400, fontSize: 22, color: BLUE, margin: "0 0 6px" }}>
                        Send us a Message
                      </p>
                      <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, color: "#6b7280", fontSize: 14, margin: 0 }}>
                        We typically respond within 30 minutes.
                      </p>
                    </div>

                    {[
                      { id: "name", label: "Your Name", type: "text", placeholder: "Rahul Sharma" },
                      { id: "phone", label: "Phone Number", type: "tel", placeholder: "+91-XXXXX-XXXXX" },
                    ].map(({ id, label, type, placeholder }) => (
                      <div key={id}>
                        <label style={{
                          display: "block", fontFamily: "'Jost', sans-serif", fontWeight: 600, fontSize: 12,
                          color: "#374151", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8,
                        }}>
                          {label}
                        </label>
                        <input
                          type={type} required placeholder={placeholder}
                          className="git-input"
                          value={form[id]}
                          onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                          onFocus={() => setFocused(id)} onBlur={() => setFocused(null)}
                          style={{
                            width: "100%", boxSizing: "border-box",
                            border: `1px solid ${focused === id ? BLUE : "#e5e7eb"}`,
                            borderRadius: 14, padding: "13px 16px",
                            fontFamily: "'Jost', sans-serif", fontSize: 14.5, color: "#111827",
                            background: "#fafbff", transition: "border 0.25s",
                          }}
                        />
                      </div>
                    ))}

                    <div>
                      <label style={{
                        display: "block", fontFamily: "'Jost', sans-serif", fontWeight: 600, fontSize: 12,
                        color: "#374151", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8,
                      }}>
                        Message
                      </label>
                      <textarea
                        required rows={4} placeholder="Tell us how we can help..."
                        className="git-input"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        onFocus={() => setFocused("msg")} onBlur={() => setFocused(null)}
                        style={{
                          width: "100%", boxSizing: "border-box",
                          border: `1px solid ${focused === "msg" ? BLUE : "#e5e7eb"}`,
                          borderRadius: 14, padding: "13px 16px",
                          fontFamily: "'Jost', sans-serif", fontSize: 14.5, color: "#111827",
                          background: "#fafbff", resize: "none", transition: "border 0.25s",
                        }}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.97 }}
                      style={{
                        width: "100%", padding: "16px 0",
                        background: `linear-gradient(135deg, ${BLUE}, ${BLUE_DARK})`,
                        color: "#fff", border: "none", borderRadius: 16,
                        fontFamily: "'Jost', sans-serif", fontWeight: 700, fontSize: 15,
                        cursor: "pointer", display: "flex", alignItems: "center",
                        justifyContent: "center", gap: 10, letterSpacing: "0.04em",
                        boxShadow: `0 12px 32px ${BLUE}30`,
                      }}
                    >
                      Send Message <Send size={16} strokeWidth={2} />
                    </motion.button>

                    <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, color: "#9ca3af", fontSize: 12, margin: 0, textAlign: "center" }}>
                      For emergencies, call <strong style={{ color: BLUE }}>108</strong> directly.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}