import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/* Vite leitet im Dev-Server jede Adresse ohne Dateiendung auf die SPA um –
   damit landet auch /admin/ auf der Startseite statt beim CMS. Netlify
   liefert /admin/index.html korrekt aus; lokal stellen wir das hier gleich. */
function decapAdminInDev() {
  return {
    name: "decap-admin-in-dev",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        if (req.url === "/admin" || req.url === "/admin/") {
          req.url = "/admin/index.html";
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), decapAdminInDev()],
  build: {
    outDir: "dist",
    assetsDir: "build",
  },
});
