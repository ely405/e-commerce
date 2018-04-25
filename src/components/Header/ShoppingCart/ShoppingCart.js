import React from 'react';
import { connect } from 'react-redux';

import { removeFromCartAction, addASameProductAction, removeAProductAction } from '../../../actionCreators';

import TotalToPay from './TotalToPay';

import './ShoppingCart.css';

const ShoppingCart = (props) => {
    return (
        <section className='m-60 s-80 l-40 xl-30'>
              {props.cart.map((product, ind) => {
                return (<article key={ind} id={product.id} className='shopping-cart ed-container main-justify p-05rm' onClick={(e) => e.stopPropagation()}>
                  <div className='shopping-cart__image s-30'><img src={product.image} alt={product.name}/></div> 
                  <p className='p-03rm s-50'>{product.name}</p>
                  <div className="p-03rm ed-item s-20 text-right"><span>${product.price}</span></div>
                  <a onClick={() => props.removeFromCart(product)} className='p-03rm'><small>Eliminar</small></a>
                  <div className="shopping-cart__quantity s-50 m-50 l-35 text-right">
                    <button onClick={() => props.removeAProduct(product)} type='button' className='shopping-cart__button bg-trans s-1-3 c-white p-03rm'>
                      <i className='icon-minus icon-05x'/>
                    </button>
                    <input readOnly='readonly' value={product.quantity} className='shopping-cart__quantity__input s-1-3 p-03rm bg-trans c-white text-center'/>
                    <button className='shopping-cart__button bg-trans s-1-3 c-white p-03rm' type='button' onClick={() => props.addASameProduct(product)}>
                      <i className='icon-plus icon-05x'/>
                    </button>
                  </div>
                </article>)
              })
            }
          <div className='p-05rm'>
            {(props.cart.length >= 1) ? <TotalToPay/> : 'Agrega productos al carrito de compras!'}
          </div >
        </section>
    )
}

//retorna un objeto que pasamos como props al componente, 
//sería como los estados iniciales
const mapStateToProps = state => {
  //state --> estado compartido de redux
  return {
    cart: state.cart,
  }
}

//retornamos los métodos que utilizará el componente
const mapDispatchToProps = dispatch => {
  return {
    removeFromCart(product) {
      dispatch(removeFromCartAction(product));
    },
    addASameProduct(product) {
      dispatch(addASameProductAction(product));
    },
    removeAProduct(product) {
      dispatch(removeAProductAction(product));
    }
  }
}

//generamos metodos que vamos a utilizar en nuestro componente

//ambos pasan como propiedades al componente
//conectamos, que devuelve una función y a esa la pasamos ek shoppingCart
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
