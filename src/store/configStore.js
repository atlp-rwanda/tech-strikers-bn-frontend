import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
// import rootReducer from "./reducers/rootReducer";

const store = createStore((state = {}) => state, applyMiddleware(thunk));

export default store;
