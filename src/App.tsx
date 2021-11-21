import React from 'react'
import 'normalize.css'
import './App.css'
import Routes from './routes'
import { BrowserRouter } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  )
}

export default App
