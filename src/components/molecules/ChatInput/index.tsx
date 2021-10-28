import React, { useState } from 'react'
import SendIcon from '../../../assets/img/sendMessage.svg'
import PinIcon from '../../../assets/img/pinFile.svg'
import './style.scss'

interface ChatInputProps {
  onSubmit?: () => void
}

const ChatInput: React.FC<ChatInputProps> = ({ onSubmit }) => {
  const [inputMessage, setInputMessage] = useState<string>('')
  const handleMessageChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInputMessage(event.currentTarget.value)
  }
  return (
    <form className={'chatInput'} onSubmit={onSubmit}>
      <label>
        <img src={PinIcon} alt={'pinIcon'} />
        <input className={'chatInput-file'} type={'file'} />
      </label>
      <input
        className={'chatInput-messageInput'}
        placeholder={'Write something...'}
        value={inputMessage}
        onChange={handleMessageChange}
      />
      <label>
        <img src={SendIcon} alt={'sendIcon'} />
        <input className={'chatInput-submit'} type={'submit'} />
      </label>
    </form>
  )
}
export default ChatInput
