import './style.scss'

import DefaultAvatar from '../../../assets/img/defaultAvatar.svg'
import React from 'react'

interface AvatarProps {
  avatarImage?: string
  alt?: string
}

const Avatar: React.FC<AvatarProps> = ({
  avatarImage = DefaultAvatar,
  alt = 'none',
}) => {
  return <img className={'avatar'} src={avatarImage} alt={alt} />
}
export default Avatar
