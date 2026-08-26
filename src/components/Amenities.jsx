import { Eyebrow, Reveal, ProjectImage } from "./ui";

const AMENITIES = [
  {
    slotId: "amenity-piscina",
    title: "Piscina panorámica",
    text: "Una vista abierta sobre Asunción para disfrutar desde la azotea.",
    featured: true,
  },
  {
    slotId: "amenity-parrilla-exterior",
    title: "Parrilla al aire libre",
    text: "Un espacio exterior para compartir encuentros y disfrutar al aire libre.",
  },
  {
    slotId: "amenity-parrilla-climatizada",
    title: "Parrilla climatizada",
    text: "Un ambiente interior preparado para disfrutar durante todo el año.",
  },
  {
    slotId: "amenity-gimnasio",
    title: "Gimnasio",
    text: "Un espacio pensado para incorporar bienestar y movimiento a la rutina.",
  },
  {
    slotId: "amenity-laundry",
    title: "Laundry",
    text: "Una solución práctica integrada a la vida cotidiana del edificio.",
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

        <div className="amenities-grid">
          {AMENITIES.map((a, i) => (
            <Reveal
              key={a.slotId}
              variant="scale"
              delay={i * 60}
              className={`amenity-card${a.featured ? " amenity-card--featured" : ""}`}
            >
              <ProjectImage
                slotId={a.slotId}
                alt={a.title}
                aspectRatio={a.featured ? "16:9" : "4:3"}
              />
              <div className="overlay" />
              <div className="caption">
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
