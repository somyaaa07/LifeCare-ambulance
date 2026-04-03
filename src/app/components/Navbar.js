"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Ambulance Types", href: "#types" },
  { label: "Why Us", href: "#why" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <>
      <style>{`
        .navbar-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 6px 32px;
          background: #0d47a1;
        }
        .navbar-topbar-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .navbar-topbar-tagline {
          font-size: 11px;
          font-weight: 500;
          color: rgba(255,255,255,0.45);
        }
        .navbar-main {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 0 32px;
          height: 64px;
          background: rgba(255,255,255,1);
          border-bottom: 0.5px solid rgba(13,71,161,0.1);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-sizing: border-box;
        }
        .navbar-logo img {
          height: 160px;
          width: 160px;
          margin-left: -20px;
        }
        .navbar-links {
          display: flex;
          align-items: center;
          gap: 2px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }
        .navbar-mobile-toggle {
          display: none;
          width: 36px;
          height: 36px;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          background: rgba(13,71,161,0.07);
          border: 0.5px solid rgba(13,71,161,0.18);
          color: #0d47a1;
          cursor: pointer;
          font-size: 16px;
          transition: all 0.2s;
        }
        .navbar-mobile-toggle:active { transform: scale(0.9); }

        @media (max-width: 900px) {
          .navbar-links { display: none !important; }
          .navbar-actions { display: none !important; }
          .navbar-mobile-toggle { display: flex !important; }
          .navbar-topbar { padding: 6px 16px; }
          .navbar-topbar-tagline { display: none; }
          .navbar-main { padding: 0 16px; height: 56px; }
          .navbar-logo img { height: 100px; width: 100px; margin-left: -10px; }
        }

        @media (max-width: 480px) {
          .navbar-main { padding: 0 12px; }
        }

        .mobile-menu {
          display: flex;
          flex-direction: column;
          padding: 10px 16px 16px;
          gap: 2px;
          background: rgba(255,255,255,0.97);
          border-bottom: 0.5px solid rgba(13,71,161,0.1);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        .mobile-menu a {
          display: block;
          padding: 10px 12px;
          font-size: 14px;
          font-weight: 500;
          color: #64748b;
          text-decoration: none;
          border-radius: 10px;
          transition: all 0.15s;
        }
        .mobile-menu a:hover { background: rgba(13,71,161,0.06); color: #0d47a1; transform: translateX(4px); }
        .mobile-menu-call {
          margin-top: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px;
          font-size: 13px;
          font-weight: 700;
          color: white;
          border-radius: 14px;
          background: linear-gradient(135deg, #0d47a1, #0a3880);
          text-decoration: none;
        }
      `}</style>

      <div className="sticky top-0 z-[9999] w-full">
        {/* Top bar */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="navbar-topbar"
        >
          <div className="navbar-topbar-left">
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11.5, fontWeight: 600, color: "rgba(136,77,77,0.65)" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", display: "inline-block", animation: "pulse 2s infinite" }} />
              Emergency: <strong style={{ color: "white" }}>108</strong>
            </div>
            <div style={{ width: 1, height: 12, background: "rgba(255,255,255,0.2)" }} />
            <span className="navbar-topbar-tagline">Dispatching across India — 24 / 7</span>
          </div>
        </motion.div>

        {/* Main navbar */}
        <motion.nav
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="navbar-main"
        >
          {/* Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.35 }}
            className="navbar-logo"
            style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", flexShrink: 0 }}
          >
            <img src="/logo.png" alt="logo" />
          </motion.a>

          {/* Desktop Links */}
          <ul className="navbar-links">
            {links.map((link, i) => (
              <motion.li
                key={link.label}
                initial={{ opacity: 0, y: -7 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.42 + i * 0.055 }}
              >
                <a
                  href={link.href}
                  onClick={() => setActive(link.label)}
                  style={{
                    position: "relative",
                    display: "block",
                    padding: "6px 12px",
                    fontSize: 13,
                    fontWeight: active === link.label ? 600 : 500,
                    color: active === link.label ? "#0d47a1" : "#64748b",
                    background: active === link.label ? "rgba(13,71,161,0.07)" : "transparent",
                    borderRadius: 8,
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                >
                  {link.label}
                  <span style={{
                    position: "absolute",
                    bottom: 3,
                    left: "50%",
                    transform: "translateX(-50%)",
                    height: 2,
                    width: active === link.label ? 16 : 0,
                    borderRadius: 999,
                    background: "linear-gradient(90deg,#0d47a1,#2e7d32)",
                    transition: "width 0.3s",
                    display: "block",
                  }} />
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.4 }}
            className="navbar-actions"
          >
            <a
              href="#"
              style={{
                display: "flex", alignItems: "center", gap: 6,
                padding: "8px 16px", fontSize: 12.5, fontWeight: 600,
                borderRadius: 8, textDecoration: "none",
                color: "#0d47a1",
                background: "rgba(13,71,161,0.07)",
                border: "0.5px solid rgba(13,71,161,0.2)",
                transition: "all 0.2s",
              }}
            >
              Track
            </a>
            <a
              href="tel:108"
              style={{
                display: "flex", alignItems: "center", gap: 8,
                padding: "8px 16px", fontSize: 13, fontWeight: 700,
                color: "white", borderRadius: 8, textDecoration: "none",
                background: "linear-gradient(135deg,#0d47a1,#0a3880)",
                transition: "all 0.2s",
              }}
            >
              <span style={{ width: 8, height: 8, background: "#4ade80", borderRadius: "50%", animation: "pulse 2s infinite" }} />
              Call 108
            </a>
          </motion.div>

          {/* Mobile Toggle */}
          <button
            className="navbar-mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </motion.nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, scaleY: 0.92 }}
              animate={{ opacity: 1, scaleY: 1 }}
              exit={{ opacity: 0, scaleY: 0.92 }}
              transition={{ duration: 0.22 }}
              style={{ transformOrigin: "top center" }}
              className="mobile-menu"
            >
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => { setActive(link.label); setMenuOpen(false); }}
                  style={{ color: active === link.label ? "#0d47a1" : undefined,
                    background: active === link.label ? "rgba(13,71,161,0.06)" : undefined }}
                >
                  {link.label}
                </a>
              ))}
              <a href="tel:108" className="mobile-menu-call">
                <span style={{ width: 8, height: 8, background: "#4ade80", borderRadius: "50%" }} />
                Call 108 — Emergency
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}