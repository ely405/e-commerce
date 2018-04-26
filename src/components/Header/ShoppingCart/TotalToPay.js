import React from 'react';
import { connect } from 'react-redux';

import { payForProductsAction } from '../../../actionCreators';

const TotalToPay = (props) => {
    return( 
        <div className='p-05rm main-justify'>
            <p>Total: ${props.productsInCart.reduce((sum, product) => sum + product.price * product.quantity, 0)}</p>
            <button className='bg-main-color' onClick={() => props.payForProducts(props.productsInCart)}>Quiero pagar</button>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        productsInCart: state.cart
    }
}

const mapDispatchToProps = dispatch => {
    return{
        payForProducts (productsInCart){
            dispatch(payForProductsAction(productsInCart));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TotalToPay);