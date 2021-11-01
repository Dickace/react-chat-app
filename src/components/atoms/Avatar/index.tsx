import './style.scss'

import DefaultAvatar from '../../../assets/img/defaultAvatar.svg'
import React from 'react'
import { catchFileNameFromPath } from '../../../assets/additionalFuntions'

interface AvatarProps {
  avatarImage?: string
  style?: React.CSSProperties
}

const Avatar: React.FC<AvatarProps> = ({
  avatarImage = DefaultAvatar,
  style,
}) => {
  return (
    <img
      style={style}
      className="avatar"
      src={avatarImage}
      alt={catchFileNameFromPath(avatarImage)}
    />
  )
}
export default Avatar
