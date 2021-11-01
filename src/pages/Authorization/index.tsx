import React from 'react'
import LoginLayout from '../../components/templates/LoginLayout'
import { useHistory } from 'react-router-dom'
import { SCREENS } from '../../routes/endpoints'

const Authorization: React.FC = () => {
  const history = useHistory()

  const handleLoginSubmit = (username: string, password: string) => {
    history.push(`${SCREENS.SCREEN_CHAT}`, { from: `${SCREENS.SCREEN_LOGIN}` })
  }

  return <LoginLayout handleLoginSubmit={handleLoginSubmit} />
}
export default Authorization
