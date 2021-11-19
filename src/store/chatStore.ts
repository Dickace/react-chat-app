import { MessageItem } from '../components/molecules/Message'
import { createEffect, createEvent, createStore } from 'effector'

export interface ChatItemStore {
  username?: string
  messages?: Array<MessageItem>
}

export const setMessages = createEvent<void>()

export const sendMessage = createEffect()

export const saveMessage = createEvent<MessageItem>()

export const $ChatStore = createStore<Array<ChatItemStore>>([])
  .on(setMessages, (state) => {
    let newState: Array<ChatItemStore> = state
    const localChats = localStorage.getItem('chats')
    if (localChats !== null) {
      newState = JSON.parse(localChats)
      return newState
    } else {
      localStorage.setItem('chats', JSON.stringify([] as Array<ChatItemStore>))
    }
  })
  .on(saveMessage, (state, message: MessageItem) => {
    const newState = [...state]
    const ChatItem = state.find((value) => {
      if (value.username === message.userName) {
        return value
      } else {
        return false
      }
    })
    if (ChatItem) {
      newState.forEach((value, index) => {
        if (value.username === message.userName) {
          value.messages?.push(message)
        }
      })
    } else {
      newState.push({
        username: message.userName,
        messages: [message],
      })
    }
    localStorage.setItem('chats', JSON.stringify(state))
    console.log(newState === state)
    return newState
  })
