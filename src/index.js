import React from "react";
import ReactDOM from "react-dom";
import "./app/layout/Styles.css";
import App from "./app/layout/App";

const rootEl = document.getElementById("root");

function render() {
  ReactDOM.render(<App />, rootEl);
}

// makes the page incremently update based on changes instead of a full reload
if (module.hot) {
  module.hot.accept("./app/layout/App", function () {
    setTimeout(render);
  });
}

render();
