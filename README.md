# BoniCare — From Application to Automated Cloud Delivery

Hackathon presentation website for **BoniCare**, built by **Deploy Or Die**.

A 16-slide interactive deck (React + TypeScript + Vite + Tailwind + Framer Motion) telling the story of
BoniCare's platform engineering — from the product problem through Docker Compose, Azure, CI/CD, AKS,
security, and observability.

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

Slide content distinguishes between what's already implemented (containerized services, Docker Compose
deployment, an initial Azure deployment, authored Kubernetes manifests, a working Jenkins-based CI
pipeline) and what's targeted next (full AKS deployment, Key Vault + Managed Identity, Azure Monitor,
autoscaling). Update `src/slides/*.tsx` as the underlying infrastructure work progresses — the "Current
State → Target State" slide (`Slide14Roadmap.tsx`) is the fastest place to reflect new milestones.
