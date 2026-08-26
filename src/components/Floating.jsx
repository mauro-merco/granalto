import { useEffect } from "react";
import { projectConfig, SITE } from "../lib/config";
import { WhatsAppIcon } from "./ui";

export function FloatingWhatsApp() {
  const ready = !!projectConfig.whatsappNumber;

  return (
    <a
      className="whatsapp-float"
      href={ready ? SITE.whatsappUrl(SITE.whatsappGeneral) : "#"}
      target={ready ? "_blank" : undefined}
      rel={ready ? "noreferrer" : undefined}
      aria-label={ready ? "Consultar por WhatsApp" : "WhatsApp pendiente de configuración"}
      aria-disabled={!ready}
      onClick={(e) => {
        if (!ready) e.preventDefault();
        else window.trackEvent?.({ event: "whatsapp_click" });
      }}
    >
      <WhatsAppIcon size={26} />
    </a>
  );
}

export function MobileBar({ onCta }) {
  return (
    <div className="mobile-bar">
      <button className="btn btn-primary" onClick={onCta}>
        Solicitar información
      </button>
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
