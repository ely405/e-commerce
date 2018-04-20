import React from 'react';
import { Panel, Table, Button, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';

import { removeFromCartAction, addASameProductAction, removeAProductAction } from '../actionCreators';

const styles = {
  footer: {
    fontWeight: 'bold'
  }
}

// const shoppingCart = ({ cart, removeFromCart}) => {}
const ShoppingCart = (props) => {
  console.log('props component', props);
    return (
      <Panel header="Shopping Cart">
        <Table fill>
          <tbody>
              {props.cart.map((product, ind) => {
                return (<tr key={ind} id={product.id}> 
                  <td>{product.name}</td>
                  <td className="text-right">${product.price}</td>
                  <td className="quantity-product">
                    {product.quantity} 
                    <i onClick={() => props.addASameProduct(product)}>más</i>
                    <i onClick={() => props.removeAProduct(product)}>menos</i>
                  </td>
                  <td className="text-right"><Button bsSize="xsmall" bsStyle="danger" onClick={() => props.removeFromCart(product)}><Glyphicon glyph="trash" /></Button></td>
                </tr>)
              })
            }
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" style={styles.footer}>
                Total: ${props.cart.reduce((sum, product) => sum + product.price * product.quantity, 0)}
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
  console.log('state MAPSTATEPROPS', state);
  return {
    cart: state.cart,
    // hola: 'hola',
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
    addASameProduct(product) {
      alert('agrega mas');
      dispatch(addASameProductAction(product));
    },
    removeAProduct(product) {
      alert('quita');
      dispatch(removeAProductAction(product));
    }
  }
}

//generamos metodos que vamos a utilizar en nuestro componente

//ambos pasan como propiedades al componente
//conectamos, que devuelve una función y a esa la pasamos ek shoppingCart
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
