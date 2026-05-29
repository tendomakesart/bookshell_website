# BookShell Website

Launch site for BookShell, a local-first Windows EPUB/PDF reader.

Production domain: `https://bookshell.online/`

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
- `/sales/` early-access sales page

## Launch Notes

- The waitlist form is static-only for now. It validates email and shows a local success state.
- Wire the real provider in `src/waitlist.ts` when the waitlist backend is chosen.
- Build output is static and deployable from `dist/`.
- Canonical and social metadata are configured for `https://bookshell.online/`.

## Pre-Launch Checklist

- Replace static waitlist helper with a real endpoint.
- Point `bookshell.online` and `www.bookshell.online` at the chosen static host.
- Enable HTTPS for both apex and `www`.
- Run `npm.cmd run build`.
- Smoke test `/` and `/sales/` from the built `dist/` folder.
