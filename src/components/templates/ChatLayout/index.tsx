import AppHeader from '../../organisms/AppHeader'
import UserList from '../../organisms/UserList'
import React from 'react'
import './style.scss'
import ChatArea from '../../organisms/ChatArea'
import { UserCardItem } from '../../molecules/UserCard'
import { MessageItem } from '../../molecules/Message'

interface ChatLayoutProps {
  ContactList?: Array<UserCardItem>
  MessageList?: Array<MessageItem>
}

const ChatLayout: React.FC<ChatLayoutProps> = ({
  ContactList,
  MessageList,
}) => {
  return (
    <>
      <AppHeader />
      <section className={'chatContainer'}>
        <UserList userList={ContactList} />
        <ChatArea messageList={MessageList} />
      </section>
    </>
  )
}
export default ChatLayout
