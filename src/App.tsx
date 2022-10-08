import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import MainPage from './pages/MainPage/MainPage';
import UserСontactsPage from './pages/UserСontactsPage/UserСontactsPage';

export const PATH = {
  MAIN_PAGE: "/",
  USER_СONTACTS_PAGE: "/user-contacts-page",
  ERROR_PAGE: "/error-page",
  ANY_ROUTE: "*"

}

function App() {
  return (
    <>
      <Routes>
        <Route path={PATH.MAIN_PAGE} element={<MainPage />} />
        <Route path={PATH.USER_СONTACTS_PAGE} element={<UserСontactsPage />} />
        <Route path={PATH.ANY_ROUTE} element={<Navigate to={PATH.ERROR_PAGE}/>} />
      </Routes>
    </>
  );
}

export default App;
