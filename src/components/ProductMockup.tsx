type ProductMockupProps = {
  variant?: "library" | "deep-read";
};

export function ProductMockup({ variant = "library" }: ProductMockupProps) {
  const isLibrary = variant === "library";

  return (
    <figure className={`app-window product-shell product-screenshot product-screenshot-${variant}`}>
      <img
        src={isLibrary ? "/app-screenshots/library-home.png" : "/app-screenshots/reader-maximized.png"}
        alt={isLibrary ? "BookShell library home with local books and navigation." : "BookShell reader showing a focused EPUB reading surface."}
      />
      <figcaption>{isLibrary ? "Full tour audit: library home" : "Full tour audit: reader workspace"}</figcaption>
    </figure>
  );
}
