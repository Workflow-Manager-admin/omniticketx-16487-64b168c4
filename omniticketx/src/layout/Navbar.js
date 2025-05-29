import React from "react";

/**
 * PUBLIC_INTERFACE
 * Navbar: Primary navigation bar for OmniTicketX.
 * Responsive and branded with orange/black theme.
 */
const Navbar = () => (
  <nav className="navbar">
    <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
      <div className="logo" style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span className="logo-symbol" style={{ color: "var(--kavia-orange)", fontWeight: "bold", fontSize: 22 }}>🎟️</span>
        <span style={{ fontWeight: 600, letterSpacing: 1 }}>OmniTicketX</span>
      </div>
      {/* Example navigation - to be replaced with real links/routes */}
      <div style={{ display: "flex", gap: 16 }}>
        <button className="btn" style={{ backgroundColor: "var(--kavia-orange)" }}>Login</button>
      </div>
    </div>
  </nav>
);

export default Navbar;
