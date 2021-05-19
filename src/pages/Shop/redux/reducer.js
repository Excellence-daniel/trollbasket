import {
  SET_LOADING,
  SET_LOADING_ERROR,
  SAVE_PRODUCT_IN_CART_SUCCESS,
  REDUCE_PRODUCT_IN_CART_SUCCESS,
  DELETE_PRODUCT_IN_CART_SUCCESS,
  SET_COUNTRY_FILTER_SUCCESS,
  PAGE_LOADED_SUCCESS,
} from './action'
import { categories } from '../../../utils/constants/categories'

const initialState = {
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  loading: false,
  filteredCategories: [],
  filtercountry: 'All',
  errorMessage: '',
  pageLoading: false,
}

const addToLS = (cart) => {
  return localStorage.setItem('cart', JSON.stringify(cart))
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
      if (action.payload.quantity > 0) {
        const data = state.cart.map((item) => {
          if (item.id === action.payload.id) item = action.payload
          return item
        })
        addToLS(data)
        return { ...state, cart: data }
      } else {
        const newcart = [
          ...state.cart.filter((x) => x.id !== action.payload.id),
        ]
        addToLS(newcart)
        return {
          ...state,
          cart: newcart,
        }
      }
    }
    case DELETE_PRODUCT_IN_CART_SUCCESS: {
      const newcart = [...state.cart.filter((x) => x.id !== action.payload.id)]
      addToLS(newcart)
      return {
        ...state,
        cart: newcart,
      }
    }
    case SET_COUNTRY_FILTER_SUCCESS: {
      const country = action.payload
      const categorys = []
      if (country !== 'All') {
        categories.forEach((category) => {
          if (category.availableIn.includes(country)) {
            categorys.push(category)
          }
        })
      }
      return {
        ...state,
        filteredCategories: categorys,
        filtercountry: country,
      }
    }
    case PAGE_LOADED_SUCCESS:
      return { ...state, pageLoading: action.payload }
    default:
      return { ...state }
  }
}
