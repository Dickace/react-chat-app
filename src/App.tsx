import React from 'react'
import './normalize.css'
import './App.css'
import Button from './components/atoms/Button'
import InputField from './components/atoms/InputField'
import Text from './components/atoms/Text'
function App() {
  const clickHandler = () => {
    console.log('empty')
  }

  return (
    <div className="App">
      <InputField
        placeholder={'Input username'}
        label={'User name'}
        type={'text'}
      />
      <InputField
        placeholder={'Input username'}
        label={'User name'}
        type={'text'}
        style={'typing'}
      />
      <InputField
        placeholder={'Input username'}
        label={'User name'}
        type={'text'}
        style={'error'}
        msg={'Something goes wrong'}
      />
      <Button text={'Log in'} onClick={clickHandler} />
      <Button text={'Log in'} type={'inactive'} onClick={clickHandler} />
      <Button text={'Log in'} type={'press'} onClick={clickHandler} />
      <Text text={'Header 1'} header={true} type={'1'} />
      <Text text={'Header 2'} header={true} type={'2'} />
      <Text text={'Header 3'} header={true} type={'3'} />
      <Text text={'Header 4'} header={true} type={'4'} />
      <Text text={'Text 1'} type={'1'} />
      <Text text={'Text 2'} type={'2'} />
      <Text text={'Header 1'} header={true} type={'1'} size={'27'} />
      <Text text={'Header 2'} header={true} type={'2'} size={'16'} />
      <Text text={'Header 3'} header={true} type={'3'} size={'15'} />
      <Text text={'Header 4'} header={true} type={'4'} size={'13'} />
      <Text text={'Text 1'} type={'1'} size={'14'} weight={'400'} />
      <Text text={'Text 2'} type={'2'} size={'13'} />
    </div>
  )
}

export default App
