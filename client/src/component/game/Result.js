import React from "react";
import Success from "./Success";
import Failure from "./Failure";
import { Consumer } from "../../Context";

export default function Result() {
  return (
    <Consumer>
      {value => {
        const { gameOver, isWon } = value;
        return (
          <section>
            {gameOver === false && isWon === true ? <Success /> : <Failure />}
          </section>
        );
      }}
    </Consumer>
  );
}
