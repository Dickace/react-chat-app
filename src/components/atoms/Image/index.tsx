import React from 'react'
import { catchFileNameFromPath } from '../../../assets/additionalFuntions'
import './style.scss'

interface ImageProps {
  src: string
}

const Image: React.FC<ImageProps> = ({ src }) => {
  return <img className="image" src={src} alt={catchFileNameFromPath(src)} />
}
export default Image
