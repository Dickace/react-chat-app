import React, { useState } from 'react'
import { IRegisterFormInputs, Option } from '../../molecules/RegisterForm'
import { UseFormRegisterReturn, UseFormSetValue } from 'react-hook-form'
import './style.scss'
import DropArrow from '../../../assets/img/droparrow.svg'
import { catchFileNameFromPath } from '../../../assets/additionalFuntions'

interface SelectorInputProps {
  optionList: Array<Option>
  registerInput: UseFormRegisterReturn
  msg?: string
  label?: string
  placeholder?: string
  setValue: UseFormSetValue<IRegisterFormInputs>
}

const SelectorInput: React.FC<SelectorInputProps> = ({
  optionList,
  registerInput,
  setValue,
  msg,
  label = 'Select Option',
  placeholder = 'Select Option',
}) => {
  const [option, setOption] = useState<string>('1')
  const [isClosed, setIsClosed] = useState<boolean>(true)
  const handleOptionClick = (event: React.MouseEvent<HTMLElement>) => {
    setIsClosed(true)
    const value = event.currentTarget.getAttribute('value')
    if (value) {
      setOption(value)
      setValue('gender_id', value)
    }
  }
  const handleOptionChange = (event: React.FormEvent<HTMLInputElement>) => {
    registerInput.onChange(event).then((result) => {
      const value = event.currentTarget.getAttribute('value')
      if (value) {
        event.currentTarget.value = value
      }
    })
  }
  const handleFakeInputClick = (event: React.MouseEvent<HTMLElement>) => {
    setIsClosed((prevState) => !prevState)
  }
  return (
    <div className="optionSelector">
      <label className="optionSelector-label">
        <p>{label}</p>
        <input
          className="optionSelector-fakeinput"
          placeholder={placeholder}
          onClick={handleFakeInputClick}
          readOnly
          value={
            optionList.find((element) => {
              if (element.id === option) {
                return element.name
              } else {
                return false
              }
            })?.name
          }
        />
        <input
          className="optionSelector-input"
          readOnly
          onChange={handleOptionChange}
          onBlur={registerInput.onBlur}
          ref={registerInput.ref}
          placeholder="Choose gender"
        />
      </label>
      <img
        className="optionSelector-dropicon"
        src={DropArrow}
        alt={catchFileNameFromPath(DropArrow)}
      />
      <ul
        className={`optionSelector-list ${
          isClosed
            ? 'optionSelector-list__closed'
            : 'optionSelector-list__opened'
        }`}
      >
        {optionList.map((value) => {
          return (
            <li
              className="optionSelector-element"
              key={value.id}
              onClick={handleOptionClick}
              value={value.id}
            >
              {value.name}
            </li>
          )
        })}
      </ul>
      {msg ? (
        <>
          <p className={`optionSelector-msg optionSelector-msg__error`}>
            {msg}
          </p>
        </>
      ) : null}
    </div>
  )
}
export default SelectorInput
