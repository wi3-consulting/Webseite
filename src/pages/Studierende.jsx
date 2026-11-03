import { seiten, texte, ressortItems } from "../lib/content.js";
import { BtnLink, CtaBand, Hero, IconCard, SectionHead } from "../components/Blocks.jsx";
import { symbol } from "../components/Icons.jsx";
import { MARKE, usePageMeta } from "../lib/meta.js";

export default function Studierende() {
  usePageMeta(
    `Für Studierende | ${MARKE}`,
    `Mitglied werden bei ${MARKE}: Beratungsprojekte, Netzwerk, Workshops und Berufserfahrung schon während des Studiums.`
  );
  const s = seiten.studierende;
  // Texte aus content/texte/studierende.json – im CMS unter „Texte → Für Studierende“.
  const t = texte.studierende;
  const m = t.mitarbeit;

  return (
    <>
      <Hero
        page
        bild={s.hero_bild}
        alt={s.hero_alt}
        ausschnitt={s.hero_ausschnitt}
        eyebrow="Für Studierende"
        titel={t.hero.titel}
        lead={t.hero.text}
      >
        <BtnLink to="/studierende#vorteile" className="btn btn--light" withArrow>Was dich erwartet</BtnLink>
        <BtnLink to="/kontakt?anliegen=bewerbung" className="btn btn--ghost">Bewerben</BtnLink>
      </Hero>

      {/* ===================== MITARBEIT ===================== */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split__body reveal">
              <h2 className="h2">{m.titel}</h2>
              <p className="lead">{m.text}</p>
              {m.text2 && <p style={{ color: "var(--muted)" }}>{m.text2}</p>}
            </div>
            <div className="reveal" style={{ "--d": "120ms" }}>
              <div className="card" style={{ padding: 34 }}>
                <h3 className="h3">{m.karte_titel}</h3>
                <p>{m.karte_text}</p>
                {m.fakten?.length > 0 && (
                  <div className="grid grid-2" style={{ marginTop: 22, gap: 12 }}>
                    {m.fakten.map((f, i) => (
                      <div key={i} style={{ background: "var(--paper-2)", borderRadius: "var(--radius)", padding: 16 }}>
                        <p style={{ fontSize: ".82rem", color: "var(--muted)", marginTop: 0 }}>{f.bezeichnung}</p>
                        <p style={{ fontWeight: 600, color: "var(--navy)", marginTop: 4 }}>{f.wert}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== VORTEILE ===================== */}
      <section className="section bg-paper-2" id="vorteile">
        <div className="container">
          <SectionHead titel={t.vorteile.titel} lead={t.vorteile.text} />
          <div className="grid grid-3" data-stagger="80">
            {t.vorteile.liste.map((v, i) => (
              <IconCard key={i} icon={symbol(v.symbol)} titel={v.titel}>{v.text}</IconCard>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== JCNETWORK DAYS ===================== */}
      <section className="section" id="jcnetwork-days">
        <div className="container">
          <div className="split split--reverse">
            <div className="split__media js-parallax reveal">
              <img src={s.jcn_bild} alt={s.jcn_alt} loading="lazy" />
            </div>
            <div className="split__body reveal" style={{ "--d": "120ms" }}>
              {t.jcnetwork.kicker && <p className="eyebrow">{t.jcnetwork.kicker}</p>}
              <h2 className="h2" style={{ marginTop: 10 }}>{t.jcnetwork.titel}</h2>
              <p className="lead">{t.jcnetwork.text}</p>
              {t.jcnetwork.text2 && <p style={{ color: "var(--muted)" }}>{t.jcnetwork.text2}</p>}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== RESSORTS ÜBERBLICK ===================== */}
      <section className="section bg-paper-2">
        <div className="container">
          <SectionHead titel={t.ressorts.titel} lead={t.ressorts.text} />
          {/* Namen kommen aus content/ressorts.json – gleiche Quelle wie die Ressorts-Seite. */}
          <div className="chips" data-stagger="60">
            {ressortItems.map((r) => <div className="chip reveal" key={r.titel}>{r.titel}</div>)}
          </div>
          <div style={{ marginTop: 32 }} className="reveal">
            <BtnLink to="/ressorts" className="btn btn--outline" withArrow>Ressorts im Detail</BtnLink>
          </div>
        </div>
      </section>

      <CtaBand
        bild={s.cta_bild}
        alt={s.cta_alt}
        ausschnitt={s.cta_ausschnitt}
        titel={t.banner.titel}
        text={t.banner.text}
        buttonLabel="Bewerben"
        buttonTo="/kontakt?anliegen=bewerbung"
      />
    </>
  );
}
