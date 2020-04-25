import React from "react";
import wrongLogo from "../../images/quit.png";

function FailureResult(props) {
  return (
    <div>
      <img src={wrongLogo} className="resultLogo" alt="Wrong Logo"></img>
      <p className="mt-1">Wrong!</p>
      <div className="col score text-light">
        You ended up the game with{" "}
        <span className="text-success font-weight-bold">{props.score}</span>{" "}
        Points
      </div>
    </div>
  );
}

export default FailureResult;
