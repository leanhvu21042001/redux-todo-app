import ReactDOM from "react-dom";
import React, { Suspense } from "react";
import { Provider } from "react-redux";

import "./i18n";
import "./index.css";
import App from "./App";
import store from "./redux/store";

ReactDOM.render(
  <Suspense fallback={<p>Loading...</p>}>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>,
  document.getElementById("root")
);
