/* ============================================================
   WI3 – CMS Renderer
   Lädt die im CMS gepflegten Inhalte (content/*.json) und baut
   damit Galerie, Team und Ressorts auf. Schlägt das Laden fehl
   (z. B. beim Öffnen per Doppelklick ohne Server), bleibt der
   statische Fallback im HTML stehen – die Seite ist nie leer.
   ============================================================ */
(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* Reveal-Animation für dynamisch eingefügte Elemente */
  function revealIn(container, step) {
    var items = container.querySelectorAll(".reveal");
    Array.prototype.forEach.call(items, function (el, i) {
      el.style.setProperty("--d", (i * (step || 80)) + "ms");
    });
    if (reduce || !("IntersectionObserver" in window)) {
      Array.prototype.forEach.call(items, function (el) { el.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
    Array.prototype.forEach.call(items, function (el) { io.observe(el); });
  }

  function load(url) {
    return fetch(url, { cache: "no-cache" }).then(function (r) {
      if (!r.ok) throw new Error(r.status);
      return r.json();
    });
  }

  /* ---------------- Galerie ---------------- */
  function renderGalerie(data) {
    var grid = document.getElementById("galerie-grid");
    if (!grid) return;
    var items = (data && data.items) || [];
    var section = document.getElementById("galerie");
    if (!items.length) { if (section) section.style.display = "none"; return; }
    grid.innerHTML = items.map(function (it) {
      var alt = esc(it.alt || it.beschreibung || "");
      return '' +
        '<figure class="gallery-card reveal">' +
          '<div class="gallery-card__media"><img src="' + esc(it.bild) + '" alt="' + alt + '" loading="lazy" /></div>' +
          (it.beschreibung ? '<figcaption>' + esc(it.beschreibung) + '</figcaption>' : '') +
        '</figure>';
    }).join("");
    revealIn(grid, 80);
  }

  /* ---------------- Team ---------------- */
  function renderTeam(data) {
    var grid = document.getElementById("team-grid");
    if (!grid) return;
    var items = (data && data.items) || [];
    if (!items.length) return;
    grid.innerHTML = items.map(function (it) {
      var pos = it.bildausschnitt ? ' style="object-position:' + esc(it.bildausschnitt) + ';"' : '';
      return '' +
        '<article class="team-card reveal">' +
          '<div class="team-card__media"><img src="' + esc(it.bild) + '" alt="' + esc(it.name) + ' – ' + esc(it.rolle) + '"' + pos + ' /></div>' +
          '<div class="team-card__body">' +
            '<p class="team-card__role">' + esc(it.rolle) + '</p>' +
            '<h3 class="h3">' + esc(it.name) + '</h3>' +
            '<p>' + esc(it.beschreibung) + '</p>' +
          '</div>' +
        '</article>';
    }).join("");
    revealIn(grid, 100);
  }

  /* ---------------- Ressorts ---------------- */
  var RESSORT_ICONS = [
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14h2"/><path d="m3 3 7.07 7.07"/><path d="M6.905 12.51a3 3 0 0 0-.88.88 1 1 0 1 0 3 3l.88-.88"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 18-5v12L3 13v-2z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="m9 16 2 2 4-4"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>'
  ];
  var CAL_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>';

  function renderRessorts(data) {
    var grid = document.getElementById("ressorts-grid");
    if (!grid) return;
    var items = (data && data.items) || [];
    if (!items.length) return;
    var ctaCard = grid.querySelector(".ressort-cta");
    var html = items.map(function (it, i) {
      var icon = RESSORT_ICONS[i % RESSORT_ICONS.length];
      var foot = it.datum ? '<div class="feature-card__foot">' + CAL_ICON + esc(it.datum) + '</div>' : '';
      return '' +
        '<article class="feature-card reveal">' +
          '<div class="feature-card__media"><img src="' + esc(it.bild) + '" alt="' + esc(it.titel) + '" loading="lazy" /></div>' +
          '<div class="feature-card__body">' +
            '<div class="card__icon">' + icon + '</div>' +
            '<h3 class="h3">' + esc(it.titel) + '</h3>' +
            '<p>' + esc(it.beschreibung) + '</p>' +
          '</div>' + foot +
        '</article>';
    }).join("");
    grid.innerHTML = html + (ctaCard ? ctaCard.outerHTML : "");
    revealIn(grid, 90);
  }

  /* ---------------- Start ---------------- */
  if (document.getElementById("galerie-grid")) {
    load("content/galerie.json").then(renderGalerie).catch(function () {/* Fallback bleibt */});
  }
  if (document.getElementById("team-grid")) {
    load("content/team.json").then(renderTeam).catch(function () {/* Fallback bleibt */});
  }
  if (document.getElementById("ressorts-grid")) {
    load("content/ressorts.json").then(renderRessorts).catch(function () {/* Fallback bleibt */});
  }
})();
