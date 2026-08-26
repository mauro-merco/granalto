import { useLayoutEffect, useRef } from "react";
import { horizontalLoop } from "../lib/anim";

const WORDS = ["Gran Alto", "Las Mercedes", "Arquitectura", "Funcionalidad", "Calidad"];

export default function Marquee() {
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const kill = horizontalLoop(trackRef.current, 1);
    return () => kill && kill();
  }, []);

  const doubled = [...WORDS, ...WORDS];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track" ref={trackRef}>
        {doubled.map((w, i) => (
          <span className="marquee-word" key={i}>
            {w} <span className="marquee-dot">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
