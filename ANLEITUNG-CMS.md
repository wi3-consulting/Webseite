# WI3 – Bilder verwalten mit dem CMS (Decap)

Die Website hat ein eingebautes Content-Management-System. Damit können auch
Personen ohne Programmierkenntnisse **Bilder samt Beschreibung hinzufügen,
austauschen oder löschen** – über eine einfache Oberfläche unter `/admin/`.

Verwaltet werden:
- **Seitenbilder** – die großen Kopfbilder aller Seiten und die Bilder in den
  farbigen Aufruf-Bannern am Seitenende
- **Galerie** (Sektion „Impressionen" auf der Startseite) – beliebig erweiterbar
- **Team** (Vorstandsfotos inkl. Name, Rolle, Text)
- **Ressorts** (Bild, Titel, Beschreibung und Ressortleitung je Ressort)
- **Logo & Kontaktdaten** (Logo, Vereinsname, Adresse, E-Mail, Öffnungszeiten)

**Jedes Bild der Website lässt sich darüber austauschen** – es gibt keine fest
im Code verdrahteten Fotos mehr.

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

## 2. So fügt man ein neues Bild hinzu (für Redakteure)

1. `https://DEINE-DOMAIN/admin/` öffnen und einloggen.
2. Links den Bereich wählen, z. B. **„Galerie (Startseite)"**.
3. Auf den vorhandenen Eintrag **„Galerie-Bilder"** klicken.
4. Unten bei **Bilder** auf **„Add Bild"** klicken.
5. **Bild hochladen** (oder ein bereits hochgeladenes auswählen) und die
   **Beschreibung** eintragen. (Optional: Alt-Text für Barrierefreiheit.)
6. Oben rechts **„Save"** und dann **„Publish"**.

Netlify baut die Seite danach automatisch neu – nach ein bis zwei Minuten ist
das Bild live. Genauso lassen sich Bilder **austauschen** (Bild im Eintrag
ersetzen) oder **entfernen** (Eintrag löschen). Die übrigen Bereiche
funktionieren identisch.

### Ein Kopfbild austauschen
**Seitenbilder** → gewünschte Seite aufklappen (z. B. „Für Unternehmen") →
beim **Kopfbild** auf das Bild klicken → neues Bild wählen → Save → Publish.

### Gut zu wissen
- Der **Alt-Text** beschreibt das Bild für Screenreader und Suchmaschinen. Kurz
  und sachlich, z. B. „WI3-Team bei der Projektarbeit".
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
