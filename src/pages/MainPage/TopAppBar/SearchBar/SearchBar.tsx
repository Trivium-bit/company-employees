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
        <Icon className={style.searchIcon} icon="eva:search-fill" />
        <Input />
      </div>
      <div className={style.sort}>
        <Icon className={style.sortIcon} icon="material-symbols:sort-rounded" hFlip={true} onClick={() => { setModalActive(true) }} />

        <Modal active={modalActive} setActive={setModalActive}>
          <div className={style.contentModalWindow}>
            <div className={style.sortModal}>
              <div className={style.empty}></div>
              <div className={style.titleModal}>Сортировка</div>
              <Icon className={style.closeModal} icon="vaadin:close-circle"/>
              </div>
              <div className={style.sortBy}>По алфавиту</div>
              <div className={style.sortBy}>По дню рождения</div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default SearchBar;
