import React from 'react';
import style from './User.module.css'
import foto from '../../assets/react.png';

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

  return (
    <div className={style.users}>
{/*       <img className={style.foto} src={avatarUrl} alt={"mainFoto"} /> */}
      <img className={style.foto} src={foto} alt={"mainFoto"} />
      <div className={style.name}> {firstName} {lastName}
      <div className={style.department}> {department}</div>
      </div>
 
    </div>

  );
}
export default User;