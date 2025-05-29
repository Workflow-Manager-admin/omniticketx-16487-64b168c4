import React from "react";

/**
 * PUBLIC_INTERFACE
 * Booking: Real-time booking & seat reservation feature.
 *
 * TODO:
 * - Implement seat maps, availability, booking workflows (multi-step).
 * - Integrate payment API, bundle options (event+hotel+transport).
 * - Queue management, booking queue, and group booking features.
 * - Future: smart refund/exchange, waitlists.
 */
const Booking = () => (
  <div style={{
    border: '1px dashed var(--kavia-orange)',
    padding: 20, margin: "24px 0",
    background: "rgba(232,122,65,0.05)"
  }}>
    <strong>Booking Stub</strong>
    <ul style={{fontSize:'.97rem', marginTop:10}}>
      <li>Booking widget and flows will appear here.</li>
      <li>Seat map and checkout: to be developed.</li>
      <li>Smart bundles and group booking: future.</li>
    </ul>
  </div>
);

export default Booking;
