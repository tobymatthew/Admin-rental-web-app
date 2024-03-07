import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css'
import { Provider } from "react-redux";
import { store, persistor } from "./Redux/store";
import { PersistGate } from 'redux-persist/integration/react'
import  ContextProvider from "./contexts/ContextProvider"

ReactDOM.render(
  <ContextProvider>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  </ContextProvider>,
  document.getElementById("root")
);
