import React from 'react'

const AlertComp = (props) => {
    
    const clr = props.type == 'warning' ? 'red' : 'green';
    // console.log(clr);

  return (
    <div style={{color: `${clr}`}}>
        <p>{props.msg}</p>
    </div>
  )
}

export default AlertComp