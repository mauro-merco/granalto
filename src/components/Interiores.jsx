import { Eyebrow, Reveal } from "./ui";
import { projectImages } from "../lib/images";

const RENDERS = [
  { src: projectImages.dptoA, label: "Interior · Tipología A" },
  { src: projectImages.dptoB, label: "Interior · Tipología B" },
  { src: projectImages.dptoC01, label: "Interior · Tipología C · Vista 1" },
  { src: projectImages.dptoC02, label: "Interior · Tipología C · Vista 2" },
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
            <Reveal key={r.label} variant="scale" delay={i * 80} className="int-card">
              <img
                src={r.src}
                alt={r.label}
                loading="lazy"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
              <span className="int-label">{r.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
