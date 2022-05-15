import "./SingleCard.css";
import img7 from "../img/cover.jpg";

export default function SingleCard({ card }) {
    const handleClick = ()=>{

    }
  return (
    <div className="card">
      <div>
        <img className="front" src={card.src} alt="card front" />
        <img className="back" src={img7} onClick={handleClick} alt="card back" />
      </div>
    </div>
  );
}
