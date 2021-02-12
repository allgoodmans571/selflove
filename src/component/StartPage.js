import React from "react";
import Background from "./Background";
import AtomicIcon from "../images/atomic.svg";

function StartPage() {
  return (
    <div className="conteiner">
      <div className="title">
        <h1>CROC</h1>
        <h2>Твой LoveInsight</h2>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          color: "#ff645a",
          height: "25rem",
          maxWidth: "70rem",
          margin: "16% auto auto auto",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "55px",
          }}
        >
          <strong>Генерируй свой инсайт!</strong>
        </p>
        <div>
          <button
            className="startButton"
            style={{
              position: "relative",
              backgroundImage: `url(${AtomicIcon})`,
              backgroundSize: "100px 200px",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              // width: "100%",
              // height: "100%",
            }}
          />
        </div>
      </div>
      <Background />
    </div>
  );
}

export default StartPage;
