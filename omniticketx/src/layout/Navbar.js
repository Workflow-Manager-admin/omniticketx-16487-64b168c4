import React from "react";
import { Link, useLocation } from "react-router-dom";

/**
 * PUBLIC_INTERFACE
 * Navbar: Primary navigation bar for OmniTicketX.
 * Modern horizontally centered, accessible, and responsive nav with even spacing.
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
      <div className="container navbar-flex">
        <div className="logo" style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span className="logo-symbol" style={{ color: "var(--kavia-orange)", fontWeight: "bold", fontSize: 22 }}>🎟️</span>
          <span style={{ fontWeight: 600, letterSpacing: 1 }}>
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>OmniTicketX</Link>
          </span>
        </div>
        {/* Evenly spaced nav - centered on desktop. Responsive for mobile. */}
        <ul className="nav-links" style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {NAV_LINKS.map(link => (
            <li key={link.to} style={{ display: "inline-flex" }}>
              <Link
                to={link.to}
                className="btn"
                aria-current={location.pathname === link.to ? "page" : undefined}
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
