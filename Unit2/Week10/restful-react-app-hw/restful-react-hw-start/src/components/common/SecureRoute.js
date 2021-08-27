import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isLoggedIn } from '../..lib/auth'

const SecureRoute = ({ component: Component, path, exact = false }) => {
  if (isLoggedIn()) {
    return <Route component={Component} path={path} exact={exact} />
  }
  return <Redirect to="/login" />
}
export default SecureRoute
