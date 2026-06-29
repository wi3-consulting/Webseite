# WI3 – Bilder verwalten mit dem CMS (Decap)

Die Website hat jetzt ein eingebautes Content-Management-System. Damit können
auch Personen ohne Programmierkenntnisse **Bilder samt Beschreibung hinzufügen,
austauschen oder löschen** – über eine einfache Oberfläche unter `/admin/`.

Verwaltet werden:
- **Galerie** (Sektion „Impressionen" auf der Startseite) – beliebig erweiterbar
- **Team** (Vorstandsfotos inkl. Name, Rolle, Text)
- **Ressorts** (Bilder der Ressort-Karten)

Alle hochgeladenen Bilder landen automatisch im Ordner **`assets/uploads/`**.
Die Beschreibungen werden in den Dateien unter **`content/`** gespeichert.

---

## 1. Einmalige Einrichtung (technisch, einmalig nötig)

Das CMS speichert Änderungen direkt im Git-Repository der Website. Damit das
funktioniert, muss die Seite bei **Netlify** liegen und **Netlify Identity**
aktiv sein.

1. **Projekt zu GitHub** (oder GitLab) hochladen, falls noch nicht geschehen.
2. Bei **Netlify** einloggen → *Add new site* → Repository auswählen → deployen.
   (Es ist kein Build nötig – „Publish directory" = Projekt-Hauptordner.)
3. In Netlify: **Site configuration → Identity → Enable Identity**.
4. Unter **Identity → Services → Git Gateway** → *Enable Git Gateway*.
5. Unter **Identity → Registration**: auf *Invite only* stellen (empfohlen).
6. Falls dein Haupt-Branch nicht `main` heißt, in `admin/config.yml` die Zeile
   `branch: main` anpassen (z. B. `master`).

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

Nach kurzer Zeit erscheint das Bild automatisch auf der Website. Genauso lassen
sich Bilder **austauschen** (Bild im Eintrag ersetzen) oder **entfernen**
(Eintrag löschen). Team und Ressorts funktionieren identisch.

---

## 3. Lokal testen (optional, für Entwickler)

Decap kann ohne Netlify lokal getestet werden (`local_backend: true` ist bereits
gesetzt):

```bash
# 1) lokalen CMS-Proxy starten (greift auf das lokale Git-Repo zu)
npx decap-server

# 2) in einem zweiten Terminal die Seite über einen Webserver ausliefern
#    (NICHT per Doppelklick öffnen – dann lädt das CMS keine Daten)
python3 -m http.server 8080
```

Dann im Browser `http://localhost:8080/admin/` öffnen.

> Hinweis: Die Galerie/Team/Ressorts laden ihre Inhalte per `fetch` aus den
> JSON-Dateien. Das funktioniert nur, wenn die Seite über einen **Webserver**
> ausgeliefert wird (lokal `http://localhost:…`, live über Netlify). Beim
> direkten Öffnen der HTML-Datei per Doppelklick zeigt die Seite die fest
> hinterlegten Beispiel-Bilder als Rückfall-Ebene.

---

## 4. Ordnerstruktur (Überblick)

```
WI3/
├─ admin/
│  ├─ index.html        ← CMS-Oberfläche (/admin/)
│  └─ config.yml        ← CMS-Konfiguration (Bereiche & Felder)
├─ assets/
│  ├─ uploads/          ← hier landen alle hochgeladenen Bilder
│  ├─ styles.css
│  ├─ app.js
│  └─ cms-render.js     ← lädt die CMS-Inhalte in die Seiten
├─ content/
│  ├─ galerie.json      ← Galerie-Bilder + Beschreibungen
│  ├─ team.json         ← Team-Fotos + Texte
│  └─ ressorts.json     ← Ressort-Bilder + Texte
└─ index.html, team.html, ressorts.html, …
```
