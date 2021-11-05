import React from 'react'
import './style.scss'
import InfoIcon from '../../../assets/img/info.svg'
import { catchFileNameFromPath } from '../../../assets/additionalFuntions'
import { UseFormRegisterReturn } from 'react-hook-form'

type InputFieldsProps = {
  handleChangeStyle: (state: string) => void
  placeholder: string
  label: string
  type?: string
  style?: string
  msg?: string
  children?: React.ReactElement | string
  registerInput: UseFormRegisterReturn
}

const InputField: React.FC<InputFieldsProps> = ({
  placeholder = 'InputText',
  label = 'Input field',
  type = 'text',
  style = 'regular',
  msg = '',
  children,
  registerInput,
  handleChangeStyle,
}) => {
  const handleBlurInput = () => {
    handleChangeStyle('regular')
  }
  const handleFocusInput = () => {
    handleChangeStyle('typing')
  }

  return (
    <>
      <label className="inputField">
        <span className="inputField-label">{label}</span>
        <input
          {...registerInput}
          className={`inputField-input inputField-input__${style}`}
          type={type}
          onFocus={handleFocusInput}
          onBlur={handleBlurInput}
          placeholder={placeholder}
        />
        {msg ? (
          <>
            <img
              className="inputField-msgIcon"
              src={InfoIcon}
              alt={catchFileNameFromPath(InfoIcon)}
            />
            <p className={`inputField-msg inputField-msg__error`}>{msg}</p>
          </>
        ) : null}
      </label>
      {children}
    </>
  )
}
export default InputField
