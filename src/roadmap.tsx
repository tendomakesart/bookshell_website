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
      lede="BookShell is prioritizing a calm Windows reader, useful notes, and exports before broader sync or platform expansion."
      cards={[
        { title: "Reading core", copy: "EPUB/PDF reading, reader themes, progress, local library, and focused page controls." },
        { title: "Study layer", copy: "Shell Notes, Pearls, quote cards, citations, bookmarks, and exportable review material." },
        { title: "Atmosphere", copy: "Reading soundtracks, local audio, read-aloud support, and accessibility polish." }
      ]}
    />
  </StrictMode>
);
