# Homes Food Products - Agent Guidelines

This document outlines the architecture, coding standards, and deployment rules for the Homes Food Products website. As an AI Agent working on this codebase, you must follow these guidelines.

## Tech Stack
- Framework: Next.js 14+ (App Router)
- Language: JavaScript / JSX
- Styling: Custom CSS (`app/globals.css`)

## Code Architecture
- `app/`: Next.js App Router structure. Keep pages minimalistic.
- `components/`: React components. Use these to encapsulate UI logic (e.g., `ProductList.jsx`, `HomePage.jsx`).
- `lib/`: Utility files and static data (e.g., `whatsapp.js`, `site.js`).

## Coding Standards
1. **Design & UX:** Keep the user experience minimalistic, with good whitespace, readable typography, and soft box shadows. Use the existing CSS variables in `globals.css` where possible.
2. **SEO:** Ensure new pages have semantic HTML tags and appropriate metadata configurations in `layout.jsx` or page-level metadata. Include alt texts on all images.
3. **Data Structure:** Keep product and site data in `lib/site.js`. If making UI updates for products, try to pass data as props to components for future scalability (e.g., filtering or searching).

## Testing and Execution
1. **Local Development:** Run `npm run dev` to test changes locally.
2. **Docker:** The project includes a `Dockerfile` and `docker-compose.yml`. You can run `docker compose up --build` to verify changes in a containerized environment.
3. **Build Check:** Always run `npm run build` after changes to ensure Next.js compiles successfully.

## Hosting & Deployment
- The Next.js app supports dual deployment modes.
- `next.config.mjs` is configured to output static files (`output: 'export'`) when running in GitHub Actions for GitHub Pages deployment.
- When built outside of GitHub Actions (like Vercel, AWS, or local production), it defaults to a standard SSR Next.js build.
- Do not remove the `isGithubActions` condition from `next.config.mjs` unless instructed.
