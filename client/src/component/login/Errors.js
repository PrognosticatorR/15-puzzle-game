import React from "react";
import className from "classnames";
import { Consumer } from "../../Context";

export default function Errors() {
  return (
    <Consumer>
      {value => {
        const { errors } = value;
        const alertClass = className({
          alert: true,
          "alert-danger": true,
          "text-uppercase": true,
          invisible: !errors["playername"],
          visible: errors["playername"]
        });
        return <div className={alertClass}>{errors["playername"]}</div>;
      }}
    </Consumer>
  );
}
