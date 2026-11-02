# wi3 consulting – Website verstehen: Die komplette Guideline

Diese Anleitung erklärt dir, **wie die Website aufgebaut ist, wie die Teile
zusammenspielen und wie du sie pflegst** – Schritt für Schritt und ohne
Fachchinesisch. Lies sie einmal von oben nach unten, danach kannst du gezielt
zu einzelnen Abschnitten springen.

---

## 1. Das große Ganze in einem Satz

Die Website ist eine **Single Page App mit React**: Ein einziges Grundgerüst lädt
im Browser und tauscht beim Klick auf einen Menüpunkt nur den Inhaltsbereich aus.
Das Design liegt in `styles.css`, die Inhalte in `content/*.json`, und über
**Decap CMS** lassen sich alle Bilder und die Kontaktdaten ohne eine Zeile Code
ändern.

Weil alle Seiten aus denselben Bausteinen gebaut werden, kann nichts mehr
auseinanderlaufen: Ändert man die Navigation an einer Stelle, ändert sie sich
überall.

---

## 2. Die vier Bausteine (mentales Modell)

Stell dir die Website wie ein Haus vor:

| Baustein | Datei(en) | Rolle | Vergleich |
|---|---|---|---|
| **Struktur** | `src/pages/*.jsx` | Was steht auf welcher Seite? | Die Räume |
| **Bausteine** | `src/components/*.jsx` | Wiederverwendbare Teile (Nav, Karten, Hero) | Türen, Fenster, Möbel |
| **Design** | `src/styles.css` | Wie sieht alles aus? | Farbe, Stoff, Form |
| **Inhalt** | `content/*.json` | Welche Bilder und Daten? | Was in den Regalen steht |

Dazu kommt das **CMS** als „Fernbedienung" für alle Bilder (Abschnitt 6).

---

## 3. Welche Datei macht was

```
Webseite/
├─ index.html            ← Grundgerüst, das der Browser zuerst lädt
├─ package.json          ← Liste der Bausteine + Befehle (dev, build)
├─ vite.config.js        ← Einstellungen des Build-Werkzeugs
├─ netlify.toml          ← Build-Befehl und Weiterleitungen für Netlify
│
├─ src/
│  ├─ main.jsx           ← Startpunkt: hängt die App ins Grundgerüst
│  ├─ App.jsx            ← Routen: welche Adresse zeigt welche Seite
│  ├─ styles.css         ← das komplette Design (Farben, Schrift, Abstände)
│  ├─ pages/
│  │  ├─ Home.jsx        ← Startseite (Hero, Zahlen, Werte, Ressorts, Galerie)
│  │  ├─ Kontakt.jsx     ← Kontaktformular; ?anliegen=projekt / bewerbung wählt das Anliegen vor
│  │  ├─ Unternehmen.jsx ← „Für Unternehmen" (Leistungen, Ablauf)
│  │  ├─ Studierende.jsx ← „Für Studierende" (Vorteile)
│  │  ├─ Ressorts.jsx    ← „Ressorts"
│  │  ├─ Team.jsx        ← „Team"
│  │  └─ Impressum.jsx   ← Rechtliches
│  ├─ components/
│  │  ├─ Layout.jsx      ← Navigation, mobiles Menü, Footer, Cookie-Banner
│  │  ├─ Blocks.jsx      ← Hero, Aufruf-Banner, Karten, Kennzahlen
│  │  └─ Icons.jsx       ← alle Symbole an einer Stelle
│  └─ lib/
│     ├─ content.js      ← lädt content/*.json und die Navigationsliste
│     ├─ effects.js      ← Scroll-Effekte, Parallax, Einblenden, Zähler
│     └─ meta.js         ← Seitentitel und Beschreibung pro Seite
│
├─ content/              ← ALLE Inhalte, die über das CMS gepflegt werden
│  ├─ einstellungen.json ← Logo, Vereinsname, Kontaktdaten
│  ├─ seiten.json        ← Kopfbilder und Banner-Bilder aller Seiten
│  ├─ galerie.json       ← Galerie-Bilder + Beschreibungen
│  ├─ team.json          ← Vorstandsfotos + Namen/Rollen/Texte
│  └─ ressorts.json      ← Ressorts: Bild, Titel, Text, Ressortleitung
│
├─ public/               ← wird unverändert ins Web kopiert
│  ├─ admin/
│  │  ├─ index.html      ← die CMS-Oberfläche (erreichbar unter /admin/)
│  │  └─ config.yml      ← legt fest, WAS im CMS bearbeitbar ist
│  ├─ assets/uploads/    ← hier landen alle Bilder aus dem CMS
│  ├─ assets/icons/      ← Favicons
│  └─ Logo_blau.png, favicon.ico
│
├─ GUIDELINE.md          ← dieses Dokument
└─ ANLEITUNG-CMS.md      ← Kurzanleitung nur fürs CMS
```

**Faustregel:** Wiederkehrende Elemente stehen genau einmal in
`src/components/`. Was pro Seite unterschiedlich ist, steht in `src/pages/`.
Was Redakteure ändern können sollen, steht in `content/`.

---

## 4. Das Design verstehen (`src/styles.css`)

Ganz oben in der Datei stehen die **Design-Tokens** – das sind zentrale
Stellschrauben. Änderst du sie dort einmal, ändert sich die ganze Website.

```css
:root{
  --navy:   #032A5B;   /* Hauptfarbe (Blau) */
  --accent: #b8924c;   /* Akzentfarbe (Gold) */
  --paper:  #ffffff;   /* Hintergrund */
  --font-display: "Inter", sans-serif; /* Überschriften */
  --font-sans:    "Inter", sans-serif; /* Fließtext */
}
```

> **Schreibweise der Marke:** immer klein – „wi3 consulting“. In den Seiten
> kommt der Name aus `MARKE` in `src/lib/meta.js`, im CMS aus dem Feld
> „Name der Organisation“. Für Google steht er zusätzlich in `index.html`
> (Titel, Beschreibung, strukturierte Daten).

- Willst du z. B. ein anderes Blau? Nur `--navy` ändern – fertig, überall.
- Die restlichen Regeln darunter sind **Bausteine** (Buttons, Karten, Hero,
  Footer …). Jeder Baustein hat einen Klassennamen, z. B. `.card`, `.btn`,
  `.hero`. Im JSX steht dann `className="card"`, und das CSS gibt ihm sein
  Aussehen.

**Wichtig zu wissen:** `className` im JSX = „Etikett". Das CSS sagt: „Alles mit
dem Etikett `card` sieht so aus." So musst du Design nur **einmal** definieren
und kannst es **beliebig oft** verwenden.

> Die Klassennamen sind dieselben geblieben wie in der früheren HTML-Fassung.
> Wer `styles.css` schon kennt, findet sich sofort zurecht.

---

## 5. Die Bewegung verstehen (`src/lib/effects.js`)

Diese Datei sorgt für das „lebendige" Gefühl beim Scrollen. Sie macht im Kern
vier Dinge:

1. **Fortschrittsbalken** ganz oben (zeigt, wie weit man gescrollt hat).
2. **Navigation** wird beim Scrollen leicht abgesetzt (Schatten).
3. **Einblenden beim Scrollen**: Elemente mit dem Etikett `reveal` tauchen sanft
   auf, sobald sie in den sichtbaren Bereich kommen.
4. **Parallax**: Hintergrundbilder (Hero, Aufruf-Banner) bewegen sich langsamer
   als der Rest → Tiefenwirkung.

Dazu kommt der **Zähler** für die Kennzahlen auf der Startseite.

Du musst hier normalerweise **nichts ändern**. Gut zu wissen: Wenn du einem
Element `className="reveal"` gibst, blendet es automatisch beim Scrollen ein.
Die Effekte werden nach jedem Seitenwechsel neu eingerichtet.

> Barrierefreiheit: Wer im System „Bewegung reduzieren" aktiviert hat, bekommt
> automatisch alle Animationen abgeschaltet.

---

## 6. Das CMS verstehen – der wichtigste Teil

### Die Grundidee
Damit auch Nicht-Programmierer Bilder ändern können, gibt es eine
**Bearbeitungs-Oberfläche** unter `/admin/`. Was dort passiert:

```
  Du im /admin/            →   gespeichert in              →   Ergebnis
  ────────────────             ─────────────────               ────────────────
  Bild hochladen           →   public/assets/uploads/...   →   Netlify baut die
  Beschreibung tippen      →   content/galerie.json            Seite neu und das
  „Publish" klicken            (als Git-Commit)                Bild ist live
```

Du tippst also nie Code. Du füllst ein Formular aus, das CMS legt das Bild im
Ordner ab, schreibt die Beschreibung in eine `.json`-Datei und speichert beides
als Änderung im Repository. Netlify merkt das und baut die Seite automatisch neu
– nach ein bis zwei Minuten ist die Änderung online.

### Was steuert `public/admin/config.yml`?
Diese Datei legt fest, **welche Felder** es im CMS gibt. Beispiel Galerie:

```yaml
- { label: "Bild",         name: "bild",         widget: "image" }
- { label: "Beschreibung", name: "beschreibung", widget: "string" }
```

→ Darum siehst du im CMS genau ein „Bild"-Feld und ein „Beschreibung"-Feld.
Willst du später ein zusätzliches Feld, fügst du hier eine Zeile hinzu und
verwendest es in der passenden Seite unter `src/pages/`.

### Fünf Bereiche sind eingerichtet
- **Seitenbilder** → die Kopfbilder aller Seiten und die Bilder in den
  farbigen Aufruf-Bannern am Seitenende
- **Galerie** → Sektion „Impressionen" auf der Startseite (beliebig erweiterbar)
- **Team** → die Vorstandsfotos
- **Ressorts** → Bild, Titel, Text und Ressortleitung jedes Ressorts
- **Logo & Kontaktdaten** → Logo, Vereinsname, Adresse, E-Mail, Öffnungszeiten

**Damit ist jedes Bild der Website über das CMS austauschbar.**

### Ein Ressort ändert vier Stellen gleichzeitig
`content/ressorts.json` ist die einzige Quelle für Ressorts. Wer dort etwas
ändert, ändert automatisch:

1. die Karten auf der Ressorts-Seite,
2. die Kacheln auf der Startseite,
3. die Ressortleitungen auf der Team-Seite,
4. die Übersicht bei „Für Studierende".

Auch die Zahlwörter („Sechs Fachbereiche") zählen sich selbst aus – kommt ein
Ressort dazu, stimmt der Text weiterhin.

---

## 7. Die häufigsten Aufgaben (Kochrezepte)

### A) Ein neues Galerie-Bild hinzufügen (über das CMS)
1. `https://DEINE-DOMAIN/admin/` öffnen, einloggen.
2. **Galerie (Startseite)** → Eintrag öffnen → **„Add Bild"**.
3. Bild hochladen, Beschreibung eintippen → **Save** → **Publish**. Fertig.

### B) Ein Team-Foto austauschen
CMS → **Team (Vorstand)** → beim Mitglied das Bild ersetzen, ggf. Text
anpassen → Publish.

### C) Ein Kopfbild einer Seite austauschen
CMS → **Seitenbilder** → gewünschte Seite aufklappen → **Kopfbild** ersetzen →
Publish.

### D) Eine Ressortleitung eintragen
CMS → **Ressorts** → beim Ressort **Ressortleiter/in** und optional ein
Profilbild eintragen → Publish. Der Name erscheint dann auf der Ressorts-Seite
und auf der Team-Seite; leer bedeutet „N.N.".

### E) Einen Text ändern, der nicht im CMS liegt
Überschriften und Fließtexte stehen direkt in der jeweiligen Seite unter
`src/pages/`. Datei öffnen, Satz suchen, ändern, speichern.

### F) Eine Farbe ändern
`src/styles.css` öffnen → ganz oben `--navy` oder `--accent` anpassen → speichern.

### G) Eine neue Seite anlegen
1. Datei in `src/pages/` anlegen (z. B. `Projekte.jsx`), an einer bestehenden
   Seite orientieren.
2. In `src/App.jsx` eine Route ergänzen: `<Route path="projekte" element={<Projekte />} />`
3. In `src/lib/content.js` in `NAV_LINKS` einen Eintrag ergänzen – damit
   erscheint die Seite automatisch in Navigation, mobilem Menü und Footer.

---

## 8. Online stellen (Deployment) – die Kurzfassung

Damit das **Speichern im CMS live funktioniert**, braucht die Seite einen
Git-Hoster (GitHub) + Netlify:

1. Projekt zu **GitHub** hochladen.
2. Bei **Netlify** das Repository verbinden. Build-Befehl und Zielordner stehen
   bereits in `netlify.toml` (`npm run build` → `dist`).
3. In Netlify **Identity** + **Git Gateway** aktivieren.
4. Redakteure per **Invite** einladen.

Die ausführliche Klick-für-Klick-Version steht in **`ANLEITUNG-CMS.md`,
Abschnitt 1**.

---

## 9. Lokal anschauen (am eigenen Rechner)

Einmalig die Bausteine installieren, danach reicht ein Befehl:

```bash
npm install     # nur beim ersten Mal
npm run dev
```

Dann im Browser `http://localhost:5173/` öffnen. Änderungen an Dateien sind
sofort sichtbar, ohne neu zu laden.

Fertige Fassung testen (so wie sie später live liegt):

```bash
npm run build
npm run preview
```

---

## 10. Wenn mal etwas nicht klappt (Troubleshooting)

| Symptom | Wahrscheinliche Ursache | Lösung |
|---|---|---|
| `npm run dev` bricht ab | Bausteine fehlen | `npm install` ausführen |
| Weiße Seite, Fehler in der Konsole | Tippfehler in einer `.json` unter `content/` | Datei prüfen: fehlt ein Komma oder eine Klammer? |
| `/admin/` lädt, aber Login geht nicht | Identity/Git Gateway nicht aktiv | Netlify-Schritte (Abschnitt 8) |
| Neues Bild erscheint nicht | Netlify baut noch, oder Cache | ein bis zwei Minuten warten, dann hart neu laden (Strg/Cmd+Shift+R) |
| Bild ist verzerrt | sehr extremes Seitenverhältnis | anderes Bild oder Zuschnitt verwenden; bei Porträts hilft „Bildausschnitt" im CMS |
| Unterseite direkt aufgerufen zeigt 404 | Weiterleitung fehlt | `netlify.toml` muss die Regel `/*` → `/index.html` (200) enthalten |
| Branch-Fehler beim Speichern | Repo heißt nicht `main` | in `public/admin/config.yml` `branch:` anpassen |

---

## 11. Die wichtigsten Begriffe (Mini-Glossar)

- **HTML** – das Gerüst einer Seite (Texte, Bilder, Struktur).
- **CSS** – das Aussehen (Farben, Schrift, Abstände).
- **JavaScript (JS)** – das Verhalten (Bewegung, Laden von Inhalten).
- **React** – Werkzeug, mit dem sich Seiten aus wiederverwendbaren Bausteinen
  („Komponenten") zusammensetzen lassen.
- **JSX** – die Schreibweise in den `.jsx`-Dateien: sieht aus wie HTML, ist aber
  JavaScript.
- **SPA (Single Page App)** – die Seite lädt einmal und tauscht danach nur noch
  den Inhaltsbereich aus, statt jedes Mal komplett neu zu laden.
- **Vite** – das Werkzeug, das beim Entwickeln den lokalen Server startet und
  am Ende die fertigen Dateien in `dist/` baut.
- **Build** – der Schritt, der aus dem Quellcode die fertige Website macht.
- **CMS** – Content-Management-System: Oberfläche zum Pflegen von Inhalten.
- **Decap CMS** – das konkrete CMS, das wir nutzen (kostenlos, ohne Datenbank).
- **JSON** – ein einfaches Textformat, in dem die CMS-Inhalte gespeichert werden.
- **Deployment** – das Online-Stellen der Website.
- **Repository (Repo)** – der Speicherort des Codes (bei GitHub).

---

### Kurz gemerkt
- **Struktur** = `src/pages/` · **Bausteine** = `src/components/` ·
  **Aussehen** = `src/styles.css` · **Inhalt** = `content/`
- **Bilder pflegen** = über `/admin/` (CMS) → speichert in
  `public/assets/uploads/` + `content/*.json`
- **Live-Speichern** braucht Netlify (Identity + Git Gateway)
- Bei Problemen zuerst Abschnitt 10 prüfen.
