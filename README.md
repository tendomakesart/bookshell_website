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

- The waitlist form posts to `/api/waitlist`.
- The production waitlist stores signups in Cloudflare D1 through the `WAITLIST_DB` binding.
- Optional: set `WAITLIST_TAG` to override the default `bookshell-early-access` signup tag.
- Build output is static and deployable from `dist/`.
- Canonical and social metadata are configured for `https://bookshell.net/`.

## Waitlist Setup

Cloudflare D1 is the source of truth for launch signups.

1. Create the D1 database:

```powershell
npx wrangler d1 create bookshell_waitlist
```

2. Copy the returned `database_id` into `wrangler.toml` by uncommenting the `[[d1_databases]]` block.
3. Apply the migration:

```powershell
npx wrangler d1 migrations apply bookshell_waitlist --remote
```

4. Build and deploy:

```powershell
npm.cmd run build
npx wrangler deploy
```

5. Submit a test email on `bookshell.net`.
6. Confirm signups:

```powershell
npx wrangler d1 execute bookshell_waitlist --remote --command "select email, source, tag, created_at from waitlist_signups order by created_at desc limit 10;"
```

Export later with:

```powershell
npx wrangler d1 execute bookshell_waitlist --remote --command "select email, source, tag, created_at from waitlist_signups order by created_at desc;" --json
```

For local function testing, use Cloudflare's runtime rather than plain Vite preview:

```powershell
npm.cmd run build
npx wrangler dev
```

If the site is deployed as a Cloudflare Workers Static Assets project instead of Cloudflare Pages, this repo also includes `worker.js` and `wrangler.toml`. The Worker handles `/api/waitlist` and serves everything else from `dist/`.

Deploy/update that Worker with:

```powershell
npm.cmd run build
npx wrangler deploy
```

## Pre-Launch Checklist

- Create and bind the `bookshell_waitlist` D1 database.
- Apply `migrations/0001_waitlist_signups.sql`.
- Submit a test email on `bookshell.net` and confirm it appears in D1.
- Point `bookshell.net` and `www.bookshell.net` at the chosen static host.
- Enable HTTPS for both apex and `www`.
- Run `npm.cmd run build`.
- Smoke test `/` and `/sales/` from the built `dist/` folder.
