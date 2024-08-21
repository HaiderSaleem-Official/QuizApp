import React, { useState } from "react";
import Questions from "./Data";
import "./Card.css";

interface cardProps {
  setScreen: (screen: number) => void;
  countScore: (score: number) => void;
  score: number;
}

export const Card: React.FC<cardProps> = ({ setScreen, countScore, score }) => {
  const [count, setCount] = useState(0);

  const increment = (value: number) => {
    setCount(count + 1);
    if (Questions[count].Answer[value].isCorrect == "True") {
      countScore(score + 10);
    }
    if (count == Questions.length - 1) {
      setScreen(1);
    }
  };

  return (
    <div className="card">
      <div>
        <h2>Question # {count + 1}/10</h2>
        <h5>{Questions[count].Question}</h5>
      </div>
      <div className="options">
        <button className="button" onClick={() => increment(0)}>
          {Questions[count].Answer[0].value}
        </button>
        <button className="button" onClick={() => increment(1)}>
          {Questions[count].Answer[1].value}
        </button>
        <button className="button" onClick={() => increment(2)}>
          {Questions[count].Answer[2].value}
        </button>
        <button className="button" onClick={() => increment(3)}>
          {Questions[count].Answer[3].value}
        </button>
      </div>
    </div>
  );
};
