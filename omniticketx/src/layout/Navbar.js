import React from "react";
import { Link, useLocation } from "react-router-dom";

/**
 * PUBLIC_INTERFACE
 * Navbar: Main navigation bar for OmniTicketX.
 * Now vertically stacks all primary nav actions for easier scanning, access, and mobile/desktop consistency.
 */
const NAV_LINKS = [
  { to: "/search", label: "Search" },
  { to: "/booking", label: "Booking" },
  { to: "/personalization", label: "Personalization" },
  { to: "/ar-preview", label: "AR Preview" },
  { to: "/admin", label: "Admin" },
  { to: "/notifications", label: "Notifications" },
];

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="navbar" role="navigation" aria-label="primary navigation">
      <div className="container navbar-flex vertical-navbar">
        <div className="logo" style={{ display: "flex", alignItems: "center", marginBottom: 18, marginTop: 2 }}>
          <span className="logo-symbol" style={{ color: "var(--kavia-orange)", fontWeight: "bold", fontSize: 23, marginRight: 9, marginTop: 1 }}>🎟️</span>
          <span style={{ fontWeight: 600, letterSpacing: 1 }}>
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>OmniTicketX</Link>
          </span>
        </div>
        {/* Stacked nav - column layout and improved accessibility */}
        <ul className="nav-links vertical-nav-links" style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "column",
          gap: "0.5em",
          width: "100%",
          alignItems: "stretch"
        }}>
          {NAV_LINKS.map(link => (
            <li key={link.to} style={{ width: "100%", display: "flex" }}>
              <Link
                to={link.to}
                className="btn nav-btn"
                tabIndex={0}
                aria-current={location.pathname === link.to ? "page" : undefined}
                style={{
                  width: "100%",
                  justifyContent: "flex-start",
                  textAlign: "left",
                  borderRadius: "6px",
                  marginLeft: 0,
                  paddingLeft: "15px",
                  boxSizing: "border-box"
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
