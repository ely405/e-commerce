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

        <header className='main-header ed-item s-cross-center s-justify'>
          <h1>Ecomerce</h1>
          <i className='icon-shopping-bag' onMouseOver={() => console.log('over')} onMouseOut={() => console.log('out')}/>
        </header>

        <section className='main-content ed-item s-80 m-100'>
              <ProductList />
              <ShoppingCart />
        </section>
      </div>
    );
  }
}

export default App;
