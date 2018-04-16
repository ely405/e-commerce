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
    addToCartAction,
    removeFromCartAction,
}