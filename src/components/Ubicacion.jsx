import { IMG } from "../lib/images";
import { SITE } from "../lib/config";
import { Eyebrow, Reveal, ArrowIcon } from "./ui";

const POIS = [
  { ico: "✦", label: "Espacios verdes" },
  { ico: "☕", label: "Gastronomía y cafés" },
  { ico: "🛒", label: "Comercios y servicios" },
  { ico: "✚", label: "Centros de salud" },
  { ico: "🚌", label: "Conectividad urbana" },
  { ico: "🎓", label: "Colegios cercanos" },
];

export default function Ubicacion() {
  return (
    <section id="las-mercedes" className="section ubicacion">
      <span className="orb orb-deep" style={{ width: "40vw", height: "40vw", top: "-12%", right: "-14%" }} />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <Reveal className="sec-head" style={{ maxWidth: "720px" }}>
          <Eyebrow>Una ubicación con identidad</Eyebrow>
          <h2 className="display" style={{ marginTop: "1.1rem" }}>
            Viví la armonía de <span className="serif-i">Las Mercedes</span>
          </h2>
        </Reveal>

        <div className="ubi-grid">
          <Reveal variant="left">
            <div className="ubi-map">
              <iframe
                title="Mapa de ubicación Gran Alto Las Mercedes"
                src={SITE.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="ubi-pin">
                <div className="pin-dot" />
              </div>
            </div>
            <div className="ubi-address">
              <b>Gran Alto Las Mercedes</b>
              <p>{SITE.address}</p>
              <a
                href={SITE.mapsLink}
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark"
                style={{ marginTop: "1.1rem", padding: "0.7rem 1.4rem", fontSize: "0.8rem" }}
              >
                Abrir en Google Maps <ArrowIcon size={15} />
              </a>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="lead">
                Gran Alto se encuentra en un barrio donde la cercanía, la vida
                cotidiana y los espacios con identidad conviven de manera
                natural. Una ubicación que permite <strong>disfrutar el entorno</strong> y
                mantenerse conectado con la ciudad.
              </p>
            </Reveal>

            <Reveal className="pois" delay={120}>
              {POIS.map((p) => (
                <span className="poi" key={p.label}>
                  <span className="ico">{p.ico}</span> {p.label}
                </span>
              ))}
            </Reveal>

            <Reveal delay={180} style={{ marginTop: "2.2rem" }}>
              <img
                src={IMG.walk}
                alt="Calle del barrio Las Mercedes"
                loading="lazy"
                style={{ borderRadius: "24px", width: "100%", height: "260px", objectFit: "cover", boxShadow: "0 30px 70px -30px rgba(14,29,27,.5)" }}
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
