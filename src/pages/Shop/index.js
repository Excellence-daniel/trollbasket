import React from 'react'
import AuthHeader from '../../components/AuthedHeader'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'
import PackageImg from '../../assets/imgs/package.png'
import AddIcon from '@material-ui/icons/Add'
import './index.scss'
import { connect } from 'react-redux'
import selectors from './redux/selector'
import { saveProductInCart } from './redux/action'
import Popover from '@material-ui/core/Popover'

const products = [
  { name: 'Addidas Blue', price: 3000, id: 0 },
  { name: 'Addidas Black', price: 4200, id: 1 },
  { name: 'Nike Blue', price: 2600, id: 2 },
  { name: 'Blue Nike', price: 2560, id: 3 },
  { name: 'Loafers', price: 2300, id: 4 },
]

const Shop = (props) => {
  console.log({ props })
  const [anchorEl, setAnchorEl] = React.useState(null)

  const addToCart = (product, props) => {
    props.saveProductInCart(product)
    props.enqueueSnackbar(`Added ${product.name} to cart`, {
      variant: 'success',
    })
  }

  const handleClick = (event) => {
    console.log({ event })
    setAnchorEl(event.target)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  console.log({ open, anchorEl })
  const id = open ? 'simple-popover' : undefined
  return (
    <div className="shop-001">
      <AuthHeader />
      <div className="container">
        <div className="row">
          <div className="col-12 category-group">
            <h3 className="category-name">
              Drinks & Smokes <ArrowRightAltIcon />{' '}
            </h3>
            <div className="category-list">
              {products.map((product) => (
                <div className="product">
                  <p
                    className="add-icon"
                    onClick={() => addToCart(product, props)}
                    aria-describedby={id}
                    variant="contained"
                    color="primary"
                    //   onClick={handleClick}
                  >
                    <AddIcon />
                  </p>
                  <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    className="popup-counter"
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}
                  >
                    {/* <Typography className={classes.typography}> */}
                    The content of the Popover.
                    {/* </Typography> */}
                  </Popover>

                  <img
                    src={PackageImg}
                    className="product-img"
                    alt="product-img"
                  />
                  <p className="product-name">{product.name}</p>
                  <p className="product-price">${product.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapToDispatchProps = { saveProductInCart }

export default connect(selectors, mapToDispatchProps)(Shop)
