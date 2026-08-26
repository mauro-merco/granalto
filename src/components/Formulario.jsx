import { useEffect, useRef } from "react";
import { Eyebrow, Reveal } from "./ui";

export default function Formulario() {
  const scriptRef = useRef(null);

  useEffect(() => {
    if (scriptRef.current) return;
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    scriptRef.current = script;
  }, []);

  const benefits = [
    "Información de tipologías y superficies.",
    "Disponibilidad actualizada.",
    "Condiciones comerciales.",
    "Atención de un asesor.",
  ];

  return (
    <section id="contacto" className="section formulario">
      <div className="container">
        <div className="form-wrap">
          <div className="form-aside">
            <Reveal>
              <Eyebrow>Contacto</Eyebrow>
            </Reveal>
            <h2 className="display" style={{ marginTop: "1rem" }}>
              Conocé <span className="serif-i">Gran Alto.</span>
            </h2>
            <Reveal delay={100}>
              <p className="lead" style={{ marginTop: "1.2rem" }}>
                Recibí disponibilidad, condiciones comerciales y asesoramiento
                sobre la tipología que mejor se adapta a vos.
              </p>
            </Reveal>
            <Reveal className="form-benefits" delay={150}>
              {benefits.map((b) => (
                <div className="form-benefit" key={b}>
                  <span className="tick">✓</span>
                  <span>{b}</span>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal variant="right">
            <div className="form-card">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/MiylABsNIv4L2JPDBWTi"
                style={{ width: "100%", height: "100%", border: "none", borderRadius: "8px", minHeight: "600px" }}
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
        </div>
      </div>
    </section>
  );
}
