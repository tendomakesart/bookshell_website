type ProductMockupProps = {
  variant?: "library" | "deep-read";
};

const libraryBooks = [
  { title: "Paper Room", meta: "Literary fiction", progress: "68%" },
  { title: "Glass Atlas", meta: "Sci-fi notes", progress: "24%" },
  { title: "Margin Notes", meta: "Study soundtrack", progress: "91%" },
  { title: "Quiet Page Drift", meta: "Nonfiction focus", progress: "42%" }
];

export function ProductMockup({ variant = "library" }: ProductMockupProps) {
  if (variant === "library") {
    return (
      <div className="app-window product-shell product-shell-library" aria-label="BookShell library interface mockup">
        <div className="mockup-titlebar">
          <span />
          <span />
          <span />
          <strong>BookShell Library</strong>
        </div>
        <div className="library-mockup" aria-hidden="true">
          <aside className="library-rail">
            <img src="/brand/bookshell-logo-web.png" alt="" />
            <button>All</button>
            <button>Reading</button>
            <button>PDFs</button>
            <button>Pearls</button>
          </aside>
          <main className="library-stage">
            <div className="library-stage-header">
              <div>
                <p className="mock-label">Local library</p>
                <h3>Rainy night PDFs</h3>
              </div>
              <div className="view-toggle" aria-label="View controls">
                <span />
                <span />
              </div>
            </div>
            <div className="book-grid">
              {libraryBooks.map((book, index) => (
                <article className={`book-card book-card-${index + 1}`} key={book.title}>
                  <div className="book-cover">
                    <span>{book.progress}</span>
                  </div>
                  <strong>{book.title}</strong>
                  <small>{book.meta}</small>
                </article>
              ))}
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="app-window product-shell product-shell-deep-read" aria-label="BookShell reader interface mockup">
      <div className="mockup-titlebar">
        <span />
        <span />
        <span />
        <strong>BookShell Reader</strong>
      </div>
      <div className="reader-workspace" aria-hidden="true">
        <main className="reader-page" aria-hidden="true">
          <div className="reader-toolbar">
            <button>Back</button>
            <span>Chapter 12 / 68%</span>
            <button>Hide chrome</button>
          </div>
          <h3>The Quiet Margin</h3>
          <p className="reader-line reader-line-long" />
          <p className="reader-line" />
          <p className="reader-line reader-line-short" />
          <div className="annotation">
            <strong>Pearl</strong>
            <span>Mark this passage for the book's essence page and Shell Notes export.</span>
          </div>
          <p className="reader-line reader-line-long" />
          <p className="reader-line" />
          <div className="progress-rail">
            <span />
          </div>
        </main>
        <aside className="notes-panel" aria-hidden="true">
          <p>Shell Notes</p>
          <span>3 Pearls</span>
          <span>2 quotes</span>
          <span>Markdown export</span>
          <div className="soundtrack-chip">Now playing: Quiet Page Drift</div>
        </aside>
      </div>
    </div>
  );
}
