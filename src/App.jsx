import { useEffect, useState } from "react";
import "./App.css";
import { Card } from "./components/Card";

//牌卡陣列
const srcArray = [
  { src: "black-1.jpg", matched: false },
  { src: "black-2.jpg", matched: false },
  { src: "black-3.jpg", matched: false },
  { src: "yellow-1.jpg", matched: false },
  { src: "yellow-2.jpg", matched: false },
  { src: "yellow-3.jpg", matched: false },
];

function App() {
  const [cards, setCards] = useState([]); // 紀錄所有卡片
  const [firstChoice, setFirstChoice] = useState(null); // 紀錄第一次翻牌的結果
  const [secondChoice, setSecondChoice] = useState(null); // 紀錄第二次翻牌的結果
  const [disabled, setDisabled] = useState(false);

  // 比對翻牌結果
  const handleClick = (card) => {
    if (disabled) return; //防止在禁用狀態下點擊

    if (card === firstChoice) {
      return; // 防止點擊同一張卡片兩次
    }

    if (!firstChoice) {
      setFirstChoice(card);
    } else {
      setSecondChoice(card);
    }
  };
  // 重整 重置
  const resetTurn = () => {
    setFirstChoice(null);
    setSecondChoice(null);
    setDisabled(false);
  };

  // 清除翻牌結果
  useEffect(() => {
    if (firstChoice && secondChoice) {
      setDisabled(true);
      if (firstChoice.src === secondChoice.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === firstChoice.src) {
              return { ...card, matched: true };
            }
            return card;
          });
        });
        resetTurn();
      } else {
        setTimeout(() => {
          resetTurn();
        }, 1000);
      }
    }
  }, [firstChoice, secondChoice]);

  // useEffect(() => {
  //   console.log(cards);
  // }, [cards]);

  //洗牌
  const shuffleCards = () => {
    const shuffledCards = [...srcArray, ...srcArray]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setFirstChoice(null);
    setSecondChoice(null);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <>
      <h1 className="heading">紙牌遊戲</h1>
      <div className="flex">
        <button className="restart" onClick={shuffleCards}>
          New Game
        </button>
      </div>
      <div className="container">
        {cards.map((card) => (
          <Card
            card={card}
            key={card.id}
            handleClick={handleClick}
            flipped={
              card.matched || card === firstChoice || card === secondChoice
            }
            disabled={disabled}
          />
        ))}
      </div>
    </>
  );
}

export default App;
