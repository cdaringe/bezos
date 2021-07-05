import React from "react";
import CoinZone from "./CoinZone";
import Go from "./Go";

const bezos = new Audio("bezos.mp3");
bezos.loop = true;

function App() {
  const [isGoTime, setGoTime] = React.useState(false);
  const [isCanPlay, setIsCanPlay] = React.useState(false);
  bezos.addEventListener("canplay", (event) => setIsCanPlay(true));
  return (
    <div className="App">
      {isGoTime ? (
        isCanPlay ? (
          <CoinZone bezos={bezos} />
        ) : (
          <span>loading {bezos.readyState} </span>
        )
      ) : (
        <Go onClick={() => setGoTime(true)} />
      )}
    </div>
  );
}

export default App;
