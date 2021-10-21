import React from 'react'
import './style.scss'
import InfoIcon from '../../../assets/img/info.svg'

type Props = {
  placeholder: string
  label: string
  type: string
  layoutType?: string
  style?: string
  msg?: string
  children?: React.ReactElement | string
}

const InputField: React.FC<Props> = ({
  placeholder = 'InputText',
  label = 'Input field',
  type = 'text',
  style,
  msg,
  children,
}) => {
  let inputClassName = 'inputField-input'
  let msgClassName = 'inputField-msg'
  if (style !== undefined) {
    inputClassName += ` inputField-input__${style}`
    msgClassName += ` inputField-msg__${style}`
  }
  return (
    <>
      <label className={'inputField'}>
        <span className={'inputField-label'}>{label}</span>
        <input
          className={inputClassName}
          type={type}
          placeholder={placeholder}
        />
        {msg ? (
          <>
            <img className={'inputField-msgIcon'} src={InfoIcon} alt={'none'} />
            <p className={msgClassName}>{msg}</p>
          </>
        ) : (
          <></>
        )}
      </label>
      {children}
    </>
  )
}
export default InputField
