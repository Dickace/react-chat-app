import { createEvent, createStore } from 'effector'
import { UserResponse } from './userListStore'

export const setMyProfileDataStore = createEvent<UserResponse>()

export interface IMyProfileDataStore {
  name: string
  gender: string
}

export const $MyProfileDataStore = createStore<IMyProfileDataStore>(
  {} as IMyProfileDataStore
).on(setMyProfileDataStore, (state, user: UserResponse) => {
  console.log(user)
  const newState = { ...state }
  newState.name = user.name
  newState.gender = user.gender
  return newState
})
