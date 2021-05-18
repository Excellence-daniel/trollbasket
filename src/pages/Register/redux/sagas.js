import { put, call, takeLatest } from 'redux-saga/effects'
import Server from '../../../utils/server'
import {
  SET_LOADING_ERROR,
  CREATE_USER,
  SET_LOADING,
  CREATE_USER_SUCCESS,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
} from './action'

function* registerUser(action) {
  yield put({ type: SET_LOADING })
  try {
    const response = yield call(
      Server.postDataNoAuth,
      '/users/create',
      action.payload,
    )
    localStorage.setItem('x-access-token', response.token)
    localStorage.setItem('user', JSON.stringify(response))
    yield put({ type: CREATE_USER_SUCCESS, payload: response })
  } catch (error) {
    yield put({
      type: SET_LOADING_ERROR,
      payload:
        error?.response?.data?.message ||
        error?.response?.message ||
        error?.message ||
        error,
    })
  }
}

function* loginUser(action) {
  yield put({ type: SET_LOADING })
  try {
    const response = yield call(
      Server.postDataNoAuth,
      '/users/login',
      action.payload,
    )
    localStorage.setItem('x-access-token', response.token)
    localStorage.setItem('user', JSON.stringify(response))
    yield put({ type: LOGIN_USER_SUCCESS, payload: response })
  } catch (error) {
    yield put({
      type: SET_LOADING_ERROR,
      payload:
        error?.response?.data?.message ||
        error?.response?.message ||
        error?.message ||
        error,
    })
  }
}

function* usersSaga() {
  yield takeLatest(CREATE_USER, registerUser)
  yield takeLatest(LOGIN_USER, loginUser)
}

export default usersSaga
