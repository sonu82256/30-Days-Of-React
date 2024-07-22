import React from 'react'
import { Checkmark } from 'react-checkmark'

const Profile = () => {
  return (
    <div>
        <img className='profile-img' src="https://lh3.googleusercontent.com/a/ACg8ocLxd1SRfreGejfYtDUSmp7XeTnjsx4ZyTXurQfdJZPhtx_6Yrx0=s576-c-no" alt="" />
        <p className='profile-name'>SONU KUMAR </p>
        <p className='role'> Software Developer</p>
        <p className='skills'> SKILLS</p>

        <div style={{paddingLeft: '5px'}}>
            <button className='btn'>HTML</button>
            <button className='btn'>CSS</button>
            <button className='btn'>Sass</button>
            <button className='btn'>JS</button>
            <button className='btn'>React</button>
            <button className='btn'>Redux</button>
            <button className='btn'>Node</button>
            <button className='btn'>MongoDb</button>
            <button className='btn'>Python</button>
            <button className='btn'>Flask</button>
            <button className='btn'>Django</button>
            <button className='btn'>Numpy</button>
            <button className='btn'>Pandas</button>
            <button className='btn'>Data Analyst</button>
            <button className='btn'>MySql</button>
            <button className='btn'>GraphQl</button>
            <button className='btn'>D3.js</button>
            <button className='btn'>Gateby</button>
            <button className='btn'>Docker</button>
            <button className='btn'>Heroku</button>
            <button className='btn'>Git</button>
        </div>
        <p className='last-text'>Joined on Aug 12, 2021</p>
    </div>
  )
}

export default Profile