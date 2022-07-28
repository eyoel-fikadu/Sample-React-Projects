import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import reducers from "./reducers";
import App from "../src/components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={configureStore({ reducer: reducers })}>
      <App />
    </Provider>
  </React.StrictMode>
);
