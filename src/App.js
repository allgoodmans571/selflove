import { useState, useContext } from "react";
import Context from "./context";
import SecondPage from "./component/SecondPage";
import StartPage from "./component/StartPage";

function App() {
  const [screen, setScreen] = useState(0);
  const screenArr = [<StartPage />, <SecondPage />];

  function setActiveScreen(i) {
    setScreen(i);
  }

  return (
    <div>
      <Context.Provider value={{ setActiveScreen }}>
        {screenArr[screen]}
      </Context.Provider>
    </div>
  );
}

export default App;
