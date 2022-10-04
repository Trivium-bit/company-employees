import React from 'react';
import ListOfWorkers from './ListOfWorkers';
import SearchBar from './SearchBar';
import TabBar from './TabBar';

function HomePage() {
  return (
    <div className="">
    <div className='h2'> Поиск </div>
     <SearchBar/>
     <TabBar/>
     <ListOfWorkers/>
    </div>
  );
}

export default HomePage;
