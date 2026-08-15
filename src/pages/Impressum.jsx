import { einstellungen } from "../lib/content.js";
import { usePageMeta } from "../lib/meta.js";

export default function Impressum() {
  usePageMeta(
    "Impressum – WI3 Consulting",
    "Impressum von wi3 consulting e.V. – Studentische Unternehmensberatung Wiesbaden."
  );
  return (
    <section className="section" style={{ paddingTop: "clamp(50px,7vw,90px)" }}>
      <div className="container" style={{ maxWidth: 840 }}>
        <div className="section-head reveal" style={{ marginBottom: 36 }}>
          <p className="eyebrow">Rechtliches</p>
          <h1 className="h2" style={{ marginTop: 14 }}>Impressum</h1>
        </div>

        <div className="prose-block reveal">
          <h2>Angaben gemäß § 5 TMG</h2>
          <p style={{ color: "var(--ink)", fontWeight: 600, marginTop: 14 }}>
            wi3 consulting e.V. – Studentische Unternehmensberatung Wiesbaden
          </p>
          <p>Kurt-Schumacher-Ring 18<br />c/o HS RheinMain Career Center<br />65197 Wiesbaden</p>
        </div>

        <div className="prose-block reveal">
          <h2>Vertretungsberechtigte</h2>
          <p>Anh Thi Le, Simon Liebetanz, Joyce Milleit</p>
        </div>

        <div className="prose-block reveal">
          <h2>Kontakt</h2>
          <p><strong style={{ color: "var(--ink)" }}>E-Mail:</strong> {einstellungen.email}</p>
          <p>
            <strong style={{ color: "var(--ink)" }}>Internet:</strong>{" "}
            <a href="https://www.wi3consulting.de">www.wi3consulting.de</a>
          </p>
        </div>

        <div className="prose-block reveal">
          <h2>Registereintrag</h2>
          <p>Eintragung im Vereinsregister</p>
          <p><strong style={{ color: "var(--ink)" }}>Registernummer:</strong> VR 6947</p>
          <p><strong style={{ color: "var(--ink)" }}>Registergericht:</strong> Wiesbaden</p>
        </div>

        <div className="prose-block reveal">
          <h2>Haftungsausschluss</h2>
          <h3>Haftung für Inhalte</h3>
          <p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Dienstanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Dienstanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
          <h3>Haftung für Links</h3>
          <p>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
          <h3>Urheberrecht</h3>
          <p>Die durch die Seitenbetreiber erstellten bzw. verwendeten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
          <h3>Vereinsrecht</h3>
          <p>
            Dieser Verein wird in Vereinsrecht beraten von den Kooperationsanwälten der Deutschen Anwaltshotline AG:{" "}
            <a href="http://www.deutsche-anwaltshotline.de/recht-auf-ihrer-website/vereinsrecht">www.deutsche-anwaltshotline.de</a>
          </p>
        </div>
      </div>
    </section>
  );
}
