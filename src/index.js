import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/materialize-css/dist/css/materialize.css";
import "../node_modules/materialize-css/dist/js/materialize.js";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./index.scss";
import { Provider } from "react-redux";
import store from "./store/store";

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
  serviceWorker.unregister();
});
