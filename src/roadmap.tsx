import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { InfoPage } from "./pages/InfoPage";
import "./styles.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <InfoPage
      active="roadmap"
      eyebrow="Roadmap"
      title="The reading loop comes first."
      lede="BookShell is prioritizing reading quality, library control, notes, Pearls, soundtracks, accessibility, and exportable local data before broader platform expansion."
      cards={[
        { title: "Reading core", copy: "Paged and scroll modes, spreads, profiles, progress restoration, page animation, EPUB layout controls, PDF markup, and OCR." },
        { title: "Study layer", copy: "Shell Notes, Pearls, Review Mode, quote cards, citations, snapshots, annotation repair, and export formats." },
        { title: "Beyond the page", copy: "Private discovery, anonymous reading pulse, reading soundtracks, TTS, import/export, accessibility, and direct distribution." }
      ]}
    />
  </StrictMode>
);
