import React from 'react'


const ImagesComp = (props) => {

  return (
    <div style={{display:'flex' , alignItems: 'center'}}>
        <img src={props.img} alt="images" style={{marginRight: '10px', width: '150px'}} />
    </div>
  )
}

export default ImagesComp