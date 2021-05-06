import React from 'react'
import { Route, NavLink } from 'react-router-dom'

import { componentRoutes } from './routes'

const ComponentRoutes = () => {
  return (
    <div className='row'>
      <div className='col-md-9 mt-5'>
        {componentRoutes.map((route, index) => (
          <Route
            exact
            key={index}
            path={route.path}
            component={route.component}
          />
        ))}
      </div>
      <div className='col-md-3 mt-5'>
        <ul className='list-group mt-5'>
          {componentRoutes.map((route, index) => (
            <NavLink
              key={index}
              className='list-group-item text-dark'
              activeClassName='active text-white'
              to={route.path}
            >
              {route.name}
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ComponentRoutes
