import "./Card.css";

const Card = ({ card, handleClick, flipped, disabled }) => {
  const onClick = () => {
    if (!disabled && !flipped) {
      //通過檢查 !flipped，確保已經翻開的卡片不會再觸發點擊事件
      handleClick(card);
    }
  };
  return (
    <div className={`card ${flipped ? "flipped" : ""}`} onClick={onClick}>
      <div className="image-container front">
        <img
          src={card.src}
          alt="cat pic"
          width={200}
          height={300}
          className="image-content"
        />
      </div>
      <div className="image-container rear">
        <img
          //src="/corey/new-back.jpg"
          src="rear.svg"
          alt="card back"
          width={200}
          height={300}
          className="image-content"
        />
      </div>
    </div>
  );
};

export { Card };
