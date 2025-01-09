const Card = ({ card }) => (
  <div>
    <img src={card.src} alt="cat pic" width="200"></img>
    <img src="rear.svg" alt="card back" width="200" />
  </div>
);

export { Card };
