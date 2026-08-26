import { useCallback, useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Proyecto from "./components/Proyecto";
import Tipologias from "./components/Tipologias";
import PlantaGeneral from "./components/PlantaGeneral";
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

function trackEvent(data) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(data);
}

window.trackEvent = trackEvent;

export default function App() {
  const [preselect, setPreselect] = useState({});

  const scrollToForm = () =>
    document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });

  const handleCta = useCallback(
    (payload = {}) => {
      setPreselect(payload);
      trackEvent({ event: "cta_click", cta_location: payload.location || "global" });
      requestAnimationFrame(() => requestAnimationFrame(() => scrollToForm()));
    },
    []
  );

  return (
    <>
      <ScrollProgress />
      <Header onCta={() => handleCta({ location: "header" })} />

      <main>
        <Hero onCta={() => handleCta({ location: "hero" })} />
        <Marquee />
        <Proyecto />
        <Tipologias onCta={(p) => handleCta({ ...p, location: "tipologias" })} />
        <PlantaGeneral />
        <Amenities />
        <Interiores />
        <Ubicacion />
        <Avance />
        <Inversores onCta={(p) => handleCta({ ...p, location: "inversores" })} />
        <Formulario preselect={preselect} />
        <Faq />
        <Cierre onCta={() => handleCta({ location: "cierre" })} />
      </main>

      <Footer />
      <FloatingWhatsApp />
      <MobileBar onCta={() => handleCta({ location: "mobile-bar" })} />
    </>
  );
}
