/** @jsxImportSource @emotion/react */
import TriviaButton from "./TriviaButton";
import { MouseEvent, useEffect, useState } from "react";
import { textColor } from "./styles";
// import { ReactComponent as Logo } from "./IndeedLogo.svg";
import { ReactComponent as Logo } from "./Medal.svg";

import { css } from "@emotion/react";

const finalStyle = () =>
  css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: textColor,
    "& .message": {
      fontSize: 36,
      fontWeight: 700,
      display: "inline-block"
    },
    "& .result": {
      color: "#2D2D2D",
      marginTop: 18,
      display: "inline-block"
    },
    "& .high-score": {
      color: "#2D2D2D",
      marginTop: 16,
      display: "inline-block"
    },
    "& .trivia-button": {
      display: "flex",
      justifyContent: "center"
    }
  });

type Score = {
  date: string;
  score: number;
  questions: number;
};

const FinalScore = ({
  setGameOver,
  score,
  questions
}: {
  setGameOver: (b: boolean) => void;
  score: number;
  questions: number;
}) => {
  const handleButton = (e: MouseEvent) => {
    setGameOver(false);
  };

  const [localScores, setLocalScores] = useState<Score[]>(
    JSON.parse(window.localStorage.getItem("scores") || "[{}]")
  );
  const [maxScore, setMaxScore] = useState<Score>();

  const formatDate = () => {
    const d = new Date();
    const date = `${d.getMonth()}/${d.getDate()}/${d.getFullYear()}`;
    return date;
  };

  useEffect(() => {
    if (!localScores) {
      window.localStorage.setItem(
        "scores",
        JSON.stringify([{ date: formatDate(), score, questions }])
      );
      setLocalScores([{ date: formatDate(), score, questions }]);
    } else {
      window.localStorage.setItem(
        "scores",
        JSON.stringify([
          ...localScores,
          { date: formatDate(), score, questions }
        ])
      );
      const max = localScores.reduce((max: Score, item: Score) =>
        max.score > item.score ? max : item
      );
      console.log("max", max);
      setMaxScore(max);
    }
  }, [questions, score, localScores]);

  console.log("local", localScores);
  console.log(JSON.parse(window.localStorage.getItem("scores") || "{}"));
  return (
    <div css={finalStyle()}>
      <div css={{ minHeight: 120 }}>
        <Logo css={{ width: 100 }} />
      </div>
      <span className="message">You're a Trivia Master!</span>
      <span className="result">
        You got {score} out of {questions} questions right!
      </span>
      <span className="high-score">
        Your best score so far was {maxScore?.score || score} out of{" "}
        {maxScore?.questions || questions} questions which you got on{" "}
        {maxScore?.date || formatDate()}.
      </span>
      <div className="trivia-button">
        <TriviaButton handleButton={handleButton} buttonText="Play Again!" />
      </div>
    </div>
  );
};

export default FinalScore;
