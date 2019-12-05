import axios from 'axios';

import { GET_GIF, LIKE_GIF, START_OVER, UNLIKE_GIF } from '../constants/types';
import { API_URL } from '../constants/api';

export function getGif(term, weirdness, data) {
  let { id, title, images } = data;
  const { url } = images.downsized_large;

  title = title.split(" GIF")[0];
  title = title.slice(0, 12);

  return {
    gifData: { url, id, title, term, weirdness },
    type: GET_GIF
  }
}

export function startGetGif(term, weirdness) {
  return (dispatch) => {
    axios.get(`${API_URL}s=${term}&weirdness=${weirdness}`)
      .then(resp => {
        const data = resp.data.data;
        dispatch(getGif(term, weirdness, data));
      })
      .catch(error => {
        console.error('error', error);
      });
  }
}

export function likeGif(gif) {
  return {
    type: LIKE_GIF,
    gif
  }
}

export function unlikeGif(id) {
  return {
    type: UNLIKE_GIF,
    id
  }
}

export function startOver() {
  return {
    type: START_OVER
  }
}

