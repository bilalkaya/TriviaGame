import React from "react";
import Timer from "./timer";
import jokerLogo from "../images/50.png";

function Question(props) {
  return (
    <div>
      <header className="bg-info shadow p-2">
        <div className="container ">
          <div className="row justify-content-around text-center">
            <div className="col qnumber text-light font-weight-bold">
              Question {props.curIndex + 1}/10 {/* Question Number*/}
            </div>
            <div className="col score text-light font-weight-bold">
              {props.score} Points {/* Score */}
            </div>
            <div className="col timeLeft text-light font-weight-bold">
              {<Timer timeUP={props.timeUP} />} {/* Timer */}
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="text-center text-white m-4">
            <span className="question px-2">{props.curQuestion.question}</span>
          </div>

          {/* Show all choices */}
          <div className="row justify-content-center">
            <div className="col-6 col-sm-4">
              {props.choices.map((item, index) => {
                return (
                  <button
                    type="button"
                    className="btn btn-info btn-block mb-3"
                    key={index}
                    onClick={props.checkAnswer}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Show Joker Button */}
          <div className="row justify-content-center">
            <div className="col-6 col-sm-4 text-center">
              {!props.isJokerUsed && (
                <div>
                  <input
                    type="image"
                    alt="Joker Button"
                    className="mt-3 jokerLogo"
                    src={jokerLogo}
                    onClick={props.useJoker}
                  />
                  <p className="text-light font-weight-bold">
                    You have only one joker!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Question;
