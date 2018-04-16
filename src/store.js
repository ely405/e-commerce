import { createStore } from 'redux';

const reducerFunction = (state, action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: state.cart.concat(action.product)
            }
        break;
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter(product => {
                    console.log('state', state, 'action', action);
                    console.log('produtc', product, action.product);
                   return  product.id !== action.product.id})
            }
        break;
    }

    // if (action.type === 'ADD_TO_CART'){
    //     return {
    //         ...state,
    //         cart: state.cart.concat(action.product)
    //     }
    // }
    return state;
}
  
//createStore(functionReducer, initialState)
export default  createStore(reducerFunction, { cart: [] });