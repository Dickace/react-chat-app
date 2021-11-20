import React, { useEffect, useState } from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useStore } from 'effector-react'
import { $RegisterForm } from '../../../store/registerFormStore'
import InputField from '../../atoms/InputField'
import Captcha from '../../atoms/Captcha'
import SelectorInput from '../../atoms/SelectorInput'
import { Gender } from '../../../assets/additionalFuntions'
import Text from '../../atoms/Text'
import Button from '../../atoms/Button'
import './style.scss'
import { useHistory } from 'react-router-dom'
import { $genderListStore, setGenderList } from '../../../store/genderListStore'

export type Option = {
  id: string
  name: string
}

export interface IRegisterFormInputs {
  login: string
  password: string
  password_confirm: string
  name: string
  gender_id: string
  captcha: string
}

const registerSchema = yup
  .object({
    login: yup.string().required('Login is required'),
    password: yup
      .string()
      .required('Password is required')
      .min(5, 'Password must be at least 5 characters'),
    password_confirm: yup
      .string()
      .required('Confirm password is required')
      .oneOf([yup.ref('password')], 'Password must match'),
    name: yup
      .string()
      .required('Name is required')
      .min(5, 'Name must be at least 5 characters'),
    gender_id: yup.string().required('Gender is required'),
    captcha: yup.string().required('Captcha is required'),
  })
  .required()

const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IRegisterFormInputs>({ resolver: yupResolver(registerSchema) })
  const registerForm = useStore($RegisterForm)
  const genderListStore = useStore($genderListStore)
  const [optionsList, setOptionList] = useState<Array<Option>>([
    { id: '0', name: 'default' },
  ])

  const history = useHistory()

  const handleLoginClick = () => {
    history.push('/login')
  }

  useEffect(() => {
    const genderArray: Array<Option> = []
    genderListStore.map((value: Gender) => {
      genderArray.push({
        id: value.id,
        name: value.gender[0].toUpperCase() + value.gender.slice(1),
      })
    })
    setOptionList(genderArray)
  }, [setGenderList])

  return (
    <form
      className="registerForm"
      onSubmit={handleSubmit(registerForm.handleRegisterSubmit)}
    >
      <div className="registerForm-inputGroup">
        <InputField
          placeholder="Input user name"
          label="Input user name"
          registerInput={register('login')}
          msg={errors.login?.message}
        />
        <InputField
          placeholder="Create password"
          label="Create password"
          registerInput={register('password')}
          msg={errors.password?.message}
          type="password"
        />
        <InputField
          placeholder="Password confirmation"
          label="Password confirmation"
          registerInput={register('password_confirm')}
          msg={errors.password_confirm?.message}
          type="password"
        />
        <InputField
          placeholder="Nickname"
          label="Nickname"
          registerInput={register('name')}
          msg={errors.name?.message}
        />
        <SelectorInput
          label="Your gender"
          placeholder="Your gender"
          optionList={optionsList}
          registerInput={register('gender_id')}
          setValue={setValue}
        />
        <Captcha
          registerInput={register('captcha')}
          msg={errors.captcha?.message}
        />
      </div>
      {registerForm.formError ? (
        <div className="registerForm-formError">
          <Text text={registerForm.formError} color="red" />
        </div>
      ) : null}
      <div className="registerForm-btnGroup">
        <Button type="submit" text="Sign up" />
        <Button type="button" isLink text="Log in" onClick={handleLoginClick} />
      </div>
    </form>
  )
}
export default RegisterForm
