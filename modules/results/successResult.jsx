import React from "react";
import correctLogo from "../../images/correct.png";

function SuccessResult(props) {
  return (
    <div>
      <img src={correctLogo} className="resultLogo" alt="Correct Logo"></img>
      <p className="mt-1">Correct!</p>
      <div className="col score text-light">
        You have earned{" "}
        <span className="text-success font-weight-bold">100</span> Points <br />{" "}
        Total: {props.score} Points
      </div>
    </div>
  );
}

export default SuccessResult;
