import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import App from "./App";
// import orderReducer from "./Redux/orderReducer";
import userReducer from "./Redux/userReducer";
let store = createStore(userReducer,applyMiddleware(thunk));


const root = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,root
);
