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
      lede="BookShell is being built around local files, local notes, and no cloud library requirement."
      cards={[
        { title: "Files stay yours", copy: "The product direction keeps EPUBs, PDFs, annotations, and reading state on-device by default." },
        { title: "No account wall", copy: "Early access messaging is not a promise of required cloud accounts or public reader profiles." },
        { title: "Optional discovery later", copy: "Any future discovery layer should be explicit, opt-in, and explain what leaves the device." }
      ]}
    />
  </StrictMode>
);
