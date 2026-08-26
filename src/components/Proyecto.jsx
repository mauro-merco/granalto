import { Eyebrow, Reveal, LineReveal } from "./ui";
import { projectImages } from "../lib/images";

export default function Proyecto() {
  return (
    <section id="proyecto" className="section proyecto">
      <div className="container">
        <div className="proyecto-grid">
          <Reveal variant="left" className="proyecto-visual">
            <div className="img-main">
              <img
                src={projectImages.fachadaFrontal}
                alt="Fachada frontal de Gran Alto"
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
          </Reveal>

          <div className="proyecto-copy">
            <Reveal>
              <Eyebrow>Gran Alto</Eyebrow>
            </Reveal>
            <LineReveal as="h2" className="display">
              <span className="line-mask">
                <span>Algunas decisiones</span>
              </span>{" "}
              <span className="line-mask">
                <span>
                  trascienden <span className="serif-i">las tendencias.</span>
                </span>
              </span>
            </LineReveal>
            <Reveal delay={120}>
              <p className="lead" style={{ marginTop: "1.5rem" }}>
                Gran Alto Inter - Las Mercedes fue concebido a partir de una idea
                simple: crear espacios que mantengan su valor, funcionalidad y
                calidad con el paso del tiempo. La arquitectura, las proporciones
                y la escala del proyecto priorizan la experiencia de quienes lo
                habitan, en una propuesta pensada para disfrutarse hoy y durante
                muchos años.
              </p>
            </Reveal>

            <div className="proyecto-stats">
              <Reveal delay={160} className="proyecto-stat">
                <b>7</b>
                <span>Niveles</span>
              </Reveal>
              <Reveal delay={200} className="proyecto-stat">
                <b>1</b>
                <span>Nivel amenities</span>
              </Reveal>
              <Reveal delay={240} className="proyecto-stat">
                <b>2</b>
                <span>Niveles estacionamiento</span>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="proyecto-gallery">
          <Reveal variant="scale" delay={0} className="proyecto-gallery-item proyecto-gallery-item--tall">
            <img
              src={projectImages.fachadaLateral}
              alt="Acceso y fachada lateral de Gran Alto"
              loading="lazy"
              style={{ objectFit: "cover" }}
            />
            <div className="proyecto-gallery-caption">Acceso principal</div>
          </Reveal>
          <Reveal variant="scale" delay={80} className="proyecto-gallery-item">
            <img
              src={projectImages.lobby}
              alt="Lobby de acceso de Gran Alto"
              loading="lazy"
              style={{ objectFit: "cover" }}
            />
            <div className="proyecto-gallery-caption">Lobby de acceso</div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
