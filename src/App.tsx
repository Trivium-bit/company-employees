import React from 'react';
import './App.css'
import DetailsPage from './components/DetailsPage/DetailsPage';
import ErrorsPage from './components/ErrorsPage/ErrorsPage';
import HomePage from './components/HomePage/HomePage';

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
