import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../redux/store';
import Users from './Users/Users';

import style from './UsersContainer.module.css';

function UsersContainer() {

  let users = useAppSelector(state => state.users.users);
  let department = useAppSelector(state => state.departments.department);

  let filterUsersForDepartment = users

  if (department === 'design') {
    filterUsersForDepartment = users.filter(t => t.department === "design")
  } else if (department === 'analytics') {
    filterUsersForDepartment = users.filter(t => t.department === "analytics")
  } else if (department === 'management') {
    filterUsersForDepartment = users.filter(t => t.department === "management")
  } else if (department === 'ios') {
    filterUsersForDepartment = users.filter(t => t.department === "ios")
  } else if (department === 'android') {
    filterUsersForDepartment = users.filter(t => t.department === "android")
  } else {
    filterUsersForDepartment = users
  }


  return (
    <>
      <div className={style.users}>
        {
          filterUsersForDepartment.map(u => {
            debugger
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