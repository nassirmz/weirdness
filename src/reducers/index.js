import { GET_GIF } from '../constants/types';

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
