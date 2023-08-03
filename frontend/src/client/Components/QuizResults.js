// QuizResults.js
import React from "react";

const QuizResults = (props) => {
  return (
    <div className="container quiz--results">
      <h3>
        Your score is: {props.score} out of {props.totalScore}
      </h3>
      <button className="quiz--btn fs-3" onClick={props.tryAgain}>
        Retry
      </button>
    </div>
  );
};

export default QuizResults;
