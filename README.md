# Kasie Ugwu – Developer Portfolio

This is a personal portfolio site for **Kasie Ugwu**, a software developer who builds modern web and mobile experiences using React, React Native, and related technologies.  

The site showcases:
- A hero section that introduces Kasie and her focus.
- An about section with background and current skills.
- A detailed experience section ("Where I've Worked").
- Featured projects with case‑study style descriptions.
- A grid of other noteworthy projects.
- Contact information and social links.

The project is built with **Vite**, **React 18**, **Tailwind CSS**, and **DaisyUI**.

---

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS, DaisyUI
- **Language**: JavaScript (ES Modules)
- **Testing**:
  - Unit tests: Vitest + React Testing Library
  - E2E tests: Playwright

---

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn

### Installation

```bash
git clone <your-repo-url>
cd portfolio
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Then open the printed URL (usually `http://localhost:5173`) in your browser.

### Production Build

```bash
npm run build
npm run preview
```

`npm run build` creates an optimized production build.  
`npm run preview` serves the built files locally so you can verify the result.

---

## Project Structure

Key folders and files:

- `src/main.jsx` – React entry point, renders the app into `index.html`.
- `src/App.jsx` – Root component that renders the landing page.
- `src/pages/Landing.jsx` – Layout wrapper for all sections.
- `src/sections/`
  - `Home.jsx` – Hero section ("Hi, my name is…").
  - `About.jsx` – Background, skills, and technologies.
  - `Jobs.jsx` – “Where I've Worked” experience timeline.
  - `Projects.jsx` – Featured project case studies.
  - `OtherProjects.jsx` – Grid of additional projects.
  - `Contact.jsx` – Call to action and contact details.
  - `SideLeft.jsx`, `SideRight.jsx` – Social/email sidebars.
  - `Footer.jsx` – Footer links and social icons.
- `src/components/Header.jsx` – Top navigation bar and links.
- `src/assets/images/` – Project and profile images.

Testing-related files (added as part of this setup):

- `src/setupTests.js` – Test environment setup (Jest DOM matchers).
- `src/sections/Home.test.jsx` – Example unit test for the Home section.
- `playwright.config.js` – Playwright configuration for E2E tests.
- `tests/home.spec.js` – Example end‑to‑end test for the landing page.

---

## Available Scripts

In addition to the standard Vite scripts, the project defines testing scripts:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:e2e": "playwright test"
  }
}
```

### Unit Tests

Run unit tests in watch mode:

```bash
npm test
```

Run tests with the Vitest UI:

```bash
npm run test:ui
```

### End‑to‑End Tests (Playwright)

Before running E2E tests, make sure Playwright browsers are installed:

```bash
npx playwright install
```

Run the E2E test suite:

```bash
npm run test:e2e
```

By default, Playwright:
- Starts the Vite dev server.
- Runs tests against `http://127.0.0.1:5173`.
- Uses a desktop Chromium profile.

---

## Testing Overview

### Unit Testing

Unit tests are written with **Vitest** and **React Testing Library**.  

Example: `src/sections/Home.test.jsx` verifies that:
- The hero section renders the greeting.
- Your name appears on the page.
- The "Get in touch" call‑to‑action is present.

You can add more tests for other sections (About, Jobs, Projects, etc.) by:
- Creating `*.test.jsx` files alongside the components.
- Using `render` and `screen` from React Testing Library to assert on the UI.

### End‑to‑End Testing

E2E tests are defined under `tests/` and use **Playwright**.  

Example: `tests/home.spec.js` checks that:
- The home page loads.
- The main heading and key text are visible.

You can extend these tests to:
- Verify navigation between sections.
- Check that important links (projects, social profiles, contact) work.
- Assert that the page is responsive at different viewport sizes.

---

## Customizing Content

You can quickly update the portfolio content by editing:

- Experience:
  - `src/sections/Jobs.jsx` – A `roles` array defines companies, titles, dates, and bullet points.
- Featured projects:
  - `src/sections/Projects.jsx` – A `projects` array defines project metadata (title, description, tech stack, links, and images).
- Other projects:
  - `src/sections/OtherProjects.jsx` – Cards for additional work with GitHub and live links.
- Branding:
  - `public/favicon.svg` – Favicon with initials and colors.
  - `src/sections/Home.jsx` and `src/components/Header.jsx` – Hero copy and navigation.

---

## Deployment

This project can be deployed to any static hosting provider that supports Vite builds, such as:

- Vercel
- Netlify
- GitHub Pages

Typical steps:

1. Run `npm run build`.
2. Deploy the contents of the `dist` directory to your hosting provider.

Consult your chosen platform’s documentation for the exact deployment steps.

---

## License

You can choose any license you prefer for this portfolio (for example, MIT), or keep it private and unlicensed if it is only for personal use.

