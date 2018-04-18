import { addToCartAction, loadProductsAction } from '../actionCreators';
import configureStore from 'redux-mock-store';

import thunk from 'redux-thunk';
import moxios from 'moxios';

const middlewares = [ thunk ];
const mockStore = configureStore(middlewares);

beforeEach(() => moxios.install());
afterEach(() => moxios.uninstall());

describe('Testing actionCreators sync', () => {
    it('Add a product to cart', () => {
        const store = mockStore({ cart: [] });
        const productToAdd = {
            id: 3, name: 'product 3', price: 20, image: ''
        }
        const actions = store.getActions();

        store.dispatch(addToCartAction(productToAdd));

        expect(actions.length).toBe(1);
        expect(actions[0].type).toBe('ADD_TO_CART');
        expect(actions[0].product).not.toBeNull();
        expect(actions[0].product.id).toBe(3);
    });
});

describe('Testing async', () => {
    it('Load products', () => {
        const store = mockStore({ products: [] });
        moxios.stubRequest('/products.json', {
            status: 200,
            response: [
                { id: 1, name: 'prod 1', price: 1, image: ''},
                { id: 2, name: 'prod 2', price: 4, image: ''}                
            ]
        });

        return store.dispatch(loadProductsAction()).then(() => {
            let actions = store.getActions();
            expect(actions.length).toBe(1);
            expect(actions[0].type).toBe('LOAD_PRODUCTS');
            console.log('ACTIONS', actions);
            expect(actions[0].products).not.toBeNull();
            expect(actions[0].products.length).toBe(2);
        })
    });
});
