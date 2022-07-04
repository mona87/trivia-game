/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const questionStyle = () =>
  css({
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
    "& .question": {
      display: "flex",
      padding: "10px, 0",
      textAlign: "left",
      marginTop: 16
    },
    "& .score": {
      display: "flex",
      flexDirection: "row",
      border: "none",
      width: "100%",
      justifyContent: "space-between",
      fontWeight: 700,
      fontSize: 20
    },
    "@media (max-width: 500px)": {
      "& .score": {
        flexDirection: "column",
        marginTop: 20,
        height: 60,
        textAlign: "left"
      },
      "&  > .score > span:last-child": {
        fontSize: 18
      }
    }
  });

const TriviaQuestion = ({
  currentQuestion,
  questions,
  questionIndex,
  score
}: {
  currentQuestion: string;
  questions: number;
  questionIndex: number;
  score: number;
}) => {
  return (
    <div css={questionStyle()}>
      <div className="score">
        <span>
          Question {questionIndex} of {questions}
        </span>
        <span>Score {score}</span>
      </div>
      <span className="question">{currentQuestion}</span>
    </div>
  );
};

export default TriviaQuestion;
