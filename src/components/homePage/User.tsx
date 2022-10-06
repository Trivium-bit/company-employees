import React from 'react';

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
    <div className="">

    </div>

  );
}
export default User;