import React, { useState } from 'react'
import './Auth.css'

const Auth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    return (
        <div className='container'>
            <div className='form-container'>
                <div className="form-toggle">
                    <button className={isLoggedIn ? 'active': ''} onClick={()=> setIsLoggedIn(true)}>Login</button>
                    <button className={isLoggedIn ? '':'active'} onClick={() => setIsLoggedIn(false)}>Signup</button>
                </div>
                {isLoggedIn ? 
                <>
                    <div className="form">
                        <h2>Login Form</h2>
                        <input type="text" placeholder='Email' />
                        <input type="text" placeholder='Password'/>
                        <a href='#' onClick={ ()=> setIsLoggedIn(false) }>Forgot Password?</a>
                        <button>Login</button>
                        <p>Not a member? <a href="#" onClick={ ()=> setIsLoggedIn(false) }>Signup Now</a> </p>
                    </div>
                </> :
                <>
                    <div className='form'>
                        <h2>Signup Form</h2>
                        <input type="text" placeholder='Email Address' />
                        <input type="text" placeholder='Password'/>
                        <input type="text" placeholder='Confirm Password'/>
                        <button>Signup</button>
                        <p>Already member? <a href="#" onClick={ ()=> setIsLoggedIn(true) }>Login</a></p>
                    </div>
                </>
                 }
            </div>
            
        </div>
    )
}

export default Auth