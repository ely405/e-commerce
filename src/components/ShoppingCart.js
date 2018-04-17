import React from 'react';
import { Panel, Table, Button, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';

import { removeFromCartAction } from '../actionCreators';

const styles = {
  footer: {
    fontWeight: 'bold'
  }
}


const ShoppingCart = (props) => {
    console.log('props component', props);
    return (
      <Panel header="Shopping Cart">
        <Table fill>
          <tbody>
            {props.cart.map((product, ind) =>
              <tr key={ind}>
                <td>{product.name}</td>
                <td className="text-right">${product.price}</td>
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

//retorna un objeto que pasamos como props al componente
const mapStateToProps = state => {
  console.log('state mapstatetoprops', state);
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = dispatch => {
   console.log('dispatch', dispatch);
  return {
    removeFromCart(product) {
      dispatch(removeFromCartAction(product));
    }
  }
}

//generamos metodos que vamos a utilizar en nuestro componente

//ambos pasan como propiedades al componente
//conectamos, que devuelve una función y a esa la pasamos ek shoppingCart
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
