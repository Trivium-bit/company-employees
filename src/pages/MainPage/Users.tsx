import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setUsersTC } from '../../redux/usersReducer';
import User from './User';
import style from './Users.module.css';


function Users() {

  const dispatch = useAppDispatch()
  const users = useAppSelector(state => state.users);
  const department = useAppSelector(state => state.departments.department)

  useEffect(() => {
    dispatch(setUsersTC(department))
  }, [department])

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