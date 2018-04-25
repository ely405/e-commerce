import React from 'react';
import { connect } from 'react-redux';

import { showAndHideModalAction } from '../../../actionCreators';

import ShoppingCart from '../ShoppingCart/ShoppingCart';

import './ModalShoppingCart.css';

const ModalShoppingCart = (props) => {
    return(
        <div>            
            <span className='shopping-bag__counter'>{props.productsInShoppingCart.reduce((sum, product) => sum + product.quantity, 0)}</span>
            <a onClick={() => props.showAndHideModal('modalContainerInShoppingCart')}><i className='icon-shopping-bag'/></a>
            <div id='modalContainerInShoppingCart' className='s-main-center' onClick={(e) => {props.showAndHideModal('modalContainerInShoppingCart')}}>
              <span>x</span>
              <ShoppingCart/>
            </div>      
        </div>
    )
}

const mapStateToProps = state => {
    return {
      productsInShoppingCart: state.cart,
    }
  }
  
const mapDispatchToProps = dispatch => {
  return {
    showAndHideModal(idElement) {
      dispatch(showAndHideModalAction(idElement));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalShoppingCart);