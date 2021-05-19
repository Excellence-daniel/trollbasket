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
import PackageImg from '../../assets/imgs/package.png'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'
import {
  reduceProductInCart,
  deleteProductInCart,
  setCountryFilter,
  stopPageLoading,
} from '../../pages/Shop/redux/action'
import { Link } from 'react-router-dom'
import { products } from '../../utils/constants/products'
import FilterListIcon from '@material-ui/icons/FilterList'
import Popover from '@material-ui/core/Popover'

const AuthHeader = (props) => {
  const [open, setopen] = useState(false)
  const [cartitems, setcartitems] = useState([])
  const [searchtext, setsearchtext] = useState('')
  const [searchresult, setresult] = useState([])
  const [anchorEl, setAnchorEl] = React.useState(null)

  useEffect(() => {
    props.stopPageLoading(true)
    const theRandomNumber = Math.floor(Math.random() * 3) + 1
    window.setTimeout(() => {
      props.stopPageLoading(false)
    }, theRandomNumber * 1000)
    // eslint-disable-next-line
  }, [])

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }

  useEffect(() => {
    setcartitems(props.cart)
  }, [props.cart])

  const handleChange = ({ target }) => {
    setsearchtext(target.value)
    search(target.value)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const search = (value) => {
    const res = []
    products.forEach((product) => {
      const name = product.name.toLowerCase()
      const x = name.search(value.toLowerCase())
      if (x > -1) res.push(product)
    })
    setresult(res)
  }

  const setcountry = (country) => {
    props.setCountryFilter(country)
    props.stopPageLoading(true)
    window.setTimeout(() => {
      props.stopPageLoading(false)
    }, 1500)
  }

  const openPop = Boolean(anchorEl)
  const id = openPop ? 'simple-popper' : undefined

  const logoOut = () => {
    localStorage.clear()
    window.location.href = '/'
  }

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
              <div className="col-5">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Product..."
                    onChange={handleChange}
                  />
                  <button
                    className="input-group-text"
                    onClick={() => alert('heyy')}
                  >
                    <SearchIcon />
                  </button>
                </div>
                {searchtext && (
                  <div className="result-board">
                    {searchresult.length ? (
                      searchresult.slice(0, 4).map((result) => (
                        <p
                          className="result"
                          onClick={() => {
                            window.location.href = `/shop/product/${result.id}`
                          }}
                        >
                          <img
                            src={PackageImg}
                            className="img-fluid"
                            alt="package-img"
                          />
                          <span>{result.name}</span>
                        </p>
                      ))
                    ) : (
                      <p className="result">No Result</p>
                    )}
                  </div>
                )}
              </div>
              <div className="col-1">
                {props.onShop && (
                  <span
                    className="filter-icon"
                    aria-describedby={id}
                    type="button"
                    onClick={handleClick}
                  >
                    <FilterListIcon />
                    {props.filtercountry !== 'All' && (
                      <p className="showing-data-text">
                        Showing {props.filtercountry}'s Data
                      </p>
                    )}

                    <Popover
                      id={id}
                      open={openPop}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                      }}
                    >
                      <div className="countries-list">
                        <p onClick={() => setcountry('All')}>All</p>
                        <p onClick={() => setcountry('Nigeria')}>Nigeria</p>
                        <p onClick={() => setcountry('Ghana')}>Ghana</p>
                        <p onClick={() => setcountry('South Africa')}>
                          South Africa
                        </p>
                      </div>
                    </Popover>
                  </span>
                )}
              </div>
              <div className="col-3">
                <button className="cart-button" onClick={() => setopen(!open)}>
                  Cart <ShoppingCartIcon />{' '}
                  {props.cart.length ? (
                    <span className="badge bg-secondary cart-counter">
                      {props.cart.length}
                    </span>
                  ) : null}
                </button>
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <div className="logout-board" onClick={() => logoOut()}>
        <PowerSettingsNewIcon />
      </div>
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

const mapToDispatchProps = {
  reduceProductInCart,
  deleteProductInCart,
  setCountryFilter,
  stopPageLoading,
}

export default connect(selectors, mapToDispatchProps)(AuthHeader)
