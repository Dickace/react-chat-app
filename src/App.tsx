import React from 'react'
import './normalize.css'
import './App.css'
import LoginForm from './components/molecules/LoginForm'
import WellcomeHeader from './components/molecules/WellcomeHeader'
import Index from './components/organisms/WellcomeArea'
import Index from './components/templates/LoginLayout'
import Avatar from './components/atoms/Avatar'
import UserCard from './components/molecules/UserCard'
function App() {
  const clickHandler = () => {
    console.log('empty')
  }

  return (
    <div className="App">
      <UserCard selected={true} />
      <UserCard />
      <UserCard />
    </div>
  )
}

export default App
