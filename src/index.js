import React from "react";
import ScrollToTop from "./app/layout/ScrollToTop";
import ReactDOM from "react-dom";
import "./app/layout/Styles.css";
import App from "./app/layout/App";
import { BrowserRouter as Browser } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store/configureStore";

const rootEl = document.getElementById("root");

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <Browser>
        <ScrollToTop />
        <App />
      </Browser>
    </Provider>,
    rootEl
  );
}

// makes the page incremently update based on changes instead of a full reload
if (module.hot) {
  module.hot.accept("./app/layout/App", function () {
    setTimeout(render);
  });
}

render();
