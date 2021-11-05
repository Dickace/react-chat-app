import WellcomeArea from '../../organisms/WellcomeArea'
import BeautifulBackground from '../../atoms/BeautifulBackground'
import './style.scss'
import React from 'react'

const LoginLayout: React.FC = () => {
  return (
    <section className="wellcomeTemplate">
      <article className="loginContainer">
        <WellcomeArea />
      </article>
      <BeautifulBackground />
    </section>
  )
}

export default LoginLayout
