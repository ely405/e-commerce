import axios from 'axios';

const loadProductsAction = () => {
    return dispatch => {
        return axios.get("../products.json")
        .then(res => {
            dispatch({
                type: 'LOAD_PRODUCTS',
                products: res.data
            });
        });
    }
}

const addToCartAction = product => {
    return {
        type: 'ADD_TO_CART',
        product,
    };
}

const removeFromCartAction = product => {
    return {
        type: 'REMOVE_FROM_CART',
        product
    };
}

export {
    loadProductsAction,
    addToCartAction,
    removeFromCartAction,
}