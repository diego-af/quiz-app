import "./index.css";
import QuizImage from "../../assets/Questions-pana.png";
import { useContext } from "react";

import { QuizCcontext } from "../../context/provider";

const BeginQuiz = () => {
  const { setGameSatage, question } = useContext(QuizCcontext);
  return (
    <div className="content">
      <div className="content-initial">
        <h1> Bíblia Expert! Descubra se você tem lido a Bíblia</h1>
        <span
          style={{
            color: "#fafafa",
            fontSize: "1.2rem",
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          {" "}
          São {question.length} perguntas para você responder!
        </span>
        <img src={QuizImage} alt="Iimagem inicial do quiz" />

        <button onClick={() => setGameSatage(1)}>Iniciar quiz</button>
      </div>
    </div>
  );
};

export { BeginQuiz };
