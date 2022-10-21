import React, { useState } from 'react';
import style from './SearchBar.module.css'
import { Icon } from '@iconify/react';
import { useDispatch } from 'react-redux';
import { sortNameUpAC } from '../../../../redux/users-reducer';
import Modal from '../../../../components/Modal/Modal';
import Radio from '../../../../components/Radio/Radio';

const arrSort = ["По алфавиту", "По дню рождения"];

const Sort = () => {

  const [modalActive, setModalActive] = useState<boolean>(true)
  const [value, onChangeOption] = useState(arrSort[1]);

  const dispatch = useDispatch()

  const handleSort = () => {
    dispatch(sortNameUpAC())
  }

  return (
    <div className={style.sort}>
        <Icon className={style.sortIcon} icon="material-symbols:sort-rounded" hFlip={true} onClick={() => { setModalActive(true) }} />
        <Modal active={modalActive} setActive={setModalActive}>
          <div className={style.contentModalWindow}>
            <div className={style.sortModal}>
              <div className={style.empty}></div>
              <div className={style.titleModal}>Сортировка</div>
              <Icon className={style.closeModal} icon="zondicons:close-outline" onClick={() => { setModalActive(false) }}/>
              </div>
              <Radio
                    name={"radio"}
                    options={arrSort}
                    value={value}
                    onChangeOption={onChangeOption}
                />
          </div>
        </Modal>
      </div>
  );
}

export default Sort;
