import React from "react";
import MouseSpeed from "./mouse-speed";
import Coin from "./Coin";
import { debounce } from "lodash";

const { pow, sqrt } = Math;
const playbackScale = (x: number) => {
  if (x >= 50) x = 50;
  let nextRate = 2 * (x / 50);
  if (nextRate < 0.25) nextRate = 0.25;
  return nextRate;
};

export default function CoinZone({ bezos }: { bezos: HTMLAudioElement }) {
  const playingRef = React.useRef(false);
  React.useEffect(() => {
    const mouz = new MouseSpeed(
      debounce(
        ({ isPaused }) => {
          const { speedX, speedY } = mouz;
          const velocity = sqrt(pow(speedX, 2) + pow(speedY, 2));
          if (isPaused) {
            playingRef.current = false;
            bezos.playbackRate = 0;
          } else {
            if (!velocity) return;
            const rate = playbackScale(velocity);
            if (!playingRef.current) bezos.play();
            bezos.playbackRate = rate;
          }
        },
        20,
        { leading: true, maxWait: 100 }
      )
    );
    mouz.init();
  }, [bezos]);
  return (
    <>
      {[...new Array(10 * 10)].map((_, i) => (
        <Coin key={i} />
      ))}
    </>
  );
}
