import React, { useContext } from "react";
import { QuizCcontext } from "../../context/provider";

import "./index.css";

const QuizAnswers = () => {
  const {
    question,
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
    setGameSatage,
    countCorrect,
    setCountCorrect,
    countInorrect,
    setCountIncorrect,
  } = useContext(QuizCcontext);

  function verifyQuestion(i, item) {
    console.log(item);
    setItenClicked(i);

    if (
      question[currentQuestion].resposta ===
      question[currentQuestion].options[i]
    ) {
      setClicked(true);
      setCountCorrect(countCorrect + 1);
    } else {
      setCountIncorrect(countInorrect + 1);
    }
  }

  function changeQuestion() {
    console.log(currentQuestion);
    console.log(question.length);

    if (currentQuestion >= question.length - 1) {
      return console.log("acabou");
    }
    setCurrentQuestion(currentQuestion + 1);
    setItenClicked(null);
  }

  return (
    <div className="content">
      <div className="content-question">
        <span>{question[currentQuestion].titulo}</span>
      </div>

      <div className="content-option">
        {question[currentQuestion].options.map((item, i) => (
          <div className={`option-item`} key={item}>
            <button
              style={{
                background: itemClicked === i ? "#007200" : "",
                opacity: itemClicked !== i ? "0.7" : "",
              }}
              onClick={() => verifyQuestion(i, item)}
            >
              {item}
            </button>
          </div>
        ))}
      </div>

      <div className="button-content">
        {currentQuestion >= question.length - 1 ? (
          <button onClick={() => setGameSatage(2)}>Finalizar jogo</button>
        ) : (
          <button onClick={() => changeQuestion()}>Próxima pergunta</button>
        )}
      </div>
    </div>
  );
};

export { QuizAnswers };
