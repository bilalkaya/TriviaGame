import React from "react";
import timeLogo from "../../images/time.png";

function TimeupResult(props) {
  return (
    <div>
      <img src={timeLogo} className="resultLogo" alt="Time Up Logo"></img>
      <p className="mt-1">Time is UP!</p>
      <div className="col score text-light">
        You ended up the game with{" "}
        <span className="text-success font-weight-bold">{props.score} </span>
        Points
      </div>
    </div>
  );
}

export default TimeupResult;
