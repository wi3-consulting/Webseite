# wi3 consulting – Texte und Bilder pflegen mit dem CMS (Decap)

Die Website hat ein eingebautes Content-Management-System. Damit können auch
Personen ohne Programmierkenntnisse **Texte ändern und Bilder hinzufügen,
austauschen oder löschen** – über eine einfache Oberfläche unter `/admin/`.

Verwaltet werden:
- **Texte** – Überschriften und Texte aller Seiten, die Kennzahlen, Werte,
  Leistungen, Vorteile, der Projektablauf und die Angaben im Impressum
- **Seitenbilder** – die großen Kopfbilder aller Seiten, die Bilder in den
  farbigen Aufruf-Bannern am Seitenende und die Bilder in einzelnen Abschnitten
- **Galerie** (Abschnitt „Einblicke" auf der Startseite) – beliebig erweiterbar
- **Team** (Vorstandsfotos inkl. Name, Rolle, Text)
- **Ressorts** (Bild, Titel, Beschreibung und Ressortleitung je Ressort)
- **Logo & Kontaktdaten** (Logo, Vereinsname, Adresse, E-Mail, Öffnungszeiten)

**Jedes Bild der Website lässt sich darüber austauschen** – es gibt keine fest
im Code verdrahteten Fotos mehr.

**Nicht im CMS** (bewusst, ändert sich praktisch nie): Navigation,
Button-Beschriftungen, Seitenaufbau, das Kontaktformular und der rechtliche
Standardtext im Impressum (Haftung, Urheberrecht).

Alle hochgeladenen Bilder landen automatisch im Ordner
**`public/assets/uploads/`**. Die Beschreibungen werden in den Dateien unter
**`content/`** gespeichert.

---

## 1. Einmalige Einrichtung (technisch, einmalig nötig)

Das CMS speichert Änderungen direkt im Git-Repository der Website. Damit das
funktioniert, muss die Seite bei **Netlify** liegen und **Netlify Identity**
aktiv sein.

1. **Projekt zu GitHub** (oder GitLab) hochladen, falls noch nicht geschehen.
2. Bei **Netlify** einloggen → *Add new site* → Repository auswählen → deployen.
   Build-Befehl und Zielordner liest Netlify aus `netlify.toml`:
   *Build command* = `npm run build`, *Publish directory* = `dist`.
3. In Netlify: **Site configuration → Identity → Enable Identity**.
4. Unter **Identity → Services → Git Gateway** → *Enable Git Gateway*.
5. Unter **Identity → Registration**: auf *Invite only* stellen (empfohlen).
6. Falls dein Haupt-Branch nicht `main` heißt, in `public/admin/config.yml` die
   Zeile `branch: main` anpassen (z. B. `master`).

### Redakteure einladen
Netlify → **Identity → Invite users** → E-Mail eingeben. Die Person bekommt
eine Einladung, vergibt ein Passwort und kann sich danach unter
`https://DEINE-DOMAIN/admin/` einloggen.

---

## 2. Änderungen machen – mit Freigabe (für Redakteure)

Das CMS arbeitet im **Freigabe-Modus**: Eine Änderung geht nicht sofort live,
sondern landet zuerst als Entwurf. So kann jemand anderes drüberschauen, bevor
sie veröffentlicht wird.

1. `https://www.wi3consulting.de/admin/` öffnen und einloggen.
2. Links den Bereich wählen, z. B. **„Texte"** → **„Startseite"**.
3. Text ändern bzw. Bild hochladen.
4. Oben **„Speichern"**. Die Änderung ist jetzt ein **Entwurf** – noch nicht live.
5. Oben den Status auf **„Bereit"** stellen, wenn du fertig bist.
6. Die Person, die freigibt, öffnet oben den Reiter **„Arbeitsablauf"**, prüft
   den Eintrag in der Spalte „Bereit" und klickt **„Veröffentlichen"**.

Netlify baut die Seite danach automatisch neu – nach ein bis zwei Minuten ist
die Änderung live. Technisch kann jeder eingeloggte Nutzer veröffentlichen;
die Freigabe ist eine Absprache im Team (Empfehlung: Marketing-Leitung oder
Vorstand gibt frei).

### Schreibregeln für Texte
- **„wi3 consulting" immer klein schreiben** – auch am Satzanfang.
- **Kurz und sachlich.** Überschriften ca. 3–8 Wörter, Texte 1–2 Sätze. Die
  Hinweise unter den Feldern im CMS geben die Länge vor.
- **Keine Werbefloskeln** („Impact", „Zukunftsgestalter", „smarte Lösungen")
  und keine Ausrufezeichen in Überschriften.
- **Nur Fakten, die stimmen** – z. B. Kennzahlen regelmäßig aktualisieren.
- **Impressum:** Nach jeder Vorstandswahl die Vertretungsberechtigten anpassen.

### Ein neues Galerie-Bild hinzufügen
**Galerie (Startseite)** → **„Galerie-Bilder"** → unten **„Bild hinzufügen"** →
Bild hochladen, Bildbeschreibung (Alt-Text) eintragen → Speichern → Bereit →
Veröffentlichen. Genauso lassen sich Bilder **austauschen** (Bild im Eintrag
ersetzen) oder **entfernen** (Eintrag löschen).

### Ein Kopfbild austauschen
**Seitenbilder** → gewünschte Seite aufklappen (z. B. „Für Unternehmen") →
beim **Kopfbild** auf das Bild klicken → neues Bild wählen → Speichern →
Bereit → Veröffentlichen.

### Gut zu wissen
- Der **Alt-Text** beschreibt das Bild für Screenreader und Suchmaschinen. Kurz
  und sachlich, z. B. „wi3-Team bei der Projektarbeit".
- Bei Porträts steuert das Feld **Bildausschnitt** (z. B. `center top`), welcher
  Teil des Fotos sichtbar bleibt – hilfreich, wenn der Kopf angeschnitten wird.
- Kopfbilder und Banner haben dasselbe Feld. Auf breiten Bildschirmen wird oben
  und unten etwas abgeschnitten; ein **kleinerer Prozentwert** schiebt das Bild
  nach unten und zeigt mehr vom oberen Rand. `center 50%` ist die Mitte,
  `center 12%` zeigt fast den kompletten oberen Bildrand. Nach dem Ändern die
  Seite anschauen und bei Bedarf in 5er-Schritten nachjustieren.
- Änderungen an **Ressorts** wirken sich gleichzeitig auf die Ressorts-Seite,
  die Startseite, die Team-Seite und die Seite „Für Studierende" aus.

### Bildgröße vor dem Hochladen
Das CMS lädt Bilder **unverändert** hoch – ein Foto direkt vom Handy oder aus
einer Stock-Datenbank hat schnell 5 bis 25 MB. Auf der Website macht das den
Seitenaufbau spürbar langsam, sichtbar besser wird das Bild dadurch nicht.

Richtwerte vor dem Hochladen:

| Verwendung | Breite | Dateigröße |
|---|---|---|
| Kopfbild / Aufruf-Banner | 1920 px | bis ~300 KB |
| Galerie, Werte-Abschnitt | 1200 px | bis ~150 KB |
| Ressort-Karte | 1000 px | bis ~100 KB |
| Porträtfoto | 800 px | bis ~80 KB |

Verkleinern geht ohne Zusatzsoftware: Bild in **Paint** öffnen → *Größe ändern*
→ Breite eintragen → als JPEG speichern. Oder mit einem Online-Werkzeug wie
squoosh.app.

---

## 3. Lokal testen (optional, für Entwickler)

Decap kann ohne Netlify lokal getestet werden (`local_backend: true` ist bereits
gesetzt). Zwei Terminals im Projektordner:

```bash
# 1) lokalen CMS-Proxy starten (greift auf das lokale Git-Repo zu)
npx decap-server
```

```bash
# 2) die Website starten
npm install     # nur beim ersten Mal
npm run dev
```

Dann im Browser `http://localhost:5173/admin/` öffnen. Ein Klick auf **Login**
genügt – lokal wird kein Passwort abgefragt. Gespeicherte Änderungen landen
direkt in den Dateien unter `content/` und `public/assets/uploads/`.

---

## 4. Ordnerstruktur (Überblick)

```
Webseite/
├─ public/
│  ├─ admin/
│  │  ├─ index.html        ← CMS-Oberfläche (/admin/)
│  │  └─ config.yml        ← CMS-Konfiguration (Bereiche & Felder)
│  ├─ assets/uploads/      ← hier landen alle hochgeladenen Bilder
│  └─ Logo_blau.png, favicon.ico
├─ content/
│  ├─ einstellungen.json   ← Logo, Vereinsname, Kontaktdaten
│  ├─ seiten.json          ← Kopfbilder und Banner-Bilder aller Seiten
│  ├─ galerie.json         ← Galerie-Bilder + Beschreibungen
│  ├─ team.json            ← Vorstandsfotos + Texte
│  └─ ressorts.json        ← Ressorts: Bild, Titel, Text, Ressortleitung
└─ src/                    ← der Website-Code (siehe GUIDELINE.md)
```

Eine ausführliche Erklärung des gesamten Aufbaus steht in **`GUIDELINE.md`**.
