import { AmbientBackdrop } from "../components/AmbientBackdrop";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ProductMockup } from "../components/ProductMockup";
import { WaitlistForm } from "../components/WaitlistForm";
import { WebsiteSplash } from "../components/WebsiteSplash";

const featureTiles = [
  {
    eyebrow: "Local-first library",
    title: "A Windows reading room that starts with your files.",
    copy: "The full audit opens on a dark local shelf: import, command palette, collections, Pearls, discovery, tools, and settings sit beside the books instead of above them.",
    image: "/app-screenshots/library-home-dark.png"
  },
  {
    eyebrow: "Personal shelves",
    title: "The library grows shelves from your reading behavior.",
    copy: "Signature shelves gather Pearls, review mode, mixtapes, mood tags, and unfinished reads into a calm studio instead of another flat file grid.",
    image: "/app-screenshots/library-signature-dark.png"
  },
  {
    eyebrow: "Private discovery",
    title: "Recommendations can feel alive without becoming social media.",
    copy: "Local shelf signals, mood tags, soundtrack pairings, and timeline cards shape discovery without uploads, accounts, or public profiles.",
    image: "/app-screenshots/library-recommendations-dark.png"
  },
  {
    eyebrow: "Reading atmosphere",
    title: "The app can tune the room around the session.",
    copy: "Mood calibration connects local tags, Pearls, sessions, and soundtrack mood so long reading has texture without noise.",
    image: "/app-screenshots/mood-calibration.png"
  }
];

const privacyMarks = ["Local-first", "No account required", "Notes stay on-device", "Windows first"];

const worksWith = ["EPUB", "PDF", "Local audio files", "Markdown export", "Citations", "Quote cards"];

const galleryPanels = [
  {
    label: "Details",
    title: "A book can become a small workspace.",
    copy: "Book details collect progress, bookmarks, review notes, tags, mood calibration, and export actions around the source file.",
    image: "/app-screenshots/book-details.png"
  },
  {
    label: "Reader",
    title: "A tuned page for long sessions.",
    copy: "The maximized reader capture puts the book in the center and leaves chrome at the edges, matching the hidden-chrome promise.",
    image: "/app-screenshots/reader-maximized.png"
  },
  {
    label: "Command",
    title: "Power tools without leaving the room.",
    copy: "The command palette gives the website a real product signal for keyboard-first navigation and fast jumps.",
    image: "/app-screenshots/command-palette.png"
  },
  {
    label: "Artifacts",
    title: "Share pieces are local until you choose otherwise.",
    copy: "Artifact Studio previews quote cards and cover-wall exports without posting for you or leaking private library context.",
    image: "/app-screenshots/artifact-studio-cover-wall.png"
  }
];

const themePanels = [
  ["Dark", "/app-screenshots/library-home-dark.png"],
  ["Warm", "/app-screenshots/library-home-warm.png"],
  ["Sepia", "/app-screenshots/library-home-sepia.png"],
  ["Light", "/app-screenshots/library-home-light.png"]
];

export function LandingPage() {
  return (
    <>
      <WebsiteSplash />
      <AmbientBackdrop />
      <Header active="home" />
      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Local-first Windows reader for power readers</p>
            <h1>BookShell turns your reading stack into a quiet, useful room.</h1>
            <p className="hero-lede">
              A local-first desktop EPUB/PDF reader for beautiful reading, powerful notes, private discovery, and reading soundtracks.
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
          <span>EPUB, PDF, soundtracks, and exports</span>
        </section>

        <section className="feature-grid" aria-label="BookShell features">
          {featureTiles.map((feature) => (
            <article className="feature-tile" key={feature.title}>
              <img className="feature-shot" src={feature.image} alt="" aria-hidden="true" />
              <p className="eyebrow">{feature.eyebrow}</p>
              <h2>{feature.title}</h2>
              <p>{feature.copy}</p>
            </article>
          ))}
        </section>

        <section className="theme-showcase-section" aria-label="BookShell themes">
          <div className="section-heading">
            <p className="eyebrow">Theme range</p>
            <h2>The same shell language across dark, warm, sepia, and light.</h2>
          </div>
          <div className="theme-grid">
            {themePanels.map(([label, image]) => (
              <article className="theme-card" key={label}>
                <img src={image} alt="" aria-hidden="true" />
                <span>{label}</span>
              </article>
            ))}
          </div>
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

        <section className="split-band">
          <div>
            <p className="eyebrow">Power without the cloud leash</p>
            <h2>Read, mark, search, export, and discover without surrendering the shelf.</h2>
          </div>
          <p>
            BookShell is designed around local files, local notes, local music, keyboard-first navigation, exportable data,
            and optional anonymous discovery instead of public profiles or follower pressure.
          </p>
        </section>

        <section className="mockup-gallery-section" aria-label="BookShell app surfaces">
          <div className="section-heading">
            <p className="eyebrow">App surfaces</p>
            <h2>From local shelf to exportable thinking.</h2>
          </div>
          <div className="mockup-gallery">
            {galleryPanels.map((panel) => (
              <article className="gallery-panel" key={panel.title}>
                <img src={panel.image} alt="" aria-hidden="true" />
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
