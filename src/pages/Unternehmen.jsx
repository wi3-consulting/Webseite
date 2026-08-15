import { seiten } from "../lib/content.js";
import { BtnLink, CtaBand, Hero, IconCard, SectionHead } from "../components/Blocks.jsx";
import { ArrowUpCircle, BookOpen, Bolt, FileLines, Gear, Megaphone, Monitor, BarChart, Sparkle, Users } from "../components/Icons.jsx";
import { usePageMeta } from "../lib/meta.js";

const VORTEILE = [
  { icon: ArrowUpCircle, titel: "Kosteneffizient", text: "Hochwertige Beratung zu fairen studentischen Konditionen." },
  { icon: Sparkle, titel: "Innovativ", text: "Frische Ideen und aktuelle Methoden aus dem Studium." },
  { icon: Bolt, titel: "Schnell", text: "Flexible Teams, kurze Reaktionszeiten, schnelle Umsetzung." },
  { icon: Users, titel: "Auf Augenhöhe", text: "Partnerschaftliche Zusammenarbeit mit direktem Draht." },
];

const LEISTUNGEN = [
  { icon: Monitor, titel: "Digitalisierung", text: "Digitale Weiterentwicklung von Prozessen, Strukturen und Arbeitsabläufen für mehr Effizienz." },
  { icon: Gear, titel: "Prozessoptimierung", text: "Effizientere Abläufe, klare Strukturen und praxisnahe Lösungen für nachhaltige Verbesserungen." },
  { icon: BarChart, titel: "Marktanalyse", text: "Fundierte Markt- und Wettbewerbsanalysen als Grundlage für strategische Entscheidungen." },
  { icon: Megaphone, titel: "Marketing & Strategie", text: "Von Positionierung bis Sichtbarkeit: Strategien gezielt und modern umsetzen." },
  { icon: BookOpen, titel: "Workshops & Schulungen", text: "Interaktive Formate zu digitalen Tools, agilen Methoden und aktuellen Fachthemen." },
  { icon: FileLines, titel: "Konzeptentwicklung", text: "Ausgearbeitete Konzepte und Handlungsempfehlungen für Ihre individuellen Anforderungen." },
];

const ABLAUF = [
  { num: "Schritt 01", titel: "Erstgespräch", text: "Kennenlernen, Anforderungen verstehen und gemeinsam den Projektrahmen definieren." },
  { num: "Schritt 02", titel: "Analyse", text: "Tiefgehende Analyse der Ausgangssituation und Identifikation von Potenzialen." },
  { num: "Schritt 03", titel: "Umsetzung", text: "Erarbeitung konkreter Lösungen und Handlungsempfehlungen durch unser Team." },
  { num: "Schritt 04", titel: "Ergebnis", text: "Präsentation der Ergebnisse und Übergabe aller Unterlagen an Ihr Team." },
];

export default function Unternehmen() {
  usePageMeta(
    "Für Unternehmen – WI3 Consulting",
    "WI3 – Consulting für Unternehmen: Digitalisierung, Prozessoptimierung, Marktanalyse, Strategie, Workshops und Konzeptentwicklung – kosteneffizient und auf Augenhöhe."
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
        titel="Smarte Lösungen"
        titelSoft="— für Ihr Unternehmen."
        lead="Günstig, schnell und innovativ. Arbeiten Sie mit Wiesbadens Zukunftsgestaltern zusammen – aktuelles Hochschulwissen direkt in Ihrem Projekt."
      >
        <BtnLink to="/unternehmen#leistungen" className="btn btn--light" withArrow>Unsere Leistungen</BtnLink>
        <BtnLink to="/#contact" className="btn btn--ghost">Projekt anfragen</BtnLink>
      </Hero>

      {/* ===================== WARUM WI3 ===================== */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split__body reveal">
              <p className="eyebrow">Warum WI3</p>
              <h2 className="h2" style={{ marginTop: 14 }}>Ihr Vorteil durch studentische Beratung</h2>
              <p className="lead" style={{ marginTop: 18 }}>
                Sie stehen vor einer strategischen, digitalen oder organisatorischen Herausforderung?
                WI3 – Consulting bietet Ihnen frische Perspektiven, fundiertes Fachwissen und praxisnahe
                Lösungen – kosteneffizient und auf Augenhöhe.
              </p>
              <p style={{ marginTop: 16, color: "var(--muted)" }}>
                Unsere Berater bringen aktuelles Hochschulwissen direkt in Ihr Projekt ein und arbeiten
                strukturiert, zuverlässig und ergebnisorientiert.
              </p>
            </div>
            <div className="grid grid-2" data-stagger="90">
              {VORTEILE.map((v) => (
                <IconCard key={v.titel} icon={v.icon} titel={v.titel} dark>{v.text}</IconCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== LEISTUNGEN ===================== */}
      <section className="section bg-paper-2" id="leistungen">
        <div className="container">
          <SectionHead
            eyebrow="Leistungen"
            titel="Was wir für Sie tun können"
            lead="Von der ersten Analyse bis zur fertigen Lösung – wir begleiten Sie durch den gesamten Beratungsprozess."
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
            eyebrow="Ablauf"
            titel="So arbeiten wir zusammen"
            lead="Ein klarer, transparenter Prozess – von der ersten Idee bis zum übergebenen Ergebnis."
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
        titel="Bereit für frische Perspektiven?"
        text="Lassen Sie uns gemeinsam herausfinden, wie WI3 – Consulting Ihr Unternehmen unterstützen kann. Unverbindlich und unkompliziert."
        buttonLabel="Jetzt Projekt anfragen"
        buttonTo="/#contact"
      />
    </>
  );
}
