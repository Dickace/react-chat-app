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
  state.name = user.name
  state.gender = user.gender
})
