export const SET_LOADING = 'SET_LOADING:SHOP'
export const SET_LOADING_ERROR = 'SET_LOADING_ERROR:SHOP'

export const SAVE_PRODUCT_IN_CART = 'SAVE_PRODUCT_IN_CART'
export const SAVE_PRODUCT_IN_CART_SUCCESS = 'SAVE_PRODUCT_IN_CART_SUCCESS'

export const REDUCE_PRODUCT_IN_CART = 'REDUCE_PRODUCT_IN_CART'
export const REDUCE_PRODUCT_IN_CART_SUCCESS = 'REDUCE_PRODUCT_IN_CART_SUCCESS'

export const DELETE_PRODUCT_IN_CART = 'DELETE_PRODUCT_IN_CART'
export const DELETE_PRODUCT_IN_CART_SUCCESS = 'DELETE_PRODUCT_IN_CART_SUCCESS'

export const SET_COUNTRY_FILTER = 'SET_COUNTRY_FILTER'
export const SET_COUNTRY_FILTER_SUCCESS = 'SET_COUNTRY_FILTER_SUCCESS'

export const PAGE_LOADING = 'PAGE_LOADING'
export const PAGE_LOADED_SUCCESS = 'PAGE_LOADED_SUCCESS'

export const saveProductInCart = (payload) => ({
  type: SAVE_PRODUCT_IN_CART,
  payload,
})

export const reduceProductInCart = (payload) => ({
  type: REDUCE_PRODUCT_IN_CART,
  payload,
})

export const deleteProductInCart = (payload) => ({
  type: DELETE_PRODUCT_IN_CART,
  payload,
})

export const setCountryFilter = (payload) => ({
  type: SET_COUNTRY_FILTER,
  payload,
})

export const stopPageLoading = (payload) => ({
  type: PAGE_LOADING,
  payload,
})
