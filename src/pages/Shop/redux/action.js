export const SET_LOADING = 'SET_LOADING:SHOP'
export const SET_LOADING_ERROR = 'SET_LOADING_ERROR:SHOP'

export const SAVE_PRODUCT_IN_CART = 'SAVE_PRODUCT_IN_CART'
export const SAVE_PRODUCT_IN_CART_SUCCESS = 'SAVE_PRODUCT_IN_CART_SUCCESS'

export const REDUCE_PRODUCT_IN_CART = 'REDUCE_PRODUCT_IN_CART'
export const REDUCE_PRODUCT_IN_CART_SUCCESS = 'REDUCE_PRODUCT_IN_CART_SUCCESS'

export const DELETE_PRODUCT_IN_CART = 'DELETE_PRODUCT_IN_CART'
export const DELETE_PRODUCT_IN_CART_SUCCESS = 'DELETE_PRODUCT_IN_CART_SUCCESS'

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
