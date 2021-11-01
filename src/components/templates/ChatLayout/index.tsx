import AppHeader from '../../organisms/AppHeader'
import UserList from '../../organisms/UserList'
import React from 'react'
import './style.scss'
import ChatArea from '../../organisms/ChatArea'
import { UserCardItem } from '../../molecules/UserCard'
import { MessageItem } from '../../molecules/Message'
import BeautyBG from '../../../assets/img/chatBeautyBackground.svg'
import Text from '../../atoms/Text'

interface ChatLayoutProps {
  ContactList: Array<UserCardItem>
  MessageList?: Array<MessageItem>
  chatId?: string
  chattingUser: UserCardItem
  isChatDisplay?: boolean
  handleBackClick?: () => void
  handleUserCardClick?: () => void
}

const ChatLayout: React.FC<ChatLayoutProps> = ({
  ContactList,
  MessageList,
  chatId,
  chattingUser,
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
        <UserList
          handleUserCardClick={handleUserCardClick}
          userList={ContactList}
        />
        <div className="chatContainer-chat" style={displayStyle}>
          {chatId !== undefined ? (
            <ChatArea
              handleBackClick={handleBackClick}
              chattingUser={chattingUser}
              messageList={MessageList}
            />
          ) : (
            <Text text="Select a chat to stray messaging" />
          )}
        </div>
      </section>
    </>
  )
}
export default ChatLayout
