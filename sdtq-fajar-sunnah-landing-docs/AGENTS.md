# AGENTS.md

## Project

SDTQ Fajar Sunnah PPDB Landing Page.

## Required Reading

Before editing code, read:

- `VIBE_CODING_INSTRUCTIONS.md`
- `PROJECT_BRIEF.md`
- `DESIGN_SYSTEM.md`
- `ANTI_SLOP_GUIDE.md`
- `CONTENT_MAP.md`
- `DATA_MODEL.md`

## Core Rules

- Astro first.
- Static-first.
- No React unless explicitly justified.
- No invented school data.
- No invented links.
- No AI-generated school/student imagery.
- Mobile-first.
- Accessibility required.
- Performance budget required.
- Anti-slop review required.

## Anti-Slop

Project is intended to use anti-slop AI rules.

Install/update through:

```bash
npx antislop-ai
```

Do not bypass anti-slop design review.

## Delivery

Before completing:

```bash
pnpm astro check
pnpm build
```

Then run the project QA and anti-slop delivery gate.
