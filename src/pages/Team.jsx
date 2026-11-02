import { seiten, teamItems, ressortItems } from "../lib/content.js";
import { BtnLink, CtaBand, Hero, SectionHead } from "../components/Blocks.jsx";
import { RESSORT_ICONS } from "../components/Icons.jsx";
import { usePageMeta } from "../lib/meta.js";

export default function Team() {
  usePageMeta(
    "Team – wi3 consulting",
    "Das Team von wi3 consulting: Vorstand und Ressortleitungen. Engagierte Studierende mit Leidenschaft für Beratung, Innovation und Teamwork."
  );
  const s = seiten.team;

  return (
    <>
      <Hero
        page
        bild={s.hero_bild}
        alt={s.hero_alt}
        ausschnitt={s.hero_ausschnitt}
        eyebrow="Unser Team"
        titel="Die Menschen"
        titelSoft="— hinter wi3."
        lead="Engagierte Studierende mit Leidenschaft für Beratung, Innovation und Teamwork. Lerne unser Vorstandsteam und unsere Ressortleitungen kennen."
      >
        <BtnLink to="/team#vorstand" className="btn btn--light" withArrow>Team kennenlernen</BtnLink>
        <BtnLink to="/#contact" className="btn btn--ghost">Kontakt aufnehmen</BtnLink>
      </Hero>

      {/* ===================== VORSTAND ===================== */}
      <section className="section" id="vorstand">
        <div className="container">
          <SectionHead
            eyebrow="Das Team"
            titel="Vorstand & Organisation"
            lead="Drei Köpfe an der Spitze, die Strategie, Betrieb und Finanzen von wi3 consulting verantworten."
          />
          {/* Inhalt aus content/team.json – im CMS unter „Team“ pflegbar. */}
          <div className="grid grid-3" id="team-grid" data-stagger="100">
            {teamItems.map((m) => (
              <article className="team-card reveal" key={m.name}>
                <div className="team-card__media">
                  <img src={m.bild} alt={`${m.name} – ${m.rolle}`}
                    style={m.bildausschnitt ? { objectPosition: m.bildausschnitt } : undefined} />
                </div>
                <div className="team-card__body">
                  <p className="team-card__role">{m.rolle}</p>
                  <h3 className="h3">{m.name}</h3>
                  <p>{m.beschreibung}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== RESSORTLEITUNGEN ===================== */}
      <section className="section bg-paper-2">
        <div className="container">
          <SectionHead eyebrow="Ressortleitungen" titel="Die Köpfe hinter unseren Fachbereichen" />
          {/* Leitet sich aus content/ressorts.json ab – wer dort als
              Ressortleitung eingetragen ist, erscheint hier automatisch. */}
          <div className="grid grid-3" data-stagger="80">
            {ressortItems.map((r, i) => {
              const Icon = RESSORT_ICONS[i % RESSORT_ICONS.length];
              return (
                <article className="card reveal" key={r.titel}>
                  <div className="card__icon"><Icon /></div>
                  <p className="team-card__role" style={{ marginTop: 16 }}>Ressortleitung {r.titel}</p>
                  <h3 className="h3" style={{ marginTop: 6 }}>{r.ressortleiter || "N.N."}</h3>
                  <p>{r.beschreibung}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand
        bild={s.cta_bild}
        alt={s.cta_alt}
        ausschnitt={s.cta_ausschnitt}
        titel="Werde Teil unseres Teams!"
        text="Du willst mitgestalten? Wir suchen engagierte Studierende, die Lust auf echte Projekte und ein starkes Netzwerk haben."
        buttonLabel="Jetzt bewerben"
        buttonTo="/#contact"
      />
    </>
  );
}
