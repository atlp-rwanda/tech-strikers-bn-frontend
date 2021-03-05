import { combineReducers } from "redux";
import { resetPasswordReducer } from "./resetPasswordReducer";

const rootReducer = combineReducers({
  token: resetPasswordReducer,
});

export default rootReducer;
