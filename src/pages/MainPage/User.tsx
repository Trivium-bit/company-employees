import React from 'react';
import style from './User.module.css'
import foto from '../../assets/react.png';
import { useAppSelector } from '../../redux/store';


type UserPropsType = {
  avatarUrl: string,
  firstName: string,
  lastName: string,
  userTag: string,
  department: string,
  position: string,
  birthday: string,
  phone: string
}

function User({ avatarUrl, firstName, lastName, userTag, department, position, birthday, phone }: UserPropsType) { //деструктуризация props
  const status = useAppSelector( state => state.app.status)

if (status === 'loading') {
  return (
    <div className={style.users}>
      <div className={style.fotoIsLoading}></div>
      <div className={style.user}>
      <div className={style.nameIsLoading}></div>
      <div className={style.departmentIsLoading }></div>
      </div>
    </div>
  );
}
else {
  return (
    <div className={style.users}>
      <img className={style.foto} src={foto} alt={"mainFoto"} />
      <div className={style.user}>
      <div className={style.name}> {firstName} {lastName}      </div>
      <div className={style.department}> {department}</div>
      </div>
    </div>

  );
}
}
export default User;