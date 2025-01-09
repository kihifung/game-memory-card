import "./Card.css";

const Card = ({ card }) => (
  <div className="card">
    <img src="rear.svg" alt="card back" width="200" className="rear" />
    <img src={card.src} alt="cat pic" width="200" className="front" />
  </div>
);

export { Card };
