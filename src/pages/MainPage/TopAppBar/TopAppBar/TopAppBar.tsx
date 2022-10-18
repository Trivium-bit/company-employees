import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import TabBar from '../TabBar/TabBar';
import style from './TopAppBar.module.css';

function TopAppBar() {
  return (
    <div className="">
      <div className={style.search}> Поиск </div>
      <SearchBar />
      <TabBar />
      <hr className={style.hr}></hr>
    </div>
  );
}

export default TopAppBar;
