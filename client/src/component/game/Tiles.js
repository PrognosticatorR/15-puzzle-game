import React, { Component } from "react";
import { getSquareClassName } from "../../utils/utilities";
import Btn from "./Btn";
import { Consumer } from "../../Context";

export default class Tiles extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { handleTileClick, puzzle } = value;
          return (
            <section className="container game-container d-flex">
              <div className="grid-container mx-auto ">
                <div className="puzzle">
                  {puzzle.map((square, i) => (
                    <div
                      key={i}
                      className={getSquareClassName(square)}
                      onClick={() => handleTileClick(i)}
                      value={i}
                    >
                      {!!square ? square : null}
                    </div>
                  ))}
                </div>
                <Btn />
              </div>
            </section>
          );
        }}
      </Consumer>
    );
  }
}
