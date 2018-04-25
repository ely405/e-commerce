import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { productReducer, cartReducer, modalReducer } from './reducers';
// import * as reducers from './reducers';

const logger = store => next => action => {
    console.log('dispatch action', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result;
}

//combineReducer --> si el estado es "undefined" tomará el arreglo vacío
//createStore(functionReducer, initialState)
//thunk --> para poder invocar actiobes asincronas con dispatch

const reducerCombined = combineReducers({ cart: cartReducer, products: productReducer, modal: modalReducer});
//combineReducer ignora el segundo parámetro de inicialización,
//para definir el estado inicial llama cada uno de los reducer y le pasa un estado "undefined"
//el estado inicial lo declaramos en el reducer
export default  createStore(reducerCombined, applyMiddleware(logger, thunk));