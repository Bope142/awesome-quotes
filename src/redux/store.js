import { combineReducers } from "redux";
import reducerFetchedQuotes from "./reducers/reducerFetchQuotes";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  quotes: reducerFetchedQuotes,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
