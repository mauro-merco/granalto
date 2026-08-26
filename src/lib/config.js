import logoImg from "../imgs/logo.JPG";

export const projectConfig = {
  publicationReady: false,
  address: "José Berges 1411, Asunción",
  addressValidated: false,
  googleMapsUrl: "",
  whatsappNumber: "",
  commercialEmail: "",
  instagramUrl: "",
  privacyUrl: "",
  formEndpoint: "",
  projectProgress: null,
};

export const SITE = {
  name: "Gran Alto",
  subtitle: "Inter - Las Mercedes",
  logo: logoImg,
  whatsappUrl: (text) =>
    projectConfig.whatsappNumber
      ? `https://wa.me/${projectConfig.whatsappNumber}?text=${encodeURIComponent(text)}`
      : "#",
  whatsappGeneral: "Hola, quiero recibir información sobre Gran Alto Las Mercedes.",
  whatsappInversion: "Hola, quiero conocer las opciones de inversión en Gran Alto Las Mercedes.",
};

export const NAV_LINKS = [
  { label: "Proyecto", href: "#proyecto" },
  { label: "Tipologías", href: "#tipologias" },
  { label: "Amenities", href: "#amenities" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Contacto", href: "#/contacto" },
];
