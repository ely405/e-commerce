import React from 'react';
import { Glyphicon } from 'react-bootstrap';
// import { button } from 'reactstrap';

import { connect } from 'react-redux';

import { addToCartAction } from '../actionCreators';

// const styles = {
//   products: {
//     display: 'flex',
//     alignItems: 'stretch',
//     flexWrap: 'wrap'
//   },
//   product: {
//     width: '220px',
//     marginLeft: 10,
//     marginRight: 10
//   }
// };

const ProductList = (props) => {
  // console.log('props, productlist', props);s
    return (
      <div className='grid-container grid-1234'>
        {props.products.map((product) =>
          <div id={`product-${product.id}`} className="productContainer grid-item" key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="">
              <h4>{product.name}</h4>
              <p>
                <button className='bg-main-color' onClick={() => props.addToCart(product)} role="button" disabled={product.inventory <= 0}>${product.price} <Glyphicon glyph="shopping-cart" /></button>
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
