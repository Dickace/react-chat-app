import React, { createRef, useEffect, useRef } from 'react'
import Message, { MessageItem } from '../../molecules/Message'
import Text from '../../atoms/Text'
import ChatHeader from '../../molecules/ChatHeader'
import ChatInput from '../../atoms/ChatInput'
import BeautyBG from '../../../assets/img/chatBeautyBackground.svg'
import './style.scss'

interface ChatAreaProps {
  messageList?: Array<MessageItem>
  children?: React.ReactElement
  username?: string
  lastSeen?: string
  isOnline?: boolean
  onSendMessage?: () => void
}
const ChatArea: React.FC<ChatAreaProps> = ({
  messageList,
  children,
  onSendMessage,
  username = 'Marina Joe',
  lastSeen = '3 minute ago',
  isOnline = false,
}) => {
  const chatRef: React.RefObject<HTMLDivElement> = createRef<HTMLDivElement>()
  useEffect(() => {
    chatRef.current?.scrollTo(0, chatRef.current?.scrollHeight)
  }, [])
  return (
    <div style={{ backgroundImage: `url(${BeautyBG})` }} className={'chatArea'}>
      <ChatHeader username={username} isOnline={isOnline} lastSeen={lastSeen} />
      <div ref={chatRef} className={'chatArea-messageList'}>
        {messageList ? (
          messageList?.map((message: MessageItem, index: number) => {
            return (
              <Message key={`${message.text}${index}`} messageItem={message} />
            )
          })
        ) : (
          <Text text={'Write first'} />
        )}
      </div>
      {children}
      <ChatInput onSubmit={onSendMessage} />
    </div>
  )
}

export default ChatArea
