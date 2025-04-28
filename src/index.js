import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App";
import "./lib/locales/i18n";
import store, { persistor } from "./lib/redux/store";

ReactDOM.render(
  <Suspense fallback={<p>Loading...</p>}>
    <Provider store={store}>
      <PersistGate loading={<p>Loading...</p>} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </Suspense>,
  document.getElementById("root")
);
