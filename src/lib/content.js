/* ============================================================
   Zentraler Zugriff auf die im Decap CMS gepflegten Inhalte.
   Die JSON-Dateien liegen unter content/ und werden beim Build
   eingebunden. Speichert eine Redakteurin im CMS, committet
   Decap nach content/ und Netlify baut die Seite neu.
   ============================================================ */
import einstellungen from "../../content/einstellungen.json";
import seiten from "../../content/seiten.json";
import galerie from "../../content/galerie.json";
import team from "../../content/team.json";
import ressorts from "../../content/ressorts.json";

export { einstellungen, seiten };

export const galerieItems = galerie.items || [];
export const teamItems = team.items || [];
export const ressortItems = ressorts.items || [];

/* Einzige Quelle für die Hauptnavigation – Nav, Mobile-Menü und
   Footer leiten sich daraus ab, damit nichts auseinanderläuft. */
export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/unternehmen", label: "Unternehmen" },
  { to: "/studierende", label: "Studierende" },
  { to: "/ressorts", label: "Ressorts" },
  { to: "/team", label: "Team" },
];

export const KONTAKT_LINK = "/kontakt";
