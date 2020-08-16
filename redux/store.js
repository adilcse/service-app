import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { categoriesReducer } from "./reducers/categoriesReducer";
import { sliderReducer } from "./reducers/sliderReducer";
import logger from "redux-logger";

const rootReducer = combineReducers({ categoriesReducer, sliderReducer });
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);
export default store;
