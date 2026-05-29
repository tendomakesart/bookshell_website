import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { InfoPage } from "./pages/InfoPage";
import "./styles.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <InfoPage
      active="press"
      eyebrow="Press"
      title="BookShell media kit placeholder."
      lede="Short descriptions, screenshots, logos, positioning, and launch notes will land here before wider public outreach."
      cards={[
        { title: "Short description", copy: "BookShell is a local-first desktop EPUB/PDF reader for beautiful reading, powerful notes, private discovery, and reading soundtracks." },
        { title: "Visual assets", copy: "Logo, screenshot gallery, and social preview images will be collected here." },
        { title: "Status", copy: "BookShell is Windows-first, preparing early access, and not announcing final pricing yet." }
      ]}
    />
  </StrictMode>
);
