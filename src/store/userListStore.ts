import { createEffect, createEvent, createStore } from 'effector'
import { UserCardItem } from '../components/molecules/UserCard'

export interface UserResponse {
  name: string
  gender: string
}

export const setUserStore = createEvent<Array<UserResponse>>()
export const removeUsersFromStore = createEvent<void>()
export const updateUsersStore = createEvent<WebSocket>()
export const updateUserSelect = createEvent<string>()

export const $userList = createStore<Array<UserCardItem>>([])
  .on(setUserStore, (state, users) => {
    const newState: Array<UserCardItem> = []
    users.map((user, index) => {
      const newUser: UserCardItem = {
        username: user.name,
        chatId: (index + 1).toString(),
        gender: user.gender,
        isSelected: false,
      }
      newState.push(newUser)
    })
    return newState
  })
  .on(removeUsersFromStore, (state) => {
    state.splice(0, state.length)
  })
  .on(updateUsersStore, (state: Array<UserCardItem>, webSocket: WebSocket) => {
    webSocket.send(JSON.stringify({ type: 'user_data' }))
    webSocket.send(JSON.stringify({ type: 'users_list' }))
  })
  .on(updateUserSelect, (state: Array<UserCardItem>, chatId: string) => {
    const newState: Array<UserCardItem> = state
    newState.find((element) => {
      element.isSelected = element.chatId === chatId
    })
    return newState
  })
