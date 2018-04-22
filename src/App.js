import React, { Component } from 'react';
// import { Navbar, Grid, Row, Col } from 'react-bootstrap';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';

class App extends Component {
  render() {
    return (
      <div className='ed-container s-main-center'>
        {/* <Navbar inverse staticTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Ecommerce</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar> */}

        <header className='ed-item'>
          <h1>Ecomerce</h1>
        </header>

        <section className='ed-item s-80 m-100'>
              <ProductList />
              <ShoppingCart />
        </section>
      </div>
    );
  }
}

export default App;
