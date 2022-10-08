import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import TabBar from '../../components/TabBar/TabBar';
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
