export const SITE = {
  name: "Gran Alto",
  barrio: "Las Mercedes",
  domain: "www.granaltoliving.com.py",
  whatsappNumber: "595981234567",
  whatsappUrl: (text) =>
    `https://wa.me/595981234567?text=${encodeURIComponent(text)}`,
  whatsappGeneral: "Hola, quiero recibir información sobre Gran Alto Las Mercedes.",
  whatsappInversion: "Hola, quiero conocer las opciones de inversión en Gran Alto Las Mercedes.",
  phone: "+595 981 234 567",
  email: "hola@granaltoliving.com.py",
  instagram: "https://instagram.com/",
  address: "José Berges entre Manuel Frutos y Gral. Mariano Melgarejo, Barrio Las Mercedes, Asunción.",
  mapsEmbed:
    "https://www.google.com/maps?q=Las+Mercedes,+Asunci%C3%B3n,+Paraguay&z=16&output=embed",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=Las+Mercedes,+Asunci%C3%B3n,+Paraguay",
};

export const NAV_LINKS = [
  { label: "El proyecto", href: "#proyecto" },
  { label: "Departamentos", href: "#departamentos" },
  { label: "Amenities", href: "#amenities" },
  { label: "Las Mercedes", href: "#las-mercedes" },
  { label: "Avance", href: "#avance" },
  { label: "Contacto", href: "#contacto" },
];
