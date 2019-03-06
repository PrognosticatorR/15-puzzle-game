import React from "react";

export default function Success() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto my-auto text-center text-title text-uppercase pt-5">
          <h2 className="text-success">
            <i className="fas fa-trophy" /> Yeah <i className="fas fa-trophy" />
          </h2>
          <h3>
            <span className="text-success">
              You Made It <i className="far fa-smile-beam" />.
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
}
