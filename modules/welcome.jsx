import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/joystick2.png";

/* Welcome Page */

class Welcome extends Component {
  /* When level and category are not selected, default level:easy, cat=computer */
  state = { url: "/Quiz?level=easy&cat=18" };

  onClickHandler = () => {
    let e = document.getElementById("level");
    const level = e.options[e.selectedIndex].value;

    e = document.getElementById("category");
    const cat = e.options[e.selectedIndex].value;

    const url = "/Quiz?level=" + level + "&cat=" + cat;

    this.setState({ url: url });
  };

  render() {
    return (
      <div className="container my-5 welcome">
        <div className="row justify-content-center">
          <div className="col-8 col-sm-10 text-center my-5 trivia-game">
            Trivia Game
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-8 col-sm-10 text-center mb-5">
            <img src={logo} className="logo" alt="Game Logo"></img>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-5 col-sm-3 text-center mb-2">
            <label className="text-light font-weight-bold" htmlFor="level">
              Level
            </label>
            <select
              className="custom-select"
              id="level"
              onChange={this.onClickHandler}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-5 col-sm-3 text-center mb-2">
            <label className="text-light font-weight-bold" htmlFor="category">
              Category
            </label>
            <select
              className="custom-select"
              id="category"
              onChange={this.onClickHandler}
            >
              <option value="18">Computers</option>
              <option value="11">Film</option>
              <option value="23">History</option>
              <option value="21">Sports</option>
              <option value="27">Animals</option>
              <option value="28">Vehicles</option>
            </select>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-6 text-center my-3">
            <Link to={this.state.url} className="btn btn-danger play">
              Play
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
