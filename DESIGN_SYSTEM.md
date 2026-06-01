# Design System

## Brand Feel

BILL BIRD should feel restrained, editorial, tactile, and cinematic. The interface should support luxury storytelling without looking like a shop, SaaS page, or generic Tailwind template.

## Color Tokens

- Background: `#F8F6F2`
- Primary text: `#111111`
- Soft beige: `#E9E1D7`
- Warm brown accent: `#8B7355`
- Dark campaign ground: `#111111`

Use color sparingly. Warm brown is an accent for labels, hover states, and fine details.

## Typography

- Editorial headlines: Cormorant Garamond via `--font-cormorant`
- Body/UI: Inter via `--font-inter`
- Headline style: large scale, thin weight, tight line height, generous whitespace
- UI labels: small uppercase, wide tracking, restrained contrast

Do not use viewport-scaled font sizes directly. Use `clamp()` with stable minimums and maximums.

## Layout

- Prefer full-width sections with constrained inner content.
- Use asymmetry, large imagery, and editorial spacing.
- Avoid nested cards and generic grid-heavy marketing layouts.
- Use stable image aspect ratios to prevent layout shift.
- Keep mobile layouts stacked, readable, and touch-friendly.

## Imagery

- Campaign images live in `public/campaign/`.
- Use `next/image`.
- Hero and campaign images may be full-bleed.
- Product imagery should feel like design objects, not shopping thumbnails.

## Motion

- Framer Motion handles text/image reveal and parallax.
- GSAP ScrollTrigger handles the pinned horizontal gallery.
- Lenis handles smooth scrolling.
- Respect reduced-motion preferences.
- Motion should feel slow, precise, and premium.

## Components

- `components/ui/button.tsx` is the primary button primitive.
- `components/motion/reveal.tsx` is the shared reveal wrapper.
- Keep component APIs small and section ownership clear.

## Prohibited UI Patterns

- Pricing cards
- Add-to-cart buttons
- Ratings and review widgets
- Product catalog grids
- SaaS feature blocks
- Busy dashboards
- Decorative UI that does not support the brand story
