import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ProductMockup } from "../components/ProductMockup";
import { WaitlistForm } from "../components/WaitlistForm";

const outcomes = [
  {
    label: "Library",
    title: "Your files stay the center.",
    copy: "Import EPUBs and PDFs into a local Windows library with progress, metadata, reading state, and shelves."
  },
  {
    label: "Reader",
    title: "The page gets the room.",
    copy: "Tune typography, margins, themes, page mode, and chrome visibility for long sessions without visual clutter."
  },
  {
    label: "Study",
    title: "Notes become review material.",
    copy: "Turn highlights into Pearls, Shell Notes, citations, quote cards, and exports that point back to the source."
  },
  {
    label: "Atmosphere",
    title: "Focus can have texture.",
    copy: "Use read-aloud, soundtrack moods, page-rustle polish, and accessibility profiles when the session needs support."
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

const trustMarks = ["Windows desktop app", "Local-first library", "EPUB + PDF workflows", "No store shelf", "Reader themes", "Export-ready notes"];

const proofCards = [
  {
    title: "Shell Notes",
    copy: "A book-level study panel for highlights, bookmarks, notebook text, Pearls, citations, and export formats."
  },
  {
    title: "Pearls",
    copy: "Favorite passages can be marked as the distilled essence of a book, ready for review or quote-card output."
  },
  {
    title: "Reading soundtrack",
    copy: "Genre and mood tracks create a quiet reading atmosphere without making the interface loud."
  }
];

const faqs = [
  {
    question: "Is BookShell available now?",
    answer: "BookShell is preparing early access. The waitlist is the first place for launch invites and reader updates."
  },
  {
    question: "Will it support both EPUB and PDF?",
    answer: "Yes. BookShell is focused on EPUB and PDF reading, with local library control, annotations, and export workflows."
  },
  {
    question: "Is there pricing yet?",
    answer: "Not publicly. The first version uses soft pricing language and does not invent a dollar amount before the offer is final."
  },
  {
    question: "Does the form store my email?",
    answer: "This site prototype validates the email and shows a local success state. A real waitlist provider can be connected through the waitlist helper."
  }
];

export function SalesPage() {
  return (
    <>
      <Header active="sales" />
      <main className="sales-page">
        <section className="hero-section sales-hero sales-hero-tuned">
          <div className="hero-copy">
            <p className="eyebrow">BookShell early access</p>
            <h1>A reading room for books that need to leave evidence.</h1>
            <p className="hero-lede">
              BookShell is a local-first Windows reader for EPUBs, PDFs, Shell Notes, Pearls, quote cards, soundtrack moods,
              and the ideas that survive a hard reading session.
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
            <h2>The sales story is the product loop.</h2>
          </div>
          <div className="proof-card-grid">
            {proofCards.map((card) => (
              <article className="proof-card" key={card.title}>
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
              BookShell is not announcing final pricing yet. Waitlist readers will see the app direction, launch offer,
              and early-access availability first. No invented tiers, no pretend checkout, just the list for serious readers.
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
