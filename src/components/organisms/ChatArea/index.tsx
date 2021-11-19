import React, { createRef, useEffect, useRef, useState } from 'react'
import Message, { MessageItem } from '../../molecules/Message'
import Text from '../../atoms/Text'
import ChatHeader from '../../molecules/ChatHeader'
import ChatInput from '../../molecules/ChatInput'
import './style.scss'
import { UserCardItem } from '../../molecules/UserCard'
import { useStore } from 'effector-react'
import { $ChatStore, saveMessage } from '../../../store/chatStore'
import { useParams } from 'react-router-dom'
import { $userList } from '../../../store/userListStore'

interface ChatAreaProps {
  handleBackClick?: () => void
}
const ChatArea: React.FC<ChatAreaProps> = ({ children, handleBackClick }) => {
  const chatRef: React.RefObject<HTMLDivElement> = createRef<HTMLDivElement>()

  const { username } = useParams<{ username?: string }>()

  const userListStore = useStore($userList)

  const chatStore = useStore($ChatStore)

  const [messages, setMessages] = useState<Array<MessageItem>>([])

  const [chattingUser, setChattingUser] = useState<UserCardItem | undefined>(
    userListStore.find((value) => {
      if (value.username === username) {
        return value
      } else {
        return false
      }
    })
  )

  useEffect(() => {
    setChattingUser(
      userListStore.find((value) => {
        if (value.username === username) {
          return value
        } else {
          return false
        }
      })
    )
  }, [username])

  useEffect(() => {
    chatRef.current?.scrollTo(0, chatRef.current?.scrollHeight)
  }, [username])

  useEffect(() => {
    const msgs = chatStore.find((value) => {
      if (value.username === username) {
        return value.messages
      } else {
        return false
      }
    })
    if (msgs?.messages) {
      setMessages(msgs.messages)
    } else {
      setMessages([])
    }
  }, [chatStore, username])

  return (
    <div className="chatArea">
      <ChatHeader
        handleBackClick={handleBackClick}
        chattingUser={chattingUser}
      />

      <div
        ref={chatRef}
        className={`chatArea-messageList chatArea-messageList__${
          messages?.length !== 0 ? 'withMsg' : 'noMsg'
        }`}
      >
        {messages?.length !== 0 ? (
          messages?.map((message: MessageItem, index: number) => {
            return (
              <Message key={`${message.text}${index}`} messageItem={message} />
            )
          })
        ) : (
          <Text text="Write first" />
        )}
      </div>
      {children}
      <ChatInput />
    </div>
  )
}

export default ChatArea
