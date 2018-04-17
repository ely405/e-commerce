import React from 'react';
import { shallow, render, mount } from 'enzyme';
import configureStore from 'redux-mock-store';

import setupTests from '../setupTests';
import ConnectedProductList, { ProductList } from '../../components/ProductList';
 
const mockStore = configureStore();

//probando componente presentacional
it('Renders no products when store is empty', () => {
    const wrapper =shallow(<ProductList products={[]}/>)
    expect(wrapper.find('.productContainer').length).toBe(0);
    console.log('it', wrapper.find('.productContainer').length);
});

//mock simula ser un store
//probando componente conectado
it('Renders no products when store is empty, connected component', () => {
    const store = mockStore({ products: [] });
    const wrapper =shallow(<ConnectedProductList store={store}/>)
    expect(wrapper.find('.productContainer').length).toBe(0);
});

it('Renders products', () => {
    const store = mockStore({
        products: [{ id: 1, name: 'blue jean', price: 100, image: ""}]
    });
    const wrapper = render(<ConnectedProductList store={store}/>);
    expect(wrapper.find('.productContainer').length).toBe(1);
});

//test simulando click
it('Adds a product to shopping cart', () => {
    const store = mockStore({
        products: [{ id: 1, name: 'blue jean', price: 100, image: ""}]        
    });
    const wrapper = mount(<ConnectedProductList store={store}/>);
    wrapper.find('#product-1 button').simulate('click');
    const actions = store.getActions();

    expect(actions.length).toBe(1);
    console.warn('mensaje de consola', actions);
    expect(actions[0].type).toBe('ADD_TO_CART');
    expect(actions[0].product).not.toBeNull();
});