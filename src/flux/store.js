import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';

const initialState = {};

const middleWare = [];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleWare))
);

export default store;
