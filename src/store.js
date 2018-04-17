import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducerFunction = (state, action) => {
    switch(action.type){
        case 'LOAD_PRODUCTS':
            return {
                ...state,
                products: action.products
            }
        break;
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
        default:
        break;
    }
    return state;
}
  
const logger = store => next => action => {
    console.log('dispatch action', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result;
}

//createStore(functionReducer, initialState)
//thunk --> para poder invocar actiobes asincronas con dispatch
export default  createStore(reducerFunction, { cart: [], products: [] }, applyMiddleware(logger, thunk));