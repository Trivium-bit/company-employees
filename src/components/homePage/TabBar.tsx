import React, { useState } from 'react';
import style from './TabBar.module.css'
import Workers from './Workers';

export type DepartmentType = 'Все' | 'Designers' | 'Analysts' | 'Managers' | 'iOS' | 'Android';

function TabBar() {

  const [department, setDepartment] = useState<DepartmentType>('Все')

  const setAll = () => { setDepartment('Все') }
  const setDesigners = () => { setDepartment('Designers') }
  const setAnalysts = () => { setDepartment('Analysts') }
  const setManagers = () => { setDepartment('Managers') }
  const setiOS = () => { setDepartment('iOS') }
  const setAndroid = () => { setDepartment('Android') }

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
      <Workers />
    </div>
  )
}

export default TabBar;
