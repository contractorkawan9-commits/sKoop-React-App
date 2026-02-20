# sKoop Project Context

## Project Overview

**sKoop** is a React-based web application for an ice cream shop named "sKoop & wHoop". The application showcases flavors, offers, and brand information, emphasizing a customizable ice cream experience.

### Key Technologies
*   **Frontend Framework:** React 19
*   **Build Tool:** Vite 7
*   **Routing:** React Router Dom 7 (installed and implemented)
*   **Linting:** ESLint

### Architecture
*   **Entry Point:** `src/main.jsx` initializes the app using `createRoot`.
*   **Main Layout:** `src/App.jsx` uses `react-router-dom` to manage navigation between different pages.
*   **Pages:** Located in `src/pages/`.
    *   `HomePage.jsx`: The landing page with branding, navigation links, and introductory content.
    *   `Flavours.jsx`: A page displaying a grid of available ice cream flavors.
*   **Assets:** Static images are stored in `public/images/` and `public/flavoursImg/`.

## Building and Running

The project uses standard Vite scripts defined in `package.json`.

*   **Development Server:**
    ```bash
    npm run dev
    ```
    Starts the local development server with Hot Module Replacement (HMR).

*   **Production Build:**
    ```bash
    npm run build
    ```
    Bundles the application for production.

*   **Preview Build:**
    ```bash
    npm run preview
    ```
    Locally previews the production build.

*   **Linting:**
    ```bash
    npm run lint
    ```
    Runs ESLint to check for code quality issues.

## Development Conventions

*   **Component Style:** Functional components using named exports.
*   **Styling:** CSS files are co-located with components or in the same directory (e.g., `HomePage.css`, `Header1.css`) and imported directly.
*   **Navigation:** currently relies on hash links (`#Flavours`, etc.).
*   **Code duplication:** The header section is currently duplicated across pages and could be refactored into a reusable component.
*   **Image Referencing:** Images are served from the `public` directory.

## Directory Structure Key

*   `src/`
    *   `pages/`: Application views and specific styles.
    *   `assets/`: Source assets (currently contains default Vite assets).
*   `public/`: Static assets served at the root path.