import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ProductMockup } from "../components/ProductMockup";
import { WaitlistForm } from "../components/WaitlistForm";

const featureTiles = [
  {
    eyebrow: "Local-first library",
    title: "A Windows reading room that starts with your files.",
    copy: "Import EPUBs and PDFs into a calm local library with progress, metadata, and reading state close at hand."
  },
  {
    eyebrow: "Reader control",
    title: "Typography and themes are part of the reading surface.",
    copy: "Tune font size, line height, margins, page mode, and reading themes without turning the app into a cockpit."
  },
  {
    eyebrow: "Shell Notes",
    title: "Highlights become something useful after the chapter ends.",
    copy: "Collect notes, bookmarks, citations, and favorite Pearls into a study panel built for review and export."
  },
  {
    eyebrow: "Reading atmosphere",
    title: "The app can fade back while the room stays alive.",
    copy: "Subtle reader chrome, accessible controls, read-aloud support, and optional soundtrack moods keep long sessions comfortable."
  }
];

export function LandingPage() {
  return (
    <>
      <Header active="home" />
      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Local-first Windows reader for power readers</p>
            <h1>BookShell turns your reading stack into a quiet, useful room.</h1>
            <p className="hero-lede">
              A desktop EPUB and PDF reader with a beautiful local library, tuned reading surface, Shell Notes, Pearls,
              and exports for the passages you actually want to find again.
            </p>
            <div className="hero-actions">
              <WaitlistForm />
              <a className="secondary-link" href="/sales/">
                See how BookShell works
              </a>
            </div>
          </div>
          <ProductMockup />
        </section>

        <section className="proof-strip" aria-label="BookShell highlights">
          <span>Windows app</span>
          <span>Local-first library</span>
          <span>EPUB, PDF, notes, and exports</span>
        </section>

        <section className="feature-grid" aria-label="BookShell features">
          {featureTiles.map((feature) => (
            <article className="feature-tile" key={feature.title}>
              <p className="eyebrow">{feature.eyebrow}</p>
              <h2>{feature.title}</h2>
              <p>{feature.copy}</p>
            </article>
          ))}
        </section>

        <section className="split-band">
          <div>
            <p className="eyebrow">Designed from the app outward</p>
            <h2>Apple Books calm, with power-reader tools under the surface.</h2>
          </div>
          <p>
            BookShell is shaped like a reading room, not a file viewer. The chrome stays quiet, the page stays central,
            and every note can remain anchored to the book that created it.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
