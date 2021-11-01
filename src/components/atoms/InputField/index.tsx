import React from 'react'
import './style.scss'
import InfoIcon from '../../../assets/img/info.svg'
import { catchFileNameFromPath } from '../../../assets/additionalFuntions'

type Props = {
  placeholder: string
  label: string
  type?: string
  layoutType?: string
  style?: string
  msg?: string
  value?: string
  handleStyleChange: (style: string) => void
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void
  handleMsg: (msg: string) => void
  children?: React.ReactElement | string
}

const InputField: React.FC<Props> = ({
  placeholder = 'InputText',
  label = 'Input field',
  type = 'text',
  style = 'regular',
  value = '',
  onChange,
  msg = '',
  children,
  handleStyleChange,
  handleMsg,
}) => {
  const handleFocus = () => {
    handleMsg('')
    handleStyleChange('typing')
  }
  const handleBlur = () => {
    handleMsg('')
    handleStyleChange('regular')
  }

  return (
    <>
      <label className="inputField">
        <span className="inputField-label">{label}</span>
        <input
          className={`inputField-input inputField-input__${style}`}
          value={value}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {msg ? (
          <>
            <img
              className="inputField-msgIcon"
              src={InfoIcon}
              alt={catchFileNameFromPath(InfoIcon)}
            />
            <p className={`inputField-msg inputField-msg__${style}`}>{msg}</p>
          </>
        ) : null}
      </label>
      {children}
    </>
  )
}
export default InputField
