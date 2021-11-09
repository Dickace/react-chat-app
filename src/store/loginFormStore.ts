import { createEffect, createStore } from 'effector'
import { ILoginFormInputs } from '../components/molecules/LoginForm'
import URLS from '../ApiUrl.json'
import { SCREENS } from '../routes/endpoints'

export interface LoginFormStore {
  formError?: string
  connectKey?: string
}

export const fetchLoginFx = createEffect<
  ILoginFormInputs,
  { status: number; text: string }
>(async (data) => {
  const form: FormData = new FormData()
  console.log(data)
  form.append('login', data.login)
  form.append('password', data.password)
  form.append('captcha', data.captcha)
  const response = await fetch(`${URLS.API_URL}/api/auth/login`, {
    method: 'POST',
    body: form,
    credentials: 'include',
  })

  if (response.ok) {
    return { status: response.status, text: await response.text() }
  } else if (response.status == 400) {
    return { status: response.status, text: await response.text() }
  } else {
    return { status: response.status, text: `Error: ${response.status}` }
  }
})

export const $LoginForm = createStore<LoginFormStore>({}).on(
  fetchLoginFx.doneData,
  (state, connectKey) => {
    const newState: LoginFormStore = state
    if (connectKey.status === 200) {
      localStorage.setItem('websocket', connectKey.text)
      window.location.pathname = SCREENS.SCREEN_CHAT
      newState.connectKey = connectKey.text
    } else {
      newState.formError = connectKey.text
    }
    return newState
  }
)
