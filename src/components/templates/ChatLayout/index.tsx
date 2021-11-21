import AppHeader from '../../organisms/AppHeader'
import UserList from '../../organisms/UserList'
import React from 'react'
import './style.scss'
import ChatArea from '../../organisms/ChatArea'
import BeautyBG from '../../../assets/img/chatBeautyBackground.svg'
import Text from '../../atoms/Text'

interface ChatLayoutProps {
  username?: string
  isChatDisplay?: boolean
  handleBackClick?: () => void
  handleUserCardClick?: React.MouseEventHandler<HTMLDivElement>
}

const ChatLayout: React.FC<ChatLayoutProps> = ({
  username,
  isChatDisplay,
  handleBackClick,
  handleUserCardClick,
}) => {
  const displayStyle: React.CSSProperties = {
    backgroundImage: `url(${BeautyBG})`,
  }
  const chatSlider: React.CSSProperties = {}
  if (isChatDisplay) {
    chatSlider.marginLeft = '-100%'
  } else {
    chatSlider.marginLeft = '0'
  }

  return (
    <>
      <AppHeader />
      <section style={chatSlider} className="chatContainer">
        <UserList handleUserCardClick={handleUserCardClick} />
        <div className="chatContainer-chat" style={displayStyle}>
          {username !== undefined ? (
            <ChatArea handleBackClick={handleBackClick} />
          ) : (
            <Text text="Select a chat to stray messaging" />
          )}
        </div>
      </section>
    </>
  )
}
export default ChatLayout
