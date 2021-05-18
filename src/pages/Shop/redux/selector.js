import { createSelector, createStructuredSelector } from 'reselect'

const shopObject = (state = {}) => state.shop

const loading = createSelector(shopObject, (shopObject) => shopObject.loading)

const cart = createSelector(shopObject, (shopObject) => shopObject.cart)

const errorMessage = createSelector(
  shopObject,
  (shopObject) => shopObject.errorMessage,
)

const selectors = createStructuredSelector({ loading, cart, errorMessage })

export default selectors
