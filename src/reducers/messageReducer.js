import { ADD_MESSAGE, RESET_MESSAGE } from '../constants/types';

export function messageReducer(state = "", action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return action.message;
    case RESET_MESSAGE:
      return "";
    default:
      return state;
  }
}
