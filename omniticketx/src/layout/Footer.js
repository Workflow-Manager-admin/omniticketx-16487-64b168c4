import React from "react";

/**
 * PUBLIC_INTERFACE
 * Footer: Site-wide footer, sticky to bottom, dark/orange theme.
 */
const Footer = () => (
  <footer style={{
    background: "var(--kavia-dark)",
    color: "var(--text-secondary)",
    textAlign: "center",
    padding: "20px 0 12px 0",
    borderTop: "1px solid var(--border-color)",
    fontSize: "0.95rem"
  }}>
    <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ marginBottom: 8 }}>
        <span style={{ color: "var(--kavia-orange)", fontWeight: 600 }}>OmniTicketX</span> &copy; {new Date().getFullYear()}
      </div>
      <div style={{ opacity: 0.75 }}>
        <a href="#" style={{ color: "var(--kavia-orange)", textDecoration: "none", margin: "0 10px" }}>About</a>
        <a href="#" style={{ color: "var(--kavia-orange)", textDecoration: "none", margin: "0 10px" }}>Contact</a>
        <a href="#" style={{ color: "var(--kavia-orange)", textDecoration: "none", margin: "0 10px" }}>Terms</a>
      </div>
    </div>
  </footer>
);

export default Footer;
