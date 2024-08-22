import React from "react";
import "./Card.css";

interface IRetakeCard {
  setScreen: (screen: number) => void;
  score: number;
  countScore: (score: number) => void;
}
const RetakeCard: React.FC<IRetakeCard> = ({
  setScreen,
  score,
  countScore,
}) => {
  const handleClick = () => {
    setScreen(0);
    countScore(0);
  };

  return (
    <div className="card2">
      <h3>You Scored {score}/200 in this Quiz</h3>
      <button onClick={handleClick} className="button1">
        Retake
      </button>
    </div>
  );
};

export default RetakeCard;
