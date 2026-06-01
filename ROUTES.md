# Routes

## Framework

This project uses Next.js 16 with the App Router.

Before changing routing, layouts, metadata, navigation, image behavior, or Server/Client Component boundaries, read the relevant local docs in:

```text
node_modules/next/dist/docs/
```

## Current Routes

| Route | File | Purpose |
| --- | --- | --- |
| `/` | `app/page.tsx` | Main luxury eyewear landing page |
| `/_not-found` | Next.js generated | Default not-found route |

## Root Layout

`app/layout.tsx` owns:

- HTML shell
- Global font variables
- Site metadata
- Open Graph metadata
- Body background and text defaults

## Anchor Navigation

The landing page uses in-page anchors:

- `#top`
- `#philosophy`
- `#collections`
- `#craftsmanship`
- `#journal`
- `#contact`

Keep `constants/site.ts` navigation items aligned with section IDs.

## Route Guidelines

- Do not add routes unless the brand experience needs a distinct page.
- Keep the homepage static unless dynamic data is explicitly introduced.
- Do not introduce ecommerce routes such as cart, checkout, account, or product detail pages.
- If new pages are added, document them here.

## Verification

The project owner will run:

```bash
npm run lint
npm run build
```

Agents should not run those commands.
