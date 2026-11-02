import { useEffect } from "react";

/* Schreibweise der Marke – überall klein, auch in Seitentiteln und
   Suchergebnissen. Nur hier ändern. */
export const MARKE = "wi3 consulting";

function setMeta(attr, key, value) {
  let tag = document.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", value);
}

/* Setzt Titel und Meta-Description pro Route – in einer SPA muss das
   beim Seitenwechsel nachgezogen werden, sonst bleibt der Titel der
   Startseite stehen. */
export function usePageMeta(titel, beschreibung) {
  useEffect(() => {
    document.title = titel;
    setMeta("name", "description", beschreibung);
    setMeta("property", "og:title", titel);
    setMeta("property", "og:description", beschreibung);
  }, [titel, beschreibung]);
}
