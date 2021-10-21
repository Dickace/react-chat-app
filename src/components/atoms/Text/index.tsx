import React from 'react'
import CSS from 'csstype'
import './style.scss'

interface Props {
  type?: string
  text?: string
  header?: boolean
  size?: string
  weight?: string
  children?: React.ReactElement | string
}

const Text: React.FC<Props> = ({
  header = false,
  type = '1',
  text = '',
  children,
  size,
  weight,
}) => {
  const styleText: CSS.Properties = {}
  if (size !== undefined) {
    styleText.fontSize = `${size}px`
  }
  if (weight !== undefined) {
    styleText.fontWeight = parseInt(weight)
  }
  return (
    <>
      {header ? (
        <p
          className={`TextBlock-header TextBlock-header__${type}`}
          style={styleText}
        >
          {text}
        </p>
      ) : (
        <p
          className={`TextBlock-plain TextBlock-plain__${type}`}
          style={styleText}
        >
          {text}
        </p>
      )}
      {children}
    </>
  )
}
export default Text
