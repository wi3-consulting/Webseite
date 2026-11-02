import { seiten, ressortItems } from "../lib/content.js";
import { BtnLink, CtaBand, Hero, IconCard, SectionHead } from "../components/Blocks.jsx";
import { ArrowUpCircle, BookOpen, CalendarCheck, FileSimple, Medal, Users } from "../components/Icons.jsx";
import { usePageMeta } from "../lib/meta.js";

const VORTEILE = [
  { icon: FileSimple, titel: "Echte Projekte", text: "Arbeite an realen Beratungsprojekten mit echten Unternehmen aus der Region." },
  { icon: Users, titel: "Starkes Netzwerk", text: "Knüpfe Kontakte zu Unternehmen, Alumni und anderen engagierten Studierenden." },
  { icon: Medal, titel: "Persönliche Entwicklung", text: "Entwickle Soft Skills, Führungsqualitäten und professionelles Auftreten." },
  { icon: BookOpen, titel: "Workshops & Schulungen", text: "Lean & Earn Schulungstage, interne Workshops und praxisnahe Weiterbildungen." },
  { icon: ArrowUpCircle, titel: "Karriereboost", text: "Hebe dich im Lebenslauf ab – Beratungserfahrung schon während des Studiums." },
  { icon: CalendarCheck, titel: "Events & Teamspirit", text: "Teamevents, gemeinsame Aktivitäten und eine starke Gemeinschaft neben dem Studium." },
];

export default function Studierende() {
  usePageMeta(
    "Für Studierende – wi3 consulting",
    "wi3 consulting für Studierende: echte Beratungsprojekte, starkes Netzwerk, persönliche Entwicklung, Workshops und Karriereboost schon während des Studiums."
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
        titel="Gestalte die Zukunft"
        titelSoft="— mit echtem Impact."
        lead="Bei uns gestaltest du die Zukunft mit echten Projekten, einem starken Team und sichtbarem Impact. Werde Teil von Wiesbadens studentischer Denkfabrik."
      >
        <BtnLink to="/studierende#vorteile" className="btn btn--light" withArrow>Deine Vorteile</BtnLink>
        <BtnLink to="/#contact" className="btn btn--ghost">Jetzt bewerben</BtnLink>
      </Hero>

      {/* ===================== WAS DICH ERWARTET ===================== */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split__body reveal">
              <p className="eyebrow">Deine Chance</p>
              <h2 className="h2" style={{ marginTop: 14 }}>Mehr als nur ein Verein</h2>
              <p className="lead" style={{ marginTop: 18 }}>
                wi3 consulting gibt dir die Möglichkeit, schon während des Studiums echte Beratungsprojekte
                zu bearbeiten, Verantwortung zu übernehmen und dich persönlich sowie fachlich weiterzuentwickeln.
              </p>
              <p style={{ marginTop: 16, color: "var(--muted)" }}>
                Du arbeitest in interdisziplinären Teams, knüpfst wertvolle Kontakte und sammelst
                Praxiserfahrung, die dich von anderen abhebt.
              </p>
            </div>
            <div className="reveal" style={{ "--d": "120ms" }}>
              <div className="card" style={{ padding: 38 }}>
                <div style={{ height: 6, width: 64, borderRadius: 100, background: "var(--accent)" }} />
                <h3 className="h3" style={{ color: "var(--navy)", marginTop: 22 }}>Theorie trifft Praxis</h3>
                <p style={{ marginTop: 14, color: "var(--muted)" }}>
                  Was du im Hörsaal lernst, setzt du bei uns direkt um – mit echten Kunden, echten Deadlines
                  und echten Ergebnissen.
                </p>
                <div className="grid grid-2" style={{ marginTop: 26, gap: 16 }}>
                  <div style={{ background: "var(--paper-2)", borderRadius: 14, padding: 18 }}>
                    <p style={{ fontSize: ".82rem", color: "var(--muted)" }}>Projekte</p>
                    <p style={{ fontWeight: 600, color: "var(--navy)", marginTop: 4 }}>Echte Unternehmen</p>
                  </div>
                  <div style={{ background: "var(--paper-2)", borderRadius: 14, padding: 18 }}>
                    <p style={{ fontSize: ".82rem", color: "var(--muted)" }}>Erfahrung</p>
                    <p style={{ fontWeight: 600, color: "var(--navy)", marginTop: 4 }}>Ab Tag 1</p>
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
            eyebrow="Vorteile"
            titel="Was du bei wi3 bekommst"
            lead="Sechs gute Gründe, Teil unserer studentischen Denkfabrik zu werden."
          />
          <div className="grid grid-3" data-stagger="80">
            {VORTEILE.map((v) => (
              <IconCard key={v.titel} icon={v.icon} titel={v.titel}>{v.text}</IconCard>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== RESSORTS ÜBERBLICK ===================== */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Wo du einsteigen kannst"
            titel="Unsere Ressorts"
            lead="Je nach Interesse und Stärken kannst du in verschiedenen Bereichen aktiv werden."
          />
          {/* Namen kommen aus content/ressorts.json – gleiche Quelle wie die Ressorts-Seite. */}
          <div className={"chips" + (ressortItems.length === 5 ? " chips--5" : "")} data-stagger="60">
            {ressortItems.map((r) => <div className="chip reveal" key={r.titel}>{r.titel}</div>)}
          </div>
          <div style={{ marginTop: 36 }} className="reveal">
            <BtnLink to="/ressorts" className="btn btn--outline" withArrow>Alle Ressorts im Detail</BtnLink>
          </div>
        </div>
      </section>

      <CtaBand
        bild={s.cta_bild}
        alt={s.cta_alt}
        ausschnitt={s.cta_ausschnitt}
        titel="Nicht zuschauen — anpacken!"
        text="Gute Ideen beginnen mit einem Gespräch. Werde Teil von wi3 consulting und gestalte die Zukunft aktiv mit."
        buttonLabel="Jetzt bewerben"
        buttonTo="/#contact"
      />
    </>
  );
}
