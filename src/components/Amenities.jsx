import { useEffect, useRef } from "react";
import { IMG } from "../lib/images";
import { Eyebrow, Reveal, ArrowIcon } from "./ui";

const AMENITIES = [
  { img: IMG.pool, num: "01", title: "Piscina", text: "Días de verano sin salir de casa." },
  { img: IMG.terrace, num: "02", title: "Terraza panorámica", text: "El skyline de Asunción como horizonte." },
  { img: IMG.gym, num: "03", title: "Gimnasio", text: "Tu rutina, a pasos de tu hogar." },
  { img: IMG.cowork, num: "04", title: "Espacio cowork", text: "Trabajo y estudio con luz natural." },
  { img: IMG.lounge, num: "05", title: "Salón de eventos", text: "Reuniones y celebraciones con amigos." },
  { img: IMG.garden, num: "06", title: "Patio y verde", text: "Naturaleza que se integra al barrio." },
  { img: IMG.balcony, num: "07", title: "Vigilancia 24/7", text: "Seguridad pensada para la tranquilidad." },
  { img: IMG.cityGreen, num: "08", title: "Cocheras", text: "Playa de estacionamiento integrada." },
];

export default function Amenities({ onCta }) {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const SPEED = 0.7;

    let pos = 0;
    let raf = null;
    let paused = false;
    let isDown = false;
    let startX = 0;
    let startScroll = 0;

    const halfWidth = () => track.scrollWidth / 2;

    const step = () => {
      if (!paused) {
        pos += SPEED;
        const half = halfWidth();
        if (pos >= half) pos = 0;
        track.scrollLeft = pos;
      }
      raf = requestAnimationFrame(step);
    };

    const syncPos = () => {
      pos = track.scrollLeft;
      const half = halfWidth();
      if (pos >= half) pos -= half;
    };

    const pause = () => {
      paused = true;
    };
    const resume = () => {
      paused = false;
      if (!isDown) syncPos();
    };

    const down = (e) => {
      isDown = true;
      paused = true;
      startX = e.pageX;
      startScroll = track.scrollLeft;
      track.style.cursor = "grabbing";
    };
    const move = (e) => {
      if (!isDown) return;
      track.scrollLeft = startScroll - (e.pageX - startX);
    };
    const up = () => {
      if (isDown) {
        isDown = false;
        syncPos();
        paused = false;
        track.style.cursor = "grab";
      }
    };

    if (!reduced) raf = requestAnimationFrame(step);

    track.addEventListener("pointerdown", down);
    track.addEventListener("pointerenter", pause);
    track.addEventListener("pointerleave", resume);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    window.addEventListener("resize", syncPos);
    return () => {
      cancelAnimationFrame(raf);
      track.removeEventListener("pointerdown", down);
      track.removeEventListener("pointerenter", pause);
      track.removeEventListener("pointerleave", resume);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("resize", syncPos);
    };
  }, []);

  const cards = [...AMENITIES, ...AMENITIES];
  const renderCard = (a, i) => (
    <article className="amenity-card" key={`${a.num}-${i}`}>
      <img src={a.img} alt={a.title} loading="lazy" draggable={false} />
      <div className="overlay" />
      <div className="caption">
        <span className="num">{a.num}</span>
        <h3>{a.title}</h3>
        <p>{a.text}</p>
      </div>
    </article>
  );

  return (
    <section id="amenities" className="section amenities">
      <span className="orb orb-gold" style={{ width: "40vw", height: "40vw", top: "-15%", left: "-12%" }} />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <Reveal className="sec-head">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "2rem", flexWrap: "wrap" }}>
            <div style={{ maxWidth: "700px" }}>
              <Eyebrow>Espacios y amenities</Eyebrow>
              <h2 className="display" style={{ marginTop: "1.1rem" }}>
                Espacios para <span className="serif-i">disfrutar</span> todos los días
              </h2>
            </div>
            <p className="lead" style={{ maxWidth: "360px" }}>
              Cada ambiente de Gran Alto fue pensado para sumar comodidad,
              bienestar y calidad a la vida cotidiana.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal variant="scale" className="amenities-strip">
        <div className="amenities-track" ref={trackRef}>
          {cards.slice(0, AMENITIES.length).map((a, i) => renderCard(a, i))}
          <div aria-hidden="true" style={{ display: "contents" }}>
            {cards.slice(AMENITIES.length).map((a, i) => renderCard(a, i + AMENITIES.length))}
          </div>
        </div>
      </Reveal>

      <div className="container" style={{ position: "relative", zIndex: 2, marginTop: "2.2rem" }}>
        <Reveal>
          <button className="btn btn-dark" onClick={onCta}>
            Quiero conocer todos los espacios <ArrowIcon />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
