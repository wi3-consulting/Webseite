import { seiten, galerieItems, ressortItems, einstellungen } from "../lib/content.js";
import { BtnLink, Hero, SectionHead, Stat } from "../components/Blocks.jsx";
import { Clock, Mail, MapPin, RESSORT_ICONS } from "../components/Icons.jsx";
import { usePageMeta } from "../lib/meta.js";

const PILLARS = [
  { num: "01", titel: "wi3 consulting", text: "Wiesbadens studentische Denkfabrik: frische Perspektiven, top Fachwissen und unbändiger Tatendrang. Hier wird Theorie zur Praxis und Zukunft gestaltet." },
  { num: "02", titel: "Für Unternehmen", text: "Smarte Lösungen – günstig, schnell und innovativ. Arbeiten Sie mit Wiesbadens Zukunftsgestaltern zusammen.", link: { to: "/unternehmen", label: "Leistungen ansehen" } },
  { num: "03", titel: "Für Studierende", text: "Gestalte die Zukunft mit echten Projekten, einem starken Team und sichtbarem Impact.", link: { to: "/studierende", label: "Deine Vorteile" } },
  { num: "04", titel: "Kontakt", text: "Gute Ideen beginnen mit einem Gespräch. Nicht zuschauen, sondern anpacken – kontaktiere uns unverbindlich.", link: { to: "/#contact", label: "Gespräch starten" } },
];

const STATS = [
  { zahl: 40, suffix: "+", label: "Berater" },
  { zahl: 30, suffix: "+", label: "Projekte abgeschlossen" },
  { zahl: 350, suffix: "+", label: "Workshops" },
  { zahl: 4, suffix: "", label: "Hochschulen" },
];

const WERTE = [
  { num: "01", titel: "Vertrauen", text: "Vertrauen ist unsere Basis: Kunden vertrauen uns, wir vertrauen unseren Mitgliedern und geben ihnen volle Rückendeckung." },
  { num: "02", titel: "Neugier", text: "Wir sind neugierig, lernen schnell und bringen frisches Wissen direkt in jedes Projekt ein." },
  { num: "03", titel: "Professionalität", text: "Wir liefern konsequent hochwertige Ergebnisse und arbeiten strukturiert, zuverlässig und termingerecht." },
  { num: "04", titel: "Impact", text: "Am Ende des Tages zählt das Ergebnis: echte Veränderungen und höchste Kundenzufriedenheit." },
  { num: "05", titel: "Freiheit", text: "Jeder bekommt maximale Handlungsfreiheit und übernimmt zugleich volle Verantwortung für sein Ergebnis." },
];

const KOOPERATIONEN = ["Kooperationspartner", "Praxisprojekte", "Netzwerk", "Unternehmen", "Region Wiesbaden", "Campus"];

/* Zahlwort für die Ressort-Überschrift, damit Text und Datenlage
   nicht auseinanderlaufen, wenn im CMS ein Ressort dazukommt. */
const ZAHLWORT = ["Null", "Ein", "Zwei", "Drei", "Vier", "Fünf", "Sechs", "Sieben", "Acht", "Neun", "Zehn"];

export default function Home() {
  usePageMeta(
    "wi3 consulting | Studentische Unternehmensberatung Wiesbaden",
    "wi3 consulting: Wiesbadens studentische Unternehmensberatung. Frische Perspektiven, fundiertes Fachwissen und praxisnahe Lösungen für Unternehmen aus der Region."
  );
  const s = seiten.start;
  const anzahl = ressortItems.length;

  return (
    <>
      <Hero
        bild={s.hero_bild}
        alt={s.hero_alt}
        ausschnitt={s.hero_ausschnitt}
        eyebrow="Wiesbaden · Innovativ · Beratend"
        titel="We shape tomorrow"
        titelSoft="— today."
        lead="Wiesbadens studentische Denkfabrik. Wir verbinden studentische Energie mit echten Praxisprojekten und geben Nachwuchstalenten die Bühne, die Zukunft aktiv zu gestalten."
        sub="Weil die Zukunft frische Köpfe braucht: Talente aus Wiesbaden und Umgebung gestalten gemeinsam die Wirtschaft von morgen."
      >
        <BtnLink to="/#about" className="btn btn--light" withArrow>Mehr erfahren</BtnLink>
        <BtnLink to="/#contact" className="btn btn--ghost">Jetzt Kontakt aufnehmen</BtnLink>
      </Hero>

      {/* ===================== POSITIONIERUNG ===================== */}
      <section className="section" id="positionierung">
        <div className="container">
          <SectionHead
            eyebrow="Was wi3 ausmacht"
            titel="Frische Perspektiven, die Theorie zur Praxis machen."
            lead="Unternehmen stehen vor strategischen, digitalen und organisatorischen Herausforderungen. Wir liefern smarte Lösungen – günstig, schnell und innovativ – und schaffen zugleich Studierenden den Raum, echten Impact zu erzeugen."
          />
          <div className="pillars" data-stagger="80">
            {PILLARS.map((p) => (
              <div className="pillar reveal" key={p.num}>
                <span className="pillar__num">{p.num}</span>
                <div>
                  <h3 className="h3">{p.titel}</h3>
                  <p>
                    {p.text}{" "}
                    {p.link && <BtnLink to={p.link.to} className="textlink">{p.link.label}</BtnLink>}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== ZAHLEN ===================== */}
      <section className="section bg-navy" id="about">
        <div className="container">
          <div className="split">
            <div className="split__body reveal">
              <p className="eyebrow eyebrow--light">Lassen wir die Zahlen sprechen</p>
              <h2 className="h2" style={{ color: "#fff", marginTop: 14 }}>
                So gestalten wir Wiesbadens studentische Unternehmensberatung.
              </h2>
              <p className="lead" style={{ color: "rgba(255,255,255,.82)", marginTop: 20 }}>
                wi3 verbindet Talente der Region mit realen Projekten für smarte Lösungen in Wirtschaft und Gesellschaft.
              </p>
              <p style={{ color: "rgba(255,255,255,.72)", marginTop: 16 }}>
                Unser Kern: frische Ideen, top Fachwissen und Teamgeist. Wir stehen für Innovation, Nachhaltigkeit und
                Impact – weil die Zukunft von mutigen Köpfen gemacht wird.
              </p>
            </div>
            <div className="stats reveal" style={{ "--d": "120ms" }}>
              {STATS.map((st) => <Stat key={st.label} {...st} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== WERTE ===================== */}
      <section className="section bg-paper-2" id="values">
        <div className="container">
          <div className="split split--reverse" style={{ marginBottom: "clamp(36px,5vw,60px)" }}>
            <div className="split__media js-parallax reveal">
              <img src={s.werte_bild} alt={s.werte_alt} loading="lazy" />
            </div>
            <div className="split__body reveal">
              <p className="eyebrow">Unsere Werte</p>
              <h2 className="h2" style={{ marginTop: 14 }}>Was wi3 im Kern ausmacht</h2>
              <p className="lead" style={{ marginTop: 18 }}>
                Fünf Prinzipien prägen jede Zusammenarbeit – nach innen wie nach außen.
              </p>
            </div>
          </div>

          <div className="grid grid-3" data-stagger="90">
            {WERTE.map((w) => (
              <article className="card reveal" key={w.num}>
                <span className="card__num">{w.num}</span>
                <h3 className="h3">{w.titel}</h3>
                <p>{w.text}</p>
              </article>
            ))}
            <article className="card reveal" style={{ background: "var(--navy)", color: "#fff", borderColor: "transparent", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h3 className="h3" style={{ color: "#fff" }}>Bereit für ein Projekt mit Wirkung?</h3>
              <p style={{ color: "rgba(255,255,255,.78)" }}>Lernen Sie kennen, wie wir arbeiten.</p>
              <BtnLink to="/#contact" className="textlink"
                style={{ color: "#fff", borderColor: "var(--accent)", marginTop: 18, alignSelf: "flex-start" }}>
                Kontakt aufnehmen
              </BtnLink>
            </article>
          </div>
        </div>
      </section>

      {/* ===================== RESSORTS ===================== */}
      <section className="section" id="departments">
        <div className="container">
          <SectionHead
            eyebrow="Unsere Ressorts"
            titel="Spezialisiert, strukturiert, interdisziplinär"
            lead={`${ZAHLWORT[anzahl] || anzahl} Fachbereiche greifen ineinander – für eine professionelle Arbeitsweise auf jedem Projekt.`}
          />
          <div className="grid grid-3" data-stagger="80">
            {ressortItems.map((r, i) => {
              const Icon = RESSORT_ICONS[i % RESSORT_ICONS.length];
              return (
                <article className="card reveal" key={r.titel}>
                  <div className="card__icon"><Icon /></div>
                  <h3 className="h3">{r.titel}</h3>
                  <p>{r.beschreibung}</p>
                </article>
              );
            })}
          </div>
          <div style={{ marginTop: 40 }} className="reveal">
            <BtnLink to="/ressorts" className="btn btn--outline" withArrow>Alle Ressorts im Detail</BtnLink>
          </div>
        </div>
      </section>

      {/* ===================== GALERIE (CMS) ===================== */}
      {galerieItems.length > 0 && (
        <section className="section bg-paper-2" id="galerie">
          <div className="container">
            <SectionHead
              eyebrow="Galerie"
              titel="Workshops, Events und Projektarbeit"
              lead="Einblicke in unsere Schulungstage, Workshops und die Zusammenarbeit mit Praxispartnern."
            />
            <div className="grid grid-3" id="galerie-grid" data-stagger="80">
              {galerieItems.map((g) => (
                <figure className="gallery-card reveal" key={g.bild}>
                  <div className="gallery-card__media">
                    <img src={g.bild} alt={g.alt || g.beschreibung || ""} loading="lazy" />
                  </div>
                  {g.beschreibung && <figcaption>{g.beschreibung}</figcaption>}
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===================== KOOPERATIONEN ===================== */}
      <section className="section bg-paper-2">
        <div className="container">
          <SectionHead eyebrow="Bisherige Kooperationen" titel="Zusammenarbeit mit Wirkung" />
          <div className="chips" data-stagger="60">
            {KOOPERATIONEN.map((c) => <div className="chip reveal" key={c}>{c}</div>)}
          </div>
        </div>
      </section>

      {/* ===================== KONTAKT ===================== */}
      <section className="section" id="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="reveal">
              <p className="eyebrow">Kontakt</p>
              <h2 className="h2" style={{ marginTop: 14 }}>Kontaktieren Sie uns</h2>
              <p className="lead" style={{ marginTop: 18 }}>
                Kreativ. Teamspirit. Talentschmiede. So beschreiben uns unsere Mitglieder kurz und knapp.
                Gute Ideen beginnen mit einem Gespräch.
              </p>
              <div className="info-card">
                <div className="info-row">
                  <MapPin />
                  <span><b>Adresse</b>{einstellungen.adresse}</span>
                </div>
                <div className="info-row">
                  <Mail />
                  <span><b>E-Mail</b>{einstellungen.email}</span>
                </div>
                <div className="info-row">
                  <Clock />
                  <span><b>Öffnungszeiten</b>{einstellungen.oeffnungszeiten}</span>
                </div>
              </div>
            </div>

            <form className="form reveal" style={{ "--d": "120ms" }} action={`mailto:${einstellungen.email}`} method="POST" encType="text/plain">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Ihr Name" required />
              </div>
              <div className="field">
                <label htmlFor="email">E-Mail</label>
                <input id="email" name="email" type="email" placeholder="ihre@email.de" required />
              </div>
              <div className="field">
                <label htmlFor="message">Nachricht</label>
                <textarea id="message" name="message" placeholder="Ihre Nachricht" required />
              </div>
              <button type="submit" className="btn btn--primary" style={{ width: "100%", justifyContent: "center" }}>
                Nachricht senden
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
