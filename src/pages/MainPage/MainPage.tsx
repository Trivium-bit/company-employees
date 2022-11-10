import { useState } from "react";
import MainScreen from "./MainScreen";
import TopAppBar from "./TopAppBar/TopAppBar/TopAppBar";
import style from "./mainPage.module.css"

function MainPage() {

  return (
    <div className={style.mainPage}>
      <TopAppBar />
      <MainScreen />
    </div>
  );
}

export default MainPage;
