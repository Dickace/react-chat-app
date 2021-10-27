import './style.scss'

import DefaultAvatar from '../../../assets/img/defaultAvatar.svg'
import React from 'react'

interface AvatarProps {
  avatarImage?: string
  alt?: string
  style?: React.CSSProperties
}

const Avatar: React.FC<AvatarProps> = ({
  avatarImage = DefaultAvatar,
  alt = 'none',
  style,
}) => {
  return <img style={style} className={'avatar'} src={avatarImage} alt={alt} />
}
export default Avatar
