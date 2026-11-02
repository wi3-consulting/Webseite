/* ============================================================
   Scroll- und Reveal-Effekte – Portierung des früheren
   assets/app.js auf React-Hooks. Die CSS-Klassen (.reveal, .in,
   .is-scrolled) bleiben unverändert, damit styles.css ohne
   Anpassung weiterläuft.
   ============================================================ */
import { useEffect, useRef, useState } from "react";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/* Nav-Zustand und dezenter Parallax der Bilder.
   `routeKey` sorgt dafür, dass die Elemente nach jedem Seitenwechsel
   neu eingesammelt werden. */
export function useScrollEffects(routeKey) {
  useEffect(() => {
    const reduce = prefersReducedMotion();
    const nav = document.querySelector(".nav");
    const parallaxImgs = Array.from(
      document.querySelectorAll(".hero__media img, .cta-band__media img, .js-parallax img")
    );
    let ticking = false;

    function frame() {
      if (nav) nav.classList.toggle("is-scrolled", window.scrollY > 12);

      if (!reduce) {
        const vh = window.innerHeight;
        for (const img of parallaxImgs) {
          const box = img.parentElement;
          if (!box) continue;
          const r = box.getBoundingClientRect();
          if (r.bottom < -120 || r.top > vh + 120) continue;
          let p = (vh - r.top) / (vh + r.height);
          p = p < 0 ? 0 : p > 1 ? 1 : p;
          img.style.transform = "translate3d(0," + ((0.5 - p) * 10).toFixed(2) + "%,0)";
        }
      }

      ticking = false;
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(frame);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [routeKey]);
}

/* Blendet .reveal-Elemente beim Hereinscrollen ein und verteilt
   die Verzögerung innerhalb von [data-stagger]-Containern. */
export function useReveal(routeKey) {
  useEffect(() => {
    document.querySelectorAll("[data-stagger]").forEach((group) => {
      const step = parseInt(group.getAttribute("data-stagger"), 10) || 90;
      Array.from(group.children).forEach((child, i) => {
        if (child.classList.contains("reveal") || child.classList.contains("reveal-img")) {
          child.style.setProperty("--d", i * step + "ms");
        }
      });
    });

    const els = document.querySelectorAll(".reveal, .reveal-img");
    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [routeKey]);
}

/* Zählt eine Kennzahl hoch, sobald sie sichtbar wird. */
export function useCountUp(target) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      setValue(target);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          io.unobserve(e.target);
          const dur = 1500;
          let start = null;
          const tick = (ts) => {
            if (!start) start = ts;
            const p = Math.min((ts - start) / dur, 1);
            setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return [ref, value];
}
