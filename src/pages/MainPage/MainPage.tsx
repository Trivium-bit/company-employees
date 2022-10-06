import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import TabBar from '../../components/TabBar/TabBar';
import style from './MainPage.module.css' 
import Users from './Users';

function MainPage() {
  return (
    <div className="">
    <div className={style.search}> Поиск </div>
     <SearchBar/>
     <TabBar/>
     <Users />
    </div>
  );
}

export default MainPage;
