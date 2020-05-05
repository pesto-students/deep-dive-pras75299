import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul className="links">
            <li>
              <Link to="/home">Home</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
