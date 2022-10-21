import React from 'react';
import style from './SearchBar.module.css'
import { Icon } from '@iconify/react';
import Input from '../../../../components/Input/Input';
import Sort from './Sort';

function SearchBar() {

  return (
    <div className={style.searchLine}>
      <div className={style.search}>
        <Icon className={style.searchIcon} icon="eva:search-fill" />
        <Input />
      </div>
      <Sort />
</div>
  );
}

export default SearchBar;
