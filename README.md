# utsabdangol.com.np

Personal portfolio. Built with Astro + Tailwind, deployed to Cloudflare Pages via GitHub Actions.

## Setup

```bash
npm install
cp .env.example .env   # fill in your values
npm run dev            # localhost:4321
```

## Deploy

Every push to `main` triggers a GitHub Actions build and deploys to Cloudflare Pages.

Add these secrets to your GitHub repo (Settings → Secrets → Actions):

| Secret | Value |
|---|---|
| `CLOUDFLARE_API_TOKEN` | Cloudflare API token with Pages edit permission |
| `ADMIN_PASSWORD` | Your chosen admin password |
| `GH_TOKEN` | GitHub PAT with `repo` scope |
| `GITHUB_OWNER` | Your GitHub username |
| `GITHUB_REPO` | This repo name |

## Admin panel

Visit `/admin` on your live site. Uses your GitHub PAT to read/write `src/content.json` directly, which triggers a new deploy automatically.

## Content

Edit `src/content.json` to update bio, projects, and skills — either directly in code or via the admin panel.
