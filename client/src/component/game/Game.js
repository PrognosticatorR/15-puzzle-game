import React, { Component, Fragment } from "react";
import "./Game.css";
import { Consumer } from "../../Context";
import Result from "./Result";
import Tiles from "./Tiles";
import Footer from "../layout/Footer";

export default class Game extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { isAuthenticated, isOn } = value;
          if (isAuthenticated) {
            return isOn ? (
              <Fragment>
                <Tiles />
                <Footer />
              </Fragment>
            ) : (
              <Result />
            );
          } else {
            return (
              <div
                className="alert alert-danger container game_alert"
                role="alert"
              >
                <p className="text-center pb-0 mb-0">
                  Please Login First To Play This Game .
                </p>
              </div>
            );
          }
        }}
      </Consumer>
    );
  }
}
