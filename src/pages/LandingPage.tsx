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
    copy: "The real app opens on a warm local shelf: import, command palette, collections, Pearls, discovery, tools, and settings sit beside the books instead of above them.",
    image: "/app-screenshots/library-home.png"
  },
  {
    eyebrow: "Reader control",
    title: "Typography and themes are part of the reading surface.",
    copy: "The audit reader capture keeps the page central, with quiet page turns and a muted reading surface built for long sessions.",
    image: "/app-screenshots/reader-default.png"
  },
  {
    eyebrow: "Shell Notes",
    title: "Highlights become something useful after the chapter ends.",
    copy: "Command and panel surfaces share the same shell language, so notes, search, settings, and power tools feel like part of one room.",
    image: "/app-screenshots/command-palette.png"
  },
  {
    eyebrow: "Reading atmosphere",
    title: "The app can fade back while the room stays alive.",
    copy: "Privacy and settings panels use the same warm material system as the library, keeping power-reader controls calm instead of clinical.",
    image: "/app-screenshots/privacy-panel.png"
  }
];

const privacyMarks = ["Local-first", "No account required", "Notes stay on-device", "Windows first"];

const worksWith = ["EPUB", "PDF", "Local audio files", "Markdown export", "Citations", "Quote cards"];

const galleryPanels = [
  {
    label: "Library",
    title: "A local shelf that remembers what you were doing.",
    copy: "The library capture shows the app’s actual shell: logo, command entry, import, local search, collections, and shelf navigation.",
    image: "/app-screenshots/library-home.png"
  },
  {
    label: "Reader",
    title: "A tuned page for long sessions.",
    copy: "The reader capture puts the book in the center and leaves chrome at the edges, matching the hidden-chrome promise.",
    image: "/app-screenshots/reader-default.png"
  },
  {
    label: "Command",
    title: "Power tools without leaving the room.",
    copy: "The command palette gives the website a real product signal for keyboard-first navigation and fast jumps.",
    image: "/app-screenshots/command-palette.png"
  },
  {
    label: "Privacy",
    title: "Trust controls belong in the main shell.",
    copy: "The privacy panel grounds the site’s local-first promise in an actual app surface instead of abstract copy.",
    image: "/app-screenshots/privacy-panel.png"
  }
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
