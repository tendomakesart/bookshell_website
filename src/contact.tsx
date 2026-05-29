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
      lede="Questions, early-access notes, support, and press can all start here."
      cards={[
        {
          title: "Email",
          copy: (
            <>
              Reach BookShell at <a href="mailto:contact@bookshell.net">contact@bookshell.net</a>.
            </>
          )
        },
        { title: "Early access", copy: "Use the Early Access page for launch availability and development updates." },
        { title: "Press and support", copy: "Press questions, bug reports, support notes, and reader feedback can use the same contact address for now." }
      ]}
    />
  </StrictMode>
);
