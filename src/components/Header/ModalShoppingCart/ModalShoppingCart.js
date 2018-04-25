import React from 'react';
import { connect } from 'react-redux';

import { showAndHideModalAction } from '../../../actionCreators';

import ShoppingCart from './ShoppingCart';

import './ModalShoppingCart.css';

const ModalShoppingCart = (props) => {
    return(
        <div>
            <i className='icon-shopping-bag' onClick={() => props.showAndHideModal('modalContainerInShoppingCart')}/>  
            <div id='modalContainerInShoppingCart' className='s-main-center' onClick={(e) => {props.showAndHideModal('modalContainerInShoppingCart')}}>
              <ShoppingCart/>
            </div>      
        </div>
    )
}

const mapStateToProps = state => {
    return {
      // products: state.products,
    }
  }
  
const mapDispatchToProps = dispatch => {
  return {
    showAndHideModal(idElement) {
      console.log('event target', event);
      dispatch(showAndHideModalAction(idElement));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalShoppingCart);