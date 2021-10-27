import WellcomeHeader from '../../molecules/WellcomeHeader'
import LoginForm from '../../molecules/LoginForm'
import './style.scss'

const Index = () => {
  return (
    <div className={'wellcomeArea'}>
      <WellcomeHeader />
      <LoginForm />
    </div>
  )
}
export default Index
