import React, { useEffect, useState } from 'react'
import ChatLayout from '../../components/templates/ChatLayout'
import { Route, useParams } from 'react-router-dom'
import { UserCardItem } from '../../components/molecules/UserCard'
import { MessageItem } from '../../components/molecules/Message'
import { SCREENS } from '../../routes/endpoints'

const Chat: React.FC = () => {
  const { chatId } = useParams<{ chatId?: string }>()
  let id: string | undefined = chatId

  const [userListDisplay, setListDisplay] = useState<boolean>(true)
  const [chatAreaDisplay, setChatAreaDisplay] = useState<boolean>(true)

  const handleBackClick = () => {
    setChatAreaDisplay(false)
    setListDisplay(true)
  }

  const handleUserCardClick = () => {
    if (window.matchMedia('(max-width: 768px)').matches) {
      setChatAreaDisplay(true)
      setListDisplay(false)
    }
  }
  useEffect(() => {
    if (window.matchMedia('(max-width: 768px)').matches)
      setChatAreaDisplay(false)
  }, [])

  const User1: UserCardItem = {
    username: 'Konstantin Konstantinopolski',
    recentMsg: 'Hey!',
    fromMe: false,
    selected: false,
    chatId: '1',
    lastSeen: '6 minute ago',
    isOnline: false,
  }
  const User2: UserCardItem = {
    username: 'Marina Joe',
    recentMsg: 'Sed ut per...',
    fromMe: true,
    selected: false,
    chatId: '2',
    lastSeen: '3 minute ago',
    isOnline: true,
  }
  const User3: UserCardItem = {
    username: 'Ernest Gillroy',
    recentMsg: 'How are you doing?',
    fromMe: true,
    selected: false,
    chatId: '3',
    lastSeen: '2 minute ago',
    isOnline: false,
  }
  const User4: UserCardItem = {
    username: 'Konstantin Konstantinopolski',
    recentMsg: 'Hey!',
    fromMe: false,
    selected: false,
    chatId: '4',
    lastSeen: '3 minute ago',
    isOnline: true,
  }
  const Message1: MessageItem = {
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
    fromMe: false,
  }
  const Message2: MessageItem = {
    text: 'SeSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.  accusantium doloremque laudantium, totam re',
    fromMe: true,
  }
  const Message3: MessageItem = {
    text: 'SeSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    fromMe: false,
  }
  const Message4: MessageItem = {
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusanti',
    fromMe: true,
  }
  let MessageList: Array<MessageItem> = []
  let ChattingUser: UserCardItem = {
    username: 'Marina Joe',
    recentMsg: 'Sed ut per...',
    fromMe: true,
    selected: false,
    chatId: '2',
    lastSeen: '3 minute ago',
    isOnline: false,
  }
  const ContactList: Array<UserCardItem> = [User1, User2, User3, User4]
  ContactList.forEach((value) => {
    if (value.chatId === chatId) {
      value.selected = true
      ChattingUser = value
      return
    }
  })
  //async request here (pseudo code)
  //axios(`${API_URL}chats/${chatId}`,{headers: authHeader}).then((response)=>{ [].foreach(response, (value)=>{ Message.push({...})})})
  //axios(`${API_URL}contacts/`,{headers: authHeader}).then((response)=>{ [].foreach(response, (value)=>{ ContactList.push({...})})})
  switch (chatId) {
    case '1':
      MessageList = []
      break
    case '2':
      MessageList = [Message1, Message2]
      break
    case '3':
      MessageList = [Message1, Message2, Message3]
      break
    case '4':
      MessageList = [
        Message1,
        Message2,
        Message3,
        Message4,
        Message1,
        Message2,
        Message3,
        Message4,
      ]
      break
    default:
      MessageList = []
      id = undefined
      break
  }
  return (
    <ChatLayout
      handleUserCardClick={handleUserCardClick}
      handleBackClick={handleBackClick}
      chatAreaDisplay={chatAreaDisplay}
      userListDisplay={userListDisplay}
      chatId={id}
      chattingUser={ChattingUser}
      MessageList={MessageList}
      ContactList={ContactList}
    />
  )
}
export default Chat
