import React, { useState, useEffect } from 'react'
import './index.scss'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { connect } from 'react-redux'
import selectors from '../../pages/Shop/redux/selector'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import { CartView } from '../CartView'
import {
  reduceProductInCart,
  deleteProductInCart,
} from '../../pages/Shop/redux/action'
import { Link } from 'react-router-dom'

const AuthHeader = (props) => {
  console.log('here', props)
  const [open, setopen] = useState(false)
  const [cartitems, setcartitems] = useState([])

  useEffect(() => {
    console.log('runnnnnnnn')
    setcartitems(props.cart)
  }, [props.cart])

  return (
    <div className="authhead--00">
      <AppBar className="app-bar">
        <Toolbar>
          <div className="container-fluid">
            <div className="row">
              <div className="col-3">
                <h3 className="logo-text">
                  <Link to="/shop">Troll Basket</Link>
                </h3>
              </div>
              <div className="col-6">
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search Product..."
                  />
                  <buttton
                    class="input-group-text"
                    onClick={() => alert('heyy')}
                  >
                    <SearchIcon />
                  </buttton>
                </div>
              </div>
              <div className="col-3">
                <button className="cart-button" onClick={() => setopen(!open)}>
                  Cart <ShoppingCartIcon />{' '}
                  {props.cart.length ? (
                    <span class="badge bg-secondary cart-counter">
                      {props.cart.length}
                    </span>
                  ) : null}
                </button>
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      {/*  */}
      <SwipeableDrawer
        anchor={'right'}
        open={open}
        onClose={() => setopen(false)}
        className="cart-drawer"
      >
        <CartView
          // {...props}
          cart={cartitems}
          // cartItems={props.cart}
          reduce={props.reduceProductInCart}
          delete={props.deleteProductInCart}
        />
      </SwipeableDrawer>
    </div>
  )
}

const mapToDispatchProps = { reduceProductInCart, deleteProductInCart }

export default connect(selectors, mapToDispatchProps)(AuthHeader)
