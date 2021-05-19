import React, { useEffect, useState } from 'react'
import AuthedHeader from '../../components/AuthedHeader'
import PackageImg from '../../assets/imgs/package.png'
import './index.scss'
import { products } from '../../utils/constants/products'
import numeral from 'numeral'
import { categories } from '../../utils/constants/categories'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import { connect } from 'react-redux'
import { saveProductInCart } from './redux/action'
import selectors from './redux/selector'
import { BackdropComponent } from '../../components/Backdrop'
import { ProductsView } from '../../components/ProductsView'

const ProductDetailView = (props) => {
  const [selectedproduct, setselectedproduct] = useState({})
  const [similarproducts, setsimilarproducts] = useState([])

  useEffect(() => {
    const {
      location: { pathname },
    } = props
    const splits = pathname.split('/')
    const id = splits[3]
    fetchProduct(id)
    getSimilarProducts(id)
    // eslint-disable-next-line
  }, [props])

  const fetchProduct = (id) => {
    const product = products.find((x) => x.id === id)
    if (!product) {
      props.enqueueSnackbar('Invalid Product Id', { variant: 'error' })
      window.location.href = '/shop'
    }
    product.tags = []

    for (const id of product.categoryIds) {
      const tags = categories.find((x) => x.id === id).tags
      product.tags = [...product.tags, ...tags]
    }
    setselectedproduct(product)
  }

  const getSimilarProducts = (id) => {
    const product = products.find((x) => x.id === id)
    const randomcategoryId = product.categoryIds[product.categoryIds.length - 1]
    const similarProducts = []
    products.forEach((product) => {
      if (
        product.categoryIds.includes(randomcategoryId) &&
        similarProducts.length < 4 &&
        product.id !== id
      ) {
        similarProducts.push(product)
      }
    })
    setsimilarproducts(similarProducts)
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
      <div className="product-detail-page-00">
        {props.pageLoading ? (
          <BackdropComponent open={true} />
        ) : (
          <div className="container">
            <div className="row">
              <div className="col-6 product-img-col">
                <img
                  src={PackageImg}
                  className="product-img img-fluid"
                  alt="product-img"
                />
              </div>
              <div className="col-6">
                <div className="product-info">
                  <div className="product-name">{selectedproduct.name}</div>
                  <div className="product-price">
                    ${numeral(selectedproduct.price).format('0,0')}
                  </div>
                  <div className="product-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime mollitia, molestiae quas vel sint commodi repudiandae
                    consequuntur voluptatum laborum numquam blanditiis harum
                    quisquam eius sed odit fugiat iusto fuga praesentium optio,
                    eaque rerum! Provident similique accusantium nemo autem.
                    Veritatis obcaecati tenetur iure eius earum ut molestias
                    architecto voluptate aliquam nihil, eveniet aliquid culpa
                    officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                    harum nesciunt ipsum debitis quas aliquid.
                  </div>
                  <div className="product-tags">
                    {(selectedproduct?.tags || [])
                      .slice(0, 5)
                      .map((tag, id) => (
                        <span className="tag" key={id}>
                          {tag}
                        </span>
                      ))}
                  </div>
                  <button
                    className="add-cart"
                    onClick={() => addToCart(selectedproduct, props)}
                  >
                    Add To Cart <AddShoppingCartIcon />{' '}
                  </button>
                </div>
              </div>
            </div>

            <div className="row similar-products">
              <h4>Similar Products</h4>
              <ProductsView
                products={similarproducts}
                addToCart={addToCart}
                {...props}
              />
            </div>
          </div>
        )}
      </div>
    </>
  )
}

const mapToDispatchProps = {
  saveProductInCart,
}

export default connect(selectors, mapToDispatchProps)(ProductDetailView)
