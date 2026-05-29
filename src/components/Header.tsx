type HeaderProps = {
  active: "home" | "sales";
};

export function Header({ active }: HeaderProps) {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="BookShell home">
        <img className="brand-logo" src="/brand/bookshell-logo-web.png" alt="" aria-hidden="true" />
        <span className="brand-wordmark">BookShell</span>
      </a>
      <nav className="site-nav" aria-label="Primary navigation">
        <a aria-current={active === "home" ? "page" : undefined} href="/">
          Home
        </a>
        <a aria-current={active === "sales" ? "page" : undefined} href="/sales/">
          Sales
        </a>
      </nav>
    </header>
  );
}
