import React from "react";
import ReactDom from "react-dom/client";
import ReduxTutorial from "./ReduxTutorial";
import { Provider } from "react-redux";
import store from "./store";

ReactDom.createRoot(document.querySelector("#root")).render(
  <Provider store={store}>
    <ReduxTutorial />
  </Provider>
);
