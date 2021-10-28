import React from 'react'
import './style.scss'

interface BeautifulBackgroundProps {
  src?: string
  alt?: string
}

const BeautifulBackground: React.FC<BeautifulBackgroundProps> = ({
  src,
  alt = 'none',
}) => {
  return <img className={'beautyBackground'} src={src} alt={alt} />
}
export default BeautifulBackground
