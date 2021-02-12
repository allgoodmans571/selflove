import React, { useContext, useState, useEffect } from "react";
import Background from "./Background";
import Context from "../context";

function SecondPage() {
  const { setScreen } = useContext(Context);
  const [tips, setTips] = useState(0);
  const [image, setImage] = useState("null");

  useEffect(() => {
    setTips(getRndInteger(0, 5));
  }, []);

  const tip = [
    "Больше читать",
    "Всегда учиться новому",
    "Быть в кругу своих",
    "Заниматься собой",
    "Иногда ставить на паузу",
    "Достигать желаемого",
  ];
  const tipLovi = [
    " — подборку книг из библиотеки КРОК",
    " — подборку обучения в CROC LMS",
    " — посоветуй коллегу в BestHunter и получи подарок",
    " — тренировки по вторникам и четвергам в 19:30 от FItMost",
    " — приложение Meditopia или смотри запись медитации КРОК",
    " — вебинар о формировании привычек 18 февраля",
  ];
  const tipURL = [
    "https://jive.croc.ru/docs/DOC-237716",
    "https://lms.croc.ru/trainingprogram/20",
    "https://jive.croc.ru/community/knowledge/everyday/person/best-hunter",
    "https://hrcroc.typeform.com/to/TUCafk",
    "https://apps.apple.com/ru/app/meditopia-%D1%81%D0%BE%D0%BD-%D0%B8-%D0%BC%D0%B5%D0%B4%D0%B8%D1%82%D0%B0%D1%86%D0%B8%D1%8F/id1190294015",
    "https://lms.croc.ru/enrollmenow/16299902ca6efdcd81fa6fcd5983431b8f81",
  ];

  async function handleSubmit() {
    window.open(`http://217.73.58.220:8080/${tipN[tips]}`);
  }

  const tipN = ["books", "CROCLMS", "BH", "fitmost", "Meditopia", "webinar18"];

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return (
    <div className="conteiner">
      <Background />
      <div className="title">
        <h1>CROC</h1>
        <h2>Твой LoveInsight</h2>
      </div>

      <div className="content">
        <p id="img">
          <b>{tip[tips]}</b> <br />
          <i>
            <a href={tipURL[tips]}>Лови!</a> {tipLovi[tips]}
          </i>
        </p>
        <div className="secondButtonHandler">
          <button
            onClick={() => {
              handleSubmit();
            }}
          >
            <strong
              style={{
                color: "#4A61E4",
              }}
            >
              Поделиться в соц. сетях
            </strong>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
