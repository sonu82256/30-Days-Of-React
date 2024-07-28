import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Day18Contact = () => {
    const location = useLocation();
    console.log(location.state.id);
  return (
    <div>
      <Link to={'/'}>Home</Link>
      <div>Contact</div>
      <Link to={'/about'}>About</Link>
      <h1>Hello i am from contact and my id is {location.state.id} </h1>
    </div>
  )
}

export default Day18Contact