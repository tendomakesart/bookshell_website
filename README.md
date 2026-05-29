# BookShell Website

Launch site for BookShell, a local-first Windows EPUB/PDF reader.

Production domain: `https://bookshell.net/`

## Local Commands

Use `npm.cmd` in PowerShell on this machine.

```powershell
npm.cmd install
npm.cmd run dev
npm.cmd run build
npm.cmd run preview
```

## Pages

- `/` landing page
- `/features/` feature directory
- `/sales/` early-access sales page
- `/privacy/` privacy skeleton
- `/roadmap/` roadmap skeleton
- `/changelog/` changelog skeleton
- `/press/` media kit skeleton
- `/contact/` contact skeleton

## Launch Notes

- The waitlist form posts to `/api/waitlist`, a Cloudflare Pages Function in `functions/api/waitlist.js`.
- The current provider is Buttondown. Set `BUTTONDOWN_API_KEY` as an encrypted Cloudflare Pages secret before launch.
- Optional: set `BUTTONDOWN_TAG` to override the default `bookshell-early-access` subscriber tag.
- Build output is static and deployable from `dist/`.
- Canonical and social metadata are configured for `https://bookshell.net/`.

## Waitlist Setup

1. Create or open the BookShell newsletter/list in Buttondown.
2. Create an API key in Buttondown.
3. In Cloudflare, open Workers & Pages -> BookShell project -> Settings -> Variables and Secrets.
4. Add `BUTTONDOWN_API_KEY` as an encrypted secret.
5. Add `BUTTONDOWN_TAG` as a plain variable only if you want a different tag.
6. Redeploy the Pages project so the Function receives the new secret.

For local function testing, use Cloudflare's Pages dev runtime rather than plain Vite preview:

```powershell
npx wrangler pages dev dist --binding BUTTONDOWN_API_KEY=your_test_key
```

If the site is deployed as a Cloudflare Workers Static Assets project instead of Cloudflare Pages, this repo also includes `worker.js` and `wrangler.toml`. The Worker handles `/api/waitlist` and serves everything else from `dist/`.

Deploy/update that Worker with:

```powershell
npm.cmd run build
npx wrangler secret put BUTTONDOWN_API_KEY
npx wrangler deploy
```

## Pre-Launch Checklist

- Set `BUTTONDOWN_API_KEY` in Cloudflare Pages.
- Submit a test email on `bookshell.net` and confirm it appears in Buttondown.
- Point `bookshell.net` and `www.bookshell.net` at the chosen static host.
- Enable HTTPS for both apex and `www`.
- Run `npm.cmd run build`.
- Smoke test `/` and `/sales/` from the built `dist/` folder.
