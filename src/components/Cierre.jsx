import { projectConfig, SITE } from "../lib/config";
import { Reveal, ArrowIcon, WhatsAppIcon, ProjectImage } from "./ui";

export default function Cierre({ onCta }) {
  const whatsappReady = !!projectConfig.whatsappNumber;

  return (
    <section className="section cierre">
      <div className="cierre-bg">
        <ProjectImage
          slotId="cierre-edificio"
          alt="Gran Alto — segunda vista del proyecto"
          fallbackSlot="hero-edificio-gran-alto"
          imgStyle={{ objectFit: "cover" }}
        />
      </div>
      <div className="cierre-veil" />

      <div className="container cierre-inner">
        <Reveal>
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            El próximo paso
          </p>
        </Reveal>
        <h2 className="display" style={{ marginTop: "1rem", color: "#fff" }}>
          Tu próximo lugar puede <span className="serif-i" style={{ color: "#fff" }}>empezar acá.</span>
        </h2>
        <Reveal delay={100}>
          <p className="lead" style={{ color: "rgba(255,255,255,0.8)", maxWidth: "520px", margin: "1rem auto 0" }}>
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
    </section>
  );
}
