import React, { createRef, useEffect, useRef } from 'react'
import Message, { MessageItem } from '../../molecules/Message'
import Text from '../../atoms/Text'
import ChatHeader from '../../molecules/ChatHeader'
import ChatInput from '../../molecules/ChatInput'
import './style.scss'
import { UserCardItem } from '../../molecules/UserCard'

interface ChatAreaProps {
  messageList?: Array<MessageItem>
  chattingUser: UserCardItem
  handleSendMessage?: () => void
  handleBackClick?: () => void
}
const ChatArea: React.FC<ChatAreaProps> = ({
  messageList,
  children,
  handleSendMessage,
  chattingUser,
  handleBackClick,
}) => {
  const chatRef: React.RefObject<HTMLDivElement> = createRef<HTMLDivElement>()

  useEffect(() => {
    chatRef.current?.scrollTo(0, chatRef.current?.scrollHeight)
  }, [chattingUser.chatId])

  return (
    <div className="chatArea">
      <ChatHeader
        handleBackClick={handleBackClick}
        chattingUser={chattingUser}
      />
      <div
        ref={chatRef}
        className={`chatArea-messageList chatArea-messageList__${
          messageList?.length !== 0 ? 'withMsg' : 'noMsg'
        }`}
      >
        {messageList?.length !== 0 ? (
          messageList?.map((message: MessageItem, index: number) => {
            return (
              <Message key={`${message.text}${index}`} messageItem={message} />
            )
          })
        ) : (
          <Text text="Write first" />
        )}
      </div>
      {children}
      <ChatInput onSubmit={handleSendMessage} />
    </div>
  )
}

export default ChatArea
