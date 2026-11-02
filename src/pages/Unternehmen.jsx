import { seiten } from "../lib/content.js";
import { BtnLink, CtaBand, Hero, IconCard, SectionHead } from "../components/Blocks.jsx";
import { ArrowUpCircle, BookOpen, Bolt, FileLines, Gear, Megaphone, Monitor, BarChart, Sparkle, Users } from "../components/Icons.jsx";
import { MARKE, usePageMeta } from "../lib/meta.js";

const VORTEILE = [
  { icon: ArrowUpCircle, titel: "Faire Konditionen", text: "Fundierte Beratung zu Konditionen, die auch für kleinere Unternehmen tragbar sind." },
  { icon: Sparkle, titel: "Aktuelle Methoden", text: "Unsere Teams arbeiten mit Methoden und Werkzeugen, die sie im Studium gerade anwenden." },
  { icon: Bolt, titel: "Kurze Wege", text: "Flexible Teams und feste Ansprechpartner sorgen für schnelle Abstimmung." },
  { icon: Users, titel: "Partnerschaftlich", text: "Wir arbeiten eng mit Ihren Mitarbeitenden zusammen – nicht an ihnen vorbei." },
];

const LEISTUNGEN = [
  { icon: Monitor, titel: "Digitalisierung", text: "Prozesse, Strukturen und Arbeitsabläufe digital weiterentwickeln." },
  { icon: Gear, titel: "Prozessoptimierung", text: "Abläufe analysieren, Schwachstellen erkennen und Verbesserungen umsetzen." },
  { icon: BarChart, titel: "Marktanalyse", text: "Markt- und Wettbewerbsanalysen als Grundlage für strategische Entscheidungen." },
  { icon: Megaphone, titel: "Marketing & Strategie", text: "Positionierung schärfen und Maßnahmen für mehr Sichtbarkeit entwickeln." },
  { icon: BookOpen, titel: "Workshops & Schulungen", text: "Formate zu digitalen Werkzeugen, agilen Methoden und weiteren Fachthemen." },
  { icon: FileLines, titel: "Konzeptentwicklung", text: "Ausgearbeitete Konzepte und Handlungsempfehlungen für Ihre Fragestellung." },
];

const ABLAUF = [
  { num: "Schritt 1", titel: "Erstgespräch", text: "Wir lernen uns kennen, klären die Fragestellung und legen den Projektrahmen fest." },
  { num: "Schritt 2", titel: "Analyse", text: "Wir analysieren die Ausgangslage und identifizieren Handlungsfelder." },
  { num: "Schritt 3", titel: "Erarbeitung", text: "Das Projektteam entwickelt konkrete Lösungen und stimmt sie mit Ihnen ab." },
  { num: "Schritt 4", titel: "Übergabe", text: "Wir präsentieren die Ergebnisse und übergeben alle Unterlagen." },
];

export default function Unternehmen() {
  usePageMeta(
    `Für Unternehmen | ${MARKE}`,
    `${MARKE} für Unternehmen: Digitalisierung, Prozessoptimierung, Marktanalyse, Strategie, Workshops und Konzeptentwicklung aus Wiesbaden.`
  );
  const s = seiten.unternehmen;

  return (
    <>
      <Hero
        page
        bild={s.hero_bild}
        alt={s.hero_alt}
        ausschnitt={s.hero_ausschnitt}
        eyebrow="Für Unternehmen"
        titel="Beratung mit frischem Blick"
        lead="Wir unterstützen Sie bei strategischen, digitalen und organisatorischen Fragestellungen – strukturiert, verlässlich und zu fairen Konditionen."
      >
        <BtnLink to="/unternehmen#leistungen" className="btn btn--light" withArrow>Unsere Leistungen</BtnLink>
        <BtnLink to="/kontakt?anliegen=projekt" className="btn btn--ghost">Projekt anfragen</BtnLink>
      </Hero>

      {/* ===================== WARUM STUDENTISCHE BERATUNG ===================== */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split__body reveal">
              <h2 className="h2">Warum studentische Beratung?</h2>
              <p className="lead">
                Unsere Berater bringen aktuelles Wissen aus dem Studium direkt in Ihr Projekt ein. Sie erhalten
                eine unvoreingenommene Außensicht und ausgearbeitete Ergebnisse, mit denen Sie weiterarbeiten können.
              </p>
            </div>
            <div className="grid grid-2" data-stagger="90">
              {VORTEILE.map((v) => (
                <IconCard key={v.titel} icon={v.icon} titel={v.titel}>{v.text}</IconCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== LEISTUNGEN ===================== */}
      <section className="section bg-paper-2" id="leistungen">
        <div className="container">
          <SectionHead
            titel="Leistungen"
            lead="Von der ersten Analyse bis zum fertigen Konzept begleiten wir Sie durch das gesamte Projekt."
          />
          <div className="grid grid-3" data-stagger="80">
            {LEISTUNGEN.map((l) => (
              <IconCard key={l.titel} icon={l.icon} titel={l.titel}>{l.text}</IconCard>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== ABLAUF ===================== */}
      <section className="section">
        <div className="container">
          <SectionHead
            titel="Projektablauf"
            lead="Ein klarer Prozess mit festen Abstimmungspunkten."
          />
          <div className="process" data-stagger="100">
            {ABLAUF.map((a) => (
              <div className="process__step reveal" key={a.num}>
                <span className="process__num">{a.num}</span>
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
        titel="Sprechen Sie uns an"
        text={`In einem unverbindlichen Erstgespräch klären wir, wie ${MARKE} Sie unterstützen kann.`}
        buttonLabel="Projekt anfragen"
        buttonTo="/kontakt?anliegen=projekt"
      />
    </>
  );
}
