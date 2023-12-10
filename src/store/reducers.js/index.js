import { combineReducers } from "redux";
import dataReducer from "./dataReducers";

export const rootReducer = combineReducers({
  data: dataReducer,
});
