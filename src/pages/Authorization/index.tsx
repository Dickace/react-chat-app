import React, { useEffect, useState } from 'react'
import AuthLayout from '../../components/templates/AuthLayout'

import URLS from '../../ApiUrl.json'
import { ILoginFormInputs } from '../../components/molecules/LoginForm'
import { useHistory } from 'react-router-dom'
import { SCREENS } from '../../routes/endpoints'
import { setHandleLoginSubmit, setLoginError } from '../../store/loginFormStore'
import { IRegisterFormInputs } from '../../components/molecules/RegisterFrom'
import {
  setHandleRegisterSubmit,
  setRegisterError,
} from '../../store/registerFormStore'
import { getGenderList } from '../../assets/additionalFuntions'
import { setGenderList } from '../../store/genderListStore'
import { updateUsersStore } from '../../store/userListStore'

const Authorization: React.FC = () => {
  const history = useHistory<History>()
  const handleRegisterSubmit = async (data: IRegisterFormInputs) => {
    const form: FormData = new FormData()
    form.append('login', data.login)
    form.append('password', data.password)
    form.append('password_confirm', data.password_confirm)
    form.append('name', data.name)
    form.append('gender_id', data.gender_id)
    form.append('captcha', data.captcha)
    const response = await fetch(`${URLS.API_URL}/api/auth/register`, {
      method: 'POST',
      body: form,
      credentials: 'include',
    })
    if (response.ok) {
      history.push(`${SCREENS.SCREEN_LOGIN}`)
    } else if (response.status == 400) {
      const responseBody = await response.text()
      setRegisterError(responseBody)
    }
  }
  const handleLoginSubmit = async (data: ILoginFormInputs) => {
    const form: FormData = new FormData()
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
  useEffect(() => {
    getGenderList()
      .then((response) => {
        setGenderList(response)
      })
      .catch((err) => {
        console.log(err)
      })
    setHandleRegisterSubmit(handleRegisterSubmit)
    setHandleLoginSubmit(handleLoginSubmit)
  }, [])

  return <AuthLayout />
}
export default Authorization
