import { useEffect, useState } from "react";
import { projectConfig, SITE } from "../lib/config";
import { Eyebrow, Reveal, ArrowIcon, WhatsAppIcon } from "./ui";

const TIPOLOGIAS = [
  "Tipología A · 107 m²",
  "Tipología B · 93 m²",
  "Tipología C · 90 m²",
  "Necesito asesoramiento",
];

export default function Formulario({ preselect = {} }) {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    interes: "Vivir",
    tipologia: "Necesito asesoramiento",
    contacto: "WhatsApp",
  });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (preselect.interest) setForm((f) => ({ ...f, interes: preselect.interest }));
    if (preselect.typology) {
      const match = TIPOLOGIAS.find((t) => t.includes(preselect.typology.replace("Tipología ", "")));
      if (match) setForm((f) => ({ ...f, tipologia: match }));
    }
  }, [preselect]);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    window.trackEvent?.({ event: "form_submit" });
  };

  const handleFocus = () => {
    window.trackEvent?.({ event: "form_start" });
  };

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
              {sent ? (
                <div className="form-success">
                  <div className="big">Recibimos tu consulta</div>
                  <p>
                    Un asesor de Gran Alto se pondrá en contacto con vos.
                  </p>
                  {projectConfig.whatsappNumber && (
                    <a
                      className="btn btn-primary"
                      href={SITE.whatsappUrl(
                        form.interes === "Invertir" ? SITE.whatsappInversion : SITE.whatsappGeneral
                      )}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <WhatsAppIcon size={18} /> Continuar por WhatsApp
                    </a>
                  )}
                </div>
              ) : (
                <form onSubmit={submit} onFocus={handleFocus}>
                  <div className="form-row">
                    <div className="field">
                      <label htmlFor="f-nombre">Nombre y apellido</label>
                      <input
                        id="f-nombre"
                        type="text"
                        required
                        value={form.nombre}
                        onChange={update("nombre")}
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="f-telefono">WhatsApp o teléfono</label>
                      <input
                        id="f-telefono"
                        type="tel"
                        inputMode="tel"
                        required
                        value={form.telefono}
                        onChange={update("telefono")}
                        placeholder="+595 ..."
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="f-email">Correo electrónico</label>
                    <input
                      id="f-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={update("email")}
                      placeholder="tu@correo.com"
                    />
                  </div>

                  <label style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-text)" }}>
                    ¿Qué te interesa?
                  </label>
                  <div className="radio-group">
                    {["Vivir", "Invertir", "Ambas opciones"].map((o) => (
                      <label className="radio-pill" key={o}>
                        <input
                          type="radio"
                          name="interes"
                          value={o}
                          checked={form.interes === o}
                          onChange={update("interes")}
                        />
                        <span>{o}</span>
                      </label>
                    ))}
                  </div>

                  <div className="field">
                    <label htmlFor="f-tipo">Tipología de interés</label>
                    <select id="f-tipo" value={form.tipologia} onChange={update("tipologia")}>
                      {TIPOLOGIAS.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  <label style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-text)" }}>
                    ¿Cómo preferís que te contactemos?
                  </label>
                  <div className="radio-group">
                    {["WhatsApp", "Llamada", "Correo electrónico"].map((o) => (
                      <label className="radio-pill" key={o}>
                        <input
                          type="radio"
                          name="contacto"
                          value={o}
                          checked={form.contacto === o}
                          onChange={update("contacto")}
                        />
                        <span>{o}</span>
                      </label>
                    ))}
                  </div>

                  <button className="btn btn-primary" style={{ width: "100%", marginTop: "0.3rem" }} type="submit">
                    Solicitar información <ArrowIcon />
                  </button>
                  <p className="form-note">
                    Al enviar el formulario, aceptás que el equipo de Gran Alto
                    se contacte con vos para brindarte información sobre el
                    proyecto y declarás haber leído la Política de Privacidad.
                  </p>

                  {!projectConfig.formEndpoint && (
                    <p className="form-pending">Integración de formulario pendiente</p>
                  )}
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
