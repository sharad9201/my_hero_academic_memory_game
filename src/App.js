import './App.css';

const cardImages = [
 { "src": "\img\almight1.jpg"},
 { "src": "\img\baku1.jpg"},
 { "src": "\img\deku1.png"},
 { "src": "\img\frogie1.jpg"},
 { "src": "\img\shoto1.jpg"},
 { "src": "\img\ochaku.jpg"}

]
function App() {

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
    .sort(()=> Math.random(1))
  }
  return (
    <div className="App">
     <h1>My Hero Acedemia</h1>
     <button>New Game</button>
    </div>
  );
}

export default App;
