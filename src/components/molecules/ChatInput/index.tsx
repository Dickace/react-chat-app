import React, { useState } from 'react'
import SendIcon from '../../../assets/img/sendMessage.svg'
import PinIcon from '../../../assets/img/pinFile.svg'
import './style.scss'
import { catchFileNameFromPath } from '../../../assets/additionalFuntions'

interface ChatInputProps {
  onSubmit?: () => void
}

const ChatInput: React.FC<ChatInputProps> = ({ onSubmit }) => {
  const [inputMessage, setInputMessage] = useState<string>('')
  const handleMessageChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInputMessage(event.currentTarget.value)
  }
  return (
    <form className="chatInput" onSubmit={onSubmit}>
      <label>
        <img src={PinIcon} alt={catchFileNameFromPath(PinIcon)} />
        <input className="chatInput-file" type="file" />
      </label>
      <input
        className="chatInput-messageInput"
        placeholder="Write something..."
        value={inputMessage}
        onChange={handleMessageChange}
      />
      <label>
        <img src={SendIcon} alt={catchFileNameFromPath(SendIcon)} />
        <input className="chatInput-submit" type="submit" />
      </label>
    </form>
  )
}
export default ChatInput
