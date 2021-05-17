import { combineReducers } from 'redux'
import { usersReducer } from './pages/Register/redux/reducer'

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
}

const rootReducer = combineReducers(reducers)

export default rootReducer
