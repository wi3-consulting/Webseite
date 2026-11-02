import { useSearchParams } from "react-router-dom";
import { einstellungen } from "../lib/content.js";
import { Clock, Mail, MapPin } from "../components/Icons.jsx";
import { MARKE, usePageMeta } from "../lib/meta.js";

/* Anliegen lassen sich per ?anliegen=… vorwählen – so führen
   „Projekt anfragen“ und „Bewerben“ auf dieselbe Seite, aber mit
   passender Überschrift und Betreffzeile. */
const ANLIEGEN = {
  allgemein: { label: "Allgemeine Anfrage", titel: "Kontakt", text: "Ob Projektanfrage, Kooperation oder Interesse an einer Mitgliedschaft – schreiben Sie uns." },
  projekt: { label: "Projektanfrage", titel: "Projekt anfragen", text: "Beschreiben Sie kurz Ihre Fragestellung. Wir melden uns für ein unverbindliches Erstgespräch." },
  bewerbung: { label: "Bewerbung / Mitgliedschaft", titel: "Bewerben", text: "Schreib uns kurz, wer du bist und was du studierst – wir melden uns bei dir." },
};

export default function Kontakt() {
  const [params, setParams] = useSearchParams();
  const key = ANLIEGEN[params.get("anliegen")] ? params.get("anliegen") : "allgemein";
  const a = ANLIEGEN[key];

  usePageMeta(
    `Kontakt | ${MARKE}`,
    `Kontakt zu ${MARKE}: Projektanfragen, Kooperationen und Bewerbungen.`
  );

  function onAnliegen(e) {
    const next = e.target.value;
    setParams(next === "allgemein" ? {} : { anliegen: next }, { replace: true, preventScrollReset: true });
  }

  return (
    <section className="section" style={{ paddingTop: "clamp(50px,7vw,90px)" }}>
      <div className="container">
        <div className="contact-grid">
          <div className="reveal">
            <h1 className="h2">{a.titel}</h1>
            <p className="lead" style={{ marginTop: 16 }}>{a.text}</p>
            <div className="info-card">
              <div className="info-row">
                <MapPin />
                <span><b>Adresse</b>{einstellungen.adresse}</span>
              </div>
              <div className="info-row">
                <Mail />
                <span><b>E-Mail</b><a href={`mailto:${einstellungen.email}`}>{einstellungen.email}</a></span>
              </div>
              <div className="info-row">
                <Clock />
                <span><b>Erreichbarkeit</b>{einstellungen.oeffnungszeiten}</span>
              </div>
            </div>
          </div>

          <form className="form reveal" style={{ "--d": "120ms" }}
            action={`mailto:${einstellungen.email}?subject=${encodeURIComponent(`${a.label} über die Website`)}`}
            method="POST" encType="text/plain">
            <div className="field">
              <label htmlFor="anliegen">Anliegen</label>
              <select id="anliegen" name="anliegen" value={key} onChange={onAnliegen}>
                {Object.entries(ANLIEGEN).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
              </select>
            </div>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" required />
            </div>
            <div className="field">
              <label htmlFor="email">E-Mail</label>
              <input id="email" name="email" type="email" required />
            </div>
            <div className="field">
              <label htmlFor="message">Nachricht</label>
              <textarea id="message" name="message" required />
            </div>
            <button type="submit" className="btn btn--primary" style={{ width: "100%", justifyContent: "center" }}>
              Nachricht senden
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
