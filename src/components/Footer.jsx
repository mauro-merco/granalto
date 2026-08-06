import { NAV_LINKS, SITE } from "../lib/config";
import { Reveal, WhatsAppIcon } from "./ui";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="./img/logo-white.png" alt="Gran Alto Las Mercedes" />
            <p>
              Un nuevo hogar en Las Mercedes. Elegancia, calidez y vida de
              barrio en Asunción.
            </p>
          </div>

          <div>
            <h4>Navegación</h4>
            <ul>
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Contacto</h4>
            <ul>
              <li>{SITE.address}</li>
              <li>
                <a href={SITE.whatsappUrl(SITE.whatsappGeneral)} target="_blank" rel="noreferrer">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
              <li>
                <a href={SITE.instagram} target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Proyecto</h4>
            <ul>
              <li>
                <a href="#departamentos">Departamentos</a>
              </li>
              <li>
                <a href="#amenities">Amenities</a>
              </li>
              <li>
                <a href="#avance">Avance de obra</a>
              </li>
              <li>
                <a href="#inversores">Inversores</a>
              </li>
              <li>
                <a href="#privacidad">Política de privacidad</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Gran Alto Las Mercedes · {SITE.domain}
          </span>
          <span>Desarrollado con compromiso y respeto por el barrio.</span>
        </div>
      </div>
    </footer>
  );
}
