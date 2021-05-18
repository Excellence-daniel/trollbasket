import {
  SET_LOADING,
  SET_LOADING_ERROR,
  SAVE_PRODUCT_IN_CART_SUCCESS,
  REDUCE_PRODUCT_IN_CART_SUCCESS,
  DELETE_PRODUCT_IN_CART_SUCCESS,
} from './action'

const initialState = {
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  loading: false,
  errorMessage: '',
}

const addToLS = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart))
}

export const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true }
    case SET_LOADING_ERROR:
      return { ...state, loading: false, errorMessage: action.payload }
    case SAVE_PRODUCT_IN_CART_SUCCESS:
      const index = state.cart.findIndex((x) => x.id === action.payload.id)
      let cart = state.cart
      if (index > -1) {
        cart[index].quantity = Number(cart[index].quantity) + 1
      } else {
        const newProd = { ...action.payload, quantity: 1 }
        cart = [...cart, newProd]
      }
      addToLS(cart)
      return { ...state, cart }
    case REDUCE_PRODUCT_IN_CART_SUCCESS: {
      const index = state.cart.findIndex((x) => x.id === action.payload.id)
      let cart = state.cart
      if (index > -1 && cart[index].quantity >= 1) {
        cart[index].quantity = Number(cart[index].quantity) - 1
      } else {
        cart = cart.splice(index, 0)
        console.log('keeekek', { cart })
      }
      console.log({ cart })
      addToLS(cart)
      return { ...state, cart }
    }

    default:
      return state
  }
}
