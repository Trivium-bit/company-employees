import React, { useState } from 'react';
import style from './SearchBar.module.css'
import { Icon } from '@iconify/react';
import Input from '../Input/Input';

function SearchBar() {
  return (
    <div className={style.searchLine}>
      <div className={style.search}>
      <Icon icon="eva:search-fill" color="#c3c3c6" width="20" height="20" />
      <Input />
      </div>
      <div className={style.sort}>
      <Icon icon="material-symbols:sort-rounded" color="#c3c3c6" width="26" height="20" hFlip={true} />
      </div>
    </div>
  );
}

export default SearchBar;
