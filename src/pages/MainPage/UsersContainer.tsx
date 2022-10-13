import React from 'react';
import { useAppSelector } from '../../redux/store';
import Users from './Users';
import style from './UsersContainer.module.css';

function UsersContainer() {

  const users = useAppSelector(state => state.users.users);

  return (
    <>
      <div className={style.users}>
        {
          users.map(u => {
            return <div key={u.id}>
              <Users
                avatarUrl={u.avatarUrl}
                firstName={u.firstName}
                lastName={u.lastName}
                userTag={u.userTag}
                department={u.department}
                position={u.position}
                birthday={u.birthday}
                phone={u.phone}
                id={u.id}
              />
            </div>
          })
        }
      </div>
    </>
  )
}

export default UsersContainer;