import { Eyebrow, Reveal, ArrowIcon } from "./ui";

const ARGS = [
  "Ubicación conectada en Las Mercedes.",
  "Un proyecto de escala cuidada, con 21 departamentos.",
  "Tres tipologías de 2 dormitorios.",
  "Superficies de 90 a 107 m².",
  "Amenities definidos para la vida cotidiana.",
];

export default function Inversores({ onCta }) {
  return (
    <section id="inversores" className="section inversores">
      <div className="container inversores-inner">
        <div>
          <Reveal>
            <Eyebrow>Para inversores</Eyebrow>
          </Reveal>
          <h2 className="display" style={{ marginTop: "1rem" }}>
            Una propuesta pensada para <span className="serif-i">sostener valor</span> en el tiempo.
          </h2>
          <Reveal delay={100}>
            <p className="lead" style={{ marginTop: "1.2rem" }}>
              Gran Alto combina una ubicación conectada, una escala residencial
              cuidada y tipologías funcionales de 90 a 107 m². Una propuesta
              concebida para conservar calidad, vigencia y funcionalidad con el
              paso del tiempo.
            </p>
          </Reveal>
        </div>

        <div>
          <Reveal className="inv-list">
            {ARGS.map((arg, i) => (
              <div className="inv-item" key={i}>
                <span className="idx">{String(i + 1).padStart(2, "0")}</span>
                <span>{arg}</span>
              </div>
            ))}
          </Reveal>
          <Reveal style={{ marginTop: "1.8rem" }} delay={100}>
            <button
              className="btn btn-secondary-light"
              onClick={() => {
                onCta({ interest: "Invertir", location: "inversores" });
                window.trackEvent?.({ event: "cta_inversores" });
              }}
            >
              Recibir información comercial <ArrowIcon />
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
