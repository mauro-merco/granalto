import { useEffect, useState } from "react";
import { SITE } from "../lib/config";
import { Eyebrow, Reveal, ArrowIcon, WhatsAppIcon } from "./ui";

const TIPOS = ["Todavía no lo sé", "1 dormitorio", "2 dormitorios", "3 dormitorios"];

export default function Formulario({ preselect = {} }) {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    interes: "Vivir",
    tipologia: "Todavía no lo sé",
    contacto: "WhatsApp",
  });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (preselect.interest) setForm((f) => ({ ...f, interes: preselect.interest }));
    if (preselect.typology && preselect.typology !== "undefined")
      setForm((f) => ({ ...f, tipologia: preselect.typology }));
  }, [preselect]);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "generate_lead", lead_interest: form.interes });
  };

  const benefits = [
    "Tipologías y superficies actualizadas",
    "Planos y memoria de terminaciones",
    "Estado real del proyecto",
    "Atención de un asesor del equipo",
  ];

  return (
    <section id="contacto" className="section formulario">
      <span className="orb orb-sand" style={{ width: "38vw", height: "38vw", top: "-8%", right: "-14%" }} />
      <span className="orb orb-deep" style={{ width: "30vw", height: "30vw", bottom: "-6%", left: "-12%" }} />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="form-wrap">
          <div className="form-aside">
            <Reveal>
              <Eyebrow>Contacto</Eyebrow>
            </Reveal>
            <h2 className="display" style={{ marginTop: "1.1rem" }}>
              Conocé <span className="serif-i">Gran Alto</span>
            </h2>
            <Reveal delay={100}>
              <p className="lead" style={{ marginTop: "1.4rem" }}>
                Dejanos tus datos y un asesor se pondrá en contacto para
                compartirte tipologías, disponibilidad y toda la información del
                proyecto.
              </p>
            </Reveal>
            <Reveal className="form-benefits" delay={160}>
              {benefits.map((b) => (
                <div className="form-benefit" key={b}>
                  <span className="tick">✓</span>
                  <span>{b}</span>
                </div>
              ))}
            </Reveal>
            <Reveal style={{ marginTop: "2rem" }} delay={220}>
              <a
                className="btn btn-dark"
                href={SITE.whatsappUrl(SITE.whatsappGeneral)}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon size={18} /> Hablar con un asesor
              </a>
            </Reveal>
          </div>

          <Reveal variant="right">
            <div className="form-card">
              {sent ? (
                <div className="form-success">
                  <div className="big">Recibimos tu consulta ✦</div>
                  <p>
                    Un asesor de Gran Alto se pondrá en contacto con vos. Si
                    preferís avanzar ahora, también podés escribirnos por
                    WhatsApp.
                  </p>
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
                </div>
              ) : (
                <form onSubmit={submit}>
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

                  <label style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--deep)" }}>
                    ¿Qué te interesa?
                  </label>
                  <div className="radio-group">
                    {["Vivir", "Invertir", "Conocer ambas opciones"].map((o) => (
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
                      {TIPOS.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <label style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--deep)" }}>
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

                  <button className="btn btn-primary" style={{ width: "100%", marginTop: "0.4rem" }} type="submit">
                    Quiero recibir información <ArrowIcon />
                  </button>
                  <p className="form-note">
                    Al enviar el formulario, aceptás que el equipo de Gran Alto
                    se contacte con vos para brindarte información sobre el
                    proyecto. Conocé nuestra{" "}
                    <a href="#privacidad">política de privacidad</a>.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
