import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import style from './HomePage.module.css' 
import Workers from './Workers';
import TabBar from './TabBar';

function HomePage() {
  return (
    <div className="">
    <div className={style.search}> Поиск </div>
     <SearchBar/>
     <TabBar/>
     <Workers/>
    </div>
  );
}

export default HomePage;
