import "../cards/card.scss";

function Card(props) {
  return (
    <section className="card">
      <section className="card__image-container">
        <img className="card__image" src={props.photo} alt="image" />
        <section className="card__info">
          <p className="card__photographer">{props.photographer}</p>
        </section>
      </section>
      <section className="card__tags">
        {props.tags.map((tag, index) => (
          <p key={index} className="card__tag">
            {tag}
          </p>
        ))}
      </section>
    </section>
  );
}

export default Card;
