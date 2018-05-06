import React from 'react';
import { connect } from 'react-redux';

import { showAndHideModalAction } from '../../actions/Modal';

import ShoppingCart from '../ShoppingCart/ShoppingCart';
import SuccessMessage from '../SuccessMessage';

import './ModalShoppingCart.css';

const ModalShoppingCart = (props) => {
	return(
	<div id='modalContainerInShoppingCart' className='s-main-center' onClick={() => {props.showAndHideModal()}}>
		{(props.showModal.payment)? <SuccessMessage/> : <ShoppingCart/>}
	</div>
);
}

const mapStateToProps = state => {
  return {
		showModal: state.modal,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showAndHideModal() {
      dispatch(showAndHideModalAction());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalShoppingCart);