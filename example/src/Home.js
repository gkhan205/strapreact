import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div className='jumbotron'>
    <h1>StrapReact</h1>
    <p>ReactJS UI Component for Bootstrap 5</p>

    <hr />

    <Link to='/alert' className='btn btn-success'>
      Check Components
    </Link>
  </div>
)

export default Home
