import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { gifReducer } from '../reducers';

const reducer = combineReducers( {
  gif: gifReducer,
});

const store = createStore(reducer, compose(applyMiddleware(thunk)));

export default store;
