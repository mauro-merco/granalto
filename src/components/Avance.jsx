import { projectConfig } from "../lib/config";
import { Eyebrow, Reveal, LineReveal, ProjectImage } from "./ui";

export default function Avance() {
  const progress = projectConfig.projectProgress;

  if (!progress || !progress.images?.length) {
    return null;
  }

  return (
    <section id="avance" className="section avance">
      <div className="container">
        <div className="avance-grid">
          <div className="avance-images">
            {progress.images.map((img, i) => (
              <Reveal key={i} variant="scale" delay={i * 80} className="avance-img">
                <img src={img.src} alt={img.alt || "Avance de obra"} loading="lazy" />
              </Reveal>
            ))}
          </div>

          <div>
            <Reveal>
              <Eyebrow>Avance de obra</Eyebrow>
            </Reveal>
            <h2 className="display" style={{ marginTop: "1rem", fontSize: "clamp(2rem, 4vw, 3.6rem)" }}>
              Un proyecto que avanza <span className="serif-i">con compromiso.</span>
            </h2>
            <Reveal delay={100}>
              <p className="lead" style={{ marginTop: "1.2rem" }}>
                {progress.text || "Conocé la evolución real de Gran Alto a través de actualizaciones fechadas y fotografías del proyecto."}
              </p>
            </Reveal>
            {progress.date && (
              <Reveal delay={160}>
                <p style={{ marginTop: "0.8rem", fontSize: "0.82rem", fontWeight: 600, color: "var(--color-text-muted)" }}>
                  Actualizado en {progress.date}
                </p>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
