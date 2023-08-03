import React, { useState } from "react";
import { QuizData } from "../data/QuizQuestions";
import QuizResults from "./QuizResults";

const Quiz = ({ display }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption(0);
    } else {
      setShowResult(true);
    }
  };

  const updateScore = () => {
    if (clickedOption === QuizData[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const resetAll = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setClickedOption(0);
    setScore(0);
  };

  const renderQuizContent = () => {
    if (showResult) {
      return (
        <QuizResults
          score={score}
          totalScore={QuizData.length}
          tryAgain={resetAll}
        />
      );
    } else {
      return (
        <div className="container quiz--container">
          <div className="row quiz--question">
            <h4>
              {currentQuestion + 1}.{QuizData[currentQuestion].question}
            </h4>
          </div>
          <div className="row quiz--options--image">
            <div className="col d-flex flex-column justify-content-evenly w-75">
              {QuizData[currentQuestion].options.map((option, index) => {
                const isClicked = clickedOption === index + 1;
                const optionClass = isClicked ? "checked" : "";
                return (
                  <button
                    className={`quiz--optionbtn ${optionClass}`}
                    key={index}
                    onClick={() => {
                      setClickedOption(index + 1);
                    }}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            <img
              className="col quiz--image"
              src="../Images/Quiz.svg"
              alt="quiz-pic"
            />
          </div>
          <button
            className="row d-flex quiz--btn fs-3"
            onClick={changeQuestion}
          >
            Next
          </button>
        </div>
      );
    }
  };

  return <div className={display}>{renderQuizContent()}</div>;
};

export default Quiz;
