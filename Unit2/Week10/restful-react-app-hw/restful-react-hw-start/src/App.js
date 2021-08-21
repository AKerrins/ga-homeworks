import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/common/Home'
import NavBar from './components/common/Nav'
import WineIndex from './components/wines/WineIndex'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/wines" component={WineIndex} />
      </Switch>
    </BrowserRouter>
  )
}
export default App
