import "./index.css";
import QuizImage from "../../assets/Questions-pana.png";
import { useContext } from "react";
import { QuizCcontext } from "../../context/provider";

const EndGameQuestion = () => {
  const {
    countCorrect,
    countInorrect,
    setCurrentQuestion,
    setClicked,
    setGameSatage,
    setCountCorrect,
    setCountIncorrect,
    setItenClicked,
  } = useContext(QuizCcontext);

  function resetGame() {
    setGameSatage(0);
    setCurrentQuestion(0);
    setCountCorrect(0);
    setCountIncorrect(0);
    setItenClicked(null);
  }
  return (
    <div className="content">
      <div className="content-initial">
        <h1> Jogo Finalizado !</h1>

        <span
          style={{ color: "#fafafa", fontSize: "1.2rem", fontWeight: "400" }}
        >
          Sua Pontuação foi de {countCorrect} ponto(s)
        </span>
        <span style={{ color: "#fafafa", fontSize: "1rem", fontWeight: "400" }}>
          Você errou {countInorrect} questões!
        </span>
        <img src={QuizImage} alt="Iimagem inicial do quiz" />

        <button onClick={() => resetGame()}>Voltar ao inicio</button>
      </div>
    </div>
  );
};

export { EndGameQuestion };
