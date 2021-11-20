import React from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { SCREENS } from './endpoints'
import Authorization from '../pages/Authorization'
import Chat from '../pages/Chat'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path={SCREENS.SCREEN_LOGIN} exact>
        <Authorization />
      </Route>
      <Route path={SCREENS.SCREEN_REGISTER} exact>
        <Authorization />
      </Route>
      <Route path={SCREENS.SCREEN_CHAT} exact>
        <Chat />
      </Route>
      <Route path={SCREENS.SCREEN_CONVERSATION}>
        <Chat />
      </Route>
      <Redirect to={SCREENS.SCREEN_LOGIN} />
    </Switch>
  )
}

export default withRouter(Routes)
