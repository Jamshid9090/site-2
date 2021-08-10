import { configureStore } from "@reduxjs/toolkit";
//import { applyMiddleware, createStore } from "redux";
//import { composeWithDevTools } from "redux-devtools-extension";
//import thunk from "redux-thunk";
import { reducer } from "./reducer";

const store = configureStore({
    reducer: reducer,
});

export default store;