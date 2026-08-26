import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { prefersReducedMotion } from "../lib/anim";
import { projectImages } from "../lib/images";
import { Eyebrow, Reveal, ArrowIcon } from "./ui";

const TIPOS = [
  {
    id: "tipologia-a",
    tab: "Tipología A",
    name: "Tipología A",
    surface: "107 m²",
    specs: [
      { b: "2", u: "dormitorios" },
      { b: "2", u: "baños" },
      { b: "107", u: "m²" },
    ],
    config: "1 dormitorio en suite y 1 dormitorio con baño compartido.",
    img: projectImages.dptoA,
    ctaText: "Consultar disponibilidad de la Tipología A",
  },
  {
    id: "tipologia-b",
    tab: "Tipología B",
    name: "Tipología B",
    surface: "93 m²",
    specs: [
      { b: "2", u: "dormitorios" },
      { b: "2", u: "baños" },
      { b: "93", u: "m²" },
    ],
    config: "1 dormitorio en suite y 1 dormitorio con baño compartido.",
    img: projectImages.dptoB,
    ctaText: "Consultar disponibilidad de la Tipología B",
  },
  {
    id: "tipologia-c",
    tab: "Tipología C",
    name: "Tipología C",
    surface: "90 m²",
    specs: [
      { b: "2", u: "dormitorios" },
      { b: "2", u: "baños" },
      { b: "90", u: "m²" },
    ],
    config: "1 dormitorio en suite y 1 dormitorio con baño compartido.",
    img: projectImages.dptoC01,
    img2: projectImages.dptoC02,
    ctaText: "Consultar disponibilidad de la Tipología C",
  },
];

export default function Tipologias({ onCta }) {
  const [active, setActive] = useState(0);
  const panelRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const el = panelRef.current;
    if (!el) return;
    gsap.fromTo(
      el,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
    );
  }, [active]);

  const select = (i) => {
    setActive(i);
    window.trackEvent?.({ event: `select_tipologia_${["a", "b", "c"][i]}` });
  };

  const tipo = TIPOS[active];

  return (
    <section id="tipologias" className="section tipologias">
      <div className="container">
        <Reveal className="sec-head" style={{ maxWidth: "720px" }}>
          <Eyebrow>Tipologías</Eyebrow>
          <h2 className="display" style={{ marginTop: "1rem" }}>
            Tres tipologías. <span className="serif-i">Una misma forma</span> de vivir mejor.
          </h2>
          <p className="lead" style={{ marginTop: "1rem" }}>
            Departamentos de 2 dormitorios con distribuciones pensadas para
            aprovechar cada espacio y acompañar distintos modos de vivir.
          </p>
        </Reveal>

        <div className="tipo-tabs" role="tablist" aria-label="Seleccionar tipología">
          {TIPOS.map((t, i) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={i === active}
              aria-controls={`panel-${t.id}`}
              id={`tab-${t.id}`}
              className={`tipo-tab${i === active ? " is-active" : ""}`}
              onClick={() => select(i)}
            >
              {t.tab} — {t.surface}
            </button>
          ))}
        </div>

        <div
          key={tipo.id}
          ref={panelRef}
          id={`panel-${tipo.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${tipo.id}`}
        >
          <div className="tipo-panel">
            <Reveal variant="left" className="tipo-img">
              <div className="media-frame">
                <img
                  src={tipo.img}
                  alt={`Interior de la ${tipo.name}`}
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
              <span className="tipo-badge">{tipo.name}</span>
            </Reveal>

            <div className="tipo-content">
              <div className="tipo-header">
                <h3>{tipo.name}</h3>
                <span className="tipo-surface">{tipo.surface}</span>
              </div>

              <div className="tipo-specs">
                {tipo.specs.map((s) => (
                  <div className="tipo-spec" key={s.u}>
                    <b>{s.b}</b>
                    <span>{s.u}</span>
                  </div>
                ))}
              </div>

              <p className="tipo-config">{tipo.config}</p>

              {tipo.img2 && (
                <div className="tipo-second-img">
                  <div className="media-frame">
                    <img
                      src={tipo.img2}
                      alt={`Segunda vista de la ${tipo.name}`}
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                  </div>
                </div>
              )}

              <div className="tipo-cta-row">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    onCta({ typology: tipo.name, location: "tipologias" });
                    window.trackEvent?.({ event: "cta_tipologias" });
                  }}
                >
                  {tipo.ctaText} <ArrowIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
