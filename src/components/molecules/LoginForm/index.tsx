import React, { useState } from 'react'
import InputField from '../../atoms/InputField'
import Button from '../../atoms/Button'
import './style.scss'
import Captcha from '../../atoms/Captcha'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Text from '../../atoms/Text'
import { $LoginForm } from '../../../store/loginFormStore'
import { useStore } from 'effector-react'
import { useHistory } from 'react-router-dom'

interface LoginFormProps {
  children?: React.ReactElement | string
}

export interface ILoginFormInputs {
  login: string
  password: string
  captcha: string
}
const loginSchema = yup
  .object({
    login: yup.string().required('Login is required'),
    password: yup.string().required('Password is required'),
    captcha: yup
      .string()
      .required('Captcha is required')
      .min(5, 'Captcha has 5 characters')
      .max(5, 'Captcha has 5 characters'),
  })
  .required()

const LoginForm: React.FC<LoginFormProps> = ({ children = '' }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormInputs>({
    resolver: yupResolver(loginSchema),
  })
  const history = useHistory()
  const loginForm = useStore($LoginForm)

  const handleRegisterClick = () => {
    history.push('/signup')
  }
  return (
    <form
      className="loginForm"
      onSubmit={handleSubmit(loginForm.handleLoginSubmit)}
    >
      <div className="loginForm-inputGroup">
        <InputField
          msg={errors.login?.message}
          registerInput={register('login')}
          placeholder="Input user name"
          label="User name"
        />
        <InputField
          msg={errors.password?.message}
          registerInput={register('password')}
          placeholder="Input password"
          label="Input password"
          type="password"
        />
        <Captcha
          registerInput={register('captcha')}
          msg={errors.captcha?.message}
        />
      </div>
      {children}
      {loginForm.formError ? (
        <div className="loginForm-formError">
          <Text text={loginForm.formError} />
        </div>
      ) : null}
      <div className="loginForm-btnGroup">
        <Button type="submit" text="Log in" />
        <Button
          type="button"
          isLink
          text="Registration"
          onClick={handleRegisterClick}
        />
      </div>
    </form>
  )
}

export default LoginForm
