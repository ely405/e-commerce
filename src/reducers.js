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
            // action.product.quantity = 1
            // state.map((prod) => {
            //     if(prod.id === action.product.id){
            //         console.warn('PRODUCTOS IGUALES', action.product.quantity += 1);
            //     }
            // });
            
            const productsEquals = state.filter(prod => prod.id === action.product.id);
            console.log('FILTER', productsEquals.length + 1);
            const addQuantity = action.product.quantity = productsEquals.length + 1;
            console.warn('cantidad', addQuantity);
            return state.concat(action.product);
            break;
        case 'REMOVE_FROM_CART':
            return state.filter(product => {
                // console.log('state REMOVE', state, 'action', action);
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