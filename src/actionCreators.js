import axios from 'axios';

const loadProductsAction = () => {
    return dispatch => {
        return axios.get("./products.json")
        .then(res => {
            dispatch({
                type: 'LOAD_PRODUCTS',
                products: res.data
            });
        });
    }
}

const addToCartAction = (product)=> {
    return {
        type: 'ADD_TO_CART',
        product,
    };
}

const payForProductsAction = productsInCart => {
    return {
        type: 'PAY_FOR_PRODUCTS',
        productsInCart
    }
}

const removeFromCartAction = product => {
    return {
        type: 'REMOVE_FROM_CART',
        product
    };
}

const addASameProductAction = product => {
    return {
        type: 'ADD_A_SAME_PRODUCT',
        product
    }
}

const removeAProductAction = product => {
    return {
        type: 'REMOVE_A_PRODUCT',
        product
    }
}

const showAndHideModalAction = (idElementToShowInModal) => {
    return {
        type: 'SHOW_AND_HIDE_MODAL',
        idElementToShowInModal
    }
}

export {
    loadProductsAction,
    addToCartAction,
    payForProductsAction,
    removeFromCartAction,
    addASameProductAction,
    removeAProductAction,
    showAndHideModalAction,
}