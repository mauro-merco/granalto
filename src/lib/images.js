const localImages = {};

const SLOT_CANDIDATES = {
  "hero-edificio-gran-alto": [],
  "proyecto-corte-edificio": [],
  "planta-general": [],
  "tipologia-a-plano": [],
  "tipologia-a-render": [],
  "tipologia-b-plano": [],
  "tipologia-b-render": [],
  "tipologia-c-plano": [],
  "tipologia-c-render": [],
  "amenity-piscina": [],
  "amenity-parrilla-exterior": [],
  "amenity-parrilla-climatizada": [],
  "amenity-gimnasio": [],
  "amenity-laundry": [],
  "ubicacion-mapa": [],
  "ubicacion-colegio-san-andres": [],
  "ubicacion-colegio-inter": [],
  "ubicacion-colegio-san-jose": [],
  "ubicacion-sanatorio-migone": [],
  "ubicacion-ande-central": [],
  "ubicacion-superseis-espana": [],
  "avance-obra-01": [],
  "avance-obra-02": [],
  "cierre-edificio": [],
};

const PLACEHOLDER_META = {
  "hero-edificio-gran-alto": {
    desc: "Vista aérea o fachada exterior real del edificio Gran Alto.",
    aspect: "16:9 o 3:2",
  },
  "proyecto-corte-edificio": {
    desc: "Corte vertical del edificio con niveles.",
    aspect: "4:5 o vertical",
  },
  "planta-general": {
    desc: "Plano completo de planta general.",
    aspect: "Horizontal ancho",
  },
  "tipologia-a-plano": {
    desc: "Plano Tipología A, 107 m².",
    aspect: "Horizontal",
  },
  "tipologia-a-render": {
    desc: "Render interior correspondiente a Tipología A.",
    aspect: "16:9 o 4:3",
  },
  "tipologia-b-plano": {
    desc: "Plano Tipología B, 93 m².",
    aspect: "Horizontal",
  },
  "tipologia-b-render": {
    desc: "Render interior correspondiente a Tipología B.",
    aspect: "16:9 o 4:3",
  },
  "tipologia-c-plano": {
    desc: "Plano Tipología C, 90 m².",
    aspect: "Horizontal",
  },
  "tipologia-c-render": {
    desc: "Render interior correspondiente a Tipología C.",
    aspect: "16:9 o 4:3",
  },
  "amenity-piscina": {
    desc: "Piscina panorámica en azotea.",
    aspect: "16:9",
  },
  "amenity-parrilla-exterior": {
    desc: "Parrilla y estar al aire libre.",
    aspect: "4:3 o 3:2",
  },
  "amenity-parrilla-climatizada": {
    desc: "Parrilla climatizada interior.",
    aspect: "4:3 o 3:2",
  },
  "amenity-gimnasio": {
    desc: "Gimnasio del edificio.",
    aspect: "4:3 o 3:2",
  },
  "amenity-laundry": {
    desc: "Laundry del edificio.",
    aspect: "4:3 o 3:2",
  },
  "ubicacion-mapa": {
    desc: "Mapa del dossier con Gran Alto y referencias.",
    aspect: "4:3 u horizontal",
  },
  "ubicacion-colegio-san-andres": {
    desc: "Fachada del Colegio San Andrés.",
    aspect: "4:3",
  },
  "ubicacion-colegio-inter": {
    desc: "Fachada del Colegio Inter.",
    aspect: "4:3",
  },
  "ubicacion-colegio-san-jose": {
    desc: "Fachada del Colegio San José.",
    aspect: "4:3",
  },
  "ubicacion-sanatorio-migone": {
    desc: "Fachada del Sanatorio Migone.",
    aspect: "4:3",
  },
  "ubicacion-ande-central": {
    desc: "ANDE Central.",
    aspect: "4:3",
  },
  "ubicacion-superseis-espana": {
    desc: "Superseis España.",
    aspect: "4:3",
  },
  "avance-obra-01": {
    desc: "Foto real y fechada del avance de obra.",
    aspect: "4:3",
  },
  "avance-obra-02": {
    desc: "Segunda foto real y fechada del avance.",
    aspect: "4:3",
  },
  "cierre-edificio": {
    desc: "Segunda vista real del proyecto para el CTA final.",
    aspect: "16:9",
  },
};

export function resolveImage(slotId) {
  if (localImages[slotId]) {
    return { src: localImages[slotId], isPlaceholder: false };
  }
  const candidates = SLOT_CANDIDATES[slotId] || [];
  for (const name of candidates) {
    if (localImages[name]) {
      return { src: localImages[name], isPlaceholder: false };
    }
  }
  return { src: null, isPlaceholder: true, meta: PLACEHOLDER_META[slotId] };
}

export const IMG_SLOTS = SLOT_CANDIDATES;
export const PLACEHOLDER_INFO = PLACEHOLDER_META;
