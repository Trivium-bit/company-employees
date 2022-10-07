import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setUsersTC } from '../../redux/users-reducer';
import ErrorPage from './ErrorPage';
import Users from './Users';

function MainPage() {
  
  const dispatch = useAppDispatch()
  const department = useAppSelector(state => state.departments.department)
  const __dynamic = useAppSelector(state => state.departments.__dynamic)
  const status = useAppSelector(state => state.app.status)

  useEffect(() => {
    dispatch(setUsersTC(department, '500', __dynamic))
  }, [dispatch, department])

  if (status === 'failed') {
    return (
      <ErrorPage />
    )
  } else {
    return (
      <Users />
    );
  }
}

export default MainPage;
