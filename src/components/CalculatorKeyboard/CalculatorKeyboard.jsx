import React from 'react'
import PropTypes from 'prop-types'
import { keyboardBase } from './CalculatorKeyboard.module.css'
import CalculatorButton from '../CalculatorButton'
import listButton from '../listButton'

const CalculatorKeyboard = ({ setScreen }) => {
  const handleButtonAction = (value, typeF) => {
    setScreen(value, typeF)
  }

  return (
    <div className={keyboardBase}>
      {listButton.map(buttonT => (
        <CalculatorButton
          content={buttonT.content}
          type={buttonT.type}
          expand={buttonT.content === '0'}
          onClick={() => handleButtonAction(buttonT.content, buttonT.type)}
        />
      ))}
    </div>
  )
}

CalculatorKeyboard.propTypes = {
  setScreen: PropTypes.func.isRequired,
}

export default CalculatorKeyboard
