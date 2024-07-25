import React from 'react'

const Button = (props) => {
  return (
    <>
        <button onClick={props.onClick}> {props.btn}</button>
    </>
  )
}

export default Button