const loadProductsAction = () => {
    const products = [{
            id: 1,
            name: "Hipster Ultimate",
            price: 299,
            image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-1.jpg"
        },
        {
            id: 2,
            name: "On Motion Live",
            price: 99,
            image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-2.jpg"
        },
        {
            id: 3,
            name: "Underground Max",
            price: 149,
            image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-3.jpg"
        },
    ];

    return {
        type: 'LOAD_PRODUCTS',
        products
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