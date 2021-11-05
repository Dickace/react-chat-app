import { createEvent, createStore } from 'effector'
import { ILoginFormInputs } from '../components/molecules/LoginForm'
import { SubmitHandler } from 'react-hook-form'

export interface LoginForm {
  handleLoginSubmit: SubmitHandler<ILoginFormInputs>
  formError?: string
}

export const setLoginError = createEvent<string>()
export const setHandleLoginSubmit =
  createEvent<(data: ILoginFormInputs) => void>()

export const $LoginForm = createStore<LoginForm>({
  handleLoginSubmit: () => {
    return 0
  },
})
  .on(setLoginError, (state, data) => {
    state.formError = data
  })
  .on(setHandleLoginSubmit, (state, handler) => {
    state.handleLoginSubmit = handler
  })
