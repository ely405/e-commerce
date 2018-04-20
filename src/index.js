import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

import 'bootstrap';
import './index.css';
import { loadProductsAction } from './actionCreators';

store.dispatch(loadProductsAction());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,  
  document.getElementById('root')
);
