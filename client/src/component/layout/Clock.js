import React, { Component, Fragment } from "react";
import { Consumer } from "../../Context";
import ms from "pretty-ms";

class Clock extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { time } = value;
          return (
            <Fragment>
              <div className="clock">
                <i className="far fa-clock" /> Time Elapsed:{" "}
                {ms(time, { secDecimalDigits: true })}
              </div>
            </Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Clock;
