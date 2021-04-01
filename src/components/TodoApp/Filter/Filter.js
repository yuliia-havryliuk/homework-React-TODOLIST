import React from 'react';
import style from './Filter.module.css';

const Filter = ({ value, onChange, changeMessage }) => {
  return (
    <label>
      Фільтруй:
      <input
        type="text"
        name=""
        value={value}
        onChange={onChange}
        className={style.filter}
        placeholder="Введіть літери..."
      />
    </label>
  );
};

export default Filter;
