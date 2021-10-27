import React from 'react'
import Text from '../../atoms/Text'
import './style.scss'

interface ChatHeaderProps {
  username?: string
  isOnline?: boolean
  lastSeen?: string
}

const ChatHeader: React.FC<ChatHeaderProps> = ({
  username,
  isOnline = true,
  lastSeen = 'now',
}) => {
  return (
    <div className={'chatHeader'}>
      <div className={'chatHeader-nameAndStatus'}>
        <Text text={username} header={true} type={'3'} />
        <Text
          text={isOnline ? 'Online' : `Last seen ${lastSeen}`}
          color={'#949494'}
        />
      </div>
    </div>
  )
}
export default ChatHeader
