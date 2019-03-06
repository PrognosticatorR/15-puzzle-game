import React from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../../Context";

export default function Failure() {
  return (
    <Consumer>
      {value => {
        const { handleResetClick, player } = value;
        return (
          <div className="container">
            <div className="row">
              <div className="col-10 mx-auto my-auto text-center text-title text-uppercase pt-5">
                <h2 className="text-secondary">Ohh ! </h2>
                <h3>
                  <span className="text-secondary">
                    You Missed It <i className="far fa-surprise" />.
                  </span>
                </h3>
                <h3 className="text-secondary">
                  Press{" "}
                  <Link
                    onClick={handleResetClick}
                    to={`/game/${player._id}`}
                    className="nav-link"
                  >
                    Play Again <i className="fas fa-redo" />
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}
