import { seiten, texte } from "../lib/content.js";
import { BtnLink, CtaBand, Hero, IconCard, SectionHead } from "../components/Blocks.jsx";
import { symbol } from "../components/Icons.jsx";
import { MARKE, usePageMeta } from "../lib/meta.js";

export default function Unternehmen() {
  usePageMeta(
    `Für Unternehmen | ${MARKE}`,
    `${MARKE} für Unternehmen: Digitalisierung, Prozessoptimierung, Marktanalyse, Strategie, Workshops und Konzeptentwicklung aus Wiesbaden.`
  );
  const s = seiten.unternehmen;
  // Texte aus content/texte/unternehmen.json – im CMS unter „Texte → Für Unternehmen“.
  const t = texte.unternehmen;

  return (
    <>
      <Hero
        page
        bild={s.hero_bild}
        alt={s.hero_alt}
        ausschnitt={s.hero_ausschnitt}
        eyebrow="Für Unternehmen"
        titel={t.hero.titel}
        lead={t.hero.text}
      >
        <BtnLink to="/unternehmen#leistungen" className="btn btn--light" withArrow>Unsere Leistungen</BtnLink>
        <BtnLink to="/kontakt?anliegen=projekt" className="btn btn--ghost">Projekt anfragen</BtnLink>
      </Hero>

      {/* ===================== WARUM STUDENTISCHE BERATUNG ===================== */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split__body reveal">
              <h2 className="h2">{t.warum.titel}</h2>
              <p className="lead">{t.warum.text}</p>
            </div>
            <div className="grid grid-2" data-stagger="90">
              {t.warum.vorteile.map((v, i) => (
                <IconCard key={i} icon={symbol(v.symbol)} titel={v.titel}>{v.text}</IconCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== LEISTUNGEN ===================== */}
      <section className="section bg-paper-2" id="leistungen">
        <div className="container">
          <SectionHead titel={t.leistungen.titel} lead={t.leistungen.text} />
          <div className="grid grid-3" data-stagger="80">
            {t.leistungen.liste.map((l, i) => (
              <IconCard key={i} icon={symbol(l.symbol)} titel={l.titel}>{l.text}</IconCard>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== ABLAUF ===================== */}
      <section className="section">
        <div className="container">
          <SectionHead titel={t.ablauf.titel} lead={t.ablauf.text} />
          <div className="process" data-stagger="100">
            {t.ablauf.schritte.map((a, i) => (
              <div className="process__step reveal" key={i}>
                <span className="process__num">Schritt {i + 1}</span>
                <h3>{a.titel}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        bild={s.cta_bild}
        alt={s.cta_alt}
        ausschnitt={s.cta_ausschnitt}
        titel={t.banner.titel}
        text={t.banner.text}
        buttonLabel="Projekt anfragen"
        buttonTo="/kontakt?anliegen=projekt"
      />
    </>
  );
}
