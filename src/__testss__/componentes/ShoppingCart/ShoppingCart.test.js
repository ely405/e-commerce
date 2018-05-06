import React from 'react';
import { shallow, render } from 'enzyme';
import configureStore from 'redux-mock-store';

import setupTests from '../../setupTests';
import ConnectedShoppingCart, { ShoppingCart } from '../../../components/ShoppingCart/ShoppingCart';
import ConnectedTotalToPay from '../../../components/ShoppingCart/TotalToPay';
import TotalToPay from '../../../components/ShoppingCart/TotalToPay';

const mockStore = configureStore();

describe('Probando el componente ShoppingCart', () => {
	it('Si no hay productos, no renderiza el componente', () => {
		let wrapper = shallow(<ShoppingCart cart={[]}/>);
		expect(wrapper.find('.shopping-cart').length).toBe(0);
	});
});

describe('Componente conectado', () => {
	it('Si el carrito de compras esta vacío no renderiza el componente', () => {
    const store = mockStore({ products: [] });
		let wrapper = shallow(<ConnectedShoppingCart store={store}/>);
		expect(wrapper.find('.shopping-cart').length).toBe(0);
	});

	it('Si el carrito de compras tien productos, renderiza el componente', () => {
    const store = mockStore({
			cart: [{ id: 1, name: 'prod1', price: 19, image: '' }],
		});
    const wrapper = render(<ConnectedShoppingCart store={store}/>).dive();
    expect(wrapper.find('.shopping-cart').length).toBe(1);
	});

});