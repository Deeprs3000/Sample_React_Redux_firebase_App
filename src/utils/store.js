import { createStore, applyMiddleware } from 'redux';
import userReducer from "../reducers";
import thunkMiddleware from 'redux-thunk';

const middlewares = [thunkMiddleware];

export const store = createStore(userReducer, applyMiddleware(...middlewares));