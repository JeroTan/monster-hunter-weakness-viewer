# Astro + Cloudflare Worker Setup

This project is configured as an Astro application explicitly designed to run on Cloudflare Workers.

## What's Included

- **Astro**: Configured with `@astrojs/cloudflare` for deployment to Cloudflare Workers.
- **Worker Entry Point**: A dedicated worker entry point is located at `src/cloudflare/worker.ts` giving you direct access to the `fetch`, `queue`, and `scheduled` events.
- **React**: Configured via `@astrojs/react` for using React components. The Vite build is optimized for React on the Edge.
- **Tailwind CSS**: Set up via the official Vite plugin `@tailwindcss/vite`.
- **Utilities**: `lodash`, `p-queue`, and `jose` (for edge-compatible cryptography) are pre-installed.
- **Testing**: `vitest` is set up for unit testing.
- **SEO**: `@astrojs/sitemap` is configured.

## Running Locally

To start the development server:

```bash
npm run dev
```

## Building for Production

To build the project for Cloudflare Workers:

```bash
npm run build
```

The output will be compiled down to your Cloudflare Worker format.