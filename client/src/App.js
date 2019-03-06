import React, { Component, Fragment } from "react";
import Navbar from "./component/layout/Navbar";
import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";
import "./App.css";
import Login from "./component/login/Login";
import Game from "./component/game/Game";
import Default from "./component/Default";
import Footer from "./component/layout/Footer";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/game/:id" component={Game} />
            <Route component={Default} />
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    );
  }
}

export default App;
