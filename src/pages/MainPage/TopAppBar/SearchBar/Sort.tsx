import React, { useState } from 'react';
import style from './SearchBar.module.css'
import { Icon } from '@iconify/react';
import Modal from '../../../../components/Modal/Modal';
import Radio from '../../../../components/Radio/Radio';
import { useAppSelector } from '../../../../redux/store';

const Sort = () => {

  const arrSort = useAppSelector(state => state.users.arrSort);
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [value, onChangeOption] = useState(arrSort[0]);
  let date = new Date().toDateString()
  console.log(date)

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
