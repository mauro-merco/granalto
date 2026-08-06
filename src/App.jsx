import { useCallback, useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Proyecto from "./components/Proyecto";
import Tipologias from "./components/Tipologias";
import Amenities from "./components/Amenities";
import Interiores from "./components/Interiores";
import Ubicacion from "./components/Ubicacion";
import Avance from "./components/Avance";
import Inversores from "./components/Inversores";
import Formulario from "./components/Formulario";
import Faq from "./components/Faq";
import Cierre from "./components/Cierre";
import Footer from "./components/Footer";
import { FloatingWhatsApp, MobileBar, ScrollProgress } from "./components/Floating";

export default function App() {
  const [preselect, setPreselect] = useState({});

  const scrollToForm = () =>
    document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });

  const handleCta = useCallback(
    (payload = {}) => {
      setPreselect(payload);
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "cta_click", cta_location: payload.location || "global" });
      requestAnimationFrame(() => requestAnimationFrame(() => scrollToForm()));
    },
    []
  );

  useEffect(() => {
    const onMove = (e) => {
      document.querySelectorAll(".glass, .feature-card").forEach((el) => {
        const r = el.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width) * 100;
        const y = ((e.clientY - r.top) / r.height) * 100;
        el.style.setProperty("--mx", `${x}%`);
        el.style.setProperty("--my", `${y}%`);
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <>
      <ScrollProgress />
      <div className="grain" />
      <Header onCta={() => handleCta({ location: "header" })} />

      <main>
        <Hero onCta={() => handleCta({ location: "hero" })} />
        <Marquee words={["Gran Alto", "Las Mercedes", "Elegancia", "Calidez", "Vida de barrio"]} />
        <Proyecto onCta={() => handleCta({ location: "proyecto" })} />
        <Tipologias onCta={(p) => handleCta({ ...p, location: "tipologias" })} />
        <Marquee words={["Departamentos", "2 & 3 ambientes", "Amenities", "Asunción", "Hecho para vos"]} dark speed={0.8} />
        <Amenities onCta={() => handleCta({ location: "amenities" })} />
        <Interiores onCta={() => handleCta({ location: "interiores" })} />
        <Ubicacion />
        <Avance onCta={() => handleCta({ location: "avance" })} />
        <Inversores onCta={() => handleCta({ location: "inversores" })} />
        <Formulario preselect={preselect} />
        <Faq onCta={() => handleCta({ location: "faq" })} />
        <Cierre onCta={() => handleCta({ location: "cierre" })} />
      </main>

      <Footer />
      <FloatingWhatsApp />
      <MobileBar onCta={() => handleCta({ location: "mobile-bar" })} />
    </>
  );
}
