import { put, call, takeLatest } from 'redux-saga/effects'
import {
  SAVE_PRODUCT_IN_CART_SUCCESS,
  SAVE_PRODUCT_IN_CART,
  REDUCE_PRODUCT_IN_CART,
  REDUCE_PRODUCT_IN_CART_SUCCESS,
} from './action'

function* saveProductInCart(action) {
  yield put({ type: SAVE_PRODUCT_IN_CART_SUCCESS, payload: action.payload })
}

function* reduceProductInCart(action) {
  console.log({ action })
  yield put({ type: REDUCE_PRODUCT_IN_CART_SUCCESS, payload: action.payload })
}

function* shopSagas() {
  yield takeLatest(SAVE_PRODUCT_IN_CART, saveProductInCart)
  yield takeLatest(REDUCE_PRODUCT_IN_CART, reduceProductInCart)
}

export default shopSagas
