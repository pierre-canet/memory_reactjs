import "./style.css";
//isFlipped => vérifie que la carte est retournée
/*isMatched => vérifie si les deux cartes sont de la même paire, si oui elle restent visibles,
sinon on les retourne*/
//handleChoice => ?
const Card = ({ card, isFlipped, isMatched, handleChoice }) => {
  return (
    <div
      className={`card ${isFlipped || isMatched ? "flipped" : ""}`}
      onClick={() => handleChoice(card)}
    >
      <div className="card-inner">
        <img
          src={`/${card.icon}`}
          alt={card.name}
          className="frontSide"
        />
        <img
          src="/backside.jpg"
          alt="Dos de carte"
          className="backSide"
        />
      </div>
    </div>
  );
};

export default Card;
