import { useLayoutEffect, useRef } from "react";
import { horizontalLoop } from "../lib/anim";

export default function Marquee({ words, dark = false, speed = 1 }) {
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const kill = horizontalLoop(trackRef.current, speed);
    return () => kill && kill();
  }, [speed]);

  const doubled = [...words, ...words];

  return (
    <div className={`marquee marquee--${dark ? "dark" : "light"}`} aria-hidden="true">
      <div className="marquee-track" ref={trackRef}>
        {doubled.map((w, i) => (
          <span className={`marquee-word ${i % 2 ? "outline" : ""}`} key={i}>
            {w} <span className="marquee-dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
