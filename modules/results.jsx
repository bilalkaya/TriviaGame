import React from "react";
import { Link } from "react-router-dom";
import SuccessResult from "./results/successResult";
import FailureResult from "./results/failureResult";
import TimeupResult from "./results/timeupResult";

function Results(props) {
  return (
    <div>
      <header className="bg-info shadow p-2">
        <div className="container ">
          <div className="row justify-content-around text-center">
            <div className="col qnumber text-light">
              {props.correct && (
                <span className="font-weight-bold">
                  Question {props.curIndex}/10
                </span>
              )}
              {!props.correct && (
                <span className="font-weight-bold">Game Over!</span>
              )}
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="container ">
          <div className="text-center text-white  m-5">
            <div className="question p-2">
              {/* Correct Answer */}
              {props.correct && !props.isTimeUP && (
                <SuccessResult score={props.score} />
              )}
              {/* Wrong Answer */}
              {!props.correct && !props.isTimeUP && (
                <FailureResult score={props.score} />
              )}
              {/* Time is UP */}
              {props.isTimeUP && <TimeupResult score={props.score} />}
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-6 col-sm-4">
              {/* Correct Answer = Next Question */}
              {props.correct && !props.isTimeUP && (
                <button
                  type="button"
                  className="btn btn-info btn-block mb-3"
                  onClick={props.nextQuestion}
                >
                  Next Question
                </button>
              )}
              {/* Wrong Answer or Time is UP = Try Again */}
              {!props.correct && (
                <Link
                  to="/"
                  type="button"
                  className="btn btn-success btn-block mb-3"
                >
                  Try Again!
                </Link>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Results;
