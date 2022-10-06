import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeDepartmentAC, DepartmentType } from '../../redux/departmentsReducer';
import { AppStoreType } from '../../redux/store';
import style from './TabBar.module.css'
import Users from './Users';

function TabBar() {

  const department = useSelector<AppStoreType, string>(state => state.departments.department);
  const dispatch = useDispatch();
  const onChangeDepartment = (department: DepartmentType) => dispatch(changeDepartmentAC(department));

  const setAll = () => { onChangeDepartment('Все') }
  const setDesigners = () => { onChangeDepartment('Designers') }
  const setAnalysts = () => { onChangeDepartment('Analysts') }
  const setManagers = () => { onChangeDepartment('Managers') }
  const setiOS = () => { onChangeDepartment('iOS') }
  const setAndroid = () => { onChangeDepartment('Android') }

  //className for buttons
  const onAll = style.button + ' ' + (department === "Все" ? style.active : '')
  const onDesigners = style.button + ' ' + (department === "Designers" ? style.active : '')
  const onAnalysts = style.button + ' ' + (department === "Analysts" ? style.active : '')
  const onManagers = style.button + ' ' + (department === "Managers" ? style.active : '')
  const oniOS = style.button + ' ' + (department === "iOS" ? style.active : '')
  const onAndroid = style.button + ' ' + (department === "Android" ? style.active : '')

  return (
    <div>
      <div className={style.tabBar}>
        <button onClick={setAll} className={onAll}>Все</button>
        <button onClick={setDesigners} className={onDesigners}>Designers</button>
        <button onClick={setAnalysts} className={onAnalysts}>Analysts</button>
        <button onClick={setManagers} className={onManagers}>Managers</button>
        <button onClick={setiOS} className={oniOS}>iOS</button>
        <button onClick={setAndroid} className={onAndroid}>Android</button>
      </div>
      <Users />
    </div>
  )
}

export default TabBar;
