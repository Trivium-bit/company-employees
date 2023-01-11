import React from 'react';
import { Navigate, Route, Routes, useParams } from 'react-router-dom';
import './App.css'
import ErrorPage from './pages/MainPage/ErrorPage/ErrorPage';

import MainPage from './pages/MainPage/MainPage';
import UserСontactsPage from './pages/UserСontactsPage/UserContactsPage';

export const PATH = {
  MAIN_PAGE: "/",
  USER_PAGE: "/users/:userId",
  ERROR_PAGE: "/error-page",
}

function App() {

  return (
    <>
      <Routes>
        <Route path={PATH.MAIN_PAGE} element={<MainPage />} />
        <Route path={PATH.USER_PAGE} element={<UserСontactsPage />} />
        <Route path={PATH.ERROR_PAGE} element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
