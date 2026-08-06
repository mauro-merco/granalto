import { useEffect } from "react";
import { SITE } from "../lib/config";
import { WhatsAppIcon } from "./ui";

export function FloatingWhatsApp() {
  return (
    <a
      className="whatsapp-float"
      href={SITE.whatsappUrl(SITE.whatsappGeneral)}
      target="_blank"
      rel="noreferrer"
      aria-label="Consultar por WhatsApp"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}

export function MobileBar({ onCta }) {
  return (
    <div className="mobile-bar">
      <button className="btn btn-primary" onClick={onCta}>
        Quiero información
      </button>
      <a
        className="wa"
        href={SITE.whatsappUrl(SITE.whatsappGeneral)}
        target="_blank"
        rel="noreferrer"
        aria-label="Consultar por WhatsApp"
      >
        <WhatsAppIcon size={22} />
      </a>
    </div>
  );
}

export function ScrollProgress() {
  useEffect(() => {
    const bar = document.querySelector(".scroll-progress");
    const onScroll = () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      bar.style.width = `${pct}%`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div className="scroll-progress" />;
}
