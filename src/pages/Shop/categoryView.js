import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import selectors from './redux/selector'
import { saveProductInCart } from './redux/action'
import AuthedHeader from '../../components/AuthedHeader'
import { products } from '../../utils/constants/products'
import { categories } from '../../utils/constants/categories'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { ProductsView } from '../../components/ProductsView'
import { Link } from 'react-router-dom'

const CategoryView = (props) => {
  const [categoryproducts, setproducts] = useState([])
  const [selectedcategory, setcategory] = useState({})
  useEffect(() => {
    const {
      location: { pathname },
    } = props
    const splits = pathname.split('/')
    const id = splits[3]
    fetchCategory(id)
    fetchProduct(id)
  }, [])

  const fetchCategory = (id) => {
    const category = categories.find((x) => x.id === id)
    if (!category) {
      props.enqueueSnackbar('Invalid Category ID', {
        variant: 'error',
      })
      window.location.href = '/shop'
    }
    setcategory(category)
  }

  const fetchProduct = (id) => {
    const sortedProducts = []
    products.map((product) => {
      if (product.categoryIds.includes(id)) {
        sortedProducts.push(product)
      }
    })
    setproducts(sortedProducts)
  }

  const addToCart = (product, props) => {
    props.saveProductInCart(product)
    props.enqueueSnackbar(`Added ${product.name} to cart`, {
      variant: 'success',
    })
  }

  return (
    <>
      <AuthedHeader />
      <div className="shop-category-view">
        <div className="heading">
          <h3 className="category-name">{selectedcategory.name}</h3>
          <p>
            <Link to="/shop">
              <ArrowBackIcon /> See All Products
            </Link>
          </p>
        </div>

        <div className="product-list">
          <ProductsView
            products={categoryproducts}
            addToCart={addToCart}
            {...props}
          />
        </div>
      </div>
    </>
  )
}

const mapToDispatchProps = { saveProductInCart }

export default connect(selectors, mapToDispatchProps)(CategoryView)
