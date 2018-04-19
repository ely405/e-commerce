import React from 'react';
import { Panel, Table, Button, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';

import { removeFromCartAction } from '../actionCreators';

const styles = {
  footer: {
    fontWeight: 'bold'
  }
}


// const shoppingCart = ({ cart, removeFromCart}) => {}
const ShoppingCart = (props) => {
    console.log('props component', props);
    // const quantityProducts = (currentProductId) => {
    //   let quantity = 0;
    //   props.cart.map(el => {
    //     console.log('e', el.id, currentProductId, el.id === currentProductId)
    //     if(currentProductId === el.id) {
    //       console.log('igual ' + el.name);
    //       quantity += 1;
    //     }
    //   });
    //   return quantity;
    // }
    return (
      <Panel header="Shopping Cart">
        <Table fill>
          <tbody>
            {props.cart.map((product, ind) =>
              <tr key={ind}>
                <td>{product.name}</td>
                <td className="text-right">${product.price}</td>
                <td className="quantity-product">{product.quantity}</td>
                <td className="text-right"><Button bsSize="xsmall" bsStyle="danger" onClick={() => props.removeFromCart(product)}><Glyphicon glyph="trash" /></Button></td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" style={styles.footer}>
                Total: ${props.cart.reduce((sum, product) => sum + product.price, 0)}
              </td>
            </tr>
          </tfoot>
        </Table>

      </Panel>
    )
}

//retorna un objeto que pasamos como props al componente, 
//sería como los estados iniciales
const mapStateToProps = state => {
  //state --> estado compartido de redux
  console.log('state mapstatetoprops', state);
  return {
    cart: state.cart
  }
}

//retornamos los métodos que utilizará el componente
const mapDispatchToProps = dispatch => {
  //dispatch del store
  //  console.log('dispatch', dispatch);
  return {
    removeFromCart(product) {
      dispatch(removeFromCartAction(product));
    },
    // quantityProducts(currentProductId) {
    //   let quantity = 0;
    //   // props.cart.map(el => {
    //   //   console.log('e', el.id, currentProductId, el.id === currentProductId)
    //   //   if(currentProductId === el.id) {
    //   //     console.log('igual ' + el.name);
    //   //     quantity += 1;
    //   //   }
    //   // });
    //   return quantity;
    // }
  }
}

//generamos metodos que vamos a utilizar en nuestro componente

//ambos pasan como propiedades al componente
//conectamos, que devuelve una función y a esa la pasamos ek shoppingCart
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
