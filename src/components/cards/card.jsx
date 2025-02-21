import "../cards/card.scss";
import { Link } from "react-router-dom"; // Import Link

function Card(props) {
  return (
    <section className="card">
      <section className="card__image-container">
        {/* Wrap image with Link to navigate to the PhotosPage */}
        
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
