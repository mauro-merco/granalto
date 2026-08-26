import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { prefersReducedMotion } from "../lib/anim";
import { Eyebrow, Reveal, ProjectImage, ArrowIcon, ImageModal } from "./ui";

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
    planoSlot: "tipologia-a-plano",
    renderSlot: "tipologia-a-render",
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
    planoSlot: "tipologia-b-plano",
    renderSlot: "tipologia-b-render",
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
    planoSlot: "tipologia-c-plano",
    renderSlot: "tipologia-c-render",
    ctaText: "Consultar disponibilidad de la Tipología C",
  },
];

export default function Tipologias({ onCta }) {
  const [active, setActive] = useState(0);
  const panelRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSlot, setModalSlot] = useState("");

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

  const openModal = (slotId) => {
    setModalSlot(slotId);
    setModalOpen(true);
    window.trackEvent?.({ event: "open_plano_tipologia" });
  };

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
              <ProjectImage
                slotId={tipo.renderSlot}
                alt={`Interior de la ${tipo.name}`}
                aspectRatio="16:9"
                imgStyle={{ objectFit: "cover" }}
              />
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

              <div
                className="planta-img-wrap"
                style={{ cursor: "pointer", marginTop: "0.5rem" }}
                onClick={() => openModal(tipo.planoSlot)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && openModal(tipo.planoSlot)}
                aria-label={`Ampliar plano de la ${tipo.name}`}
              >
                <ProjectImage
                  slotId={tipo.planoSlot}
                  alt={`Plano de la ${tipo.name}`}
                  aspectRatio="Horizontal"
                  imgStyle={{ objectFit: "contain", height: "280px" }}
                />
              </div>

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

      {modalOpen && (
        <ImageModal
          src={null}
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          alt={`Plano ampliado de ${tipo.name}`}
        />
      )}
    </section>
  );
}
