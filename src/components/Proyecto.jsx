import { IMG } from "../lib/images";
import { Eyebrow, Reveal, LineReveal, ArrowIcon } from "./ui";

export default function Proyecto({ onCta }) {

  const features = [
    {
      num: "01",
      title: "Diseño y espacios pensados para vivir",
      text: "Distribuciones que acompañan el ritmo de cada día, sin perder calidez.",
    },
    {
      num: "02",
      title: "Ambientes amplios y luminosos",
      text: "Luz natural y ventanales que integran el interior con el exterior.",
    },
    {
      num: "03",
      title: "Materiales y terminaciones seleccionadas",
      text: "Texturas nobles elegidas para durar y para sentirse propias.",
    },
    {
      num: "04",
      title: "Ubicación conectada con Las Mercedes",
      text: "Un barrio con identidad, cerca de la vida cotidiana y la ciudad.",
    },
  ];

  return (
    <section id="proyecto" className="section proyecto">
      <div className="container">
        <div className="proyecto-grid">
          <Reveal variant="left" className="proyecto-visual">
            <span className="proyecto-stamp">Hecho para quedarse</span>
            <div className="img-main">
              <img src={IMG.projectMain} alt="Exterior del edificio Gran Alto" loading="lazy" />
            </div>
            <div className="img-small">
              <img src={IMG.projectSide} alt="Detalle de arquitectura del proyecto" loading="lazy" />
            </div>
          </Reveal>

          <div className="proyecto-copy">
            <Reveal>
              <Eyebrow>Un hogar pensado para vos</Eyebrow>
            </Reveal>
            <LineReveal as="h2" className="display" style={{ marginTop: "1.1rem" }}>
              <span className="line-mask">
                <span>Elegancia,</span>
              </span>{" "}
              <span className="line-mask">
                <span>
                  calidez <span className="serif-i">&</span>
                </span>
              </span>{" "}
              <span className="line-mask">
                <span>vida de barrio</span>
              </span>
            </LineReveal>
            <Reveal delay={150}>
              <p className="lead" style={{ marginTop: "1.6rem" }}>
                Gran Alto nace para integrarse a <strong>Las Mercedes</strong> y
                acompañar la identidad de un barrio construido desde la cercanía,
                la confianza y la vida compartida.
              </p>
            </Reveal>
            <div className="cards-features">
              {features.map((f, i) => (
                <Reveal key={f.num} delay={i * 90} className="feature-card tilt-hover">
                  <span className="glass-sheen" />
                  <span className="num">{f.num}</span>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={200}>
              <button className="btn btn-dark" style={{ marginTop: "2.2rem" }} onClick={onCta}>
                Recibir detalles del proyecto <ArrowIcon />
              </button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
