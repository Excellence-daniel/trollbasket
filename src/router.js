import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from './pages/Landing/landing'

const AuthRoutes = () => {
  return <></>
}

const UnAuthedRoutes = () => {
  return (
    <>
      <Route path="/" component={LandingPage} />
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
