import { Icon } from '@iconify/react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../redux/store';
import style from './UserContactsPage.module.css'
import Moment from 'react-moment';
import 'moment/locale/ru';

function UserContactsPage() {

  const users = useAppSelector(state => state.users.users);
  const { userId } = useParams<string>();
  const user = users.find((u) => u.id === userId)
  const navigate = useNavigate();

  const buttonBackHandler = () => {
    navigate(`/`);
  }
  const nowDate = new Date()
  const dateToFormat = user?.birthday;

  let reg = /(\+7|8)[\s(]?(\d{3})[\s)]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})/g;
  let phoneNumber = user?.phone.replace(reg, '+7 ($2) $3 $4 $5'); 

  return (

    <div className={style.userContactsPage}>
      <div className={style.grayArea}>
        <Icon icon="mdi:arrow-left-circle-outline" className={style.backBtn} onClick={buttonBackHandler} />
        <div className={style.userDescription}>
          <img className={style.ava} src={user?.avatarUrl} />
          <div className={style.name}>{user?.firstName} {user?.lastName}</div>
          <div className={style.department}>{user?.department}</div>
          <div className={style.position}> {user?.position}</div>
        </div>
      </div>

      <div className={style.whiteArea}>
        <div className={style.ageContent}>
        <div className={style.dateOfBirthContainer}>
            <Icon icon="bytesize:star" color="#050510" width="20" height="20" />
            <div className={style.dateOfBirth}>
              <Moment format="D MMMM YYYY" locale="ru">
                {dateToFormat}
              </Moment>
            </div>
          </div>
          <div className={style.age}>  <Moment from={nowDate} ago locale="ru">
          {dateToFormat}
              </Moment></div>
              
        </div>
        
        <div>
          <hr className={style.hr}></hr>
        </div>
        <div className={style.call}>
          <Icon icon="fluent:call-32-regular" color="#050510" width="20" height="20" />
          <span><a className={style.phoneNumber} href={"tel:"+ phoneNumber }>{phoneNumber}</a></span>
        </div>
      </div>
    </div>
  );
}

export default UserContactsPage;
