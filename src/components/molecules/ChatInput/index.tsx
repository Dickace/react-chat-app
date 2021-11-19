import React, { useState } from 'react'
import SendIcon from '../../../assets/img/sendMessage.svg'
import PinIcon from '../../../assets/img/pinFile.svg'
import './style.scss'
import { catchFileNameFromPath } from '../../../assets/additionalFuntions'
import { useStore } from 'effector-react'
import { $WebsocketStore } from '../../../store/websocketStore'
import { useParams } from 'react-router-dom'
import { $MyProfileDataStore } from '../../../store/myProfileDataStore'

const ChatInput: React.FC = () => {
  const [inputMessage, setInputMessage] = useState<string>('')
  const handleMessageChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInputMessage(event.currentTarget.value)
  }
  const { username } = useParams<{ username?: string }>()
  const myProfileDataStore = useStore($MyProfileDataStore)
  const websocketStore = useStore($WebsocketStore)
  const handleSendMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (inputMessage.length > 0) {
      const message = {
        type: 'chats',
        data: {
          text: inputMessage,
          files: [],
          usersender: myProfileDataStore.name,
          userreciver: username,
        },
      }
      console.log(JSON.stringify(message))
      websocketStore.websocket?.send(`"${JSON.stringify(message)}"`)
    }
  }
  return (
    <form className="chatInput" onSubmit={handleSendMessage}>
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
