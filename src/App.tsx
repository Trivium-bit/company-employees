import React from 'react';
import './App.css'
import DetailsPage from './components/detailsPage/DetailsPage';
import ErrorsPage from './components/errorsPage/ErrorsPage';
import HomePage from './components/homePage/HomePage';

function App() {
  return (
    <div className="App">
      <HomePage/>
      <DetailsPage/>
      <ErrorsPage/>
    </div>
  );
}

export default App;
