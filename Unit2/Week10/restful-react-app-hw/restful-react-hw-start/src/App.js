import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/common/Home'
import NavBar from './components/common/Nav'
import WineIndex from './components/wines/WineIndex'
import WineShow from './components/wines/WineShow'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/wines/:id" component={WineShow} />
        <Route exact path="/wines" component={WineIndex} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  )
}
export default App
