import { useEffect, useRef, useState } from "react";

export function WebsiteSplash() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);
  const shownAtRef = useRef(Date.now());

  useEffect(() => {
    const elapsed = Date.now() - shownAtRef.current;
    const exitDelay = Math.max(0, 980 - elapsed);
    const exitTimer = window.setTimeout(() => setExiting(true), exitDelay);
    const unmountTimer = window.setTimeout(() => setVisible(false), exitDelay + 430);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(unmountTimer);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <aside className={`boot-splash${exiting ? " is-exiting" : ""}`} role="status" aria-live="polite" aria-label="Opening BookShell">
      <div className="boot-clamshell" aria-hidden="true">
        <span />
      </div>
      <strong>BookShell</strong>
      <span>Opening your shelf</span>
    </aside>
  );
}
