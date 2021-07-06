import React from "react";
import CoinZone from "./CoinZone";
import Go from "./Go";

const BEZOS_URL = "bezos.mp3";
const bezos = new Audio(BEZOS_URL);
bezos.controls = true;
bezos.loop = true;
bezos.src = BEZOS_URL;

function App() {
  const [isGoTime, setGoTime] = React.useState(false);
  const [isCanPlay, setIsCanPlay] = React.useState(false);
  bezos.addEventListener("canplay", (event) => setIsCanPlay(true));
  // React.useEffect(() => {
  //   document.body.appendChild(bezos);
  //   (window as any).bezos = bezos;
  // }, []);
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
