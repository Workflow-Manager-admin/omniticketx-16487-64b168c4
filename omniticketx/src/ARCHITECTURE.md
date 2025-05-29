# OmniTicketX Frontend Architecture & Developer Guide

## 1. Overview

OmniTicketX is built as a modular React frontend—ideal for scalable ticketing, event discovery, booking, and future AI-powered expansion.
This guide outlines the folder/component structure, actual feature/component stubs in use, and actionable steps for further development.

---

## 2. Up-to-Date Folder & File Structure

```
src/
├── api/             # API interface/services (planned)
├── assets/          # Static media assets (planned)
├── components/      # Stateless/reusable UI elements (planned)
├── constants/       # App-wide constants/enums (planned)
├── containers/
│   └── MainContainer.js  # The principal shell with navigation, notification, feature routing, and footer
├── context/         # Shared React context (planned)
├── features/
│   ├── UniversalSearch.js    # Universal/cross-domain search (stub)
│   ├── Booking.js            # Booking workflows (stub)
│   ├── Personalization.js    # AI/user recommendations (stub)
│   ├── ARPreview.js          # AR/VR seat/event previews (stub)
│   ├── AdminPortal.js        # Vendor/admin dashboard (stub)
│   └── Notifications.js      # Multi-channel reminder/notification hub (stub)
├── hooks/           # Custom logic hooks (planned)
├── layout/
│   ├── Navbar.js             # Responsive, multi-route navigation bar
│   ├── NotificationBar.js    # Announcements and alerts
│   └── Footer.js             # Sticky, themed footer
├── localization/    # i18n support (planned)
├── pages/           # Standalone/routable pages (planned)
├── theme/           # Brand styles, breakpoints (planned)
├── utils/           # Helper utilities (planned)
├── App.js
├── App.css
├── index.js
└── setupTests.js
```

---

## 3. Architecture/Component Map

- **index.js** → Renders `<App />`
- **App.js** → Boots up app with `<MainContainer />`, wraps all routes
- **MainContainer.js** (in containers/) → Lays out the site, orchestrates navigation and routing of feature modules
  - **Navbar.js, NotificationBar.js, Footer.js** (in layout/) → Sit at the app’s “frame”: consistent across all pages/routes
  - **Routes** → Stubs for future routeable and feature-rich pages/components

- **Feature Components (features/):**
  - **UniversalSearch.js:** Entry for smart search/discovery
    - _TODOs in file_: Filter/search UI, AI enhancement, intent prediction, voice/image integration, multi-API results
  - **Booking.js:** Booking widget and flows
    - _TODOs_: Seat maps, payment, queue/group booking, refunds/waitlists
  - **Personalization.js:** Personalized recommendations/insights
    - _TODOs_: AI suggestions, emotion-based engine, analytics
  - **ARPreview.js:** For upcoming AR/VR seat and event previews
    - _TODOs_: AR integration, VR simulation, virtual attendance
  - **AdminPortal.js:** Stub for vendor/admin control/analytics
    - _TODOs_: Event creation, dashboards, dynamic pricing, onboarding
  - **Notifications.js:** Smart reminders and engagement center
    - _TODOs_: Push/email/SMS, booking reminders, incentives

---

## 4. Detailed Current Feature Placeholders & Responsibilities

Each `src/features/*.js` file implements a clear stub and lays out planned next steps right in top-level file docblocks (`/** ... TODO: ... */`).  
This encourages iterative feature development and onboarding for new contributors by documenting the intended responsibilities and next integration tasks.

**How to extend:**  
- Add UI and state as described in each file’s TODOs.
- Follow layout and routing patterns from MainContainer for scaling up additional features.

---

## 5. Developer Guidelines

- **Routing:**  
  Always add new routeable features in `features/` and route them via `MainContainer.js`.
- **Component hierarchy:**  
  If a unit is reusable and not feature-tied, prefer `components/`.
- **Layout:**  
  Site-wide wrappers/components belong in `layout/`.
- **CSS/Branding:**  
  Use CSS variables and styles in `App.css`. Extend mobile-first best practices.
- **Stub Expansion:**  
  Each feature stub includes a comprehensive TODO. Start with simple UI, then integrate logic step-by-step.
- **Composability:**  
  Structure logic in hooks/context/utils as codebase matures.

---

## 6. Maintenance and Future Steps

- New features: Scaffold a stub in `features/`, document TODOs in the file header, route via MainContainer.
- As state management/API integrations are needed, implement supporting files/folders per this architecture.
- Expand localization, tests, and accessibility as new capabilities are built out.

---

