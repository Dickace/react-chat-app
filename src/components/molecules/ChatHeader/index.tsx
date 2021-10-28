import React from 'react'
import Text from '../../atoms/Text'
import './style.scss'
import { UserCardItem } from '../UserCard'
import DefaultAvatar from '../../../assets/img/defaultAvatar.svg'
import Avatar from '../../atoms/Avatar'
import BackIcon from '../../../assets/img/backIcon.svg'

interface ChatHeaderProps {
  chattingUser?: UserCardItem
  handleBackClick?: () => void
}

const ChatHeader: React.FC<ChatHeaderProps> = ({
  chattingUser = {
    username: 'Marina Joe',
    isOnline: false,
    lastSeen: '3 minute ago',
    avatar: DefaultAvatar,
  },
  handleBackClick,
}) => {
  return (
    <div className={'chatHeader'}>
      <img onClick={handleBackClick} src={BackIcon} alt={'backIcon'} />
      <Avatar avatarImage={DefaultAvatar} />
      <div className={'chatHeader-nameAndStatus'}>
        <Text text={chattingUser.username} header={true} type={'3'} />
        <Text
          text={
            chattingUser.isOnline
              ? 'Online'
              : `Last seen ${chattingUser.lastSeen}`
          }
          color={'#949494'}
        />
      </div>
    </div>
  )
}
export default ChatHeader
