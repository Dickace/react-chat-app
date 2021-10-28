import WellcomeArea from '../../organisms/WellcomeArea'
import BeautifulBackground from '../../atoms/BeautifulBackground'
import BeautyBG from '../../../assets/img/beautyBackground.svg'
import BeautyBGMobile from '../../../assets/img/beautyBackgroundMobile.svg'
import './style.scss'
import React from 'react'

interface LoginLayoutProps {
  handleLoginSubmit: (username: string, password: string) => void
}

const LoginLayout: React.FC<LoginLayoutProps> = ({ handleLoginSubmit }) => {
  let loginBg: string = BeautyBG
  console.log(window.matchMedia('(max-width: 768px)'))
  if (window.matchMedia('(max-width: 768px)').matches) {
    loginBg = BeautyBGMobile
  }
  return (
    <section className={'wellcomeTemplate'}>
      <article className={'loginContainer'}>
        <WellcomeArea handleLoginSubmit={handleLoginSubmit} />
      </article>
      <BeautifulBackground src={loginBg} alt={'BeautyBg'} />
    </section>
  )
}

export default LoginLayout
