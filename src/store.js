import rootReducer from './rootReducers'
import sagas from './rootSagas'
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import * as Sentry from '@sentry/react'

const sentryReduxEnhancer = Sentry.createReduxEnhancer()
const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]
const enhancers = [applyMiddleware(...middlewares), sentryReduxEnhancer]

export const store = createStore(rootReducer, composeWithDevTools(...enhancers))

sagaMiddleware.run(sagas)
