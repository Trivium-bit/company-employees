import React, { useState } from 'react';
import style from './SearchBar.module.css'
import { Icon } from '@iconify/react';
import Input from '../../../../components/Input/Input';
import { useDispatch } from 'react-redux';
import { sortNameUpAC } from '../../../../redux/users-reducer';
import Modal from '../../../../components/Modal/Modal';

function SearchBar() {

  const [modalActive, setModalActive] = useState<boolean>(true)

  const dispatch = useDispatch()

  const handleSort = () => {
    dispatch(sortNameUpAC())
  }

  return (
    <div className={style.searchLine}>
      <div className={style.search}>
        <Icon icon="eva:search-fill" color="#c3c3c6" width="20" height="20" />
        <Input />
      </div>
      <div className={style.sort}>
        <Icon className={style.sortBtn} icon="material-symbols:sort-rounded" width="26" height="20" hFlip={true} onClick={() => { setModalActive(true) }} />
        <Modal active={modalActive} setActive={setModalActive} />
      </div>
    </div>
  );
}

export default SearchBar;
