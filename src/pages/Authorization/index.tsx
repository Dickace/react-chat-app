import React, { useEffect, useState } from 'react'
import AuthLayout from '../../components/templates/AuthLayout'

import URLS from '../../ApiUrl.json'
import { useHistory } from 'react-router-dom'
import { SCREENS } from '../../routes/endpoints'
import { $LoginForm } from '../../store/loginFormStore'
import { IRegisterFormInputs } from '../../components/molecules/RegisterFrom'
import {
  setHandleRegisterSubmit,
  setRegisterError,
} from '../../store/registerFormStore'
import { getGenderList } from '../../assets/additionalFuntions'
import { setGenderList } from '../../store/genderListStore'
import { useStore } from 'effector-react'

const Authorization: React.FC = () => {
  const history = useHistory<History>()
  const loginStore = useStore($LoginForm)
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
  useEffect(() => {
    getGenderList()
      .then((response) => {
        setGenderList(response)
      })
      .catch((err) => {
        console.log(err)
      })
    setHandleRegisterSubmit(handleRegisterSubmit)
  }, [])
  useEffect(() => {
    console.log(loginStore.connectKey)
  }, [loginStore.connectKey])
  return <AuthLayout />
}
export default Authorization
