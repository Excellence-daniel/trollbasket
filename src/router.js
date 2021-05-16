import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const AuthRoutes = () => {
  return <></>
}

const UnAuthedRoutes = () => {
  return <></>
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
