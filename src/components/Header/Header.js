import React from 'react';
import { connect } from 'react-redux';

import ModalShoppingCart from '../ModalShoppingCart/ModalShoppingCart';
import { showAndHideModalAction } from '../../actions/Modal';

const Header = (props) => {
    return (
        <header className='main-header ed-item s-cross-center s-justify'>
            <h1>E-commerce</h1>
            <div>
                <span className='shopping-bag__counter'>{props.productsInShoppingCart.reduce((sum, product) => sum + product.quantity, 0)}</span>
                <a onClick={() => props.showAndHideModal()}><i className='icon-shopping-bag'/></a>
            </div>
						{ (props.showModal.modal) ?   <ModalShoppingCart/> : '' }
        </header>
    );
}

const mapStateToProps = state => {
    return {
        productsInShoppingCart: state.cart,
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);;