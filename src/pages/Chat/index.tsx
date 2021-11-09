import React, { useEffect, useState } from 'react'
import ChatLayout from '../../components/templates/ChatLayout'
import { useHistory, useParams } from 'react-router-dom'
import { UserCardItem } from '../../components/molecules/UserCard'
import { MessageItem } from '../../components/molecules/Message'
import { File } from '../../components/atoms/FileIcon'
import Picture from '../../assets/img/Vasserman_logo.jpg'
import Gachi from '../../assets/img/gachi-fist.gif'
import Aska from '../../assets/img/evangelion-smug.gif'
import Rick from '../../assets/img/funny-animals.gif'
import { SCREENS } from '../../routes/endpoints'
import {
  $userList,
  removeUsersFromStore,
  setUserStore,
  updateUserSelect,
  updateUsersStore,
  UserResponse,
} from '../../store/userListStore'
import { setGenderList } from '../../store/genderListStore'
import URLS from '../../ApiUrl.json'
import { useStore } from 'effector-react'
import { getGenderList } from '../../assets/additionalFuntions'
import {
  $MyProfileDataStore,
  setMyProfileDataStore,
} from '../../store/myProfileDataStore'

const Chat: React.FC = () => {
  const history = useHistory()
  const userListStore = useStore($userList)
  const myProfileDataStore = useStore($MyProfileDataStore)
  let connectKey: string | null = null
  if (localStorage.getItem('websocket') === undefined) {
    history.push(`${SCREENS.SCREEN_LOGIN}`)
  } else {
    connectKey = localStorage.getItem('websocket')
    if (connectKey) {
      connectKey = connectKey.replaceAll('"', '')
    } else {
      history.push(`${SCREENS.SCREEN_LOGIN}`)
    }
  }
  const { chatId } = useParams<{ chatId?: string }>()
  let id: string | undefined = chatId
  if (chatId) updateUserSelect(chatId)
  let ChattingUser: UserCardItem = {
    username: 'Name',
    gender: 'Male',
    isSelected: false,
  }

  const [isChatDisplay, setIsChatDisplay] = useState<boolean>(false)

  const handleBackClick = () => {
    setIsChatDisplay(false)
    history.push(`${SCREENS.SCREEN_CHAT}/0`)
  }

  const handleUserCardClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia('(max-width: 768px)').matches) {
      setIsChatDisplay(true)
    }
    history.push(
      `${SCREENS.SCREEN_CHAT}/${event.currentTarget.getAttribute(
        'data-chatid'
      )}`
    )
  }

  useEffect(() => {
    if (window.matchMedia('(max-width: 768px)').matches) setIsChatDisplay(false)
    getGenderList()
      .then((response) => {
        setGenderList(response)
      })
      .catch((err) => {
        console.log(err)
      })
    const websocket = new WebSocket(
      `${URLS.WS_URL}/?type=test&ws_id=${connectKey}`
    )
    websocket.onmessage = async function (msg) {
      try {
        if (msg.data === "Get param 'ws_id' - is wrong! Please relogin!") {
          history.push(`${SCREENS.SCREEN_LOGIN}`)
        }
        const decodeMsg = await JSON.parse(msg.data)
        if (decodeMsg?.type === 'users_list') {
          removeUsersFromStore()
          decodeMsg?.data.forEach(
            (
              value: UserResponse,
              index: number,
              array: Array<UserResponse>
            ) => {
              if (
                value.name === myProfileDataStore.name &&
                value.gender === myProfileDataStore.gender
              ) {
                array.splice(index, 1)
              }
            }
          )
          setUserStore(decodeMsg?.data)
        } else if (decodeMsg?.type === 'user_data') {
          setMyProfileDataStore(decodeMsg?.data)
        }
        userListStore.forEach((value) => {
          if (value.chatId === chatId) {
            value.isSelected = true
            ChattingUser = value
            return
          }
        })
      } catch (e) {
        console.log(e)
      }
    }
    websocket.onopen = () => {
      updateUsersStore(websocket)
    }
    websocket.onclose = () => {
      removeUsersFromStore()
      localStorage.removeItem('websocket')
    }
  }, [])

  //Ducks start
  // const User1: UserCardItem = {
  //   username: 'Konstantin Konstantinopolski',
  //   recentMsg: 'Hey!',
  //   isFromMe: false,
  //   isSelected: false,
  //   chatId: '1',
  //   lastSeen: '6 minute ago',
  //   isOnline: false,
  // }
  // const User2: UserCardItem = {
  //   username: 'Marina Joe',
  //   recentMsg: 'Sed ut per...',
  //   isFromMe: true,
  //   isSelected: false,
  //   chatId: '2',
  //   lastSeen: '3 minute ago',
  //   isOnline: true,
  // }
  // const User3: UserCardItem = {
  //   username: 'Ernest Gillroy',
  //   recentMsg: 'How are you doing?',
  //   isFromMe: true,
  //   isSelected: false,
  //   chatId: '3',
  //   lastSeen: '2 minute ago',
  //   isOnline: false,
  // }
  // const User4: UserCardItem = {
  //   username: 'Konstantin Konstantinopolski',
  //   recentMsg: 'Hey!',
  //   isFromMe: false,
  //   isSelected: false,
  //   chatId: '4',
  //   lastSeen: '3 minute ago',
  //   isOnline: true,
  // }
  const file1: File = {
    filename: 'File_for_exampl0011232555234.doc',
    fileSize: '4.2 MB',
    fileFormat: 'doc',
    filePreview: '',
  }
  const file2: File = {
    filename: 'Vasserman_logo',
    fileSize: '2 MB',
    fileFormat: 'jpg',
    filePreview: Picture,
  }
  const file3: File = {
    filename: 'За ФСУ',
    fileSize: '4.2 MB',
    fileFormat: 'gif',
    filePreview: Gachi,
  }
  const file4: File = {
    filename: '',
    fileSize: '2 MB',
    fileFormat: 'gif',
    filePreview: Aska,
  }
  const file5: File = {
    filename: 'Cacth',
    fileSize: '2 MB',
    fileFormat: 'gif',
    filePreview: Rick,
  }
  const Message1: MessageItem = {
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
    isFromMe: false,
    files: [],
  }
  const Message2: MessageItem = {
    text: 'SeSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.  accusantium doloremque laudantium, totam re',
    isFromMe: true,
    files: [],
  }
  const Message3: MessageItem = {
    text: 'SeSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    isFromMe: false,
    files: [],
  }
  const Message4: MessageItem = {
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusanti',
    isFromMe: true,
    files: [],
  }
  const Message5: MessageItem = {
    text: '',
    isFromMe: true,
    files: [file1],
  }
  const Message7: MessageItem = {
    text: '',
    isFromMe: false,
    files: [file3, file4, file5],
  }
  const Message6: MessageItem = {
    text: '',
    isFromMe: true,
    files: [file2],
  }
  let MessageList: Array<MessageItem> = []
  // let ChattingUser: UserCardItem = {
  //   username: 'Marina Joe',
  //   recentMsg: 'Sed ut per...',
  //   isFromMe: true,
  //   isSelected: false,
  //   chatId: '2',
  //   lastSeen: '3 minute ago',
  //   isOnline: false,
  // }
  // const ContactList: Array<UserCardItem> = [User1, User2, User3, User4]
  // //Ducks end

  //async request here (pseudo code)
  //axios(`${API_URL}chats/${chatId}`,{headers: authHeader}).then((response)=>{ [].foreach(response, (value)=>{ Message.push({...})})})
  //axios(`${API_URL}contacts/`,{headers: authHeader}).then((response)=>{ [].foreach(response, (value)=>{ ContactList.push({...})})})
  switch (chatId) {
    case '1':
      MessageList = []
      break
    case '2':
      MessageList = [Message1, Message2, Message3, Message5]
      break
    case '3':
      MessageList = [Message1, Message7, Message2, Message3, Message6]
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
      isChatDisplay={isChatDisplay}
      chatId={id}
      chattingUser={ChattingUser}
      MessageList={MessageList}
    />
  )
}
export default Chat
