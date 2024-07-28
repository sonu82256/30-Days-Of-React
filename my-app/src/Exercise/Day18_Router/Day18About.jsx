import React from 'react'
import { Link } from 'react-router-dom'

const Day18About = () => {
  return (
    <div>
      <Link to={'/'}>Home</Link> <br />
      <Link to={'/contact'}>Contact</Link> <br/>
      <div>About</div>
    </div>
  )
}

export default Day18About