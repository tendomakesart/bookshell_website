import { AmbientBackdrop } from "../components/AmbientBackdrop";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { WebsiteSplash } from "../components/WebsiteSplash";

const featureGroups = [
  {
    title: "Reading Experience",
    copy: "EPUB and PDF reading with paged or continuous scroll modes, single-page or two-page spreads, smooth navigation, table-of-contents support, progress display, time-left estimates, fullscreen focus, and per-book layout memory.",
    items: ["EPUB + PDF", "Paged or scroll", "Two-page spread", "Resume position", "Reader profiles"],
    image: "/app-screenshots/reader-maximized.png"
  },
  {
    title: "PDF Markup",
    copy: "PDF zoom, fit modes, thumbnails, outline navigation, search, bookmarks, highlights, underline/wavy/strike styles, sticky notes, freehand markup, shapes, crop memory, OCR, clean scan mode, and annotation export.",
    items: ["OCR", "Crop memory", "Clean scans", "Freehand markup", "Burn-in export"],
    image: "/app-screenshots/book-details.png"
  },
  {
    title: "Library Management",
    copy: "A beautiful local library with cover/list/compact views, smart shelves, collections, metadata editing, series and author organization, duplicate detection, folder watching, drag-and-drop import, health checks, and a cover wall.",
    items: ["Smart shelves", "Bulk metadata", "Folder watch", "Health panel", "Cover wall"],
    image: "/app-screenshots/library-home-dark.png"
  },
  {
    title: "Search and Navigation",
    copy: "Search books, notes, highlights, tags, collections, chapters, and local concepts. Jump through the command palette to books, chapters, annotations, collections, settings, citations, and exports.",
    items: ["Whole-library search", "Saved searches", "Command palette", "Jump anywhere", "Keyboard shortcuts"],
    image: "/app-screenshots/command-palette.png"
  },
  {
    title: "Notes, Shell Notes, and Pearls",
    copy: "Highlights, notes, tags, filters, snapshots, annotation repair, export formats, book-level notebooks, citations, Pearls, review notes, Markdown study sheets, and cross-library Pearl shelves.",
    items: ["Shell Notes", "Pearls", "Snapshots", "Markdown export", "Portable data"],
    image: "/app-screenshots/library-signature-dark.png"
  },
  {
    title: "Soundtracks and TTS",
    copy: "A launch sound library, local music import, mood tagging, per-book or per-profile playlists, soundtrack dock, gapless loops, crossfade, TTS mini-player, sentence highlighting, sleep timer, and music ducking.",
    items: ["55-ish launch tracks", "Local music", "Mood tags", "Read aloud", "Music ducking"],
    image: "/app-screenshots/mood-calibration.png"
  },
  {
    title: "Private Discovery",
    copy: "Local-first recommendations from your metadata, reading history, abandonment patterns, collections, annotation themes, mood tags, and soundtrack profiles, with optional anonymous aggregate discovery and no follower graph.",
    items: ["Read next", "Return to this", "Anonymous pulse", "No public profile", "Explainable suggestions"],
    image: "/app-screenshots/library-recommendations-dark.png"
  },
  {
    title: "Export and Interop",
    copy: "Takeout-friendly local exports for metadata, annotations, covers, settings, collections, tags, reading positions, Markdown, JSON, CSV, TXT, BibTeX, CSL JSON, Obsidian, Notion, Readwise, Zotero, Calibre, OPDS, and deep links.",
    items: ["Export everything", "Markdown/JSON/CSV", "BibTeX/CSL", "Obsidian/Notion", "Deep links"],
    image: "/app-screenshots/artifact-studio-cover-wall.png"
  },
  {
    title: "Accessibility and Polish",
    copy: "Accessibility profiles, low-vision and dyslexia-friendly modes, high contrast, large UI controls, keyboard navigation, screen reader labels, visible focus rings, reduced motion, skeleton loaders, autosave, undo, and responsive desktop layouts.",
    items: ["Reduced motion", "Large UI", "High contrast", "Autosave", "Undo support"],
    image: "/app-screenshots/settings-panel.png"
  }
];

export function FeaturesPage() {
  return (
    <>
      <WebsiteSplash />
      <AmbientBackdrop />
      <Header active="features" />
      <main className="features-page">
        <section className="info-hero">
          <div>
            <p className="eyebrow">Features</p>
            <h1>A private reading studio, not just another file opener.</h1>
            <p className="hero-lede">
              BookShell combines a beautiful local EPUB/PDF reader, powerful notes, private discovery, reading soundtracks,
              and export-friendly data without surrendering your library to a cloud account.
            </p>
          </div>
          <img className="info-hero-shot" src="/app-screenshots/reader-maximized.png" alt="BookShell reader captured during the app screenshot audit." />
        </section>

        <section className="feature-directory" aria-label="BookShell feature directory">
          {featureGroups.map((group) => (
            <article className="feature-directory-card" key={group.title}>
              <img src={group.image} alt="" aria-hidden="true" />
              <h2>{group.title}</h2>
              <p>{group.copy}</p>
              <div>
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
