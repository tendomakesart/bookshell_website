const shelfLines = Array.from({ length: 9 }, (_, index) => index);

export function AmbientBackdrop() {
  return (
    <div className="ambient-backdrop" aria-hidden="true">
      <div className="ambient-paper" />
      <div className="ambient-window" />
      <div className="ambient-shelves">
        {shelfLines.map((line) => (
          <span key={line} />
        ))}
      </div>
      <div className="ambient-page-stack">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
