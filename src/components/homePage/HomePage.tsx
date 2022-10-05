import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import style from './HomePage.module.css' 
import TabBar from './TabBar';

function HomePage() {
  return (
    <div className="">
    <div className={style.search}> Поиск </div>
     <SearchBar/>
     <TabBar/>
    </div>
  );
}

export default HomePage;
