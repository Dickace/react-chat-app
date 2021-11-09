import { IRegisterFormInputs } from '../components/molecules/RegisterForm'
import { SubmitHandler } from 'react-hook-form'
import { createEvent, createStore } from 'effector'

export interface RegisterFormStore {
  handleRegisterSubmit: SubmitHandler<IRegisterFormInputs>
  formError?: string
}
export const setRegisterError = createEvent<string>()
export const setHandleRegisterSubmit =
  createEvent<(data: IRegisterFormInputs) => void>()

export const $RegisterForm = createStore<RegisterFormStore>({
  handleRegisterSubmit: () => {
    return 0
  },
})
  .on(setRegisterError, (state, data) => {
    state.formError = data
  })
  .on(setHandleRegisterSubmit, (state, handler) => {
    state.handleRegisterSubmit = handler
  })
