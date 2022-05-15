import "./App.css";
import React, { useState } from "react";
import img1 from "./img/almight1.jpg";
import img2 from "./img/baku1.jpg";
import img3 from "./img/deku1.jpg";
import img4 from "./img/frogie1.jpg";
import img5 from "./img/shoto1.png";
import img6 from "./img/ochaku.jpg";
import SingleCard from './components/SingleCard.js';

const cardImages = [
  { src: img1 },
  { src: img2 },
  { src: img3 },
  { src: img4 },
  { src: img5 },
  { src: img6 },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)


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
          <SingleCard key={card.id} card={card}/>
        ))}
      </div>
    </div>
  );
}

export default App;
