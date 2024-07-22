import React from 'react'

const HexadecimalColor = (props) => {
  // console.log(props.clr)
  return (
    <div style={{backgroundColor: props.clr, height: '50px', textAlign: 'center'}}>
      <p style={{paddingTop: '16px'}}> {props.clr}</p>
    </div>
  )
}

export default HexadecimalColor