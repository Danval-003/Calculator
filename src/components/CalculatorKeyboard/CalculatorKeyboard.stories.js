import CalculatorKeyboard from './CalculatorKeyboard'

export default {
  title: 'Calculator/CalculatorKeyboard',
  component: CalculatorKeyboard,
  tags: ['autodocs'],
  argTypes: {
    setScreen: { action: 'PressButton' },
  },
}

export const Default = {
  args: null,
}
