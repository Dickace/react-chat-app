import React from 'react'
import './style.scss'

export interface ButtonProps {
  children?: React.ReactElement | string
  text: string
  style?: string
  type?: 'button' | 'submit' | 'reset' | undefined
  onClick?: (event: React.FormEvent<HTMLButtonElement>) => void
}

const Button: React.FC<ButtonProps> = ({
  text,
  style = 'regular',
  onClick,
  type = 'button',
  children,
}) => {
  return (
    <button type={type} className={`button button__${style}`} onClick={onClick}>
      {text}
      {children}
    </button>
  )
}

export default Button
