import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function countUp(el, end, { duration = 1.8, decimals = 0 } = {}) {
  if (!el || prefersReducedMotion()) {
    if (el) el.textContent = end.toLocaleString("es-AR");
    return () => {};
  }
  const obj = { v: 0 };
  const ctx = gsap.context(() => {
    gsap.to(obj, {
      v: end,
      duration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        once: true,
      },
      onUpdate: () => {
        el.textContent = obj.v.toLocaleString("es-AR", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        });
      },
    });
  });
  return () => ctx.revert();
}

export function horizontalLoop(target, speed = 1) {
  if (!target || prefersReducedMotion()) return () => {};
  const tween = gsap.to(target, {
    xPercent: -50,
    duration: 22 / speed,
    ease: "none",
    repeat: -1,
  });
  return () => tween.kill();
}
