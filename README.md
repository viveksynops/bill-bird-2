# BILL BIRD

Premium luxury eyewear landing page built as an immersive brand experience, not an ecommerce storefront. The page uses editorial storytelling, cinematic campaign imagery, scroll-led motion, and restrained typography to present eyewear as crafted design objects.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- GSAP ScrollTrigger
- Lenis smooth scrolling
- Radix Slot-based button primitive

## Structure

```text
app/          Route entry, metadata, global styles
sections/     Landing page sections
components/   Shared UI, motion, and providers
constants/    Site copy and image references
types/        Shared content types
animations/   Motion presets
hooks/        Client-side animation hooks
lib/          Shared utilities
public/       Static campaign assets
```

## Development

```bash
npm run dev
npm run lint
npm run build
```

The main route is composed in `app/page.tsx`. Most sections are Server Components; Client Components are limited to scroll, animation, and interactive navigation concerns.
