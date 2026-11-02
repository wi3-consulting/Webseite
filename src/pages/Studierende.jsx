import { seiten, ressortItems } from "../lib/content.js";
import { BtnLink, CtaBand, Hero, IconCard, SectionHead } from "../components/Blocks.jsx";
import { ArrowUpCircle, BookOpen, CalendarCheck, FileSimple, Medal, Users } from "../components/Icons.jsx";
import { MARKE, usePageMeta } from "../lib/meta.js";

const VORTEILE = [
  { icon: FileSimple, titel: "Echte Projekte", text: "Du arbeitest an Beratungsprojekten für Unternehmen aus der Region." },
  { icon: Users, titel: "Netzwerk", text: "Kontakte zu Unternehmen, Alumni und anderen studentischen Beratungen – auch bundesweit über das JCNetwork." },
  { icon: Medal, titel: "Persönliche Entwicklung", text: "Präsentieren, Moderieren, Führen – Fähigkeiten, die im Hörsaal zu kurz kommen." },
  { icon: BookOpen, titel: "Workshops & Schulungen", text: "Lean & Earn Schulungstage, interne Workshops und praxisnahe Weiterbildungen." },
  { icon: ArrowUpCircle, titel: "Berufserfahrung", text: "Beratungserfahrung schon während des Studiums – ein klarer Pluspunkt im Lebenslauf." },
  { icon: CalendarCheck, titel: "Gemeinschaft", text: "Teamabende, gemeinsame Events und ein Team, das sich gegenseitig unterstützt." },
];

export default function Studierende() {
  usePageMeta(
    `Für Studierende | ${MARKE}`,
    `Mitglied werden bei ${MARKE}: Beratungsprojekte, Netzwerk, Workshops und Berufserfahrung schon während des Studiums.`
  );
  const s = seiten.studierende;

  return (
    <>
      <Hero
        page
        bild={s.hero_bild}
        alt={s.hero_alt}
        ausschnitt={s.hero_ausschnitt}
        eyebrow="Für Studierende"
        titel="Praxiserfahrung neben dem Studium"
        lead="Bei uns bearbeitest du echte Projekte, übernimmst Verantwortung im Verein und lernst Unternehmen aus der Region kennen."
      >
        <BtnLink to="/studierende#vorteile" className="btn btn--light" withArrow>Was dich erwartet</BtnLink>
        <BtnLink to="/kontakt?anliegen=bewerbung" className="btn btn--ghost">Bewerben</BtnLink>
      </Hero>

      {/* ===================== WAS DICH ERWARTET ===================== */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split__body reveal">
              <h2 className="h2">Mitarbeit bei {MARKE}</h2>
              <p className="lead">
                Als Mitglied bearbeitest du schon während des Studiums Beratungsprojekte, übernimmst
                Verantwortung und entwickelst dich fachlich wie persönlich weiter.
              </p>
              <p style={{ color: "var(--muted)" }}>
                Du arbeitest in Teams mit Studierenden anderer Fachrichtungen und sammelst Erfahrung,
                die dir beim Berufseinstieg hilft.
              </p>
            </div>
            <div className="reveal" style={{ "--d": "120ms" }}>
              <div className="card card--rule" style={{ padding: 34 }}>
                <h3 className="h3">Theorie trifft Praxis</h3>
                <p>
                  Was du im Studium lernst, wendest du bei uns direkt an – mit echten Kunden, Deadlines
                  und Ergebnissen.
                </p>
                <div className="grid grid-2" style={{ marginTop: 22, gap: 12 }}>
                  <div style={{ background: "var(--paper-2)", borderRadius: "var(--radius)", padding: 16 }}>
                    <p style={{ fontSize: ".82rem", color: "var(--muted)", marginTop: 0 }}>Projekte</p>
                    <p style={{ fontWeight: 600, color: "var(--navy)", marginTop: 4 }}>mit Unternehmen</p>
                  </div>
                  <div style={{ background: "var(--paper-2)", borderRadius: "var(--radius)", padding: 16 }}>
                    <p style={{ fontSize: ".82rem", color: "var(--muted)", marginTop: 0 }}>Erfahrung</p>
                    <p style={{ fontWeight: 600, color: "var(--navy)", marginTop: 4 }}>ab dem ersten Tag</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== VORTEILE ===================== */}
      <section className="section bg-paper-2" id="vorteile">
        <div className="container">
          <SectionHead
            titel="Was dich erwartet"
            lead={`Gründe, Mitglied bei ${MARKE} zu werden.`}
          />
          <div className="grid grid-3" data-stagger="80">
            {VORTEILE.map((v) => (
              <IconCard key={v.titel} icon={v.icon} titel={v.titel}>{v.text}</IconCard>
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
              <p className="eyebrow">Unterwegs mit dem Team</p>
              <h2 className="h2" style={{ marginTop: 10 }}>JCNetwork Days</h2>
              <p className="lead">
                Zweimal im Jahr treffen sich die Mitglieder des JCNetwork, des Dachverbands studentischer
                Unternehmensberatungen, zu den JCNetwork Days – einem mehrtägigen Kongress in wechselnden
                Städten.
              </p>
              <p style={{ color: "var(--muted)" }}>
                Auf dem Programm stehen Workshops und Schulungen, Vorträge von Unternehmen und viel Austausch
                mit Studierenden anderer Beratungen. Wir fahren als Team mit – für dich eine gute Gelegenheit,
                Kontakte zu Unternehmen zu knüpfen und das Netzwerk kennenzulernen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== RESSORTS ÜBERBLICK ===================== */}
      <section className="section bg-paper-2">
        <div className="container">
          <SectionHead
            titel="Ressorts"
            lead="Je nach Interesse und Stärken engagierst du dich in einem unserer Ressorts."
          />
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
        titel="Werde Mitglied"
        text="Schreib uns kurz, wer du bist und was du studierst – wir melden uns bei dir."
        buttonLabel="Bewerben"
        buttonTo="/kontakt?anliegen=bewerbung"
      />
    </>
  );
}
