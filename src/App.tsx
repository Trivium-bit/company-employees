import React from 'react';
import './App.css'
import DetailsPage from './pages/DetailsPage/DetailsPage';
import ErrorsPage from './pages/ErrorsPage/ErrorsPage';
import HomePage from './pages/MainPage/MainPage';

function App() {
  return (
    <div className="App">
      <HomePage />
      <DetailsPage />
      <ErrorsPage />
    </div>
  );
}

export default App;
