import React from "react";

/**
 * PUBLIC_INTERFACE
 * ARPreview: Event/seat preview in AR or VR, before booking.
 *
 * TODO:
 * - Integrate with AR libraries for in-browser seat/stage visualization.
 * - Add VR event layout simulation, integration with event APIs for layouts.
 * - (Future) Virtual attendance, immersive previews, ticket-linked collectibles.
 */
const ARPreview = () => (
  <div style={{
    border: '1px dashed var(--kavia-orange)',
    padding: 20, margin: "24px 0",
    background: "rgba(232,122,65,0.05)"
  }}>
    <strong>ARPreview Stub</strong>
    <ul style={{fontSize:'.97rem', marginTop:10}}>
      <li>AR/VR preview components will appear here.</li>
      <li>Upcoming: seat/stage visualization & virtual preview.</li>
    </ul>
  </div>
);

export default ARPreview;
