import React from 'react'
import PropTypes from 'prop-types'
import {
  numberButton,
  exponentialButton,
  operationButton,
  expanded,
  equal,
} from './CalculatorButton.module.css'

const CalculatorButton = ({ onClick, type, content, expand }) => {
  const especiality = () => {
    switch (type) {
      case 'number':
        return numberButton
      case 'operation':
        return operationButton
      case 'equal':
        return equal
      default:
        return exponentialButton
    }
  }

  return (
    <button
      type='button'
      className={`${especiality()} ${expand ? expanded : null}`}
      onClick={onClick}
    >
      {content}
    </button>
  )
}

CalculatorButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  expand: PropTypes.bool,
}

CalculatorButton.defaultProps = {
  expand: false,
}

export default CalculatorButton
