import CalculatorButton from './CalculatorButton'

export default {
  titel: 'Calculator/CalculatorButton',
  component: CalculatorButton,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
    type: { control: 'text' },
    content: { control: 'text' },
    expand: { control: 'boolean' },
  },
}

export const Default = {
  args: {
    type: 'number',
    content: '2',
  },
}

export const Number = {
  args: {
    type: 'number',
    content: '2',
  },
}

export const Zero = {
  args: {
    type: 'number',
    content: '0',
    expand: true,
  },
}

export const Operation = {
  args: {
    type: 'operation',
    content: '+',
  },
}

export const Equal = {
  args: {
    type: 'equal',
    content: '=',
  },
}

export const Other = {
  args: {
    type: '',
    content: '%',
  },
}
