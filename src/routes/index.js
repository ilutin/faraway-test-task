import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { routes } from 'config/routes'
import Home from './Home/Home'
import Person from './Person/Person'
import NotFound from './NotFound/NotFound'

const Routes = () => (
  <Switch>
    <Route path={routes.root()} component={Home} exact />
    <Route path="/people/:name" component={Person} />
    <Route path="*" component={NotFound} />
  </Switch>
)

export default Routes
