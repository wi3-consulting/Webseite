import { Link } from "react-router-dom";
import { ArrowRight } from "./Icons.jsx";
import { useCountUp } from "../lib/effects.js";
import { useKopfbilderVorladen } from "../lib/prefetch.js";

/* Interner Link mit Pfeil-Icon – die Kombination kommt überall vor. */
export function BtnLink({ to, className, style, children, withArrow = false }) {
  return (
    <Link to={to} className={className} style={style}>
      {children}
      {withArrow && <ArrowRight />}
    </Link>
  );
}

export function Hero({ page = false, bild, alt = "", ausschnitt, eyebrow, titel, titelSoft, lead, sub, children }) {
  // Sobald diese Seite steht, die Kopfbilder der übrigen Seiten im
  // Leerlauf nachladen – der nächste Reiterwechsel kommt dann ohne Warten.
  useKopfbilderVorladen(bild);

  return (
    <section className={"hero" + (page ? " hero--page" : "")} id={page ? undefined : "home"}>
      <div className="hero__media">
        {/* Breite Bildschirme beschneiden das Bild oben und unten. `ausschnitt`
            steuert, welcher Teil sichtbar bleibt – im CMS pro Seite einstellbar. */}
        <img
          src={bild}
          alt={alt}
          fetchPriority="high"
          decoding="async"
          style={ausschnitt ? { objectPosition: ausschnitt } : undefined}
        />
      </div>
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow eyebrow--light">{eyebrow}</p>
          <h1 className="display">{titel}{titelSoft && <span className="soft">{titelSoft}</span>}</h1>
          {lead && <p className="hero__lead">{lead}</p>}
          {sub && <p className="hero__sub">{sub}</p>}
          <div className="btn-row">{children}</div>
        </div>
      </div>
      {!page && <div className="hero__scroll" aria-hidden="true">Scroll <span /></div>}
    </section>
  );
}

export function SectionHead({ eyebrow, titel, lead, style }) {
  return (
    <div className="section-head reveal" style={style}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="h2">{titel}</h2>
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}

export function CtaBand({ bild, alt = "", ausschnitt, titel, text, buttonLabel, buttonTo }) {
  return (
    <section className="cta-band section">
      <div className="cta-band__media">
        {/* Liegt am Seitenende – erst laden, wenn man hinscrollt, damit es
            nicht mit dem Kopfbild um Bandbreite konkurriert. */}
        <img
          src={bild}
          alt={alt}
          loading="lazy"
          decoding="async"
          style={ausschnitt ? { objectPosition: ausschnitt } : undefined}
        />
      </div>
      <div className="container reveal">
        <h2 className="h2">{titel}</h2>
        <p>{text}</p>
        <div className="btn-row">
          <BtnLink to={buttonTo} className="btn btn--gold" withArrow>{buttonLabel}</BtnLink>
        </div>
      </div>
    </section>
  );
}

/* Karte mit Icon, Überschrift und Text – Grundbaustein der Rasterabschnitte. */
export function IconCard({ icon: Icon, titel, children, dark = false }) {
  const cardStyle = dark ? { background: "var(--navy)", color: "#fff", borderColor: "transparent" } : undefined;
  const iconStyle = dark ? { background: "rgba(255,255,255,.12)", color: "#fff" } : undefined;
  return (
    <article className="card reveal" style={cardStyle}>
      <div className="card__icon" style={iconStyle}><Icon /></div>
      <h3 className="h3" style={dark ? { color: "#fff" } : undefined}>{titel}</h3>
      <p style={dark ? { color: "rgba(255,255,255,.78)" } : undefined}>{children}</p>
    </article>
  );
}

export function Stat({ zahl, suffix = "", label }) {
  const [ref, value] = useCountUp(zahl);
  return (
    <div className="stat">
      <div className="stat__num" ref={ref}>{value}<span className="suffix">{suffix}</span></div>
      <div className="stat__label">{label}</div>
    </div>
  );
}
