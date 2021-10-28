import React from 'react'
import './assets/additionalStyles/normalize.css'
import './App.css'
import Routes from './routes'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const clickHandler = () => {
    console.log('empty')
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      {/*<div>*/}
      {/*  <SpinLoader />*/}
      {/*</div>*/}
    </div>
  )
}

export default App
