import { useLayoutEffect, useRef } from "react";
import { IMG } from "../lib/images";
import { countUp, fillBar } from "../lib/anim";
import { Eyebrow, Reveal, LineReveal, ArrowIcon } from "./ui";

export default function Avance({ onCta }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const kill2 = countUp(ref.current.querySelector("[data-count]"), 40, {});
    const bars = ref.current.querySelectorAll(".progress-fill");
    const killers = Array.from(bars).map((b) => fillBar(b));
    return () => {
      kill2 && kill2();
      killers.forEach((k) => k && k());
    };
  }, []);

  return (
    <section id="avance" className="section avance" ref={ref}>
      <div className="container">
        <div className="avance-grid">
          <div className="avance-images">
            <Reveal variant="scale" className="avance-img avance-img--tall">
              <img src={IMG.construction} alt="Avance de obra Gran Alto" loading="lazy" />
            </Reveal>
            <Reveal variant="scale" delay={90} className="avance-img">
              <img src={IMG.construction2} alt="Trabajos en la obra" loading="lazy" />
            </Reveal>
            <Reveal variant="scale" delay={180} className="avance-img">
              <img src={IMG.construction3} alt="Estructura del edificio" loading="lazy" />
            </Reveal>
          </div>

          <div>
            <Reveal>
              <Eyebrow>Avance y confianza</Eyebrow>
            </Reveal>
            <LineReveal as="h2" className="display" style={{ marginTop: "1.1rem", fontSize: "clamp(2.2rem,4.4vw,4.2rem)" }}>
              <span className="line-mask">
                <span>Un proyecto que avanza</span>
              </span>{" "}
              <span className="line-mask">
                <span className="serif-i">con compromiso</span>
              </span>
            </LineReveal>
            <Reveal delay={120}>
              <p className="lead" style={{ marginTop: "1.5rem" }}>
                Gran Alto comenzó a tomar forma <strong>antes de iniciar su
                comercialización</strong>, porque creemos en el valor de hacer,
                avanzar y mostrar.
              </p>
            </Reveal>

            <div className="progress-list">
              <Reveal>
                <div className="progress-item">
                  <div className="row">
                    <span>Ejecución general</span>
                    <span><b data-count>0</b>%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" data-value="40" />
                  </div>
                </div>
              </Reveal>
              <Reveal delay={90}>
                <div className="progress-item">
                  <div className="row">
                    <span>Estructura</span>
                    <span>85%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" data-value="85" />
                  </div>
                </div>
              </Reveal>
              <Reveal delay={160}>
                <div className="progress-item">
                  <div className="row">
                    <span>Terminaciones</span>
                    <span>15%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" data-value="15" />
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={200}>
              <div className="milestone">
                <span className="check">✓</span>
                <span>Estructura del edificio completada · Actualizado en obra</span>
              </div>
            </Reveal>

            <Reveal style={{ marginTop: "2.2rem" }}>
              <button className="btn btn-dark" onClick={onCta}>
                Consultar estado y disponibilidad <ArrowIcon />
              </button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
