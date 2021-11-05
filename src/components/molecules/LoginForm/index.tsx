import React, { useState } from 'react'
import InputField from '../../atoms/InputField'
import Button from '../../atoms/Button'
import './style.scss'
import Captcha from '../../atoms/Captcha'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Text from '../../atoms/Text'
import { $LoginForm } from '../../../store/loginForm'
import { useStore } from 'effector-react'

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
    login: yup.string().required(),
    password: yup.string().required(),
    captcha: yup.string().required(),
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
  const loginForm = useStore($LoginForm)

  const [userInputStyle, setUserInputStyle] = useState<string>('regular')
  const [passwordInputStyle, setPasswordInputStyle] =
    useState<string>('regular')

  return (
    <form
      className="loginForm"
      onSubmit={handleSubmit(loginForm.handleLoginSubmit)}
    >
      <div className="loginForm-inputGroup">
        <InputField
          handleChangeStyle={setUserInputStyle}
          msg={errors.login?.message}
          registerInput={register('login')}
          style={userInputStyle}
          placeholder="Input user name"
          label="User name"
        />
        <InputField
          handleChangeStyle={setPasswordInputStyle}
          msg={errors.password?.message}
          registerInput={register('password')}
          style={passwordInputStyle}
          placeholder="Input password"
          label="Input password"
          type="password"
        />
        <Captcha registerInput={register('captcha')} />
      </div>
      {children}
      {loginForm.formError ? (
        <Text text={loginForm.formError} color="red" />
      ) : null}
      <Button type="submit" text="Log in" />
    </form>
  )
}

export default LoginForm
