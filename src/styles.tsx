/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const textColor = "#2D2D2D";

export const wrapper = () =>
  css({
    display: "flex",
    lineHeight: 1.5,
    padding: "0 20px",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "column",
    height: "100%",
    background:
      "linear-gradient(0deg, rgba(6,84,170,1) 0%, rgba(0,212,255,1) 100%)",
    fontFamily: "Roboto"
  });

export const contentStyle = () =>
  css({
    minHeight: 380,
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    maxWidth: 808,
    width: "100%",
    padding: "56px 48px 48px 48px",
    borderRadius: 4,
    backgroundColor: "#ffffff",
    filter: "drop-shadow(0 0 2px  gray)"
  });

export const textStyle = (correctAnswer?: boolean) =>
  css({
    color: correctAnswer ? "#065927" : "#FF0000",
    fontSize: 16,
    textAlign: "left",
    fontWeight: 700,
    marginTop: 25,
    "@media (max-width: 500px)": {
      alignSelf: "center"
    }
  });
