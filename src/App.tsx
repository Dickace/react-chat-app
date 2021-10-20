import React, { useState } from 'react'
import './normalize.css'
import './App.css'
import Button from './components/atoms/Button'
import InputField from './components/atoms/InputField'

function App() {
  const [type, setType] = useState('')

  const clickHandler = () => {
    console.log('empty')
  }

  return (
    <div className="App">
      <InputField
        placeholder={'Input username'}
        label={'User name'}
        type={'typing'}
        msg={''}
      />
      <Button text={'Log in'} type={'inactive'} onClick={clickHandler} />
    </div>
  )
}

export default App
