import React from 'react';
// import { Glyphicon } from 'react-bootstrap';
// import { button } from 'reactstrap';

import { connect } from 'react-redux';

import { addToCartAction } from '../actionCreators';

import './ProductList.css';

const ProductList = (props) => {
  // console.log('props, productlist', props);s
    return (
      <div className='grid-container grid-1234'>
        {props.products.map((product) =>
          <div id={`product-${product.id}`} className="productContainer grid-item" key={product.id}>
            <div className='product__imgage-container over-hidden'>
              <img src={product.image} alt={product.name}  className='product__image'/>
            </div>
            <div className="">
              <h4>{product.name}</h4>
              <p>
                <button className='bg-main-color' onClick={() => props.addToCart(product)} role="button" disabled={product.inventory <= 0}><i className='icon-dollar'/>{product.price} <i className='icon-shopping-cart'/></button>
              </p>
            </div>
      </div>
        )}
      </div>
    );
}

//para mandar la propiedades al componente
const mapStateToProps = state => {
  // console.log('mapstate productlist', state);
  return {
    products: state.products,
  }
}

const mapDispatchToProps = dispatch => {
  //  console.log('dispatch product list', dispatch);
   return {
     addToCart(product) {
       alert('disoatch add to cart');
       dispatch(addToCartAction(product))
     }
   }
}

export { ProductList };
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
