# Technical Architecture

## Phase 1 principle

Build the simplest reliable public website that can later evolve without pretending the future clinical platform already exists.

## Recommended stack

- Next.js App Router
- React
- TypeScript strict mode
- Tailwind CSS
- Vercel deployment
- Vercel Analytics or equivalent privacy-reviewed analytics
- simple server-side early-access form endpoint

Do not add a database until the actual requirement is approved.

## Page architecture

Prefer:

- server components for static/content pages;
- typed content models;
- reusable visual primitives;
- isolated client components for animation/forms;
- metadata per route;
- accessible navigation;
- image optimisation.

## Suggested directories

```text
app/
  (marketing)/
    page.tsx
    about/
    personal/
    family/
    clinical/
    research/
    science/
    privacy/
    early-access/
components/
  brand/
  layout/
  marketing/
  motion/
  ui/
content/
  site.ts
  pages/
lib/
  analytics/
  forms/
  validation/
public/
  brand/
  graphics/
docs/
```

## Future platform separation

Do not let marketing-site implementation become the future clinical backend by accident.

Future architecture should separate:

1. user experiences;
2. application services;
3. Vascurra intelligence gateway;
4. structured data services;
5. security/consent services;
6. infrastructure.

## AI principle

The language model is not:

- the database;
- medication source of truth;
- emergency protocol;
- permissions system;
- clinical record.

Models should interact through explicit tools and structured services when future AI functionality is built.

## Phase 1 AI

No production clinical AI is required for launch. The animated brand and site content are sufficient.
