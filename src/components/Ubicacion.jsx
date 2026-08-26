import { projectConfig, SITE } from "../lib/config";
import { Eyebrow, Reveal, ProjectImage, ArrowIcon } from "./ui";

const POIS = [
  { name: "Colegio San Andrés", slotId: "ubicacion-colegio-san-andres" },
  { name: "Colegio Inter", slotId: "ubicacion-colegio-inter" },
  { name: "Colegio San José", slotId: "ubicacion-colegio-san-jose" },
  { name: "Sanatorio Migone", slotId: "ubicacion-sanatorio-migone" },
  { name: "ANDE Central", slotId: "ubicacion-ande-central" },
  { name: "Superseis España", slotId: "ubicacion-superseis-espana" },
];

const TIMES = [
  { value: "5 min", label: "Centro Histórico" },
  { value: "10 min", label: "Eje Corporativo" },
  { value: "20 min", label: "Aeropuerto" },
];

export default function Ubicacion() {
  const mapsReady = !!projectConfig.googleMapsUrl;

  return (
    <section id="ubicacion" className="section ubicacion">
      <div className="container">
        <Reveal className="sec-head" style={{ maxWidth: "680px" }}>
          <Eyebrow>Ubicación</Eyebrow>
          <h2 className="display" style={{ marginTop: "1rem" }}>
            Cerca de todo. <span className="serif-i">En Las Mercedes.</span>
          </h2>
          <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginTop: "0.8rem", flexWrap: "wrap" }}>
            <p className="lead">
              {projectConfig.address}
            </p>
            {!projectConfig.addressValidated && (
              <span className="ubi-validation">DATO A VALIDAR ANTES DE PUBLICAR</span>
            )}
          </div>
        </Reveal>

        <div className="ubi-grid">
          <Reveal variant="left">
            <div className="ubi-map">
              <ProjectImage
                slotId="ubicacion-mapa"
                alt="Mapa de ubicación de Gran Alto en Las Mercedes"
                aspectRatio="4:3"
                imgStyle={{ objectFit: "contain" }}
              />
            </div>
            <div className="ubi-address">
              <b>Gran Alto — Las Mercedes</b>
              <p>{projectConfig.address}</p>
              {!projectConfig.addressValidated && (
                <span className="ubi-validation">DATO A VALIDAR ANTES DE PUBLICAR</span>
              )}
              <button
                className="btn btn-secondary"
                style={{ marginTop: "0.9rem", padding: "0.6rem 1.2rem", fontSize: "0.78rem" }}
                aria-disabled={!mapsReady}
                title={mapsReady ? "Abrir en Google Maps" : "Enlace de ubicación pendiente"}
                onClick={() => {
                  if (mapsReady) {
                    window.open(projectConfig.googleMapsUrl, "_blank", "noopener,noreferrer");
                    window.trackEvent?.({ event: "maps_click" });
                  }
                }}
              >
                Cómo llegar <ArrowIcon size={14} />
              </button>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="lead">
                Gran Alto se integra a un entorno consolidado, con colegios,
                salud, servicios y conexiones urbanas a pocos minutos del
                proyecto.
              </p>
            </Reveal>

            <div className="ubi-times">
              {TIMES.map((t) => (
                <Reveal key={t.label} variant="scale" className="ubi-time">
                  <b>{t.value}</b>
                  <span>{t.label}</span>
                </Reveal>
              ))}
            </div>

            <div className="pois">
              {POIS.map((p, i) => (
                <Reveal key={p.name} delay={i * 40} className="poi">
                  <ProjectImage
                    slotId={p.slotId}
                    alt={p.name}
                    aspectRatio="1:1"
                    imgStyle={{ width: "40px", height: "40px", borderRadius: "4px", objectFit: "cover" }}
                  />
                  {p.name}
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
