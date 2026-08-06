import { IMG } from "../lib/images";
import { Eyebrow, Reveal, LineReveal, ArrowIcon } from "./ui";

const CARDS = [
  { img: IMG.interiorLiving, cls: "int-card--w2", label: "Living principal" },
  { img: IMG.interiorKitchen, cls: "int-card--w1", label: "Cocina integrada" },
  { img: IMG.interiorDetail, cls: "int-card--w3", label: "Terminaciones" },
  { img: IMG.interiorBath, cls: "int-card--w3", label: "Baños" },
  { img: IMG.interiorBed, cls: "int-card--w3", label: "Dormitorios" },
  { img: IMG.interiorLiving2, cls: "int-card--w3", label: "Comedor" },
  { img: IMG.balcony, cls: "int-card--w3", label: "Balcón y aire libre" },
  { img: IMG.duplex, cls: "int-card--w3", label: "Luz natural" },
];

const MATERIALS = [
  { label: "Madera natural", dot: "#b68a4e" },
  { label: "Piedra y travertino", dot: "#c9c2b4" },
  { label: "Vidrio y metal", dot: "#8fa8a0" },
  { label: "Textiles cálidos", dot: "#d9b98a" },
];

export default function Interiores({ onCta }) {
  return (
    <section id="interiores" className="section interiores">
      <span className="orb orb-sand" style={{ width: "36vw", height: "36vw", top: "10%", right: "-14%" }} />
      <span className="orb orb-blue" style={{ width: "30vw", height: "30vw", bottom: "-6%", left: "-10%" }} />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <Reveal className="sec-head">
          <Eyebrow>Interiores, materiales y detalles</Eyebrow>
          <LineReveal as="h2" className="display" style={{ marginTop: "1.1rem", maxWidth: "820px" }}>
            <span className="line-mask">
              <span>Detalles que</span>
            </span>{" "}
            <span className="line-mask">
              <span className="serif-i">hacen hogar</span>
            </span>
          </LineReveal>
          <p className="lead" style={{ marginTop: "1.5rem", maxWidth: "560px" }}>
            Luz natural, texturas cálidas y materiales elegidos para crear
            espacios que se sienten propios desde el primer momento.
          </p>
        </Reveal>

        <div className="interiores-grid">
          {CARDS.map((c, i) => (
            <Reveal key={i} variant="scale" delay={(i % 3) * 80} className={`int-card ${c.cls}`}>
              <img src={c.img} alt={c.label} loading="lazy" />
              <span className="int-label">{c.label}</span>
            </Reveal>
          ))}
        </div>

        <Reveal className="materials-row" variant="left">
          {MATERIALS.map((m) => (
            <span className="material-chip" key={m.label}>
              <span className="dot" style={{ background: m.dot, boxShadow: `0 0 16px ${m.dot}` }} />
              {m.label}
            </span>
          ))}
        </Reveal>

        <Reveal style={{ marginTop: "2.4rem" }}>
          <button className="btn btn-primary" onClick={onCta}>
            Solicitar memoria de terminaciones <ArrowIcon />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
