import React from 'react';
import './App.css'
import DetailsPage from './pages/DetailsPage/DetailsPage';
import ErrorsPage from './pages/ErrorsPage/ErrorsPage';
import MainPage from './pages/MainPage/MainPage';
import TopAppBar from './pages/MainPage/TopAppBar';

function App() {
  return (
    <div className="App">
      <TopAppBar/>
      <MainPage />
      <DetailsPage />
    </div>
  );
}

export default App;
