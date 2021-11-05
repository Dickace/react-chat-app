import WellcomeHeader from '../../molecules/WellcomeHeader'
import LoginForm, { ILoginFormInputs } from '../../molecules/LoginForm'
import './style.scss'
import React from 'react'

const WellcomeArea: React.FC = () => {
  return (
    <div className="wellcomeArea">
      <WellcomeHeader />
      <LoginForm />
    </div>
  )
}
export default WellcomeArea
