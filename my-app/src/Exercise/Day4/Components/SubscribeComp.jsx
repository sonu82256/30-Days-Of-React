import React from 'react'


const SubscribeComp = () => {
  return (
    <div >
        <p className='title'>Subscribe</p>
        <p className='text'> Sign up with your email address to recieve news and updates</p>
        <div style={{ marginBottom: '15px'}}>
            <input type="text" placeholder='First Name' className='input'/>
            <input type="text" placeholder='Last Name' className='input' />
            <input type="text" placeholder='Email' className='input'/>
        </div>
        <button className='subscribe-btn'>Subscribe</button>
    </div>
  )
}

export default SubscribeComp