import WellcomeArea from '../../organisms/WellcomeArea'
import BeautifulBackground from '../../atoms/BeautifulBackground'
import BeautyBG from '../../../assets/img/beautyBackground.svg'
import './style.scss'

const LoginLayout = () => {
  return (
    <section className={'wellcomeTemplate'}>
      <article className={'loginContainer'}>
        <WellcomeArea />
      </article>
      <BeautifulBackground src={BeautyBG} alt={'BeautyBg'} />
    </section>
  )
}

export default LoginLayout
