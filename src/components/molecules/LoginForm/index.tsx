import React, { useState } from 'react'
import Text from '../../atoms/Text'
import InputField from '../../atoms/InputField'
import Button from '../../atoms/Button'
import './style.scss'

interface LoginFormProps {
  onSubmit?: () => void
  children?: React.ReactElement | string
}

const LoginForm: React.FC<LoginFormProps> = (
  children,
  onSubmit = () => {
    return 0
  }
) => {
  const [userInputStyle, setUserInputStyle] = useState('regular')
  const [passwordInputStyle, setPasswordInputStyle] = useState('regular')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [usernameErrorMsg, setUsernameErrorMsg] = useState('')
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('')
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
      onSubmit()
    }
  }

  return (
    <form className={'loginForm'}>
      <Text text={'Please, authorize yourself'} header={true} type={'2'} />
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
      <Button onClick={handleClickLogin} text={'Log in'} />
    </form>
  )
}

export default LoginForm
