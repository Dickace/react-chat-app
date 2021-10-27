import WellcomeHeader from '../../molecules/WellcomeHeader'
import LoginForm from '../../molecules/LoginForm'
import './style.scss'

const WellcomeArea = () => {
  return (
    <div className={'wellcomeArea'}>
      <WellcomeHeader />
      <LoginForm />
    </div>
  )
}
export default WellcomeArea
