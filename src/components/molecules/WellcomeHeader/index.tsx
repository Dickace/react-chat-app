import React from 'react'
import Text from '../../atoms/Text'
import './style.scss'
import AppLogo from '../../atoms/AppLogo'

interface WellcomeHeaderProps {
  children?: React.ReactElement | string
}

const WellcomeHeader: React.FC<WellcomeHeaderProps> = (children) => {
  return (
    <div className={'wellcomeHeader'}>
      <AppLogo />
      <div className={'wellcomeHeader-string'}>
        <Text text={'Wellcome to\u00A0'} type={'1'} header={true} />
        <Text text={'Chatty'} header={true} type={'1'} color={'#5E93E7'} />
        <Text text={'!'} header={true} type={'1'} color={'#B3CDF8'} />
      </div>
    </div>
  )
}
export default WellcomeHeader