import { LIKE_GIF, UNLIKE_GIF } from '../constants/types';

export function favoritesReducer(state = [], action) {
  switch (action.type) {
    case LIKE_GIF:
      return [
        ...state,
        action.gif
      ];
    case UNLIKE_GIF:
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
}
