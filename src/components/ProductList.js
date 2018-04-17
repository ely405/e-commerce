import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';

import { addToCartAction } from '../actionCreators';

const styles = {
  products: {
    display: 'flex',
    alignItems: 'stretch',
    flexWrap: 'wrap'
  },
  product: {
    width: '220px',
    marginLeft: 10,
    marginRight: 10
  }
};

const ProductList = (props) => {
  console.log('props, productlist', props);
    return (
      <div style={styles.products}>
        {props.products.map((product) =>
          <div id={`product-${product.id}`} className="thumbnail productContainer" style={styles.product} key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="caption">
              <h4>{product.name}</h4>
              <p>
                <Button bsStyle="primary" onClick={() => props.addToCart(product)} role="button" disabled={product.inventory <= 0}>${product.price} <Glyphicon glyph="shopping-cart" /></Button>
              </p>
            </div>
          </div>
        )}
      </div>
    );
}

const mapStateToProps = state => {
  console.log('mapstate productlist', state);
  return {
    products: state.products
  }
}

const mapDispatchToProps = dispatch => {
   console.log('dispatch product list', dispatch);
   return {
     addToCart(product) {
       dispatch(addToCartAction(product))
     }
   }
}

export { ProductList };
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
