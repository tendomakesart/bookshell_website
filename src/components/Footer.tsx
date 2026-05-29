export function Footer() {
  return (
    <footer className="site-footer">
      <a className="brand footer-brand" href="/">
        <img className="brand-logo" src="/brand/bookshell-logo-web.png" alt="" aria-hidden="true" />
        <span className="brand-wordmark">
          Book<span>Shell</span>
        </span>
      </a>
      <p>A local-first Windows reading room for EPUBs, PDFs, Shell Notes, Pearls, and quiet focus.</p>
      <nav aria-label="Footer navigation">
        <a href="/">Home</a>
        <a href="/features/">Features</a>
        <a href="/sales/">Early Access</a>
        <a href="/privacy/">Privacy</a>
        <a href="/roadmap/">Roadmap</a>
        <a href="/changelog/">Changelog</a>
        <a href="/press/">Press</a>
        <a href="/contact/">Contact</a>
      </nav>
    </footer>
  );
}
