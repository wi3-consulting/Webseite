# WI3 – Website verstehen: Die komplette Guideline

Diese Anleitung erklärt dir, **wie die Website aufgebaut ist, wie die Teile
zusammenspielen und wie du sie pflegst** – Schritt für Schritt und ohne
Fachchinesisch. Lies sie einmal von oben nach unten, danach kannst du gezielt
zu einzelnen Abschnitten springen.

---

## 1. Das große Ganze in einem Satz

Die Website besteht aus **reinen HTML-Dateien** (eine pro Seite), einem
**gemeinsamen Design** (`styles.css`), etwas **Bewegungs-Logik** (`app.js`) und
einem **kleinen Content-System** (Decap CMS), mit dem man Bilder und Texte über
eine einfache Oberfläche ändern kann – ohne Code anzufassen.

Es gibt **kein kompliziertes Framework**, keinen Build-Schritt, keine Datenbank.
Das ist Absicht: So bleibt alles leicht verständlich, schnell und wartbar.

---

## 2. Die drei Bausteine (mentales Modell)

Stell dir die Website wie ein Haus vor:

| Baustein | Datei(en) | Rolle | Vergleich |
|---|---|---|---|
| **Inhalt & Struktur** | `index.html`, `team.html`, … | Was steht auf der Seite? | Die Räume & Möbel |
| **Design** | `assets/styles.css` | Wie sieht alles aus? | Farbe, Stoff, Form |
| **Verhalten** | `assets/app.js`, `assets/cms-render.js` | Was passiert beim Scrollen / Laden? | Strom & Bewegung |

Dazu kommt das **CMS** als „Fernbedienung" für Bilder und Texte (Abschnitt 6).

---

## 3. Welche Datei macht was

```
WI3/
├─ index.html          ← Startseite (Hero, Zahlen, Werte, Ressorts, Galerie, Kontakt)
├─ unternehmen.html    ← Seite „Für Unternehmen" (Leistungen, Ablauf)
├─ studierende.html    ← Seite „Für Studierende" (Vorteile)
├─ ressorts.html       ← Seite „Ressorts" (Bilder kommen aus dem CMS)
├─ team.html           ← Seite „Team" (Fotos kommen aus dem CMS)
├─ impressum.html      ← Rechtliches
│
├─ assets/
│  ├─ styles.css       ← das komplette Design (Farben, Schrift, Abstände)
│  ├─ app.js           ← Scroll-Effekte, Parallax, Menü, Cookie-Banner
│  ├─ cms-render.js    ← lädt die CMS-Inhalte und baut sie in die Seiten ein
│  └─ uploads/         ← hier landen alle über das CMS hochgeladenen Bilder
│
├─ content/
│  ├─ galerie.json     ← Liste der Galerie-Bilder + Beschreibungen
│  ├─ team.json        ← Team-Fotos + Namen/Rollen/Texte
│  └─ ressorts.json    ← Ressort-Bilder + Texte
│
├─ admin/
│  ├─ index.html       ← die CMS-Oberfläche (erreichbar unter /admin/)
│  └─ config.yml       ← legt fest, WAS im CMS bearbeitbar ist
│
├─ Logo_blau.png, Maxi.JPG, Marie.jpeg, Naze.jpeg  ← feste Bilder
├─ GUIDELINE.md        ← dieses Dokument
└─ ANLEITUNG-CMS.md    ← Kurzanleitung nur fürs CMS
```

**Faustregel:** Jede Seite ist eine eigene `.html`-Datei. Alle Seiten teilen
sich dasselbe `styles.css` und `app.js`. Deshalb sehen sie gleich aus und
verhalten sich gleich.

---

## 4. Das Design verstehen (`styles.css`)

Ganz oben in der Datei stehen die **Design-Tokens** – das sind zentrale
Stellschrauben. Änderst du sie dort einmal, ändert sich die ganze Website.

```css
:root{
  --navy:   #032A5B;   /* Hauptfarbe (Blau) */
  --accent: #b8924c;   /* Akzentfarbe (Gold) */
  --paper:  #ffffff;   /* Hintergrund */
  --font-display: "Fraunces", serif;  /* Überschriften */
  --font-sans:    "Inter", sans-serif; /* Fließtext */
}
```

- Willst du z. B. ein anderes Blau? Nur `--navy` ändern – fertig, überall.
- Die restlichen Regeln darunter sind **Bausteine** (Buttons, Karten, Hero,
  Footer …). Jeder Baustein hat einen Klassennamen, z. B. `.card`, `.btn`,
  `.hero`. Im HTML steht dann `class="card"`, und das CSS gibt ihm sein Aussehen.

**Wichtig zu wissen:** „class" im HTML = „Etikett". Das CSS sagt: „Alles mit
dem Etikett `card` sieht so aus." So musst du Design nur **einmal** definieren
und kannst es **beliebig oft** verwenden.

---

## 5. Die Bewegung verstehen (`app.js`)

`app.js` sorgt für das „lebendige" Gefühl beim Scrollen. Es macht im Kern fünf
Dinge:

1. **Fortschrittsbalken** ganz oben (zeigt, wie weit man gescrollt hat).
2. **Navigation** wird beim Scrollen leicht abgesetzt (Schatten).
3. **Einblenden beim Scrollen**: Elemente mit dem Etikett `reveal` tauchen sanft
   auf, sobald sie in den sichtbaren Bereich kommen.
4. **Parallax**: Hintergrundbilder (Hero, CTA-Bänder) bewegen sich langsamer als
   der Rest → Tiefenwirkung, wie bei Porsche Consulting.
5. **Mobiles Menü** und **Cookie-Banner**.

Du musst hier normalerweise **nichts ändern**. Gut zu wissen: Wenn du im HTML
einem Element `class="reveal"` gibst, blendet es automatisch beim Scrollen ein.

> Barrierefreiheit: Wer im System „Bewegung reduzieren" aktiviert hat, bekommt
> automatisch alle Animationen abgeschaltet.

---

## 6. Das CMS verstehen – der wichtigste Teil

### Die Grundidee
Damit auch Nicht-Programmierer Bilder ändern können, gibt es eine
**Bearbeitungs-Oberfläche** unter `/admin/`. Was dort passiert:

```
  Du im /admin/             →   gespeichert in        →   angezeigt durch
  ─────────────────             ───────────────           ────────────────
  Bild hochladen            →   assets/uploads/...    →   cms-render.js
  Beschreibung tippen       →   content/galerie.json  →   baut es in die Seite
  „Publish" klicken             (automatisch)             beim Laden ein
```

Du tippst also nie Code. Du füllst ein Formular aus, das CMS legt das Bild im
Ordner ab und schreibt die Beschreibung in eine `.json`-Datei. Beim nächsten
Laden der Seite liest `cms-render.js` diese Datei und zeigt das Bild an.

### Was steuert `admin/config.yml`?
Diese Datei legt fest, **welche Felder** es im CMS gibt. Beispiel Galerie:

```yaml
- { label: "Bild",         name: "bild",         widget: "image" }
- { label: "Beschreibung", name: "beschreibung", widget: "string" }
```

→ Darum siehst du im CMS genau ein „Bild"-Feld und ein „Beschreibung"-Feld.
Willst du später ein zusätzliches Feld (z. B. „Datum"), fügst du hier eine Zeile
hinzu und liest es in `cms-render.js` aus.

### Drei Bereiche sind eingerichtet
- **Galerie** → Sektion „Impressionen" auf der Startseite (beliebig erweiterbar)
- **Team** → die Vorstandsfotos
- **Ressorts** → die Bilder der Ressort-Karten

---

## 7. Die häufigsten Aufgaben (Kochrezepte)

### A) Ein neues Galerie-Bild hinzufügen (über das CMS)
1. `https://DEINE-DOMAIN/admin/` öffnen, einloggen.
2. **Galerie (Startseite)** → Eintrag öffnen → **„Add Bild"**.
3. Bild hochladen, Beschreibung eintippen → **Save** → **Publish**. Fertig.

### B) Ein Team-Foto austauschen
CMS → **Team** → beim Mitglied das Bild ersetzen, ggf. Text anpassen → Publish.

### C) Einen Text auf einer Seite ändern (direkt im Code)
Texte, die **nicht** im CMS liegen (z. B. der Hero-Satz), stehen direkt im HTML.
Öffne die Datei (z. B. `index.html`), suche den Satz, ändere ihn, speichern.

### D) Eine Farbe ändern
`assets/styles.css` öffnen → ganz oben `--navy` oder `--accent` anpassen → speichern.

### E) Ein neues festes Bild ohne CMS einbauen
Bild in den Ordner legen und im HTML einbinden:
```html
<img src="meinbild.jpg" alt="Kurze Beschreibung" />
```

---

## 8. Online stellen (Deployment) – die Kurzfassung

Damit das **Speichern im CMS live funktioniert**, braucht die Seite einen
Git-Hoster (GitHub) + Netlify:

1. Projekt zu **GitHub** hochladen.
2. Bei **Netlify** das Repository verbinden und deployen (kein Build nötig).
3. In Netlify **Identity** + **Git Gateway** aktivieren.
4. Redakteure per **Invite** einladen.

Die ausführliche Klick-für-Klick-Version steht in **`ANLEITUNG-CMS.md`,
Abschnitt 1**.

> Ohne diesen Schritt funktioniert die Website trotzdem normal – nur das
> Speichern *über das CMS* braucht Netlify. Zum reinen Anschauen reicht ein
> lokaler Server (siehe nächster Punkt).

---

## 9. Lokal anschauen (am eigenen Rechner)

Wichtig: Die CMS-Inhalte werden per `fetch` geladen. Das klappt **nur über einen
Webserver**, nicht per Doppelklick auf die HTML-Datei.

```bash
# im Projektordner ausführen:
python3 -m http.server 8080
```
Dann im Browser `http://localhost:8080/` öffnen. (Beim Doppelklick siehst du
stattdessen die fest hinterlegten Beispielbilder – das ist die eingebaute
Sicherheits-/Rückfall-Ebene, damit nie eine leere Seite erscheint.)

---

## 10. Wenn mal etwas nicht klappt (Troubleshooting)

| Symptom | Wahrscheinliche Ursache | Lösung |
|---|---|---|
| Galerie zeigt nur die alten Beispielbilder | Seite per Doppelklick geöffnet | Über `localhost`/Netlify öffnen (Abschnitt 9) |
| `/admin/` lädt, aber Login geht nicht | Identity/Git Gateway nicht aktiv | Netlify-Schritte (Abschnitt 8) |
| Neues Bild erscheint nicht | „Publish" vergessen oder Cache | Im CMS publishen, Seite hart neu laden (Strg/Cmd+Shift+R) |
| Bild ist verzerrt | sehr extremes Seitenverhältnis | anderes Bild oder Zuschnitt verwenden |
| Branch-Fehler beim Speichern | Repo heißt nicht `main` | in `admin/config.yml` `branch:` anpassen |

---

## 11. Die wichtigsten Begriffe (Mini-Glossar)

- **HTML** – das Gerüst einer Seite (Texte, Bilder, Struktur).
- **CSS** – das Aussehen (Farben, Schrift, Abstände).
- **JavaScript (JS)** – das Verhalten (Bewegung, Laden von Inhalten).
- **CMS** – Content-Management-System: Oberfläche zum Pflegen von Inhalten.
- **Decap CMS** – das konkrete CMS, das wir nutzen (kostenlos, ohne Datenbank).
- **JSON** – ein einfaches Textformat, in dem die CMS-Inhalte gespeichert werden.
- **Deployment** – das Online-Stellen der Website.
- **Repository (Repo)** – der Speicherort des Codes (bei GitHub).

---

### Kurz gemerkt
- **Inhalt** = HTML-Dateien · **Aussehen** = `styles.css` · **Bewegung** = `app.js`
- **Bilder pflegen** = über `/admin/` (CMS) → speichert in `assets/uploads/` + `content/*.json`
- **Live-Speichern** braucht Netlify (Identity + Git Gateway)
- Bei Problemen zuerst Abschnitt 10 prüfen.
