import React, { Component, Fragment } from "react";
import { Consumer } from "../../Context";

class Clock extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { startTimer, stopTimer, time, isOn, isAuthenticated } = value;
          return (
            <Fragment>
              <div className="start-btn mt-20">
                {time === 0 && isAuthenticated ? (
                  <button
                    className="btn btn-lg btn-outline-secondary"
                    onClick={startTimer}
                  >
                    Play <i className="fas fa-play" />
                  </button>
                ) : null}
                {time === 0 || !isOn ? null : (
                  <button
                    className="btn btn-lg btn-outline-secondary"
                    onClick={stopTimer}
                  >
                    Stop <i className="fas fa-ban" />
                  </button>
                )}
              </div>
            </Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Clock;
