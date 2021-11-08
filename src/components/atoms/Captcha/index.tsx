import React, { useEffect, useState } from 'react'
import { catchFileNameFromPath } from '../../../assets/additionalFuntions'
import { UseFormRegisterReturn } from 'react-hook-form'
import URLS from '../../../ApiUrl.json'
import './style.scss'
import refreshIcon from '../../../assets/img/refresh.svg'

interface CaptchaProps {
  registerInput: UseFormRegisterReturn
  msg?: string
}

const Captcha: React.FC<CaptchaProps> = ({ registerInput, msg }) => {
  const [captchaImg, setCaptchaImg] = useState<string>('')

  const handleRefreshCaptchaClick = () => {
    fetchCaptcha().catch((err) => {
      console.log(err)
    })
  }
  const fetchCaptcha = async () => {
    const response = await fetch(`${URLS.API_URL}/api/auth/captcha`, {
      method: 'GET',
      credentials: 'include',
    })
    if (response.ok) {
      const imgBlob = await response.blob()
      setCaptchaImg(URL.createObjectURL(imgBlob))
    } else {
      return `Error: ${response.status}`
    }
  }
  useEffect(() => {
    fetchCaptcha().catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <div className="captcha">
      <label className="captcha-input">
        <span className="captcha-label">Security code</span>
        <input
          className="captcha-inputField"
          {...registerInput}
          type="text"
          placeholder="Security code"
        />
        {msg ? <p className="captcha-msg captcha-msg__error">{msg}</p> : null}
      </label>
      <div className="captcha-refresh">
        <img
          className="captcha-image"
          src={captchaImg}
          alt={catchFileNameFromPath(captchaImg)}
        />
        <img
          className="captcha-refreshIcon"
          onClick={handleRefreshCaptchaClick}
          src={refreshIcon}
          alt={catchFileNameFromPath(refreshIcon)}
        />
      </div>
    </div>
  )
}
export default Captcha
