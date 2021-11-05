import React, { useEffect, useState } from 'react'
import { catchFileNameFromPath } from '../../../assets/additionalFuntions'
import { UseFormRegisterReturn } from 'react-hook-form'
import URLS from '../../../ApiUrl.json'

interface CaptchaProps {
  registerInput: UseFormRegisterReturn
}

const Captcha: React.FC<CaptchaProps> = ({ registerInput }) => {
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
    console.log(response.headers.has('Set-cookie'))
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
    <label>
      <span>Input captcha</span>
      <img src={captchaImg} alt={catchFileNameFromPath(captchaImg)} />
      <input {...registerInput} type="text" />
      <div onClick={handleRefreshCaptchaClick}>Refresh captcha</div>
    </label>
  )
}
export default Captcha
