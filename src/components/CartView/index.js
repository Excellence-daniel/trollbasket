import React from 'react'
import './index.scss'
import numeral from 'numeral'
import RemoveIcon from '@material-ui/icons/Remove'
import DeleteIcon from '@material-ui/icons/Delete'

export const CartView = (props) => {
  console.log('cart', props)

  const totalAmount = (items) => {
    let total = 0
    items.map((item) => (total += item.price * item.quantity))
    return total
  }

  return (
    <div className="cart-view">
      <h3>Cart</h3>
      <hr />
      {props.cartItems.map((cart) => (
        <div className="cart-item">
          <h5>{cart.name}</h5>
          <p className="increase-pump">
            <span onClick={() => props.reduce(cart)}>
              <RemoveIcon />
            </span>
            <span> {cart.quantity}</span>
            <span>
              <DeleteIcon />
            </span>
          </p>
          <p className="price">
            ${numeral(cart.price * cart.quantity).format('0,0')}
          </p>
        </div>
      ))}
      <div className="bottom-tab">
        <div className="total-amount">
          <h6>Total</h6>
          <p>${numeral(totalAmount(props.cartItems)).format('0,0')}</p>
        </div>
        <div className="checkout-button">
          <button disabled={!totalAmount(props.cartItems)}> Checkout </button>
        </div>
      </div>
    </div>
  )
}
