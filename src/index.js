import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
//import rootReducer from "./reducers/rootReducers";
//const store = createStore(rootReducer);
//import { Provider } from "react-redux";
ReactDOM.render(
  //<Provider store={store}>
  <App />,
  //</Provider>
  document.getElementById("root")
);
