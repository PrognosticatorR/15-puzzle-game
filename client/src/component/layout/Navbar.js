import React from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../../Context";
import "./Navbar.css";
import Clock from "./Clock";
import Shuffles from "./Shuffles";

export default function Navbar(props) {
  return (
    <Consumer>
      {value => {
        const { player, isAuthenticated, handleResetClick, isOn, time } = value;
        return (
          <div className="nav-container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex">
              <Link className="navbar-brand" to="/">
                <i className="fas fa-puzzle-piece" /> Puzzler
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">
                      <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {isAuthenticated && isOn === false && time !== 0 ? (
                      <Link
                        onClick={handleResetClick}
                        to={`/game/${player._id}`}
                        className="nav-link"
                      >
                        Play Again <i className="fas fa-redo" />
                      </Link>
                    ) : null}
                  </li>
                </ul>
              </div>
              <div className="user-info d-flex">
                {isAuthenticated ? <Clock /> : null}
                {isAuthenticated ? <Shuffles /> : null}
                {player.playername ? (
                  <span className="flex-end welcome-name">
                    Welcome {player.playername}
                  </span>
                ) : null}
              </div>
            </nav>
          </div>
        );
      }}
    </Consumer>
  );
}
