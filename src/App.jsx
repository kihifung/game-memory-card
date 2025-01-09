import "./App.css"
import { useEffect, useState } from "react"
//牌卡陣列
const srcArray = [
  {src: "black-1.jpg", matched: false },
  {src: "black-2.jpg", matched: false },
  {src: "black-3.jpg", matched: false },
  {src: "yellow-1.jpg", matched: false },
  {src: "yellow-2.jpg", matched: false },
  {src: "yellow-3.jpg", matched: false }
]


function App() {
  const [cards, setCards] = useState([])
  //洗牌
  const shuffleCards = () => {
    const shuffledCards = [...srcArray, ...srcArray]
      .sort(() => Math.random() - 0.5)
      .map((card)=>({ ...card, id: Math.random()}))

    setCards(shuffledCards)
  }

  useEffect(() => {
    shuffleCards()
  }, [])
  useEffect(() => {
    console.log(cards)
  }, [cards])

  return (
    <>
      <h1 className="heading">紙牌遊戲</h1>
      <div className="flex">
        <button className="restart">New Game</button>
      </div>
      <div className="container"></div>
    </>
  )
}

export default App
