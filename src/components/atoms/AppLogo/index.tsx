import ChatLogo from '../../../assets/img/chatlogo.svg'
import React from 'react'

interface AppLogoProps {
  alt?: string
}

const AppLogo: React.FC<AppLogoProps> = ({ alt = 'none' }) => {
  return <img className={'applogo'} src={ChatLogo} alt={alt} />
}
export default AppLogo
