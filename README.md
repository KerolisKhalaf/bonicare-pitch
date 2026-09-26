# BoniCare — Connected Orthopedic Care

Business-focused product presentation for **BoniCare**, built by **Deploy Or Die**.

A 15-slide interactive deck (React + TypeScript + Vite + Tailwind + Framer Motion) that explains the
customer problem, Egyptian market context, product workflow, feature-to-value story, competitive
positioning, business hypotheses, proof of build, and the technical foundation behind BoniCare.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview   # serve the production build locally
```

## Controls

- `→` / `Space` / scroll down — next slide
- `←` / scroll up — previous slide
- `Home` / `End` — jump to first / last slide
- `F` — toggle fullscreen
- Left-edge dots or bottom-right arrows — click to navigate

## Deploying to GitHub Pages

This repo ships with `.github/workflows/deploy.yml`, which builds and deploys `dist/` to GitHub Pages on
every push to `main`.

**Before your first deploy:**

1. In your GitHub repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
2. Open `vite.config.ts` and set `base` to match your repository name:

   ```ts
   base: '/<your-repo-name>/',
   ```

   (It currently defaults to `/bonicare-pitch/` — update this if your repo is named differently, or the
   site's assets will 404 on Pages.)
3. Push to `main`. The workflow builds and publishes automatically — no manual server setup needed.

## Notes on content accuracy

The business deck intentionally distinguishes verified product capabilities from hypotheses. The
competitive slides use public positioning only and flag pricing, market size, adoption, regulatory,
and feature-parity claims for current diligence. Update `src/slides/BusinessDeck.tsx` whenever pilot
evidence, pricing, competitor research, or infrastructure milestones are verified.
