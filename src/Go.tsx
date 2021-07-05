import React from "react";
import "./Go.css";

export default function Go(props: React.HTMLProps<HTMLButtonElement>) {
  const type: "button" = "button";
  return (
    <div className="go">
      <div>
        <button {...props} type={type}>
          Click to profit!
        </button>
        <p>
          Use your mouse to control
          <br /> playback speed :)
        </p>
      </div>
    </div>
  );
}
