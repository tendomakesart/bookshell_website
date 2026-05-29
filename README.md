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

- The waitlist form is static-only for now. It validates email and shows a local success state.
- Wire the real provider in `src/waitlist.ts` when the waitlist backend is chosen.
- Build output is static and deployable from `dist/`.
- Canonical and social metadata are configured for `https://bookshell.net/`.

## Pre-Launch Checklist

- Replace static waitlist helper with a real endpoint.
- Point `bookshell.net` and `www.bookshell.net` at the chosen static host.
- Enable HTTPS for both apex and `www`.
- Run `npm.cmd run build`.
- Smoke test `/` and `/sales/` from the built `dist/` folder.
