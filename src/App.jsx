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
import Contacto from "./components/Contacto";
import Faq from "./components/Faq";
import Cierre from "./components/Cierre";
import Footer from "./components/Footer";
import FooterContacto from "./components/FooterContacto";
import { FloatingWhatsApp, MobileBar, ScrollProgress } from "./components/Floating";
import { Eyebrow, Reveal, ArrowIcon } from "./components/ui";

function trackEvent(data) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(data);
}

window.trackEvent = trackEvent;

function ContactoCTA() {
  return (
    <section className="section contacto-cta-section">
      <div className="container">
        <Reveal className="sec-head" style={{ maxWidth: "680px", textAlign: "center", marginInline: "auto" }}>
          <Eyebrow>Contacto</Eyebrow>
          <h2 className="display" style={{ marginTop: "1rem" }}>
            Conocé <span className="serif-i">Gran Alto.</span>
          </h2>
          <p className="lead" style={{ marginTop: "1rem" }}>
            Recibí disponibilidad, condiciones comerciales y asesoramiento
            sobre la tipología que mejor se adapta a vos.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <div style={{ textAlign: "center" }}>
            <a
              className="btn btn-primary"
              href="/#/contacto"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = "/contacto";
                window.scrollTo({ top: 0, behavior: "smooth" });
                window.trackEvent?.({ event: "cta_home_contacto" });
              }}
            >
              Solicitar información <ArrowIcon />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function App() {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const isContactPage = route === "#/contacto";

  const goToContact = useCallback(() => {
    window.location.hash = "/contacto";
    window.scrollTo({ top: 0 });
  }, []);

  const handleCta = useCallback(
    (payload = {}) => {
      trackEvent({ event: "cta_click", cta_location: payload.location || "global" });
      goToContact();
    },
    [goToContact]
  );

  if (isContactPage) {
    return (
      <>
        <Header minimal onCta={goToContact} />
        <main style={{ paddingTop: "80px" }}>
          <Contacto />
        </main>
        <FooterContacto />
      </>
    );
  }

  return (
    <>
      <ScrollProgress />
      <Header onCta={goToContact} />

      <main>
        <Hero onCta={() => handleCta({ location: "hero" })} />
        <Marquee />
        <Proyecto />
        <Tipologias onCta={(p) => handleCta({ ...p, location: "tipologias" })} />
        <Amenities />
        <Interiores />
        <Ubicacion />
        <Avance />
        <Inversores onCta={(p) => handleCta({ ...p, location: "inversores" })} />
        <ContactoCTA />
        <Faq />
        <Cierre onCta={() => handleCta({ location: "cierre" })} />
      </main>

      <Footer />
      <FloatingWhatsApp />
      <MobileBar onCta={goToContact} />
    </>
  );
}
