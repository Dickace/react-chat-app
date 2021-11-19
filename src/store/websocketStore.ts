import { createEvent, createStore } from 'effector'

interface WebsocketStore {
  websocket?: WebSocket
}

export const setWebsocket = createEvent<WebSocket>()

export const $WebsocketStore = createStore<WebsocketStore>({}).on(
  setWebsocket,
  (state, websocket) => {
    const newState = state
    newState.websocket = websocket
    return newState
  }
)
