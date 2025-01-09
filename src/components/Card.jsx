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
      <img src={card.src} alt="cat pic" width="200" className="front" />
      <img src="rear.svg" alt="card back" width="200" className="rear" />
    </div>
  );
};

export { Card };
