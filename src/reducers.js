//declaramos el estado inicial en state

const initialStateProduct = []

const productReducer = (state = initialStateProduct, action) => {
    if (action.type === 'LOAD_PRODUCTS') {
        return action.products;
    }
    return state;
}

const cartReducer = (state = [], action) => {
    switch (action.type) {

        case 'ADD_TO_CART':     
            action.product.quantity += 1;
            
            const allProduct = state.concat(action.product);
            const productSorted = allProduct.sort((prod1, prod2) => prod1.price > prod2.price);

            let productToDispatch = [];
            productSorted.map((prodItem, i) => {
                let num = 0;
                if (i > 0) {
                    if (prodItem.id != productSorted[i - 1].id) {
                        productToDispatch.push(prodItem);
                    }
                } else {
                    productToDispatch.push(prodItem);
                }
            });
            console.log('PRODUCT TO DISPATCH', productToDispatch);

            return productToDispatch;
            break;
        case 'REMOVE_FROM_CART':
            console.warn('REMOVE_FROM CART STATE', state);
            return state.filter(product => {
                
                action.product.quantity = 0;
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