import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setUsersTC, sortNameAC } from '../../redux/users-reducer';
import ErrorPage from './ErrorPage/ErrorPage';
import NotFound from './NotFound/NotFound';
import style from './UsersContainer/Users/Users.module.css'

import UsersContainer from './UsersContainer/UsersContainer';

function MainScreen() {

  const dispatch = useAppDispatch()
  const department = useAppSelector(state => state.departments.department)
  const __dynamic = useAppSelector(state => state.departments.__dynamic)
  const status = useAppSelector(state => state.app.status)
  const users = useAppSelector(state => state.users.users)


  useEffect(() => {
    dispatch(setUsersTC(department, __dynamic))
  }, [dispatch, department, __dynamic])

  if (status === 'failed') {
    return (
      <ErrorPage />
    )
  } else if (status === 'loading') {
    return (
      <div className={style.users}>
        <div className={style.fotoIsLoading}></div>
        <div className={style.user}>
          <div className={style.nameIsLoading}></div>
          <div className={style.departmentIsLoading}></div>
        </div>
      </div>
    );
  } else if (users.length === 0) {
    return (
      <NotFound />
    );
  } else {
    return (
      <UsersContainer />
    );
  }
}

export default MainScreen;
