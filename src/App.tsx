import { useState } from "react";
import "./App.css";
import RetakeCard from "./Card/RetakeCard";
import { Card } from "./Card/Card";

function App() {
  const [screen, setScreen] = useState(0);
  const [score, countScore] = useState(0);

  return (
    <>
      {screen === 0 ? (
        <Card setScreen={setScreen} countScore={countScore} score={score} />
      ) : (
        <RetakeCard setScreen={setScreen} score={score} countScore={countScore}/>
      )}
    </>
  );
}

export default App;
