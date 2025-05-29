import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import NotificationBar from "../layout/NotificationBar";

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
            <div className="hero">
              <div className="subtitle">AI Booking Platform</div>
              <h1 className="title">OmniTicketX</h1>
              <div className="description">
                The next-gen ticketing ecosystem: search, book, and manage any event, anywhere.
              </div>
              <button className="btn btn-large">Discover Events</button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainContainer;
