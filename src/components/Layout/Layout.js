import s from './Layout.module.css';
import React from 'react';

const Layout = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default Layout;
