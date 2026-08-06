import { useLayoutEffect, useRef } from "react";
import { IMG } from "../lib/images";
import { countUp } from "../lib/anim";
import { Eyebrow, Reveal, ArrowIcon } from "./ui";

const ARGS = [
  { idx: "01", label: "Ubicación en un barrio consolidado" },
  { idx: "02", label: "Proyecto con avance comprobable" },
  { idx: "03", label: "Diferentes tipologías para cada perfil" },
  { idx: "04", label: "Calidad arquitectónica y constructiva" },
  { idx: "05", label: "Potencial de valorización" },
];

export default function Inversores({ onCta }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const counts = ref.current.querySelectorAll("[data-count]");
    const killers = Array.from(counts).map((el) =>
      countUp(el, Number(el.dataset.count), {})
    );
    return () => killers.forEach((k) => k && k());
  }, []);

  const stats = [
    { end: 6, suffix: "", label: "Barrios contiguos de identidad" },
    { end: 90, suffix: "%", label: "Unidades con vista al verde" },
    { end: 2, suffix: " min", label: "Del corazón de Las Mercedes" },
    { end: 24, suffix: "/7", label: "Seguridad y vigilancia" },
  ];

  return (
    <section id="inversores" className="section inversores" ref={ref}>
      <div className="inversores-bg">
        <img src={IMG.city} alt="Vista de Asunción desde Las Mercedes" loading="lazy" />
      </div>
      <div className="inversores-veil" />

      <div className="container inversores-inner">
        <div>
          <Reveal>
            <Eyebrow>Para inversores</Eyebrow>
          </Reveal>
          <h2 className="display" style={{ marginTop: "1.1rem" }}>
            Una oportunidad <span className="serif-i">en Las Mercedes</span>
          </h2>
          <Reveal delay={100}>
            <p className="lead" style={{ marginTop: "1.5rem" }}>
              Invertí en un proyecto con ubicación, identidad y una propuesta
              residencial pensada para <strong>sostener valor en el tiempo</strong>.
            </p>
          </Reveal>
          <Reveal className="inv-stats" delay={150}>
            {stats.map((s) => (
              <div className="inv-stat" key={s.label}>
                <b>
                  <span data-count={s.end}>0</span>
                  {s.suffix}
                </b>
                <span>{s.label}</span>
              </div>
            ))}
          </Reveal>
        </div>

        <div>
          <Reveal className="inv-list">
            {ARGS.map((a) => (
              <div className="inv-item" key={a.idx}>
                <span className="idx">{a.idx}</span>
                <span>{a.label}</span>
              </div>
            ))}
          </Reveal>
          <Reveal style={{ marginTop: "2.2rem" }} delay={120}>
            <button className="btn btn-primary" onClick={() => onCta({ interest: "Invertir" })}>
              Quiero recibir información para invertir <ArrowIcon />
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
