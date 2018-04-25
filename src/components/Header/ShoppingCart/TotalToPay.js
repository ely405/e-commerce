import React from 'react';
import { connect } from 'react-redux';

const TotalToPay = (props) => {
    return(
        <p>
            Total: ${props.productsInCart.reduce((sum, product) => sum + product.price * product.quantity, 0)}
        </p>
    )
}

const mapStateToProps = state => {
    return{
        productsInCart: state.cart
    }
}

// const mapDispatchToProps = dispatch => {
//     return{

//     }
// }

export default connect(mapStateToProps)(TotalToPay);