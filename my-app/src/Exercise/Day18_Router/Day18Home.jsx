import React from 'react'
import { Link, useNavigate  } from 'react-router-dom'

const Day18Home = () => {

  const nevidate = useNavigate()
  const id = 8;

  const handleClick = () => {
    nevidate('/contact', {state : {id : id}})
  }

  return (
    

    // <div>
    //   <div>Home</div>
    //   <Link to={'/contact'}>Contact</Link> <br/>
    //   <Link to={'/about'}>About</Link>
    // </div>


    <div>
      <div>Home</div>
      <Link to={'/contact'}>Contact</Link> <br />
      <Link to={'/about'}>About</Link> <br /><br />
      <button onClick={handleClick}>Contact</button>
    </div>
    
  )
}

export default Day18Home