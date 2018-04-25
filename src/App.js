import React, { Component } from 'react';

import Header from './components/Header/Header';
import ProductList from './components/ProductList';

class App extends Component {
  render() {
    return (
      <div className='ed-container s-main-center'>
        <Header/>
        <section className='main-content ed-item s-80 m-100'>
              <ProductList />
        </section>
      </div>
    );
  }
}

export default App;
