import React from "react";
import { Link } from "react-router-dom";

/**
 * PUBLIC_INTERFACE
 * Navbar: Primary navigation bar for OmniTicketX.
 * Responsive and branded with orange/black theme.
 */
const Navbar = () => (
  <nav className="navbar">
    <div
      className="container"
      style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}
    >
      <div className="logo" style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span className="logo-symbol" style={{ color: "var(--kavia-orange)", fontWeight: "bold", fontSize: 22 }}>🎟️</span>
        <span style={{ fontWeight: 600, letterSpacing: 1 }}>
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>OmniTicketX</Link>
        </span>
      </div>
      <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
        <Link to="/" className="btn" style={{ backgroundColor: "var(--kavia-orange)", textDecoration: "none" }}>Home</Link>
        <Link to="/search" className="btn" style={{ backgroundColor: "var(--kavia-orange)", textDecoration: "none" }}>Search</Link>
        <Link to="/booking" className="btn" style={{ backgroundColor: "var(--kavia-orange)", textDecoration: "none" }}>Booking</Link>
        <Link to="/personalization" className="btn" style={{ backgroundColor: "var(--kavia-orange)", textDecoration: "none" }}>Personalization</Link>
        <Link to="/ar-preview" className="btn" style={{ backgroundColor: "var(--kavia-orange)", textDecoration: "none" }}>AR Preview</Link>
        <Link to="/admin" className="btn" style={{ backgroundColor: "var(--kavia-orange)", textDecoration: "none" }}>Admin</Link>
        <Link to="/notifications" className="btn" style={{ backgroundColor: "var(--kavia-orange)", textDecoration: "none" }}>Notifications</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
