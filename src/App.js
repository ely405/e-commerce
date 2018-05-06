import React, { Component } from 'react';

import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';

class App extends Component {
  render() {
    return (
      <div className='ed-container s-main-center'>
        <Header/>
        <section className='main-content flex-column cross-center'>
          <ProductList/>
        </section>
      </div>
    );
  }
}

export default App;
