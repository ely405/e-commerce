const productReducer = (state = [], action) => {
    if (action.type === 'LOAD_PRODUCTS') {
        return action.products;
    }
    return state;
}

const cartReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            console.log('action add to cart', action);
            console.log('state', state);
            return state.concat(action.product);
            break;
        case 'REMOVE_FROM_CART':
            return state.filter(product => {
                console.log('state REMOVE', state, 'action', action);
                return product.id !== action.product.id
            });
            break;
        default:
            return state;
            break;
    }
}

export {
    productReducer,
    cartReducer,
}