import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import configureStore from './store/configureStore';

import App from './containers/AppContainer';
/*
* Import all CSS
* had to disable the no-used-var
* because it was needed this import
* for the webpack to compile the css
*/

/* eslint-disable no-unused-vars */
/* eslint-disable import/first */
import 'react-toolbox/lib/commons.scss';
import '../stylesheet/style.scss';
/* eslint-enable import/first */
/* eslint-enable no-unused-vars */


const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
