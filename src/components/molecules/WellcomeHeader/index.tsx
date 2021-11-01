import React from 'react'
import Text from '../../atoms/Text'
import './style.scss'
import AppLogo from '../../atoms/AppLogo'

interface WellcomeHeaderProps {
  children?: React.ReactElement | string
}

const WellcomeHeader: React.FC<WellcomeHeaderProps> = (children) => {
  return (
    <div className="wellcomeHeader">
      <AppLogo />
      <div className="wellcomeHeader-string">
        <Text text="Wellcome to&nbsp;" type="1" isHeader />
        <Text text="Chatty" isHeader type="1" color="#5E93E7" />
        <Text text="!" isHeader type="1" color="#B3CDF8" />
      </div>
      <Text text="Please, authorize yourself" isHeader type="2" />
    </div>
  )
}
export default WellcomeHeader
