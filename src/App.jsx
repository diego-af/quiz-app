import { useState, useContext, useEffect } from "react";
import "./app.css";

import { BeginQuiz } from "./components/BeginQuiz";
import { EndGameQuestion } from "./components/EndGameQuestion";
import { QuizAnswers } from "./components/QuestionAnswer";
import { QuizCcontext } from "./context/provider";

function App() {
  const {
    question,
    setQuestion,
    currentQuestion,
    setCurrentQuestion,
    gameStage,
    setGameSatage,
  } = useContext(QuizCcontext);

  return (
    <div className="app">
      {gameStage === 0 && <BeginQuiz />}
      {gameStage === 1 && <QuizAnswers />}
      {gameStage === 2 && <EndGameQuestion />}
    </div>
  );
}

export default App;
