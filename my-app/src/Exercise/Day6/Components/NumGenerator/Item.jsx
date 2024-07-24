import React from 'react'

const CheckPrime = (num) => { 
    let result = true;
    if(num < 2) return false;
    for(let i = 2; i < num; i++){
        if(num % i == 0) return false;
    }
    return result;
}

const Item = (props) => {
    const x = props.count;
    // console.log(x)
    const color = x %2 == 0 ? 'green' : 'yellow'
    // console.log(color)

    const finalColor = CheckPrime(x) ? 'red' : color;
    console.log(finalColor)
  return (
    <div className='grid-item' style={{backgroundColor: `${finalColor}`}} >{props.count}</div>
  )
}

export default Item