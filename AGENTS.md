# Agent Instructions

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes. APIs, conventions, and file structure may differ from older Next.js versions or training data. Before writing code that depends on framework behavior, read the relevant guide in `node_modules/next/dist/docs/`. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project

This repository is a premium luxury eyewear landing page for BILL BIRD. It should feel editorial, cinematic, sophisticated, and campaign-led. It is not an ecommerce website.

## Do Not Run

Do not run these commands:

```bash
npm run lint
npm run build
```

The project owner will run lint and build checks manually.

## Working Rules

- Use the App Router architecture.
- Prefer Server Components for static sections and content.
- Use Client Components only for animation, scroll behavior, browser APIs, and interactive navigation.
- Keep implementation production-ready, typed, accessible, and responsive.
- Preserve the luxury campaign direction. Avoid ecommerce UI, product grids, pricing, carts, ratings, generic SaaS sections, and template-like layouts.
- Keep visible copy, content data, and image references centralized where possible.
- Use `next/image` for image delivery.
- Respect `prefers-reduced-motion` for animation-heavy work.
- Keep edits scoped and avoid unrelated refactors.

## Key Files

- `app/page.tsx`: landing page composition
- `app/layout.tsx`: root metadata and fonts
- `app/globals.css`: Tailwind v4 theme tokens and global styles
- `constants/site.ts`: main content model
- `sections/`: page sections
- `components/`: shared UI, providers, and motion primitives
- `hooks/use-lenis.ts`: smooth scroll setup
- `animations/easings.ts`: shared motion settings
