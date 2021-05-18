import React from 'react'
import './index.scss'
import numeral from 'numeral'
import RemoveIcon from '@material-ui/icons/Remove'
import DeleteIcon from '@material-ui/icons/Delete'

export const CartView = (props) => {
  console.log('cart -----', props)

  const totalAmount = (items) => {
    let total = 0
    items.map((item) => (total += item.price * item.quantity))
    return total
  }

  return (
    <div className="cart-view">
      <div className="cart-text">
        <h3>
          Cart <span class="badge bg-secondary">{props.cart.length}</span>
        </h3>
      </div>
      <div className="cart-list">
        {props.cart.map((product, id) => (
          <div className="cart-item" key={id}>
            <h5>{product.name}</h5>
            <p className="increase-pump">
              <span onClick={() => props.reduce(product)}>
                <RemoveIcon />
              </span>
              <span>{product.quantity}</span>
              <span onClick={() => props.delete(product)}>
                <DeleteIcon />
              </span>
            </p>
            <p className="price">
              ${numeral(product.price * product.quantity).format('0,0')}
            </p>
          </div>
        ))}
      </div>

      <div className="bottom-tab">
        <div className="total-amount">
          <h6>Total</h6>
          <p>${numeral(totalAmount(props.cart)).format('0,0')}</p>
        </div>
        <div className="checkout-button">
          <button disabled={!totalAmount(props.cart)}> Checkout </button>
        </div>
      </div>
    </div>
  )
}
