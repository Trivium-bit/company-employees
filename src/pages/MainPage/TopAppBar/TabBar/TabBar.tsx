import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeDepartmentAC, DepartmentType } from '../../../../redux/departments-reducer';
import { AppStoreType } from '../../../../redux/store';
import style from './TabBar.module.css';

function TabBar() {

  const department = useSelector<AppStoreType, string>(state => state.departments.department);
  const dispatch = useDispatch();
  const onChangeDepartment = (department: DepartmentType) => dispatch(changeDepartmentAC(department));

  const setAll = () => { onChangeDepartment('all') };
  const setDesigners = () => { onChangeDepartment('design') };
  const setAnalysts = () => { onChangeDepartment('analytics') };
  const setManagers = () => { onChangeDepartment('management') };
  const setiOS = () => { onChangeDepartment('ios') };
  const setAndroid = () => { onChangeDepartment('android') };

  //className for buttons
  const onAll = style.button + ' ' + (department === "all" ? style.active : '');
  const onDesigners = style.button + ' ' + (department === "design" ? style.active : '');
  const onAnalysts = style.button + ' ' + (department === "analytics" ? style.active : '');
  const onManagers = style.button + ' ' + (department === "management" ? style.active : '');
  const oniOS = style.button + ' ' + (department === "ios" ? style.active : '')
  const onAndroid = style.button + ' ' + (department === "android" ? style.active : '');

  return (
    <div>
      <div className={style.tabBar}>
        <button onClick={setAll} className={onAll}>All</button>
        <button onClick={setDesigners} className={onDesigners}>Designers</button>
        <button onClick={setAnalysts} className={onAnalysts}>Analysts</button>
        <button onClick={setManagers} className={onManagers}>Managers</button>
        <button onClick={setiOS} className={oniOS}>iOS</button>
        <button onClick={setAndroid} className={onAndroid}>Android</button>
      </div>
    </div>
  )
}

export default TabBar;
