import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';

import { loadProductsAction } from './actions/products';

import 'ed-grid/css/ed-grid.min.css';
import './index.css';
import './icon/icon.css';

store.dispatch(loadProductsAction());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
