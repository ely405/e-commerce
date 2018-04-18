import { addToCartAction } from '../actionCreators';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

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


//test actionCreators sincrónico