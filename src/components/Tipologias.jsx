import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { IMG } from "../lib/images";
import { prefersReducedMotion } from "../lib/anim";
import { SITE } from "../lib/config";
import { Eyebrow, Reveal, ArrowIcon, WhatsAppIcon } from "./ui";

const TIPOS = [
  {
    id: "un-dorm",
    tab: "1 dormitorio",
    name: "Compacta",
    tagline: "para tu primer gran paso",
    img: IMG.interiorBed,
    specs: [
      { b: "65", u: "m²" },
      { b: "1", u: "habitación" },
      { b: "1", u: "baño" },
    ],
    extras: ["Cochera opcional", "Ascensor", "Acceso a amenities"],
  },
  {
    id: "dos-dorm",
    tab: "2 dormitorios",
    name: "Familiar",
    tagline: "amplitud para crecer",
    img: IMG.interiorLiving,
    specs: [
      { b: "107", u: "m²" },
      { b: "2", u: "habitaciones" },
      { b: "2", u: "baños" },
    ],
    extras: ["Cochera", "Ascensor", "Acceso a amenities", "Balcón"],
  },
  {
    id: "tres-dorm",
    tab: "3 dormitorios",
    name: "Amplia",
    tagline: "espacio para toda la familia",
    img: IMG.interiorLiving2,
    specs: [
      { b: "130", u: "m²" },
      { b: "3", u: "habitaciones" },
      { b: "2", u: "baños" },
    ],
    extras: ["Cochera doble", "Ascensor", "Acceso a amenities", "Terraza"],
  },
];

export default function Tipologias({ onCta }) {
  const [active, setActive] = useState(1);
  const panelRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const el = panelRef.current;
    if (!el) return;
    gsap.fromTo(
      el,
      { opacity: 0, y: 28, filter: "blur(8px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7, ease: "power3.out" }
    );
  }, [active]);

  const select = (i) => {
    setActive(i);
  };

  const tipo = TIPOS[active];
  const waText = `Hola, quiero recibir información sobre la tipología ${tipo.name} de Gran Alto Las Mercedes.`;

  return (
    <section id="departamentos" className="section tipologias">
      <span className="orb orb-blue" style={{ width: "40vw", height: "40vw", top: "-10%", right: "-12%" }} />
      <span className="orb orb-sand" style={{ width: "32vw", height: "32vw", bottom: "-8%", left: "-10%" }} />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <Reveal className="sec-head" style={{ maxWidth: "760px" }}>
          <Eyebrow>Encontrá tu espacio</Eyebrow>
          <h2 className="display" style={{ marginTop: "1.1rem" }}>
            Departamentos para <span className="serif-i">distintas formas</span> de vivir
          </h2>
        </Reveal>

        <Reveal className="tipo-tabs" variant="scale">
          {TIPOS.map((t, i) => (
            <button
              key={t.id}
              className={`tipo-tab${i === active ? " is-active" : ""}`}
              onClick={() => select(i)}
            >
              {t.tab}
            </button>
          ))}
        </Reveal>

        <div key={tipo.id} ref={panelRef}>
          <div className="tipo-panel">
            <Reveal variant="left" className="tipo-img">
              <img src={tipo.img} alt={`Tipología ${tipo.name}`} loading="lazy" />
              <span className="tipo-badge">Tipología {tipo.name}</span>
            </Reveal>

            <div className="glass glass-strong tipo-glass">
              <span className="glass-sheen" />
              <div>
                <p className="eyebrow" style={{ color: "var(--sand-2)" }}>
                  Tipología · {tipo.tab}
                </p>
                <h3 className="tipo-name" style={{ marginTop: "0.8rem" }}>
                  {tipo.name}
                  <span className="serif-i">{tipo.tagline}</span>
                </h3>
              </div>

              <div className="tipo-specs">
                {tipo.specs.map((s) => (
                  <div className="tipo-spec" key={s.u}>
                    <b>{s.b}</b>
                    <span>{s.u}</span>
                  </div>
                ))}
              </div>

              <div className="tipo-plan">
                <span className="plan-icon">⌂</span>
                <div className="plan-copy">
                  <b>Recibí el plano completo</b>
                  <span>Disponible después de completar el formulario.</span>
                </div>
              </div>

              <div className="tipo-cta-row">
                <button
                  className="btn btn-primary"
                  onClick={() => onCta({ typology: tipo.name })}
                >
                  Consultar por esta tipología <ArrowIcon />
                </button>
                <a
                  className="btn btn-ghost"
                  href={SITE.whatsappUrl(waText)}
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhatsAppIcon size={18} /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <Reveal style={{ marginTop: "2.4rem" }}>
          <button className="btn btn-ghost" onClick={() => onCta()}>
            Recibir planos y disponibilidad
          </button>
        </Reveal>
      </div>
    </section>
  );
}
