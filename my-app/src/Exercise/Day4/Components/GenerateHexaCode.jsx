import React from 'react'
import HexadecimalColor from './HexadecimalColor'

const GenerateHexaCode = () => {

    const hexaColor = () => {
        let str = '0123456789abcdef'
        let color = ''
        for (let i = 0; i < 6; i++) {
          let index = Math.floor(Math.random() * str.length)
          color += str[index]
        }
        return '#' + color
      }

  return (
    <div>
        <HexadecimalColor clr={hexaColor()} />
        <HexadecimalColor clr={hexaColor()} />
        <HexadecimalColor clr={hexaColor()} />
        <HexadecimalColor clr={hexaColor()} />
        <HexadecimalColor clr={hexaColor()} />
    </div>
  )
}

export default GenerateHexaCode