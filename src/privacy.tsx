import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { InfoPage } from "./pages/InfoPage";
import "./styles.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <InfoPage
      active="privacy"
      eyebrow="Privacy"
      title="Local-first by default."
      lede="BookShell is being built around local files, local notes, local music, offline-friendly reading, and no required cloud library."
      cards={[
        { title: "Files stay yours", copy: "EPUBs, PDFs, reading history, notes, highlights, and user-imported music stay local by default." },
        { title: "No account wall", copy: "BookShell is positioned around no required cloud sync, no public profiles, and no follower graph." },
        { title: "Clear discovery controls", copy: "Optional anonymous discovery should explain what leaves your device and provide cache/data clearing controls." }
      ]}
    />
  </StrictMode>
);
