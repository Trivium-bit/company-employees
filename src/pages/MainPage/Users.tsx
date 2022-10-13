import React from 'react';
import style from './Users.module.css'
import { useAppSelector } from '../../redux/store';
import { useNavigate } from 'react-router-dom';

type UserPropsType = {
  id: string
  avatarUrl: string,
  firstName: string,
  lastName: string,
  userTag: string,
  department: string,
  position: string,
  birthday: string,
  phone: string
}

function Users({id, avatarUrl, firstName, lastName, userTag, department, position, birthday, phone }: UserPropsType) { //деструктуризация props

  const status = useAppSelector(state => state.app.status)
  const navigate = useNavigate();

  const buttonHandlerRedirect = () => {
    navigate(`/users/${id}`);
  }

  if (status === 'loading') {
    return (
      <div className={style.users}>
        <div className={style.fotoIsLoading}></div>
        <div className={style.user}>
          <div className={style.nameIsLoading}></div>
          <div className={style.departmentIsLoading}></div>
        </div>
      </div>
    );
  }
  else {
    return (
      <div className={style.users} onClick={buttonHandlerRedirect}>
        <img className={style.foto} src={avatarUrl} alt={"ava"} />
        <div className={style.user}>
          <div className={style.name}> {firstName} {lastName} </div>
          <div className={style.department}> {department}</div>
        </div>
      </div>

    );
  }
}
export default Users;