import { useEffect, useRef, useState } from "react";
import { NAV_LINKS, SITE } from "../lib/config";

export default function Header({ onCta }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("is-locked", open);
    return () => document.body.classList.remove("is-locked");
  }, [open]);

  const go = (e, href) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`header${scrolled ? " is-scrolled" : ""}`}>
      <div className="container header-inner">
        <nav className="header-nav" aria-label="Principal">
          {NAV_LINKS.slice(0, 3).map((l) => (
            <a key={l.href} href={l.href} onClick={(e) => go(e, l.href)}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#inicio" className="header-logo" onClick={(e) => go(e, "#inicio")} aria-label="Gran Alto, inicio">
          <img src="./img/logo-white.png" alt="Gran Alto" />
          <span className="header-tagline">Inter - Las Mercedes</span>
        </a>

        <div className="header-cta">
          <nav className="header-nav" aria-label="Secundaria">
            {NAV_LINKS.slice(3).map((l) => (
              <a key={l.href} href={l.href} onClick={(e) => go(e, l.href)}>
                {l.label}
              </a>
            ))}
          </nav>
          <button className="btn btn-primary" onClick={onCta}>
            Solicitar información
          </button>
          <button
            className={`burger${open ? " is-open" : ""}`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu${open ? " is-open" : ""}`}>
        <button className="menu-close" onClick={() => setOpen(false)} aria-label="Cerrar menú">
          ✕
        </button>
        {NAV_LINKS.map((l, i) => (
          <a key={l.href} href={l.href} onClick={(e) => go(e, l.href)} style={{ transitionDelay: `${i * 60}ms` }}>
            {l.label}
          </a>
        ))}
        <button className="btn btn-primary" onClick={onCta}>
          Solicitar información
        </button>
      </div>
    </header>
  );
}
