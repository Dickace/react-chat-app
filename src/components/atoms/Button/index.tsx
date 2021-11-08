import React from 'react'
import './style.scss'

export interface ButtonProps {
  children?: React.ReactElement | string
  text: string
  isLink?: boolean
  style?: string
  type?: 'button' | 'submit' | 'reset' | undefined
  onClick?: (event: React.FormEvent<HTMLButtonElement>) => void
}

const Button: React.FC<ButtonProps> = ({
  text,
  style = 'regular',
  onClick,
  isLink = false,
  type = 'button',
  children,
}) => {
  return (
    <button
      type={type}
      className={`button ${isLink ? 'button-link' : ''} ${
        isLink ? 'button-link' : 'button'
      }__${style}`}
      onClick={onClick}
    >
      {text}
      {children}
    </button>
  )
}

export default Button
