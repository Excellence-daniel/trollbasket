import React, { useEffect, useState } from 'react'
import AuthHeader from '../../components/AuthedHeader'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'
import './index.scss'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import selectors from './redux/selector'
import { saveProductInCart } from './redux/action'
import { products } from '../../utils/constants/products'
import { categories } from '../../utils/constants/categories'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow'
import { ProductsView } from '../../components/ProductsView'
import { BackdropComponent } from '../../components/Backdrop'
import EmptyState from '../../components/EmptyState'

const Shop = (props) => {
  const [sortedData, setgroupings] = useState([])

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line
  }, [props.filtercountry])

  const fetchData = () => {
    const allcategories =
      props.filtercountry !== 'All' ? props.filteredCategories : categories
    const groupings = []
    allcategories.forEach((category) => {
      let groupedCategory = {
        categoryid: category.id,
        categoryname: category.name,
        products: [],
      }

      products.forEach((product) => {
        if (product.categoryIds.includes(category.id)) {
          groupedCategory.products.push(product)
        }
      })
      groupings.push(groupedCategory)
    })
    setgroupings(groupings)
  }

  const addToCart = (product, props) => {
    props.saveProductInCart(product)
    props.enqueueSnackbar(`Added ${product.name} to cart`, {
      variant: 'success',
    })
  }

  return (
    <div className="shop-001">
      <AuthHeader onShop={true} />
      {props.pageLoading ? (
        <BackdropComponent open={true} />
      ) : (
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 category-group">
              {!sortedData.length ? (
                <EmptyState text="No Products for selected country" />
              ) : (
                sortedData.map((group, id) => (
                  <div className="category" key={id}>
                    <h3 className="category-name">
                      <p>
                        {group.categoryname} <ArrowRightAltIcon />{' '}
                      </p>
                      <span className="see-more">
                        <Link to={`/shop/category/${group.categoryid}`}>
                          See More <DoubleArrowIcon />
                        </Link>
                      </span>
                    </h3>
                    <div className="category-list">
                      <ProductsView
                        products={group.products.slice(0, 5)}
                        addToCart={addToCart}
                        {...props}
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

const mapToDispatchProps = { saveProductInCart }

export default connect(selectors, mapToDispatchProps)(Shop)
