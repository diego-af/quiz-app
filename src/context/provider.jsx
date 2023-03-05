import React, { createContext, useState } from "react";
import Questions from "../data/questions.json";

export const QuizCcontext = createContext({});

export default function QuizProvider({ children }) {
  const quizCondition = ["INITIAL", "START", "END"];
  const [gameStage, setGameSatage] = useState(0);

  const [answerCorrect, setAnswerCorrect] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questionAnswer, setQuestionAnswer] = useState(false);

  const [question, setQuestion] = useState(Questions);
  const [back, setBack] = useState("");
  const [itemClicked, setItenClicked] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [endGame, setEndGame] = useState(false);
  const [countCorrect, setCountCorrect] = useState(0);
  const [countInorrect, setCountIncorrect] = useState(0);

  return (
    <QuizCcontext.Provider
      value={{
        quizCondition,
        question,
        setQuestion,
        currentQuestion,
        setCurrentQuestion,
        answerCorrect,
        setAnswerCorrect,
        questionAnswer,
        setQuestionAnswer,
        back,
        setBack,
        itemClicked,
        setItenClicked,
        clicked,
        setClicked,
        endGame,
        setEndGame,
        gameStage,
        setGameSatage,
        countCorrect,
        setCountCorrect,
        countInorrect,
        setCountIncorrect,
      }}
    >
      {children}
    </QuizCcontext.Provider>
  );
}
