import implantacionImg from "../imgs/IMPLANTACION.jpg";
import fachadaFrontalImg from "../imgs/FACHADA-FRONTAL.png";
import fachadaLateralImg from "../imgs/FACHADA-LATERAL.png";
import lobbyImg from "../imgs/LOBBY.jpg";
import dptoAImg from "../imgs/DEPTO-A.png";
import dptoBImg from "../imgs/DPTO-B.jpg";
import dptoC01Img from "../imgs/DPTO-C-001.jpg";
import dptoC02Img from "../imgs/DPTO-C-002.jpg";
import azoteaDroneImg from "../imgs/AZOTEA-DRONE.jpg";
import quinchoPiscinaImg from "../imgs/QUINCHO-PISCINA.png";
import quinchoDescansoImg from "../imgs/QUINCHO-DESCANSO.jpg";
import salonMultiusoImg from "../imgs/SALON-MULTIUSO.jpg";

export const projectImages = {
  hero: implantacionImg,
  fachadaFrontal: fachadaFrontalImg,
  fachadaLateral: fachadaLateralImg,
  lobby: lobbyImg,
  dptoA: dptoAImg,
  dptoB: dptoBImg,
  dptoC01: dptoC01Img,
  dptoC02: dptoC02Img,
  piscina: azoteaDroneImg,
  amenitiesGeneral: quinchoPiscinaImg,
  parrillaExterior: quinchoDescansoImg,
  parrillaClimatizada: salonMultiusoImg,
};

const SLOT_TO_IMAGE = {
  "hero-edificio-gran-alto": projectImages.hero,
  "fachada-frontal": projectImages.fachadaFrontal,
  "fachada-lateral": projectImages.fachadaLateral,
  "lobby-ingreso": projectImages.lobby,
  "tipologia-a-render": projectImages.dptoA,
  "tipologia-b-render": projectImages.dptoB,
  "tipologia-c-render": projectImages.dptoC01,
  "tipologia-c-render-secundario": projectImages.dptoC02,
  "amenity-piscina": projectImages.piscina,
  "amenities-vista-general": projectImages.amenitiesGeneral,
  "amenity-parrilla-exterior": projectImages.parrillaExterior,
  "amenity-parrilla-climatizada": projectImages.parrillaClimatizada,
};

const PLACEHOLDER_META = {
  "hero-edificio-gran-alto": { desc: "Vista aérea o fachada exterior real del edificio Gran Alto.", aspect: "16:9 o 3:2" },
  "proyecto-corte-edificio": { desc: "Corte vertical del edificio con niveles.", aspect: "4:5 o vertical" },
  "planta-general": { desc: "Plano completo de planta general.", aspect: "Horizontal ancho" },
  "tipologia-a-plano": { desc: "Plano Tipología A, 107 m².", aspect: "Horizontal" },
  "tipologia-a-render": { desc: "Render interior correspondiente a Tipología A.", aspect: "16:9 o 4:3" },
  "tipologia-b-plano": { desc: "Plano Tipología B, 93 m².", aspect: "Horizontal" },
  "tipologia-b-render": { desc: "Render interior correspondiente a Tipología B.", aspect: "16:9 o 4:3" },
  "tipologia-c-plano": { desc: "Plano Tipología C, 90 m².", aspect: "Horizontal" },
  "tipologia-c-render": { desc: "Render interior correspondiente a Tipología C.", aspect: "16:9 o 4:3" },
  "tipologia-c-render-secundario": { desc: "Segunda vista interior de la Tipología C.", aspect: "16:9 o 4:3" },
  "amenity-piscina": { desc: "Piscina panorámica en azotea.", aspect: "16:9" },
  "amenities-vista-general": { desc: "Vista general de la azotea con parrilla, estar y piscina.", aspect: "Panorámica" },
  "amenity-parrilla-exterior": { desc: "Parrilla y estar al aire libre.", aspect: "4:3 o 3:2" },
  "amenity-parrilla-climatizada": { desc: "Parrilla climatizada interior.", aspect: "4:3 o 3:2" },
  "amenity-gimnasio": { desc: "Gimnasio del edificio.", aspect: "4:3 o 3:2" },
  "amenity-laundry": { desc: "Laundry del edificio.", aspect: "4:3 o 3:2" },
  "ubicacion-mapa": { desc: "Mapa del dossier con Gran Alto y referencias.", aspect: "4:3 u horizontal" },
  "ubicacion-colegio-san-andres": { desc: "Fachada del Colegio San Andrés.", aspect: "4:3" },
  "ubicacion-colegio-inter": { desc: "Fachada del Colegio Inter.", aspect: "4:3" },
  "ubicacion-colegio-san-jose": { desc: "Fachada del Colegio San José.", aspect: "4:3" },
  "ubicacion-sanatorio-migone": { desc: "Fachada del Sanatorio Migone.", aspect: "4:3" },
  "ubicacion-ande-central": { desc: "ANDE Central.", aspect: "4:3" },
  "ubicacion-superseis-espana": { desc: "Superseis España.", aspect: "4:3" },
  "avance-obra-01": { desc: "Foto real y fechada del avance de obra.", aspect: "4:3" },
  "avance-obra-02": { desc: "Segunda foto real y fechada del avance.", aspect: "4:3" },
  "cierre-edificio": { desc: "Segunda vista real del proyecto para el CTA final.", aspect: "16:9" },
};

export function resolveImage(slotId) {
  const src = SLOT_TO_IMAGE[slotId];
  if (src) return { src, isPlaceholder: false };
  return { src: null, isPlaceholder: true, meta: PLACEHOLDER_META[slotId] };
}

export const IMG_SLOTS = Object.keys(PLACEHOLDER_META);
export const PLACEHOLDER_INFO = PLACEHOLDER_META;
