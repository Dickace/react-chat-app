import React, { useState } from 'react'
import './style.scss'
import InfoIcon from '../../../assets/img/info.svg'
import { catchFileNameFromPath } from '../../../assets/additionalFuntions'
import { UseFormRegisterReturn } from 'react-hook-form'

type InputFieldsProps = {
  placeholder: string
  label: string
  type?: string
  msg?: string
  readonly?: boolean
  children?: React.ReactElement | string
  registerInput: UseFormRegisterReturn
}

const InputField: React.FC<InputFieldsProps> = ({
  placeholder = 'InputText',
  label = 'Input field',
  type = 'text',
  msg = '',
  readonly = false,
  children,
  registerInput,
}) => {
  const [inputStyle, setInputStyle] = useState<string>('regular')
  const handleBlurInput = () => {
    setInputStyle('regular')
  }
  const handleFocusInput = () => {
    setInputStyle('typing')
  }

  return (
    <>
      <label className="inputField">
        <span className="inputField-label">{label}</span>
        <input
          {...registerInput}
          className={`inputField-input inputField-input__${inputStyle}`}
          type={type}
          onFocus={handleFocusInput}
          onBlur={handleBlurInput}
          placeholder={placeholder}
          readOnly={readonly}
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
