import { projectConfig } from "../lib/config";
import { Eyebrow, Reveal } from "./ui";

const TIMES = [
  { value: "5 min", label: "Centro Histórico" },
  { value: "10 min", label: "Eje Corporativo" },
  { value: "20 min", label: "Aeropuerto" },
];

export default function Ubicacion() {
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

        <div className="ubi-content">
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

          <Reveal delay={120}>
            <div className="ubi-editorial-list">
              <div className="ubi-editorial-group">
                <span className="ubi-editorial-heading">Colegios</span>
                <p>Colegio San Andrés · Colegio Inter · Colegio San José</p>
              </div>
              <div className="ubi-editorial-group">
                <span className="ubi-editorial-heading">Salud y servicios</span>
                <p>Sanatorio Migone · ANDE Central · Superseis España</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
