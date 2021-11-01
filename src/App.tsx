import React from 'react'
import 'normalize.css'
import './App.css'
import Routes from './routes'
import { BrowserRouter } from 'react-router-dom'

function App() {
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
