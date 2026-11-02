import { seiten, ressortItems } from "../lib/content.js";
import { BtnLink, Hero, SectionHead } from "../components/Blocks.jsx";
import { Calendar, RESSORT_ICONS } from "../components/Icons.jsx";
import { usePageMeta } from "../lib/meta.js";

const ZAHLWORT = ["Null", "Ein", "Zwei", "Drei", "Vier", "Fünf", "Sechs", "Sieben", "Acht", "Neun", "Zehn"];

export default function Ressorts() {
  usePageMeta(
    "Ressorts – wi3 consulting",
    "Die Ressorts von wi3 consulting: Sales, Marketing, HR, Eventmanagement, IT und Controlling. Spezialisiert, strukturiert und interdisziplinär."
  );
  const s = seiten.ressorts;
  const anzahl = ressortItems.length;

  return (
    <>
      <Hero
        page
        bild={s.hero_bild}
        alt={s.hero_alt}
        ausschnitt={s.hero_ausschnitt}
        eyebrow="Unsere Fachbereiche"
        titel="Ressorts"
        titelSoft="— spezialisiert & interdisziplinär."
        lead="Unsere Organisation ist in spezialisierte Ressorts gegliedert, die gemeinsam eine professionelle und strukturierte Arbeitsweise ermöglichen."
      >
        <BtnLink to="/ressorts#departments" className="btn btn--light" withArrow>Ressorts ansehen</BtnLink>
        <BtnLink to="/#contact" className="btn btn--ghost">Kontakt aufnehmen</BtnLink>
      </Hero>

      <section className="section" id="departments">
        <div className="container">
          <SectionHead
            eyebrow="Ressorts"
            titel="Unsere Fachbereiche im Detail"
            lead={`${ZAHLWORT[anzahl] || anzahl} Teams, ein gemeinsames Ziel: professionelle Beratung mit Wirkung.`}
          />

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
                  {r.datum && (
                    <div className="feature-card__foot"><Calendar />{r.datum}</div>
                  )}
                </article>
              );
            })}

            <article className="feature-card reveal ressort-cta"
              style={{ background: "var(--navy)", borderColor: "transparent", display: "flex", flexDirection: "column", justifyContent: "center", padding: 38 }}>
              <h3 className="h3" style={{ color: "#fff" }}>Dein Ressort ist dabei?</h3>
              <p style={{ color: "rgba(255,255,255,.78)", marginTop: 12 }}>
                Finde heraus, wo du am besten einsteigst – wir freuen uns auf dich.
              </p>
              <BtnLink to="/studierende" className="textlink"
                style={{ color: "#fff", borderColor: "var(--accent)", marginTop: 20, alignSelf: "flex-start" }}>
                Für Studierende
              </BtnLink>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
