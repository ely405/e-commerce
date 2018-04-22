import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

// import 'bootstrap';  
// import 'bootstrap/dist/css/bootstrap.min.css';
import { loadProductsAction } from './actionCreators';

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
