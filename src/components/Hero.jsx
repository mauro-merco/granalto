import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { IMG } from "../lib/images";
import { SITE } from "../lib/config";
import { prefersReducedMotion } from "../lib/anim";
import { ArrowIcon } from "./ui";

export default function Hero({ onCta }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      if (prefersReducedMotion()) return;
      gsap.set("[data-hero]", { y: 40, opacity: 0 });
      tl.to(".hero-bg img", {
        scale: 1,
        duration: 2.2,
        ease: "power2.out",
      })
        .to("[data-hero]", { y: 0, opacity: 1, duration: 1.1, stagger: 0.12 }, "-=1.4")
        .fromTo(
          ".hero-orb",
          { scale: 0.6, opacity: 0 },
          { scale: 1, opacity: 0.7, duration: 2, ease: "power2.out", stagger: 0.2 },
          "-=1"
        );
    }, ref);
    return () => ctx.revert();
  }, []);

  const meta = [
    { b: "Las Mercedes", s: "Asunción · Paraguay" },
    { b: "2 & 3", s: "habitaciones" },
    { b: "Amenities", s: "a disfrutar todos los días" },
    { b: "En obra", s: "proyecto en desarrollo" },
  ];

  return (
    <section id="inicio" className="hero" ref={ref}>
      <div className="hero-bg">
        <img src={IMG.hero} alt="Proyecto residencial Gran Alto en Las Mercedes" />
      </div>
      <div className="hero-veil" />
      <span className="hero-orb hero-orb-1" />
      <span className="hero-orb hero-orb-2" />

      <div className="hero-inner">
        <span className="hero-tag" data-hero>
          Gran Alto · Las Mercedes
        </span>

        <h1 className="hero-title" data-hero>
          Tu nuevo hogar
          <span className="serif-i">en Las Mercedes</span>
        </h1>

        <p className="hero-sub" data-hero>
          Departamentos pensados para disfrutar la amplitud, la calidez y la vida
          de uno de los barrios con mayor identidad de Asunción.
        </p>

        <div className="hero-actions" data-hero>
          <button className="btn btn-primary" onClick={onCta}>
            Quiero recibir información <ArrowIcon />
          </button>
          <a className="btn btn-ghost" href="#proyecto">
            Conocer el proyecto
          </a>
        </div>

        <div className="hero-meta" data-hero>
          {meta.map((m) => (
            <div className="hero-meta-item" key={m.s}>
              <b>{m.b}</b>
              <span>{m.s}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rotate-badge" data-hero>
        <svg viewBox="0 0 200 200" width="130" height="130">
          <defs>
            <path id="circlePath" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
          </defs>
          <text fill="rgba(255,248,230,0.85)" fontSize="13.5" letterSpacing="4">
            <textPath href="#circlePath">
              GRAN ALTO • LAS MERCEDES • ASUNCIÓN •
            </textPath>
          </text>
        </svg>
        <span className="center">↓</span>
      </div>

      <a className="hero-scroll" href="#proyecto">
        Deslizá
        <span className="line" />
      </a>
    </section>
  );
}
