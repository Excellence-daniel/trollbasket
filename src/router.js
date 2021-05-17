import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { withSnackbar } from 'notistack'
import LandingPage from './pages/Landing/landing'
import { Register } from './pages/Register'
import { Login } from './pages/Login'

const AuthRoutes = () => {
  return <></>
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
    <Router>
      <Route
        path="/"
        render={(props) => <UnAuthedRoutes {...props} {...snackbarprops} />}
      />
      <Route path="/" component={AuthRoutes} />
    </Router>
  )
}

export default withSnackbar(AppRoutes)
