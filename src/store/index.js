import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import { authReducer as auth } from "./auth/authReducer";
import { newGameReducer as newGame } from "./newGame/newGameReducer";

const rootReducer = combineReducers({ auth, newGame });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
