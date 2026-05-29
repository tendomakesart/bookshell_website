import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { InfoPage } from "./pages/InfoPage";
import "./styles.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <InfoPage
      active="contact"
      eyebrow="Contact"
      title="Reach BookShell."
      lede="This page will point readers, testers, and press toward the right contact path once early access opens."
      cards={[
        { title: "Early access", copy: "Use the Early Access page for launch availability and development updates." },
        { title: "Press", copy: "Press and media details will be routed through the media kit once screenshots are ready." },
        { title: "Support", copy: "Support contact details will be added when the first public build is available." }
      ]}
    />
  </StrictMode>
);
