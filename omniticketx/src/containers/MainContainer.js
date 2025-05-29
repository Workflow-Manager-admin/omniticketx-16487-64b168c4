import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import NotificationBar from "../layout/NotificationBar";

import { Routes, Route } from "react-router-dom";

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
const MainContainer = () => {
  // Adjust padding for vertical navbar on desktop
  // On mobile, .navbar switches to top bar
  return (
    <div className="app" style={{
      minHeight: "100vh",
      backgroundColor: "var(--kavia-dark)",
      display: "flex",
      flexDirection: "row"
    }}>
      <Navbar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <NotificationBar />
        <main
          style={{
            flex: 1,
            width: "100%",
            marginLeft: "215px",
            marginTop: 0,
            transition: "margin 0.23s"
          }}
          className="main-content"
        >
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={
                  <div>
                    <div className="hero">
                      <div className="subtitle">AI Booking Platform</div>
                      <h1 className="title">OmniTicketX</h1>
                      <div className="description">
                        The next-gen ticketing ecosystem: search, book, and manage any event, anywhere.
                      </div>
                      <button className="btn btn-large">Discover Events</button>
                    </div>
                  </div>
                }
              />
              <Route path="/search" element={<UniversalSearch />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/personalization" element={<Personalization />} />
              <Route path="/ar-preview" element={<ARPreview />} />
              <Route path="/admin" element={<AdminPortal />} />
              <Route path="/notifications" element={<Notifications />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainContainer;
