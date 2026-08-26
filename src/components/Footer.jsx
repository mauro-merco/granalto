import { projectConfig, NAV_LINKS, SITE } from "../lib/config";

export default function Footer() {
  const hasWhatsapp = !!projectConfig.whatsappNumber;
  const hasEmail = !!projectConfig.commercialEmail;
  const hasInstagram = !!projectConfig.instagramUrl;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="./img/logo-white.png" alt="Gran Alto Las Mercedes" />
            <p>Arquitectura, funcionalidad y calidad en Las Mercedes.</p>
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
              <li>
                {projectConfig.address}
                {!projectConfig.addressValidated && (
                  <span className="footer-validation">DATO A VALIDAR</span>
                )}
              </li>
              {hasWhatsapp && (
                <li>
                  <a
                    href={SITE.whatsappUrl(SITE.whatsappGeneral)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp
                  </a>
                </li>
              )}
              {hasEmail && (
                <li>
                  <a href={`mailto:${projectConfig.commercialEmail}`}>
                    {projectConfig.commercialEmail}
                  </a>
                </li>
              )}
              {hasInstagram && (
                <li>
                  <a href={projectConfig.instagramUrl} target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h4>Proyecto</h4>
            <ul>
              <li><a href="#proyecto">Proyecto</a></li>
              <li><a href="#tipologias">Tipologías</a></li>
              <li><a href="#amenities">Amenities</a></li>
              <li><a href="#ubicacion">Ubicación</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Gran Alto. Todos los derechos reservados.</span>
          <a href={projectConfig.privacyUrl || "#"}>{projectConfig.privacyUrl ? "Política de Privacidad" : "Política de Privacidad (pendiente)"}</a>
        </div>
      </div>
    </footer>
  );
}
