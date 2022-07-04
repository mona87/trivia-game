/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ChangeEvent } from "react";

const answerStyle = () =>
  css({
    display: "grid",
    gridGap: 16,
    gridTemplateColumns: "repeat(2,1fr)",
    textAlign: "left",
    marginTop: 16,
    "@media (max-width: 500px)": {
      gridTemplateColumns: "repeat(1,1fr)"
    }
  });

const choiceStyle = (isCorrect: boolean, isDisabled: boolean) =>
  css({
    display: "flex",
    color: !isCorrect && isDisabled ? "gray" : "2d2d2d",
    width: "100%",
    alignItems: "center",
    lineHeight: "24px",
    transition: "color 0.3s",
    "& > label": {
      display: "flex",
      pointEvents: !isCorrect && isDisabled ? "none" : "auto",
      cursor: "default"
    },
    "& > span": {
      display: "flex",
      cursor: "default",
      paddingLeft: 12
    }
  });

const radioStyle = (isCorrect: boolean, isDisabled: boolean) =>
  css({
    appearance: "none",
    backgroundColor: "#ffffff",
    margin: "0",
    color: "#065FB1",
    width: "24px",
    height: "24px",
    border: "1px solid #C0C0C0",
    borderRadius: "50%",
    display: "grid",
    placeContent: "center",
    cursor: isDisabled ? "default" : "pointer",
    "&::before": {
      content: "''",
      width: "24px",
      height: "24px",
      borderRadius: "50%",
      transform: "scale(0)",
      transition: "120ms transform ease-in-out",
      boxShadow: "inset 20px 40px #065FB1"
    },
    "&:checked::before ": {
      transform: "scale(.5)"
    }
  });

const TriviaAnswers = ({
  isDisabled,
  handleAnswer,
  currentAnswer,
  answerChoices
}: {
  isDisabled: boolean;
  handleAnswer: (e: ChangeEvent) => void;
  currentAnswer: string;
  answerChoices: string[];
}) => {
  return (
    <div className="answers" css={answerStyle()}>
      {answerChoices.map((value: string, index: number) => {
        return (
          <div
            css={choiceStyle(currentAnswer === value, isDisabled)}
            key={`questions[questionNumber].id - ${index}`}
          >
            <label htmlFor={`answer-${index}`}>
              <input
                css={radioStyle(currentAnswer !== value, isDisabled)}
                aria-label={value}
                id={`answer-${index}`}
                type="radio"
                disabled={isDisabled && currentAnswer !== value}
                value={value}
                checked={currentAnswer === value}
                onChange={(e) => handleAnswer(e)}
              />
            </label>
            <span>{value}</span>
          </div>
        );
      })}
    </div>
  );
};

export default TriviaAnswers;
