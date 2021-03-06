import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-slider/dist/css/bootstrap-slider.css"

import './index.css';

import store from './store/configureStore';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

serviceWorker.unregister();
