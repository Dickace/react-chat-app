import AppLogo from '../../atoms/AppLogo'
import Avatar from '../../atoms/Avatar'
import './style.scss'
import AccountIcon from '../../../assets/img/accounticon.svg'
import React from 'react'

const AppHeader = () => {
  const AvatarStyle: React.CSSProperties = {
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
  }
  return (
    <header className="appheader">
      <AppLogo />
      <Avatar avatarImage={AccountIcon} style={AvatarStyle} />
    </header>
  )
}
export default AppHeader
