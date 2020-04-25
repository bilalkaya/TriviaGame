import React, { Component } from "react";

class Timer extends Component {
  state = { counter: 15, isTimeUp: false };

  /* Call tick method every second  */
  componentDidMount = () => {
    this.timerID = setInterval(() => this.tick(), 1000);
  };

  /* Decrement count every second until 0  */
  tick = () => {
    if (this.state.counter > 0) {
      this.setState(state => ({
        counter: state.counter - 1
      }));
    } else {
      this.setState(state => ({
        isTimeUp: true
      }));
      this.props.timeUP();
    }
  };

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        {!this.state.isTimeUp && this.state.counter > 5 && (
          <span>Time Left: {this.state.counter}</span>
        )}
        {/* Show red alert when the counter is under 5 seconds  */}
        {!this.state.isTimeUp && this.state.counter <= 5 && (
          <span className="bg-danger font-weight-bold">
            Time Left: {this.state.counter}
          </span>
        )}
      </div>
    );
  }
}

export default Timer;
