export const SET_LOADING = 'SET_LOADING:REGISTER'
export const SET_LOADING_ERROR = 'SET_LOADING_ERROR:REGISTER'

export const CREATE_USER = 'CREATE_USER'
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS'

export const createUser = (payload) => ({
  type: CREATE_USER,
  payload,
})
