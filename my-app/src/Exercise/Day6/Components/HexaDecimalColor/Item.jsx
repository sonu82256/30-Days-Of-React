import React from 'react'

const Item = (props) => {
  return (
    <div className='grid-item' style={{backgroundColor: `${props.count}`}} >{props.count}</div>
  )
}

export default Item