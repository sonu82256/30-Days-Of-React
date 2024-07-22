import React from 'react'
import ButtonComp from './Components/ButtonComp'
import InputComp from './Components/InputComp'
import AlertComp from './Components/AlertComp'
import ImagesComp from './Components/ImagesComp'
import SubscribeComp from './Components/SubscribeComp'
import GenerateHexaCode from './Components/GenerateHexaCode'
import Profile from './Components/Profile'

//import images
import First from './Images/First.png'
import Second from './Images/Second.png'
import Three from './Images/Three.png'
import Four from './Images/Four.png'

import './CSS/SubscribeStyle.css'
import './CSS/Profile.css'
import './CSS/HexaColor.css'
import './CSS/Icon.css'


const Day4 = () => {
  return (
    <>
        <ButtonComp btn={'Like'}/>
        <ButtonComp btn={'Share'}/>
        <ButtonComp btn={'Subscribe'}/>

        <InputComp inpt={'Enter an Integer'}/>
        <InputComp inpt={'Enter a String'}/>

        <AlertComp msg = {'Warning alert'} type = {'warning'}/>
        <AlertComp msg = {'Success alert'} type = {'success'}/>


        <div className='icon-container'>
          <h3 >Frontend Technologies</h3>
          <div className='icon-img'>
              <ImagesComp img={First} />
              <ImagesComp img={Second} />
              <ImagesComp img={Three} />
              <ImagesComp img={Four} />
          </div>
        </div>

        <div className='container' >
            <SubscribeComp />
        </div>

       
        <div className='hexa-container'>
          <GenerateHexaCode />
        </div>
        
        <div className='profile-container'>
            <Profile />
        </div>
        
        
    </>
  )
}

export default Day4