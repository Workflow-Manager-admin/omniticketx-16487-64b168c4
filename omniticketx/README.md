# OmniTicketX – Lightweight, Scalable React Template

This project implements the front-end for OmniTicketX: an AI-powered, multi-domain event and ticket platform with a clean, modern UI and robust modular architecture.

## Project Structure

The OmniTicketX frontend is structured for flexibility and maintainability, using modern React (no heavy frameworks).  
Here’s an overview of the main folders and responsibilities:

```
src/
├── api/             # API interfaces/services (future)
├── assets/          # Static assets (images, logos, icons)
├── components/      # Stateless/reusable UI elements (future)
├── constants/       # App-wide constants and enums (future)
├── containers/
│   └── MainContainer.js  # Top-level layout, orchestrates all site structure/routing
├── context/         # React context providers for global state (future)
├── features/        # Main product features (see below)
│   ├── UniversalSearch.js
│   ├── Booking.js
│   ├── Personalization.js
│   ├── ARPreview.js
│   ├── AdminPortal.js
│   └── Notifications.js
├── hooks/           # Custom React hooks (future)
├── layout/
│   ├── Navbar.js
│   ├── NotificationBar.js
│   └── Footer.js
├── localization/    # i18n setup (future)
├── pages/           # Top-level routed pages (future)
├── theme/           # Theming and breakpoints (future)
├── utils/           # Helpers and utilities (future)
├── App.js           # App root, routing through MainContainer
├── App.css          # Main CSS (brand styling, theming)
├── index.js
└── setupTests.js
```

## Feature Placeholders

Presently, key feature folders/components are stubbed for rapid scaffolding with clear TODOs:

- **UniversalSearch.js:** Stub for a cross-domain AI-powered search.  
  - TODOs: Keyword/filter search UI, intent-prediction/autocomplete, voice/image input, federated results.

- **Booking.js:** Placeholder for ticket reservation and real-time booking.
  - TODOs: Seat maps, availability, payment integration, bundling options, queue management.

- **Personalization.js:** Placeholder for AI recommendations and user insights.
  - TODOs: User-based suggestions, predictive alerts, emotion-driven engine, analytics integration.

- **ARPreview.js:** Stub for AR/VR event and seat simulation.
  - TODOs: In-browser AR integration (seat/stage view), VR preview, virtual attendance.

- **AdminPortal.js:** Placeholder admin/vendor dashboard.
  - TODOs: Event creation/analytics, dynamic pricing, staff/vendor controls, onboarding, inventory push.

- **Notifications.js:** Stub for smart reminders and multi-channel user engagement.
  - TODOs: Push/email/SMS, event/booking reminders, referral logic, notification UI.

Detailed code comments in each feature stub further outline the next development steps and future enhancements.

## Core Layout & Containers

- **MainContainer.js:**  
  The principal app shell wrapping all contents (Navbar, NotificationBar, feature routes, Footer).

- **Navbar.js:**  
  A responsive top bar with branded buttons linked to all major features.

- **NotificationBar.js:**  
  Site-wide banner for dynamic announcements.

- **Footer.js:**  
  Sticky, themed footnote with quick links.

## Development Guidelines

- **Component Convention:**  
  Place stateless display units in `components/`. Feature logic/UI co-locates in `features/`. Layout-wide wrappers in `layout/`.
- **Route New Features:**  
  Stub feature entry points in `features/` and add to `MainContainer.js` via `<Route .../>`.
- **Follow TODOs in Stubs:**  
  Open each placeholder to see task breakdowns in comments. Expand implementation iteratively.
- **Consistency:**  
  Use provided CSS variables and base styles; maintain orange/black brand palette.
- **Extensibility:**  
  Scaffold new folders under `src/` as the architecture in ARCHITECTURE.md recommends.

## TODOs & Next Steps

- Scaffold additional components, hooks, context, and utility helpers as features are built out.
- Complete API integrations, state management, and localization setup.
- Evolve from file placeholders to functional modules per TODOs in stubs.

For a full architecture diagram and development plan, see  
`src/ARCHITECTURE.md`.


## Features

- **Lightweight**: No heavy UI frameworks - uses only vanilla CSS and React
- **Modern UI**: Clean, responsive design with KAVIA brand styling
- **Fast**: Minimal dependencies for quick loading times
- **Simple**: Easy to understand and modify

## Getting Started

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Customization

### Colors

The main brand colors are defined as CSS variables in `src/App.css`:

```css
:root {
  --kavia-orange: #E87A41;
  --kavia-dark: #1A1A1A;
  --text-color: #ffffff;
  --text-secondary: rgba(255, 255, 255, 0.7);
  --border-color: rgba(255, 255, 255, 0.1);
}
```

### Components

This template uses pure HTML/CSS components instead of a UI framework. You can find component styles in `src/App.css`. 

Common components include:
- Buttons (`.btn`, `.btn-large`)
- Container (`.container`)
- Navigation (`.navbar`)
- Typography (`.title`, `.subtitle`, `.description`)

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
