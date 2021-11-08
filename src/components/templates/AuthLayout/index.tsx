import WellcomeArea from '../../organisms/WellcomeArea'
import BeautifulBackground from '../../atoms/BeautifulBackground'
import './style.scss'
import React, { ReactElement, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { SCREENS } from '../../../routes/endpoints'
import LoginForm from '../../molecules/LoginForm'
import RegisterFrom from '../../molecules/RegisterFrom'
import WellcomeHeader from '../../molecules/WellcomeHeader'

const AuthLayout: React.FC = () => {
  const path = useLocation()
  let authPage = <LoginForm />
  let authHeader = (
    <WellcomeHeader headerText="Sign Up to" underText="Registration" />
  )
  if (path.pathname === SCREENS.SCREEN_LOGIN) {
    authHeader = (
      <WellcomeHeader
        headerText="Wellcome to"
        underText="Please, authorize yourself"
      />
    )
    authPage = <LoginForm />
  } else if (path.pathname === SCREENS.SCREEN_REGISTER) {
    authHeader = (
      <WellcomeHeader headerText="Sign Up to" underText="Registration" />
    )
    authPage = <RegisterFrom />
  }
  return (
    <section className="wellcomeTemplate">
      <article className="loginContainer">
        <WellcomeArea authPage={authPage} authHeader={authHeader} />
      </article>
      <BeautifulBackground />
    </section>
  )
}

export default AuthLayout
