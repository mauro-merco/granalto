import { useState } from "react";
import { Eyebrow, Reveal, ProjectImage, ImageModal } from "./ui";

export default function PlantaGeneral() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="section planta-general">
      <div className="container">
        <Reveal className="sec-head" style={{ maxWidth: "680px" }}>
          <Eyebrow>Planta General</Eyebrow>
          <h2 className="display" style={{ marginTop: "1rem" }}>
            Un proyecto de escala <span className="serif-i">cuidada.</span>
          </h2>
          <p className="lead" style={{ marginTop: "1rem" }}>
            Una distribución pensada para equilibrar privacidad, circulación y
            calidad de vida en cada nivel.
          </p>
        </Reveal>

        <Reveal>
          <div
            className="planta-img-wrap"
            onClick={() => {
              setModalOpen(true);
              window.trackEvent?.({ event: "open_planta_general" });
            }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setModalOpen(true)}
            aria-label="Ampliar planta general"
          >
            <ProjectImage
              slotId="planta-general"
              alt="Planta general del edificio Gran Alto"
              aspectRatio="Horizontal ancho"
              imgStyle={{ objectFit: "contain" }}
            />
          </div>
          <p style={{ textAlign: "center", marginTop: "1rem", fontSize: "0.8rem", color: "var(--color-text-muted)" }}>
            Ampliar planta general
          </p>
        </Reveal>
      </div>

      {modalOpen && (
        <ImageModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          alt="Planta general ampliada del edificio Gran Alto"
        />
      )}
    </section>
  );
}
