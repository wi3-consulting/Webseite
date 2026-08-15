import { useEffect } from "react";

/* Setzt Titel und Meta-Description pro Route – in einer SPA muss das
   beim Seitenwechsel nachgezogen werden, sonst bleibt der Titel der
   Startseite stehen. */
export function usePageMeta(titel, beschreibung) {
  useEffect(() => {
    document.title = titel;

    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("name", "description");
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", beschreibung);
  }, [titel, beschreibung]);
}
