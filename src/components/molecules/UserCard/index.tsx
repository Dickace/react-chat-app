import React from 'react'
import Avatar from '../../atoms/Avatar'
import Text from '../../atoms/Text'
import './style.scss'
import maleIcon from '../../../assets/img/maleIcon.svg'
import femaleIcon from '../../../assets/img/femaleIcon.svg'
import unknownIcon from '../../../assets/img/nousericon.svg'

export type UserCardItem = {
  username: string
  gender: string
  recentMsg?: string
  isFromMe?: boolean
  isSelected: boolean
  avatar?: string
  chatId?: string
  lastSeen?: string
  isOnline?: boolean
}
export interface UserCardProps {
  userCard?: UserCardItem
  handleClickUserCard?: React.MouseEventHandler<HTMLDivElement>
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
  const avatarImage = () => {
    if (!userCard.avatar) {
      return userCard.avatar
    } else if (userCard.gender === 'male') {
      return maleIcon
    } else if (userCard.gender === 'female') {
      return femaleIcon
    } else {
      return unknownIcon
    }
  }
  return (
    <div
      onClick={handleClickUserCard}
      data-chatid={userCard.chatId}
      data-selected={userCard.isSelected}
      className={`userCard`}
    >
      <Avatar avatarImage={avatarImage()} />
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
