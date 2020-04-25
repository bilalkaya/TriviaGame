import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Welcome from "./modules/welcome";
import Questions from "./modules/questions";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        {/* Run questions.jsx  */}
        <Route path="/Quiz" component={Questions}></Route>
        {/* Run welcome.jsx  */}
        <Route path="/" component={Welcome}></Route>
      </Switch>
    </Router>
  );
}

export default App;
