import WellcomeHeader from '../../molecules/WellcomeHeader'
import LoginForm from '../../molecules/LoginForm'
import './style.scss'
import React from 'react'

interface WellcomeAreaProps {
  handleLoginSubmit: (username: string, password: string) => void
}

const WellcomeArea: React.FC<WellcomeAreaProps> = ({ handleLoginSubmit }) => {
  return (
    <div className={'wellcomeArea'}>
      <WellcomeHeader />
      <LoginForm handleLoginSubmit={handleLoginSubmit} />
    </div>
  )
}
export default WellcomeArea
