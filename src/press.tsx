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
      lede="Short descriptions, screenshots, logos, and product notes will land here before wider public outreach."
      cards={[
        { title: "Short description", copy: "BookShell is a local-first Windows EPUB/PDF reader for notes, Pearls, exports, and reading soundtracks." },
        { title: "Visual assets", copy: "Logo, screenshot gallery, and social preview images will be collected here." },
        { title: "Status", copy: "BookShell is preparing early access and is not announcing final pricing yet." }
      ]}
    />
  </StrictMode>
);
