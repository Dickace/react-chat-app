import React, { useEffect, useState } from 'react'
import UserCard, { UserCardItem } from '../../molecules/UserCard'
import Avatar from '../../atoms/Avatar'
import './style.scss'
import NoUserIcon from '../../../assets/img/nousericon.svg'
import Text from '../../atoms/Text'
import { Link } from 'react-router-dom'
import { SCREENS } from '../../../routes/endpoints'
import { useStore } from 'effector-react'
import { $userList, updateUserSelect } from '../../../store/userListStore'

interface UserListProps {
  handleUserCardClick?: React.MouseEventHandler<HTMLDivElement>
}

const NoUserIconStyle: React.CSSProperties = {
  height: '200px',
  width: '200px',
  borderRadius: '100px',
}

const UserList: React.FC<UserListProps> = ({ handleUserCardClick }) => {
  const [userList, setUserList] = useState<Array<UserCardItem>>([])
  const userListStore = useStore($userList)
  useEffect(() => {
    setUserList(userListStore)
  }, [userListStore])
  return (
    <>
      {userList?.length !== 0 && userList ? (
        <div className="userList">
          {userList.map((value: UserCardItem, index: number) => {
            return (
              <UserCard
                key={`${value.username}${index}`}
                handleClickUserCard={handleUserCardClick}
                userCard={value}
              />
            )
          })}
        </div>
      ) : (
        <div className="userList userList__noUser">
          <Avatar avatarImage={NoUserIcon} style={NoUserIconStyle} />
          <Text text="There is no other users yet" size="15px" />
        </div>
      )}
    </>
  )
}

export default UserList
