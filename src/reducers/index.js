import { GET_GIF, LIKE_GIF } from '../constants/types';

const gif = {
  term: '',
  weirdness: 0,
  url: '',
  title: '',
  id: ''
};

export function gifReducer(state = gif, action) {
  switch(action.type) {
    case GET_GIF:
      const { gifData } = action;
      console.log("gifData", gifData);
      return {
        ...gifData,
      };
    default:
      return state;
  }
}

export function favoritesReducer(state = [], action) {
  switch (action.type) {
    case LIKE_GIF:
      return [
        ...state,
        action.gif
      ];
    default:
      return state;
  }
}
