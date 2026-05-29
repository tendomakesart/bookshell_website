import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SalesPage } from "./pages/SalesPage";
import "./styles.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <SalesPage />
  </StrictMode>
);
