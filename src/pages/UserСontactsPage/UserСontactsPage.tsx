import React, { useState } from 'react';
import { UserType } from '../../api/api';
import style from './UserСontactsPage.module.css'

function UserСontactsPage() {



  return (
    <div className={style.userContactsPage}>
      <div className={style.avaName}>
      <img />

      </div>
      <div className={style.age}> 
      <div className={style.birthday}>     </div>
      <div className={style.yearOfBirth}>    </div>
      </div>
      <div className={style.call}>     </div>
    </div>
  );
}

export default UserСontactsPage;
