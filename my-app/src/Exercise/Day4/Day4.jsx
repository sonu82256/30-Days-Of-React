import React from 'react'
import ButtonComp from './Components/ButtonComp'
import InputComp from './Components/InputComp'
import AlertComp from './Components/AlertComp'
import ImagesComp from './Components/ImagesComp'
import SubscribeComp from './Components/SubscribeComp'

//import images
import First from './Images/First.png'
import Second from './Images/Second.png'
import Three from './Images/Three.png'
import Four from './Images/Four.png'

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

        <h3 style={{textAlign:'center'}}>Frontend Technologies</h3>
        <div style={{ display: 'flex', alignItems: 'center'}}>
            <ImagesComp img={First} />
            <ImagesComp img={Second} />
            <ImagesComp img={Three} />
            <ImagesComp img={Four} />
        </div>

        <div style={{marginTop: '50px', backgroundColor: 'lightblue'}}>
            <SubscribeComp />
        </div>
    </>
  )
}

export default Day4