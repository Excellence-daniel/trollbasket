import { combineReducers } from 'redux'
import { usersReducer } from './pages/Register/redux/reducer'
import { shopReducer } from './pages/Shop/redux/reducer'

const initialState = {
  appLoaded: false,
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'APP_LOADED':
      return {
        ...state,
        appLoaded: true,
      }
    default:
      return state
  }
}

const reducers = {
  app: appReducer,
  users: usersReducer,
  shop: shopReducer,
}

const rootReducer = combineReducers(reducers)

export default rootReducer
