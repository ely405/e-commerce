import React from 'react';

import ModalShoppingCart from './ModalShoppingCart/ModalShoppingCart';

const Header = (props) => {
    return (
        <header className='main-header ed-item s-cross-center s-justify'>
          <h1>Ecomerce</h1>
          <ModalShoppingCart/>
        </header>
    );
}

export default Header;