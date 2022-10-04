import React, { useState } from 'react';
import style from './SearchBar.module.css'

function SearchBar() {
  const [text, setText] = useState("");
  const handleChange = (event: any) => {
    setText(event.target.value);
  };
  return (
    <div className={style.searchLine}>
      <></>
    </div>
  );
}

export default SearchBar;
