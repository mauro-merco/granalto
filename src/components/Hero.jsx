import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { prefersReducedMotion } from "../lib/anim";
import { ProjectImage, ArrowIcon } from "./ui";

export default function Hero({ onCta }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (prefersReducedMotion()) return;
      gsap.set("[data-hero]", { y: 30, opacity: 0 });
      gsap.to("[data-hero]", {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.2,
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="inicio" className="hero" ref={ref}>
      <div className="hero-bg">
        <ProjectImage
          slotId="hero-edificio-gran-alto"
          alt="Vista aérea o fachada del edificio Gran Alto en Las Mercedes"
          priority
          objectPosition="center 55%"
          imgStyle={{ objectFit: "cover", objectPosition: "center 55%" }}
        />
      </div>
      <div className="hero-veil" />

      <div className="hero-inner">
        <span className="hero-tag" data-hero>
          GRAN ALTO · INTER - LAS MERCEDES
        </span>

        <h1 className="hero-title" data-hero>
          Arquitectura pensada para <span className="serif-i">permanecer.</span>
        </h1>

        <p className="hero-sub" data-hero>
          21 departamentos de 2 dormitorios en Las Mercedes, diseñados para
          mantener su valor, funcionalidad y calidad con el paso del tiempo.
        </p>

        <div className="hero-actions" data-hero>
          <a className="btn btn-primary" href="#tipologias" onClick={(e) => { e.preventDefault(); document.querySelector("#tipologias")?.scrollIntoView({ behavior: "smooth" }); }}>
            Conocé las tipologías <ArrowIcon />
          </a>
          <button className="btn btn-secondary-light" onClick={onCta}>
            Solicitar información
          </button>
        </div>

        <div className="hero-meta" data-hero>
          <div className="hero-meta-item">
            <b>21</b>
            <span>Departamentos</span>
          </div>
          <span className="hero-meta-divider" aria-hidden="true" />
          <div className="hero-meta-item">
            <b>3</b>
            <span>Tipologías</span>
          </div>
          <span className="hero-meta-divider" aria-hidden="true" />
          <div className="hero-meta-item">
            <b>90 a 107 m²</b>
            <span>Superficies</span>
          </div>
          <span className="hero-meta-divider" aria-hidden="true" />
          <div className="hero-meta-item">
            <b>1 nivel</b>
            <span>Amenities</span>
          </div>
        </div>
      </div>
    </section>
  );
}
