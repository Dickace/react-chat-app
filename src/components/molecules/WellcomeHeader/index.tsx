import React from 'react'
import Text from '../../atoms/Text'
import './style.scss'
import AppLogo from '../../atoms/AppLogo'

interface WellcomeHeaderProps {
  headerText?: string
  underText?: string
  children?: React.ReactElement | string
}

const WellcomeHeader: React.FC<WellcomeHeaderProps> = ({
  headerText,
  underText,
  children,
}) => {
  return (
    <div className="wellcomeHeader">
      <AppLogo />
      <div className="wellcomeHeader-string">
        <Text text={`${headerText} `} type="1" isHeader />
        <Text text="Chatty" isHeader type="1" color="#5E93E7" />
        <Text text="!" isHeader type="1" color="#B3CDF8" />
      </div>
      <Text text={underText} isHeader type="2" />
    </div>
  )
}
export default WellcomeHeader
