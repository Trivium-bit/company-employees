import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setUsersTC } from '../../redux/users-reducer';
import ErrorPage from './ErrorPage/ErrorPage';

import UsersContainer from './UsersContainer/UsersContainer';

function MainScreen() {

  const dispatch = useAppDispatch()
  const department = useAppSelector(state => state.departments.department)
  const __dynamic = useAppSelector(state => state.departments.__dynamic)
  const status = useAppSelector(state => state.app.status)


  useEffect(() => {
    dispatch(setUsersTC(department, __dynamic))
  }, [dispatch, department])

  if (status === 'failed') {
    return (
      <ErrorPage />
    )
  } else {
    return (
      <UsersContainer />
    );
  }
}

export default MainScreen;
