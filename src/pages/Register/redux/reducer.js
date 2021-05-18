import {
  SET_LOADING,
  SET_LOADING_ERROR,
  CREATE_USER_SUCCESS,
  LOGIN_USER_SUCCESS,
} from './action'

const initialState = {
  loading: false,
  errorMessage: '',
  user: JSON.parse(localStorage.getItem('user')) || {},
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true }
    case SET_LOADING_ERROR:
      return { ...state, loading: false, errorMessage: action.payload }
    case CREATE_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload }
    case LOGIN_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload }
    default:
      return { ...state }
  }
}
