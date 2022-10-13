import { Icon } from '@iconify/react';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../redux/store';
import style from './UserСontactsPage.module.css'

function UserСontactsPage() {

  const users = useAppSelector(state => state.users.users);
  const { userId } = useParams<string>();
  const user = users.find((u) => u.id === userId)

  const navigate = useNavigate();
  const buttonBackHandler = () => {
    navigate(`/`);
  }

  return (

    <div className={style.userContactsPage}>
      <div className={style.grayArea}>
        <Icon icon="dashicons:arrow-left-alt2" className={style.backBtn} onClick={buttonBackHandler} />
        <div className={style.userDescription}>
          <img className={style.ava} src={user?.avatarUrl} />
          <div className={style.name}>{user?.firstName} {user?.lastName}</div>
          <div className={style.department}>{user?.department}</div>
        </div>
      </div>

      <div className={style.whiteArea}>
        <div className={style.age}>
        <Icon icon="bytesize:star" color="#050510" width="20" height="20" />
          <div className={style.birthday}> {user?.birthday} </div>
          <div className={style.yearOfBirth}>    </div>
        </div>
        <div className={style.call}>
        <Icon icon="fluent:call-32-regular" color="#050510" width="20" height="20" />
         <div className={style.phoneNumber}> {user?.phone} </div>
         </div>
      </div>
    </div>
  );
}

export default UserСontactsPage;
