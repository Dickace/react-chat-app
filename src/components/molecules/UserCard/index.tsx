import React from 'react'
import Avatar from '../../atoms/Avatar'
import Text from '../../atoms/Text'
import './style.scss'
export type UserCardItem = {
  username: string
  recentMsg: string
  fromMe: boolean
  selected: boolean
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
    fromMe: false,
    selected: false,
    chatId: '0',
  },
  handleClickUserCard,
}) => {
  return (
    <div
      onClick={handleClickUserCard}
      data-selected={userCard.selected}
      className={`userCard`}
    >
      <Avatar avatarImage={userCard.avatar} />
      <div className={'userCard-textBlock'}>
        <Text text={userCard.username} header={true} type={'4'} />
        <div className={'userCard-msg'}>
          {userCard.fromMe ? (
            <Text
              text={'You:\u00A0'}
              type={'2'}
              color={userCard.selected ? '#FFFFFF' : '#5E93E7'}
            />
          ) : (
            <></>
          )}
          <Text text={userCard.recentMsg} type={'2'} />
        </div>
      </div>
    </div>
  )
}

export default UserCard
