import {
    productReducer,
    cartReducer
} from '../reducers';

describe('Reducers testing, load products', () => {
    it('Returns the initial state', () => {
        expect(productReducer(undefined, {})).toEqual([]);
    });

    it('When receives product list', () => {
        const productList = [{
            id: 1,
            name: 'short',
            price: 20,
            image: ''
        }];

        const actionToProductReducer = {
            type: 'LOAD_PRODUCTS',
            products: productList
        }
        expect(productReducer([], actionToProductReducer)).toEqual(productList);
    });
});

describe('Testing cart reducers', () => {
    it('when add a product to cart', () => {
        const productList = [{
            id: 1,
            name: 'socks',
            price: 5,
            image: ''
        }];
        let actionToCartReducer = {
            type: 'ADD_TO_CART',
            product: productList
        }
        expect(cartReducer([], actionToCartReducer)).toEqual(productList);
    });

    it('Remove a product from cart', () => {
        let productList = [{
            id: 1,
            name: 'laptop',
            price: 5,
            image: ''
        },{
            id: 2,
            name: 'laptop',
            price: 10,
            image: ''
        }];
        let productToRemove = {
            id: 1,
            name: 'laptop',
            price: 5,
            image: ''
        }
        let actionToCartReducer = {
            type: 'REMOVE_FROM_CART',
            product: productToRemove
        }

        expect(cartReducer(productList, actionToCartReducer).length).toEqual(1);
        expect(cartReducer(productList, actionToCartReducer)[0].price).toEqual(10);
    });
});