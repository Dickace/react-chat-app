import React, { useState } from 'react'
import './style.scss'

export interface Props {
  children?: React.ReactElement | string
  text: string
  type?: string
  onClick?: () => void
}

const Button: React.FC<Props> = ({
  text = '',
  type = '',
  onClick,
  children,
}) => {
  const [hover, setHover] = useState('')
  let buttonClassName = 'button'
  if (type !== '') {
    buttonClassName += ` button__${type}`
  }
  const onMouseLeaveHandler = () => {
    setHover('')
  }
  const onMouseOverHandler = () => {
    setHover('button__hover')
  }
  return (
    <button
      type={'button'}
      className={`${buttonClassName} ${hover}`}
      onClick={onClick}
      onMouseLeave={onMouseLeaveHandler}
      onMouseEnter={onMouseOverHandler}
    >
      {text}
      {children}
    </button>
  )
}

export default Button
