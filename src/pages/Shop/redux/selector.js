import { createSelector, createStructuredSelector } from 'reselect'

const shopObject = (state = {}) => state.shop

const loading = createSelector(shopObject, (shopObject) => shopObject.loading)

export const cart = createSelector(shopObject, (shopObject) => shopObject.cart)

const filteredCategories = createSelector(
  shopObject,
  (shopObject) => shopObject.filteredCategories,
)

const filtercountry = createSelector(
  shopObject,
  (shopObject) => shopObject.filtercountry,
)

const errorMessage = createSelector(
  shopObject,
  (shopObject) => shopObject.errorMessage,
)

const pageLoading = createSelector(
  shopObject,
  (shopObject) => shopObject.pageLoading,
)

const selectors = createStructuredSelector({
  loading,
  cart,
  errorMessage,
  filtercountry,
  filteredCategories,
  pageLoading,
})

export default selectors
