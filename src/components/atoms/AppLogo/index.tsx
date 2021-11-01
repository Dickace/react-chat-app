import ChatLogo from '../../../assets/img/chatlogo.svg'
import React from 'react'
import { catchFileNameFromPath } from '../../../assets/additionalFuntions'

const AppLogo: React.FC = () => {
  return (
    <img
      className="applogo"
      src={ChatLogo}
      alt={catchFileNameFromPath(ChatLogo)}
    />
  )
}
export default AppLogo
