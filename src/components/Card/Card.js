import "./Card.css";

function Card({image, title, description}) {
  return(
    <div className="card">
      <img className="card__image" src={image} alt={title} />
      <h2 className="card__title">{title}</h2>
      <p className="card__description">{description}</p>
    </div>
  )
}

export default Card;