import { seiten, teamItems, ressortItems } from "../lib/content.js";
import { BtnLink, CtaBand, Hero, SectionHead } from "../components/Blocks.jsx";
import { RESSORT_ICONS } from "../components/Icons.jsx";
import { MARKE, usePageMeta } from "../lib/meta.js";

export default function Team() {
  usePageMeta(
    `Team | ${MARKE}`,
    `Vorstand und Ressortleitungen von ${MARKE}, der studentischen Unternehmensberatung in Wiesbaden.`
  );
  const s = seiten.team;

  return (
    <>
      <Hero
        page
        bild={s.hero_bild}
        alt={s.hero_alt}
        ausschnitt={s.hero_ausschnitt}
        eyebrow="Team"
        titel="Vorstand und Ressortleitungen"
        lead={`Die Studierenden, die ${MARKE} leiten und organisieren.`}
      >
        <BtnLink to="/team#vorstand" className="btn btn--light" withArrow>Zum Vorstand</BtnLink>
        <BtnLink to="/#contact" className="btn btn--ghost">Kontakt aufnehmen</BtnLink>
      </Hero>

      {/* ===================== VORSTAND ===================== */}
      <section className="section" id="vorstand">
        <div className="container">
          <SectionHead
            titel="Vorstand"
            lead="Der Vorstand verantwortet Strategie, operative Abläufe und Finanzen des Vereins."
          />
          {/* Inhalt aus content/team.json – im CMS unter „Team“ pflegbar. */}
          <div className="grid grid-3" id="team-grid" data-stagger="100">
            {teamItems.map((m) => (
              <article className="team-card reveal" key={m.name}>
                <div className="team-card__media">
                  <img src={m.bild} alt={`${m.name}, ${m.rolle}`}
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
          <SectionHead titel="Ressortleitungen" />
          {/* Leitet sich aus content/ressorts.json ab – wer dort als
              Ressortleitung eingetragen ist, erscheint hier automatisch. */}
          <div className="grid grid-3" data-stagger="80">
            {ressortItems.map((r, i) => {
              const Icon = RESSORT_ICONS[i % RESSORT_ICONS.length];
              return (
                <article className="card reveal" key={r.titel}>
                  <div className="card__icon"><Icon /></div>
                  <p className="team-card__role" style={{ marginTop: 16 }}>{r.titel}</p>
                  <h3 className="h3" style={{ marginTop: 4 }}>{r.ressortleiter || "N.N."}</h3>
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
        titel="Werde Teil des Teams"
        text="Wir suchen Studierende, die Lust auf Projektarbeit und Verantwortung im Verein haben."
        buttonLabel="Bewerben"
        buttonTo="/#contact"
      />
    </>
  );
}
