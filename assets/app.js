/* ============================================================
   WI3 – Consulting | Scroll & Interaction
   Vanilla JS, keine Abhängigkeiten.
   ============================================================ */
(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Scroll progress bar ---------- */
  var progress = document.querySelector(".progress");
  function onScrollProgress() {
    if (!progress) return;
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    var pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
    progress.style.width = pct + "%";
  }

  /* ---------- Nav scrolled state ---------- */
  var nav = document.querySelector(".nav");
  function onScrollNav() {
    if (!nav) return;
    nav.classList.toggle("is-scrolled", window.scrollY > 12);
  }

  /* ---------- Parallax media (scroll-linked) ----------
     Bilder bewegen sich langsamer als der Scroll und "gehen mit".
     Wirkung wie bei Porsche Consulting: Ebenen mit unterschiedlichem Tempo. */
  var parImgs = [].slice.call(
    document.querySelectorAll(".hero__media img, .cta-band__media img, .js-parallax img")
  );
  function onScrollParallax() {
    if (reduce || !parImgs.length) return;
    var vh = window.innerHeight;
    for (var i = 0; i < parImgs.length; i++) {
      var img = parImgs[i];
      var box = img.parentElement;
      var r = box.getBoundingClientRect();
      if (r.bottom < -120 || r.top > vh + 120) continue; // außerhalb -> überspringen
      // p: 0 = Element betritt unten, 1 = Element verlässt oben
      var p = (vh - r.top) / (vh + r.height);
      if (p < 0) p = 0; else if (p > 1) p = 1;
      var shift = (0.5 - p) * 16; // +8% .. -8% der Bildhöhe
      img.style.transform = "translate3d(0," + shift.toFixed(2) + "%,0)";
    }
  }

  /* ---------- Hero: Inhalt geht mit & blendet aus ---------- */
  var heroContent = document.querySelector(".hero__content");
  function onScrollHero() {
    if (reduce || !heroContent) return;
    var y = window.scrollY;
    var vh = window.innerHeight;
    if (y <= vh) {
      var o = 1 - y / (vh * 0.72);
      heroContent.style.opacity = (o < 0 ? 0 : o).toFixed(3);
      heroContent.style.transform = "translate3d(0," + (y * 0.22).toFixed(1) + "px,0)";
    }
  }

  /* ---------- rAF scroll loop ---------- */
  var ticking = false;
  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        onScrollProgress();
        onScrollNav();
        onScrollParallax();
        onScrollHero();
        ticking = false;
      });
      ticking = true;
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  onScroll();

  /* ---------- Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll(".reveal, .reveal-img");
  if (reduce || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });

    // Auto-stagger items inside a [data-stagger] container
    document.querySelectorAll("[data-stagger]").forEach(function (group) {
      var step = parseInt(group.getAttribute("data-stagger"), 10) || 90;
      Array.prototype.forEach.call(group.children, function (child, i) {
        if (child.classList.contains("reveal") || child.classList.contains("reveal-img")) {
          child.style.setProperty("--d", (i * step) + "ms");
        }
      });
    });

    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Counter animation ---------- */
  var counters = document.querySelectorAll("[data-count]");
  function animateCount(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var suffix = el.getAttribute("data-suffix") || "";
    if (reduce) { el.innerHTML = target + '<span class="suffix">' + suffix + "</span>"; return; }
    var dur = 1500, start = null;
    function tick(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = Math.round(target * eased);
      el.innerHTML = val + '<span class="suffix">' + suffix + "</span>";
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  if (counters.length && "IntersectionObserver" in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { animateCount(e.target); cio.unobserve(e.target); }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { cio.observe(el); });
  } else {
    counters.forEach(function (el) {
      el.innerHTML = el.getAttribute("data-count") + '<span class="suffix">' + (el.getAttribute("data-suffix") || "") + "</span>";
    });
  }

  /* ---------- Mobile menu ---------- */
  var burger = document.querySelector(".nav__burger");
  var menu = document.querySelector(".mobile-menu");
  var closeBtn = document.querySelector(".mobile-menu__close");
  function setMenu(open) {
    if (!menu) return;
    menu.classList.toggle("open", open);
    document.body.style.overflow = open ? "hidden" : "";
    if (burger) burger.setAttribute("aria-expanded", open ? "true" : "false");
  }
  if (burger) burger.addEventListener("click", function () { setMenu(!menu.classList.contains("open")); });
  if (closeBtn) closeBtn.addEventListener("click", function () { setMenu(false); });
  if (menu) menu.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });

  /* ---------- Cookie banner ---------- */
  var cookie = document.querySelector(".cookie");
  if (cookie) {
    try {
      if (!localStorage.getItem("cookieConsent")) {
        setTimeout(function () { cookie.classList.add("show"); }, 800);
      }
    } catch (e) { cookie.classList.add("show"); }
    cookie.querySelectorAll("[data-consent]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        try { localStorage.setItem("cookieConsent", btn.getAttribute("data-consent")); } catch (e) {}
        cookie.classList.remove("show");
      });
    });
  }
})();
