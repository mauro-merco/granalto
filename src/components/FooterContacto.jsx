import { projectConfig, SITE } from "../lib/config";

export default function FooterContacto() {
  return (
    <footer className="footer footer--contacto">
      <div className="container">
        <div className="footer-contacto-inner">
          <div className="footer-contacto-brand">
            <img src={SITE.logo} alt="Gran Alto" style={{ height: "2.5rem", width: "auto" }} />
            <p>Arquitectura, funcionalidad y calidad en Las Mercedes.</p>
          </div>

          <div className="footer-contacto-info">
            <p>{projectConfig.address}</p>
            {!projectConfig.addressValidated && (
              <span className="footer-validation">DATO A VALIDAR</span>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Gran Alto. Todos los derechos reservados.</span>
          <a href={projectConfig.privacyUrl || "#"}>
            {projectConfig.privacyUrl ? "Política de Privacidad" : "Política de Privacidad (pendiente)"}
          </a>
        </div>
      </div>
    </footer>
  );
}
