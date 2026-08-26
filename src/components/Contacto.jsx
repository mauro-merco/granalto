import { useEffect, useRef } from "react";
import { Eyebrow, Reveal, ArrowIcon } from "./ui";

export default function Contacto() {
  const scriptRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (scriptRef.current) return;
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    scriptRef.current = script;
  }, []);

  return (
    <section className="section contacto-page">
      <div className="container">
        <Reveal className="sec-head" style={{ maxWidth: "680px", textAlign: "center", marginInline: "auto" }}>
          <Eyebrow>Contacto</Eyebrow>
          <h2 className="display" style={{ marginTop: "1rem" }}>
            Conocé <span className="serif-i">Gran Alto.</span>
          </h2>
          <p className="lead" style={{ marginTop: "1rem" }}>
            Recibí disponibilidad, condiciones comerciales y asesoramiento
            sobre la tipología que mejor se adapta a vos.
          </p>
        </Reveal>

        <Reveal>
          <div className="contacto-iframe-wrap">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/MiylABsNIv4L2JPDBWTi"
              style={{ width: "100%", height: "100%", border: "none", borderRadius: "8px" }}
              id="inline-MiylABsNIv4L2JPDBWTi"
              data-layout='{"id":"INLINE"}'
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Formulario Gran Alto"
              data-height="undefined"
              data-layout-iframe-id="inline-MiylABsNIv4L2JPDBWTi"
              data-form-id="MiylABsNIv4L2JPDBWTi"
              title="Formulario Gran Alto"
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="contacto-back">
            <a className="btn btn-secondary" href="/#" onClick={(e) => { e.preventDefault(); window.location.hash = ""; }}>
              <ArrowIcon size={14} /> Volver al proyecto
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
