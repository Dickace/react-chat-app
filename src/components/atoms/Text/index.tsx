import React from 'react'
import './style.scss'

interface TextProps {
  type?: string
  text?: string
  header?: boolean
  size?: string
  weight?: string
  color?: string
  children?: React.ReactElement | string
}

const Text: React.FC<TextProps> = ({
  header = false,
  type = '1',
  text = ' ',
  children,
  size,
  weight,
  color,
}) => {
  const styleText: React.CSSProperties = {}
  if (size !== undefined) {
    styleText.fontSize = size
  }
  if (weight !== undefined) {
    styleText.fontWeight = parseInt(weight)
  }
  if (color !== undefined) {
    styleText.color = color
  }
  return (
    <>
      {header ? (
        <p
          className={`textBlock-header textBlock-header__${type}`}
          style={styleText}
        >
          {text}
        </p>
      ) : (
        <p
          className={`textBlock-plain textBlock-plain__${type}`}
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
