import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { HelloWorld } from './HelloWorld'

// High-level routes for the application
// Sub-routes should be nested within components
export const Routes = () => (
  <Switch>
    <Route exact path='/'>
      <HelloWorld />
    </Route>
  </Switch>
)
