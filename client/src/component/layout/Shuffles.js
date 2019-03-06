import React from "react";
import { Consumer } from "../../Context";

export default class Shuffles extends React.Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { shuffles } = value;
          return (
            <div>
              <i className="fas fa-random" /> Moves : {shuffles}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
