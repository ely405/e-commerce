import React from 'react';
import { shallow } from 'enzyme';

import setupTests from '../setupTests';
import { ProductList } from '../../components/ProductList';


//componente presentacional
it('Renders no products when store is empty', () => {
    const wrapper =shallow(<ProductList products={[]}/>)
    expect(wrapper.find('.productContainer').length).toBe(0);
});