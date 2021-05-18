import React from 'react'
import './index.scss'
import numeral from 'numeral'
import PackageImg from '../../assets/imgs/package.png'
import AddIcon from '@material-ui/icons/Add'
import { Link } from 'react-router-dom'

export const ProductsView = (props) => {
  return (
    <div className="product-list-view">
      <div className="product-list">
        {props.products.map((product, id) => (
          <div className="product" key={id}>
            <span onClick={() => props.addToCart(product, props)}>
              <AddIcon className="add-icon" />
            </span>
            <div className="img">
              <img
                src={PackageImg}
                alt={`${product.name} img`}
                className="img-fluid"
              />
            </div>
            <div className="info">
              <p className="product-name">{product.name}</p>
              <p className="product-price">
                ${numeral(product.price).format('0,0')}
              </p>
              <Link to={`/shop/product/${product.id}`}>
                <button className="view-product">View</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
