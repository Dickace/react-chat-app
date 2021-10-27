import React from 'react'
import UserCard, { UserCardItem } from '../../molecules/UserCard'
import Avatar from '../../atoms/Avatar'
import './style.scss'
import NoUserIcon from '../../../assets/img/nousericon.svg'
import Text from '../../atoms/Text'

interface UserListProps {
  userList?: Array<UserCardItem>
}

const NoUserIconStyle: React.CSSProperties = {
  height: '200px',
  width: '200px',
  borderRadius: '100px',
}

const UserList: React.FC<UserListProps> = ({ userList }) => {
  return (
    <>
      {' '}
      {userList ? (
        <div className="userList">
          {userList.map((value: UserCardItem, index: number) => {
            return (
              <UserCard key={`${value.username}${index}`} userCard={value} />
            )
          })}
        </div>
      ) : (
        <div className="userList userList__noUser">
          <Avatar avatarImage={NoUserIcon} style={NoUserIconStyle} />
          <Text text={'There is no other users yet'} size={'15px'} />
        </div>
      )}
    </>
  )
}

export default UserList
