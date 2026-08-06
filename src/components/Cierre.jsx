import { IMG } from "../lib/images";
import { SITE } from "../lib/config";
import { Reveal, ArrowIcon, WhatsAppIcon } from "./ui";

export default function Cierre({ onCta }) {
  return (
    <section className="section cierre">
      <div className="cierre-bg">
        <img src={IMG.buildingDark} alt="Gran Alto de noche" loading="lazy" />
      </div>
      <div className="cierre-veil" />
      <span className="orb orb-sand" style={{ width: "30vw", height: "30vw", top: "0%", left: "-10%" }} />

      <div className="container cierre-inner">
        <Reveal>
          <p className="eyebrow" style={{ color: "var(--sand-2)", justifyContent: "center" }}>
            El próximo paso
          </p>
        </Reveal>
        <h2 className="display" style={{ marginTop: "1.2rem" }}>
          Tu nuevo lugar puede <span className="serif-i">empezar acá</span>
        </h2>
        <Reveal delay={120}>
          <p className="lead">
            Descubrí una nueva forma de vivir Las Mercedes. Recibí la
            información del proyecto y encontrá el espacio pensado para vos.
          </p>
        </Reveal>
        <Reveal className="cierre-actions" delay={200}>
          <button className="btn btn-primary" onClick={onCta}>
            Quiero conocer Gran Alto <ArrowIcon />
          </button>
          <a
            className="btn btn-ghost"
            href={SITE.whatsappUrl(SITE.whatsappGeneral)}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon size={18} /> Consultar por WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
