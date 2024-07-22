import React from 'react'


const SubscribeComp = () => {
  return (
    <div style={{textAlign: 'center', paddingBottom: '20px'}}>
        <p style={{fontSize: '25px'}}>Subscribe</p>
        <p> Sign up with your email address to recieve news and updates</p>
        <div style={{ marginBottom: '15px'}}>
            <input type="text" placeholder='First Name' style={{paddingLeft:'10px', paddingRight: 'px', marginRight:'10px', borderRadius: '4px', border: 'none', height: '20px', width: '110px'}}/>
            <input type="text" placeholder='Last Name'  style={{paddingLeft:'10px', paddingRight: 'px', marginRight:'10px', borderRadius: '4px', border: 'none', height: '20px', width: '110px'}}/>
            <input type="text" placeholder='Email'  style={{paddingLeft:'10px', paddingRight: 'px', marginRight:'10px', borderRadius: '4px', border: 'none', height: '20px', width: '110px'}}/>
        </div>
        <button style={{backgroundColor: 'red', color: 'white', border: 'none', height: '25px', width: '180px', borderRadius: '5px'}} >Subscribe</button>
    </div>
  )
}

export default SubscribeComp