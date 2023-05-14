import React, { useEffect, useState } from 'react'
import { evaluate } from 'mathjs'
import CalculatorKeyboard from '../CalculatorKeyboard'
import ESPECIAL_BUTTONS from '../ESPECIAL_BUTTONS'
import {
  calculatorShowText,
  calculatorResult,
  calculatorContainer,
} from './Calculator.module.css'

const Calculator = () => {
  const [textInScreen, setTextInScreen] = useState('0')
  const [textNotShow, setTextNotShow] = useState('')
  const [result, setResult] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [lastIsOp, setLastIsOp] = useState(true)
  const [countNum, setCountNum] = useState(0)
  const [hasPoint, setHasPoint] = useState(false)
  const [reset, setReset] = useState(false)

  const calculetor = () => {
    if (showResult) {
      try {
        const resp = evaluate(textNotShow)
        if (resp < 0 || resp > 999999999 || `${resp}`.length > 9) {
          setResult('ERROR')
        } else {
          setResult(resp)
        }
      } catch (error) {
        setResult('ERROR')
      }
    }
  }

  useEffect(() => {
    if (textNotShow.length > 0) {
      calculetor()
    }
  }, [textNotShow])

  const handleObtainKey = (value, type) => {
    if (value !== ESPECIAL_BUTTONS.POINT || !hasPoint) {
      if (type === 'number') {
        let text = textInScreen
        if (textInScreen === '0') {
          text = ''
        }

        if (reset) {
          text = ''
          setReset(false)
        }
        setCountNum(countNum + 1)
        setLastIsOp(false)
        if (value === ESPECIAL_BUTTONS.POINT && !hasPoint && countNum < 9) {
          if (lastIsOp) {
            setTextNotShow(`${textNotShow}0${value}`)
            setTextInScreen(`${text}0${value}`)
            setCountNum(countNum + 1)
            setHasPoint(true)
          } else {
            setTextNotShow(textNotShow + value)
            setTextInScreen(text + value)
            setHasPoint(true)
          }
          setShowResult(true)
        } else if (countNum < 9) {
          setTextNotShow(textNotShow + value)
          setTextInScreen(text + value)
          setShowResult(true)
        }
      } else if (type === 'operation') {
        if (lastIsOp) {
          const text = `${textNotShow}`
          if (text[text.length - 1] === '-' && text[text.length - 2] === '+') {
            setCountNum(countNum - 1)
            setTextNotShow(text.slice(0, -2))
          } else {
            setTextNotShow(text.slice(0, -1))
          }
        }

        setLastIsOp(true)
        setReset(true)
        setShowResult(false)
        setHasPoint(false)
        setCountNum(0)
        switch (value) {
          case ESPECIAL_BUTTONS.DIVIDE:
            setTextNotShow(`${textNotShow}/`)
            break
          case ESPECIAL_BUTTONS.MULTIPLY:
            setTextNotShow(`${textNotShow}*`)
            break
          case ESPECIAL_BUTTONS.MINUS:
            setTextNotShow(`${textNotShow}+-`)
            setTextInScreen('-')
            setCountNum(1)
            setReset(false)
            break
          default:
            setTextNotShow(`${textNotShow}${value}`)
        }
      } else if (type === 'equal') {
        if (result !== 'ERROR') {
          setShowResult(true)
          setTextInScreen(result)
          setTextNotShow(result)
        } else {
          setShowResult(true)
          setTextInScreen('')
          setTextNotShow('')
        }
      } else if (value === ESPECIAL_BUTTONS.AC) {
        setTextInScreen('0')
        setTextNotShow('')
        setLastIsOp(true)
        setResult('')
        setCountNum(0)
        setReset(false)
      } else if (value === ESPECIAL_BUTTONS.PERCENT) {
        if (!lastIsOp) {
          setTextNotShow(textNotShow + value)
          setTextInScreen(textInScreen + value)
        }
      } else if (value === ESPECIAL_BUTTONS.PARENTESIS) {
        if (textInScreen !== '0') {
          if (textInScreen[0] === '-') {
            const newTextNeg = textInScreen.slice(1)
            const textRe = `${textNotShow}`.replace(
              new RegExp(`${textInScreen}$`),
              '',
            )
            setTextNotShow(textRe + newTextNeg)
            setTextInScreen(newTextNeg)
            setCountNum(countNum - 1)
          } else {
            const newTextNeg = `-${textInScreen}`
            const regex = new RegExp(`${textInScreen}$`)
            const textRe = `${textNotShow}`.replace(regex, '')
            setTextNotShow(textRe + newTextNeg)
            setTextInScreen(newTextNeg)
            setCountNum(countNum + 1)
          }
        }
      }
    }
  }

  return (
    <div className={calculatorContainer}>
      <div className={calculatorShowText}>{textInScreen}</div>
      <div className={calculatorResult}>{showResult ? result : null}</div>
      <CalculatorKeyboard setScreen={(vl, ty) => handleObtainKey(vl, ty)} />
    </div>
  )
}

export default Calculator
