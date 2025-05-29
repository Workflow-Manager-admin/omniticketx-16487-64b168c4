import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import NotificationBar from "../layout/NotificationBar";

// Feature placeholders (add stubs for main feature slots)
import UniversalSearch from "../features/UniversalSearch";
import Booking from "../features/Booking";
import Personalization from "../features/Personalization";
import ARPreview from "../features/ARPreview";
import AdminPortal from "../features/AdminPortal";
import Notifications from "../features/Notifications";

/**
 * PUBLIC_INTERFACE
 * MainContainer: The top-level shell for all OmniTicketX routes and content.
 * Wraps Navbar, NotificationBar, content, and Footer with responsive design.
 */
const MainContainer = ({ children }) => {
  return (
    <div className="app" style={{ minHeight: "100vh", backgroundColor: "var(--kavia-dark)", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <NotificationBar />
      <main style={{ flex: 1, width: "100%", marginTop: 96 }}>
        {/* Responsive container for routed/page content */}
        <div className="container">
          {children ? children : (
            <div>
              <div className="hero">
                <div className="subtitle">AI Booking Platform</div>
                <h1 className="title">OmniTicketX</h1>
                <div className="description">
                  The next-gen ticketing ecosystem: search, book, and manage any event, anywhere.
                </div>
                <button className="btn btn-large">Discover Events</button>
              </div>
              {/* === FEATURE SLOT PLACEHOLDERS === */}
              {/* TODO: Move feature placement into routed pages as app grows. For now, all major feature stubs visible here for scaffolding and dev. */}
              <UniversalSearch />
              <Booking />
              <Personalization />
              <ARPreview />
              <AdminPortal />
              <Notifications />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainContainer;
