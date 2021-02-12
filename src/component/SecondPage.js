import React from "react";
import Background from "./Background";

function SecondPage() {
  return (
    <div className="conteiner">
      <Background />
      <div className="title">
        <h1>CROC</h1>
        <h2>Твой LoveInsight</h2>
      </div>

      <div className="content">
        <p>
          Больше читать — лови (активная ссылка) подборку книг из библиотеки
          КРОК
        </p>
        <div className="secondButtonHandler">
          <button>
            <strong
              style={{
                color: "#4A61E4",
              }}
            >
              Поделись в соц. сетях!
            </strong>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
