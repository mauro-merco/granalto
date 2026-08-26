import { projectConfig, SITE } from "../lib/config";
import { Reveal, ArrowIcon, WhatsAppIcon } from "./ui";
import { projectImages } from "../lib/images";

export default function Cierre({ onCta }) {
  const whatsappReady = !!projectConfig.whatsappNumber;

  return (
    <section className="section cierre">
      <div className="container">
        <div className="cierre-split">
          <div className="cierre-image">
            <img
              src={projectImages.fachadaLateral}
              alt="Acceso y fachada lateral de Gran Alto"
              loading="lazy"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>

          <div className="cierre-content">
            <Reveal>
              <p className="eyebrow">
                El próximo paso
              </p>
            </Reveal>
            <h2 className="display" style={{ marginTop: "1rem" }}>
              Tu próximo lugar puede <span className="serif-i">empezar acá.</span>
            </h2>
            <Reveal delay={100}>
              <p className="lead">
                Conocé las tipologías, consultá disponibilidad y descubrí una nueva
                forma de vivir Las Mercedes.
              </p>
            </Reveal>
            <Reveal className="cierre-actions" delay={180}>
              <button
                className="btn btn-primary"
                onClick={() => {
                  onCta({ location: "cierre" });
                  window.trackEvent?.({ event: "cta_cierre" });
                }}
              >
                Quiero conocer Gran Alto <ArrowIcon />
              </button>
              {whatsappReady ? (
                <a
                  className="btn btn-ghost"
                  href={SITE.whatsappUrl(SITE.whatsappGeneral)}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => window.trackEvent?.({ event: "whatsapp_click" })}
                >
                  <WhatsAppIcon size={18} /> Consultar por WhatsApp
                </a>
              ) : (
                <button className="btn btn-ghost" aria-disabled="true" title="WhatsApp pendiente de configuración">
                  <WhatsAppIcon size={18} /> WhatsApp pendiente de configuración
                </button>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
