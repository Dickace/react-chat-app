import React, { useState } from 'react'
import './style.scss'

export interface ButtonProps {
  children?: React.ReactElement | string
  text: string
  type?: string
  onClick?: (event: React.FormEvent<HTMLButtonElement>) => void
}

const Button: React.FC<ButtonProps> = ({
  text = '',
  type = 'regular',
  onClick,
  children,
}) => {
  return (
    <button
      type={'button'}
      className={`button button__${type}`}
      onClick={onClick}
    >
      {text}
      {children}
    </button>
  )
}

export default Button
