import "../cards/card.scss";

function Card(props) {
    return (
       <section className="card">
        <img className="card__image" src={props.photo} alt="image" />
        <div className="card__info">
        <p className="card__photographer">{props.photographer}</p>
        </div>
        <div className="card__tags">
        <p className="card__tag">{props.tags}</p>
        </div>
       </section>
    );
}

export default Card;