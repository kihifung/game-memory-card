import "./Card.css";

const Card = ({ card, handleClick, flipped }) => (
  <div
    className={`card ${flipped ? "flipped" : ""}`}
    onClick={() => {
      handleClick(card);
    }}
  >
    <img src={card.src} alt="cat pic" width="200" className="front" />
    <img src="rear.svg" alt="card back" width="200" className="rear" />
  </div>
);

export { Card };
