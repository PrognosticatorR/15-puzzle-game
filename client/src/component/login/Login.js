import React from "react";
import Errors from "./Errors";
import { Consumer } from "../../Context";
import "./Login.css";

export default class Login extends React.Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { handleChange, handleLoginClick, errors } = value;
          return (
            <section>
              {errors["playername"] !== "" ? <Errors /> : null}
              <div className="container login-container">
                <div className="mx-auto input-group input-group-lg ">
                  <input
                    onChange={handleChange}
                    type="text"
                    className="form-control "
                    placeholder="Enter Your Name."
                    aria-label="Large"
                    name="playername"
                    aria-describedby="inputGroup-sizing-lg"
                    required={true}
                  />
                  <div className="input-group-append">
                    <button
                      onClick={handleLoginClick}
                      className="btn btn-outline-secondary"
                      type="button"
                    >
                      <i className="fas fa-forward" />
                    </button>
                  </div>
                </div>
              </div>
            </section>
          );
        }}
      </Consumer>
    );
  }
}
