import React, { useContext } from "react";
import Background from "./Background";
import AtomicIcon from "../images/atomic.svg";
import Context from "../context";

function StartPage() {
  const { setActiveScreen } = useContext(Context);

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
            onClick={() => setActiveScreen(1)}
          />
        </div>
      </div>
    </div>
  );
}

export default StartPage;
