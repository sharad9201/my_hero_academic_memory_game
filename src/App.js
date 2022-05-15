import "./App.css";
import React, { useState } from "react";

const cardImages = [
  { "src": "/img/almight1.jpg" },
  { "src": "/img/baku1.jpg" },
  { "src": "/img/deku1.png" },
  { "src": "/img/frogie1.jpg" },
  { "src": "/img/shoto1.jpg" },
  { "src": "/img/ochaku.jpg" },
];


function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };
  console.log(cards, turns);
  return (
    <div className="App">
      <h1>My Hero Acedemia</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <div>
              <img className="front" src={card.src} alt="card front" />
              <img className="back" src="/img/cover.jpg" alt="card back" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
