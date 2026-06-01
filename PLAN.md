# Plan

## Goal

Create and maintain a premium luxury eyewear brand landing page that feels like an award-winning fashion campaign site rather than a product catalog.

## Current Direction

- Brand: BILL BIRD
- Experience: immersive, editorial, cinematic, minimal, luxury-focused
- Primary message: Eyewear Without Compromise
- Business model on page: brand storytelling and private showroom inquiry, not ecommerce

## Page Sections

1. Floating luxury navbar
2. Fullscreen cinematic hero
3. Brand philosophy
4. Signature collections
5. Craftsmanship story
6. Horizontal scroll gallery
7. Featured frames
8. Brand manifesto
9. Featured campaign
10. Journal preview
11. Contact and showroom

## Implementation Priorities

- Preserve App Router structure.
- Keep most section content as Server Components.
- Isolate motion and browser APIs in Client Components.
- Keep animation refined and performant.
- Maintain strong mobile storytelling, not just desktop layouts.
- Keep content centralized in `constants/site.ts`.
- Keep visual tokens in `app/globals.css`.

## Verification

The project owner will run:

```bash
npm run lint
npm run build
```

Agents should not run those commands.
