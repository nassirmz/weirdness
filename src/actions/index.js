import axios from 'axios';

import { GET_GIF } from '../constants/types';
import { API_URL } from '../constants/api';

export function getGif(term, data) {
  const { id, title, images } = data;
  const { url } = images.downsized_large;
  return {
    gifData: { url, id, title, term },
    type: GET_GIF
  }
}

export function startGetGif(term) {
  return (dispatch) => {
    axios.get(`${API_URL}q=${term}`)
      .then(resp => {
        const data = resp.data.data[0];
        console.log(data.images);
        console.log("data", data);
        dispatch(getGif(term, data));
      })
      .catch(error => {
        console.log('error', error);
      });
  }
}
