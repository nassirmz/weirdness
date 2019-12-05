import { combineReducers } from 'redux';

import { favoritesReducer } from './favoriteReducer';
import { gifReducer } from './gifReducer';
import { messageReducer } from './messageReducer';

import { START_OVER } from '../constants/types';

const appReducer = combineReducers({
  gif: gifReducer,
  favorites: favoritesReducer,
  message: messageReducer
});

const rootReducer = (state, action) => {
  if (action.type === START_OVER) {
    state = {};
  }
  return appReducer(state, action);
};

export default rootReducer;
