import React from 'react'
import Item from './Item'

const HexaDecimalColor = () => {

    const hexaColor = () => {
        let str = '0123456789abcdef'
        let color = ''
        for (let i = 0; i < 6; i++) {
          let index = Math.floor(Math.random() * str.length)
          color += str[index]
        }
        console.log(color)
        return '#' + color
      }

  return (
    <div className='container'>
        <h1>30 Days Of React</h1>
        <h2>Hexadecimal Colors</h2>
        <div className='grid-container'>
            <div><Item count={hexaColor()}/> </div>
            <div><Item count={hexaColor()}/> </div>
            <div><Item count={hexaColor()}/> </div>
            <div><Item count={hexaColor()}/> </div>
            <div><Item count={hexaColor()}/> </div>
            <div><Item count={hexaColor()}/> </div>
            <div><Item count={hexaColor()}/> </div>
            <div><Item count={hexaColor()}/> </div>
            <div><Item count={hexaColor()}/> </div>
            <div><Item count={hexaColor()}/> </div>
            <div><Item count={hexaColor()}/> </div>
            <div><Item count={hexaColor()}/> </div>
            <div><Item count={hexaColor()}/> </div>
            <div><Item count={hexaColor()}/> </div>
            <div><Item count={hexaColor()}/> </div>
            <div><Item count={hexaColor()}/> </div>
            <div><Item count={hexaColor()}/> </div>
            <div><Item count={hexaColor()}/> </div>
            <div><Item count={hexaColor()}/> </div>
            <div><Item count={hexaColor()}/> </div>
            <div><Item count={hexaColor()}/> </div>
            <div><Item count={hexaColor()}/> </div>
            <div><Item count={hexaColor()}/> </div>
            <div><Item count={hexaColor()}/> </div>
            <div><Item count={hexaColor()}/> </div>
            <div><Item count={hexaColor()}/> </div>
            <div><Item count={hexaColor()}/> </div>
            <div><Item count={hexaColor()}/> </div>
            <div><Item count={hexaColor()}/> </div>
            <div><Item count={hexaColor()}/> </div>
            <div><Item count={hexaColor()}/> </div>
            <div><Item count={hexaColor()}/> </div>
        </div>
    </div>
  )
}

export default HexaDecimalColor