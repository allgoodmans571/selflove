import React from "react";
import Background from "./Background";
import AtomicIcon from "../images/atomic.svg";

function StartPage() {
  return (
    <div className="conteiner">
      <Background />
      <div className="title">
        <h1>CROC</h1>
        <h2>Твой LoveInsight</h2>
      </div>

      <div className="startPageTitle">
        <p>
          <strong>Генерируй свой инсайт!</strong>
        </p>
        <div>
          <button
            className="startButton"
            style={{
              backgroundImage: `url(${AtomicIcon})`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default StartPage;
