import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function parallax(targets, amount = 90) {
  if (!targets || prefersReducedMotion()) return () => {};
  const ctx = gsap.context(() => {
    gsap.to(targets, {
      yPercent: amount,
      ease: "none",
      scrollTrigger: {
        trigger: targets[0]?.parentElement || targets,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });
  return () => ctx.revert();
}

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

export function fillBar(el) {
  if (!el || prefersReducedMotion()) return () => {};
  const ctx = gsap.context(() => {
    gsap.to(el, {
      width: el.dataset.value + "%",
      duration: 1.8,
      ease: "power3.inOut",
      scrollTrigger: { trigger: el, start: "top 90%", once: true },
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
