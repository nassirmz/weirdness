import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { gifReducer, favoritesReducer } from '../reducers';

const reducer = combineReducers( {
  gif: gifReducer,
  favorites: favoritesReducer
});

const store = createStore(reducer, compose(applyMiddleware(thunk)));

export default store;
