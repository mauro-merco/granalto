import { useState } from "react";
import { Eyebrow, Reveal } from "./ui";

const FAQS = [
  {
    q: "¿Dónde está ubicado Gran Alto?",
    a: "Gran Alto está ubicado en José Berges 1411, en Las Mercedes, Asunción. La dirección debe validarse antes de la publicación definitiva.",
  },
  {
    q: "¿Qué tipologías de departamentos ofrece?",
    a: "El proyecto cuenta con tres tipologías de 2 dormitorios: Tipología A de 107 m², Tipología B de 93 m² y Tipología C de 90 m².",
  },
  {
    q: "¿Cómo se distribuyen los departamentos?",
    a: "Las tres tipologías incluyen 2 dormitorios y 2 baños, con 1 dormitorio en suite y 1 dormitorio con baño compartido.",
  },
  {
    q: "¿Qué amenities tendrá el edificio?",
    a: "Gran Alto contará con piscina panorámica, parrilla al aire libre, parrilla climatizada, gimnasio y laundry.",
  },
  {
    q: "¿Cuántos departamentos tendrá Gran Alto?",
    a: "El proyecto contará con 21 departamentos distribuidos en 7 niveles residenciales.",
  },
  {
    q: "¿El proyecto cuenta con estacionamiento?",
    a: "Gran Alto contempla 2 niveles de estacionamiento. Consultá con un asesor las condiciones correspondientes a cada unidad.",
  },
  {
    q: "¿Cómo puedo conocer disponibilidad y condiciones comerciales?",
    a: "Completá el formulario y un asesor se pondrá en contacto para compartirte la información actualizada.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  const toggle = (i) => {
    setOpen(open === i ? -1 : i);
    window.trackEvent?.({ event: "faq_open", faq_index: i });
  };

  return (
    <section className="section faq">
      <div className="container">
        <Reveal className="sec-head" style={{ maxWidth: "680px" }}>
          <Eyebrow>Preguntas frecuentes</Eyebrow>
          <h2 className="display" style={{ marginTop: "1rem" }}>
            Todo lo que necesitás <span className="serif-i">saber.</span>
          </h2>
        </Reveal>

        <div className="faq-wrap">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 30} className={`faq-item${open === i ? " is-open" : ""}`}>
              <button
                className="faq-q"
                onClick={() => toggle(i)}
                aria-expanded={open === i}
              >
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
      </div>
    </section>
  );
}
