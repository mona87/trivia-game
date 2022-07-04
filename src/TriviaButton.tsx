/** @jsxImportSource @emotion/react */
// import { buttonStyle } from "./styles";
import { MouseEvent } from "react";
import { css } from "@emotion/react";

const buttonStyle = () =>
  css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "start",
    minHeight: 44,
    width: 145,
    backgroundColor: "#065FB1",
    color: "white",
    fontWeight: 700,
    borderRadius: 8,
    fontSize: 16,
    border: 0,
    marginTop: 24,
    cursor: "pointer",
    filter: "drop-shadow(0 0 2px darkgray)",
    "&:hover": {
      backgroundColor: "rgba(6,95,177, 0.8)",
      transition: "background-color 0.3s"
    },
    "@media (max-width: 500px)": {
      alignSelf: "center"
    }
  });

const TriviaButton = ({
  handleButton,
  buttonText
}: {
  handleButton?: (b: MouseEvent) => void;
  buttonText: string;
}) => {
  return (
    <button css={buttonStyle()} onClick={handleButton}>
      {buttonText}
    </button>
  );
};

export default TriviaButton;
