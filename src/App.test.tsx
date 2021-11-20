import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import Button from './components/atoms/Button'
import Text from './components/atoms/Text'

test('render button', () => {
  render(<Button text="Log in" />)
  const textElement = screen.getByText(/Log in/i)
  expect(textElement).toBeInTheDocument()
})
test('render text', () => {
  render(<Text text="Some text" />)
  const textElement = screen.getByText(/Some text/i)
  expect(textElement).toBeInTheDocument()
})
