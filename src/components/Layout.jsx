import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { einstellungen, NAV_LINKS, KONTAKT_LINK } from "../lib/content.js";
import { useReveal, useScrollEffects } from "../lib/effects.js";
import { Burger, Close } from "./Icons.jsx";

function Nav({ onOpenMenu }) {
  return (
    <header className="nav">
      <div className="nav__inner">
        <Link to="/" className="brand" aria-label={`${einstellungen.marke}, Startseite`}>
          <img src={einstellungen.logo} alt={einstellungen.logo_alt} />
          <span><span className="brand__name">{einstellungen.marke}</span></span>
        </Link>
        <nav className="nav__links" aria-label="Hauptnavigation">
          {/* NavLink setzt aria-current="page" selbst – styles.css hängt genau daran. */}
          {NAV_LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"}>{l.label}</NavLink>
          ))}
        </nav>
        <div className="nav__cta">
          <Link to={KONTAKT_LINK} className="btn btn--primary">Kontakt aufnehmen</Link>
          <button className="nav__burger" aria-label="Menü öffnen" aria-expanded="false" onClick={onOpenMenu}>
            <Burger />
          </button>
        </div>
      </div>
    </header>
  );
}

function MobileMenu({ open, onClose }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div className={"mobile-menu" + (open ? " open" : "")} id="mobileMenu">
      <button className="mobile-menu__close" aria-label="Menü schließen" onClick={onClose}>
        <Close />
      </button>
      {NAV_LINKS.map((l) => (
        <Link key={l.to} to={l.to} onClick={onClose}>{l.label}</Link>
      ))}
      <Link to={KONTAKT_LINK} onClick={onClose}>Kontakt</Link>
    </div>
  );
}

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__top">
            <div className="footer__brand">
              <Link to="/" className="brand">
                <span><span className="brand__name">{einstellungen.marke}</span></span>
              </Link>
              <p>{einstellungen.footer_text}</p>
            </div>
            <div className="footer__col">
              <h4>Navigation</h4>
              {NAV_LINKS.filter((l) => l.to !== "/").map((l) => (
                <Link key={l.to} to={l.to}>{l.label}</Link>
              ))}
              <Link to={KONTAKT_LINK}>Kontakt</Link>
            </div>
            <div className="footer__col">
              <h4>Kontakt</h4>
              <p>{einstellungen.adresse}</p>
              <a href={`mailto:${einstellungen.email}`}>{einstellungen.email}</a>
              <p>{einstellungen.oeffnungszeiten}</p>
            </div>
          </div>
          <div className="footer__bottom">
            <p>© 2026 {einstellungen.marke}</p>
            <div><Link to="/impressum">Impressum</Link></div>
          </div>
        </div>
      </footer>
      <div className="footer__note">
        Hinweis: Diese Website wurde mit Unterstützung von Künstlicher Intelligenz erstellt.
      </div>
    </>
  );
}

function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let stored = null;
    try { stored = localStorage.getItem("cookieConsent"); } catch { stored = null; }
    if (stored) return;
    const t = setTimeout(() => setShow(true), 800);
    return () => clearTimeout(t);
  }, []);

  function accept(value) {
    try { localStorage.setItem("cookieConsent", value); } catch { /* Speicher gesperrt – Banner trotzdem schließen */ }
    setShow(false);
  }

  return (
    <div className={"cookie" + (show ? " show" : "")} role="dialog" aria-label="Cookie-Einstellungen">
      <div className="cookie__inner">
        <div className="cookie__text">
          <b>Cookie-Einstellungen</b>
          <p>
            Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.
            Weitere Informationen finden Sie in unserer <Link to="/impressum">Datenschutzerklärung</Link>.
          </p>
        </div>
        <div className="cookie__actions">
          <button className="btn btn--outline" onClick={() => accept("essential")}>Nur notwendige</button>
          <button className="btn btn--primary" onClick={() => accept("all")}>Alle akzeptieren</button>
        </div>
      </div>
    </div>
  );
}

/* Setzt die Scrollposition beim Seitenwechsel und springt zu #anker.
   Hängt an `key`, nicht an der Adresse: Ein erneuter Klick auf denselben
   Link erzeugt einen neuen key, die Adresse bleibt aber gleich – sonst
   würde der zweite Klick nichts tun. */
function ScrollManager() {
  const { pathname, hash, key } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    // Alte Links auf das frühere Formular der Startseite weiterleiten.
    if (pathname === "/" && hash === "#contact") {
      navigate(KONTAKT_LINK, { replace: true });
      return;
    }
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash, key, navigate]);
  return null;
}

export default function Layout() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useScrollEffects(pathname);
  useReveal(pathname);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <Nav onOpenMenu={() => setMenuOpen(true)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <ScrollManager />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
