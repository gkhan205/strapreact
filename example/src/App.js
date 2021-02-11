import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import ComponentRoutes from './ComponentRoutes'

const App = () => {
  return (
    <div className='container'>
      <Switch>
        <Route exact path='/' component={Home} />
        <ComponentRoutes />
      </Switch>
    </div>
  )
}

export default App
