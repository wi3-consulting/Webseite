/* ============================================================
   Kopfbilder der übrigen Seiten im Hintergrund vorladen.

   Ohne das holt der Browser das Kopfbild erst in dem Moment, in dem
   die neue Seite gerendert wird – man sieht es sichtbar aufbauen.
   Wir laden die Bilder stattdessen, sobald der Browser gerade nichts
   zu tun hat. Beim Reiterwechsel liegen sie dann schon im Cache.
   ============================================================ */
import { useEffect } from "react";
import { seiten } from "./content.js";

/* Alle Kopfbilder aus content/seiten.json – die Banner am Seitenende
   bleiben außen vor, die liegen unterhalb des sichtbaren Bereichs und
   werden ohnehin erst beim Hinscrollen geladen. */
const KOPFBILDER = Object.values(seiten)
  .map((s) => s.hero_bild)
  .filter(Boolean);

const bereitsGeladen = new Set();

export function bildVorladen(url) {
  if (!url || bereitsGeladen.has(url)) return;
  bereitsGeladen.add(url);
  const img = new Image();
  img.decoding = "async";
  img.src = url;
}

/* Bei aktiviertem Datensparmodus oder langsamer Verbindung nicht
   vorladen – dort kostet Vorladen mehr, als es bringt. */
function sparsamLaden() {
  const c = navigator.connection;
  if (!c) return false;
  return c.saveData === true || /(^|-)(2g|slow-2g)$/.test(c.effectiveType || "");
}

export function useKopfbilderVorladen(aktuellesBild) {
  useEffect(() => {
    if (sparsamLaden()) return;

    const anfordern = window.requestIdleCallback || ((fn) => setTimeout(fn, 1500));
    const abbrechen = window.cancelIdleCallback || clearTimeout;

    const id = anfordern(
      () => KOPFBILDER.forEach((u) => u !== aktuellesBild && bildVorladen(u)),
      { timeout: 4000 }
    );
    return () => abbrechen(id);
  }, [aktuellesBild]);
}
