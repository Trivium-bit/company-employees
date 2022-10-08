import React from 'react';
import { useAppSelector } from '../../redux/store';
import User from './User';
import style from './Users.module.css';

function Users() {

  const users = useAppSelector(state => state.users);
  
    return (
    <>
      <div className={style.users}>
        {
          users.map(u => {
            return <div key={u.id}>
              <User
                avatarUrl={u.avatarUrl}
                firstName={u.firstName}
                lastName={u.lastName}
                userTag={u.userTag}
                department={u.department}
                position={u.position}
                birthday={u.birthday}
                phone={u.phone}
              />
            </div>
          })
        }
      </div>
    </>
  )
      }

export default Users;