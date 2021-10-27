import React, { useState } from 'react'
import Avatar from '../../atoms/Avatar'
import Text from '../../atoms/Text'
import './style.scss'

interface UserCardProps {
  username?: string
  recentMsg?: string
  fromYou?: boolean
  selected?: boolean
}

const UserCard: React.FC<UserCardProps> = ({
  username = 'User name',
  recentMsg = 'Hey!',
  fromYou = false,
}) => {
  const [selected, setSelected] = useState(false)
  const handleClickUserCard = () => {
    setSelected(true)
  }
  return (
    <div
      onClick={handleClickUserCard}
      data-selected={selected}
      className={`userCard`}
    >
      <Avatar />
      <div className={'userCard-textBlock'}>
        <Text text={username} header={true} type={'4'} />
        <div>
          {fromYou ? (
            <Text
              text={'You:\u00A0'}
              type={'2'}
              color={selected ? '#5E93E7' : '#FFFFFF'}
            />
          ) : (
            <></>
          )}
          <Text text={recentMsg} type={'2'} />
        </div>
      </div>
    </div>
  )
}

export default UserCard
