import { einstellungen, texte } from "../lib/content.js";
import { MARKE, usePageMeta } from "../lib/meta.js";

export default function Impressum() {
  usePageMeta(
    `Impressum | ${MARKE}`,
    "Impressum von wi3 consulting e.V., Studentische Unternehmensberatung Wiesbaden."
  );
  // Angaben aus content/texte/impressum.json – im CMS unter „Texte → Impressum“.
  // Der rechtliche Standardtext (Haftung, Urheberrecht) bleibt bewusst im Code.
  const t = texte.impressum;
  const internetUrl = /^https?:\/\//.test(t.internet) ? t.internet : `https://${t.internet}`;

  return (
    <section className="section" style={{ paddingTop: "clamp(50px,7vw,90px)" }}>
      <div className="container" style={{ maxWidth: 840 }}>
        <div className="section-head reveal" style={{ marginBottom: 28 }}>
          <h1 className="h2">Impressum</h1>
        </div>

        <div className="prose-block reveal">
          <h2>Angaben gemäß § 5 TMG</h2>
          <p style={{ color: "var(--ink)", fontWeight: 600, marginTop: 14 }}>{t.verein}</p>
          <p style={{ whiteSpace: "pre-line" }}>{t.anschrift}</p>
        </div>

        <div className="prose-block reveal">
          <h2>Vertretungsberechtigte</h2>
          <p>{t.vertretungsberechtigte}</p>
        </div>

        <div className="prose-block reveal">
          <h2>Kontakt</h2>
          <p><strong style={{ color: "var(--ink)" }}>E-Mail:</strong> {einstellungen.email}</p>
          <p>
            <strong style={{ color: "var(--ink)" }}>Internet:</strong>{" "}
            <a href={internetUrl}>{t.internet}</a>
          </p>
        </div>

        <div className="prose-block reveal">
          <h2>Registereintrag</h2>
          <p>Eintragung im Vereinsregister</p>
          <p><strong style={{ color: "var(--ink)" }}>Registernummer:</strong> {t.registernummer}</p>
          <p><strong style={{ color: "var(--ink)" }}>Registergericht:</strong> {t.registergericht}</p>
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
