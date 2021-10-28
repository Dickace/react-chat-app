import React, { useState } from 'react'
import Text from '../../atoms/Text'
import InputField from '../../atoms/InputField'
import Button from '../../atoms/Button'
import './style.scss'

interface LoginFormProps {
  handleLoginSubmit: (username: string, password: string) => void
  children?: React.ReactElement | string
}

const LoginForm: React.FC<LoginFormProps> = ({
  children = '',
  handleLoginSubmit,
}) => {
  const [userInputStyle, setUserInputStyle] = useState<string>('regular')
  const [passwordInputStyle, setPasswordInputStyle] =
    useState<string>('regular')
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [usernameErrorMsg, setUsernameErrorMsg] = useState<string>('')
  const [passwordErrorMsg, setPasswordErrorMsg] = useState<string>('')
  const handleChangeUsername = (event: React.FormEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value)
  }
  const handleChangePassword = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value)
  }
  const handleClickLogin = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault()
    let isValid = true
    if (username.length < 2) {
      setUserInputStyle('error')
      setUsernameErrorMsg('Must be more than two sign')
      isValid = false
    }
    if (password.length < 2) {
      setPasswordInputStyle('error')
      setPasswordErrorMsg('Must be more than two sign')
      isValid = false
    }
    if (isValid) {
      handleLoginSubmit(username, password)
    }
  }

  return (
    <form className={'loginForm'}>
      <div className={'loginForm-inputGroup'}>
        <InputField
          onChange={handleChangeUsername}
          handleStyleChange={setUserInputStyle}
          handleMsg={setUsernameErrorMsg}
          msg={usernameErrorMsg}
          style={userInputStyle}
          value={username}
          placeholder={'Input user name'}
          label={'User name'}
        />
        <InputField
          onChange={handleChangePassword}
          handleStyleChange={setPasswordInputStyle}
          handleMsg={setPasswordErrorMsg}
          msg={passwordErrorMsg}
          style={passwordInputStyle}
          value={password}
          placeholder={'Input password'}
          label={'Input password'}
          type={'password'}
        />
      </div>
      {children}
      <Button onClick={handleClickLogin} text={'Log in'} />
    </form>
  )
}

export default LoginForm
