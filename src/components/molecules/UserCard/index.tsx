import React from 'react'
import Avatar from '../../atoms/Avatar'
import Text from '../../atoms/Text'
import './style.scss'
export type UserCardItem = {
  username: string
  recentMsg: string
  isFromMe: boolean
  isSelected: boolean
  avatar?: string
  chatId?: string
  lastSeen?: string
  isOnline?: boolean
}
export interface UserCardProps {
  userCard?: UserCardItem
  handleClickUserCard?: () => void
}

const UserCard: React.FC<UserCardProps> = ({
  userCard = {
    username: 'User name',
    recentMsg: 'Hey!',
    isFromMe: false,
    selected: false,
    chatId: '0',
  },
  handleClickUserCard,
}) => {
  return (
    <div
      onClick={handleClickUserCard}
      data-selected={userCard.isSelected}
      className={`userCard`}
    >
      <Avatar avatarImage={userCard.avatar} />
      <div className="userCard-textBlock">
        <Text text={userCard.username} isHeader type="4" />
        <div className="userCard-msg">
          {userCard.isFromMe ? (
            <Text
              text="You:&nbsp;"
              type="2"
              color={userCard.isSelected ? '#FFFFFF' : '#5E93E7'}
            />
          ) : null}
          <Text text={userCard.recentMsg} type="2" />
        </div>
      </div>
    </div>
  )
}

export default UserCard
