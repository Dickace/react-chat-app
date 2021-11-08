import { createEvent, createStore } from 'effector'
import { Gender } from '../assets/additionalFuntions'

export interface genderListResponse {
  genders: Array<Gender>
}

export const setGenderList = createEvent<genderListResponse>()

export const $genderListStore = createStore<Array<Gender>>([]).on(
  setGenderList,
  (state, data) => {
    data?.genders.map((value) => {
      state.push(value)
    })
  }
)
