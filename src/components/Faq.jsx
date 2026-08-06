import { useState } from "react";
import { SITE } from "../lib/config";
import { Eyebrow, Reveal, ArrowIcon, WhatsAppIcon } from "./ui";

const FAQS = [
  {
    q: "¿Dónde está ubicado Gran Alto?",
    a: "Gran Alto se desarrolla en el barrio Las Mercedes de Asunción, en una zona con identidad propia, cerca de comercios, servicios y espacios verdes. Escribinos y te compartimos la ubicación exacta y cómo llegar.",
  },
  {
    q: "¿Qué tipologías de departamentos están disponibles?",
    a: "El proyecto contempla tipologías de 1, 2 y 3 dormitorios, cada una con distribución pensada para distintas formas de vivir. Dejanos tus datos y un asesor te acerca superficies y disponibilidad actualizada.",
  },
  {
    q: "¿Qué amenities tendrá el edificio?",
    a: "El edificio incluye espacios pensados para el día a día: piscina, terraza panorámica, gimnasio, espacio cowork y salón de eventos, entre otros. Te compartimos la lista completa al solicitar información.",
  },
  {
    q: "¿El proyecto cuenta con cocheras?",
    a: "Sí, las tipologías incluyen opción de cochera, según el tipo de unidad. Consultanos por la disponibilidad para tu tipología de interés.",
  },
  {
    q: "¿En qué etapa se encuentra la obra?",
    a: "Gran Alto avanza con obra en desarrollo y estructura ya ejecutada. Publicamos actualizaciones periódicas con fecha visible para que cualquier interesado pueda verificar el avance real.",
  },
  {
    q: "¿Qué opciones de pago o financiación existen?",
    a: "Las condiciones comerciales se comparten personalmente con cada interesado según la unidad y el plan elegido. Contactanos y un asesor te orienta.",
  },
  {
    q: "¿Cómo puedo coordinar una visita?",
    a: "Podés coordinar una visita o conocer el departamento modelo por WhatsApp o completando el formulario. Te confirmamos fecha y horario.",
  },
  {
    q: "¿Puedo recibir planos y disponibilidad?",
    a: "Sí. Los planos y la disponibilidad se entregan después de completar el formulario, para poder asesorarte con la información correcta.",
  },
];

export default function Faq({ onCta }) {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section faq">
      <span className="orb orb-gold" style={{ width: "36vw", height: "36vw", top: "-10%", left: "-12%" }} />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <Reveal className="sec-head" style={{ maxWidth: "720px" }}>
          <Eyebrow>Preguntas frecuentes</Eyebrow>
          <h2 className="display" style={{ marginTop: "1.1rem" }}>
            Resolvemos tus <span className="serif-i">dudas</span> antes de hablar
          </h2>
        </Reveal>

        <div className="faq-wrap">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 40} className={`faq-item${open === i ? " is-open" : ""}`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                {f.q}
                <span className="plus">+</span>
              </button>
              <div className="faq-a">
                <div>
                  <p>{f.a}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal style={{ marginTop: "2.6rem" }}>
          <div className="glass glass-strong" style={{ padding: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
            <span className="glass-sheen" />
            <div>
              <h3 className="display--sm" style={{ color: "var(--cream)" }}>
                ¿Tenés otra pregunta?
              </h3>
              <p style={{ color: "rgba(255,248,230,0.75)", marginTop: "0.4rem" }}>
                El equipo de Gran Alto te responde directo.
              </p>
            </div>
            <div style={{ display: "flex", gap: "0.9rem", flexWrap: "wrap" }}>
              <button className="btn btn-primary" onClick={onCta}>
                Hablar con un asesor <ArrowIcon />
              </button>
              <a
                className="btn btn-ghost"
                href={SITE.whatsappUrl(SITE.whatsappGeneral)}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon size={18} /> WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
