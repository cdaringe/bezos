import React from "react";
import "./Coin.css";

/*
    <div
     
 className={`coin ${isAnimating ? "coin-spin" : ""}`}
    >
      
      
    </div>

*/
export default function Coin() {
  const [isAnimating, setIsAnimating] = React.useState(false);
  return (
    <div
      className="scene scene--card"
      onMouseOver={() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 1000);
      }}
    >
      <div className={`card ${isAnimating ? "is-flipped" : ""}`}>
        <div className="card__face card__face--front">
          <img src="coin.png" alt="coin" />
        </div>
        <div className="card__face card__face--back">
          <img src="bezos.png" alt="bezos" />
        </div>
      </div>
    </div>
  );
}
