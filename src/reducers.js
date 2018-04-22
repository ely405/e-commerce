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
                if (i > 0) {
                    if (prodItem.id !== productSorted[i - 1].id) {
                        productToDispatch.push(prodItem);
                    }
                } else {
                    productToDispatch.push(prodItem);
                }
            });
            return productToDispatch;
            break;

        case 'REMOVE_FROM_CART':
            console.warn('REMOVE_FROM CART STATE', state);
            return state.filter(product => {
                
                action.product.quantity = 0;
                return product.id !== action.product.id
            });
            break;

        case 'ADD_A_SAME_PRODUCT':
            action.product.quantity += 1;
            const indProductToAdd = state.indexOf(action.product);
            state.splice(indProductToAdd, 1, action.product);
            return state.filter(pro => pro);
            break;

        case 'REMOVE_A_PRODUCT':

            if(action.product.quantity <=  1){
                return state.filter(product => {
                    action.product.quantity = 0;
                    return product.id !== action.product.id
                });
            } else {
                action.product.quantity -= 1;
                const indProductToRemove = state.indexOf(action.product);
                state.splice(indProductToRemove, 1);
                return state.concat(action.product);
            }
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