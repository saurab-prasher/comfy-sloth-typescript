import React from "react";
import ReactDOM from "react-dom";

import { UserProvider } from "./context/user_context";
import App from "./App";
import "./index.css";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

import { BrowserRouter } from "react-router-dom";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
