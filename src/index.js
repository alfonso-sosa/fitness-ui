import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './components/App';
import reducers from './reducers';
import middleware from './middleware';

export const fitnessStore = createStore(reducers, middleware);

ReactDOM.render(
  <Provider store={fitnessStore}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
