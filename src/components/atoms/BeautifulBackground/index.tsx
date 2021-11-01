import React from 'react'
import './style.scss'
import { catchFileNameFromPath } from '../../../assets/additionalFuntions'
import BeautyBG from '../../../assets/img/beautyBackground.svg'
import BeautyBGMobile from '../../../assets/img/beautyBackgroundMobile.svg'

const BeautifulBackground: React.FC = () => {
  let loginBg: string = BeautyBG
  if (window.matchMedia('(max-width: 768px)').matches) {
    loginBg = BeautyBGMobile
  }
  return (
    <img
      className="beautyBackground"
      src={loginBg}
      alt={catchFileNameFromPath(loginBg)}
    />
  )
}
export default BeautifulBackground
