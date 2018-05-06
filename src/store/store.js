import {
	createStore,
	applyMiddleware,
	combineReducers
} from 'redux';
import thunk from 'redux-thunk';

import productReducer from '../reducers/product_reducer';
import modalReducer from '../reducers/modal_reducer';
import cartReducer from '../reducers/cart_reducer';

const logger = store => next => action => {
	console.log('dispatch action', action);
	let result = next(action);
	console.log('next state', store.getState());
	return result;
}

const reducerCombined = combineReducers({
	cart: cartReducer,
	products: productReducer,
	modal: modalReducer
});

export default createStore(reducerCombined, applyMiddleware(logger, thunk));