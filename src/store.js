import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

//combineReducer --> si el estado es "undefined" tomará el arreglo vacío
const productReducer = (state = [], action) => {
    if (action.type === 'LOAD_PRODUCTS'){
        return action.products;
    }
    return state;
}

const cartReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            console.log('action add to cart', action);
            console.log('state', state);
            return state.concat(action.product);
        break;
        case 'REMOVE_FROM_CART':
            return state.filter(product => {
                    console.log('state', state, 'action', action);
                   return  product.id !== action.product.id});
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

// const initialState = {
//     cart: [],
//     products: []
// };

const reducerCombined = combineReducers({ cart: cartReducer, products: productReducer });
//combineReducer ignora el segundo parámetro de inicialización,
//para definir el estado inicial llama cada uno de los reducer y le pasa un estado "undefined"
//el estado inicial lo declaramos en el reducer
export default  createStore(reducerCombined, applyMiddleware(logger, thunk));