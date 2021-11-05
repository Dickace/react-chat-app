import React, { useState } from 'react'
import LoginLayout from '../../components/templates/LoginLayout'

import URLS from '../../ApiUrl.json'
import { ILoginFormInputs } from '../../components/molecules/LoginForm'
import { useHistory } from 'react-router-dom'
import { SCREENS } from '../../routes/endpoints'
import { setHandleLoginSubmit, setLoginError } from '../../store/loginForm'

const Authorization: React.FC = () => {
  const history = useHistory<History>()

  const handleLoginSubmit = async (data: ILoginFormInputs) => {
    const form: FormData = new FormData()
    console.log(data.login, data.password, data.captcha)
    form.append('login', data.login)
    form.append('password', data.password)
    form.append('captcha', data.captcha)
    const response = await fetch(`${URLS.API_URL}/api/auth/login`, {
      method: 'POST',
      body: form,
      credentials: 'include',
    })

    if (response.ok) {
      const responseBody = await response.text()
      localStorage.setItem('websocket', responseBody)
      history.push(`${SCREENS.SCREEN_CHAT}`)
    } else if (response.status == 400) {
      const responseBody = await response.text()
      setLoginError(responseBody)
    }
  }
  setHandleLoginSubmit(handleLoginSubmit)

  return <LoginLayout />
}
export default Authorization
