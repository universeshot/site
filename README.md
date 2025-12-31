# Universe Shot LLC Site

Minimal Hugo site for Universe Shot LLC, structured for Cloudflare Pages deployment.

## Local development
- Run the server with drafts: `hugo server -D`
- Site builds without external themes or Node tooling.

## Build
- Production build: `hugo --minify`

## Information architecture
- Home: `content/_index.md`
- North Galaxy: `content/north-galaxy/`
- Matter: `content/matter/`
- Time: `content/time/`
- Observatory: `content/observatory/` (blog entries, newest-first)
- Charts: `content/charts/`
- About: `content/about.md`

## Authoring examples
- New observatory post: `hugo new observatory/my-post.md`
- New star: `hugo new north-galaxy/new-star/index.md`
- New chart doc: `hugo new charts/my-doc.md`

## Cloudflare Pages Deployment
- Framework preset: Hugo
- Build command: `hugo --minify`
- Build output directory: `public`
- Root directory: `/`
- Environment variable: `HUGO_VERSION = latest`

Notes:
- Cloudflare Pages will auto-build on pushes to `main` and create preview deployments for pull requests.
- Custom domain `universeshot.com` is attached via Cloudflare Pages project settings.
