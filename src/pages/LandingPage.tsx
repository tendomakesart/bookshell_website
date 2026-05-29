import { AmbientBackdrop } from "../components/AmbientBackdrop";
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

const privacyMarks = ["Local-first", "No account required", "Notes stay on-device", "Windows first"];

const worksWith = ["EPUB", "PDF", "Local audio files", "Markdown export", "Citations", "Quote cards"];

const galleryPanels = [
  {
    label: "Library",
    title: "A local shelf that remembers what you were doing.",
    copy: "Progress, reading state, metadata, and active books stay close without turning the app into a file dump."
  },
  {
    label: "Reader",
    title: "A tuned page for long sessions.",
    copy: "Reader themes, margins, typography, and quiet chrome keep the book in front instead of the software."
  },
  {
    label: "Shell Notes",
    title: "The study panel after the chapter.",
    copy: "Highlights, bookmarks, Pearls, citations, and notes gather into exportable review material."
  },
  {
    label: "Soundtrack dock",
    title: "Atmosphere when focus needs a little help.",
    copy: "Pair reading sessions with local soundtrack moods while keeping the library private and local-first."
  }
];

export function LandingPage() {
  return (
    <>
      <AmbientBackdrop />
      <Header active="home" />
      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Local-first Windows reader for power readers</p>
            <h1>BookShell turns your reading stack into a quiet, useful room.</h1>
            <p className="hero-lede">
              A local-first Windows reader for EPUBs, PDFs, annotations, Shell Notes, and reading soundtracks.
            </p>
            <div className="hero-actions">
              <WaitlistForm />
              <a className="secondary-link" href="/sales/">
                Explore the reader
              </a>
            </div>
            <p className="hero-trust-line">No account required. No cloud library by default. Your files stay yours.</p>
          </div>
          <ProductMockup />
        </section>

        <section className="privacy-strip" aria-label="BookShell privacy promises">
          {privacyMarks.map((mark) => (
            <span key={mark}>{mark}</span>
          ))}
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

        <section className="works-with-section" aria-label="Supported BookShell workflows">
          <div className="section-heading">
            <p className="eyebrow">Works with</p>
            <h2>Built around the reading stack people already have.</h2>
          </div>
          <div className="works-with-grid">
            {worksWith.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="mockup-gallery-section" aria-label="BookShell app surfaces">
          <div className="section-heading">
            <p className="eyebrow">App surfaces</p>
            <h2>From local shelf to exportable thinking.</h2>
          </div>
          <div className="mockup-gallery">
            {galleryPanels.map((panel) => (
              <article className="gallery-panel" key={panel.title}>
                <span>{panel.label}</span>
                <h3>{panel.title}</h3>
                <p>{panel.copy}</p>
              </article>
            ))}
          </div>
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
