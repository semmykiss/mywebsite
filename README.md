# Pentacore Systems

Corporate marketing website for Pentacore Systems, an IT consulting and digital transformation company. Built with Next.js 16 (App Router), React 19, Tailwind CSS v4, and Framer Motion.

## Getting Started

Requires Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint     # run ESLint
```

## Running with Docker

The included `Dockerfile` produces a minimal production image using Next.js's standalone output, and `docker-compose.yaml` runs it on port 3000.

```bash
docker compose up --build
```

Then visit [http://localhost:3000](http://localhost:3000). Use `docker compose up -d --build` to run it detached, and `docker compose down` to stop it.

## Project Structure

- `src/app` — routes (App Router)
- `src/components` — page sections and UI components, grouped by area (home, services, about, contact, etc.)
- `src/lib` — shared utilities
- `public` — static assets, including the Pentacore logo and favicon

## Deployment

The app builds to a standalone Next.js server (`output: "standalone"` in `next.config.ts`), so it can run behind any container platform, or be deployed directly to [Vercel](https://vercel.com/new).
