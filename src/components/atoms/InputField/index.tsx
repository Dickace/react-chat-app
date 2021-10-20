import React from 'react'
import './style.scss'
import InfoIcon from '../../../assets/img/info.svg'

type Props = {
  placeholder: string
  label: string
  type: string
  layoutType?: string
  msg?: string
  children?: React.ReactElement | string
}

const InputField: React.FC<Props> = ({
  placeholder = 'InputText',
  label = 'Input field',
  type = 'text',
  msg,
  children,
}) => {
  let inputClassName = 'inputField-input'
  let msgClassName = 'inputField-msg'
  if (type !== '') {
    inputClassName += ` inputField-input__${type}`
    msgClassName += ` inputField-msg__${type}`
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
