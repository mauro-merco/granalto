import { Eyebrow, Reveal, ProjectImage } from "./ui";

const RENDERS = [
  { slotId: "tipologia-a-render", label: "Interior · Tipología A" },
  { slotId: "tipologia-b-render", label: "Interior · Tipología B" },
  { slotId: "tipologia-c-render", label: "Interior · Tipología C" },
];

export default function Interiores() {
  return (
    <section className="section interiores">
      <div className="container">
        <Reveal className="sec-head">
          <Eyebrow>Interiores</Eyebrow>
          <h2 className="display" style={{ marginTop: "1rem" }}>
            Espacios que se sienten <span className="serif-i">propios.</span>
          </h2>
          <p className="lead" style={{ marginTop: "1rem", maxWidth: "560px" }}>
            Ambientes amplios, luminosos y funcionales, con distribuciones
            pensadas para acompañar la vida cotidiana.
          </p>
        </Reveal>

        <div className="interiores-grid">
          {RENDERS.map((r, i) => (
            <Reveal key={r.slotId} variant="scale" delay={i * 80} className="int-card">
              <ProjectImage
                slotId={r.slotId}
                alt={r.label}
                aspectRatio="16:9"
              />
              <span className="int-label">{r.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
