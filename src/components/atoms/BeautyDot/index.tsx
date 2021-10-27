import React from 'react'
import CSS from 'csstype'

interface BeautyDotProps {
  height?: string
  width?: string
  color?: string
}

const BeautyDot: React.FC<BeautyDotProps> = ({
  height = '100%',
  width = '100%',
  color = '#31346B',
}) => {
  const svgStyle: CSS.Properties = {
    height: height,
    width: width,
    backgroundColor: color,
    borderRadius: `${
      height > width ? parseInt(height) / 2 : parseInt(width) / 2
    }px`,
  }
  return <div className={'beautydot'} style={svgStyle} />
}
export default BeautyDot
