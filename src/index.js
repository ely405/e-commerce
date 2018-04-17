import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import './index.css';
import { loadProductsAction } from './actionCreators';

store.dispatch(loadProductsAction());
// var URLdomain = window.location.host;
// alert(URLdomain);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,  
  document.getElementById('root')
);
