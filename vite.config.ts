import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        admin: resolve(__dirname, "admin/index.html"),
        changelog: resolve(__dirname, "changelog/index.html"),
        contact: resolve(__dirname, "contact/index.html"),
        features: resolve(__dirname, "features/index.html"),
        main: resolve(__dirname, "index.html"),
        press: resolve(__dirname, "press/index.html"),
        privacy: resolve(__dirname, "privacy/index.html"),
        roadmap: resolve(__dirname, "roadmap/index.html"),
        sales: resolve(__dirname, "sales/index.html")
      }
    }
  }
});
