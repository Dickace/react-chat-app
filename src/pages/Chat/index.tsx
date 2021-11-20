import React, { useEffect, useState } from 'react'
import ChatLayout from '../../components/templates/ChatLayout'
import { useHistory, useParams } from 'react-router-dom'
import { MessageItem } from '../../components/molecules/Message'
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
import { saveMessage, setMessages } from '../../store/chatStore'
import { setWebsocket } from '../../store/websocketStore'

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
  const { username } = useParams<{ username?: string }>()
  if (username) {
    updateUserSelect(username)
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
        'data-username'
      )}`
    )
  }

  useEffect(() => {
    if (window.matchMedia('(max-width: 768px)').matches) setIsChatDisplay(false)
    setMessages()
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
        let messageData = msg.data
        if (messageData === "Get param 'ws_id' - is wrong! Please relogin!") {
          history.push(`${SCREENS.SCREEN_LOGIN}`)
        } else if (
          messageData[0] === '"' &&
          messageData[messageData.length - 1]
        ) {
          messageData = msg.data.slice(1)
          messageData = messageData.slice(0, -1)
        }
        const decodeMsg = await JSON.parse(messageData)
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
        } else if (decodeMsg?.type === 'chats') {
          const message: MessageItem = {
            userName: decodeMsg.data.userreciver,
            files: decodeMsg.data.files,
            isFromMe: false,
            text: decodeMsg.data.text,
          }
          if (decodeMsg.data?.usersender === myProfileDataStore.name) {
            message.isFromMe = true
          } else if (decodeMsg.data?.userreciver === myProfileDataStore.name) {
            message.userName = decodeMsg.data?.usersender
          }
          saveMessage(message)
        }
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
    setWebsocket(websocket)
  }, [])

  return (
    <ChatLayout
      handleUserCardClick={handleUserCardClick}
      handleBackClick={handleBackClick}
      isChatDisplay={isChatDisplay}
      username={username}
    />
  )
}
export default Chat
