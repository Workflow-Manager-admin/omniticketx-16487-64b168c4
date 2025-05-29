import React from "react";

/**
 * PUBLIC_INTERFACE
 * NotificationBar: Displays site-wide announcements, notifications, or actions.
 */
const NotificationBar = () => (
  <div style={{
    width: "100%",
    backgroundColor: "var(--kavia-orange)",
    color: "#fff",
    textAlign: "center",
    padding: "6px 0",
    fontSize: "1rem",
    minHeight: 32,
    fontWeight: 500,
    letterSpacing: 0.5,
  }}>
    {/* You can wire this up to state/props for dynamic messages */}
    <span>🚀 Welcome to OmniTicketX – Universal booking made simple!</span>
  </div>
);

export default NotificationBar;
