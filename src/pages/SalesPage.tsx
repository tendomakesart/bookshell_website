import { AmbientBackdrop } from "../components/AmbientBackdrop";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ProductMockup } from "../components/ProductMockup";
import { WaitlistForm } from "../components/WaitlistForm";
import { WebsiteSplash } from "../components/WebsiteSplash";

const outcomes = [
  {
    label: "Library",
    title: "Your files stay the center.",
    copy: "The library home keeps local search, import, command access, collections, discovery, Pearls, tools, and settings in one shell."
  },
  {
    label: "Reader",
    title: "The page gets the room.",
    copy: "The maximized reader capture keeps the book central and pushes controls to the edges so the page carries the session."
  },
  {
    label: "Study",
    title: "Notes become review material.",
    copy: "Book details, Review Mode, Pearls, tags, and Artifact Studio turn marked passages into review material and share pieces."
  },
  {
    label: "Atmosphere",
    title: "Focus can have texture.",
    copy: "Mood calibration, soundtrack pairings, private discovery, and theme choices give the product its room-like feel."
  }
];

const comparisons = [
  ["Generic PDF tools", "Documents are isolated. BookShell keeps PDFs beside books, notes, progress, and review context."],
  ["Storefront readers", "The shelf serves the store. BookShell is built around your local library and reading history."],
  ["Note apps alone", "Notes float away. BookShell keeps them anchored to page, chapter, quote, and reading session."]
];

const readingLoop = [
  ["Import", "Bring books and PDFs into a local library."],
  ["Read", "Open a calm surface tuned for the session."],
  ["Highlight", "Mark the passage, bookmark, or snapshot."],
  ["Pearl", "Promote the line that carries the book's value."],
  ["Shell Notes", "Gather the book's essence into one panel."],
  ["Export", "Copy notes, citations, quote cards, or Markdown."]
];

const trustMarks = ["Windows-first app", "Local files stay local", "EPUB + PDF workflows", "No public profile", "Reader themes", "Export-ready notes"];

const proofCards = [
  {
    title: "Shell Notes",
    copy: "Book details frame notes, review state, mood tags, and export actions around the source instead of letting them drift away.",
    image: "/app-screenshots/book-details.png"
  },
  {
    title: "Pearls",
    copy: "Signature shelves make favorite passages, unfinished reads, mixtapes, and review mode feel like living parts of the library.",
    image: "/app-screenshots/library-signature-dark.png"
  },
  {
    title: "Reading soundtrack",
    copy: "Mood calibration and soundtrack pairings connect local music to the current reading session without uploading the shelf.",
    image: "/app-screenshots/mood-calibration.png"
  },
  {
    title: "Private discovery",
    copy: "Recommendation cards use local shelf signals, tags, sessions, and soundtrack mood without a follower graph.",
    image: "/app-screenshots/library-recommendations-dark.png"
  }
];

const faqs = [
  {
    question: "Is BookShell available now?",
    answer: "BookShell is preparing early access for Windows. The early-access list is the first place for launch availability, founder pricing, and development updates."
  },
  {
    question: "Is BookShell Windows only?",
    answer: "Windows is first. The current product direction is a local-first desktop reader before any broader platform expansion."
  },
  {
    question: "Will it support both EPUB and PDF?",
    answer: "Yes. BookShell is focused on EPUB and PDF reading, with local library control, annotations, and export workflows."
  },
  {
    question: "What about DRM-protected books?",
    answer: "BookShell is designed for local EPUB and PDF files. DRM-protected books from locked storefronts may not open unless exported in a supported, readable format."
  },
  {
    question: "Does BookShell upload my books or notes?",
    answer: "No cloud library is required by default. BookShell is being built around local files, local notes, and on-device reading workflows."
  },
  {
    question: "Can I use my own music?",
    answer: "The product direction includes local audio and reading soundtrack moods, so your focus setup can live beside the reader."
  },
  {
    question: "Can I export notes?",
    answer: "Yes. Shell Notes, citations, Pearls, quote cards, and Markdown-style exports are core to the reading loop."
  },
  {
    question: "Will BookShell support accessibility profiles?",
    answer: "Yes. Low-vision, dyslexia-friendly, migraine-friendly, high-contrast, large UI, keyboard, screen-reader, and reduced-motion support are part of the product direction."
  },
  {
    question: "Is there pricing yet?",
    answer: "Not publicly. The first version uses soft pricing language and does not invent a dollar amount before the offer is final."
  },
  {
    question: "Does the form store my email?",
    answer: "Yes. The current site stores early-access signups in a private Cloudflare D1 waitlist controlled by BookShell."
  }
];

export function SalesPage() {
  return (
    <>
      <WebsiteSplash />
      <AmbientBackdrop />
      <Header active="sales" />
      <main className="sales-page">
        <section className="hero-section sales-hero sales-hero-tuned">
          <div className="hero-copy">
            <p className="eyebrow">BookShell early access</p>
            <h1>A private reading room for EPUBs, PDFs, notes, and soundtracks.</h1>
            <p className="hero-lede">
              For books that need to leave evidence: highlights, Pearls, citations, review notes, quote cards,
              and exportable thinking.
            </p>
            <div className="sales-trust-row" aria-label="BookShell product facts">
              {trustMarks.slice(0, 3).map((mark) => (
                <span key={mark}>{mark}</span>
              ))}
            </div>
            <WaitlistForm />
          </div>
          <ProductMockup variant="deep-read" />
        </section>

        <section className="sales-narrative sales-problem">
          <div>
            <p className="eyebrow">The old stack</p>
            <h2>Reading tools remember files. BookShell remembers the session.</h2>
          </div>
          <p>
            EPUBs live in one app, PDFs in another, notes somewhere else, and the useful quote hides behind yesterday's version of yourself.
            BookShell brings the reading surface, library, annotations, and review pass into one calm desktop workflow.
          </p>
        </section>

        <section className="loop-section" aria-label="BookShell reading loop">
          {readingLoop.map(([step, detail]) => (
            <article key={step}>
              <span>{step}</span>
              <p>{detail}</p>
            </article>
          ))}
        </section>

        <section className="outcome-section" aria-label="Reader outcomes">
          {outcomes.map((outcome) => (
            <article className="outcome" key={outcome.title}>
              <span aria-hidden="true" />
              <small>{outcome.label}</small>
              <h3>{outcome.title}</h3>
              <p>{outcome.copy}</p>
            </article>
          ))}
        </section>

        <section className="proof-card-section">
          <div className="section-heading">
            <p className="eyebrow">Actual app shape</p>
            <h2>The product story is the reading loop.</h2>
          </div>
          <div className="proof-card-grid">
            {proofCards.map((card) => (
              <article className="proof-card" key={card.title}>
                <img src={card.image} alt="" aria-hidden="true" />
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="comparison-section">
          <div className="section-heading">
            <p className="eyebrow">Why BookShell</p>
            <h2>Not another place to lose your place, notes, or patience.</h2>
          </div>
          <div className="comparison-list">
            {comparisons.map(([before, after]) => (
              <article className="comparison-row" key={before}>
                <h3>{before}</h3>
                <p>{after}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="trust-band" aria-label="BookShell trust points">
          {trustMarks.map((mark) => (
            <span key={mark}>{mark}</span>
          ))}
        </section>

        <section className="pricing-band">
          <div>
            <p className="eyebrow">Early access</p>
            <h2>Join before the Windows launch offer is public.</h2>
          </div>
          <div>
            <p>
              BookShell is preparing early access for Windows. Join the list for launch availability, founder pricing,
              and development updates. No account wall, no fake checkout, no cloud requirement.
            </p>
            <WaitlistForm compact />
          </div>
        </section>

        <section className="faq-section">
          <div className="section-heading">
            <p className="eyebrow">FAQ</p>
            <h2>Plain answers before you join.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <article className="faq-item" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
