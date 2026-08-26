import { Eyebrow, Reveal } from "./ui";
import { projectImages } from "../lib/images";

const AMENITIES_WITH_IMG = [
  {
    img: projectImages.piscina,
    title: "Piscina panorámica",
    text: "Una vista abierta sobre Asunción para disfrutar desde la azotea.",
    featured: true,
  },
  {
    img: projectImages.parrillaExterior,
    title: "Parrilla al aire libre",
    text: "Un espacio exterior para compartir encuentros y disfrutar al aire libre.",
  },
  {
    img: projectImages.parrillaClimatizada,
    title: "Parrilla climatizada",
    text: "Un ambiente interior preparado para disfrutar durante todo el año.",
  },
];

const AMENITIES_TEXT_ONLY = [
  {
    num: "04",
    title: "Gimnasio",
    text: "Un espacio pensado para incorporar bienestar y movimiento a la rutina.",
    variant: "solid",
  },
  {
    num: "05",
    title: "Laundry",
    text: "Una solución práctica integrada a la vida cotidiana del edificio.",
    variant: "outline",
  },
];

export default function Amenities() {
  return (
    <section id="amenities" className="section amenities">
      <div className="container">
        <Reveal className="sec-head">
          <Eyebrow>Amenities</Eyebrow>
          <h2 className="display" style={{ marginTop: "1rem" }}>
            El último nivel, pensado para <span className="serif-i">disfrutar.</span>
          </h2>
          <p className="lead" style={{ marginTop: "1rem", maxWidth: "560px" }}>
            Espacios para encontrarse, entrenar, descansar y disfrutar de la
            ciudad desde una nueva perspectiva.
          </p>
        </Reveal>

        <Reveal>
          <div className="amenities-panoramic">
            <img
              src={projectImages.amenitiesGeneral}
              alt="Vista general de la azotea con parrilla, estar y piscina"
              loading="lazy"
              style={{ objectFit: "cover" }}
            />
            <div className="overlay" />
            <div className="caption">Amenities en la azotea</div>
          </div>
        </Reveal>

        <div className="amenities-grid">
          {AMENITIES_WITH_IMG.map((a, i) => (
            <Reveal
              key={a.title}
              variant="scale"
              delay={i * 60}
              className={`amenity-card${a.featured ? " amenity-card--featured" : ""}`}
            >
              <div className="media-frame">
                <img
                  src={a.img}
                  alt={a.title}
                  loading="lazy"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="overlay" />
              <div className="caption">
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            </Reveal>
          ))}

          {AMENITIES_TEXT_ONLY.map((a, i) => (
            <Reveal
              key={a.title}
              variant="scale"
              delay={(AMENITIES_WITH_IMG.length + i) * 60}
              className={`amenity-card amenity-card--text${a.variant === "solid" ? " amenity-card--solid" : ""}`}
            >
              <div className="amenity-text-inner">
                <span className="amenity-num">{a.num}</span>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
