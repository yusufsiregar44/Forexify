import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home'
import Market from '../Market'
import Currency from '../Currency'
import FourOFour from '../FourOFour'

const Router = () => (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route exact path='/market' component={ Market } />
    <Route path='/market/:currency' component={ Currency } />
    <Route component={ FourOFour } />
  </Switch>
)

export default Router
