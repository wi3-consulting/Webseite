import { seiten, galerieItems, ressortItems, einstellungen } from "../lib/content.js";
import { BtnLink, Hero, SectionHead, Stat } from "../components/Blocks.jsx";
import { Clock, Mail, MapPin, RESSORT_ICONS } from "../components/Icons.jsx";
import { MARKE, usePageMeta } from "../lib/meta.js";

const PILLARS = [
  { titel: "Wer wir sind", text: "wi3 consulting ist ein eingetragener Verein von Studierenden aus Wiesbaden und Umgebung. Wir bearbeiten Beratungsprojekte für Unternehmen und verbinden dabei Studium und Praxis." },
  { titel: "Für Unternehmen", text: "Analysen, Konzepte und Workshops zu fairen Konditionen – umgesetzt von Teams mit aktuellem Fachwissen aus dem Studium.", link: { to: "/unternehmen", label: "Zu den Leistungen" } },
  { titel: "Für Studierende", text: "Projekterfahrung mit echten Kunden, Verantwortung im Verein und ein Netzwerk, das über das Studium hinaus trägt.", link: { to: "/studierende", label: "Mitglied werden" } },
  { titel: "Kontakt", text: "Sie haben eine konkrete Fragestellung oder möchten uns kennenlernen? Wir melden uns zeitnah zurück.", link: { to: "/#contact", label: "Kontakt aufnehmen" } },
];

const STATS = [
  { zahl: 40, suffix: "+", label: "Mitglieder" },
  { zahl: 30, suffix: "+", label: "abgeschlossene Projekte" },
  { zahl: 350, suffix: "+", label: "Workshops" },
  { zahl: 4, suffix: "", label: "Hochschulen" },
];

const WERTE = [
  { titel: "Vertrauen", text: "Kunden können sich auf uns verlassen. Intern geben wir unseren Mitgliedern Rückhalt und Verantwortung." },
  { titel: "Neugier", text: "Wir arbeiten uns schnell in neue Themen ein und bringen aktuelles Wissen aus dem Studium in die Projekte." },
  { titel: "Professionalität", text: "Strukturiertes Vorgehen, verlässliche Absprachen und Ergebnisse, die termingerecht vorliegen." },
  { titel: "Wirkung", text: "Entscheidend ist, was beim Kunden ankommt: umsetzbare Ergebnisse und messbare Verbesserungen." },
  { titel: "Eigenverantwortung", text: "Jedes Mitglied hat Gestaltungsspielraum und trägt die Verantwortung für das eigene Ergebnis." },
];

export default function Home() {
  usePageMeta(
    `${MARKE} | Studentische Unternehmensberatung Wiesbaden`,
    `${MARKE} ist die studentische Unternehmensberatung in Wiesbaden. Wir unterstützen Unternehmen bei Digitalisierung, Prozessen, Marktanalysen und Strategie.`
  );
  const s = seiten.start;

  return (
    <>
      <Hero
        bild={s.hero_bild}
        alt={s.hero_alt}
        ausschnitt={s.hero_ausschnitt}
        eyebrow={MARKE}
        titel="Studentische Unternehmensberatung in Wiesbaden"
        lead="Wir unterstützen Unternehmen aus der Region bei Fragen zu Digitalisierung, Prozessen, Markt und Strategie – mit engagierten Studierenden und aktuellem Fachwissen."
      >
        <BtnLink to="/unternehmen" className="btn btn--light" withArrow>Leistungen ansehen</BtnLink>
        <BtnLink to="/#contact" className="btn btn--ghost">Kontakt aufnehmen</BtnLink>
      </Hero>

      {/* ===================== POSITIONIERUNG ===================== */}
      <section className="section" id="positionierung">
        <div className="container">
          <SectionHead
            titel="Über uns"
            lead="Unternehmen stehen vor strategischen, digitalen und organisatorischen Fragen. Wir erarbeiten dazu Lösungen – und geben Studierenden die Möglichkeit, Verantwortung in echten Projekten zu übernehmen."
          />
          <div className="pillars" data-stagger="80">
            {PILLARS.map((p) => (
              <div className="pillar reveal" key={p.titel}>
                <h3 className="h3">{p.titel}</h3>
                <p>{p.text}</p>
                {p.link && <BtnLink to={p.link.to} className="textlink">{p.link.label}</BtnLink>}
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
              <h2 className="h2" style={{ color: "#fff" }}>{MARKE} in Zahlen</h2>
              <p className="lead" style={{ color: "rgba(255,255,255,.82)", marginTop: 18 }}>
                Wir bringen Studierende verschiedener Hochschulen mit Unternehmen aus Wiesbaden
                und der Region zusammen.
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
          <div className="split split--reverse" style={{ marginBottom: "clamp(36px,5vw,56px)" }}>
            <div className="split__media js-parallax reveal">
              <img src={s.werte_bild} alt={s.werte_alt} loading="lazy" />
            </div>
            <div className="split__body reveal">
              <h2 className="h2">Unsere Werte</h2>
              <p className="lead">
                Diese Grundsätze gelten in jedem Projekt und in der Zusammenarbeit innerhalb des Vereins.
              </p>
            </div>
          </div>

          <div className="grid grid-3" data-stagger="90">
            {WERTE.map((w) => (
              <article className="card card--rule reveal" key={w.titel}>
                <h3 className="h3">{w.titel}</h3>
                <p>{w.text}</p>
              </article>
            ))}
            <article className="card reveal" style={{ background: "var(--navy)", borderColor: "transparent", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h3 className="h3" style={{ color: "#fff" }}>Projekt besprechen</h3>
              <p style={{ color: "rgba(255,255,255,.78)" }}>Erzählen Sie uns von Ihrer Fragestellung.</p>
              <BtnLink to="/#contact" className="textlink"
                style={{ color: "#fff", marginTop: 16, alignSelf: "flex-start" }}>
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
            titel="Unsere Ressorts"
            lead="Die Vereinsarbeit ist in Ressorts aufgeteilt. Jedes Ressort verantwortet einen klar umrissenen Bereich."
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
          <div style={{ marginTop: 36 }} className="reveal">
            <BtnLink to="/ressorts" className="btn btn--outline" withArrow>Alle Ressorts</BtnLink>
          </div>
        </div>
      </section>

      {/* ===================== GALERIE (CMS) ===================== */}
      {galerieItems.length > 0 && (
        <section className="section bg-paper-2" id="galerie">
          <div className="container">
            <SectionHead
              titel="Einblicke"
              lead="Schulungstage, Workshops und Projektarbeit mit unseren Partnern."
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

      {/* ===================== KONTAKT ===================== */}
      <section className="section" id="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="reveal">
              <h2 className="h2">Kontakt</h2>
              <p className="lead" style={{ marginTop: 16 }}>
                Ob Projektanfrage, Kooperation oder Interesse an einer Mitgliedschaft – schreiben Sie uns.
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
                  <span><b>Erreichbarkeit</b>{einstellungen.oeffnungszeiten}</span>
                </div>
              </div>
            </div>

            <form className="form reveal" style={{ "--d": "120ms" }} action={`mailto:${einstellungen.email}`} method="POST" encType="text/plain">
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
    </>
  );
}
