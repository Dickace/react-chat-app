import WellcomeArea from '../../organisms/WellcomeArea'
import BeautifulBackground from '../../atoms/BeautifulBackground'
import './style.scss'
import React from 'react'

interface LoginLayoutProps {
  handleLoginSubmit: (username: string, password: string) => void
}

const LoginLayout: React.FC<LoginLayoutProps> = ({ handleLoginSubmit }) => {
  return (
    <section className="wellcomeTemplate">
      <article className="loginContainer">
        <WellcomeArea handleLoginSubmit={handleLoginSubmit} />
      </article>
      <BeautifulBackground />
    </section>
  )
}

export default LoginLayout
