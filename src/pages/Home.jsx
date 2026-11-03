import { seiten, texte, galerieItems, ressortItems, einstellungen } from "../lib/content.js";
import { BtnLink, Hero, SectionHead, Stat } from "../components/Blocks.jsx";
import { RESSORT_ICONS } from "../components/Icons.jsx";
import { MARKE, usePageMeta } from "../lib/meta.js";

export default function Home() {
  usePageMeta(
    `${MARKE} | Studentische Unternehmensberatung Wiesbaden`,
    `${MARKE} ist die studentische Unternehmensberatung in Wiesbaden. Wir unterstützen Unternehmen bei Digitalisierung, Prozessen, Marktanalysen und Strategie.`
  );
  const s = seiten.start;
  // Texte aus content/texte/start.json – im CMS unter „Texte → Startseite“.
  const t = texte.start;

  return (
    <>
      <Hero
        bild={s.hero_bild}
        alt={s.hero_alt}
        ausschnitt={s.hero_ausschnitt}
        eyebrow={MARKE}
        titel={t.hero.titel}
        lead={t.hero.text}
      >
        <BtnLink to="/unternehmen" className="btn btn--light" withArrow>Leistungen ansehen</BtnLink>
        <BtnLink to="/kontakt" className="btn btn--ghost">Kontakt aufnehmen</BtnLink>
      </Hero>

      {/* ===================== POSITIONIERUNG ===================== */}
      <section className="section" id="positionierung">
        <div className="container">
          <SectionHead titel={t.ueber_uns.titel} lead={t.ueber_uns.text} />
          <div className="pillars" data-stagger="80">
            {t.ueber_uns.punkte.map((p, i) => (
              <div className="pillar reveal" key={i}>
                <h3 className="h3">{p.titel}</h3>
                <p>{p.text}</p>
                {p.link_ziel && p.link_text && <BtnLink to={p.link_ziel} className="textlink">{p.link_text}</BtnLink>}
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
              <h2 className="h2" style={{ color: "#fff" }}>{t.zahlen.titel}</h2>
              <p className="lead" style={{ color: "rgba(255,255,255,.82)", marginTop: 18 }}>{t.zahlen.text}</p>
            </div>
            <div className="stats reveal" style={{ "--d": "120ms" }}>
              {t.zahlen.kennzahlen.map((k, i) => (
                <Stat key={i} zahl={Number(k.zahl) || 0} suffix={k.zusatz || ""} label={k.beschriftung} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== WERTE ===================== */}
      <section className="section bg-paper-2" id="values">
        <div className="container">
          <div className="split split--reverse split--top">
            <div className="split__media js-parallax reveal">
              <img src={s.werte_bild} alt={s.werte_alt} loading="lazy" />
            </div>
            <div className="split__body">
              <div className="reveal">
                <h2 className="h2">{t.werte.titel}</h2>
                {t.werte.text && <p className="lead">{t.werte.text}</p>}
              </div>
              <dl className="values" data-stagger="70">
                {t.werte.liste.map((w, i) => (
                  <div className="values__row reveal" key={i}>
                    <dt>{w.titel}</dt>
                    <dd>{w.text}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== RESSORTS ===================== */}
      <section className="section" id="departments">
        <div className="container">
          <SectionHead titel={t.ressorts.titel} lead={t.ressorts.text} />
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

      {/* ===================== NETZWERK ===================== */}
      <section className="section bg-paper-2" id="netzwerk">
        <div className="container">
          <div className="split">
            <div className="split__body reveal">
              {t.netzwerk.kicker && <p className="eyebrow">{t.netzwerk.kicker}</p>}
              <h2 className="h2" style={{ marginTop: 10 }}>{t.netzwerk.titel}</h2>
              <p className="lead">{t.netzwerk.text}</p>
              {t.netzwerk.text2 && <p style={{ color: "var(--muted)" }}>{t.netzwerk.text2}</p>}
              <p>
                <a className="textlink" href="https://www.jcnetwork.de" target="_blank" rel="noopener noreferrer">
                  Mehr zum JCNetwork
                </a>
              </p>
            </div>
            <div className="split__media js-parallax reveal" style={{ "--d": "120ms" }}>
              <img src={s.netzwerk_bild} alt={s.netzwerk_alt} loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== GALERIE (CMS) ===================== */}
      {galerieItems.length > 0 && (
        <section className="section" id="galerie">
          <div className="container">
            <SectionHead titel={t.galerie.titel} lead={t.galerie.text} />
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
      <section className="section bg-navy">
        <div className="container">
          <div className="split reveal">
            <div>
              <h2 className="h2" style={{ color: "#fff" }}>{t.kontakt.titel}</h2>
              <p className="lead" style={{ color: "rgba(255,255,255,.82)", marginTop: 16 }}>{t.kontakt.text}</p>
              <p style={{ marginTop: 12 }}>
                <a href={`mailto:${einstellungen.email}`} style={{ color: "#fff", textDecoration: "underline", textUnderlineOffset: 3 }}>
                  {einstellungen.email}
                </a>
              </p>
            </div>
            <div className="btn-row btn-row--end">
              <BtnLink to="/kontakt?anliegen=projekt" className="btn btn--light" withArrow>Projekt anfragen</BtnLink>
              <BtnLink to="/kontakt" className="btn btn--ghost">Kontakt aufnehmen</BtnLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
