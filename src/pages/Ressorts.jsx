import { seiten, texte, ressortItems } from "../lib/content.js";
import { BtnLink, Hero, SectionHead } from "../components/Blocks.jsx";
import { RESSORT_ICONS } from "../components/Icons.jsx";
import { MARKE, usePageMeta } from "../lib/meta.js";

export default function Ressorts() {
  usePageMeta(
    `Ressorts | ${MARKE}`,
    `Die Ressorts von ${MARKE}: ${ressortItems.map((r) => r.titel).join(", ")}.`
  );
  const s = seiten.ressorts;
  // Texte aus content/texte/ressorts.json – im CMS unter „Texte → Ressorts“.
  const t = texte.ressorts;

  return (
    <>
      <Hero
        page
        bild={s.hero_bild}
        alt={s.hero_alt}
        ausschnitt={s.hero_ausschnitt}
        eyebrow="Organisation"
        titel={t.hero.titel}
        lead={t.hero.text}
      >
        <BtnLink to="/ressorts#departments" className="btn btn--light" withArrow>Zur Übersicht</BtnLink>
        <BtnLink to="/kontakt" className="btn btn--ghost">Kontakt aufnehmen</BtnLink>
      </Hero>

      <section className="section" id="departments">
        <div className="container">
          <SectionHead titel={t.uebersicht.titel} lead={t.uebersicht.text} />

          {/* Karten kommen aus content/ressorts.json – im CMS unter „Ressorts“ pflegbar. */}
          <div className="grid grid-3" id="ressorts-grid" data-stagger="90">
            {ressortItems.map((r, i) => {
              const Icon = RESSORT_ICONS[i % RESSORT_ICONS.length];
              return (
                <article className="feature-card reveal" key={r.titel}>
                  {r.bild && (
                    <div className="feature-card__media">
                      <img src={r.bild} alt={r.titel} loading="lazy" />
                    </div>
                  )}
                  <div className="feature-card__body">
                    <div className="card__icon"><Icon /></div>
                    <h3 className="h3">{r.titel}</h3>
                    <p>{r.beschreibung}</p>
                    {r.ressortleiter && (
                      <div className="feature-card__lead">
                        {r.ressortleiter_bild && (
                          <img src={r.ressortleiter_bild} alt={r.ressortleiter} loading="lazy" />
                        )}
                        <span>
                          <span className="feature-card__lead-label">Ressortleitung</span>
                          <span className="feature-card__lead-name">{r.ressortleiter}</span>
                        </span>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}

            <article className="feature-card reveal"
              style={{ background: "var(--navy)", borderColor: "transparent", display: "flex", flexDirection: "column", justifyContent: "center", padding: 34 }}>
              <h3 className="h3" style={{ color: "#fff" }}>{t.karte.titel}</h3>
              <p style={{ color: "rgba(255,255,255,.78)", marginTop: 10 }}>{t.karte.text}</p>
              <BtnLink to="/studierende" className="textlink"
                style={{ color: "#fff", marginTop: 18, alignSelf: "flex-start" }}>
                Für Studierende
              </BtnLink>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
