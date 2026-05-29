import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { InfoPage } from "./pages/InfoPage";
import "./styles.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <InfoPage
      active="changelog"
      eyebrow="Changelog"
      title="Build notes will live here."
      lede="This page will track public-facing BookShell website and app updates as early access gets closer."
      cards={[
        { title: "Website launch shell", copy: "Landing page, Early Access page, domain metadata, sitemap, and app-aligned visuals." },
        { title: "Conversion polish", copy: "Clearer CTAs, privacy strip, Works With support, and a richer Early Access FAQ." },
        { title: "Motion pass", copy: "BookShell splash, subtle breathing animations, and reduced-motion support." }
      ]}
    />
  </StrictMode>
);
