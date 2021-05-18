import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { withSnackbar } from 'notistack'
import LandingPage from './pages/Landing/landing'
import Register from './pages/Register'
import Login from './pages/Login'
import { store } from './store'
import { Provider } from 'react-redux'
import Shop from './pages/Shop'
import CategoryView from './pages/Shop/categoryView'
import ProductDetailView from './pages/Shop/productView'

const AuthRoutes = (props) => {
  return localStorage.getItem('x-access-token') ? (
    <>
      <Route path="/" render={() => <Shop {...props} />} />
      <Route
        path="/category/:id"
        render={() => <CategoryView {...props} />}
        exact
      />
      <Route
        path="/product/:id"
        render={() => <ProductDetailView {...props} />}
        exact
      />
    </>
  ) : (
    <Redirect to="/login" />
  )
}

const UnAuthedRoutes = (props) => {
  return (
    <>
      <Route path="/" render={LandingPage} exact />
      <Route path="/register" render={() => <Register {...props} />} exact />
      <Route path="/login" render={() => <Login {...props} />} exact />
    </>
  )
}

const AppRoutes = (props) => {
  const snackbarprops = props
  return (
    <Provider store={store}>
      <Router>
        <Route
          path="/"
          render={(props) => <UnAuthedRoutes {...props} {...snackbarprops} />}
        />
        <Route
          path="/shop"
          render={(props) => <AuthRoutes {...props} {...snackbarprops} />}
        />
      </Router>
    </Provider>
  )
}

export default withSnackbar(AppRoutes)
