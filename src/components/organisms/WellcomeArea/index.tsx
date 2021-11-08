import WellcomeHeader from '../../molecules/WellcomeHeader'
import './style.scss'
import React, { ReactElement, SetStateAction, useState } from 'react'

interface WellcomeAreaProps {
  authPage: ReactElement
  authHeader: ReactElement
}

const WellcomeArea: React.FC<WellcomeAreaProps> = ({
  authPage,
  authHeader,
}) => {
  return (
    <div className="wellcomeArea">
      {authHeader}
      {authPage}
    </div>
  )
}
export default WellcomeArea
