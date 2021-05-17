import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from './pages/Landing/landing'
import { Register } from './pages/Register'

const AuthRoutes = () => {
  return <></>
}

const UnAuthedRoutes = () => {
  return (
    <>
      <Route path="/" component={LandingPage} exact />
      <Route path="/register" component={Register} exact />
    </>
  )
}

const AppRoutes = () => {
  return (
    <Router>
      <Route path="/" component={UnAuthedRoutes} />
      <Route path="/" component={AuthRoutes} />
    </Router>
  )
}

export default AppRoutes
