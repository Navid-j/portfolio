# Navid Jahangiri — Portfolio

Personal portfolio built with [Astro](https://astro.build), deployed to GitHub Pages at
**https://navid-j.github.io**

> The GitHub repository must be named exactly `navid-j.github.io` for the site to be
> served from that address (GitHub user-site rule).

## Structure

```
src/
  data/profile.ts        # All personal content (single source of truth)
  layouts/BaseLayout.astro   # HTML shell, SEO, theme handling
  components/            # One component per page section
  styles/global.css      # Design tokens + shared primitives
public/                  # Static assets (favicon, og-image)
scripts/make-og.ps1      # Regenerates public/og-image.png
```

To update content (jobs, skills, projects), edit `src/data/profile.ts` only.

## Commands

| Command           | Action                                    |
| ----------------- | ----------------------------------------- |
| `npm install`     | Install dependencies                      |
| `npm run dev`     | Local dev server at `localhost:4321` |
| `npm run build`   | Production build to `./dist/`             |
| `npm run preview` | Preview the production build locally      |

## Deployment

GitHub Actions deploys automatically on every push to `main`/`master`
(see `.github/workflows/deploy.yml`).

One-time repo setup on GitHub: **Settings → Pages → Source → GitHub Actions**.
The site is served from the domain root (`/`) — configured in `astro.config.mjs`
(`site`). Do not set a `base` subpath.

## Social card

To regenerate the Open Graph image after changes:

```powershell
powershell -File scripts/make-og.ps1
```
