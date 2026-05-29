import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FeaturesPage } from "./pages/FeaturesPage";
import "./styles.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <FeaturesPage />
  </StrictMode>
);
